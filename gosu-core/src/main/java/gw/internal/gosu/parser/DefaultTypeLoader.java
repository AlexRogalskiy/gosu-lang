/*
 * Copyright 2014 Guidewire Software, Inc.
 */

package gw.internal.gosu.parser;

import gw.config.ExecutionMode;
import gw.fs.IDirectory;
import gw.internal.gosu.compiler.GosuClassLoader;
import gw.internal.gosu.parser.java.classinfo.JavaSourceClass;
import gw.lang.parser.IBlockClass;
import gw.lang.reflect.IDefaultTypeLoader;
import gw.lang.reflect.IErrorType;
import gw.lang.reflect.IExtendedTypeLoader;
import gw.lang.reflect.IType;
import gw.lang.reflect.RefreshKind;
import gw.lang.reflect.RefreshRequest;
import gw.lang.reflect.SimpleTypeLoader;
import gw.lang.reflect.TypeSystem;
import gw.lang.reflect.gs.IGosuClassLoader;
import gw.lang.reflect.gs.IGosuObject;
import gw.lang.reflect.gs.ISourceFileHandle;
import gw.lang.reflect.gs.TypeName;
import gw.lang.reflect.java.IJavaClassInfo;
import gw.lang.reflect.java.IJavaClassType;
import gw.lang.reflect.java.IJavaType;
import gw.lang.reflect.java.JavaTypes;
import gw.lang.reflect.java.asm.AsmClass;

import java.net.URL;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import manifold.internal.runtime.Bootstrap;


import static gw.lang.reflect.TypeSystem.getModule;

public class DefaultTypeLoader extends SimpleTypeLoader implements IExtendedTypeLoader, IDefaultTypeLoader {
  private ClassCache _classCache;
  private IGosuClassLoader _gosuClassLoader;            //## todo: use a ConcurrentWeakValueHashMap here?
  private Map<String, IJavaClassInfo> _classInfoCache = new ConcurrentHashMap<>( 1000 );
  protected Set<String> _namespaces;

  public static DefaultTypeLoader instance() {
    return ExecutionEnvironment.instance().getModule().getModuleTypeLoader().getTypeLoader(DefaultTypeLoader.class);
  }

  public DefaultTypeLoader() {
    _classCache = new ClassCache();
  }

  @Override
  public IType getType(String fullyQualifiedName) {
    IJavaClassInfo classInfo = getJavaClassInfo( fullyQualifiedName );
    if (classInfo != null) {
      return JavaType.create(classInfo);
    } else {
      return null;
    }
  }

  @SuppressWarnings("WeakerAccess")
  public IJavaType getInnerType( String fqn) {
    IType cachedType = ((ModuleTypeLoader) getModule().getModuleTypeLoader()).getCachedType( fqn );
    if (cachedType != null && !(cachedType instanceof IErrorType)) {
      return (IJavaType) cachedType;
    } else {
      return (IJavaType) getType(fqn);
    }
  }

  public IJavaClassInfo getJavaClassInfo(String fullyQualifiedName) {
    if (fullyQualifiedName.startsWith("[")) {
      throw new IllegalArgumentException("Cannot call getJavaClassInfo with a raw array descriptor");
    }

    // strip off all trailing array brackets "[]"
    String fqnNoArrays = ModuleTypeLoader.stripArrayBrackets(fullyQualifiedName);

    IJavaClassInfo result = _classInfoCache.get(fqnNoArrays);
    if (result == null) {
      result = resolveJavaClassInfo(fqnNoArrays);
      if (result == null) {
        result = IJavaClassInfo.NULL_TYPE;
      }
      _classInfoCache.put(fqnNoArrays, result);
    }
    if( result != IJavaClassType.NULL_TYPE ) {
      int numArrays = (fullyQualifiedName.length() - fqnNoArrays.length()) / 2;
      for( int i = 0; i < numArrays; i++ )
      {
        result = result.getArrayType();
      }
    }
    return result == IJavaClassInfo.NULL_TYPE ? null : result;
  }

  @Override
  public IJavaClassInfo getJavaClassInfoForClassDirectly( Class clazz ) {
    return new ClassJavaClassInfo(clazz);
  }

  public IJavaClassInfo getJavaClassInfo( Class aClass ) {
    String fullyQualifiedName = aClass.getName().replace('$', '.');
    IJavaClassInfo result = _classInfoCache.get( fullyQualifiedName );
    if( result == null ) {
      result = new ClassJavaClassInfo( aClass );
      _classInfoCache.put( fullyQualifiedName, result );
    }
    return result == IJavaClassInfo.NULL_TYPE ? null : result;
  }

  public IJavaClassInfo getJavaClassInfo( AsmClass aClass ) {
    String fullyQualifiedName = aClass.getName().replace('$', '.');
    IJavaClassInfo result = _classInfoCache.get( fullyQualifiedName );
    if( result == null ) {
      result = new AsmClassJavaClassInfo( aClass );
      _classInfoCache.put( fullyQualifiedName, result );
    }
    return result == IJavaClassInfo.NULL_TYPE ? null : result;
  }

  public IJavaClassInfo resolveJavaClassInfo( String fqn )
  {
    // We can load IJavaClassInfo from .class file or from .java file.
    //
    // In addition to loading bytecode directly by .class file,
    // we can also load bytecode indirectly by .java file via dynamic compilation.
    //
    // How does this work?
    //
    // - .class file
    // -- if there is a .class file for the name for the fqn, we load either using
    // --- ASM, which is only done during compilation or in an IDE, or using
    // --- class loading, which is done only at runtime
    //
    // - .java file
    // -- if there is a .java source file for the fqn, our Gosu URL handler intervenes
    //    with the primary class loader and dynamically compiles the .java file and
    //    and serves it up as if it were loaded from disk.  This is only done at
    //    runtime.
    //
    // If there is a .java file on disk for the type, Standard Gosu always loads
    // classinfo from source as JavaSourceType (both in IDE/compiler and runtime).
    // However the class loader still dynamically compiles the java source
    // in the course of running a program.  Likewise, JavaSourceType leverages
    // this in its implementation of getBackingClass(), which simply call Class.forName()
    // to dynamically compile the source via our class loading transmogrifier.
    //
    //                              JavaClassInfo
    //                                    +
    //                 +------------------+-----------------+
    //                 |                                    |
    //                 v                                    v
    //          Bytecode-based                         Source-based
    //                 +                                    +
    //       +---------+---------+                          |
    //       |                   |                          |
    //       v                   v                          |
    // ASM Processing       Class loading                   |
    //       +                   +                          |
    //       |            +------+------+            +------+-----+
    //       |            |             |            |            |
    //       v            v             v            v            v
    //  .class file   .class file  .java file   .java file    .gs file (!)
    //                                  +            +            +
    //                                  |            |            |
    //                                  v            v            v
    //                               Dynamic    Java parser   Gosu Stub
    //                               compiler                   file
    //
    // (!) Note Java from .gs file supports the use-case where a Java source file
    // references a Gosu class e.g., in a method return type.  Gosu needs to get
    // the type info at the *IJavaClassInfo* level for the the Gosu class.

    if( !ExecutionMode.isIDE() && classFileExists( fqn ) )
    {
      // If not in an IDE, favor .class files as the basis for Java types.
      //
      // Note since we can dynamically compile and load a Java class from Java source and since this process can
      // be triggered via the class loader, we must avoid loading it via getByClass(), which will indirectly load
      // the bytecode class via source.
      //
      // We avoid this at runtime for the use-case where we are running both a Gosu class and a Java class from
      // source.  The Java class extends the Gosu class (the Gosu class may be generic) and the Gosu class references
      // the Java class in one of its member declaration types.
      //
      // Essentially, in order for Java and Gosu to reference each other in this way Gosu we must parse against our
      // declaration-level source-based IJavaClassInfo, not the full bytecode class-based IJavaClasaInfo.
      // Otherwise the bytecode IJavaClassInfo resolves Gosu references via on-demand Java stub file generation from
      // declaration-compiled Gosu, which won't work since declaration-compiled Gosu needs the IJavaClassInfo for
      // the Java class reference.  The source-based IJavaClassInfo can resolve type references using lazy Java
      // stub files generated from Gosu and avoid this paradox.

      return getByClass( fqn );
    }

    // First check for a .java file and load a JavaSourceType...
    ISourceFileHandle fileHandle = getSourceFileHandle( fqn );
    if( fileHandle == null )
    {
      // If no .java file is found, load from .class file
      return getByClass( fqn );
    }

    if( fileHandle.getParentType() != null && !fileHandle.getParentType().isEmpty() )
    {
      String parentType = fileHandle.getTypeNamespace();
      IJavaClassInfo parentClassInfo = getJavaClassInfo( parentType );
      if( parentClassInfo == null )
      {
        return null;
      }
      IJavaClassInfo[] declaredClasses = parentClassInfo.getDeclaredClasses();
      IJavaClassInfo inner = null;
      for( IJavaClassInfo declaredClass : declaredClasses )
      {
        String name = declaredClass.getName();
        // cache all inner classes now
        if( !_classInfoCache.containsKey( name ) )
        {
          _classInfoCache.put( name, declaredClass );
        }
        //## todo: these names should be consistent
        if( fqn.equals( name ) || name.replace( '$', '.' ).equals( fqn ) )
        {
          inner = declaredClass;
        }
      }
      return inner;
    }

    return JavaSourceClass.createTopLevel( fileHandle );
  }

  @Override
  public ISourceFileHandle getSourceFileHandle(String qualifiedName) {
    ISourceFileHandle aClass = getModule().getFileRepository().findClass(qualifiedName, EXTENSIONS_ARRAY);
    if (aClass == null || !aClass.getClassType().isJava()) {
      return null;
    }
    return aClass;
  }

  private IJavaClassInfo getByClass( String className ) {
    DefaultTypeLoader loader = (DefaultTypeLoader)getModule().getTypeLoaders( IDefaultTypeLoader.class ).get( 0 );
    if( ExecutionMode.isRuntime() ) {
      Class theClass = loader.loadClass( className );
      if( theClass == null ) {
        return null;
      }
      return getJavaClassInfo( theClass );
    } else {
      AsmClass theClass = loader.loadAsmClass( className );
      if( theClass == null ) {
        return null;
      }
      return getJavaClassInfo( theClass );
    }
  }

  @Override
  public IType getIntrinsicTypeFromObject(Object object) {
    if (object == null) {
      return null;
    }

    if (object instanceof IGosuObject) {
      if (object instanceof AbstractTypeRef) {
        object = ((AbstractTypeRef) object)._getType();
      }
      IType type = ((IGosuObject) object).getIntrinsicType();
      if( type instanceof IBlockClass ) {
        return ((IBlockClass)type).getBlockType();
      }
      return type;
    }

    if (object instanceof IType) {
      return MetaType.get((IType) object);
    }

    return TypeSystem.get(object.getClass()); // Call allllll the way back through the stack if this is a Class;
  }

  @Override
  public Set<String> computeTypeNames() {
    Set<String> allTypeNames = _classCache.getAllTypeNames();
    allTypeNames.addAll(getModule().getFileRepository().getAllTypeNames(DOT_JAVA_EXTENSION));
    return allTypeNames;
  }

  @Override
  public URL getResource(String name) {
    return getGosuClassLoader().getActualLoader().getResource(name);
  }

  @Override
  public void refreshedTypesImpl(RefreshRequest request) {
    for (String fullyQualifiedTypeName : request.types) {
      _classCache.remove(fullyQualifiedTypeName);
      _classInfoCache.remove(fullyQualifiedTypeName);
    }
    getModule().getFileRepository().typesRefreshed( request );
  }

  @Override
  public boolean isCaseSensitive() {
    return true;
  }

  @Override
  public List<String> getHandledPrefixes() {
    return Collections.emptyList();
  }

  @Override
  public boolean handlesNonPrefixLoads() {
    return true;
  }

  public void refreshedImpl() {
    JavaType.unloadTypes();
    if (ExecutionMode.isRuntime()) {
      _classCache.clearClasspathInfo();
    } else {
      _classCache.dispose();
      _classCache = new ClassCache();
      dumpGosuClassLoader();
    }
    _namespaces = null;

    _classInfoCache.clear();

    getModule().getFileRepository().typesRefreshed( null );

    JavaTypes.flushCache();
  }

  @SuppressWarnings("WeakerAccess")
  public void clearMisses() {
    _classInfoCache.entrySet().removeIf( entry -> entry.getValue() == IJavaClassInfo.NULL_TYPE );
  }

  public Class loadClass(String className) {
    return _classCache.loadClass( className );
  }

  public AsmClass loadAsmClass(String className) {
    return _classCache.loadAsmClass( className );
  }

  public boolean classFileExists( String className ) {
    return _classCache.classFileExists( className );
  }

  public IGosuClassLoader getGosuClassLoader() {
    if (_gosuClassLoader == null) {
      _gosuClassLoader = new GosuClassLoader(getModule().getModuleClassLoader());
      Bootstrap.init();
    }
    return _gosuClassLoader;
  }

  void dumpGosuClassLoader() {
    if (_gosuClassLoader != null) {
      _gosuClassLoader.dumpAllClasses();
      // The module classloader should be a PluginContainer, which should be new at this point; the old one should be disposed
      if( !haveWeRecreatedTheModuleLoader() ) {
        // Gosu's classloader hasn't been recreated, which implies the _classCache was not recreated,
        // which means we have to manually dump and recreate the plugin loader and the module loader.
        _classCache.reassignClassLoader();
      }
      _gosuClassLoader.assignParent( getModule().getModuleClassLoader() );
      Bootstrap.init();
    }
  }

  private boolean haveWeRecreatedTheModuleLoader() {
    ClassLoader gosusLoader = _gosuClassLoader.getActualLoader();
    ClassLoader csr = getModule().getModuleClassLoader();
    while( csr != null ) {
      if( csr == gosusLoader ) {
        return false;
      }
      csr = csr.getParent();
    }
    return true;
  }

  @Override
  public Set<String> getExtensions() {
    return EXTENSIONS;
  }

  @Override
  public boolean hasNamespace(String namespace) {
    return getModule().getFileRepository().hasNamespace(namespace) > 0 || _classCache.hasNamespace(namespace);
  }

  @Override
  public Set<String> getAllNamespaces() {
    if (_namespaces == null) {
      try {
        _namespaces = TypeSystem.getNamespacesFromTypeNames(getAllTypeNames(), new HashSet<>());
      } catch (NullPointerException e) {
        //!! hack to get past dependency issue with tests
        return Collections.emptySet();
      }
    }
    return _namespaces;
  }

  @Override
  public void refreshedNamespace(String namespace, IDirectory dir, RefreshKind kind) {
    if (_namespaces != null) {
      if (kind == RefreshKind.CREATION) {
        _namespaces.add(namespace);
      } else if (kind == RefreshKind.DELETION) {
        _namespaces.remove(namespace);
      }
    }
  }

  @Override
  public Set<TypeName> getTypeNames(String namespace) {
    Set<TypeName> names = new HashSet<>();
    names.addAll(getModule().getFileRepository().getTypeNames(namespace, Collections.singleton(".java")));
    names.addAll(_classCache.getTypeNames(namespace));
    return names;
  }

  @Override
  public <T> T getInterface( Class<T> apiInterface )
  {
    if( apiInterface.getName().equals( "editor.plugin.typeloader.ITypeFactory" ) )
    {
      try
      {
        //noinspection unchecked
        return (T)Class.forName( "editor.plugin.typeloader.java.JavaTypeFactory" ).newInstance();
      }
      catch( Exception e )
      {
        throw new RuntimeException( e );
      }
    }
    return super.getInterface( apiInterface );
  }
}

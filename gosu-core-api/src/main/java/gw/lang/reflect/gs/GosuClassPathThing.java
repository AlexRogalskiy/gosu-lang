/*
 * Copyright 2014 Guidewire Software, Inc.
 */

package gw.lang.reflect.gs;

import gw.lang.Gosu;
import gw.lang.reflect.TypeSystem;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Hashtable;

/**
 */
public class GosuClassPathThing {
  public static final String GOSU_CLASS_PROTOCOL = "gosuclass";
  private static final String PROTOCOL_PACKAGE = "gw.internal.gosu.compiler.protocols";

  private static void setupLoaderChainWithGosuUrl( ClassLoader loader ) {
    UrlClassLoaderWrapper wrapped = UrlClassLoaderWrapper.wrapIfNotAlreadyVisited( loader );
    if( wrapped != null ) {
      addGosuClassUrl( wrapped );
    }
    if( loader != ClassLoader.getSystemClassLoader() ) { // we don't bother messing with any loaders above the system loader e.g., AppClassLoader
      loader = loader.getParent();
      if( loader != null ) {
        setupLoaderChainWithGosuUrl( loader );
      }
    }
  }

  private static void addGosuClassUrl( UrlClassLoaderWrapper urlLoader ) {
    try {
      URL url = makeUrl( urlLoader.getLoader() );
      if( !urlLoader.getURLs().contains( url ) ) {
        urlLoader.addURL( url );
      }
    }
    catch( MalformedURLException e ) {
      throw new RuntimeException( e );
    }
  }

  private static URL makeUrl( ClassLoader loader ) throws MalformedURLException {
    int loaderAddress = System.identityHashCode( loader );
    String spec = GOSU_CLASS_PROTOCOL + "://" + loaderAddress + "/";
    URL url;
    try {
      url = new URL( null, spec );
    }
    catch( Exception e ) {
      // If our Handler class is not in the system loader and not accessible within the Caller's
      // classloader from the URL constructor (3 activation records deep), then our Handler class
      // is not loadable by the URL class, but the honey badger doesn't really care; it gets
      // what it wants.
      addOurProtocolHandler();
      url = new URL( null, spec );
    }
    return url;
  }

  private static void addOurProtocolHandler() {
    try {
      Field field = URL.class.getDeclaredField( "handlers" );
      field.setAccessible( true );
      Method put = Hashtable.class.getMethod( "put", Object.class, Object.class );
      Field instanceField = Class.forName( "gw.internal.gosu.compiler.protocols.gosuclass.Handler" ).getField( "INSTANCE" );
      Object handler = instanceField.get( null );
      put.invoke( field.get( null ), "gosuclass", handler );
    } catch (Exception e) {
      throw new IllegalStateException("Failed to configure gosu protocol handler", e);
    }
  }

  private static void removeOurProtocolHandler() {
    try {
      Field field = URL.class.getDeclaredField( "handlers" );
      field.setAccessible( true );
      Method remove = Hashtable.class.getMethod( "remove", Object.class );
      remove.invoke( field.get( null ), "gosuclass" );
    } catch (Exception e) {
      throw new IllegalStateException("Failed to cleanup gosu protocol handler", e);
    }
  }

  private static boolean addOurProtocolPackage() {
    // XXX: Do not add protocol package since OSGi implementation of URLStreamFactory
    // first delegates to those and only then calls service from Service Registry
    String strProtocolProp = "java.protocol.handler.pkgs";
    String protocols = PROTOCOL_PACKAGE;
    String oldProp = System.getProperty( strProtocolProp );
    if( oldProp != null ) {
      if( oldProp.contains( PROTOCOL_PACKAGE ) ) {
        return false;
      }
      protocols += '|' + oldProp;
    }
    System.setProperty( strProtocolProp, protocols );
    return true;
  }

  private static void removeOurProtocolPackage() {
    String strProtocolProp = "java.protocol.handler.pkgs";
    String protocols = System.getProperty( strProtocolProp );
    if( protocols != null ) {
      // Remove our protocol from the list
      protocols = protocols.replace( PROTOCOL_PACKAGE + '|' , "" );
      System.setProperty( strProtocolProp, protocols );
    }
  }

  public synchronized static boolean init() {
    if( addOurProtocolPackage() ) {
      if( Gosu.bootstrapGosuWhenInitiatedViaClassfile() ) {
        // Assuming we are in runtime, we push the root module in the case where the process was started with java.exe and not gosu.cmd
        // In other words a Gosu class can be loaded directly from classfile in a bare bones Java program where only the Gosu runtime is
        // on the classpath and no module was pushed prior to loading.
        TypeSystem.pushModule( TypeSystem.getGlobalModule() );
      }
    }
    setupLoaderChainWithGosuUrl( TypeSystem.getGosuClassLoader().getActualLoader() );
    return true;
  }

  public synchronized static void cleanup() {
    removeOurProtocolPackage();
    // XXX: We can't remove URL from classloader easily.
    //removeGosuClassProtocolToClasspath();
    removeOurProtocolHandler();
  }

}

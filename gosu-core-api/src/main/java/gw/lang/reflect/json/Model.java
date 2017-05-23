package gw.lang.reflect.json;

import javax.script.ScriptException;
import javax.tools.Diagnostic;
import javax.tools.DiagnosticListener;
import javax.tools.JavaFileObject;
import manifold.api.fs.IFile;
import javax.script.Bindings;
import javax.script.SimpleBindings;
import manifold.api.json.JsonDiagnostic;
import manifold.api.json.JsonIssueContainer;
import manifold.api.sourceprod.ResourceFileSourceProducer;
import manifold.internal.javac.IIssue;
import manifold.internal.javac.SourceJavaFileObject;

/**
 */
class Model implements ResourceFileSourceProducer.IModel
{
  private String _fqn;
  private IFile _file;
  private JsonStructureType _type;
  private JsonIssueContainer _issues;

  public Model( String fqn, IFile file )
  {
    _fqn = fqn;
    _file = file;
    Bindings bindings;
    try
    {
      bindings = Json.fromJson( ResourceFileSourceProducer.getContent( file ) );
    }
    catch( Exception e )
    {
      Throwable cause = e.getCause();
      if( cause instanceof ScriptException )
      {
        _issues = new JsonIssueContainer( (ScriptException)cause, file );
      }
      bindings = new SimpleBindings();
    }

    _type = (JsonStructureType)Json.transformJsonObject( file.getBaseName(), null, bindings );
  }

  @Override
  public String getFqn()
  {
    return _fqn;
  }

  @Override
  public IFile getFile()
  {
    return _file;
  }

  public JsonStructureType getType()
  {
    return _type;
  }

  public void report( DiagnosticListener<JavaFileObject> errorHandler )
  {
    if( _issues == null || errorHandler == null )
    {
      return;
    }

    JavaFileObject file = new SourceJavaFileObject( _file.toURI() );
    for( IIssue issue: _issues.getIssues() )
    {
      Diagnostic.Kind kind = issue.getKind() == IIssue.Kind.Error ? Diagnostic.Kind.ERROR : Diagnostic.Kind.WARNING;
      errorHandler.report( new JsonDiagnostic( file, kind, issue.getStartOffset(), issue.getLine(), issue.getColumn(), issue.getMessage() ) );
    }
  }

}

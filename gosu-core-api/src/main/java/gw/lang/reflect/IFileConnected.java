package gw.lang.reflect;

import gw.fs.IFile;

/**
 */
public interface IFileConnected
{
  boolean handlesFile(IFile file);

  /**
   * Returns ALL type names associated with the given file
   * whether or not the types have been loaded yet.
   * Type loading should NOT be used in the implementation of this method.
   *
   * @param file The file in question
   * @return All known types derived from that file
   */
  String[] getTypesForFile(IFile file);

  /**                                          l
   * Notifies the type loader that a file has been refreshed.  The type loader should return all
   * types that it knows need to be refreshed based on the given file.

   * @param file The file that was refreshed
   * @param types
   * @param kind  @return All known types affected by the file change
   */
  RefreshKind refreshedFile(IFile file, String[] types, RefreshKind kind);
}

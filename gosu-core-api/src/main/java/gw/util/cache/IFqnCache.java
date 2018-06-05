/*
 * Copyright 2014 Guidewire Software, Inc.
 */

package gw.util.cache;

import gw.util.Predicate;

import java.util.Set;

/**
 */
public interface IFqnCache<T> {
  T get( String fqn );

  FqnCacheNode getNode( String fqn );

  boolean contains( String fqn );

  void add( String fqn );

  void add( String fqn, T userData );

  void remove( String[] fqns );

  boolean remove( String fqn );

  void clear();

  Set<String> getFqns();

  /**
   * @param visitor returns whether or not to terminate visiting
   */
  boolean visitDepthFirst( Predicate<T> visitor );
  boolean visitNodeDepthFirst( Predicate<FqnCacheNode> visitor );

  /**
   * @param visitor returns whether or not to continue visiting children of T
   */
  boolean visitBreadthFirst( Predicate<T> visitor );
}

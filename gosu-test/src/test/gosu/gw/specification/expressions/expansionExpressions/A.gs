package gw.specification.expressions.expansionExpressions

class A {
  public static var i : int 

  function noReturn() {i++}
  function getNum() : int { i++ return 0}

  property get Bar() : int {return 0}
  property set Bar(s : int)  {}
}

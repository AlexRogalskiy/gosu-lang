package gw.specification.classes.Field_Declarations_in_Classes

class Errant_FieldModifiersTest {
  var a0 : int = 0
  static var a1 : int = 0
  static transient var a2 : int = 0
  static transient abstract var a3 : int = 0  //## issuekeys: MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract final var a4 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract final private var a5 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract final private protected var a6 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract final private protected public var a7 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract final private protected public internal var a8 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract final private protected internal var a9 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract final private public var a10 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract final private public internal var a11 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract final private internal var a12 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract final protected var a13 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract final protected public var a14 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract final protected public internal var a15 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract final protected internal var a16 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract final public var a17 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract final public internal var a18 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract final internal var a19 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract private var a20 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract private protected var a21 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract private protected public var a22 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract private protected public internal var a23 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract private protected internal var a24 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract private public var a25 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract private public internal var a26 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract private internal var a27 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract protected var a28 : int = 0  //## issuekeys: MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract protected public var a29 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract protected public internal var a30 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract protected internal var a31 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract public var a32 : int = 0  //## issuekeys: MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract public internal var a33 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient abstract internal var a34 : int = 0  //## issuekeys: MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static transient final var a35 : int = 0
  static transient final private var a36 : int = 0
  static transient final private protected var a37 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static transient final private protected public var a38 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static transient final private protected public internal var a39 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static transient final private protected internal var a40 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static transient final private public var a41 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static transient final private public internal var a42 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static transient final private internal var a43 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static transient final protected var a44 : int = 0
  static transient final protected public var a45 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static transient final protected public internal var a46 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static transient final protected internal var a47 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static transient final public var a48 : int = 0
  static transient final public internal var a49 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static transient final internal var a50 : int = 0
  static transient private var a51 : int = 0
  static transient private protected var a52 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static transient private protected public var a53 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static transient private protected public internal var a54 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static transient private protected internal var a55 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static transient private public var a56 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static transient private public internal var a57 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static transient private internal var a58 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static transient protected var a59 : int = 0
  static transient protected public var a60 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static transient protected public internal var a61 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static transient protected internal var a62 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static transient public var a63 : int = 0
  static transient public internal var a64 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static transient internal var a65 : int = 0
  static abstract var a66 : int = 0  //## issuekeys: MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract final var a67 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract final private var a68 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract final private protected var a69 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract final private protected public var a70 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract final private protected public internal var a71 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract final private protected internal var a72 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract final private public var a73 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract final private public internal var a74 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract final private internal var a75 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract final protected var a76 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract final protected public var a77 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract final protected public internal var a78 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract final protected internal var a79 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract final public var a80 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract final public internal var a81 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract final internal var a82 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract private var a83 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract private protected var a84 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract private protected public var a85 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract private protected public internal var a86 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract private protected internal var a87 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract private public var a88 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract private public internal var a89 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract private internal var a90 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract protected var a91 : int = 0  //## issuekeys: MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract protected public var a92 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract protected public internal var a93 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract protected internal var a94 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract public var a95 : int = 0  //## issuekeys: MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract public internal var a96 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static abstract internal var a97 : int = 0  //## issuekeys: MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  static final var a98 : int = 0
  static final private var a99 : int = 0
  static final private protected var a100 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static final private protected public var a101 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static final private protected public internal var a102 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static final private protected internal var a103 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static final private public var a104 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static final private public internal var a105 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static final private internal var a106 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static final protected var a107 : int = 0
  static final protected public var a108 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static final protected public internal var a109 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static final protected internal var a110 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static final public var a111 : int = 0
  static final public internal var a112 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static final internal var a113 : int = 0
  static private var a114 : int = 0
  static private protected var a115 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static private protected public var a116 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static private protected public internal var a117 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static private protected internal var a118 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static private public var a119 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static private public internal var a120 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static private internal var a121 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static protected var a122 : int = 0
  static protected public var a123 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static protected public internal var a124 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  static protected internal var a125 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static public var a126 : int = 0
  static public internal var a127 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  static internal var a128 : int = 0
  transient var a129 : int = 0
  transient abstract var a130 : int = 0  //## issuekeys: MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract final var a131 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract final private var a132 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract final private protected var a133 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract final private protected public var a134 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract final private protected public internal var a135 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract final private protected internal var a136 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract final private public var a137 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract final private public internal var a138 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract final private internal var a139 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract final protected var a140 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract final protected public var a141 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract final protected public internal var a142 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract final protected internal var a143 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract final public var a144 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract final public internal var a145 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract final internal var a146 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract private var a147 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract private protected var a148 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract private protected public var a149 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract private protected public internal var a150 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract private protected internal var a151 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract private public var a152 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract private public internal var a153 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract private internal var a154 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract protected var a155 : int = 0  //## issuekeys: MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract protected public var a156 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract protected public internal var a157 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract protected internal var a158 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract public var a159 : int = 0  //## issuekeys: MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract public internal var a160 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient abstract internal var a161 : int = 0  //## issuekeys: MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  transient final var a162 : int = 0
  transient final private var a163 : int = 0
  transient final private protected var a164 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  transient final private protected public var a165 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  transient final private protected public internal var a166 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  transient final private protected internal var a167 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  transient final private public var a168 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  transient final private public internal var a169 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  transient final private internal var a170 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  transient final protected var a171 : int = 0
  transient final protected public var a172 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  transient final protected public internal var a173 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  transient final protected internal var a174 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  transient final public var a175 : int = 0
  transient final public internal var a176 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  transient final internal var a177 : int = 0
  transient private var a178 : int = 0
  transient private protected var a179 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  transient private protected public var a180 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  transient private protected public internal var a181 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  transient private protected internal var a182 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  transient private public var a183 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  transient private public internal var a184 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  transient private internal var a185 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  transient protected var a186 : int = 0
  transient protected public var a187 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  transient protected public internal var a188 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  transient protected internal var a189 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  transient public var a190 : int = 0
  transient public internal var a191 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  transient internal var a192 : int = 0
  abstract var a193 : int = 0  //## issuekeys: MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract final var a194 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract final private var a195 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract final private protected var a196 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract final private protected public var a197 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract final private protected public internal var a198 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract final private protected internal var a199 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract final private public var a200 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract final private public internal var a201 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract final private internal var a202 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract final protected var a203 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract final protected public var a204 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract final protected public internal var a205 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract final protected internal var a206 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract final public var a207 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract final public internal var a208 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract final internal var a209 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract private var a210 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract private protected var a211 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract private protected public var a212 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract private protected public internal var a213 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract private protected internal var a214 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract private public var a215 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract private public internal var a216 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract private internal var a217 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract protected var a218 : int = 0  //## issuekeys: MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract protected public var a219 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract protected public internal var a220 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract protected internal var a221 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract public var a222 : int = 0  //## issuekeys: MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract public internal var a223 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  abstract internal var a224 : int = 0  //## issuekeys: MSG_MODIFIER_ABSTRACT_NOT_ALLOWED_HERE
  final var a225 : int = 0
  final private var a226 : int = 0
  final private protected var a227 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  final private protected public var a228 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  final private protected public internal var a229 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  final private protected internal var a230 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  final private public var a231 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  final private public internal var a232 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  final private internal var a233 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  final protected var a234 : int = 0
  final protected public var a235 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  final protected public internal var a236 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  final protected internal var a237 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  final public var a238 : int = 0
  final public internal var a239 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  final internal var a240 : int = 0
  private var a241 : int = 0
  private protected var a242 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  private protected public var a243 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  private protected public internal var a244 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  private protected internal var a245 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  private public var a246 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  private public internal var a247 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  private internal var a248 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  protected var a249 : int = 0
  protected public var a250 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  protected public internal var a251 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER, MSG_ILLEGAL_USE_OF_MODIFIER
  protected internal var a252 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  public var a253 : int = 0
  public internal var a254 : int = 0  //## issuekeys: MSG_ILLEGAL_USE_OF_MODIFIER
  internal var a255 : int = 0
}
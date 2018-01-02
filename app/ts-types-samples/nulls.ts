let cannotBeNull = 12;
// cannotBeNull = null; TS2322: Type 'null' is not assignable to type 'number'.

let canBeNull: number | null;
canBeNull = 12;
canBeNull = null;

let canBeNullBecauseItIsUndef;
canBeNullBecauseItIsUndef = null;

/*

Find any Syntax Error or Logical Issue in the following Code:

let i = 11;
let j = --(i++);

*/

// There is a Syntax error in it. The operator (-- pre-dercement) used with (i++) is invalid,because first of all the (i++) will be evaluated & return 11 and then the opertor -- is applied to 11 which is a constant value not a (left value) varaible or something that represents a memory location & this (--) operator requires a (lvalue) variable as its operand.

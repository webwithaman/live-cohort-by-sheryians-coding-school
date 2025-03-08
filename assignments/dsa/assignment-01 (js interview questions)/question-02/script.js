// Find Output of the Following Code:

let a = 11,
  b = 22,
  c;

c = a + b + a++ + b++ + ++a + ++b;

console.log("a=" + a); // a=13
console.log("b=" + b); // b=24
console.log("c=" + c); // c=103

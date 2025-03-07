// Find Output

let a = 11,
  b = 22,
  c;

c = a + b + a++ + b++ + ++a + ++b;

console.log("a=" + a);
console.log("b=" + b);
console.log("c=" + c);

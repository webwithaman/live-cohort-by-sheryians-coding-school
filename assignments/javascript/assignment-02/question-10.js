/*

Question 10:

Explain the difference between undefined, null, and NaN with examples.

*/

/*
`undefined` | A variable is declared but not assigned a value 
`null` | Represents an intentional absence of a value
`NaN` (Not a Number) | A result of an invalid mathematical operation
*/

let a; // Undefined
console.log(a); // undefined

let b = null; // Explicitly assigned null
console.log(b); // null

let c = "hello" / 2; // Invalid mathematical operation
console.log(c); // NaN
console.log(typeof NaN); // "number" (weird JS quirk)

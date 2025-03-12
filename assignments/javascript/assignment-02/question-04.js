/*

Question 04:

Write a program that swaps the values of two variables.

*/

let a = 10,
  b = 20;

console.log("Before Swap:", "a =", a, ", b =", b);

// Using a temporary variable
let temp = a;
a = b;
b = temp;
console.log("After Swap (Method 1):", "a =", a, ", b =", b);

// Using array destructuring (modern JS)
[a, b] = [b, a];
console.log("After Swap (Method 2):", "a =", a, ", b =", b);

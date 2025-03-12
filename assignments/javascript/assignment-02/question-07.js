/*

Question 07:

Convert "50" (string) into a number using 3 different methods.

*/

let str = "50";

// Method 1: Using Number()
let num1 = Number(str);
console.log(num1, typeof num1); // 50 "number"

// Method 2: Using parseInt()
let num2 = parseInt(str);
console.log(num2, typeof num2); // 50 "number"

// Method 3: Using Unary `+` Operator
let num3 = +str;
console.log(num3, typeof num3); // 50 "number"

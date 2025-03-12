/*

Question 09:

Create an array of 5 numbers and log the sum using .reduce().

*/

let numbers = [10, 20, 30, 40, 50];

let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log("Sum:", sum); // Sum: 150

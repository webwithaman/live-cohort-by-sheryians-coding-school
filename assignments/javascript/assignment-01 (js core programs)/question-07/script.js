/*

Question 7:

Positive, Negative, or Zero – Take a number input and check if it
is positive, negative, or zero.

*/

let num = parseFloat(prompt("Enter A Number", 88));

if (Number.isNaN(num)) document.write(`<h1>Invalid Input!!!</h1>`);
else if (num > 0) document.write(`<h1>${num} is Positive</h1>`);
else if (num) document.write(`<h1>${num} is Negative</h1>`);
else document.write(`<h1>Zero</h1>`);

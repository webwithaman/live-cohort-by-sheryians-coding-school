/*

Question 4:

Largest of Three Numbers – Take three numbers as input and
print the largest number among them without using
Math.max()

*/

let num1 = parseFloat(prompt("Enter First Number", 9));
let num2 = parseFloat(prompt("Enter Second Number", 12));
let num3 = parseFloat(prompt("Enter Third Number", 2));

if (Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3))
  document.write(`<h1>Invalid Input!!!</h1>`);
else if (num1 > num2 && num1 > num3)
  document.write(`<h1>${num1} is Largest</h1>`);
else if (num2 > num3) document.write(`<h1>${num2} is Largest</h1>`);
else document.write(`<h1>${num3} is Largest</h1>`);

/*
Largest of Three Numbers – Take three numbers as input and
print the largest number among them without using
Math.max()
*/

let num1 = Number(prompt("Enter First Number"));
let num2 = Number(prompt("Enter Second Number"));
let num3 = Number(prompt("Enter Third Number"));

if (Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3))
  document.write(`<h1>Invalid Input!!!</h1>`);
else if (num1 > num2 && num1 > num3)
  document.write(`<h1>${num1} is Largest</h1>`);
else if (num2 > num3) document.write(`<h1>${num2} is Largest</h1>`);
else document.write(`<h1>${num3} is Largest</h1>`);

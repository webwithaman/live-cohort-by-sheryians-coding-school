/*

Question 19:

Find Second Largest – Take three numbers as input and find
the second largest number (without using sort() or Math.max()).

*/

let num1 = parseFloat(prompt("Enter First Number"));
let num2 = parseFloat(prompt("Enter Second Number"));
let num3 = parseFloat(prompt("Enter Third Number"));

if (Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3))
  document.write(`<h1>Invalid Input!!!</h1>`);
else if (num1 > num2) {
  if (num2 > num3) document.write(`<h1>${num2} is Second Largest Number</h1>`);
  else if (num1 > num3)
    document.write(`<h1>${num3} is Second Largest Number</h1>`);
  else document.write(`<h1>${num1} is Second Largest Number</h1>`);
} else if (num1 > num3)
  document.write(`<h1>${num1} is Second Largest Number</h1>`);
else if (num2 > num3)
  document.write(`<h1>${num3} is Second Largest Number</h1>`);
else document.write(`<h1>${num2} is Second Largest Number</h1>`);

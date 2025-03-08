/*

Question 13:

Swapping Without Third Variable – Take two numbers from the
user and swap their values without using a third variable. 

*/

let num1 = parseFloat(prompt("Enter First Number (num1)", 5));
let num2 = parseFloat(prompt("Enter Second Number (num2)", 14));

if (Number.isNaN(num1) || Number.isNaN(num2))
  document.write(`<h1>Invalid Input!!!</h1>`);
else {
  document.write(`<h1>Before Swapping num1 = ${num1} | num2 = ${num2}</h1>`);

  num1 = num1 + num2 - (num2 = num1);

  document.write(`<h1>After Swapping num1 = ${num1} | num2 = ${num2}</h1>`);
}

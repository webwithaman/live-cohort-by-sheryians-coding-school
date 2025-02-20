/*

Question 6:

Simple Calculator – Ask the user for two numbers and an
operator (+, -, *, /). Perform the operation and display the result.
  
*/

let num1 = Number(prompt("Enter First Number", 23));
let num2 = Number(prompt("Enter Second Number", 2));
let operator = prompt("Enter An Operator (+, -, *, /)", "+");

if (Number.isNaN(num1) || Number.isNaN(num2))
  document.write(`<h1>Invalid Input!!!</h1>`);
else
  switch (operator) {
    case "+":
      document.write(`<h1>${num1} + ${num2} = ${num1 + num2}</h1>`);
      break;
    case "-":
      document.write(`<h1>${num1} - ${num2} = ${num1 - num2}</h1>`);
      break;
    case "*":
      document.write(`<h1>${num1} * ${num2} = ${num1 * num2}</h1>`);
      break;
    case "/":
      document.write(`<h1>${num1} / ${num2} = ${num1 / num2}</h1>`);
      break;
    default:
      document.write(`<h1>Invalid Operator!!!</h1>`);
  }

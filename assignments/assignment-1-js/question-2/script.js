/*

Question 2:

Even or Odd Sum – Take two numbers from the user using
prompt(). If the sum of both numbers is even, print “Even Sum”;
otherwise, print “Odd Sum”

*/

let num1 = Number(prompt("Enter First Number", 7));
let num2 = Number(prompt("Enter Second Number", 3));

if (Number.isNaN(num1) || Number.isNaN(num2))
  document.write("<h1>Invalid Input!!!</h1>");
else {
  let sum = num1 + num2;
  if (sum % 2) document.write("<h1>Odd Sum</h1>");
  else document.write("<h1>Even Sum</h1>");
}

/*

Question 5:

Leap Year Checker – Ask the user for a year and determine if
it's a leap year or not. 
 
*/

let year = Number(prompt("Enter A Year", 2004));

if (Number.isNaN(year) || year < 0) document.write(`<h1>Invalid Input!!!</h1>`);
else if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
  document.write(`<h1>${year} is a Leap Year</h1>`);
else document.write(`<h1>${year} is not a Leap Year</h1>`);

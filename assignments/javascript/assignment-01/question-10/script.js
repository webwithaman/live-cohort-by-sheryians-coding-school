/*

Question 10:

Multiplication Table – Ask the user for a number and print its
multiplication table up to 10.

*/

let num = parseFloat(prompt("Enter A Number", 7));

if (Number.isNaN(num)) document.write(`<h2>Invalid Input!!!</h2>`);
else {
  document.write(`<h1>Multiplication Table of ${num} up to 10</h1>`);

  for (let i = 1; i <= 10; i++)
    document.write(`<h2>${num} x ${i} = ${num * i}</h2>`);
}

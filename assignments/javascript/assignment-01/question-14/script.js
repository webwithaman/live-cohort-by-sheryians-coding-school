/*

Question 14:

FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a
multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if
only 5, print “Buzz”; otherwise, print the number itself. 

*/

let num = parseFloat(
  prompt("Enter A Number to Check Whether It is a Multiple of Both 3 & 5", 30)
);

if (num % 3 == 0) {
  if (num % 5 == 0)
    document.write(`<h1>FizzBuzz, ${num} is a Multiple of Both 3 & 5</h1>`);
  else document.write(`<h1>Fizz, ${num} is a Multiple of only 3 not 5</h1>`);
} else if (num % 5 == 0)
  document.write(`<h1>Buzz, ${num} is a Multiple of only 5 not 3</h1>`);
else document.write(`<h1>${num} is not a Multiple of Both 3 & 5</h1>`);

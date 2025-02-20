/*

Question 17:

Palindrome Checker – Ask the user for a word. Check if it
reads the same forward and backward. Print “Palindrome” or
“Not a Palindrome.”

*/

let word = prompt("Enter A Word", "hello");

let wordCounter = (i = 0);

while (word[wordCounter]) wordCounter++;

while (word[i++] === word[wordCounter - i] && i != wordCounter);

if (i == wordCounter)
  document.write(`
  <h1>Palindrome</h1>`);
else document.write(`<h1>Not a Palindrome</h1>`);

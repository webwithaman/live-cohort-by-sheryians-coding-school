/*

Question 3:

Character Case Checker – Ask the user for a single character.
Check if it's uppercase, lowercase, or neither (not a letter) 

*/

let char = prompt("Enter A Character", "A");

if (char >= "a" && char <= "z") document.write("<h1>Lowercase</h1>");
else if (char >= "A" && char <= "Z") document.write("<h1>Uppercase</h1>");
else document.write("<h1>Not a Letter</h1>");

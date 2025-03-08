/*

Question 1:

Age Category Message – Ask the user for their age. If they are
under 18, print “You are a minor.” If they are between 18 and 60,
print “You are an adult.” If they are above 60, print “You are a
senior citizen.”

*/

let userAge = Number(prompt("Enter Your Age", 18));

if (Number.isNaN(userAge) || userAge < 0 || userAge > 120)
  document.write("<h1>Invalid Input!!!</h1>");
else if (userAge < 18) document.write("<h1>You are a Minor</h1>");
else if (userAge >= 18 && userAge <= 60)
  document.write("<h1>You are an Adult</h1>");
else document.write("<h1>You are a Senior Citizen</h1>");

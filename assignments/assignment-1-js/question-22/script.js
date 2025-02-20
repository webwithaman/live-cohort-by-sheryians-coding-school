/*

Question 22:

Nested Condition Challenge – Ask the user for their age and
salary. Print a message based on conditions:

If age is below 18, print “Not eligible”

If age is 18 or more but salary is less than ₹20,000, print “Low
Salary”

If salary is ₹50,000 or more, print “High Salary”

Otherwise, print “Medium Salary” 

*/

let userAge = Number(prompt("Enter Your Age"));
let userSalary = Number(prompt("Enter Your Salary"));

if (Number.isNaN(userAge) || Number.isNaN(userSalary))
  document.write("<h1>Invalid Input!!!</h1>");
else {
  if (userAge < 18) document.write("<h1>Not Eligible</h1>");
  else if (userAge >= 18) {
    if (userSalary <= 20000) document.write("<h1>Low Salary</h1>");
    else if (userSalary >= 50000) document.write("<h1>High Salary</h1>");
    else document.write("<h1>Medium Salary</h1>");
  }
}

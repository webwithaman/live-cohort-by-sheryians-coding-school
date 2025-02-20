/*

Question 11:

Grade Calculator – Ask the user for their marks (0-100).
Assign grades based on the range:

90-100: A

80-89: B

70-79: C

60-69: D

Below 60: F 

*/

let userMarks = Number(prompt("Enter Your Marks (Between 0-100)", 88));

if (Number.isNaN(userMarks) || userMarks > 100)
  document.write(`<h1>Invalid Input</h1>`);
else if (userMarks >= 90) document.write(`<h1>Grade: A</h1>`);
else if (userMarks >= 80 && userMarks <= 89)
  document.write(`<h1>Grade: B</h1>`);
else if (userMarks >= 70 && userMarks <= 79)
  document.write(`<h1>Grade: C</h1>`);
else if (userMarks >= 60 && userMarks <= 69)
  document.write(`<h1>Grade: D</h1>`);
else document.write(`<h1>Grade : F (Fail)</h1>`);

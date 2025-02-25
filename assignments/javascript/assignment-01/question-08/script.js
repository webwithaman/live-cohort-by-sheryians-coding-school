/*

Question 8:

User Greeting – Ask for the user's name and time (24-hour
format). Greet them accordingly:

5 AM–12 PM: "Good Morning, [Name]!"

12 PM–5 PM: "Good Afternoon, [Name]!"

5 PM–9 PM: "Good Evening, [Name]!"

9 PM–5 AM: "Good Night, [Name]!"

*/

let userName = prompt("Enter Your Name");
let timeIn24HrFormat = parseInt(
  prompt(
    "Please enter the time in 24-hour format (HH), (e.g., 14 for 2 PM, 3 for 3 AM)"
  )
);

if (
  Number.isNaN(timeIn24HrFormat) ||
  timeIn24HrFormat < 0 ||
  timeIn24HrFormat > 23
)
  document.write(`<h1>Invalid Input!!!</h1>`);
else if (timeIn24HrFormat >= 5 && timeIn24HrFormat < 12)
  document.write(`<h1>Good Morning, ${userName}!</h1>`);
else if (timeIn24HrFormat >= 12 && timeIn24HrFormat < 17)
  document.write(`<h1>Good Afternoon, ${userName}!</h1>`);
else if (timeIn24HrFormat >= 17 && timeIn24HrFormat < 9)
  document.write(`<h1>Good Evening, ${userName}!</h1>`);
else document.write(`<h1>Good Night, ${userName}!</h1>`);

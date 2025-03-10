/*

Question 3:

Take Gender, year of services & qualification of the candidate & display salary according to the following condtions:

Male:
≥10 years, Post-Graduate: 15,000
≥10 years, Graduate: 10,000
<10 years, Post-Graduate: 10,000
<10 years, Graduate: 7,000

Female:
≥10 years, Post-Graduate: 12,000
≥10 years, Graduate: 9,000
<10 years, Post-Graduate: 10,000
<10 years, Graduate: 6,000

*/

let gender = prompt("Enter Gender (Male/Female)", "Male"),
  yearOfService = parseFloat(prompt("Enter Year of Services", 12)),
  qualification = prompt(
    "Enter Qualification (Post-Graduate/Graduate)",
    "Graduate"
  );

if (
  Number.isNaN(yearOfService) ||
  !gender ||
  !qualification ||
  yearOfService < 0 ||
  (gender.toLowerCase() != "male" && gender.toLowerCase() != "female") ||
  (qualification.toLowerCase() != "post-graduate" &&
    qualification.toLowerCase() != "graduate")
)
  console.log("Invalid Input!!!");
else {
  let salary = 0;

  if (gender.toLowerCase() == "male") {
    if (yearOfService >= 10) {
      if (qualification.toLowerCase() == "post-graduate") salary = 15000;
      else salary = 10000;
    } else if (qualification.toLowerCase() == "post-graduate") salary = 10000;
    else salary = 7000;
  } else if (yearOfService >= 10) {
    if (qualification.toLowerCase() == "post-graduate") salary = 12000;
    else salary = 9000;
  } else if (qualification.toLowerCase() == "post-graduate") salary = 10000;
  else salary = 6000;

  document.writeln(`<h2>Salary: ₹${salary}</h2>`);
}

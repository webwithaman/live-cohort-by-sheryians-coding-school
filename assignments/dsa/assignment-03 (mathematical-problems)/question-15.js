/*

Question 15: Number of Days in a Month

Description: Find the number of days in a given month and year (to handle leap years).

Example:
Input: Month = 2, Year = 2024
Output: 29

Hint: Use conditions/switch:

*/

// Function to Find Number of Days in Given Month & Year
const numberOfDays = (month, year) => {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;

    case 4:
    case 6:
    case 9:
    case 11:
      return 30;

    case 2:
      if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) return 29;
      return 28;

    default:
      return undefined;
  }
};

let month = prompt("Enter Month Number (1 to 12)", 2);

// If Month is null or empty
if (!month) console.log("Did Not Give Any Input!!!");
else {
  // Convert Input into Number
  month = Number(month);

  // Check for Invalid Input
  if (isNaN(length)) console.log("Invalid Input!!!");
  else {
    let year = prompt("Enter A Year");

    // If Year is null or empty
    if (!year) console.log("Did Not Give Any Input!!!");
    else {
      // Convert Input into Number
      year = Number(year);

      // Check for Invalid Input & If Valid then Call numberOfDays()
      if (isNaN(year)) console.log("\nInvalid Input!!!");
      else console.log("Number of Days: ", numberOfDays(month, year));
    }
  }
}

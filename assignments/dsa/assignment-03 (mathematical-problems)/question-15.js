/*

Question 15: Number of Days in a Month

Description: Find the number of days in a given month and year (to handle leap years).

Example:
Input: Month = 2, Year = 2024
Output: 29

Hint: Use conditions:

*/

// Function to Find Number of Days in Given Month & Year
const numberOfDays = (radius) => {
  return Math.PI * radius * radius;
};

// User's Choice
let userChoice;

do {
  console.log("\n-----------------------------------------------");
  console.log(`Enter "Circle' to Find Area of Circle`);
  console.log(`Enter "Rectangle' to Find Area of Rectangle`);
  console.log(`Enter "Triangle' to Find Area of Triangle`);
  console.log(`Enter "Exit' For Exit`);
  console.log("-----------------------------------------------");
  userChoice = prompt("Enter Your Choice").toLowerCase();

  switch (userChoice) {
    case "circle":
      let radius = prompt("Enter Radius of Circle to Find Area");

      // If radius is null or empty
      if (!radius) console.log("Did Not Give Any Input!!!");
      // Convert Input into Number
      else {
        radius = Number(radius);

        // Check for Invalid Input & If Valid then Call numberOfDays()
        if (isNaN(radius)) console.log("Invalid Input!!!");
        else console.log("\nArea of Circle: ", numberOfDays(radius));
      }
      break;

    case "rectangle":
      let length = prompt("Enter Length");
      let breadth = prompt("Enter Breath");

      // If length is null or empty
      if (!length) console.log("Did Not Give Any Input!!!");
      else {
        // Convert Input into Number
        length = Number(length);

        // Check for Invalid Input
        if (isNaN(length)) console.log("Invalid Input!!!");
        else {
          // If  breadth is null or empty
          if (!breadth) console.log("Did Not Give Any Input!!!");
          else {
            // Convert Input into Number
            breadth = Number(breadth);

            // Check for Invalid Input & If Valid then Call areaOfRectangle()
            if (isNaN(breadth)) console.log("\nInvalid Input!!!");
            else
              console.log(
                "\nArea of Rectangle: ",
                areaOfRectangle(length, breadth)
              );
          }
        }
      }
      break;

    case "triangle":
      let base = prompt("Enter Breadth");
      let height = prompt("Enter Height");

      // If base is null or empty
      if (!base) console.log("Did Not Give Any Input!!!");
      else {
        // Convert Input into Number
        base = Number(base);

        // Check for Invalid Input
        if (isNaN(base)) console.log("Invalid Input!!!");
        else {
          // If  height is null or empty
          if (!height) console.log("Did Not Give Any Input!!!");
          else {
            // Convert Input into Number
            height = Number(height);

            // Check for Invalid Input & If Valid then Call areaOfTriangle()
            if (isNaN(height)) console.log("Invalid Input!!!");
            else
              console.log("\nArea of Triangle: ", areaOfTriangle(base, height));
          }
        }
      }
      break;

    default:
      if (userChoice === "exit") break;
      console.log("Invalid Input!!!");
  }
} while (userChoice !== "exit");

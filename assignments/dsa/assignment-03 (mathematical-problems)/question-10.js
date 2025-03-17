/*

Question 10: Neon Number

Description: A number where the sum of digits of its square equals the number itself.

Example:
Input: 9
Output: Neon Number
Explanation: 9² = 81, sum of digits = 9.

Hint: Find square, sum digits, compare.

*/

// Function to Check Whether a Number is a Neon Number or Not (Accept Agrgument as Number & Return Boolean Value)
const isNeonNumber = (num) => {
  // Handling Decimal Numbers
  num = Math.round(num);

  // Handling Negative Numbers
  if (num < 0) return false;

  let squre = num * num,
    sumOfDigits = 0;

  while (squre) {
    sumOfDigits += squre % 10;
    squre = Math.floor(squre / 10);
  }

  return sumOfDigits === num;
};

// Take Input from User through Prompt
let num = prompt(
  "Enter A Number (Whole Number) to Check Whether It is a Neon Number or Not"
);

// If num is null or empty
if (!num) console.log("Did Not Give Any Input!!!");
else {
  // Convert Input into Number
  num = Number(num);

  // Check for Invalid Input & If Valid then Call isNeonNumber()
  if (isNaN(num)) console.log("Invalid Input!!!");
  else if (isNeonNumber(num)) console.log(`Yes, ${num} is a Neon Number`);
  else console.log(`No, ${num} is not a Neon Number`);
}

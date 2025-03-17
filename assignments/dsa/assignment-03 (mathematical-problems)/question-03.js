/*

Question 03: Harshad Number

Description: A number is a Harshad number if it is divisible by the sum of its digits.

Example:
Input: 18
Output: Harshad Number
Explanation: Sum of digits (1 + 8) = 9, and 18 is divisible by 9.

Hint: Extract digits using modulo (%) and integer division (//).

*/

// Function to Check Whether a Number is a Harshad Number or Not (Accept Agrgument as Number & Return Boolean Value)
const isHarshadNumber = (num) => {
  // If num is less than & equal to 0 or num is Floating Point Number
  if (num <= 0 || !Number.isInteger(num)) return false;

  // if num is between 1 to 9
  if (num < 10) return true;

  let sumOfDigits = 0,
    copyOfNum = num;

  while (copyOfNum) {
    sumOfDigits += copyOfNum % 10;
    copyOfNum = Math.floor(copyOfNum / 10);
  }

  return num % sumOfDigits === 0;
};

// Take Input from User through Prompt
let num = prompt(
  "Enter A Number (whole Number) to Check Whether It is Harshad or Not"
);

// If num is null or empty
if (!num) console.log("Did Not Give Any Input!!!");
else {
  // Convert Input into Number
  num = Number(num);

  // Check for Invalid Input & If Valid then Call isHarshadNumber()
  if (isNaN(num)) console.log("Invalid Input!!!");
  else if (isHarshadNumber(num)) console.log(`Yes, ${num} is a Harshad Number`);
  else console.log(`No, ${num} is not a Harshad Number`);
}

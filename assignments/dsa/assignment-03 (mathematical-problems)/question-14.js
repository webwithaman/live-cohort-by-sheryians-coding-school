/*

Question 14: Find the Sum of Even Digits in a Number

Description: Find the sum of all even digits in a given number.

Example:
Input: 2384
Output: 14

Hint: Extract digits using % 10, check if even (digit % 2 == 0), add to sum.

*/

// Function to Find the Sum of Even Digits in a Number (Accept Agrgument as Number & Return Number)
const sumOfEvenDigits = (num) => {
  // Handling Negative & Decimal Numbers
  num = Math.round(Math.abs(num));

  let sumOfEvenDigits = 0;
  while (num) {
    if ((num % 10) % 2 === 0) sumOfEvenDigits += num % 10;
    num = Math.floor(num / 10);
  }

  return sumOfEvenDigits;
};

// Take Input from User through Prompt
let num = prompt(
  "Enter A Number (Integer) to Find Sum of Even Digits in It",
  83945
);

// If num is null or empty
if (!num) console.log("Did Not Give Any Input!!!");
else {
  // Convert Input into Number
  num = Number(num);

  // Check for Invalid Input & If Valid then Call sumOfEvenDigits()
  if (isNaN(num)) console.log("Invalid Input!!!");
  else console.log(`Sum of Even Digits in ${num}: ${sumOfEvenDigits(num)}`);
}

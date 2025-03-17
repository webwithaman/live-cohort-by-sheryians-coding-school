/*

Question 12: Find the Largest Digit in a Number

Description: Find the largest digit in a given number.

Example:
Input: 54829
Output: 9

Hint: Extract digits using modulo (% 10) and compare.

*/

// Function to Find Largest Digit in a Number (Accept Agrgument as Number & Return Number)
const largestDigit = (num) => {
  // Handling Negative & Decimal Numbers
  num = Math.round(Math.abs(num));

  // Having Only One Digit
  if (num === 0 || num % 10 === num) return num;

  let largestDigit = num % 10;
  num = Math.floor(num / 10);

  while (num) {
    if (num % 10 > largestDigit) largestDigit = num % 10;
    num = Math.floor(num / 10);
  }

  return largestDigit;
};

// Take Input from User through Prompt
let num = prompt("Enter A Number (Integer) to Find Largest Digit in It", 83945);

// If num is null or empty
if (!num) console.log("Did Not Give Any Input!!!");
else {
  // Convert Input into Number
  num = Number(num);

  // Check for Invalid Input & If Valid then Call largestDigit()
  if (isNaN(num)) console.log("Invalid Input!!!");
  else console.log(`Largest Digit in ${num}: ${largestDigit(num)}`);
}

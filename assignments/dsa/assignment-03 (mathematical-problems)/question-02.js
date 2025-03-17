/*

Question 02: HCF/GCD

Description: The Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two numbers is the largest number that divides both numbers without leaving a remainder.

Example:
Input: a = 12, b = 18
Output: 6
Explanation: Factors of 12: {1,2,3,4,6,12}. Factors of 18: {1,2,3,6,9,18}. Common factors: {1,2,3,6}. The highest is 6.

Hint: Use the Euclidean algorithm: GCD(a, b) = GCD(b, a % b).

*/

// Function to Find HCF/GCD of Two Numbers (Accept Arguments as Numbers & Return HCF as Number)
const HCF = (num1, num2) => {
  // Handle Negative & Decimal Numbers
  num1 = Math.round(Math.abs(num1));
  num2 = Math.round(Math.abs(num2));

  if (num1 === 1 || num2 === 1) return 1;
  if (num1 === 0 || num1 === num2) return num2;
  if (num2 === 0) return num1;

  // // Euclidean Algorithm Approach
  let remainder = num1 % num2;
  while (remainder) {
    num1 = num2;
    num2 = remainder;
    remainder = num1 % num2;
  }
  return num2;

  // // Using Iterative Approach
  // let minNum = Math.min(num1, num2),
  //   maxNum = Math.max(num1, num2);
  // if (maxNum % minNum === 0) return minNum;
  // for (let i = Math.floor(minNum / 2); i; i--)
  //   if (minNum % i === 0 && maxNum % i === 0) return i;
  // return 1;
};

// Take Input from User through Prompt as String
let userInput = prompt(
  "Enter Two Numbers (Integers) to Find HCF/GCD Seperated by Space ",
  "18 24"
);

// If userInput is null
if (!userInput) console.log("Did Not Give Any Input!!!");
else {
  // Convert Input String in Array to Convert in Numbers
  let convertedArr = userInput.split(" ");

  // Validate Input & Find HCF If Valid
  if (convertedArr.length === 2) {
    let [num1, num2] = convertedArr;

    // If Arguments are Floating Point Numbers, Convert into Integers
    num1 = Math.round(num1);
    num2 = Math.round(num2);

    if (Number.isNaN(num1) || Number.isNaN(num2))
      console.log("Invalid Input!!!");
    else {
      console.log(`HCF of ${num1} and ${num2} => ${HCF(num1, num2)}`);
    }
  } else console.log("Invalid Input!!!");
}

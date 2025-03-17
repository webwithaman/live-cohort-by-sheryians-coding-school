/*

Question 13: Find LCM of Two Numbers

Description: Find the Least Common Multiple (LCM) of two numbers.

Example:
Input: a = 12, b = 15
Output: 60

Hint: LCM can be found using the formula: LCM(a, b) = (a × b) / GCD(a, b).

*/

// Function to Find LCM of Two Numbers (Accept Arguments as Numbers & Return LCM as Number)
const LCM = (num1, num2) => {
  // Handle Negative & Decimal Numbers
  num1 = Math.round(Math.abs(num1));
  num2 = Math.round(Math.abs(num2));

  if (num1 === 1) return num2;
  if (num2 === 1) return num1;
  if (num1 === 0 || num2 === 0) return 0;
  if (num1 === num2) return num1;

  // // Through HCF by Euclidean Algorithm
  let remainder = num1 % num2,
    product = num1 * num2;
  while (remainder) {
    num1 = num2;
    num2 = remainder;
    remainder = num1 % num2;
  }
  return product / num2;

  // // Using Iterative Approach
  //   let minNum = Math.min(num1, num2),
  //     maxNum = Math.max(num1, num2);

  //   if (maxNum % minNum === 0) return maxNum;
  //   for (let i = maxNum; i <= minNum * maxNum; i += maxNum)
  //     if (i % minNum === 0 && i % maxNum === 0) return i;
};

// Take Input from User through Prompt as String
let userInput = prompt(
  "Enter Two Numbers (Integers) to Find LCM Seperated by Space ",
  "18 24"
);

// If userInput is null
if (!userInput) console.log("Did Not Give Any Input!!!");
else {
  // Convert Input String in Array to Convert in Numbers
  let convertedArr = userInput.split(" ");

  // Validate Input & Find LCM If Valid
  if (convertedArr.length === 2) {
    let [num1, num2] = convertedArr;

    // If Arguments are Floating Point Numbers, Convert into Integers
    num1 = Math.round(num1);
    num2 = Math.round(num2);

    if (Number.isNaN(num1) || Number.isNaN(num2))
      console.log("Invalid Input!!!");
    else {
      console.log(`LCM of ${num1} and ${num2} => ${LCM(num1, num2)}`);
    }
  } else console.log("Invalid Input!!!");
}

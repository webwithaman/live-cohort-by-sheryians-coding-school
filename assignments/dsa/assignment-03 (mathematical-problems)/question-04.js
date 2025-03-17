/*

Question 04: Perfect Square

Description: A number is a perfect square if it is the square of an integer.

Example:
Input: 25
Output: Perfect Square
Explanation: 5 x 5 = 25.

Hint: Use sqrt(N), check if it’s an integer.

*/

// Function to Check Whether a Number is Perfect Square or Not (Accept Agrgument as Number & Return Boolean Value)
const isPerfectSquare = (num) => {
  // Handling Negative Numbers
  if (num < 0) return false;

  // // Using Math.sqrt
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt); // Return true if the square root is an integer

  // // Using Iterative Approach
  // // Last Digit Rule
  // let digits = [2, 3, 7, 8];
  // if (digits.includes(num % 10)) return false;

  // // Modulus 3 & 4 Rule
  // if (num % 3 === 2 || num % 4 === 2 || num % 4 === 3) return false;

  // // Sum of Odd Numbers Rule
  // let sumOfOdds = 0,
  //   odd = 1;
  // while (sumOfOdds < num) {
  //   sumOfOdds += odd;
  //   odd += 2;
  // }

  // return sumOfOdds === num;
};

// Take Input from User through Prompt
let num = prompt(
  "Enter A Number to Check Whether It is a Perfect Square or Not",
  25
);

// If num is null or empty
if (!num) console.log("Did Not Give Any Input!!!");
else {
  // Convert Input into Number
  num = Number(num);

  // Check for Invalid Input & If Valid then Call isPerfectSquare()
  if (isNaN(num)) console.log("Invalid Input!!!");
  else if (isPerfectSquare(num)) console.log(`Yes, ${num} is a Perfect Square`);
  else console.log(`No, ${num} is not a Perfect Square`);
}

/*

Question 11: Sum of Even Indexed Fibonacci Numbers

Description: Find the sum of Fibonacci numbers at even indices up to the Nth Fibonacci number.

Example:
Input: N = 4
Output: 33

Hint: Use a loop and maintain a sum for even-indexed elements.

*/

// Function to Sum of Fibonacci Numbers at Even Indices up to the Nth Fibonacci Number (Accept Argument as Number & Return Number)
const sumOfEvenIndicesOfFibonacci = (n) => {
  // Handling Negative & Decimal Number
  n = Math.round(Math.abs(n));

  let prev = -1,
    next = 1,
    sum,
    sumOfEvenIndices = 0;

  for (let i = 0; i < n + 1; i++) {
    sum = prev + next;
    prev = next;
    next = sum;
    if (i % 2 === 0) sumOfEvenIndices += sum;
  }

  return sumOfEvenIndices;
};

// Take Input from User through Prompt
let n = prompt(
  "Enter N to Find the Sum of Fibonacci Numbers at Even Indices up to the Nth Fibonacci Number",
  15
);

// If num is null or empty
if (!n) console.log("Did Not Give Any Input!!!");
else {
  // Convert Input into Number
  n = Number(n);

  // Check for Invalid Input & If Valid then Call sumOfEvenIndicesOfFibonacci()
  if (isNaN(n)) console.log("Invalid Input!!!");
  else {
    console.log("Sum: ", sumOfEvenIndicesOfFibonacci(n));
  }
}

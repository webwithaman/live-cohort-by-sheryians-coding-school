/*

Question 06: Fibonacci Series using Loop

Description: Print Fibonacci series up to N terms using a loop.

Example:
Input: N = 6
Output: 0, 1, 1, 2, 3, 5

Hint: Use a loop and store previous two numbers.

*/

// Function to Find N Terms of Fibonacci Series (Accept Argument as Number & Return an Array)
const fibonacciSeries = (n) => {
  // Handling Negative & Decimal Number
  n = Math.round(Math.abs(n));

  let prev = -1,
    next = 1,
    sum,
    output = [];

  for (let i = 1; i <= n; i++) {
    sum = prev + next;
    output.push(sum);
    prev = next;
    next = sum;
  }

  return output;
};

// Take Input from User through Prompt
let n = prompt("Enter N to Find First N Terms of Fibonacci Series", 10);

// If num is null or empty
if (!n) console.log("Did Not Give Any Input!!!");
else {
  // Convert Input into Number
  n = Number(n);

  // Check for Invalid Input & If Valid then Call fibonacciSeries()
  if (isNaN(n)) console.log("Invalid Input!!!");
  else {
    let output = fibonacciSeries(n);
    for (let o of output) console.log(o);
  }
}

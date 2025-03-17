/*

Question 08: Prime Factors

Description: Find all prime factors of a number.

Example:
Input: 30
Output: 2, 3, 5

Hint: Use division method.

*/

// Function to Check Whether a nber is Perfect Square or Not (Accept Argument as nber & Return Boolean Value)
const numbersWithXDivisors = (n) => {
  // Handling Negative & Decimal Numbers
  n = Math.round(Math.abs(n));
  x = Math.round(Math.abs(x));

  if (n < 2) return [];

  let finalOutput = [],
    primeFactor = 2;

  while (n !== 1) {
    while (n % primeFactor === 0) {
      n /= primeFactor;
      finalOutput.push(primeFactor);
    }
    primeFactor++;
  }

  return finalOutput;
};

// Take Input from User through Prompt
let num = prompt("Enter A Number to Find Its Prime Factors", 32);

// If num is null or empty
if (!num) console.log("Did Not Give Any Input!!!");
else {
  // Convert Input into Number
  num = Number(num);

  // Check for Invalid Input & If Valid then Call primeFactors()
  if (isNaN(num)) console.log("Invalid Input!!!");
  else {
    let output = primeFactors(n);
    for (let o of output) console.log(o);
  }
}

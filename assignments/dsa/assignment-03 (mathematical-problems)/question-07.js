/*

Question 07: Find First N Numbers with Exactly X Divisors

Description: Find First N Numbers that have exactly X divisors.

Example:
Input: X = 3
Output: 4, 9, 25, 49
Explanation: These numbers have exactly three divisors.

Hint: Use prime factorization.

*/
// Function to Find First N Numbers with Exactly X Divisors (Accept Arguments as Numbers & Return an Array)
const numbersWithXDivisors = (n, x) => {
  // Handling Negative & Decimal Numbers
  n = Math.round(Math.abs(n));
  x = Math.round(Math.abs(x));

  if (n === 0 || x === 0) return [];

  let num = 1,
    i = 1,
    finalOutput = [];

  while (i <= n) {
    let primeFactor = 2,
      factorsObj = {},
      copyNum = num;

    while (copyNum !== 1) {
      while (copyNum % primeFactor === 0) {
        factorsObj[primeFactor] = (factorsObj[primeFactor] || 0) + 1;
        copyNum /= primeFactor;
      }
      primeFactor++;
    }

    let numOfDivisors = 1;
    for (let key in factorsObj) {
      numOfDivisors *= factorsObj[key] + 1;
    }

    if (numOfDivisors === x) {
      finalOutput.push(num);
      i++;
    }
    num++;
  }

  return finalOutput;
};

// Take Input (x) from User through Prompt
let x = prompt(
  "Enter X (Natural Number) to Find Numbers Having Exactly Divisors",
  3
);

// If x is null or empty
if (!x) console.log("Did Not Give Any Input!!!");
else {
  // Convert Input into Number
  x = Number(x);

  // Check for Invalid Input
  if (isNaN(x)) console.log("Invalid Input!!!");
  else {
    // Take Input (n) from User through Prompt
    let n = prompt(
      `Enter N (Natural Number) to Find First N Numbers Having Exactly ${x} Divisors`,
      10
    );

    // If n is null or empty
    if (!n) console.log("Did Not Give Any Input!!!");
    else {
      // Convert Input into Number
      n = Number(n);

      // Check for Invalid Input & If Valid then Call numbersWithXDivisors()
      if (isNaN(n)) console.log("Invalid Input!!!");
      else {
        let output = numbersWithXDivisors(n, x);
        for (let o of output) console.log(o);
      }
    }
  }
}

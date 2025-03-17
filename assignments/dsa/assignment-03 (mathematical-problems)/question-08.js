/*

Question 08: Prime Factors

Description: Find all prime factors of a number.

Example:
Input: 30
Output: 2, 3, 5

Hint: Use division method.

*/
// Function to Find All Prime Factors of a Number (Accept Argument as Number & Return an Array)
const primeFactors = (num) => {
  // Handling Negative & Decimal Numbers
  num = Math.round(Math.abs(num));

  if (num < 2) return [];

  let finalOutput = [],
    primeFactor = 2;

  while (num !== 1) {
    while (num % primeFactor === 0) {
      num /= primeFactor;
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
    let output = primeFactors(num);
    for (let o of output) console.log(o);
  }
}

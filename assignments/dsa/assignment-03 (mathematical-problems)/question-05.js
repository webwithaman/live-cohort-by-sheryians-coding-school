/*

Question 05: Abundant Number

Description: A number is called abundant if the sum of its proper divisors (excluding the number itself) is greater than the number.

Example:
Input: 12
Output: Abundant Number
Explanation: Proper divisors: 1, 2, 3, 4, 6 → Sum = 16 (greater than 12).

Hint: Use a loop to find proper divisors.

*/

// Function to Check Whether a Number is Perfect Square or Not (Accept Agrgument as Number & Return Boolean Value)
const isAbundantNumber = (num) => {
  // // Handling Negative Numbers or num is Floating Point Number
  if (num < 0 || !Number.isInteger(num)) return false;

  let sum = 1;

  // Loop through divisors up to the square root of the number
  for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (!(num % i)) {
      sum += i;

      // Avoid adding the square root twice if `i` is the square root of `num`
      if (i !== num / i) sum += num / i;
    }
  }

  // Return true if the sum of divisors is greater than the number
  return sum > num;
};

// Take Input from User through Prompt
let num = prompt(
  "Enter A Number (Whole Number) to Check Whether It is an Abundant Number or Not",
  25
);

// If num is null or empty
if (!num) console.log("Did Not Give Any Input!!!");
else {
  // Convert Input into Number
  num = Number(num);

  // Check for Invalid Input & If Valid then Call isAbundantNumber()
  if (isNaN(num)) console.log("Invalid Input!!!");
  else if (isAbundantNumber(num))
    console.log(`Yes, ${num} is an Abundant Number`);
  else console.log(`No, ${num} is not an Abundant Number`);
}

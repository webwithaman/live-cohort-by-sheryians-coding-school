/*

Question 24:

Find the Missing Number in a Sequence – Take a list of
consecutive numbers (except one missing) and find the
missing number. Example: 1, 2, 3, 5 → Missing number is 4. 

*/

let consecutiveNumbers = prompt(
  "Enter Consecutive Numbers In Sequence Starting From 1 (Except One Missing)",
  "1,2,3,5"
);

let arrOfNums = consecutiveNumbers.split(","),
  sumOfConsecutiveNums = 0;

for (let i = 0; arrOfNums[i]; i++) sumOfConsecutiveNums += Number(arrOfNums[i]);

let missingNumber =
  (Number(arrOfNums[arrOfNums.length - 1]) *
    (Number(arrOfNums[arrOfNums.length - 1]) + 1)) /
    2 -
  sumOfConsecutiveNums;

document.write(`
  <h1>
    ${missingNumber} is the Missing Number From this Sequence (${consecutiveNumbers})
  </h1>
  `);

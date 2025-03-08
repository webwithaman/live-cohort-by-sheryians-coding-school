/*

Question 25:

Convert Number to Words – Take a single-digit number and
print it in words (Example: 1 → One, 2 → Two).

*/

let num = parseInt(prompt("Enter A Number (Integer)"));

if (Number.isNaN(num)) document.write(`<h1>Invalid Input!!!</h1>`);
else {
  let numbersInWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let reversedNum = 0,
    copyNum = num,
    numOfTrailingZeroes = 0,
    stopCounter = false;

  while (copyNum / 10) {
    reversedNum = reversedNum * 10 + (copyNum % 10);

    if (!(copyNum % 10) && !stopCounter) {
      numOfTrailingZeroes++;
    } else stopCounter = true;

    copyNum = parseInt(copyNum / 10);
  }

  document.write(`<h1>${num} in Word Form</h1>`);

  while (reversedNum / 10) {
    document.write(`<span>${numbersInWords[reversedNum % 10]} </span>`);
    reversedNum = parseInt(reversedNum / 10);
  }

  while (numOfTrailingZeroes--) document.write(`<span>zero </span>`);
}

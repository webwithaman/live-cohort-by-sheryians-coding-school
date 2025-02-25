/*

Question 16:

Sum of Digits – Take a number from the user and print the sum
of its digits. (Example: 123 → 1+2+3 = 6)

*/

let num = parseInt(prompt("Enter A Number (Integer)", 123));

if (Number.isNaN(num)) document.write(`<h1>Invalid Input!!!</h1>`);
else {
  let copyNum = num < 0 ? -num : num,
    sumOfDigits = copyNum % 10;

  copyNum = parseInt(copyNum / 10);

  while (copyNum / 10) {
    sumOfDigits += copyNum % 10;
    copyNum = parseInt(copyNum / 10);
  }

  document.write(`<h1>Sum of Digits of ${num} = ${sumOfDigits}</h1>`);
}

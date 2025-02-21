/*

Question 15:

Number Reversal – Take a three-digit number from the user
and print its reverse. (Example: 123 → 321).

*/

let num = Number(prompt("Enter A Three digit Number", 123));

if (Number.isNaN(num)) document.write(`<h1>Invalid Input!!!</h1>`);
else {
  let reversedNum = 0,
    copyNum = num;

  while (copyNum / 10) {
    reversedNum = reversedNum * 10 + (copyNum % 10);
    copyNum = parseInt(copyNum / 10);
  }

  document.write(`<h1>Reverse of ${num} = ${reversedNum}</h1>`);
}

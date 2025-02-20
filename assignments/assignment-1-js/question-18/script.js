/*

Question 18:

Reverse Without String Methods – Ask the user for a number
and reverse it without using .split(), .reverse(), or .join(). 

*/

let num = Number(prompt("Enter A Number", 3875));

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

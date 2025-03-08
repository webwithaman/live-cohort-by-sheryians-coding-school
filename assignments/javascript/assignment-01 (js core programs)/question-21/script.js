/*

Question 21:

Even Digit Counter – Take a number from the user and count
how many even digits it has.

*/

let num = parseInt(prompt("Enter A Number (Integer)", 82769));

if (Number.isNaN(num)) document.write(`<h1>Invalid Input!!!</h1>`);
else {
  let evenDigitsCounter = 0;
  copyNum = num;

  while (copyNum / 10) {
    evenDigitsCounter += (copyNum % 10) % 2 == 0 ? 1 : 0;
    copyNum = parseInt(copyNum / 10);
  }

  document.write(`<h1>${num} has ${evenDigitsCounter} Even Digits</h1>`);
}

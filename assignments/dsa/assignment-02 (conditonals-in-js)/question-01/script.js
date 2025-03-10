/*

Question 1: Indian Currency Notes Breakdown

You need to write a program where the user inputs an amount in Indian Rupees, and the program should output the number of currency notes required to make up that amount using the largest denominations first.
Denominations Available (Indian Rupees): ₹2000, ₹500, ₹200, ₹100, ₹50, ₹20, ₹10, ₹5, ₹2, ₹1

Example 1:

Input:
Amount: 4327

Output:
₹2000 x 2
₹500 x 0
₹200 x 1
₹100 x 1
₹50 x 0
₹20 x 1
₹10 x 0
₹5 x 1
₹2 x 1
₹1 x 0

*/

let amount = parseInt(prompt("Enter Amount in Indian Rupees", 4327));

if (Number.isNaN(amount)) console.log("Invalid Input!!!");
else {
  document.writeln(`<h2>₹2000 x ${Math.floor(amount / 2000)}</h2>`);
  amount %= 2000;

  document.writeln(`<h2>₹500 x ${Math.floor(amount / 500)}</h2>`);
  amount %= 500;

  document.writeln(`<h2>₹200 x ${Math.floor(amount / 200)}</h2>`);
  amount %= 200;

  document.writeln(`<h2>₹100 x ${Math.floor(amount / 100)}</h2>`);
  amount %= 100;

  document.writeln(`<h2>₹50 x ${Math.floor(amount / 50)}</h2>`);
  amount %= 50;

  document.writeln(`<h2>₹20 x ${Math.floor(amount / 20)}</h2>`);
  amount %= 20;

  document.writeln(`<h2>₹10 x ${Math.floor(amount / 10)}</h2>`);
  amount %= 10;

  document.writeln(`<h2>₹5 x ${Math.floor(amount / 5)}</h2>`);
  amount %= 5;

  document.writeln(`<h2>₹2 x ${Math.floor(amount / 2)}</h2>`);
  amount %= 2;

  document.writeln(`<h2>₹1 x ${amount}`);
}

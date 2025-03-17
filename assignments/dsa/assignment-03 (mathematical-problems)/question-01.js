/*

Question 01: ISBN Number

Description: An ISBN (International Standard Book Number) is a unique 10-digit number assigned to books. The ISBN is valid if the sum of its digits, each multiplied by its position (1 to 10), is divisible by 11. (Validate Based on ISBN-10 Validation Rules)

Example:
Input: 020131452
Output: Invalid ISBN
Explanation: The sum of the digits multiplied by their positions is not divisible by 11.

Input: 0471958697
Output: Valid ISBN
Explanation: (0×1 + 4×2 + 7×3 + ... + 7×10) is divisible by 11.

Hint: Use a loop to multiply each digit by its respective position and check divisibility by 11.

*/

// Function to Check Whether the Given ISBN Number (Based on ISBN-10 Validation Rules) is Valid or Not (Accept Argument as String & Return Boolean Value)
const isValidISBN = (ISBN) => {
  if (ISBN?.length === 10) {
    ISBN = Number(ISBN);

    if (Number.isNaN(ISBN) || ISBN < 0) return false;

    let sum = 0,
      revPos = 10;

    while (ISBN) {
      sum += (ISBN % 10) * revPos--;
      ISBN = parseInt(ISBN / 10);
    }

    return sum % 11 === 0;
  } else console.log("Plz Pass Valid Argument to Function!!");

  return false;
};

// Take Input from User through Prompt
let ISBN = prompt(
  "Enter An ISBN Number (Must be a Non-Negative Number with 10 Digits)",
  120134327
);

// If ISBN is Not null then Validate using isValidISBN Function
if (ISBN === null) console.log("Did Not Give Any Input!!!");
else if (isValidISBN(undefined)) console.log("Yes, It's a Valid ISBN Number");
else console.log("No, It's not a Valid ISBN Number");

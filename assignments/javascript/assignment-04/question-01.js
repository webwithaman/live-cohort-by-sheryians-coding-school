/*

Question 01:

Remove duplicate values from an array.

*/

let arr = [1, 2, 3, 2, 4, 3, 5];

let uniqueArr = [...new Set(arr)];

console.log(uniqueArr); // [1, 2, 3, 4, 5]

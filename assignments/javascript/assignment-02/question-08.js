/*

Question 08:

Check if "JavaScript" contains "Script" without using .includes().

*/

let str = "JavaScript";

// Method 1: Using .indexOf()
console.log(str.indexOf("Script") !== -1); // true

// Method 2: Using .search()
console.log(str.search("Script") !== -1); // true

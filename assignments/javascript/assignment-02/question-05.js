/*

Question 05:

Use console.group() to organize logs into a group.

*/

console.group("User Info");
console.log("Name: John Doe");
console.log("Age: 25");
console.log("City: New York");
console.groupEnd();

console.groupCollapsed("Collapsed Group Example");
console.log("This content is collapsed by default.");
console.groupEnd();

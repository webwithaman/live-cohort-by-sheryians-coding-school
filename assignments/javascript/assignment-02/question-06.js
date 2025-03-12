/*

Question 06:

Declare a const object, modify its properties, and log the updated object.

*/

const person = { name: "Alice", age: 25, city: "New York" };

console.log("Before update:", person);

// Modifying properties
person.age = 26;
person.city = "Los Angeles";

// Adding a new property
person.country = "USA";

console.log("After update:", person);

/*

Question 02:

Creating a Function with a Present Greeting (Closures)

*/

function greetUser(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

// Example usage
const greetHello = greetUser("Hello");

console.log(greetHello("Alice")); // "Hello, Alice!"
console.log(greetHello("Bob")); // "Hello, Bob!"

/*

Question 03:

Write a function that uses closures to create a counter.

*/

function createCounter() {
  let count = 0;
  return function () {
    // Closure retains access to `count`
    return ++count;
  };
}

// Example usage
const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

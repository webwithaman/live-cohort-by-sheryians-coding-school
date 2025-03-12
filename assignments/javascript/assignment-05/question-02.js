/*

Question 02:

Implement your own version of `.map()` as a higher-order function.

*/

function customMap(array, callback) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array)); // Apply callback to each element
  }

  return result;
}

// Example usage
console.log(customMap([1, 2, 3], (num) => num * 2)); // Output: [2, 4, 6]

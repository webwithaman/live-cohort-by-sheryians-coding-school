/*

Question 03:

Executing a Function Only Once on Calling (HOF, Callback & Closure)

*/

function once(fn) {
  let executed = false;

  return function (...args) {
    if (!executed) {
      executed = true;
      return fn(...args);
    }
  };
}

// Example usage
const init = once(() => console.log("Initialized!"));

init(); // "Initialized!"
init(); // (No output)

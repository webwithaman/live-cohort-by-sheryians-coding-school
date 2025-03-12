/*

Question 04:

Throttling a Function (HOF, Callback & Closure)

*/

function throttle(fn, delay) {
  let lastCall = 0;

  return function () {
    let now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn();
    }
  };
}

// Example usage
const throttledFn = throttle(() => console.log("Throttled Execution"), 2000);

throttledFn();
throttledFn();
throttledFn();

// Only executes the first call,
// others are ignored until 2 sec passes

/*

Question 01:

Implement a function that limits how many times another function can be called (Closure + HOF).

*/

function limit(fn, limit) {
  let calledtimes = 0;

  return function () {
    if (calledtimes < limit) {
      calledtimes++;
      fn();
    }
  };
}

// Example usage
let fn = limit(() => console.log("hello"), 3);

fn(); // "hello"
fn(); // "hello"
fn(); // "hello"
fn(); // (No output, limit reached)

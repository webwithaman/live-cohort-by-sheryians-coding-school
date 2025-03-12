/*

Question 01:

Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).

*/

function delayedExecution(callback) {
  setTimeout(callback, 3000);
}

delayedExecution(() => console.log("Executed after 3 seconds"));

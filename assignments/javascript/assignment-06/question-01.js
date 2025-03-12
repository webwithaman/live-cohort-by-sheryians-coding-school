/*

Question 01:

Repeating a Callback Function at Intervals

*/

function repeatFunction(callback, interval) {
  setInterval(callback, interval * 1000);
}

// Example usage
repeatFunction(() => console.log("Repeating..."), 2); // Logs "Repeating..." every 2 seconds

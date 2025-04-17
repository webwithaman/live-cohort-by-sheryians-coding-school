/**
 * Check whether a number is even or odd using bitwise operators.
 * @param {number} n - The input number
 * @return {string} - "Even" or "Odd"
 */
function checkEvenOdd(n) {
  return n & 1 ? "Odd" : "Even";
}

module.exports = { checkEvenOdd };

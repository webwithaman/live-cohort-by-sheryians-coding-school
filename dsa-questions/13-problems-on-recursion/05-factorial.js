/**
 * Recursive function to calculate factorial of a number
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

module.exports = { factorial };

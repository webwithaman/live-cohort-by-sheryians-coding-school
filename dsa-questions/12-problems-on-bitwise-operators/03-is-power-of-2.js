/**
 * Check whether a number is a power of two using bitwise operations.
 * @param {number} n - The input number
 * @return {boolean} - true if it is a power of two, false otherwise
 */
function isPowerOfTwo(n) {
  return (n & (n - 1)) === 0 && n !== 0 ? "true" : "false";
}

module.exports = { isPowerOfTwo };

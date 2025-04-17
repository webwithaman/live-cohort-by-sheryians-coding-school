/**
 * Swap two numbers using bitwise XOR without a third variable.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @return {number[]} - Swapped values [a, b]
 */
function swapNumbers(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  return [a, b];
}

module.exports = { swapNumbers };

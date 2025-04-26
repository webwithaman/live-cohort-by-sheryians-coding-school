/**
 * Find the GCD of two numbers using recursion
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function gcd(a, b) {
  if (!(a % b)) return b;
  return gcd(b, a % b);
}

module.exports = { gcd };

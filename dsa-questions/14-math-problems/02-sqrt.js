/**
 * Find the integer square root of n.
 * @param {number} n
 * @return {number}
 */
function mySqrt(n) {
  for (var i = 0; i * i <= n; i++) {
    if (i * i === n) return i;
  }

  return i - 1;
}

module.exports = { mySqrt };

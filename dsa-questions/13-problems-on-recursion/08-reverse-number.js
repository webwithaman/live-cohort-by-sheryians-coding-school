/**
 * Print the reverse of the digits of the given number
 * @param {number} n
 */
function reverseDigits(n) {
  function reverse(n, rev) {
    if (n == 0) return rev;
    return reverse(Math.trunc(n / 10), rev * 10 + (n % 10));
  }

  console.log(reverse(n, 0));
}

module.exports = { reverseDigits };

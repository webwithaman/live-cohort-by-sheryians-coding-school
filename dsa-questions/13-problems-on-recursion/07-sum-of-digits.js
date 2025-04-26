/**
 * Print the sum of digits of the given number
 * @param {number} n
 */
function sumOfDigits(n) {
  function SOD(n) {
    if (n < 10) return n;
    return (n % 10) + SOD(Math.floor(n / 10));
  }

  console.log(SOD(n));
}

module.exports = { sumOfDigits };

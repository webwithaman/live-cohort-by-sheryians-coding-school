/**
 * Recursively prints natural numbers from n to 1, separated by a space.
 * @param {number} n
 */
function printNumbers(n) {
  if (n) {
    process.stdout.write(n + " ");
    printNumbers(n - 1);
  }
}

module.exports = { printNumbers };

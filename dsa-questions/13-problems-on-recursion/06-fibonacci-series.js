/**
 * Print Fibonacci series up to n terms using recursion
 * @param {number} n
 * @returns {void}
 */
function printFibonacci(n) {
  if (n <= 0) {
    process.stdout.write("Invalid input");
    return;
  }

  for (let i = 0; i < n; i++) process.stdout.write(nthTermOfFibonacci(i) + " ");

  function nthTermOfFibonacci(nth) {
    if (nth == 0) return 0;
    if (nth == 1) return 1;
    return nthTermOfFibonacci(nth - 1) + nthTermOfFibonacci(nth - 2);
  }
}

module.exports = { printFibonacci };

/**
 * Count prime numbers less than n.
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
  let isPrime = new Array(n).fill(true);

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (isPrime[i]) {
      for (let j = i * 2; j <= n; j += i) isPrime[j] = false;
    }
  }

  let countPrimes = 0;
  for (let i = 2; i < isPrime.length; i++) {
    if (isPrime[i]) countPrimes++;
  }

  return countPrimes;
}

module.exports = { countPrimes };

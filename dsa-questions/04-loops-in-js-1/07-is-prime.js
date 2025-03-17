function isPrime(n) {
  if (n < 2) return "Not Prime";
  if (n == 2) return "Prime";
  if (n % 2 == 0) return "Not Prime";
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i == 0) return "Not Prime";
  }
  return "Prime";
}

module.exports = { isPrime };

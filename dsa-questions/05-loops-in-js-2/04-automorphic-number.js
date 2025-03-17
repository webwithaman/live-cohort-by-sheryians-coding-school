function isAutomorphic(n) {
  let digitsCount = 0,
    copyOfN = n;

  while (copyOfN) {
    digitsCount++;
    copyOfN = Math.floor(copyOfN / 10);
  }

  return n === (n * n) % Math.pow(10, digitsCount) ? "Yes" : "No";
}

module.exports = { isAutomorphic };

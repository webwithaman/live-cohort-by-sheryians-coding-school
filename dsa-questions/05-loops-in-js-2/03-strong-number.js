function isStrongNumber(n) {
  let sum = 0,
    copyOfN = n;

  while (n) {
    num = n % 10;
    let fact = 1;

    while (num > 1) fact *= num--;

    sum += fact;

    n = Math.floor(n / 10);
  }

  return sum === copyOfN ? "Yes" : "No";
}

module.exports = { isStrongNumber };

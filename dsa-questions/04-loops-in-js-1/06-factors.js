function printFactors(n) {
  process.stdout.write("1 ");

  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i == 0) process.stdout.write(i + " ");
  }

  if (n != 1) process.stdout.write(n + " ");
}

module.exports = { printFactors };

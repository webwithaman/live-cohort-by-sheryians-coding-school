function printNaturalNumbers(n) {
  // // Print in Mutiple Lines
  //   for (let i = 1; i <= n; i++) console.log(i);

  // // Print in Single Line
  for (let i = 1; i <= n; i++) process.stdout.write(i + " ");
}

module.exports = { printNaturalNumbers };

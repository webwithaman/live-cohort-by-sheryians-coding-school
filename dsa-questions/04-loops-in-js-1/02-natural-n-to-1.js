function printNto1(n) {
  // // Print in Mutiple Lines
  //   while (n) console.log(n--);

  // // Print in Single Line
  while (n) process.stdout.write(n-- + " ");
}

module.exports = { printNto1 };

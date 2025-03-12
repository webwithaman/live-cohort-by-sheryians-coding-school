function swapNumbers(a, b) {
  // // Using Third Variable
  let temp = a;
  a = b;
  b = temp;

  return [a, b];
}

module.exports = { swapNumbers };

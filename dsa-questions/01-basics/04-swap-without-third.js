function swapNumbers(a, b) {
  // // 1st Approach
  a = a + b - (b = a);

  // // 2nd Approach
  // [a, b] = [b, a];

  // // 3rd Approach
  // a = a + b;
  // b = a - b;
  // a = a - b;

  // // 4th Approach
  // a = a * b;
  // b = a / b;
  // a = a / b;

  // // 5th Approach
  // a = a ^ b;
  // b = a ^ b;
  // a = a ^ b;

  // // 6th Approach
  // let temp = a;
  // b = a;
  // a = temp;

  return [a, b];
}

module.exports = { swapNumbers };

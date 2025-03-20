function printRightTriangleNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let numbers = "";
    for (let j = 1; j <= i; j++) numbers += j + " ";
    console.log(numbers);
  }
}

module.exports = { printRightTriangleNumbers };

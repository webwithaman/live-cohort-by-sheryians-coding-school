function printVShapePattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n * 2 - 1; j++)
      process.stdout.write(j === i || j === n * 2 - i ? "*" : " ");
    console.log();
  }
}

module.exports = { printVShapePattern };

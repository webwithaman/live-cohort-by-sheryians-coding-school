function printXShapePattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++)
      process.stdout.write(j === i || j === n + 1 - i ? "*" : " ");
    console.log();
  }
}

module.exports = { printXShapePattern };

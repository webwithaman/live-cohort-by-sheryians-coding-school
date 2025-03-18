function printInvertedRightTriangle(n) {
  for (let i = n; i; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) stars += "* ";
    console.log(stars);
  }
}

module.exports = { printInvertedRightTriangle };

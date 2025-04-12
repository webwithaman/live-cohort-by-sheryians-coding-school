function diagonalSum(mat) {
  let sum = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (i === j || i + j === mat.length - 1) sum += mat[i][j];
    }
  }

  return sum;
}

module.exports = { diagonalSum };

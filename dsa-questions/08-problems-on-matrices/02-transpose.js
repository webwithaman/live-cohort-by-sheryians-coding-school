function transposeMatrix(mat) {
  let resMat = Array.from({ length: mat[0].length }, () => Array(mat.length));

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      resMat[j][i] = mat[i][j];
    }
  }

  return resMat;
}

module.exports = { transposeMatrix };

function rotateImage(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let k = 0,
      l = matrix[i].length - 1;
    while (k < l) {
      let temp = matrix[i][k];
      matrix[i][k] = matrix[i][l];
      matrix[i][l] = temp;
      k++;
      l--;
    }
  }
}

module.exports = { rotateImage };

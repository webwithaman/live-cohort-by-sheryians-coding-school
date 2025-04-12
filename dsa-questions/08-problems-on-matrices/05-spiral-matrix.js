/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let spiralOrder = [],
    totalElements = matrix.length * matrix[0].length,
    minRow = 0,
    maxRow = matrix.length - 1,
    minCol = 0,
    maxCol = matrix[0].length - 1,
    index = 0;

  while (index < totalElements) {
    for (let i = minCol; i <= maxCol; i++, index++)
      spiralOrder[index] = matrix[minRow][i];
    minRow++;

    for (let i = minRow; i <= maxRow; i++, index++)
      spiralOrder[index] = matrix[i][maxCol];
    maxCol--;

    if (spiralOrder.length === totalElements) break;

    for (let i = maxCol; i >= minCol; i--, index++)
      spiralOrder[index] = matrix[maxRow][i];
    maxRow--;

    for (let i = maxRow; i >= minRow; i--, index++)
      spiralOrder[index] = matrix[i][minCol];
    minCol++;
  }

  return spiralOrder;
};

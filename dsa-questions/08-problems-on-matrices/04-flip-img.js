/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    let k = 0,
      l = image[i].length - 1;
    while (k < l) {
      let temp = image[i][k];
      image[i][k] = image[i][l];
      image[i][l] = temp;
      k++;
      l--;
    }
  }

  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      image[i][j] = 1 - image[i][j];
    }
  }

  return image;
};

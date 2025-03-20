function moveZerosInPlace(arr) {
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    if (arr[i] === 0) {
      if (arr[j] !== 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
      j--;
    } else i++;
  }

  return arr;
}

module.exports = { moveZerosInPlace };

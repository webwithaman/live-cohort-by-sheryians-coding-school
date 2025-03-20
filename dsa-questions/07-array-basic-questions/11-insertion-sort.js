function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (arr[j - 1] > arr[j] && j > 0) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
}

module.exports = { insertionSort };

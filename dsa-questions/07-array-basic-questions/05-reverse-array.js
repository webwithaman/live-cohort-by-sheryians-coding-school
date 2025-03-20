function reverseArrayInPlace(arr) {
  let startIndex = 0,
    endIndex = arr.length - 1;

  while (startIndex < endIndex) {
    [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]];
    startIndex++;
    endIndex--;
  }
}

module.exports = { reverseArrayInPlace };

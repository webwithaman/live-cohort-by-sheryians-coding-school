function findSecondGreatestElement(arr) {
  let max = Math.max(arr[0], arr[1]),
    secondMax = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) secondMax = arr[i];
  }

  return secondMax;
}

module.exports = { findSecondGreatestElement };

function copyAndReversecopyOfArray(arr) {
  let copyOfArr = [...arr],
    startIndex = 0,
    endIndex = arr.length - 1;

  while (startIndex < endIndex) {
    [copyOfArr[startIndex], copyOfArr[endIndex]] = [
      copyOfArr[endIndex],
      copyOfArr[startIndex],
    ];
    startIndex++;
    endIndex--;
  }

  return copyOfArr;
}

module.exports = { copyAndReversecopyOfArray };

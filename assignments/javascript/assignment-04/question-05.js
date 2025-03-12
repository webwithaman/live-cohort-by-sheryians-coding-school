/*

Question 05:

Find the most frequent element in an array.

*/

function mostFrequent(arr) {
  let freqMap = {},
    maxFreq = 0,
    mostFrequentNum = null;

  for (let num of arr) {
    freqMap[num] = (freqMap[num] || 0) + 1;

    if (freqMap[num] > maxFreq) {
      maxFreq = freqMap[num];
      mostFrequentNum = num;
    }
  }

  return mostFrequentNum;
}

console.log(mostFrequent([1, 3, 3, 2, 3, 2, 2, 2, 2, 21])); // 2

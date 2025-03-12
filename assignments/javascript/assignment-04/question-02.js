/*

Question 02:

Find the second largest number in an array.

*/

function secondLargest(arr) {
  let sorted = [...new Set(arr)].sort((a, b) => b - a);

  return sorted.length > 1 ? sorted[1] : null;
}

console.log(secondLargest([10, 20, 5, 30, 30])); // 20

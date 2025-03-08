// Find Output of the Following Code:

let i = 19,
  j = 29,
  k;

k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;

console.log("i=" + i); // i=19
console.log("j=" + j); // j=29
console.log("k=" + k); // k=-20

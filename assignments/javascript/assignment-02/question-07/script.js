// Find Output

let i = 19,
  j = 29,
  k;

k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;

console.log("i=" + i);
console.log("j=" + j);
console.log("k=" + k);

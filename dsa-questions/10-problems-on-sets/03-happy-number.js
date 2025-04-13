/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let sum,
    copy = n,
    rem,
    set = new Set();

  do {
    sum = 0;
    while (copy) {
      rem = copy % 10;
      sum += rem * rem;
      copy = Math.floor(copy / 10);
    }

    if (set.has(sum)) return false;

    set.add(sum);

    copy = sum;
  } while (sum != 1);

  return true;
};

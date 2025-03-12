function calculatePower(a, b) {
  if (a == 0 && b == 0) return "Undefined";

  if (b == 0) return 1;

  let res = 1,
    temp = Math.abs(b);

  while (temp--) res *= a;

  return b < 0 ? 1 / res : res;
}

module.exports = { calculatePower };

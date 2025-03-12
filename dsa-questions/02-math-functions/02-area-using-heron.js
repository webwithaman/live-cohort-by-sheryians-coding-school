function calculateTriangleArea(a, b, c) {
  // Semi Perimeter
  let s = (a + b + c) / 2;

  return Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
}

module.exports = { calculateTriangleArea };

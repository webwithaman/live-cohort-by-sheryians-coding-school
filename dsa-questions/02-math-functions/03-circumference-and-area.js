function calculateCircleProperties(r) {
  let circum = +(2 * Math.PI * r).toFixed(2);
  let area = +(Math.PI * r * r).toFixed(2);

  return [circum, area];
}

module.exports = { calculateCircleProperties };

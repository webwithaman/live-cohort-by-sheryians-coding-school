function calculateElectricityBill(unit) {
  let billAmount = 0;

  if (unit > 400) {
    billAmount += (unit - 400) * 13;
    unit = 400;
  }

  if (unit >= 201) {
    billAmount += (unit - 200) * 8;
    unit = 200;
  }

  if (unit >= 101) {
    billAmount += (unit - 100) * 6;
    unit = 100;
  }

  billAmount += unit * 4.2;

  return billAmount.toFixed(1);
}

module.exports = { calculateElectricityBill };

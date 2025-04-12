/**
 * @param {string} str
 * @return {void} - print ['a: 2', 'b: 1']
 */
function characterFrequency(str) {
  let freqObj = {};

  str = str.split("").sort().join("");

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
      freqObj[str[i]] = (freqObj[str[i]] || 0) + 1;
  }

  for (let key in freqObj) {
    console.log(`${key}: ${freqObj[key]}`);
  }
}

module.exports = { characterFrequency };

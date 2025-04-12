/**
 * @param {string} str
 * @return {string}
 */

function reverseString(str) {
  let revStr = "";

  for (let i = str.length - 1; i > -1; i--) revStr += str[i];

  return revStr;
}

module.exports = { reverseString };

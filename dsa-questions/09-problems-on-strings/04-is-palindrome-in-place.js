/**
 * @param {string} str
 * @return {string}
 */
function isPalindromeInPlace(str) {
  let i = 0,
    j = str.length - 1;

  while (i < j) {
    if (str[i] != str[j]) return "No";

    i++;
    j--;
  }

  return "Yes";
}

module.exports = { isPalindromeInPlace };

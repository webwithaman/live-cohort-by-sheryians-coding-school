/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
function countPrefixMatch(words, pref) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) count++;
  }

  return count;
}

module.exports = { countPrefixMatch };

/**
 * Check if two strings are anagrams of each other.
 * @param {string} s1 - First string
 * @param {string} s2 - Second string
 * @return {boolean} - true if anagrams, false otherwise
 */
function isAnagram(s1, s2) {
  if (s1.length != s2.length) return false;

  s1 = s1.split("").sort().join("");
  s2 = s2.split("").sort().join("");

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i]) return false;
  }

  return true;
}

module.exports = { isAnagram };

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  // 1st Approach
  return new Set(sentence.split("")).size === 26;

  // 2nd Approach
  // let arrayOfAscii = [];
  // for (let i = 0; i < sentence.length; i++) {
  //     arrayOfAscii[i] = sentence.charCodeAt(i);
  // }
  // return new Set(arrayOfAscii).size === 26
};

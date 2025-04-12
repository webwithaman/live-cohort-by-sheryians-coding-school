/**
 * @param {string} str
 * @return {string}
 */
function capitalizeEnds(str) {
  let arrayOfWords = str.split(" "),
    result = "";

  for (let i = 0; i < arrayOfWords.length; i++) {
    let word = arrayOfWords[i];

    if (word.length <= 2) result += word.toUpperCase();
    else
      result +=
        word[0].toUpperCase() +
        word.slice(1, word.length - 1) +
        word[word.length - 1].toUpperCase();

    result += " ";
  }

  return result.trimEnd();
}

module.exports = { capitalizeEnds };

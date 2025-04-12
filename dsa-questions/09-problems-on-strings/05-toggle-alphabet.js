/**
 * @param {string} str
 * @return {string}
 */
function toggleCase(str) {
  let toggledStr = "";

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90)
      toggledStr += String.fromCharCode(charCode + 32);
    else if (charCode >= 97 && charCode <= 122)
      toggledStr += String.fromCharCode(charCode - 32);
    else toggledStr += str[i];
  }

  return toggledStr;
}

module.exports = { toggleCase };

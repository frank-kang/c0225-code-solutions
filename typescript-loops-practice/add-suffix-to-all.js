'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const concattedStrings = [];
  let newString = '';
  for (let i = 0; i < words.length; i++) {
    newString = words[i] + suffix;
    concattedStrings.push(newString);
  }
  return concattedStrings;
}

'use strict';
/* exported capitalize */
function capitalize(word) {
  const firstLetter = word[0].toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();
  const newWord = firstLetter + restOfWord;
  return newWord;
}

'use strict';
/* exported getWords */
function getWords(words) {
  let newWords = [];
  if (words.length !== 0) {
    newWords = words.split(' ');
    return newWords;
  } else {
    return [];
  }
}

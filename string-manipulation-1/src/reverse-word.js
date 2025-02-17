'use strict';
/* exported reverseWord */
function reverseWord(word) {
  let reversedArray = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedArray += word[i];
  }
  return reversedArray;
}

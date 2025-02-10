'use strict';
/* exported capitalize */
function capitalize(str) {
  let newStr = '';
  for (let i = 0; i < str.length - 1; i++) {
    if (i === 0) {
      newStr += str[i].toUpperCase;
    } else {
      newStr += str[i].toLowerCase;
    }
  }
  return newStr;
}

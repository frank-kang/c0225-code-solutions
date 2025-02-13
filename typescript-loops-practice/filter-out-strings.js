'use strict';
/* exported filterOutStrings */
function filterOutStrings(arr) {
  const arrayWithOutStrings = [];
  for (const i of arr) {
    if (typeof i !== 'string') {
      arrayWithOutStrings.push(i);
    }
  }
  return arrayWithOutStrings;
}

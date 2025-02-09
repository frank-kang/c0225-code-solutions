'use strict';
/* exported includesSeven */
function includesSeven(arr) {
  for (const i of arr) {
    if (i === 7) {
      return true;
    }
  }
  return false;
}

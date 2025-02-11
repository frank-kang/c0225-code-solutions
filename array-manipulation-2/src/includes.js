'use strict';
/* exported includes */
function includes(array, value) {
  for (let i = 0; i < array.length - 1; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}

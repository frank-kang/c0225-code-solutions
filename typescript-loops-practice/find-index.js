'use strict';
/* exported findIndex */
function findIndex(arr, value) {
  let index = -1;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === value) {
      index = i;
      return index;
    }
  }
  return index;
}

'use strict';
/* exported take */
function take(array, count) {
  const newArray = [];
  for (let i = 0; i < count; i++) {
    if (array.length === 0) {
      return [];
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

'use strict';
/* exported takeRight */
function takeRight(array, count) {
  const newArray = [];
  if (array.length === 0) {
    return [];
  } else if (count > array.length) {
    return array;
  } else {
    for (let i = array.length - count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

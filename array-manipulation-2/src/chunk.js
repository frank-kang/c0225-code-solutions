'use strict';
/* exported chunk */
function chunk(array, size) {
  let newArray = [];
  const chunkedArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
    if (newArray.length === size) {
      chunkedArray.push(newArray);
      newArray = [];
    }
  }
  if (newArray.length > 0) {
    chunkedArray.push(newArray);
  }
  return chunkedArray;
}

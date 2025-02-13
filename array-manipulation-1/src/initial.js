'use strict';
/* exported initial */
function initial(arr) {
  const initialElements = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (i !== arr.length - 1) {
      initialElements.push(arr[i]);
    }
  }
  return initialElements;
}

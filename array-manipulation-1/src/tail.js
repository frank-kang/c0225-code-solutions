'use strict';
/* exported tail */
function tail(arr) {
  const tailArray = [];
  for (let i = 1; i <= arr.length - 1; i++) {
    tailArray.push(arr[i]);
  }
  return tailArray;
}

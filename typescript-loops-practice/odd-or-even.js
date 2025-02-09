'use strict';
/* exported oddOrEven */
function oddOrEven(arr) {
  let isEven = '';
  const result = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      isEven = 'even';
    } else {
      isEven = 'odd';
    }
    result.push(isEven);
  }
  return result;
}

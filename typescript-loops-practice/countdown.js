'use strict';
/* exported countdown */
function countdown(num) {
  const backwards = [];
  for (let i = num; i >= 0; i--) {
    backwards.push(i);
  }
  return backwards;
}

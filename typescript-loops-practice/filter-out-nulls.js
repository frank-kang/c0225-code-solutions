'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const nonNulls = [];
  for (const value of values) {
    if (value != null) {
      nonNulls.push(value);
    }
  }
  return nonNulls;
}

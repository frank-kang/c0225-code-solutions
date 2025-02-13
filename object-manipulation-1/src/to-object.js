'use strict';
/* exported toObject */
function toObject(pair) {
  const object = {};
  const [inputString, value] = pair;
  object[inputString] = value;
  return object;
}

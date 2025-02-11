/* exported toObject */
function toObject(pair: [string, any]): object {
  const object: object = {};
  const [inputString, value] = pair;
  object[inputString] = value;
  return object;
}

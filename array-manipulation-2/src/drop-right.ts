/* exported dropRight */
function dropRight(array: any[], count: number): any[] {
  const newArray: any[] = [];
  if (count >= array.length) {
    return [];
  } else {
    for (let i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

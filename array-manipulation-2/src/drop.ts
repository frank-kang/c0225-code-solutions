/* exported drop */
function drop(array: any[], count: number): any[] {
  const newArray: any[] = [];
  for (let i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

/* exported compact */
function compact(arr: any[]): any[] {
  const compactArray: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] !== false &&
      arr[i] !== 0 &&
      !Number.isNaN(arr[i]) &&
      arr[i] !== null &&
      arr[i] !== undefined &&
      arr[i] !== ''
    ) {
      compactArray.push(arr[i]);
    }
  }
  return compactArray;
}

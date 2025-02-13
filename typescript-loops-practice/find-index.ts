/* exported findIndex */
function findIndex(arr: any[], value: any): number {
  let index: number = -1;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === value) {
      index = i;
      return index;
    }
  }
  return index;
}

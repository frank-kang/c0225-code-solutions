/* exported reverse */
function reverse(arr: any[]): any[] {
  const reversedArray: any[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

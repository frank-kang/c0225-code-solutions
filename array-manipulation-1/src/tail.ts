/* exported tail */
function tail(arr: any[]): any[] {
  const tailArray: any[] = [];
  for (let i = 1; i <= arr.length - 1; i++) {
    tailArray.push(arr[i]);
  }
  return tailArray;
}

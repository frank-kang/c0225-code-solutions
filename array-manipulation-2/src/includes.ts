/* exported includes */
function includes(array: any[], value: any): boolean {
  for (let i = 0; i < array.length - 1; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}

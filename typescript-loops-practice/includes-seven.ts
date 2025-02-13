/* exported includesSeven */
function includesSeven(arr: any[]): boolean {
  for (const i of arr) {
    if (i === 7) {
      return true;
    }
  }
  return false;
}

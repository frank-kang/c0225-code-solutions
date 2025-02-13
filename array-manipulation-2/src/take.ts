/* exported take */
function take(array: any[], count: number): string[] {
  const newArray: any[] = [];
  for (let i = 0; i < count; i++) {
    if (array.length === 0) {
      return [];
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

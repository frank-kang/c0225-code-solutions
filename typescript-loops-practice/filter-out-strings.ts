/* exported filterOutStrings */
function filterOutStrings(arr: any[]): any[] {
  const arrayWithOutStrings: any[] = [];
  for (const i of arr) {
    if (typeof i !== 'string') {
      arrayWithOutStrings.push(i);
    }
  }
  return arrayWithOutStrings;
}

/* exported capitalize */
function capitalize(str: string): string {
  let newStr: string = '';
  for (let i = 0; i < str.length - 1; i++) {
    if (i === 0) {
      newStr += str[i].toUpperCase;
    } else {
      newStr += str[i].toLowerCase;
    }
  }
  return newStr;
}

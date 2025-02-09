/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const concattedStrings: string[] = [];
  let newString: string = '';
  for (let i = 0; i < words.length; i++) {
    newString = words[i] + suffix;
    concattedStrings.push(newString);
  }
  return concattedStrings;
}

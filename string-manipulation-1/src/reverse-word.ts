/* exported reverseWord */
function reverseWord(word: string): string {
  let reversedArray: string = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedArray += word[i];
  }
  return reversedArray;
}

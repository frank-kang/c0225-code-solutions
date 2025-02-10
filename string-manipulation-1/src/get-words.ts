/* exported getWords */
function getWords(words: string): string[] {
  let newWords: string[] = [];
  if (words.length !== 0) {
    newWords = words.split(' ');
    return newWords;
  } else {
    return [];
  }
}

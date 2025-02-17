'use strict';
/* exported isVowel */
function isVowel(character) {
  switch (character.toLowerCase()) {
    case 'a':
      return true;
    case 'e':
      return true;
    case 'i':
      return true;
    case 'o':
      return true;
    case 'u':
      return true;
    default:
      return false;
  }
}

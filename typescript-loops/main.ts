/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */
function getNumbersToTen(): number[] {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumberToTen()');
console.log(getNumbersToTen());
console.log(getNumbersToTen());

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20 && currentNumber % 2 === 0) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty');
console.log(getEvenNumbersToTwenty());
console.log(getEvenNumbersToTwenty());

function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log("repeatWord('frank', 4)");
console.log(repeatWord('frank', 4));

function logEachCharacter(str: string): void {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
console.log("logEachCharacter('Joy Division')");
console.log(logEachCharacter('Joy Division'));

function doubleAll(numbers: number[]): number[] {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll([1, 2, 3, 4, 5, 6, 7, 8, 9])');
console.log(doubleAll([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function sumArray(numbers: number[]): number {
  let sum = 0;
  for (const num of numbers) {
    sum = sum + num;
  }
  return sum;
}
console.log('sumArray([1, 2, 3, 4, 5])');
console.log(sumArray([1, 2, 3, 4, 5]));

function reverseString(str: string): string {
  let reversed = '';
  for (const i of str) {
    reversed = i + reversed;
  }
  return reversed;
}
console.log("reverseString('frank')");
console.log(reverseString('frank'));

// type CatName = 'miffy' | 'boris' | 'mordred';
// interface CatInfo {
//   age: number;
//   breed: string;
// }
// const cats: Record<CatName, CatInfo> = {
//   miffy: { age: 10, breed: 'Persian' },
//   boris: { age: 5, breed: 'Main Coon' },
//   mordred: { age: 16, breed: 'British Shorthair' },
// };
// console.log(cats.boris);

// type PersonName = 'Frank' | 'Malu' | 'Tony';
// interface PersonInfo {
//   age: number;
//   occupation: string;
// }
// const person: Record<PersonName, PersonInfo> = {
//   Frank: { age: 55, occupation: 'Father' },
//   Malu: { age: 11, occupation: 'Student' },
//   Tony: { age: 85, occupation: 'Lawyer' },
// };
// console.log(person.Malu);

const book: Record<string, unknown> = {
  isbn: '12345',
  title: 'Some title',
  author: 'Popeye',
};

function getKeys(obj: Record<string, unknown>): string[] {
  const keys = [];
  for (const i in obj) {
    keys.push(i);
  }
  return keys;
}
console.log(getKeys(book));

function getValues(obj: Record<string, unknown>): any[] {
  const values = [];
  for (const i in obj) {
    values.push(obj[i]);
  }
  return values;
}
console.log(getValues(book));

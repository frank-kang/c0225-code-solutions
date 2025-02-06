'use strict';
const heroes = ['Homelander', 'A-Train', 'The Deep', 'Queen Maeve'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('This is the index:', randomIndex);
const randomHero = heroes[randomIndex];
console.log(randomHero);
const library = [
  {
    title: 'Nicomachean Ethics',
    author: 'Aristotle',
  },
  {
    title: 'Human, All Too Human',
    author: 'Friedrich Nietzsche',
  },
  {
    title: 'Meditations on First Philosophy',
    author: 'Rene Descartes',
  },
];
const lastBook = library.pop();
console.log('Last book is:', lastBook);
const firstBook = library.shift();
console.log('First Book is:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library is:', library);
const fullName = 'Frank Kang';
const firstAndLastName = fullName.split(' ');
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log(sayMyName);
const employee = {
  name: 'Tanisha Watkins',
  age: 32,
  position: 'Best Boy',
};
const employeeKeys = Object.keys(employee);
console.log('employee keys are:', employeeKeys);
const emoyeeValues = Object.values(employee);
console.log('employee values are:', emoyeeValues);
const employeePairs = Object.entries(employee);
console.log('employee entries are:', employeePairs);

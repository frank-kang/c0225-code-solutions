'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
let seconds = convertMinutesToSeconds(5);
console.log('Converting 5 minutes to seconds:', seconds);
seconds = convertMinutesToSeconds(10);
console.log('Converting 10 minutes to seconds:', seconds);
function greet(name) {
  const greeting = `Hey ${name}!`;
  console.log(greeting);
}
greet('Beavis');
greet('SpongeBob');
const getArea = (width, height) => width * height;
let area = getArea(14, 42);
console.log('Area of 17 and 42 is:', area);
area = getArea(22, 38);
console.log('The area of 22 and 38 is:', area);
const getFirstName = (person) => person.firstName;
let firstName = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperough',
});
console.log('First Name is:', firstName);
firstName = getFirstName({ firstName: 'John', lastName: 'Henry' });
console.log('First Name is:', firstName);
const getLastElement = (things) => things[things.length - 1];
let lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Last element is:', lastElement);
lastElement = getLastElement([true, true, false, true]);
console.log('Last Element is:', lastElement);
function callOtherFunction(nameOfFunction, parameter) {
  return nameOfFunction(parameter);
}
let returnValue = callOtherFunction(convertMinutesToSeconds, 10);
console.log(
  'Value returned after calling convertMinutesToSeconds with 10 as argument:',
  returnValue
);
returnValue = callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']);
console.log(
  'Value returned after calling getLasElement on an array:',
  returnValue
);

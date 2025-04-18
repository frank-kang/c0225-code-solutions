'use strict';
const student = {
  firstName: 'Frank',
  lastName: 'Kang',
  age: 55,
};
const fullName = `${student.firstName} ${student.lastName}`;
console.log(fullName);
student.livesInIrvine = false;
student.previousOccupation = 'SRE';
console.log(student.livesInIrvine);
console.log(student.previousOccupation);
console.log('The value of student is:', student);
console.log('The type of student is:', typeof student);
const car = {
  make: 'Subaru',
  model: 'Forester',
  year: 2018,
};
car['color'] = 'red';
car['inConvertible'] = false;
console.log('Color of the car is:', car['color']);
console.log('Value of isConvertible is:', car['inConvertible']);
console.log('Value of car is:', car);
console.log('Type of car is:', typeof car);
const dog = {
  name: 'Tori',
  kind: 'Poodle',
};
const pet = dog;
delete pet.name;
delete pet.kind;
console.log('Value of pet is:', pet);
console.log('Type of pet is:', typeof pet);

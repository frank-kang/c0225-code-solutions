const colors: string[] = ['red', 'white', 'blue'];
console.log('Value of colors[0]:', colors[0]);
console.log('Value of colors[1]:', colors[1]);
console.log('Value of colors[2]:', colors[2]);

const colorsOfAmericanFlag: string = `America is ${colors[0]}, ${colors[1]}, and ${colors[2]}}`;
console.log(colorsOfAmericanFlag);

colors[2] = 'green';
const colorsOfMexicanFlag: string = `Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}`;
console.log(colorsOfMexicanFlag);
console.log('Value of colors array:', colors);
console.log('Type of colors array:', typeof colors);

const students: string[] = ['John', 'Peter', 'Simon', 'Paul'];
const numberOfStudents: number = students.length;
const templateNumberOfStudents: string = `There are ${numberOfStudents} students in the class.`;
console.log(templateNumberOfStudents);
const lastStudent: string = students[numberOfStudents - 1];
const templateLastStudent: string = `the last student in the array is ${lastStudent}`;
console.log(templateLastStudent);
console.log('The value of students is:', students);
console.log('Type of students is:', typeof students);

const width: number = 3;
const height: number = 4;
const area: number = width * height;
console.log('Area is:', area);
console.log('Type of area is:', typeof area);

const bill: number = 16.99;
const payment: number = 20;
const change: number = payment - bill;
console.log('Value of change is:', change);
console.log('Type of change is:', typeof change);

const quizzes: number = 75;
const midterm: number = 85;
const final: number = 80;
const grade: number = (quizzes + midterm + final) / 3;
console.log('Value of grade is:', grade);
console.log('Type of grade is:', typeof grade);

const firstName: string = 'Frank';
const lastName: string = 'Kang';
const fullName: string = firstName + ' ' + lastName;
console.log('Value of fullName is:', fullName);
console.log('Type of fullName is:', typeof fullName);

const pH: number = 9;
const isAcidic: boolean = pH < 7;
console.log('The value of isAcidic is:', isAcidic);
console.log('The type of isAcidic is:', typeof isAcidic);

const headCount: number = 299;
const isSparta: boolean = headCount === 300;
console.log('Value of isSparta is:', isSparta);
console.log('Type of isSparta is:', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';
console.log('Value of motto is:', motto);
console.log('Type of motto is:', typeof motto);

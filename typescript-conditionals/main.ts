/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
interface Person {
  name: string;
  age: number;
}

function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  }
  return false;
}
console.log(isUnderFive(7));
console.log(isUnderFive(4));

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isEven(5));
console.log(isEven(32));

function startsWithJ(string: string): boolean {
  const firstChar = string.charAt(0);
  if (firstChar === 'J') {
    return true;
  }
  return false;
}
console.log(startsWithJ('Jedi'));
console.log(startsWithJ('jedi'));
console.log(startsWithJ('Spiderman'));

const bart: Person = {
  name: 'Bartholomew JoJo Simpson',
  age: 10,
};

const fred: Person = {
  name: 'Fred',
  age: 22,
};

function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  }
  return false;
}
console.log(isOldEnoughToDrink(bart));
console.log(isOldEnoughToDrink(fred));

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age >= 16) {
    return true;
  }
  return false;
}

console.log(isOldEnoughToDrink(fred));

function categorizeAcidity(pH: number): string {
  if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else if (pH === 7) {
    return 'neutral';
  } else {
    return 'invalid pH level';
  }
}

console.log(categorizeAcidity(-1));
console.log(categorizeAcidity(14.0001));
console.log(categorizeAcidity(7));
console.log(categorizeAcidity(2));
console.log(categorizeAcidity(9));

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody';
  }
}
console.log(introduceWarnerBro('yakko'));
console.log(introduceWarnerBro('wakko'));
console.log(introduceWarnerBro('dot'));
console.log(introduceWarnerBro('nobody'));

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'Pirates of the Caribbean';
    case 'horror':
      return 'Sleeping Beauty';
    case 'drama':
      return "Schindler's List";
    case 'musical':
      return 'Beauty and the Beast';
    case 'sci-fi':
      return 'Star Trek';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}

console.log(recommendMovie('sci-fi'));
console.log(recommendMovie('comedy'));
console.log(recommendMovie('documentary'));

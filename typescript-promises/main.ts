import { takeAChance } from './take-a-chance.js';
takeAChance('Frank Kang')
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));

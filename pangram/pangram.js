'use strict'

const alphabet = [...'azertyuiopmlkjhgfdsqwxcvbn'];
export const isPangram = (sentense) => {
  const lowerCaseSentense = sentense.toLowerCase();
  return alphabet.every(c => (lowerCaseSentense.includes(c)));
};

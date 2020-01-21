'use strict'
export const primeFactors = (number) => {
  let tmpNumber = number;
  let factors = []
  let i = 2;
  while (tmpNumber > 1) {
    if (tmpNumber % i == 0) {
      factors.push(i);
      tmpNumber = tmpNumber / i;
    }
    else {
      i++;
    }
  }
  return factors;
};

const isFactor = (x, f) => x % f === 0;
const isPrime = (factors) => factors.length <= 2;

export const classify = (number) => {
  if (number <= 0)
    throw new Error('Classification is only possible for natural numbers.')
  const factors = Array.from(GetFactors(number));

  if (isPrime(factors)) {
    return 'deficient';
  }
  const factorsSum = factors.reduce((a, c) => a + c);

  if (factorsSum == number) {
    return 'perfect';
  }
  if (factorsSum > number) {
    return 'abundant';
  }
  if (factorsSum < number) {
    return 'deficient';
  }
};

function* GetFactors(number) {
  yield 1;//always a factor
  let factor = 2;
  do {
    if (isFactor(number, factor)) {
      yield factor
    }
    factor++;
  } while (factor <= (number / 2))
}
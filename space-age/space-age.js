'use strict'

const converter = (age, coef) => +(age / coef).toFixed(2);

const mapper = new Map([
  ['earth', (age) => converter(age , 31557600)],
  ['mercury', (age) => converter(age, (31557600 * 0.2408467))],
  ['venus', (age) => converter(age, (31557600 * 0.61519726))],
  ['mars', (age) => converter(age, (31557600 * 1.8808158))],
  ['jupiter', (age) => converter(age, (31557600 * 11.862615))],
  ['saturn', (age) => converter(age, (31557600 * 29.447498))],
  ['uranus', (age) => converter(age, (31557600 * 84.016846))],
  ['neptune', (age) => converter(age, (31557600 * 164.79132))],
])

export const age = (planet, age) => {
  return mapper.get(planet)(age);
};



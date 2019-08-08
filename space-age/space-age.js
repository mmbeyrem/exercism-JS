'use strict'

const OrbitalPeriod = new Map([
  ['earth', 1],
  ['mercury', 0.2408467],
  ['venus', 0.61519726],
  ['mars', 1.8808158],
  ['jupiter', 11.862615],
  ['saturn', 29.447498],
  ['uranus', 84.016846],
  ['neptune', 164.79132],
])
const EarthOrbitalPeriodInS = 31557600;
const AgeOnEarth = (age) => age / EarthOrbitalPeriodInS;

export const age = (planet, age) => new Number((AgeOnEarth(age) / OrbitalPeriod.get(planet)).toFixed(2));
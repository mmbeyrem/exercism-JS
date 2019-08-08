'use strict'

const rnaMapper = new Map([
  ['C','G'],
  ['G','C'],
  ['T','A'],
  ['A','U'],
]);
const  replacer = (match)=> rnaMapper.get(match);

export const toRna = (rnas) => rnas.replace(/([A-Z])/g,replacer);

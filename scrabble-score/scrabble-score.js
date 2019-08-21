'use strict'
const alphabetScore =new Map([
  ['A',1], ['E',1], ['I',1], ['O',1], ['U',1], ['L',1], ['N',1], ['R',1], ['S',1], ['T',1],
  ['D',2], ['G',2],
  ['B',3], ['C',3], ['M',3], ['P',3],
  ['F',4], ['V',4], ['H',4], ['W',4], ['Y',4],
  ['K',5],
  ['X',8], ['J',8],
  ['Z',10], ['Q',10]  ]
);
export const score = (word) => {
  return [...word]
    .map(c => alphabetScore.get(c.toUpperCase()))
    .reduce((acc,cur)=> acc+ cur,0);
};

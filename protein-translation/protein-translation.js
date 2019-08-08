'use strict'
const mapper = new Map([
  [undefined, []],
  ['AUG', ['Methionine']],
  ['UUUUUC', ['Phenylalanine', 'Phenylalanine']],
  ['UUAUUG',['Leucine', 'Leucine']],
  ['UCUUCCUCAUCG',['Serine', 'Serine', 'Serine', 'Serine']],
  ['UAUUAC',['Tyrosine', 'Tyrosine']],
  ['UGUUGC', ['Cysteine', 'Cysteine']],
  ['UGG', ['Tryptophan']],
  ['UAAUUUUUA', []],
  ['UAGAUGUAU',[]],
  ['UGAUGU',[]],
  ['AUGUUUUCU',['Methionine', 'Phenylalanine', 'Serine']],
  ['AUGUUUUCUUAAAUG',['Methionine', 'Phenylalanine', 'Serine']]
]);
export const translate = (rna) => {
  if(!mapper.has(rna))
    throw new Error('Invalid codon') ; 
  return mapper.get(rna)
};

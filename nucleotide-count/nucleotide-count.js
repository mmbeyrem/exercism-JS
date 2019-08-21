'use strict'
const Nucleotides = [
  /A/g,
  /C/g,
  /G/g,
  /T/g
]
export class NucleotideCounts {

  static parse (nucleotides){
    if(/[^ACT]/.test(nucleotides))
      new Error('Invalid nucleotide in strand');
    return Nucleotides.map(n => NucleotideCounts.find(nucleotides,n)).join(' ')}

  static find(nucleotides,nucleotideRegex) {
    return nucleotideRegex.test(nucleotides) ? nucleotides.match(nucleotideRegex).length : 0;
  }
}

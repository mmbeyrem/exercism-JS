'use strict'

export class Luhn {
  constructor(code) {
    [...this.numbers] = code;
    this.numbers = this.numbers.filter(n => n.trim().length > 0 )
    .reverse();
    
    this.checksum =  this.numbers
      .map((c, i) => i % 2 == 1 ? c * 2 : c)   
      .map((c, i) => (c > 9  && i % 2 == 1) ? 1+(c-10) : c)
      .reduce((p, c) => Number(p) + Number(c), 0);  
  }

  get valid() {
    return this.checksum % 10 == 0 && this.numbers.length > 1 ;
  }
}

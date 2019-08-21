'use strict'

const allergens = [
  { score: 1, allergen: 'eggs' },
  { score: 2, allergen: 'peanuts' },
  { score: 4, allergen: 'shellfish' },
  { score: 8, allergen: 'strawberries' },
  { score: 16, allergen: 'tomatoes' },
  { score: 32, allergen: 'chocolate' },
  { score: 64, allergen: 'pollen' },
  { score: 128, allergen: 'cats' },
];
export class Allergies {
  constructor(score = 0) {
    this.score = score % 256;
  }

  list() {
    if(this._list == undefined){
      this._list = allergens.sort((a, b) => a.score < b.score)
    .filter(a => a.score<= this.score)
      .reduce((acc, cur) => {
        const tmp  = acc.max + cur.score; 
        if (tmp <= this.score) {
          acc.max = tmp;                    
          acc.all.push(cur.allergen);
        }
        return acc;
      }, { max: 0, all: [] }).all.reverse();
    }
    return this._list;
  }

  allergicTo(allergen) {
    return this.list().find(a =>  a == allergen) != undefined;
  }
}

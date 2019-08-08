//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {

  constructor(...sides) {
    this.sides = new Array(...sides)
  }
  guard(){
    if(this.sides.some(s => s<= 0))
    throw new Error('zero is illegal');
    this.inequalityGuard();
  }

  inequalityGuard(){
    for (let i = 0; i < 3; i++) {
      if(this.sides[i] > this.sides[(i+1)%3]+this.sides[(i+2)%3]){
        throw new Error();
      }
    } 
  }

  kind() {
    this.guard();
    let nbEqual = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = i + 1; j < 3; j++) {
       if (this.sides[i] == this.sides[j]) {
          nbEqual++;
        }
      }
    }
      if (nbEqual >1) return 'equilateral'
      if (nbEqual == 1) return 'isosceles'
      return 'scalene'
    }
  }
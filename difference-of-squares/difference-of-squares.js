
export class Squares {
  constructor(max) {
    this.max = max;
  }

  get sumOfSquares() {
    return this.loop(i => Math.pow(i, 2));
  }

  get squareOfSum() {
    return Math.pow(this.loop(i => i), 2);
  }

  loop(f) {
    let sum = 0;
    for (let val = 1; val <= this.max; val++) {
      sum += f(val);
    }
    return sum;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}

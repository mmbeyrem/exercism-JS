import BigInt from './lib/big-integer';


export class Grains {
  square(i) {
    this.final = [BigInt(1)];
    while (i > 1) {
      this.final.push(this.final[this.final.length - 1].multiply(2));
      i--;
    }
    return this.final[this.final.length - 1].toString();
  }

  total() {
    return this.final.reduce((acc, c) => acc.add(c)).toString();
  }
}

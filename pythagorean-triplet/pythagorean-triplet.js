'use strict'

export class Triplet {
  static where({ maxFactor, minFactor = 1, sum = 0 }) {
    let r = [];
    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        for (let k = j; k <= maxFactor; k++) {
          const t = new Triplet(i, j, k);
          if (t.isPythagorean() && (sum == 0 || t.sum() == sum))
            r.push(t);
        }
      }
    }
    return r;
  }
  constructor(...triplets) {
    this.triplets = triplets
  }

  sum() {
    return this.triplets.reduce((acc, c) => acc + c, 0);
  }

  product() {
    return this.triplets.reduce((acc, c) => acc * c, 1);
  }

  isPythagorean() {
    return (Math.pow(this.triplets[0], 2) + Math.pow(this.triplets[1], 2)
      == Math.pow(this.triplets[2], 2))
  }
}

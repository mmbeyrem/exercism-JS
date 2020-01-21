function reverseString(str) {
  return str.split("").reverse().join("");
}

export class Palindromes {
  static generate({ maxFactor, minFactor } = {}) {
   if(maxFactor < minFactor){
    throw new Error('min must be <= max')
   }
    this.maxFactor = maxFactor;
    this.minFactor = minFactor;
    let r = Palindromes.getAll();
    const keys = Array.from(r.keys());
   
    if(keys.length > 0){
      const small = keys.reduce((acc, c) => c > acc ? acc : c, 9999999);
      const hight = keys.reduce((acc, c) => c < acc ? acc : c, -999999);

      r.smallest = { value: small, factors: r.get(small) };
      r.largest = { value: hight, factors: r.get(hight) }
    }
    else{
      r.smallest = { value: null, factors: [] };
      r.largest = { value: null, factors: [] }
    }
    return r;
  }

  static getAll() {
    let r = new Map();
    for (let i = this.minFactor; i <= this.maxFactor; i++) {
      for (let j = i; j <= this.maxFactor; j++) {
        const tmp = i * j;
        const formatedTmp = tmp.toString();
        if (formatedTmp == reverseString(formatedTmp)) {          
          Palindromes.addOrUpdate(r, tmp, [i, j]);
        }
      }
    }
    return r;
  }

  static addOrUpdate(r, tmp, factor) {
     (r.has(tmp)) ? r.get(tmp).push(factor) : r.set(tmp, [factor]);
  }
}

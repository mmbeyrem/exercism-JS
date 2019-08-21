'use strict'

export class Words {
  count(sentence){
     return sentence.split(/\s/).reduce((acc,w) => {
      if(w != ''){
        const lw = w.toLowerCase();
        acc[lw] = acc[lw] == undefined ? 1 :acc[lw]+1;
      }
      return acc;
    }, Object.create(null));
}
}

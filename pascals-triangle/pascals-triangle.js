//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(rows) {
    this.hight = rows;
  }

  get lastRow() {
    this.rows;
    return this.r[this.r.length - 1];
  }

  fillRow(level){
    if(level ==0){
      this.r.push([1]);
    }
    if(level > 0){
      const previouslevel = this.generatePreviousLevel(this.r);
      this.r.push(this.computeCurrentLevel(previouslevel));
    }
  }

  computeCurrentLevel(previouslevel) {
    let currentLevel = [];
    for (let i = 0; i < (previouslevel.length - 1); i++) {
      currentLevel[i] = Number(previouslevel[i]) + Number(previouslevel[i + 1]);
    }
    return currentLevel;
  }

  generatePreviousLevel(triangle) {
    const previouslevel = [0, ...(triangle[triangle.length - 1])];
    previouslevel.push(0);
    return previouslevel;
  }

  get rows() {
    this.r = [];
    for(let i=0; i < this.hight; i++){
      this.fillRow(i);
    }    
    return this.r;
  }
}

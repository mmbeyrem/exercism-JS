
export class Triangle {
  constructor(rows) {
    this.hight = rows;
    this._rows = Triangle.compute(rows, [[1]]);
  }

  get lastRow() {
    return this._rows[this._rows.length - 1];
  }

  get rows() {
    return this._rows;
  }

  static compute(hight, r) {
    for (let i = 1; i < hight; i++) {
      Triangle.fillRow(r);
    }
    return r;
  }

  static fillRow(rows) {
    const previouslevelRow = Triangle.generatePreviousLevelRow(rows);
    rows.push(Triangle.computeCurrentLevelRow(previouslevelRow));
  }

  static computeCurrentLevelRow(previouslevelRow) {
    let currentLevelRow = [];
    for (let i = 0; i < (previouslevelRow.length - 1); i++) {
      currentLevelRow[i] = previouslevelRow[i] + previouslevelRow[i + 1];
    }
    return currentLevelRow;
  }

  static generatePreviousLevelRow(rows) {
    return [0, ...(rows[rows.length - 1]),0];
  }
}

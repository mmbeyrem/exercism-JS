
export class HighScores {
  constructor(scores) {
    this._scores = [...scores];
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this._scores[this._scores.length - 1];
  }

  get personalBest() {
    return this._scores.reduce((max, c) => (max > c) ? max : c, 0);
  }

  get personalTopThree() {
    return this._scores
      .map(s => parseInt(s))
      .sort((a, b) => a < b ? 1 : -1).slice(0, 3);
  }
}

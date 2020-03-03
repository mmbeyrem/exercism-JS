
export class Rectangles {
  static count(blueprint) {
    if (blueprint.length <= 1)
      return 0;
    let lines = [];
    for (let i = 0; i < blueprint.length; i++) {
      lines.push(Array.from(blueprint[i]));
    }
    for (let i = 0; i < lines.length; i++) {
      for (let j = 0; j < lines[0].length; j++) {
        lines[i] == lines[j]
      }

    }
  }
}



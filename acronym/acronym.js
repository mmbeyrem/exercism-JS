
export const parse = (phrase) =>
  phrase.split(/[\s-_]+/)
    .map(w => w[0].toUpperCase())
    .reduce((p, a) => p + a, "");

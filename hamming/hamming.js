'use strict'
export const compute = (l, r) => {
  gaurd(l, r);
  return l.split('').map((e, i) => e === r[i] ? 0 : 1).reduce((a, b) => a + b, 0);
};

function gaurd(l, r) {
  if (l.length != r.length) {
    if (l.length == 0)
      throw new Error('left strand must not be empty');
    if (r.length == 0)
      throw new Error('right strand must not be empty');
    throw new Error('left and right strands must be of equal length');
  }
}


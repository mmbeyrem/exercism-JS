'use strict'
const _gigaSecondInMs = 1e12;

export const gigasecond = (date ) =>  new Date(date.getTime()+_gigaSecondInMs);


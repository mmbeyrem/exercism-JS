'use strict'
/* eslint-disable no-unused-vars */

const containAlphabet = /[A-Z]/;
const FinishInterogationMark = /\?$/;
const space =/\s/;

const isYelling = (message)=> message.toUpperCase() == message && containAlphabet.test(message)

const isQuestioning = (message)=> FinishInterogationMark.test(message)

const isSilente = (message) => message =='' ||
( space.test(message) && !containAlphabet.test(message)&& !(/\d/.test(message)))

export const hey = (message) => {
  const IsQuestion = isQuestioning(message.trim());
  const IsYell = isYelling(message.trim());
  return IsQuestion && IsYell ? 'Calm down, I know what I\'m doing!' :
        IsYell ? 'Whoa, chill out!':
        IsQuestion ? 'Sure.':
        isSilente(message.trim()) ? 'Fine. Be that way!':
        'Whatever.'
};

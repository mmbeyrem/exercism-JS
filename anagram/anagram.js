export const findAnagrams = (w, wLists) => {
  let anagrams = [];
  wLists.forEach(word => {
    if (isAnagrams(word.toLowerCase(), w.toLowerCase()))
      anagrams.push(word);
  });
  return anagrams;
}

function isAnagrams(w1, w2) {
  let wordArray = Array.from(w2);
  return w1 !== w2 && w1.length === w2.length &&
    Array.from(w1).every(c => exist(c, wordArray));
}
function exist(char, word) {
  const charIndex = word.findIndex(c => char === c);
  return (charIndex >= 0) ?
    (word.splice(charIndex, 1), true) : false;
}

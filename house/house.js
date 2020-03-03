
const starWith = "This is the ";
const endWith = " that Jack built.";
const words = [
  ["house", "lay in the"],
  ["malt", "ate the"],
  ["rat", "killed the"],
  ["cat", "worried the"],
  ["dog", "tossed the"],
  ["cow with the crumpled horn", "milked the"],
  ["maiden all forlorn", "kissed the"],
  ["man all tattered and torn", "married the"],
  ["priest all shaven and shorn", "woke the"],
  ["rooster that crowed in the morn", "kept the"],
  ["farmer sowing his corn", "belonged to the"],
  ["horse and the hound and the horn", ""]];

export class House {

  static verse(number) {
    let verses = []
    verses.push(`${starWith}${words[number - 1][0]}`);
    for (let i = number - 2; i >= 0; i--) {
      verses.push(`that ${words[i][1]} ${words[i][0]}`);
    }
    verses[verses.length - 1] = verses[verses.length - 1] + endWith;
    return verses;
  }

  static verses(startVerse, endVerse) {
    let parts = []
    for (let i = startVerse; i <= endVerse; i++) {
      parts = parts.concat(House.verse(i));
      parts.push("");
    }
    parts.pop();
    return parts;
  }
}

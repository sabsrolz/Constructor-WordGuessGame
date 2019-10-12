let Letter = require("./letter");
//console.log(Letter);
class Word {
  constructor(string) {
    this.lettersArray = string.split("");
    this.objectArray = [];
    this.lettersArray.forEach(letter => {
      let letterAdded = new Letter(letter, false);
      this.objectArray.push(letterAdded);
    });
  }

  printString() {
    let result = "";
    this.objectArray.forEach(letter => {
      result += `${letter.print()} `;
    });
    //console.log(result);
    return result;
  }
  checkLetter(char) {
    this.objectArray.forEach(letter => {
      letter.checkGuess(char);
    });
  }
}

module.exports = Word;
// let test = new Word("testing");
// console.log(test);
// test.printString();
// test.checkLetter("e");
// test.printString();

class Letter {
  constructor(character, guessed) {
    (this.character = character), (this.guessed = guessed);
  }
  print() {
    if (this.guessed) {
      return this.character;
    } else {
      return "_";
    }
  }
  checkGuess(y) {
    if (y === this.character) {
      this.guessed = true;
      return true;
      //console.log("true");
      // } else {
      //   this.guessed = false;
      //   return false;
      //   //console.log("false");
      // }
    }
  }
}

module.exports = Letter;

const letter1 = new Letter("a", false);

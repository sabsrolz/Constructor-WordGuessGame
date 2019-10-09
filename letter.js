class Letter {
  constructor(character, guessed) {
    (this.character = character),
      (this.guessed = guessed),
      function checkGuess() {},
      function guessedStatus(guessedLetter) {
        if (guessedLetter === this.character) {
          this.guessed = true;
        } else {
          this.guessed = false;
        }
      };
  }
}

//let letter1 = new Letter("a", true);

module.exports.Letter = Letter;

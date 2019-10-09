const fs = require("fs");
let letterConstructor = require("./letter");
let wordConstructor = require("./word");
let wordsArray = [];
//function that reads words from external text file and stored in wordsArray

fs.readFile("words.txt", "utf8", function(error, data) {
  if (error) {
    return console.log(error);
  }
  wordsArray = data.split(",");
  gameRound(wordsArray);
});

function gameRound(wordBank) {
  let index = Math.floor(Math.random() * wordBank.length);
  let wordSelected = wordBank[index];
  for (let letterIndex = 0; letterIndex < wordSelected.length; letterIndex++) {
    const letterAdded = new letterConstructor.Letter(
      wordSelected[letterIndex],
      false
    );
  }
  //console.log(wordSelected);
}

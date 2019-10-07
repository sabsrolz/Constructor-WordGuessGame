const fs = require("fs");
let wordsArray = [];
//function that reads words from external text file and stored in wordsArray

fs.readFile("words.txt", "utf8", function(error, data) {
  if (error) {
    return console.log(error);
  }
  wordsArray = data.split(",");
  gameStarts(wordsArray);
});

function gameStarts(wordBank) {
  let index = Math.floor(Math.random() * wordBank.length);
  let wordSelected = wordBank[index];
  console.log(wordSelected);
}

const fs = require("fs");
const inquirer = require("inquirer");
let letterConstructor = require("./letter");
//let wordConstructor = require("./word");
let wordsArray = [];
let currentWord = [];
let guessString = [];
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
    currentWord.push(letterAdded.character);
    guessString.push("_ ");
    //console.log(letterAdded);
  }

  const wordAdded = new wordConstructor.Word(currentWord);
  playerGuess(guessString);
  //wordAdded.letterString(currentGuess);
}
function playerGuess(updatedString) {
  console.log(updatedString);
  inquirer
    .prompt([
      { type: "input", name: "charGuessed", message: "Guess a letter!" }
    ])
    .then(answers => {
      console.log(answers);
      let currentGuess = answers.charGuessed;
      //console.log(currentGuess);
    });
  //console.log(currentGuess);
}

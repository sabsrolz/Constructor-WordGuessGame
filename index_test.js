const fs = require("fs");
const inquirer = require("inquirer");
const Word = require("./word");
let wordsArray = [];
let wordSelected;
const maxGuesses = 10;
let guessesLeft;
let updatedString;
let originalString;
let currentWord;

//function that reads words from external text file and stored in wordsArray

fs.readFile("words.txt", "utf8", function(error, data) {
  if (error) {
    return console.log(error);
  }
  wordsArray = data.split(",");
  newRound(wordsArray);
});

function newRound(array) {
  guessesLeft = maxGuesses;
  let index = Math.floor(Math.random() * array.length);
  wordSelected = array[index];
  currentWord = new Word(wordSelected);
  playerGuess();
}
function playerGuess() {
  updatedString = currentWord.printString();

  console.log(updatedString);

  inquirer
    .prompt([
      { type: "input", name: "charGuessed", message: "Guess a letter!" }
    ])
    .then(answers => {
      if (answers.charGuessed.length > 1) {
        console.log("Please enter only one character");
        playerGuess();
      } else {
        let currentGuess = answers.charGuessed;

        currentWord.checkLetter(currentGuess);
        if (updatedString === currentWord.printString()) {
          guessesLeft--;
          console.log(`You have ${guessesLeft} left`);
        } else {
          console.log(`You have ${guessesLeft} left`);
        }
        //cons
        updatedString = currentWord.printString();

        //originalString = updatedString;
        if (updatedString.includes("_ ") && guessesLeft > 0) {
          playerGuess();
        } else {
          newRound(wordsArray);
        }
      }
    });
  return updatedString;
}

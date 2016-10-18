//main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.
//var inquirer = require('inquirer');
var randomWord = require('./game.js');
var letter = require('./letter.js');
var word = require('./word.js');
//console.log(randomWord, letter, word);
var words = randomWord.randomWord();
var choosenWord = letter.showWord(words);
console.log("Guess this word: " + choosenWord + "\nIt has " + choosenWord.length + " letters");
word.askLetter(words, choosenWord);

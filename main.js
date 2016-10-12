//main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.
var inquirer = require('inquirer');
var letter=require('./letter.js');
console.log("Guess this word: "+letter.letters[0]+"\nIt has "+letter.letters[0].length+" letters");

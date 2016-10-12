//Constructortrustor file: word.js should contain all of the methods which will check the letters guessed versus the random word selected.
var word = require('./game.js');
var choosenWord = word.words;
var inquirer = require('inquirer');
var letterGuess = [];
var letterUsed = [];
var num=1;
var wordJS = {
    askLetter: function() {
        if (letterUsed.length < 5) {
            inquirer.prompt([{
                name: "letter",
                message: "Guess "+num+": "
            }]).then(function(answers) {
                console.log(answers.letter);
                letterUsed.push(answers.letter);
                num++;
                wordJS.askLetter();
            });
        }
    }

};
wordJS.askLetter();

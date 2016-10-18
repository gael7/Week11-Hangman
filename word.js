//Constructortrustor file: word.js should contain all of the methods which will check the letters guessed versus the random word selected.
var inquirer = require('inquirer');
var attempts = 5;
var letterGuess = [];
var correctLetter = [];
var num = 1;
var letterjs = require('./letter.js');

askLetter = function(choosenWord, word) {
    if (attempts > 0 && choosenWord!==word) {
        inquirer.prompt([{
            name: "letter",
            message: "Guess " + num + ": ",
            validate: function(value) {
                if (value.length === 1 && isNaN(value)) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function(answers) {
            console.log(answers.letter);
            var newWord=checkLetter(answers.letter, choosenWord, word);
            console.log("new word: "+newWord);
            num++;
            askLetter(choosenWord, newWord);
        });
    }
};
checkLetter = function(letter, choosenWord, word) {
    for (var i = 0; i < choosenWord.length; i++) {
        if (choosenWord[i] === letter) {
            var result=letterjs.correctLetter(letter, choosenWord, word);
            return result;
        }
    }
    var j = (choosenWord.indexOf(letter));
    if (j === -1) {
        attempts -= 1;
        console.log("You got " + attempts + " left");
    }
};

module.exports={
    askLetter: askLetter,
    checkLetter: checkLetter
};

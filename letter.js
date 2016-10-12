//Getting the random word from game.js
var word=require('./game.js');
var choosenWord=word.words;

//Constructor letters to control whether or not a letter appears as a "_" or as itself on-screen.
var letter={
  showWord: function(word){
  var wordChoosen=word.replace(/./g, "-");
  return wordChoosen;
  }
};


exports.letters=[letter.showWord(choosenWord[0])];

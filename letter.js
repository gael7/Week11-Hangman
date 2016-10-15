//Constructor letters to control whether or not a letter appears as a "_" or as itself on-screen.
var word2;
showWord = function(word) {
    var wordChoosen = word.replace(/./g, "-");
    return wordChoosen;
};

correctLetter = function(letter, displayWord, word) {
    for (var i = 0; i < word.length; i++) {
      if (displayWord[i]===letter){
        word2=word.replace(word[i], letter);
        console.log(word2);
      }
    }
    return word2;
};





module.exports = {
    showWord: showWord,
    correctLetter: correctLetter,
};

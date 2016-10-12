var game = {
    words: ["soccer", "football", "basketball", "baseball", "golf"],
    randomWord: function() {
        var wordSelected = game.words[Math.floor(Math.random() * game.words.length)];
        return wordSelected;
    }
};
exports.words=[game.randomWord()];

module.exports = {
    words: ["soccer", "football", "basketball", "baseball", "golf"],
    randomWord: function() {
        var wordSelected = this.words[Math.floor(Math.random() * this.words.length)];
        return wordSelected;
    }
};

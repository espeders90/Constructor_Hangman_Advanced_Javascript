var Letter = require("./letter.js");

//constructor for Word

var Word = function(word) {
        this.letterArray = [];
        this.word = word;
        this.wordMatch = false;


        // Grab letter selected and push letter into array
        this.userSelection = function() {
            for (var i = 0; i < this.word.length; i++) {
                var newLetter = new Letter(this.word[i]);
                this.letterArray.push(newLetter);
            }
        };

        // See if the letter selected is in the Word


        module.exports = Word;

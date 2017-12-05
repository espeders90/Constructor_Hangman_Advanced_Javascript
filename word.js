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
    this.checkLetter = function(inputLetter) {
        var userInput = 0;
        this.letterArray.forEach(function(letter) {
            if (letter.letter === inputLetter) {
                letter.show = true;
                userInput++;
            }
        });
        return userInput;
    };

    //Look for match between user and random word

    this.checkMatch = function() {

        if (this.letterArray.every(function(letter) {
                return letter.appear === true;
            })) {
            this.wordFound = true;
            return true;
        }
    };



    this.wordDisplay = function() {
        var display = "";

        this.letterArray.forEach(function(letter) {

            var tempLetter = letter.letterAppear();
            display += tempLetter;
        });
        return display;
    };

};

module.exports = Word;

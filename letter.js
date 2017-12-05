// Create constructor
var Letter = function(letter) {
    this.letter = letter;
    this.show = false;

    // show letter
    this.letterAppear = function(guess) {
        if (this.letter === " ") {
            this.show = true;
            return " ";
        }

        if (this.show === false) {
            return "_";
        }

        else {
            return this.letter;
        }
    };
};

module.exports = Letter;

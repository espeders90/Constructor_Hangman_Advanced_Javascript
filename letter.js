//constructor to create letters

var Letter = function(letter) {
    this.letter = letter;
    this.show = false;


    // show letter if user guesses the right word. Change this.show = false to tru

    this.userGuess = function(guess) {
        if (this.letter === guess) {
            this.show = true;
            console.log(guess);
            console.log(this.show);
        }
        else {
            console.log("Keep guessing");
        }
    };

    module.exports = Letter;
};

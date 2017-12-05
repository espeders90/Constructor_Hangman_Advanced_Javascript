var inquirer = require("inquirer");
var Word = require("./word.js");


var wordList = {
    randomWords: ["BMW", "Audi", "Mercedes", "Volkswagen", "Ferrari", "Lamborghini", "Aston Martin", "Chrysler", "Ford", "Porsche"]
};
var remainingAttempts = 10;
var lettersGuessedsofar = [];


//will need eventually...
//new Word [math.floor(Math.random()*wordlsit.length-1]


startGame();

//make an confirm to start the game
function startGame() {}
inquirer.prompt({
    type: "confirm",
    name: "play",
    message: "Ready to guess?"

}).then()



// I did not use my time wisely over the weekend and now I have to turn in an embarrasing piece of homework. 
// I'll require some tutoring for the Advanced Javascript part and just scheduled one this week to go over this.
// Based on the inclass exercises there are a few pieces missing to this homework.
// One of the first things that needs to happen is to randomize with math.floor the word from the wordList
// Then a function that uses 'inquire.prompt' so the user can input the letter and then with an if-else statement check to see if it matches
// At the same time the remainingAttempts from 10 need to countdown for each letter guessed
// At the end an UpdateScore is necessary 
// If word is guessed correctly, a newGame function is required to start over

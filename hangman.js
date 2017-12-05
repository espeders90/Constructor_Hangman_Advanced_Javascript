var inquirer = require("inquirer");
var Word = require("./word.js");


var wordBank = {
    randomWords: ["BMW", "Audi", "Mercedes", "Volkswagen", "Ferrari", "Lamborghini", "Aston Martin", "Chrysler", "Ford", "Porsche", "Honda", "Toyota", "Nissan"]
};
var remainingGuesses = 10;
var lettersGuessed = [];
var display = 0;
var currentWord;


startGame();

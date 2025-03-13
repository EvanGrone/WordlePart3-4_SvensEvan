// https://stackoverflow.com/questions/16089421/how-do-i-detect-keypresses-in-javascript
const WorldeModel = require('./js/wordleModel');
const WordleController = require('./js/wordleController');

class View {
    constructor() {
        this.wordleBoard = document.querySelector(".wordle_board"); // Select the div with class 'wordle_board'
        this.keyboard = document.querySelector(".keyboard"); // Select the div with class 'keyboard'
    }

    updateBoard(guesses, res) {
        const rows = document.querySelectorAll(".grid-container"); // Select all the rows with class 'grid-container'
        guesses.forEach((guess, i) => { // For each guess in the guesses array
            const boxes = rows[i].querySelectorAll("div"); // Select all the divs in the row, which are the boxes
            guess.split("").forEach((letter, j) => { // For each letter in the guess
                boxes[j].textContent = letter; // Set the text content of the box to the letter
                boxes[j].className = res[i][j] + "-box"; // Set the class of the box to the color
            });
        });
    }

    updateKeyboard(letter, color) {
        let key = document.getElementById(letter); // Get the key element by the letter
        key.className = color + "-key"; // Set the class of the key to the color
    }
}
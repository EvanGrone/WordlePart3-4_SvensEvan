// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll 

// The View class is responsible for updating the DOM elements with the game state
// The View class has two methods: updateBoard and updateKeyboard  
// The updateBoard method updates the game board with the guesses and results
// The updateKeyboard method updates the keyboard with the guesses and results
// The View class has two properties: wordleBoard and keyboard
// The wordleBoard property selects the div with class 'wordle_board'
// The keyboard property selects the div with class 'keyboard'
// The View class is exported to be used in the controller

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
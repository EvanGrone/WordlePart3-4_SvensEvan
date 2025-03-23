// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

// The View class is responsible for updating the DOM elements with the game state
// The View class has two methods: updateBoard and updateKeyboard  
// The updateBoard method updates the game board with the guesses and results
// The updateKeyboard method updates the keyboard with the guesses and results
// The View class has two properties: wordleBoard and keyboard
// The wordleBoard property selects the div with class 'wordle_board'
// The keyboard property selects the div with class 'keyboard'
// The View class is exported to be used in the controller
class WordleView {
    constructor() {
        this.wordleBoard = document.querySelector(".wordle_board"); // Select the div with class 'wordle_board'
        this.keyboard = document.querySelector(".keyboard"); // Select the div with class 'keyboard'
    }

    // Add the missing renderBoard method
    renderBoard(model) {
        // Clear the existing board if needed
        // this.wordleBoard.innerHTML = ''; 
        
        // If you want to dynamically create the board instead of using the static HTML:
        /*
        for (let i = 0; i < model.maxGuesses; i++) {
            const row = document.createElement('div');
            row.className = 'grid-container';
            
            for (let j = 0; j < 5; j++) {
                const box = document.createElement('div');
                box.className = 'empty-box';
                row.appendChild(box);
            }
            
            this.wordleBoard.appendChild(row);
        }
        */
        
        // If using the existing board structure, just make sure the rows are properly initialized
        const rows = document.querySelectorAll(".grid-container");
        // Initialize with empty boxes if needed
    }

    // Add the missing renderKeyboard method
    renderKeyboard(model) {
        // The keyboard is already in the HTML, so we just need to make sure
        // it's properly initialized with the correct listeners if needed
        
        // Optional: Add click handlers for on-screen keyboard
        const keys = document.querySelectorAll(".key-container div");
        keys.forEach(key => {
            key.addEventListener('click', (e) => {
                // Dispatch a keydown event to simulate keyboard press
                const keyId = key.id;
                let keyEvent;
                
                if (keyId === 'ENTER') {
                    keyEvent = new KeyboardEvent('keydown', { key: 'Enter' });
                } else if (keyId === 'BACKSPACE') {
                    keyEvent = new KeyboardEvent('keydown', { key: 'Backspace' });
                } else {
                    keyEvent = new KeyboardEvent('keydown', { key: keyId });
                }
                
                document.dispatchEvent(keyEvent);
            });
        });
    }

    updateBoard(guesses, res) {
        const rows = document.querySelectorAll(".grid-container"); // Select all the rows with class 'grid-container'
        guesses.forEach((guess, i) => { // For each guess in the guesses array
            const boxes = rows[i].querySelectorAll("div"); // Select all the divs in the row, which are the boxes
            guess.split("").forEach((letter, j) => { // For each letter in the guess
                boxes[j].textContent = letter; // Set the text content of the box to the letter
                boxes[j].className = res[j] + "-box"; // Set the class of the box to the color
            });
        });
    }

    updateKeyboard(guess, res) {
        guess.split("").forEach((letter, i) => {
            let key = document.getElementById(letter);
            if (key) {
                key.className = res[i] + "-key";
            }
        });
    }
}
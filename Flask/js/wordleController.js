
class WordleController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.guess = ""; 

        document.addEventListener("keydown", (e) => { this.handleKeydown(e); }); // Add event listener for keydown

    }
     
    handleKeydown(e) {
        let key = e.key.toUpperCase(); // Get the key pressed and change to uppercase for consistency
        if (e.key == "Enter") { // If the key pressed is Enter
            if (this.guess.length == 5) { // If the guess is of length 5
                this.model.appendGuess(this.guess); // Append the guess to the model
                const res = this.model.checkGuess(this.guess);
                this.view.updateBoard(this.model.guesses, res); // Update the board with the guesses and results
                this.guess = ""; // Reset the guess
                if (this.model.gameOver()) { // If the game is over
                    if (this.model.guesses.includes(this.model.answer)) { // If the answer is in the guesses
                        alert("You win!"); // Alert the user that they win
                    } else {
                        alert("You lose! The answer was " + this.model.answer); // Alert the user that they lose and show the answer
                    }
                }
            }
        } else if (e.key == "Backspace") { // If the key pressed is Backspace
            this.guess = this.guess.slice(0, -1); // Remove the last character from the guess
        } else if (e.key.length == 1) { // If the key pressed is a letter
            this.guess += e.key.toUpperCase(); // Add the letter to the guess
        }
        this.view.updateKeyboard(this.guess); // Update the keyboard with the guess
    }

}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// https://www.w3schools.com/js/js_arrays.asp

class WordleModel {
    /* Class game is the model for the game that will be played. It will store the answer,
    the max guesses allowed, and the guesses made by the user. */
    constructor(maxGuesses = 6, answer) {
        this.answer = answer.toUpperCase(); // Answer is always uppercase for consistency and comparisons
        this.maxGuesses = maxGuesses;
        this.guesses = []; // create an array to store the guesses
    }


    appendGuess(guess) {
        if (this.guesses.length >= this.maxGuesses) {
            return false; // If the user has used up all their guesses, return false
            }
        if (guess.length == 5) { // Valid guess of length 5 characters
            this.guesses.push(guess.toUpperCase()); // Again change to uppercase for comparisons
            }
        }


        checkGuess(guess) {
            guess = guess.toUpperCase();
            let res = Array(5).fill("grey");
            let answerCopy = this.answer.split('');
            
            // First pass: check for correct positions (green)
            for (let i = 0; i < 5; i++) {
                if (guess[i] === this.answer[i]) {
                    res[i] = "green";
                    answerCopy[i] = null; // Mark this letter as used
                }
            }
            
            // Second pass: check for letters in wrong positions (yellow)
            for (let i = 0; i < 5; i++) {
                if (res[i] !== "green") { // Skip already marked green positions
                    const letterIndex = answerCopy.indexOf(guess[i]);
                    if (letterIndex !== -1) {
                        res[i] = "yellow";
                        answerCopy[letterIndex] = null; // Mark this letter as used
                    }
                }
            }
            
            return res;
        }


    gameOver() {
        return this.guesses.includes(this.answer) || this.guesses.length >= this.maxGuesses;
        // If the answer is in the guesses or the user has used up all their guesses, the game is over
    }
}



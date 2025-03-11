class Game {
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
        guess = guess.toUpperCase(); // Change to uppercase for consistency
        let res = Array(5) // empty array of 5 length to store the comparison results of guess and answer
        
        for (let i = 0; i < 5; i++) {
            res[i] = "grey"; // default to make all squares grey than overwrite with correct colors, wrong letters stay grey 
        }
        for (let i = 0; i < 5; i++) {
            if (guess[i] == this.answer[i]) { // If the character is in the correct position, colored block will be green
                res[i] = "green";
                }
            }
        for (let i = 0; i < 5; i++) {
            if (this.answer.includes(guess[i])) {
                if (guess[i] != this.answer[i]) { // If the character is in the answer but not in the correct position
                    res[i] = "yellow";
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

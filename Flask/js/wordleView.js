// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll 

class WordleView {
    constructor() {
        this.board = document.querySelector('.wordle_board');
        this.keyboard = document.querySelector('.keyboard');
    }

    renderBoard(model) {
        this.board.innerHTML = '';
        for (let row = 0; row < model.maxGuesses; row++) {
            const gridContainer = document.createElement('div');
            gridContainer.className = 'grid-container';
            for (let col = 0; col < 5; col++) {
                const box = document.createElement('div');
                if (row < model.getGuesses().length) {
                    const guessLetter = model.getGuesses()[row][col] || '';
                    box.textContent = guessLetter;
                    box.className = this.getBoxClass(guessLetter, model.getAnswer()[col]);
                } else {
                    box.className = 'empty-box';
                }
                box.id = `box-${row}-${col}`;
                gridContainer.appendChild(box);
            }
            this.board.appendChild(gridContainer);
        }
    }

    getBoxClass(guessLetter, answerLetter) {
        if (guessLetter === answerLetter) {
            return 'green-box';
        } else if (answerLetter.includes(guessLetter)) {
            return 'yellow-box';
        } else {
            return 'grey-box';
        }
    }

    renderKeyboard(model) {
        this.keyboard.innerHTML = '';
        const keyRows = [
            ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
            ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
            ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"]
        ];
        keyRows.forEach(row => {
            const keyContainer = document.createElement('div');
            keyContainer.className = 'key-container';
            row.forEach(key => {
                const keyElement = document.createElement('div');
                if (key === "ENTER" || key === "⌫") {
                    keyElement.className = 'key-utility';
                } else {
                    keyElement.className = 'key-grey';
                }
                keyElement.textContent = key;
                keyContainer.appendChild(keyElement);
            });
            this.keyboard.appendChild(keyContainer);
        });
    }

    bindKeys(controller) {
        this.keyboard.addEventListener('click', event => {
            const key = event.target.textContent;
            if (key === '⌫') {
                controller.handleBackspace();
            } else if (key === 'ENTER') {
                controller.handleEnter();
            } else if (key.length === 1 && key.match(/[A-Z]/i)) {
                controller.handleLetter(key);
            }
        });
    }
}
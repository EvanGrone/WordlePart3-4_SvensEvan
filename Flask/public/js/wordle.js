document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const answer = urlParams.get('answer') || 'SCARY';
    const maxGuesses = parseInt(urlParams.get('max_guesses')) || 6;

    const model = new WordleModel(maxGuesses, answer);
    const view = new WordleView();
    const controller = new WordleController(model, view);

    view.renderBoard(model);
    view.renderKeyboard(model);
});
document.addEventListener("DOMContentLoaded", () => {
    const urlParameters = new URLSearchParams(window.location.search); // Get the URL parameters
    const answer = urlParameters.get("answer") || "SCARY"; // Default answer
    const maxGuesses = 6; // 
    const model = new WordleModel(maxGuesses, answer); // Create a new WordleModel with the answer and max guesses
    const view = new WordleView(); // Create a new WordleView
    new WordleController(model, view); // Create a new WordleController with the model and view
});

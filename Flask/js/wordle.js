
document.addEventListener("DOMContentLoaded", () => {
    const model = new WordleModel(); // Create a new WordleModel
    const view = new View(); // Create a new View
    const controller = new WordleController(model, view); // Create a new WordleController
}
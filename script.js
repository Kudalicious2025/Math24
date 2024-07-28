// Initialize variables
let currentScore = 0;
let highScore = 0; 
let difficulty = "easy";

// Get references to DOM elements
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const expressionInput = document.getElementById("expression");
const submitButton = document.getElementById("submit");
const feedback = document.getElementById("feedback");
const currentScoreDisplay = document.getElementById("current-score");
const highScoreDisplay = document.getElementById("high-score");

// Function to generate a new puzzle
function generatePuzzle() {
    // Simplified puzzle generation (not guaranteed a solution)
    // Replace with a more robust algorithm later
    const numbers = [];
    for (let i = 0; i < 4; i++) {
      numbers.push(Math.floor(Math.random() * 9) + 1); // Numbers 1-10
    }
    
    num1.textContent = numbers[0];
    num2.textContent = numbers[1];
    num3.textContent = numbers[2];
    num4.textContent = numbers[3];
  
    feedback.textContent = ""; // Clear previous feedback
    expressionInput.value = ""; // Clear input field
  }
  
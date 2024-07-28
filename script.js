// Initialize variables
let currentScore = 0;  // Current game score
let highScore = 0;  // Highest score achieved
let difficulty = "easy";  // Game difficulty level

// Get references to DOM elements
const num1 = document.getElementById("num1");  // First number element
const num2 = document.getElementById("num2");  // Second number element
const num3 = document.getElementById("num3");  // Third number element
const num4 = document.getElementById("num4");  // Fourth number element
const expressionInput = document.getElementById("expression");  // User input for expression
const submitButton = document.getElementById("submit");  // Submit button
const feedback = document.getElementById("feedback");  // Feedback display
const currentScoreDisplay = document.getElementById("current-score");  // Current score display
const highScoreDisplay = document.getElementById("high-score");  // High score display

// Function to generate a new puzzle
function generatePuzzle() {
  const numbers = [];  // Array to store generated numbers
  for (let i = 0; i < 4; i++) {
    numbers.push(Math.floor(Math.random() * 9) + 1);  // Generate random number between 1 and 9
  }
  
  num1.textContent = numbers[0];  // Display first number
  num2.textContent = numbers[1];  // Display second number
  num3.textContent = numbers[2];  // Display third number
  num4.textContent = numbers[3];  // Display fourth number

  feedback.textContent = "";  // Clear previous feedback
  expressionInput.value = "";  // Clear input field
}

// Function to check the user's solution (simplified)
function checkSolution() {
  const userExpression = expressionInput.value;  // Get user input
  try {
    const result = eval(userExpression);  // Evaluate user expression
    if (result === 24) {
      feedback.textContent = "Correct!";  // Correct answer feedback
      feedback.classList.remove("incorrect");
      feedback.classList.add("correct");
      currentScore++;  // Increment current score
      currentScoreDisplay.textContent = currentScore;  // Update current score display
      updateHighScore();  // Update high score if needed
      generatePuzzle();  // Generate a new puzzle

      // Display correct message for 3 seconds
      setTimeout(() => {
        feedback.textContent = "";  // Clear feedback after 3 seconds
        feedback.classList.remove("correct");
      }, 3000);
    } else {
      feedback.textContent = "Incorrect. Try again!";  // Incorrect answer feedback
      feedback.classList.remove("correct");
      feedback.classList.add("incorrect");
    }
  } catch (error) {
    feedback.textContent = "Invalid expression!";  // Invalid input feedback
    feedback.classList.remove("correct");
    feedback.classList.add("incorrect");
  }
}

// Function to update the high score
function updateHighScore() {
  if (currentScore > highScore) {
    highScore = currentScore;  // Set new high score
    highScoreDisplay.textContent = highScore;  // Update high score display
    // You could store this in localStorage to make it persistent
  }
}

// Event listeners
submitButton.addEventListener("click", checkSolution);  // Check solution on submit
document.getElementById("new-game").addEventListener("click", generatePuzzle);  // Generate new puzzle on new game

// Initial puzzle generation on page load
generatePuzzle();

// Event listener for "Play" link
document.getElementById('play-link').addEventListener('click', function() {
  showElementGameArea('game-area');  // Show game area
  showElement('score');  // Show score
  showElementGameArea('controls');  // Show controls
  hideElements(['how-to-play', 'quiz', 'contact']);  // Hide other sections
});

// Event listener for "Rules" link
document.getElementById('rules-link').addEventListener('click', function() {
  showElement('how-to-play');  // Show how-to-play section
  hideElements(['score', 'quiz', 'contact', 'controls', 'game-area']);  // Hide other sections
});

// Event listener for "Quiz" link
document.getElementById('quiz-link').addEventListener('click', function() {
  showElement('quiz');  // Show quiz section
  hideElements(['how-to-play', 'contact', 'controls', 'game-area', 'score']);  // Hide other sections
});

// Event listener for "Contact" link
document.getElementById('contact-link').addEventListener('click', function() {
  showElement('contact');  // Show contact section
  hideElements(['how-to-play', 'controls', 'game-area', 'score', 'quiz']);  // Hide other sections
});

// Function to show a specific element
function showElement(id) {
  document.getElementById(id).style.display = 'block';  // Set display to block
}

// Function to show game area elements with Flexbox properties
function showElementGameArea(id) {
  document.getElementById(id).style.display = 'block';  // Set display to block
  document.getElementById(id).style.display = 'flex';  // Add Flexbox properties
  document.getElementById(id).style.justifyContent = 'center';  // Center horizontally
  document.getElementById(id).style.alignItems = 'center';  // Center vertically
}

// Function to hide multiple elements
function hideElements(ids) {
  ids.forEach(function(id) {
    document.getElementById(id).style.display = 'none';  // Set display to none
  });
}

// Initial setup: hide all sections except the game area
window.onload = function() {
  showElementGameArea('game-area');  // Show game area
  showElement('score');  // Show score
  showElementGameArea('controls');  // Show controls
  hideElements(['how-to-play', 'quiz', 'contact']);  // Hide other sections
};

// Mobile navigation toggle
const mobileNav = document.querySelector(".hamburger");  // Hamburger menu element
const navbar = document.querySelector(".menubar");  // Navigation bar element

// Function to toggle mobile navigation
const toggleNav = () => {
  navbar.classList.toggle("active");  // Toggle active class on navbar
  mobileNav.classList.toggle("hamburger-active");  // Toggle active class on hamburger menu
};

mobileNav.addEventListener("click", () => toggleNav());  // Add click event to toggle navigation

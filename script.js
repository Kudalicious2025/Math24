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
  const numbers = [];
  for (let i = 0; i < 4; i++) {
    numbers.push(Math.floor(Math.random() * 9) + 1);
  }
  
  num1.textContent = numbers[0];
  num2.textContent = numbers[1];
  num3.textContent = numbers[2];
  num4.textContent = numbers[3];

  feedback.textContent = ""; // Clear previous feedback
  expressionInput.value = ""; // Clear input field
}

// Function to check the user's solution (simplified)
function checkSolution() {
  const userExpression = expressionInput.value;
  try {
    const result = eval(userExpression);
    if (result === 24) {
      feedback.textContent = "Correct!";
      feedback.classList.remove("incorrect");
      feedback.classList.add("correct");
      currentScore++;
      currentScoreDisplay.textContent = currentScore;
      updateHighScore();
      generatePuzzle(); // Generate a new puzzle

      // Display correct message for 3 seconds
      setTimeout(() => {
        feedback.textContent = ""; // Clear feedback after 3 seconds
        feedback.classList.remove("correct");
      }, 3000);
    } else {
      feedback.textContent = "Incorrect. Try again!";
      feedback.classList.remove("correct");
      feedback.classList.add("incorrect");
    }
  } catch (error) {
    feedback.textContent = "Invalid expression!";
    feedback.classList.remove("correct");
    feedback.classList.add("incorrect");
  }
}

function updateHighScore() {
  if (currentScore > highScore) {
    highScore = currentScore;
    highScoreDisplay.textContent = highScore;
    // You could store this in localStorage to make it persistent
  }
}

// Event listeners
submitButton.addEventListener("click", checkSolution);
document.getElementById("new-game").addEventListener("click", generatePuzzle);

// Initial puzzle generation on page load
generatePuzzle();

document.getElementById('play-link').addEventListener('click', function() {
  showElementGameArea('game-area');
  hideElements(['how-to-play', 'quiz', 'contact']);
});

document.getElementById('rules-link').addEventListener('click', function() {
  showElement('how-to-play');
  hideElements(['score', 'quiz', 'contact', 'controls', 'game-area']);
});

document.getElementById('quiz-link').addEventListener('click', function() {
  showElement('quiz');
  hideElements(['how-to-play', 'contact', 'controls', 'game-area', 'score']);
});

document.getElementById('contact-link').addEventListener('click', function() {
  showElement('contact');
  hideElements(['how-to-play', 'controls', 'game-area', 'score','quiz']);
});

function showElement(id) {
  document.getElementById(id).style.display = 'block';



}
function showElementGameArea(id) {
  document.getElementById(id).style.display = 'block';
  document.getElementById(id).style.display = 'flex';  // Add Flexbox properties
  document.getElementById(id).style.justifyContent = 'center';  // Center horizontally
  document.getElementById(id).style.alignItems = 'center';  // Center vertically


}

function hideElements(ids) {
  ids.forEach(function(id) {
      document.getElementById(id).style.display = 'none';
  });
}

// Initial setup: hide all sections except the game area
window.onload = function() {
  showElementGameArea('game-area');
  hideElements(['how-to-play', 'quiz', 'contact']);
};

const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

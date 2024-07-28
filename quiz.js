// Event listener for the subtraction quiz button
document.getElementById('subtraction-quiz').addEventListener('click', function() {
    hideAllSections();  // Hide all quiz sections
    document.getElementById('subtraction').style.display = 'block';  // Show the subtraction section
});

// Event listener for the addition quiz button
document.getElementById('addition-quiz').addEventListener('click', function() {
    hideAllSections();  // Hide all quiz sections
    document.getElementById('addition').style.display = 'block';  // Show the addition section
});

// Event listener for the multiplication quiz button
document.getElementById('multiplication-quiz').addEventListener('click', function() {
    hideAllSections();  // Hide all quiz sections
    document.getElementById('multiplication').style.display = 'block';  // Show the multiplication section
});

// Event listener for the division quiz button
document.getElementById('division-quiz').addEventListener('click', function() {
    hideAllSections();  // Hide all quiz sections
    document.getElementById('division').style.display = 'block';  // Show the division section
});

// Function to hide all quiz sections
function hideAllSections() {
    document.querySelectorAll('.quiz-section').forEach(function(section) {
        section.style.display = 'none';  // Set display to none for each section
    });
}

// Subtraction quiz
// Function to generate random subtraction problems
function generateSubtractionProblems() {
    for (let i = 1; i <= 5; i++) {
        let num1 = Math.floor(Math.random() * 9) + 1;  // Generate a random number between 1 and 9
        let num2 = Math.floor(Math.random() * num1);  // Ensure num2 is less than or equal to num1
        document.getElementById(`question${i}`).textContent = `${num1} - ${num2} =`;  // Display the subtraction problem
        document.getElementById(`answer${i}`).dataset.correctAnswer = num1 - num2;  // Store the correct answer
    }
}

// Function to check the user's answers and update the score
function checkSubtractionAnswers() {
    let score = 0;  // Initialize score
    for (let i = 1; i <= 5; i++) {
        const userAnswer = parseInt(document.getElementById(`answer${i}`).value, 10);  // Get user's answer
        const correctAnswer = parseInt(document.getElementById(`answer${i}`).dataset.correctAnswer, 10);  // Get correct answer
        const resultElement = document.getElementById(`result${i}`);  // Get result element
        
        if (userAnswer === correctAnswer) {
            score++;  // Increment score if answer is correct
            resultElement.textContent = "Correct";  // Display "Correct"
            resultElement.style.color = "green";  // Set text color to green
        } else {
            resultElement.textContent = `Incorrect (Correct: ${correctAnswer})`;  // Display "Incorrect" with correct answer
            resultElement.style.color = "red";  // Set text color to red
        }
    }
    document.getElementById('diff-score').textContent = `${score}`;  // Update the score display
}

// Event listener for the submit button in subtraction quiz
document.getElementById('submit-subtraction').addEventListener('click', function() {
    checkSubtractionAnswers();  // Check user's answers when submit button is clicked
});

// Generate the subtraction problems on page load
generateSubtractionProblems();

// Addition quiz
// Function to generate random addition problems
function generateAdditionProblems() {
    for (let i = 6; i <= 10; i++) {
        let num1 = Math.floor(Math.random() * 9) + 1;  // Generate a random number between 1 and 9
        let num2 = Math.floor(Math.random() * 9) + 1;  // Generate another random number between 1 and 9
        document.getElementById(`question${i}`).textContent = `${num1} + ${num2} =`;  // Display the addition problem
        document.getElementById(`answer${i}`).dataset.correctAnswer = num1 + num2;  // Store the correct answer
    }
}

// Function to check the user's answers and update the score
function checkAdditionAnswers() {
    let score = 0;  // Initialize score
    for (let i = 6; i <= 10; i++) {
        const userAnswer = parseInt(document.getElementById(`answer${i}`).value, 10);  // Get user's answer
        const correctAnswer = parseInt(document.getElementById(`answer${i}`).dataset.correctAnswer, 10);  // Get correct answer
        const resultElement = document.getElementById(`result${i}`);  // Get result element
        
        if (userAnswer === correctAnswer) {
            score++;  // Increment score if answer is correct
            resultElement.textContent = "Correct";  // Display "Correct"
            resultElement.style.color = "green";  // Set text color to green
        } else {
            resultElement.textContent = `Incorrect (Correct: ${correctAnswer})`;  // Display "Incorrect" with correct answer
            resultElement.style.color = "red";  // Set text color to red
        }
    }
    document.getElementById('sum-score').textContent = `${score}`;  // Update the score display
}

// Event listener for the submit button in addition quiz
document.getElementById('submit-addition').addEventListener('click', function() {
    checkAdditionAnswers();  // Check user's answers when submit button is clicked
});

// Generate the addition problems on page load
generateAdditionProblems();

// Multiplication quiz
// Function to generate random multiplication problems
function generateMultiplicationProblems() {
    for (let i = 11; i <= 15; i++) {
        let num1 = Math.floor(Math.random() * 9) + 1;  // Generate a random number between 1 and 9
        let num2 = Math.floor(Math.random() * 9) + 1;  // Generate another random number between 1 and 9
        document.getElementById(`question${i}`).textContent = `${num1} x ${num2} =`;  // Display the multiplication problem
        document.getElementById(`answer${i}`).dataset.correctAnswer = num1 * num2;  // Store the correct answer
    }
}

// Function to check the user's answers and update the score
function checkMultiplicationAnswers() {
    let score = 0;  // Initialize score
    for (let i = 11; i <= 15; i++) {
        const userAnswer = parseInt(document.getElementById(`answer${i}`).value, 10);  // Get user's answer
        const correctAnswer = parseInt(document.getElementById(`answer${i}`).dataset.correctAnswer, 10);  // Get correct answer
        const resultElement = document.getElementById(`result${i}`);  // Get result element
        
        if (userAnswer === correctAnswer) {
            score++;  // Increment score if answer is correct
            resultElement.textContent = "Correct";  // Display "Correct"
            resultElement.style.color = "green";  // Set text color to green
        } else {
            resultElement.textContent = `Incorrect (Correct: ${correctAnswer})`;  // Display "Incorrect" with correct answer
            resultElement.style.color = "red";  // Set text color to red
        }
    }
    document.getElementById('pro-score').textContent = `${score}`;  // Update the score display
}

// Event listener for the submit button in multiplication quiz
document.getElementById('submit-multiplication').addEventListener('click', function() {
    checkMultiplicationAnswers();  // Check user's answers when submit button is clicked
});

// Generate the multiplication problems on page load
generateMultiplicationProblems();

// Division quiz
// Function to generate random division problems with integer results
function generateDivisionProblems() {
    for (let i = 16; i <= 20; i++) {
        let dividend, divisor;

        // Ensure the division result is an integer
        do {
            dividend = Math.floor(Math.random() * 81) + 10;  // Random number between 10 and 90
            divisor = Math.floor(Math.random() * 9) + 1;  // Random number between 1 and 9
        } while (dividend % divisor !== 0);

        document.getElementById(`question${i}`).textContent = `${dividend} ÷ ${divisor} =`;  // Display the division problem
        document.getElementById(`answer${i}`).dataset.correctAnswer = dividend / divisor;  // Store the correct answer
    }
}

// Function to check the user's answers and update the score
function checkDivisionAnswers() {
    let score = 0;  // Initialize score
    for (let i = 16; i <= 20; i++) {
        const userAnswer = parseInt(document.getElementById(`answer${i}`).value, 10);  // Get user's answer
        const correctAnswer = parseInt(document.getElementById(`answer${i}`).dataset.correctAnswer, 10);  // Get correct answer
        const resultElement = document.getElementById(`result${i}`);  // Get result element
        
        if (userAnswer === correctAnswer) {
            score++;  // Increment score if answer is correct
            resultElement.textContent = "Correct";  // Display "Correct"
            resultElement.style.color = "green";  // Set text color to green
        } else {
            resultElement.textContent = `Incorrect (Correct: ${correctAnswer})`;  // Display "Incorrect" with correct answer
            resultElement.style.color = "red";  // Set text color to red
        }
    }
    document.getElementById('quo-score').textContent = `${score}`;  // Update the score display
}

// Event listener for the submit button in division quiz
document.getElementById('submit-division').addEventListener('click', function() {
    checkDivisionAnswers();  // Check user's answers when submit button is clicked
});

// Generate the division problems on page load
generateDivisionProblems();

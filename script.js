// Improved script.js

// Function to show message safely
function showMessage(message) {
    const messageElement = document.getElementById('message');
    if (messageElement) {
        messageElement.textContent = message;
        animateMessage(messageElement);
    } else {
        console.error('Message element not found!');
    }
}

// Function to animate the message
function animateMessage(element) {
    element.style.opacity = 0;
    element.style.transition = 'opacity 0.5s ease-in-out';
    element.style.opacity = 1;
    triggerConfetti(); // Trigger confetti effect
}

// Function to trigger confetti effect
function triggerConfetti() {
    // Confetti logic goes here (can use a library like canvas-confetti)
}

// Function to handle errors and log them
function logError(error) {
    console.error('An error occurred:', error);
}

// Example usage of showMessage
try {
    showMessage('Welcome to the website!');
} catch (error) {
    logError(error);
}
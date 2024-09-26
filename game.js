let points = 0;

const coin = document.getElementById('coin');
const pointsDisplay = document.getElementById('points');
const progressBar = document.getElementById('progress-bar');

// Increment points when the coin is tapped
coin.addEventListener('click', () => {
    points += 1;
    pointsDisplay.textContent = points;

    // Update the progress bar
    progressBar.style.width = `${Math.min(points * 10, 100)}%`; // Update width based on points (max 100%)

    // Visual feedback (flash score and coin scale)
    pointsDisplay.style.color = "#ffcc00"; // Change color
    setTimeout(() => {
        pointsDisplay.style.color = "#fff"; // Revert color
    }, 200);
    
    // Animation for the coin on click
    coin.classList.add('click-effect'); // Add click effect class
    setTimeout(() => {
        coin.classList.remove('click-effect'); // Remove class after animation
    }, 300); // Duration of the click effect animation
});

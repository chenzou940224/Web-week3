// JavaScript for adding interactivity

document.addEventListener("DOMContentLoaded", function () {
    // Add a click event listener to the "Show/Hide Steps" button
    const button = document.getElementById("toggle-steps-button");
    const stepsSection = document.getElementById("steps");
    
    button.addEventListener("click", function () {
        stepsSection.classList.toggle("hidden");
    });
});

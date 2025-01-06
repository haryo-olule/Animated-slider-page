const homeText = document.querySelectorAll(".slider-item");
const prevButtons = document.querySelectorAll(".prev");
const nextButtons = document.querySelectorAll(".next");
const body = document.body; // Reference to the body element

let slide = 0; // Keeps track of the current slide

// Function to update the slide display and background
function updateSlide() {
    homeText.forEach((item, index) => {
        item.style.display = index === slide ? "block" : "none";
    });

    // Remove all background classes from the body
    body.className = ""; // Clear all classes
    body.classList.add(`bg-slide-${slide + 1}`); //// Add the class for the current slide
}

// Attach event listeners to buttons
nextButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (slide < homeText.length - 1) { // Ensure we don't go past the last slide
            slide++;
        } 
        updateSlide();
    });
});

prevButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (slide > 0) { // Ensure we don't go below the first slide
            slide--;
        } 
        updateSlide();
    });
});

// Initialize slider display
updateSlide();
//Menu

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show');
});
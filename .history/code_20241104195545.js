// JavaScript for slider navigation
const sliderContainer = document.querySelector(".slider-container");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const categoryCards = document.querySelectorAll(".category-card");
const totalCards = categoryCards.length;

let currentIndex = 0;

// Function to update the slider position
function updateSlider() {
  const offset = -currentIndex * 200; // 200 is the width of the cards
  sliderContainer.style.transform = `translateX(${offset}px)`;
}

// Function to move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalCards; // Loop back to the first card
  updateSlider();
}

// Function to move to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards; // Loop back to the last card
  updateSlider();
}

// Event listeners for manual navigation
arrowLeft.addEventListener("click", prevSlide);
arrowRight.addEventListener("click", nextSlide);

// Automatic slider functionality
let autoSlide = setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Pause automatic sliding on mouse enter
sliderContainer.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

// Resume automatic sliding on mouse leave
sliderContainer.addEventListener("mouseleave", () => {
  autoSlide = setInterval(nextSlide, 3000);
});

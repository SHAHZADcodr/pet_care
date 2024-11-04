const sliderContainer = document.querySelector(".slider-container");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const categoryCards = document.querySelectorAll(".category-card");
const totalCards = categoryCards.length;

let currentIndex = 0;

// Function to update the slider position
function updateSlider() {
  const cardWidth = categoryCards[0].offsetWidth; // Get the width of the first card
  const offset = -(currentIndex * cardWidth) + (sliderContainer.offsetWidth / 2) - (cardWidth / 2); // Center the current card
  sliderContainer.style.transform = `translateX(${offset}px)`;

  // Update the styles for focus on the current card
  categoryCards.forEach((card, index) => {
    if (index === currentIndex) {
      card.style.opacity = 1; // Focus on current card
      card.style.transform = "scale(1.2)"; // Slightly enlarge the focused card
    } else if (index === currentIndex - 1 || index === currentIndex + 1) {
      card.style.opacity = 0.8; // Dim cards adjacent to the focused card
      card.style.transform = "scale(1.05)"; // Slightly enlarge the adjacent cards
    } else {
      card.style.opacity = 0.5; // Dim other cards
      card.style.transform = "scale(1)"; // Reset size for other cards
    }
  });
}

// Function to move to the next slide
function nextSlide() {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
  } else {
    clearInterval(autoSlide); // Stop auto slide at the last card
    return; // Exit the function
  }
  updateSlider();
}

// Function to move to the previous slide
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  }
  updateSlider();
}

// Event listeners for manual navigation
arrowLeft.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide(); // Reset auto slide on arrow click
});

arrowRight.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide(); // Reset auto slide on arrow click
});

// Automatic slider functionality
let autoSlide;

// Function to start automatic sliding
function startAutoSlide() {
  autoSlide = setInterval(() => {
    if (currentIndex < totalCards - 1) {
      nextSlide();
    } else {
      clearInterval(autoSlide); // Stop when reaching the last card
      setTimeout(() => {
        currentIndex = 0; // Reset to the first card after a pause
        updateSlider();
        startAutoSlide(); // Restart the auto sliding
      }, 3000); // Pause for 3 seconds before restarting
    }
  }, 3000); // Change slide every 3 seconds
}

// Start automatic sliding on initialization
startAutoSlide();

// Pause automatic sliding on mouse enter
sliderContainer.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

// Resume automatic sliding on mouse leave
sliderContainer.addEventListener("mouseleave", () => {
  startAutoSlide();
});

// Initial update to set the first card as focused
updateSlider();

const sliderContainer = document.querySelector(".slider-container");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const categoryCards = document.querySelectorAll(".category-card");
const totalCards = categoryCards.length;

let currentIndex = 1;

// Function to update the slider position
function updateSlider() {
  const cardWidth = categoryCards[0].offsetWidth; // Get the width of the first card
  // Adjust offset to keep the first and last cards in view
  const offset =
    -(currentIndex * cardWidth) +
    sliderContainer.offsetWidth / 2 -
    cardWidth / 2;
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
  // Only increment if we're not at the last card
  if (currentIndex < totalCards - 1) {
    currentIndex++;
  }
  updateSlider();
}

// Function to move to the previous slide
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - 1; // Move to the last card if at the start
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
    nextSlide(); // Automatically move to the next slide
    // Stop auto-slide if the last card is reached
    if (currentIndex === totalCards - 1) {
      clearInterval(autoSlide); // Stop auto slide when reaching the last card
    }
  }, 3000); // Change slide every 3 seconds
}

// Start automatic sliding on initialization
startAutoSlide();

// Pause automatic sliding on mouse enter
sliderContainer.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

// Resume automatic sliding on mouse leave if not on the last image
sliderContainer.addEventListener("mouseleave", () => {
  if (currentIndex < totalCards - 1) {
    startAutoSlide();
  }
});

// Function to reset the auto-slide (if needed)
function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// Initial update to set the first card as focused
updateSlider();

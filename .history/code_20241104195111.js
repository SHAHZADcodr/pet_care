// JavaScript for slider navigation
const sliderContainer = document.querySelector(".slider-container");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

arrowLeft.addEventListener("click", () => {
  sliderContainer.scrollBy({
    left: -200, // Adjust scroll distance as needed
    behavior: "smooth",
  });
});

arrowRight.addEventListener("click", () => {
  sliderContainer.scrollBy({
    left: 200, // Adjust scroll distance as needed
    behavior: "smooth",
  });
});

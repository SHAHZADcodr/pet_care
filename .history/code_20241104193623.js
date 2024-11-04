const carousel = document.querySelector(".carousel");
let currentRotation = 0;

setInterval(() => {
  currentRotation -= 120; // Rotate by 120 degrees for each item in the carousel
  carousel.style.transform = `rotateY(${currentRotation}deg)`;
}, 3000);

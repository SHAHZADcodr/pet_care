// dog.js
document.querySelectorAll(".dog-image").forEach((image) => {
  image.addEventListener("click", function () {
    // Find the closest .dog-card and the corresponding .dog-info
    const dogCard = this.closest(".dog-card");
    const dogInfo = dogCard.querySelector(".dog-info");

    // Toggle visibility
    if (dogInfo.style.display === "none" || dogInfo.style.display === "") {
      dogInfo.style.display = "block"; // Show the info
    } else {
      dogInfo.style.display = "none"; // Hide the info
    }
  });
});

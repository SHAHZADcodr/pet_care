document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("welcome-popup");
  const closePopupButton = document.getElementById("close-popup");

  // Check if the popup has already been shown in this session
  if (!sessionStorage.getItem("popupDisplayed")) {
    // Show the popup
    popup.classList.add("show");
    // Mark popup as displayed in session storage
    sessionStorage.setItem("popupDisplayed", "true");
  }

  // Close the popup when the user clicks the button
  closePopupButton.addEventListener("click", () => {
    popup.classList.remove("show");
  });
});

/**
 * Initializes navigation functionality when the DOM is fully loaded.
 * Handles opening/closing the navigation menu and updating the menu icon.
 */
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav a");

  /**
   * Toggles the navigation menu and updates the menu icon.
   */
  navToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
    // Change the icon based on the menu state
    const icon = this.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  /**
   * Closes the navigation menu when a link is clicked.
   */
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      const icon = navToggle.querySelector("i");
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-times");
    });
  });

  /**
   * Closes the navigation menu when clicking outside of it.
   * @param {Event} event - The click event.
   */
  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
      nav.classList.remove("active");
      const icon = navToggle.querySelector("i");
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-times");
    }
  });
});

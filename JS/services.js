/**
 * Initializes tab functionality for service selection when the DOM is fully loaded.
 * Handles switching between service categories based on user clicks.
 */
document.addEventListener("DOMContentLoaded", function () {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const serviceGrids = document.querySelectorAll(".services-grid");

  /**
   * Adds click event listeners to all tab buttons.
   * When a tab button is clicked, it updates the active tab and displays the corresponding services.
   */
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const targetTab = btn.dataset.tab;
      serviceGrids.forEach((grid) => {
        if (grid.id === `${targetTab}-services`) {
          grid.classList.add("active");
        } else {
          grid.classList.remove("active");
        }
      });
    });
  });
});

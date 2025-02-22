/**
 * Opens the booking modal with selected service details.
 * @param {string} serviceName - The name of the selected service.
 * @param {string} duration - The duration of the service.
 * @param {string} price - The price of the service.
 */
function openModal(serviceName, duration, price) {
  const modal = document.getElementById("bookingModal");
  const serviceTitleEl = document.getElementById("modalServiceName");
  const serviceDetailsEl = document.getElementById("modalServiceDetails");

  serviceTitleEl.textContent = serviceName;
  serviceDetailsEl.textContent = `Dauer: ${duration} | Preis: ${price}`;
  modal.style.display = "block";

  document.body.style.overflow = "hidden";
}

/**
 * Closes the booking modal and restores background scrolling.
 */
function closeModal() {
  const modal = document.getElementById("bookingModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

/**
 * Displays the email form and hides the email button.
 * @param {Event} event - The click event triggering the function.
 */
function showEmailForm() {
  const emailForm = document.getElementById("emailForm");
  emailForm.style.display = "grid";

  event.target.style.display = "none";
}

/**
 * Sends an email request for booking the selected service.
 * @param {Event} [event] - The form submission event (optional).
 */
function sendEmail(event) {
  if (event) {
    event.preventDefault();
  }

  const serviceName = document.getElementById("modalServiceName").textContent;
  const serviceDetails = document.getElementById(
    "modalServiceDetails"
  ).textContent;
  const userEmail = document.getElementById("userEmail").value;
  const userPhone = document.getElementById("userPhone").value;
  const userMessage = document.getElementById("userMessage").value;

  const mailtoLink = `mailto:info@headspas.de?subject=Terminanfrage für ${serviceName}
    &body=Ich interessiere mich für folgende Behandlung:%0D%0A%0D%0A
    ${serviceName}%0D%0A
    ${serviceDetails}%0D%0A%0D%0A
    Meine Kontaktdaten:%0D%0A
    E-Mail: ${userEmail}%0D%0A
    Telefon: ${userPhone}%0D%0A%0D%0A
    ${userMessage ? "Nachricht: " + userMessage : ""}`;

  window.location.href = mailtoLink;
  closeModal();
}

/**
 * Opens WhatsApp with a pre-filled message for service booking.
 */
function sendWhatsApp() {
  const serviceName = document.getElementById("modalServiceName").textContent;
  const serviceDetails = document.getElementById(
    "modalServiceDetails"
  ).textContent;

  const message = `Hallo, ich interessiere mich für:%0A${serviceName}%0A${serviceDetails}%0ABitte kontaktieren Sie mich für eine Terminvereinbarung.`;
  const whatsappLink = `https://wa.me/491727103286?text=${message}`; // Nummer anpassen

  window.open(whatsappLink, "_blank");
  closeModal();
}

// Event Listeners

// Closes the modal when clicking the close button
document.querySelector(".close-modal").addEventListener("click", closeModal);

// Closes the modal when clicking outside of it
window.addEventListener("click", (event) => {
  const modal = document.getElementById("bookingModal");
  if (event.target === modal) {
    closeModal();
  }
});

// Adds event listener to email form submission
document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.getElementById("emailForm");
  if (emailForm) {
    emailForm.addEventListener("submit", sendEmail);
  }
});

/**
 * Handles the form submission by preventing default behavior and checking form validity.
 * If the form is valid, it opens the contact selection modal.
 * @param {Event} event - The form submission event.
 * @returns {boolean} Returns false to prevent default form submission.
 */
function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("contactForm");
  if (!form.checkValidity()) {
    return false;
  }

  const modal = document.getElementById("contactModal");
  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  return false;
}

/**
 * Closes the contact selection modal and restores background scrolling.
 */
function closeModal() {
  const modal = document.getElementById("contactModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

/**
 * Sends an email to the Head Spa & Relax team with the user's contact details.
 */
function sendEmail() {
  const name = document.getElementById("name").value;
  const userEmail = document.getElementById("userEmail").value;
  const userPhone = document.getElementById("userPhone").value;
  const userMessage = document.getElementById("userMessage").value;

  const body = `Sehr geehrtes Head Spa & Relax Team,

${userMessage}

Mit freundlichen Grüßen
${name}

---
Kontaktdaten:
Tel.: ${userPhone}
E-Mail: ${userEmail}`;

  const encodedBody = encodeURIComponent(body);
  const encodedSubject = encodeURIComponent(`Kontaktanfrage von ${name}`);

  const mailtoLink = `mailto:info@headspas.de?subject=${encodedSubject}&body=${encodedBody}`;

  window.location.href = mailtoLink;
  closeModal();
  document.getElementById("contactForm").reset();
}

/**
 * Sends a WhatsApp message to the Head Spa & Relax team with the user's contact details.
 */
function sendWhatsApp() {
  const name = document.getElementById("name").value;
  const userEmail = document.getElementById("userEmail").value;
  const userPhone = document.getElementById("userPhone").value;
  const userMessage = document.getElementById("userMessage").value;

  const message = `Sehr geehrtes Head Spa & Relax Team,

${userMessage}

Mit freundlichen Grüßen
${name}

---
Kontaktdaten:
Tel.: ${userPhone}
E-Mail: ${userEmail}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/491727103286?text=${encodedMessage}`;

  window.open(whatsappLink, "_blank");
  closeModal();
  document.getElementById("contactForm").reset();
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.querySelector(".close-modal");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  /**
   * Closes the modal when clicking outside of it.
   */
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("contactModal");
    if (event.target === modal) {
      closeModal();
    }
  });
});

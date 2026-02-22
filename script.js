// Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Contact Form Message
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    message.textContent = "Thank you! Your message has been sent.";
    message.style.color = "green";
    form.reset();
});
// Mobile menu toggle logic
const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".menubar");
const crossBtn = document.querySelector(".cross-btn");

if (toggleButton && navLinks) {
  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
if (crossBtn && navLinks) {
  crossBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
}

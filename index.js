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

// What the procrastinators say

const leftBox = document.querySelectorAll(".left-box");
leftBox.forEach((box) => {
  box.addEventListener("click", () => {
    leftBox.forEach((b) => b.classList.remove("active"));

    box.classList.add("active");
  });
});

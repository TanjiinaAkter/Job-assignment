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

// START RATING
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const rating = parseFloat(card.getAttribute("data-rating"));
    const starsContainer = card.querySelector(".stars");
    let starsHtml = "";

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      starsHtml +=
        '<img src="/assets/Vector.png" alt="Half Star" style="width: 18px; height: 18px; display: inline-block;">';
    }

    // Half star
    if (halfStar) {
      starsHtml +=
        '<img src="/assets/StarHalf.png" alt="Half Star" style="width: 18px; height: 18px; display: inline-block;">';
    }

    // Empty stars
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      starsHtml +=
        '<img src="/assets/Star.png" alt="Half Star" style="width: 18px; height: 18px; display: inline-block;">';
    }

    starsContainer.innerHTML = starsHtml;
  });
});
// TESTIMONIAL
document.addEventListener("DOMContentLoaded", function () {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const cards = document.querySelectorAll(".testimonial-cards .card");

  loadMoreBtn.addEventListener("click", () => {
    cards.forEach((card) => {
      card.style.display = "block";
    });
    loadMoreBtn.style.display = "none";
  });
});

//ACCORDION
const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-header.active");

    if (openItem && openItem !== header) {
      openItem.classList.remove("active");
      openItem.nextElementSibling.classList.remove("open");
      openItem.querySelector(".arrow").innerHTML =
        '<img src="/assets/CaretDown.png" alt="Half Star" style="width: 18px; height: 18px; display: inline-block;">'; // Close previous arrow
    }

    header.classList.toggle("active");
    header.nextElementSibling.classList.toggle("open");

    // Change arrow direction
    const arrow = header.querySelector(".arrow");
    if (header.classList.contains("active")) {
      arrow.innerHTML =
        '<img src="/assets/CaretDown.png" alt="Half Star" style="width: 18px; height: 18px; display: inline-block;">'; // Up arrow when open
    } else {
      arrow.innerHTML =
        '<img src="/assets/Caretup.png" alt="Half Star" style="width: 18px; height: 18px; display: inline-block;">'; // Down arrow when closed
    }
  });
});

///// SCROLL TO TOP
// Get the scroll-to-top button
const scrollToTopButton = document.querySelector(".circle-bottom ");

// Show the button when the user scrolls down 200px
window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
scrollToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

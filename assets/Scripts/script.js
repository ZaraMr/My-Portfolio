"use strict";

// const copyBtnEmail = document.querySelector(".icon-email");
// const copyBtnNum = document.querySelector(".icon-num");

// const textContent = document.querySelector(".contact-info-email").textContent;
// const textNum = Number(
//   document.querySelector(".contact-info-number").textContent
// );

// copyBtnEmail.addEventListener("click", () => {
//   let textValue = textContent.value;
//   navigator.clipboard.writeText(textValue);
// });

// copyBtnNum.addEventListener("click", () => {
//   let numValue = textNum;
//   navigator.clipboard.writeText(numValue);
// });

const navContainer = document.querySelector(".nav__container");
const navLinks = document.querySelectorAll(".nav__link");
const navLinksMarker = document.querySelectorAll(".marker");
const navListActive = document.querySelector(".navbar__active");
const sections = document.querySelectorAll("section");

navContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav__link");

  if (!clicked) return;

  // Remove active classes
  navLinks.forEach((link) => link.classList.remove("navbar__active"));
  sections.forEach((s) => s.classList.remove(".section--active"));

  // Add active classes
  clicked.classList.add("navbar__active");
  document
    .querySelector(`.section__${clicked.dataset.link}`)
    .classList.add("section__active");
});

console.log(sections);

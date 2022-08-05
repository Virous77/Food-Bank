"use strict";
const navItems = document.querySelector(".navbar--list");
const hamMenu = document.querySelector(".ham-menu");
const overlay = document.querySelector(".overlay");
const signUp = document.querySelector(".nav--button");
const closeBtn = document.querySelector(".btn-close");
const signUpPage = document.querySelector(".signup-page");
const header = document.querySelector("header");
const main = document.querySelector(".main");
const collectionButton = document.querySelector(".collection-button");
const aboutButton = document.querySelector(".about-button");
const orderButton = document.querySelector(".order-button");
const section = document.querySelector(".section");
const footer = document.querySelector(".footer-1");
const nav = document.querySelector("nav");

//Pop-up Window
hamMenu.addEventListener("click", () => {
  navItems.classList.toggle("hidden");
});

signUp.addEventListener("click", () => {
  signUpPage.classList.remove("max");
  overlay.classList.remove("max");
});

closeBtn.addEventListener("click", () => {
  signUpPage.classList.add("max");
  overlay.classList.add("max");
});

overlay.addEventListener("click", () => {
  signUpPage.classList.add("max");
  overlay.classList.add("max");
});

//coockie message
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `We use cookies for improve functionality and analytics. So we can make good user experience for you. <button class="signuup-button popup">Got It</button>`;
main.before(message);
const cookieButton = document.querySelector(".popup");

cookieButton.addEventListener("click", function () {
  message.remove();
});

//scrolling through button
collectionButton.addEventListener("click", (e) => {
  e.preventDefault();
  main.scrollIntoView({ behavior: "smooth" });
});

aboutButton.addEventListener("click", (e) => {
  e.preventDefault();
  footer.scrollIntoView({ behavior: "smooth" });
});

orderButton.addEventListener("click", (e) => {
  e.preventDefault();
  section.scrollIntoView({ behavior: "smooth" });
});

/////

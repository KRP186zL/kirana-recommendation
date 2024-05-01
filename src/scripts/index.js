import "regenerator-runtime"; /* for async await transpile */

import "../styles/main.scss";
import "./components/index.js";
const data = require("../public/data/DATA.json");

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__menu-button");
  const drawer = document.querySelector("#drawer");
  const { restaurants } = data;
  const rekomendasiContent = document.querySelector(".rekomendasi__content");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      drawer.style.top = "0";
      drawer.style.bottom = "0";
    } else {
      drawer.style.top = "";
      drawer.style.bottom = "";
    }
  });

  const screenWidth = window.innerWidth;
  const navBar = document.querySelector("nav");
  if (screenWidth <= 525) {
    navBar.classList.remove("animate__fadeInDown");
  }
  window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 525) {
      navBar.classList.remove("animate__fadeInDown");
    }
  });

  restaurants.map((restaurant) => {
    const contentCard = document.createElement("content-card");
    contentCard.restaurant = restaurant;
    rekomendasiContent.appendChild(contentCard);
  });

  burger.addEventListener("click", (event) => {
    drawer.classList.toggle("open");
    if (drawer.classList.contains("open")) {
      burger.ariaLabel = "Navigasi menu terbuka";
    } else {
      burger.ariaLabel = "Navigasi menu tertutup";
    }
    event.stopPropagation();
  });

  document.body.addEventListener("click", (event) => {
    drawer.classList.remove("open");
    event.stopPropagation();
  });

  const slideButtonLeft = document.querySelector(".hero__image-slide-left");
  const slideButtonRight = document.querySelector(".hero__image-slide-right");
  let indexSaatIni = 0;
  const heroImage = document.querySelector(".hero__image-slide-image");
  const daftarImage = [
    "./images/heros/hero-image_1.jpg",
    "./images/heros/hero-image_2.jpg",
    "./images/heros/hero-image_3.jpg",
    "./images/heros/hero-image_4.jpg",
  ];

  slideButtonLeft.addEventListener("click", () => {
    heroImage.classList.add("animate__animated");
    heroImage.classList.add("animate__animate__fadeInLeft");
    if (indexSaatIni > 0) {
      indexSaatIni--;
    } else {
      indexSaatIni = daftarImage.length - 1;
    }
    heroImage.src = daftarImage[indexSaatIni];
  });

  slideButtonRight.addEventListener("click", () => {
    if (indexSaatIni < daftarImage.length - 1) {
      indexSaatIni++;
    } else {
      indexSaatIni = 0;
    }
    heroImage.src = daftarImage[indexSaatIni];
  });
});

import "../scss/main.scss";
import "../scss/button.scss";
import { callParticles } from "./particles.js";

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    console.log("click");
  });
};

const app = () => {
  navSlide();
};

app();
callParticles();

// Write your JavaScript script here.

const nav = document.querySelector("nav");
const brand = document.querySelector(".navbar-brand")
const navbutton = document.querySelectorAll(".nav-link")
const header = document.querySelector("header");

const headerOptions = {
    rootMargin: "-800px 0px 0px 0px"
};

const headerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
      brand.classList.add("navbar-brand-scrolled");
      navbutton.forEach(button => button.classList.add("nav-link-scrolled"));
    } else {
      nav.classList.remove("nav-scrolled");
      brand.classList.remove("navbar-brand-scrolled");
      navbutton.forEach(button => button.classList.remove("nav-link-scrolled"));
    }
  });
}, headerOptions);

headerObserver.observe(header);
// mobile nav toggle
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible")

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

// change navbar color on scroll
const navbar = document.querySelector(".primary-navbar");
const logo = document.querySelector(".logo");
const sectionOne = document.querySelector(".home-section");

sectionOneOptions = {
    rootMargin: "-650px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.add("primary-navbar-scrolled");
            logo.classList.add("logo-scrolled");
        } else {
            navbar.classList.remove("primary-navbar-scrolled");
            logo.classList.remove("logo-scrolled");
        }
    })
}, sectionOneOptions)

sectionOneObserver.observe(sectionOne);

// add animations
const animateElements = document.querySelectorAll(".to-be-animated")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("animate", entry.isIntersecting);
    })
})

animateElements.forEach((el) => observer.observe(el));
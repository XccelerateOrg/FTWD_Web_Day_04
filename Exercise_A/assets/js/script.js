// Write your JavaScript script here.
const navbar = document.querySelector('.navbar');
const navBrand = document.querySelector('.navbar-brand');
const navButton = document.querySelectorAll('.nav-link');

window.onscroll = () => {
    if (window.scrollY > 100) {
        for (let i=0; i<navButton.length; i++) {
            navButton[i].classList.add('nav-s-color')
        }
     } else {
        for (let i=0; i<navButton.length; i++) {
            navButton[i].classList.remove('nav-s-color')
        }
    }

    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
        navBrand.classList.add('nav-color');
    } else {
        navbar.classList.remove('nav-active');
        navBrand.classList.remove('nav-color');
    }
};

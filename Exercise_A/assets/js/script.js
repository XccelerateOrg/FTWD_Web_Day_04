// Write your JavaScript script here.
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1500,
	speedAsDuration: true
});

// Changing the navbar settings after scrolling downward
function modifyNavbar() {
    let navbar = document.getElementsByTagName("navbar");
    let navbarBrand = document.getElementsByClassName("navbar-brand");
    if (window.scrollY >= 150) {
        navbar.style.backgroundColor = "white";
        navbarBrand.style.fontSize = "14px";
    }
} 
window.addEventListener('scroll', modifyNavbar);
// Write your JavaScript script here.
var scroll = new SmoothScroll('a[href*="#"]');

const navBar = document.getElementById("mainNav");
const navBrand = document.getElementById("nav-brand");
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 50) {
    navBar.style.backgroundColor = "white";
    navBrand.style.color = "#eb3812";
    for(let item of navItems){
      item.style.color = "black";
    }
    
  } else {
    navBar.style.backgroundColor = "transparent";
    navBrand.style.color = "rgba(255, 255, 255, 0.7)";
    for(let item of navItems){
      item.style.color = "rgba(255, 255, 255, 0.7)";
    }
  }
});

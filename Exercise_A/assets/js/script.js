function changeBg() {
  var navbar = document.getElementById("navbar");
  var navbrand = document.getElementById("navBrand");
  var scrollValue = window.scrollY;
  if (scrollValue < 150) {
    navbar.classList.remove("bgColor");
    navbar.classList.remove("navbar-light");
    navbar.classList.add("navbar-dark");
    navbrand.classList.remove("navbrand");
  } else {
    navbar.classList.add("bgColor");
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
    navbrand.classList.add("navbrand");
  }
}

window.addEventListener("scroll", changeBg);

const navBar = document.getElementsByClassName("navbar-expand-lg")[0];
const navItem = document.getElementsByClassName("navbar-nav");

console.log(document.getElementsByClassName("navbar"));
console.log(document.getElementsByClassName("nav-link"));

window.addEventListener("scroll", function () {
  console.log(window.scrollY);

  if (window.scrollY <= 100) {
      navBar.classList.remove("bg-light");
      
  } else if (window.scrollY > 100) {
      navBar.classList.add("bg-light");
  }
});

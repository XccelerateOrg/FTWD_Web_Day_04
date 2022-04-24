var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000
  //   speedAsDuration: true
});

const button = document.getElementById("submit");
const searchBar = document.getElementById("searchBar");

button.addEventListener("click", function(event) {
  event.preventDefault();
  console.log(searchBar.value);
  alert(searchBar.value);
});

const navBar = document.getElementsByClassName("navbar")[0];

console.log(document.getElementsByClassName("navbar"));

window.addEventListener("scroll", function() {
  console.log(window.scrollY);

  if (window.scrollY > 100) {
    navBar.classList.add("navbarInverted");
    navBar.classList.remove("bg-light");
  } else if (window.scrollY <= 99) {
    navBar.classList.add("bg-light");
    navBar.classList.remove("navbarInverted");
  }
});

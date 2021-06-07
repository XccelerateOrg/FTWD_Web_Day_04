// /* 
// The code to activate smooth scroll.
// https://github.com/cferdinandi/smooth-scroll

// */
// var scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   //   speedAsDuration: true
// });

// /*
// Using JavaScript to access DOM elements
// If you try to utilize this code, you will need to ensure that the DOM elements exist with the id's or class names used below. 
// */

// const button = document.getElementById("submit");
// const searchBar = document.getElementById("searchBar");

// /*
// Add an event listener to the button
// */
// button.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log(searchBar.value);
//   alert(searchBar.value);
// });

/*
Adding event listeners to the page such that when he page scrolls the navigation bar will change.

*/
const navBar = document.getElementsByClassName("navbar")[0];

console.log(document.getElementsByClassName("navbar"));

window.addEventListener("scroll", function () {
  console.log(window.scrollY);

  if (window.scrollY < 100) {
    // navBar.classList.add("navbarInverted");
    navBar.classList.remove("bg-success");
  } else if (window.scrollY >= 99) {
    navBar.classList.add("bg-success");
    navBar.classList.add("text-dark");
  }
});

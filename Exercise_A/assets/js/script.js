// Write your JavaScript script here.
var firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]');
firstScrollSpyEl.addEventListener("activate.bs.scrollspy", function () {
  var navbar = document.getElementsById("navbar").classList.add("navbarwhite");
});

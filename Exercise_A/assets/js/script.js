// Write your JavaScript script here.
// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/
var navbar = document.getElementById('navbar');
var navbarbrand = document.getElementById('navbarbrand');
var navbarlistitem = document.getElementsByClassName('nav-link');

window.onscroll = function () {
    for (var i = 0 ; i < navbarlistitem.length ; i++) {
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
            navbarlistitem[i].classList.add("navtransform-navlink");
          } else {
            navbarlistitem[i].classList.remove("navtransform-navlink");
          }
      }

        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
            navbar.classList.add("navtransform-bg");
            navbarbrand.classList.add("navtransform-brand");
          } else {
            navbar.classList.remove("navtransform-bg");
            navbarbrand.classList.remove("navtransform-brand");
          }
};
// Write your JavaScript script here.
let navbar = document.querySelector('#top_nav');
let navbarbrand = document.querySelector('.navbar-brand');
let navlink1 = document.querySelector('#nav-a1');
let navlink2 = document.querySelector('#nav-a2');
let navlink3 = document.querySelector('#nav-a3');
let navlink4 = document.querySelector('#nav-a4');

      window.onscroll = () => {
      if (window.scrollY > 1) {
        navbar.classList.add('nav-active');
        navbarbrand.classList.add('nav-orange');
        navlink1.classList.add('nav-fontblack');
        navlink2.classList.add('nav-fontblack');
        navlink3.classList.add('nav-fontblack');
        navlink4.classList.add('nav-fontblack');
      } else {
        navbar.classList.remove('nav-active');
        navbarbrand.classList.remove('nav-orange');
        navlink1.classList.remove('nav-fontblack');
        navlink2.classList.remove('nav-fontblack');
        navlink3.classList.remove('nav-fontblack');
        navlink4.classList.remove('nav-fontblack');
      }
    };

    $(document).ready(function(){
        $('body').scrollspy({target: "#navbarNavDropdown", offset: 50});   
      });

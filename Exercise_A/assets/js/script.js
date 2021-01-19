// Write your JavaScript script here.

$(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
      if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
        $('.navbar').removeClass('navbar-light');
        $('.navbar').addClass('solid');
        $('.header').addClass('navbar-brandActive');
        $('.nav-link').removeClass('whiteNav');
        $('.nav-link').addClass('BlackNav');

      } else if ($(document).scrollTop() < 50 ) { //if the scrollbar is less than 50 px from the top it goes back to transparency 
        $('.navbar').removeClass('solid');
        $('.header').removeClass('navbar-brandActive');
        $('.navbar').addClass('navbar-light');
        $('.nav-link').addClass('whiteNav');
        $('.nav-link').removeClass('BlackNav');
      }
    });
  });
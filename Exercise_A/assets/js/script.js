// Write your JavaScript script here.
$(document).ready(function () {

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if ($(document).scrollTop(50) || ) {
//     $("nav").addClass( "navbar-light" );
//   } else {
//     $("nav").addClass( "navbar-dark bg-transparent" );
//   }
// }

var lastScrollTop = 50;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  if (st > 100) {
    $("nav").addClass("navbar-light bg-light").removeClass("navbar-dark bg-transparent");
    $("#logo").css("color", "#f05f40").css("font-size", "15px")
  } else {
    $("nav").addClass("navbar-dark bg-transparent").removeClass("navbar-light bg-light")
    $("#logo").css("color", "#ffff").css("font-size", "17px")
  }
});

});
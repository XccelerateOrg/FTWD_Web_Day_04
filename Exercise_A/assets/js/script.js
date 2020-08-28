//navbar change color

$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 200);
});

//////////////////////////////////////////////

//navbar  text  change color and size

$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 200) {
      $(".bar_text").css("color", "#f05f40");
      $(".bar_text").css("font-size", "1rem");
      $(".bar_item_text").css("color", "#000");
    } else {
      $(".bar_text").css("color", "rgba(255, 255, 255, 0.7)");
      $(".bar_text").css("font-size", "1.2rem");
      $(".bar_item_text").css("color", "rgba(255, 255, 255, 0.7)");
    }
  });
});

//////////////////////////////////////////////

// scrollspy

$("body").scrollspy({ target: "#navbarSupportedContent" });

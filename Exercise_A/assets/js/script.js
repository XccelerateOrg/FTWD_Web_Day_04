// Write your JavaScript script here.
$(document).ready(function () {
  var toggleAffix = function (affixElement, scrollElement, wrapper) {
    var height = affixElement.outerHeight(),
      top = wrapper.offset().top;

    if (scrollElement.scrollTop() >= top) {
      wrapper.height(height);
      affixElement.addClass("affix");
    } else {
      affixElement.removeClass("affix");
      wrapper.height("auto");
    }
  };

  $('[data-toggle="affix"]').each(function () {
    var ele = $(this),
      wrapper = $("<div></div>");

    ele.before(wrapper);
    $(window).on("scroll resize", function () {
      toggleAffix(ele, $(this), wrapper);
    });

    // init
    toggleAffix(ele, $(window), wrapper);
  });
});

$(".navbar-brand").hover(
  function () {
    $(this).addClass("animate__animated animate__rubberBand");
  },
  function () {
    $(this).removeClass("animate__animated animate__rubberBand");
  }
);

$(".btn").hover(
  function () {
    $(this).addClass("animate__animated animate__pulse");
  },
  function () {
    $(this).removeClass("animate__animated animate__pulse");
  }
);

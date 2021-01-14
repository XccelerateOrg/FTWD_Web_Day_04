// Write your JavaScript script here.


$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
});

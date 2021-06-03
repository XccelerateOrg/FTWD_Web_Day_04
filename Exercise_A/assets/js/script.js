// Write your JavaScript script here.
jQuery(function($){
	var $navbar   = $('.x-navbar');
	$(window).scroll(function(event) {
		var $current = $(this).scrollTop();
		if( $current > 0 ){
			$navbar.addClass('x-navbar-fixed-top');
		} else {
			$navbar.removeClass('x-navbar-fixed-top');
		}
	});
});
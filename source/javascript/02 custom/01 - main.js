/* ----------------------------------------
  Theme:
  Author:
  Version:
---------------------------------------- */
$(function(){
	var $carouselHome = $('.carousel-wrapper .carousel');
	$carouselHome.slick({
		'autoplay': true,
		'autoplaySpeed': 3000,
		'centerMode': true,
		'dots': true,
		'draggable': true,
		'fade': true,
		'pauseOnHover': false,
		'speed': 400,
	});
});
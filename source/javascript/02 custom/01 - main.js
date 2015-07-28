/* ----------------------------------------
  Theme:
  Author:
  Version:
---------------------------------------- */
$(function(){
	var $carouselHome = $('.carousel');
	$carouselHome.slick({
		// 'autoplay': true,
		// 'autoplaySpeed': 3000,
		// 'centerMode': true,
		// 'dots': true,
		// 'draggable': true,
		// 'fade': true,
		// 'pauseOnHover': false,
		// 'speed': 400,
	});

	function addThumbnails(){
		// $navigation = $('.slick-dots');
		// $('.slick-dots').destroy();
		// $('.slick-initialized').append($navigation);
	}

	var $carouselProduct = $('.product-gallery');

	// $carouselProduct.on('init', function(event, slick){
	// 	addThumbnails();
	// });

	$carouselProduct.slick({
		// 'autoplay': false,
		// 'centerMode': true,
		// 'dots': true,
		// 'draggable': true,
		// 'fade': true,
	});

	var $carouselThumbnails = $('.product-thumbnails');

	$carouselThumbnails.on('click', 'li a', function(e){
		e.preventDefault();
		var $el = $(this);
		var $index = $el.data('index');
		// var $image = $el.data('id');
		// var $variant = $el.data('variant');
		$carouselProduct.slick('slickGoTo', $index);
	});


});
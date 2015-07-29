/* ----------------------------------------
  Theme:
  Author:
  Version:
---------------------------------------- */
$(function(){
	var $carouselHome = $('.carousel');
	$carouselHome.slick();

	var $carouselProduct = $('.product-gallery');
	var $carouselThumbnails = $('.product-single__thumbnails');

	function thumbnailBrowser(){
		$carouselThumbnails.on('click', 'a', function(e){
			e.preventDefault();
			var $el = $(this);
			var $index = $el.data('index');
			$carouselProduct.slick('slickGoTo', $index);
		});
	}

	function variantSlide(){
		var $tmp_target = $('.product-single__thumbnails a[data-variantName="' + $('.single-option-selector').val() +'"]:first');
		var $tmp_index = $tmp_target.data('index');
		return $tmp_index;
	}

	// When the product carousel is initialized, enable thumbnailBrowser
	$carouselProduct.on('init', function(event, slick){
		thumbnailBrowser();
	});

	/* Initialize Product Gallery Carousel */
	$carouselProduct.slick();

	$carouselThumbnails.on('init', function(event, slick){
		$carouselProduct.slick('slickGoTo', variantSlide());
		// $carouselThumbnails.slick('slickGoTo', variantTriggerSlide());
	});
	/* Initialize Thumbnails Carousel */
	$carouselThumbnails.slick({
		slidesToShow: 4,
		slidesToScroll: 3,
		infinite: true,
  	focusOnSelect: true
	});

	var $selector = $('.single-option-selector');
	$selector.on('change', function(){
		var $target = $('.product-single__thumbnails a[data-variantName="' + $(this).val() +'"]:first');
		var $index = $target.data('index');
		if ($index != undefined){
			$carouselProduct.slick('slickGoTo', $index);
			$carouselThumbnails.slick('slickGoTo', $index);
		}
	});

});




// /* ----------------------------------------
//   Theme:
//   Author:
//   Version:
// ---------------------------------------- */
// $(function(){
// 	var $carouselHome = $('.carousel');
// 	$carouselHome.slick();

// 	var $carouselProduct = $('.product-gallery');
// 	var $carouselThumbnails = $('.product-single__thumbnails');

// 	// Functions that will be run after the carousels are initialized */
// 	/* Turns the thumbnails into a working carousel-navigator */
// 	function thumbnailBrowser(){
// 		var $carouselProduct = $('.product-gallery'),
// 				$carouselThumbnails = $('.product-single__thumbnails');
// 		$carouselThumbnails.on('click', 'a', function(e){
// 			e.preventDefault();
// 			var $el = $(this);
// 			var $index = $el.data('index');
// 			$carouselThumbnails.slick('slickGoTo', $index);
// 		});
// 	}
// 	/* Returns the slide-index of a matching image to a selected variant */
// 	function variantSlide(){
// 		var $thumbnailContainer = $('.product-single__thumbnails'),
// 				$activeVariant = $('.single-option-selector').val();
// 		var $target = $thumbnailContainer.find('a[data-variantName="' + $activeVariant +'"]:first');
// 		var $index = $target.data('index');
// 		return $index;
// 	}

// 	// Runs functions when the carousels are initialized
// 	$carouselProduct.on('init', function(event, slick){
// 		thumbnailBrowser();
// 	});
// 	$carouselThumbnails.on('init', function(event, slick){
// 		$carouselProduct.slick('slickGoTo', variantSlide());
// 		/* $carouselThumbnails.slick('slickGoTo', variantSlide()); // Needs more work, as above isn't working */
// 	});

// 	// Triggers the carousels
// 	$carouselProduct.slick();
// 	$carouselThumbnails.slick({
// 		slidesToShow: 4,
// 		slidesToScroll: 3,
// 		infinite: true,
//   	focusOnSelect: true
// 	});

// 	/* Each time a variant is changed, check for a variant with a matching 'data-varientName' to the variant's 'val()'' */
// 	var $selector = $('.single-option-selector');
// 	$selector.on('change', function(){
// 		var $target = $('.product-single__thumbnails a[data-variantName="' + $(this).val() +'"]:first');
// 		var $index = $target.data('index');
// 		if ($index != undefined){
// 			$carouselProduct.slick('slickGoTo', $index);
// 			$carouselThumbnails.slick('slickGoTo', $index);
// 		}
// 	});

// });
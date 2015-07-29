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
		var $thumbnailContainer = $('.product-single__thumbnails');
		var $activeVariant = $('.single-option-selector').val();
		var $target = $thumbnailContainer.find('a[data-variantName="' + $activeVariant +'"]:first');
		var $index = $target.data('index');
		return $index;
	}

	// When the product carousel is initialized, enable thumbnailBrowser
	$carouselProduct.on('init', function(event, slick){
		thumbnailBrowser();
	});

	/* Initialize Product Gallery Carousel */
	$carouselProduct.slick();

	$carouselThumbnails.on('init', function(event, slick){
		$carouselProduct.slick('slickGoTo', variantSlide());
		// $carouselThumbnails.slick('slickGoTo', variantSlide());
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
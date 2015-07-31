/* ----------------------------------------
  Theme:
  Author:
  Version:
---------------------------------------- */
jQuery(function($) {
	var $carouselHome = $('.carousel');
	$carouselHome.slick();

	$('.selector-wrapper select').dropkick();

	var $subMenus = $('.js-drawer-open-center');

	/* When a menu with a sub-menu is selected, swap out the available sub-link list with the desired one, changing drawer__title as necessary */
	$('.js-drawer-open-center').click(function(){
		var $subMenu = $('#subMenu'),
				$target = $(this).data('menu');
		var $menu = $subMenu.find('#'+$target);
		var $menuTitle = $menu.data('title');
		$subMenu.find('ul').each(function(){
			$(this).removeClass('active');
		});
		$subMenu.find('.drawer__title').html($menuTitle);
		$menu.addClass('active');
	});

});
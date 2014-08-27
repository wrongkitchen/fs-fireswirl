/**
*   App Description
*/


$(document).ready(function(){
	$('.thumbnail').on('click', function(){
		$('.thumbnail').removeClass('active');
		$(this).addClass('active');
	});

	$('.textureBtn').on('click', function(){
		$('.textureBtn').removeClass('active');
		$(this).addClass('active');
	});

	$('.selectorBtn').on('click', function(){
		if($(this).hasClass('right')){
			return false;;
		}
		$('.selectorBtn').removeClass('active');
		$(this).addClass('active');
	});

	$('.black-overlay>.container>.close').on('click', function(){
		$('#wrapper').removeClass('active');
	});

	$('.sidebarCaller').on('click', function(){
		var pc = $('#wrapper');
		if(pc.hasClass('active'))
			pc.removeClass('active');
		else
			pc.addClass('active');
	});

	$('.navBtn').on('click', function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			return false;
		}
		$('.navBtn').removeClass('active');
		$(this).addClass('active');
	});

	var src = $(".changeBg:eq(0)").attr('href');
	$('.preview').css({ 'background-image' : 'url(' + src + ')' });

	$(".changeBg").on('click', function(){
		var src = $(this).attr('href');
		$('.preview').css({ 'background-image' : 'url(' + src + ')' });
		return false;
	});

	var owl = $("#owl").owlCarousel({
			items: 6,
			itemsDesktop : [884,6], //5 items between 1000px and 901px
			itemsDesktopSmall : [600,3], // betweem 900px and 601px
			itemsTablet: [400,2], //2 items between 600 and 0
			itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});

	var handler = owl.data('owlCarousel');

	$('.gallery>.leftBtn').on('click', function(){
		handler.prev();
	});
	$('.gallery>.rightBtn').on('click', function(){
		handler.next();
	});
});
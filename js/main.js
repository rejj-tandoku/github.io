(function ($) {
	"use strict";

	// preloader
	$(window).load(function () {
		loadData()

		$("#loader").fadeOut("slow", function () {
			$("#preloader").delay(300).fadeOut("slow");
		});

	})

	// Navigation menu
	var toggleButton = $('.menu-toggle'),
		nav = $('.main-navigation');

	// toggle button
	toggleButton.on('click', function (e) {
		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();
	});

	// nav items
	nav.find('li a').on("click", function () {
		toggleButton.toggleClass('is-clicked');
	});

	// smooth scrolling
	$('.smoothscroll').on('click', function (e) {
		e.preventDefault();

		var target = this.hash, $target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});
	});


	// placeholder plugin settings
	$('input, textarea, select').placeholder()

	// Back to top
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

	// Show or hide the sticky footer button
	$(window).scroll(function () {
		var scrolledValue = $(window).scrollTop();
		if (scrolledValue > 200) {
			$('#header-container').addClass('scrolled');
		} else {
			$('#header-container').removeClass('scrolled');
		}

		var scrollPos = $(document).scrollTop();

		$('section').each(function () {
			var sectionOffset = $(this).offset().top - 300;
			var sectionHeight = $(this).height();
			var sectionId = $(this).attr('id');
			var menuLink = $('.menu a[href="#' + sectionId + '"]');

			console.log(sectionOffset, sectionHeight, sectionId)

			if (scrollPos >= sectionOffset && scrollPos < sectionOffset + sectionHeight) {
				menuLink.addClass('current');
			} else {
				menuLink.removeClass('current');
			}
		});
	});

	$('.menu-button').click(function () {
		$('.menu').toggleClass('open');
		$('.menu-button').toggleClass('change');
	});
})(jQuery);
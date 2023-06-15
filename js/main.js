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
		nav.fadeOut();
	});


	// Highlight the current section in the navigation menu
	var sections = $("section"), navigation_links = $("#main-nav-wrap li a");

	sections.waypoint({
		handler: function (direction) {
			var active_section;
			active_section = $('section#' + this.element.id);
			if (direction === "up") active_section = active_section.prev();
			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');
			navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");
		},
		offset: '25%'
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
	jQuery(window).scroll(function () {
		if (!($("#header-search").hasClass('is-visible'))) {
			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}
		}
	});
})(jQuery);
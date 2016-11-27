$(document).ready(function(){

	/* header's height */
	$(document).scroll(function() {
		var changePoint = $(".header").offset().top;
		if (changePoint > 100) {
			$(".header").css("height", "65px");
			$(".header-nav a").css("line-height", "61px");
		} else {
			$(".header").css("height", "");
			$(".header-nav a").css("line-height", "");
		}
	});

	/* Smooth scrolling */
	$("a.scroll").click(function(event) {
		event.preventDefault();
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$("html,body").animate({
			scrollTop: destination
		}, 1300);
		return false;
	});

	/* sliders */
	$('#header-slider').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: true,
		smartSpeed: 1500
	});
	$('#gigs-slider, #posts-slider').owlCarousel({
		loop: true,
		nav: true,
		navText: "",
		margin: 20,
		smartSpeed: 500,
		responsive:{
			0: {
				items:1
			},
			768: {
				items:2
			},
			992: {
				items:3
			}
		}
	});

});
jQuery("document").ready(function($){

	var nav = $('.col-md-3');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 95) {
			nav.addClass("fixed");
		} else {
			nav.removeClass("fixed");
		}
	});

});


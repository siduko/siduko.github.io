(function($){
  $(function(){

    $(".job-header").typed({
      strings: ["Web Developer.^1000", "Java Developer.^1000", "Mobile Hyprid And Native Developer^1000"],
      typeSpeed: 0,
      loop: true
    });

    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    //Check to see if the window is top if not then display button
  	$(window).scroll(function(){
  		if ($(this).scrollTop() > 100) {
  			$('.scrollToTop').fadeIn();
  		} else {
  			$('.scrollToTop').fadeOut();
  		}
  	});

  	//Click event to scroll to top
  	$('.scrollToTop').click(function(){
  		$('html, body').animate({scrollTop : 0},800);
  		return false;
  	});

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  }); // end of document ready
})(jQuery); // end of jQuery name space

(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

    // START MENU JS
    $(window).on('scroll', function() {
      if ($(this).scrollTop() >50) {
          $('.navbar-light').addClass('menu-shrink');
      } else {
          $('.navbar-light').removeClass('menu-shrink');
      }
    });	
    // END MENU JS

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Home Slider JS
    $('.home-slider').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
    })
    
    // Home Slider Two JS
    $('.home-slider-two').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
    })

    // Popup youtube JS
    $('.popup-youtube').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Popup youtube JS
    $('.popup-youtube-two').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Popup youtube JS
    $('.popup-youtube-three').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    // CounterUp JS
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });
    
    // WOW JS
    new WOW().init();

    // Back to top 
    $('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-arrow-up"></i></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 900);
        return false;
    });

    // PRELOADER
    jQuery(window).on('load',function(){
        jQuery(".loader").fadeOut(500);
    });

}); 	
})(jQuery);
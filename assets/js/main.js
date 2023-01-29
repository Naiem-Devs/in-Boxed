(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".CH-sider").owlCarousel({
    loop: true,
    center:true,
    margin: 30,
    items: 3,
    navText: [
      '<i class="fal fa-long-arrow-left"></i>',
      '<i class="fal fa-long-arrow-right"></i>'
    ],
    // stagePadding: 500,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

 
})(jQuery);

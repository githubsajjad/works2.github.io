(function($){
    "use strict";
    
    
    // document ready 
    jQuery(document).ready(function($){
        $('.slider-carousel').owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            
        });
        $('.logo-carousel').owlCarousel({
            items: 5,
            loop: true,
            nav: false,
            dots: false,
            
        });
        
    });
    
    // window load 
    jQuery(window).load(function(){
        
        
    });
    
    
    
    
    
    
    
    
    
})(jQuery);
/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 250
        }
    })

    //Replace ID below with your box ID
    var boxToFix = ".nav";
    var boxToFix2= ".navFlag";

    //Set the number of pixels to scroll before showing the header
    var scrollPositionToShowHeader = 250;
      
    var boxParent = $(boxToFix).parent();
    var boxClone = $(boxToFix).clone();
          
    $(boxClone).appendTo(boxParent).css({"position":"fixed", "left":"0", "top":"0", "width":"100%", "z-index":"899"}).children().remove();
      
    showOrHideHeader();
      
    function showOrHideHeader() {
        var currentPositionFromTop = $(window).scrollTop();
        
        if (currentPositionFromTop > scrollPositionToShowHeader) {
            $(boxToFix).show();
            $(boxToFix2).hide();
            $(boxClone).show();
        } else {
            $(boxToFix).hide();
            $(boxToFix2).show();
            $(boxClone).hide();
        }
    }
      
        $(window).scroll(function() {
        showOrHideHeader();
    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

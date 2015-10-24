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
        offset: 0
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
            top: 0
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(38.736946, -9.142685),
          zoom: 9,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var combateVirtualCustom = {lat: 38.7742958, lng: -9.1575083};
        var powerBB = {lat: 38.5244000, lng: -8.8882000};

        var map = new google.maps.Map(mapCanvas, mapOptions)

        var contentStringCVC = '<div id="content">'+
                            '<div id="siteNotice">'+
                            '</div>'+
                            '<h5 id="firstHeading" class="firstHeading"><a href="https://www.facebook.com/combatevirtualcustomairsoft" target="blank">Combate Virtual Custom</a></h5>'+
                            '</div>';

        var infowindowCVC = new google.maps.InfoWindow({
            content: contentStringCVC
        });

        var combateVirtualCustom = new google.maps.Marker({
            position: combateVirtualCustom,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Combate Virtual Custom'
        });

        combateVirtualCustom.addListener('click', function() {
            infowindowCVC.open(map, combateVirtualCustom);
        });

        var contentStringPBB = '<div id="content">'+
                            '<div id="siteNotice">'+
                            '</div>'+
                            '<h5 id="firstHeading" class="firstHeading"><a href="https://www.facebook.com/POWER-BB-1400090706869972/" target="blank">Power BB - Metralha</a></h5>'+
                            '</div>';

        var infowindowPBB = new google.maps.InfoWindow({
            content: contentStringPBB
        });

        var powerBB = new google.maps.Marker({
            position: powerBB,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Power BB - Metralha'
        });

        powerBB.addListener('click', function() {
            infowindowPBB.open(map, powerBB);
        });

      }
      google.maps.event.addDomListener(window, 'load', initialize);

})(jQuery); // End of use strict

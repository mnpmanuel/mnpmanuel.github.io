/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var completes = document.querySelectorAll(".complete");
var toggleButton = document.getElementById("toggleButton");

function toggleComplete() {
  var lastComplete = completes[completes.length - 1];
  lastComplete.classList.toggle('complete');
}

toggleButton.onclick = toggleComplete;

function HideContent(d) {
document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
document.getElementById(d).style.display = "block";
}
function ReverseDisplay(d) {
if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
else { document.getElementById(d).style.display = "none"; }
}

function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 38.7408514, lng: -9.1041134},
      zoom: 13
    });
    var NOW1 = {lat: 38.7408514, lng: -9.1041134};
    var NOW1 = new google.maps.Marker({
        position: NOW1,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'NO OFFICE WORK',
        url: 'https://www.google.pt/maps/place/R.+Pereira+Henriques+1,+1950-242+Lisboa/@38.7408514,-9.1041134,19z/data=!3m1!4b1!4m7!1m4!3m3!1s0xd1933df3bc717d7:0xa6dbc055f9d40a3f!2sR.+Pereira+Henriques,+Lisboa!3b1!3m1!1s0xd1933df2284648f:0xdbf859f390e39163'
    });
}
;(function($){
  "use strict";

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinity: true,
    fade: true,
    autoplaySpeed: 1000,
    cssEase: 'easeOut',
    speed: 1500
  });


  $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  	console.log(currentSlide);
  });

  	$('#btn-play').on('click', function(){
  		$('.slider').slick('slickPlay');
  	})

  	$('#btn-pause').on('click', function(){
  		$('.slider').slick('slickPause');
  	})

  	$('#btn-next').on('click', function(){
  		$('.slider').slick('slickNext');
  	})

  	$('#btn-prev').on('click', function(){
  		$('.slider').slick('slickPrev');
  	})

  	$('#btn-currentSlide').on('click', function(){
  		alert($('.slider').slick('slickCurrentSlide'));
  	});

  	$('#goToSlide').on('change', function(){
  		var numberOfSlide = $(this).val();
  		$('.slider').slick('slickGoTo', numberOfSlide);
  	})


})(jQuery);

var map;
      function initMap() {
        var myLocation = {lat: 40.677799, lng: -73.937389}
        map = new google.maps.Map(document.getElementById('map'), {
          center: myLocation,
          zoom: 15,
          styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
        });
        var marker = new google.maps.Marker({
  position: myLocation,
  map: map
});
      }

      

  const googleMapsScript = document.createElement('script');
  googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBaSe6jdgxnsPBSc7pRB0_MlIoZSRm7aw8&callback=initMap';
  document.head.appendChild(googleMapsScript);


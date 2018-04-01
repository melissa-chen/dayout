function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: 0, lng: -180}
  });

  var markers = [
    {lat: 34.037686, lng: -118.440517},
    {lat: 34.061662, lng: -118.443306}
  ];

  var marker1 = new google.maps.Marker({
    position: markers[0],
    map: map,
    title: 'Hello World!'
  });

  var marker2 = new google.maps.Marker({
    position: markers[1],
    map: map,
    title: 'Hello World!'
  });

  var flightPath = new google.maps.Polyline({
    path: markers,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });


  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < markers.length; i++) {
   bounds.extend(markers[i]);
  }

  map.fitBounds(bounds);

  flightPath.setMap(map);
}

// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } 

  if (next.next().next().length>0) {
    next.next().next().children(':first-child').clone().appendTo($(this));
  } 
});
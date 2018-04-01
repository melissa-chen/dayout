var markers = [
    {lat: 34.037686, lng: -118.440517},
    {lat: 34.061662, lng: -118.443306}
  ];

var map;
var tripPath;
var positionLetter = 67;

function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: 0, lng: -180}
  });

  

  var marker1 = new google.maps.Marker({
    position: markers[0],
    map: map,
    icon: 'markers/paleblue_markerA.png'
  });

  var marker2 = new google.maps.Marker({
    position: markers[1],
    map: map,
    icon: 'markers/paleblue_markerB.png'
  });

  tripPath = new google.maps.Polyline({
    path: markers,
    geodesic: true,
    strokeColor: '#0000FF',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });


  resizeMap();

  tripPath.setMap(map);
}

function updatePath(point) {
  var points = tripPath.getPath().push(new google.maps.LatLng(point.lat, point.lng));
}

function resizeMap() {
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < markers.length; i++) {
   bounds.extend(markers[i]);
  }

  map.fitBounds(bounds);
}

var la = 34.081662;
var lo = -118.343306;

function addMarker() {
  la += 0.02;
  lo += 0.02;
  var position = {lat: la, lng: lo}
  markers.push(position);
  var marker = new google.maps.Marker({
    position: position,
    map: map,
    icon: 'markers/paleblue_marker' + String.fromCharCode(positionLetter) + '.png'
  });
  positionLetter = 65 + (positionLetter + 1)%65;

  updatePath(position)
  resizeMap();
}

function displayPOI(points){
  points.forEach(function(element) {
    var marker1 = new google.maps.Marker({
      position: element,
      map: map
    });
  });
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
function initMap() {
  const mapOptions = {
    center: { lat: 41.484, lng: -87.728 },
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: true,
    mapTypeControl: true,
    minZoom: 10,
    maxZoom: 16
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const marker = new google.maps.Marker({
    position: { lat: 41.484, lng: -87.728 },
    map: map,
    title: "Southland College Prep"
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<p>My former high school I graduated from.</p>"
  });

  marker.addListener("click", function() {
    infoWindow.open(map, marker);
  });
}

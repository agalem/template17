function initMap() {
    var newham = {lat: 51.523006, lng: 0.030984};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: newham
    });
    var marker = new google.maps.Marker({
        position: newham,
        map: map
    });
}
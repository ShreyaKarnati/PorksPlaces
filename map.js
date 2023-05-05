let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: 47.7590, lng: -122.1907 },
        zoom: 12
    });

    marker = new google.maps.Marker ({
        position:{ lat: 47.7590, lng: -122.1907 },
        map:map
    })
}

initMap();
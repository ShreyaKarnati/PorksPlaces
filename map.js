let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: 47.6628, lng: -122.3139 },
        zoom: 8
    });

    UD_marker = new google.maps.Marker ({
        position:{ lat: 47.6628, lng: -122.3139 },
        map:map
    })

    arboretum_marker = new google.maps.Marker ({
        position:{ lat: 47.6339, lng: -122.2995 },
        map:map
    })

    marymoor_park_marker = new google.maps.Marker ({
        position:{ lat: 47.6626, lng: -122.1061},
        map:map
    })

}

initMap();
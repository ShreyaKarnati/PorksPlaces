let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), 
    {
        center: { lat: 47.6628, lng: -122.3139 },
        zoom: 8
    });

    UD_marker = new google.maps.Marker 
    ({
        position:{ lat: 47.6628, lng: -122.3139 },
        map:map
    });

    UD_info = new google.maps.InfoWindow 
    ({
        content: 'University District, or the "U District", is a social hub for all UW Students. There are beautiful trails such as the Burke Gillman Trail. Eateries such as Mod Pizza, Cedars, and Aladdin. <a href = https://www.udistrictseattle.com/>Learn more here</a>'
    });

    UD_marker.addListener('click',function()
    {
        UD_info.open(map, UD_marker);
    });

    arboretum_marker = new google.maps.Marker ({
        position:{ lat: 47.6339, lng: -122.2995 },
        map:map
    });

    marymoor_park_marker = new google.maps.Marker ({
        position:{ lat: 47.6626, lng: -122.1061},
        map:map
    });



}

initMap();
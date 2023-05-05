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
        content: 'University District, or the "U District", is a social hub for all UW Students. There are beautiful trails such as the Burke Gillman Trail. Eateries such as Mod Pizza, Cedars, and Aladdin. <a href = "https://www.udistrictseattle.com/" class = "mapLinks">Learn more here</a>'
    });

    UD_marker.addListener('click',function()
    {
        UD_info.open(map, UD_marker);
    });

    arboretum_marker = new google.maps.Marker ({
        position:{ lat: 47.6339, lng: -122.2995 },
        map:map
    });

    arboretum_info = new google.maps.InfoWindow
    ({
        content: 'The Arboretum is a welcome oasis on the shores of Lake Washington. Take a walk through the Arboretum and discover this beautiful living collection. The Graham Visitors Center contains an information desk, and a gift shop managed by the Arboretum Foundation. The Japanese Garden, located at the south end of the Arboretum has an entrance fee and is managed by the City of Seattle.'
    });

    arboretum_marker.addListener('click',function()
    {
        UD_info.open(map, arboretum_marker);
    });

    marymoor_park_marker = new google.maps.Marker ({
        position:{ lat: 47.6626, lng: -122.1061},
        map:map
    });



}

initMap();
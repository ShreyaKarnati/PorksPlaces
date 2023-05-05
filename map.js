//Google Map variable.
let map;

//content for Markers.
const contents = [
    [47.6628 , -122.3139, "<h1>University District, U District</h1> <p>A social hub for all UW Students. There are beautiful trails such as the Burke Gillman Trail. Eateries such as Mod Pizza, Cedars, and Aladdin. <a href = https://www.udistrictseattle.com/>Learn more here</a> </p>"],
    [47.6364 , -122.2958, "<h1>The Arboretum</h1> <p>A welcome oasis on the shores of Lake Washington. Take a walk through the Arboretum and discover this beautiful living collection. The Graham Visitors Center contains an information desk, and a gift shop managed by the Arboretum Foundation. The Japanese Garden, located at the south end of the Arboretum has an entrance fee and is managed by the City of Seattle. <a href=https://botanicgardens.uw.edu/washington-park-arboretum/>Learn more here<a> </p>"]
];

//Create Map
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), 
    {
        center: { lat: 47.6628, lng: -122.3139 },
        zoom: 8
    });

    //Create Markers.
    for (let i = 0; i < contents.length; i++)
{
    add_marker(contents[i][0],contents[i][1],contents[i][2]);
}
};

//Function for adding markers, marker info, and event listeners.
function add_marker(latitude, longitude, description)
{
    var marker = new google.maps.Marker ({
        position:{ lat: latitude, lng: longitude },
        map:map
    });

    marker_info = new google.maps.InfoWindow ({
        content: description
    });

    marker.addListener('click',function() {
        marker_info.open(map, marker);
    });
};

//Create map.
initMap();

//Google Map variable.
let map;

//content for Markers.
const contents = [
    [47.6628, -122.3139, "<h1 class = \"mapLocations\">University District</h1> <p class = \"mapTexts\">A social hub for all UW Students. There are beautiful trails such as the Burke Gillman Trail. Eateries such as Mod Pizza, Cedars, and Aladdin. <a href = https://www.udistrictseattle.com/ target = \"blank\" class = \"mapLinks\">Learn more here</a> </p>"],
    [47.6364, -122.2958, "<h1 class = \"mapLocations\">The Arboretum</h1> <p  class = \"mapTexts\">A welcome oasis on the shores of Lake Washington. Take a walk through the Arboretum and discover this beautiful living collection. The Graham Visitors Center contains an information desk, and a gift shop managed by the Arboretum Foundation. The Japanese Garden, located at the south end of the Arboretum has an entrance fee and is managed by the City of Seattle. <a href=https://botanicgardens.uw.edu/washington-park-arboretum/ target = \"blank\" class = \"mapLinks\">Learn more here<a> </p>"],
    [47.6626, -122.1061, "Marymoor Park"],
    [47.6548, -122.1777, "Bridle Trails State Park"],
    [47.6918, -122.4031, "Golden Gardens Park"],
    [47.758051, -122.243280, "St. Vincent de Paul’s"],
    [47.7330, -122.2565, "Saint Edward State Park"],
    [47.657211, -122.306869, "The Quad"],
    [47.6094, -122.3422, "Seattle Waterfront"],
    [47.6802, -122.3284, "Green Lake Park"],
    [47.3923, -121.4001, "Snoqualmie Summit"],
    [47.1871, -122.9285, "Hope Island State Park"],
    [48.4072, -122.6447, "Deception Pass"],
    [47.5876, -122.6957, "Jackson Park"],
    [46.8800, -121.7269, "Mount Rainier"],
    [47.6092, -122.1788, "Bellevue Botanical Garden"],
    [47.6684, -122.3509, "Woodland Park Zoo"]
];

//Create Map
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), 
    {
        center: { lat: 47.6628, lng: -122.3139 },
        zoom: 10
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

    var marker_info = new google.maps.InfoWindow ({
        content: description
    });

    marker.addListener('click',function() {
        marker_info.open(map, marker);
    });
};

//Create map.
initMap();

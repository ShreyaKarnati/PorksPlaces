// Google Map variable.
let map;

// Content for Markers.
const contents = [
    [47.6628, -122.3139, "<h1 class = \"mapLocations\"><a href = https://www.udistrictseattle.com/ target = \"blank\" class = \"mapLinks\">University District</a></h1> <p class = \"mapTexts\">A social hub for all UW Students. There are beautiful trails such as the Burke Gillman Trail. Eateries such as Mod Pizza, Cedars, and Aladdin.</p>"],
    [47.6364, -122.2958, "<h1 class = \"mapLocations\"><a href=https://botanicgardens.uw.edu/washington-park-arboretum/ target = \"blank\" class = \"mapLinks\">The Arboretum</a></h1> <p class = \"mapTexts\">A welcome oasis on the shores of Lake Washington. Take a walk through the Arboretum and discover this beautiful living collection. The Graham Visitors Center contains an information desk, and a gift shop managed by the Arboretum Foundation. The Japanese Garden, located at the south end of the Arboretum has an entrance fee and is managed by the City of Seattle.</p>"],
    [47.6626, -122.1061, "<h1 class = \"mapLocations\">Marymoor Park</h1> <p class = \"mapTexts\">"],
    [47.6548, -122.1777, "<h1 class = \"mapLocations\">Bridle Trails State Park</h1> <p class = \"mapTexts\">"],
    [47.6918, -122.4031, "<h1 class = \"mapLocations\">Golden Gardens Park</h1> <p class = \"mapTexts\">"],
    [47.758051, -122.243280, "<h1 class = \"mapLocations\">St. Vincent de Paul’s</h1> <p class = \"mapTexts\">"],
    [47.7330, -122.2565, "<h1 class = \"mapLocations\">Saint Edward State Park</h1> <p class = \"mapTexts\">"],
    [47.657211, -122.306869, "<h1 class = \"mapLocations\">The Quad</h1> <p class = \"mapTexts\">"],
    [47.6094, -122.3422, "<h1 class = \"mapLocations\">Seattle Waterfront</h1> <p class = \"mapTexts\">"],
    [47.6802, -122.3284, "<h1 class = \"mapLocations\">Green Lake Park</h1> <p class = \"mapTexts\">"],
    [47.3923, -121.4001, "<h1 class = \"mapLocations\">Snoqualmie Summit</h1> <p class = \"mapTexts\">"],
    [47.1871, -122.9285, "<h1 class = \"mapLocations\">Hope Island State Park</h1> <p class = \"mapTexts\">"],
    [48.4072, -122.6447, "<h1 class = \"mapLocations\">Deception Pass</h1> <p class = \"mapTexts\">"],
    [47.5876, -122.6957, "<h1 class = \"mapLocations\">Jackson Park</h1> <p class = \"mapTexts\">"],
    [46.8800, -121.7269, "<h1 class = \"mapLocations\">Mount Rainier</h1> <p class = \"mapTexts\">"],
    [47.6092, -122.1788, "<h1 class = \"mapLocations\">Bellevue Botanical Garden</h1> <p class = \"mapTexts\">"],
    [47.6684, -122.3509, "<h1 class = \"mapLocations\">Woodland Park Zoo</h1> <p class = \"mapTexts\">"]
];

// Create Map
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"),
        {
            center: { lat: 47.6628, lng: -122.3139 },
            zoom: 10
        });

    // Create Markers.
    for (let i = 0; i < contents.length; i++) {
        add_marker(contents[i][0], contents[i][1], contents[i][2]);
    }
};

// Function for adding markers, marker info, and event listeners.
function add_marker(latitude, longitude, description) {
    var marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map
    });

    var marker_info = new google.maps.InfoWindow({
        content: description
    });

    marker.addListener('click', function () {
        marker_info.open(map, marker);
    });
};

// Create map.
initMap();
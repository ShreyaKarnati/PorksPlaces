// Google Map variable.
let map;

// Content for Markers.
const contents = [
    [47.6628, -122.3139, "<h1 class = \"mapLocations\"><a href = https://www.udistrictseattle.com/ target = \"blank\" class = \"mapLinks\">University District</a></h1> <p class = \"mapTexts\">A social hub for all UW Students. There are beautiful trails such as the Burke Gillman Trail. Eateries such as Mod Pizza, Cedars, and Aladdin.</p>"],
    [47.6364, -122.2958, "<h1 class = \"mapLocations\"><a href= https://botanicgardens.uw.edu/washington-park-arboretum/ target = \"blank\" class = \"mapLinks\">The Arboretum</a></h1> <p class = \"mapTexts\">A welcome oasis on the shores of Lake Washington. Take a walk through the Arboretum and discover this beautiful living collection. The Graham Visitors Center contains an information desk, and a gift shop managed by the Arboretum Foundation. The Japanese Garden, located at the south end of the Arboretum has an entrance fee and is managed by the City of Seattle.</p>"],
    [47.6626, -122.1061, "<h1 class = \"mapLocations\"><a href = https://kingcounty.gov/services/parks-recreation/parks/parks-and-natural-lands/popular-parks/marymoor.aspx target = \"blank\" class = \"mapLinks\">Marymoor Park</a></h1> <p class = \"mapTexts\">Marymoor Park has plenty of incredible events such as Concerts, Movies, Off Leash Dog Walking, Day Circuses, Activities Rentals, and the Velodrome!</p>"],
    [47.6548, -122.1777, "<h1 class = \"mapLocations\"><a href = https://www.parks.wa.gov/481/Bridle-Trails target = \"blank\" class = \"mapLinks\">Bridle Trails State Park</a></h1> <p class = \"mapTexts\">Bridle Trails State Park is a 489-acre day-use park with 28 miles of trails that welcomes equestrians, hikers, and visitors. It does not offer bike trails or camping. The park is known as one of the top equestrian parks west of the Mississippi; it does not, however, offer horse rentals. </p>"],
    [47.6918, -122.4031, "<h1 class = \"mapLocations\"><a href = https://www.seattle.gov/parks/allparks/golden-gardens-park target = \"blank\" class = \"mapLinks\">Golden Gardens Park</a></h1> <p class = \"mapTexts\">This popular park offers extraordinary views of Puget Sound and the Olympic Mountains. This park features two wetlands, a short loop trail, and restored the northern beach. Golden Gardens offers strolls along a rugged coastline, hikes through forest trails, sunbathing on sandy beaches, fishing from a pier and a boat launch consisting of 300' of shoreline at south end of park. The park is also home to an off-leash area for dogs in the upper northern portion of the park.</p>"],
    [47.758051, -122.243280, "<h1 class = \"mapLocations\"><a href = https://svdpseattle.org/ target = \"blank\" class = \"mapLinks\">St. Vincent de Paul’s</a></h1> <p class = \"mapTexts\">Cheaper than goodwill. You can buy electronics for cheap. They strive to assist and advocate for individuals and families to meet basic needs and achieve stability and self-sufficiency.</p>"],
    [47.7330, -122.2565, "<h1 class = \"mapLocations\"><a href = https://www.parks.wa.gov/577/Saint-Edward target = \"blank\" class = \"mapLinks\">Saint Edward State Park</a></h1> <p class = \"mapTexts\">Saint Edward State Park is a 326-acre day-use park with 3,000 feet of freshwater shoreline on Lake Washington. Picnic tables are available first come, first served, and the Grotto and several picnic areas are available for rental. For events at the seminary please contact The Lodge at Saint Edward.</p>"],
    [47.657211, -122.306869, "<h1 class = \"mapLocations\"><a href = https://www.washington.edu/maps/#!/lndmk-1 target = \"blank\" class = \"mapLinks\">The Quad</a></h1> <p class = \"mapTexts\">Featuring gothic architecture, brick pathways and green lawns, the Quad is surrounded by six buildings that house the arts, humanities, and social sciences. It is the primary gathering place on campus, especially when the Yoshino Cherry trees are in bloom each spring.</p>"],
    [47.6094, -122.3422, "<h1 class = \"mapLocations\"><a href = https://waterfrontseattle.org/ target = \"blank\" class = \"mapLinks\">Seattle Waterfront</a></h1> <p class = \"mapTexts\">The City of Seattle is rebuilding Seattle’s central waterfront. Now that the Alaskan Way Viaduct removal is complete, the City is constructing a park promenade along the water, building a new surface street along Alaskan Way, rebuilding Pier 58 and Pier 62, building an elevated connection from Pike Place Market to the waterfront, and improving east-west connections between downtown and Elliott Bay.</p>"],
    [47.6802, -122.3284, "<h1 class = \"mapLocations\"><a href = https://www.seattle.gov/parks/allparks/green-lake-park target = \"blank\" class = \"mapLinks\">Green Lake Park</a></h1> <p class = \"mapTexts\">Green Lake is one of Seattle's most beloved parks. Its expanse of water and green space in the center of a dense urban neighborhood draws thousands of people daily from all over the city. The park serves as a natural preserve for hundreds of species of trees and plants, as well as numerous birds and waterfowl. The 2.8-mile path around the lake provides a perfect recreational spot for runners and walkers. Many others use the athletic fields or visit the park for boating, picnics and swimming.</p>"],
    [47.3923, -121.4001, "<h1 class = \"mapLocations\"><a href = https://summitatsnoqualmie.com/ target = \"blank\" class = \"mapLinks\">Snoqualmie Summit</a></h1> <p class = \"mapTexts\">Snoqualmie Summit has a ski resort for all skill levels, Snow Tubing, Sno-Go Bikes, and Snowshoeing in the Winter. In summer, they have Mountain Biking, Scenic Chair Riding, and Hiking.</p>"],
    [47.1871, -122.9285, "<h1 class = \"mapLocations\"><a href = https://www.parks.wa.gov/517/Hope-Island---Mason target = \"blank\" class = \"mapLinks\">Hope Island State Park</a></h1> <p class = \"mapTexts\">Hope island is a beautiful park which can only be reached by boat. it has beach walks and hiking trails where you can enjoy the beautiful natural scenery and a orchards of fruit and nut Trees.</p>"],
    [48.4072, -122.6447, "<h1 class = \"mapLocations\"><a href = https://www.parks.wa.gov/497/Deception-Pass target = \"blank\" class = \"mapLinks\">Deception Pass</a></h1> <p class = \"mapTexts\">Deception Pass is Washington's most-visited state park for a reason. Mysterious coves, rugged cliffs, jaw-dropping sunsets, and a stomach-dropping high bridge make this park a go-to for locals and international travelers alike.</p>"],
    [47.5876, -122.6957, "<h1 class = \"mapLocations\"><a href = http://premiergc.com/-jackson-park-golf-course target = \"blank\" class = \"mapLinks\">Jackson Park</a></h1> <p class = \"mapTexts\">Jackson Park Golf Course is known as the driest public course in the City of Seattle just minutes outside of downtown. The course is maintained by the City of Seattle and managed by Premier Golf Centers LLC. The course consists of an 18 hole Championship and a 9 hole Executive. Jackson Park Golf Course is also known for holding tournaments and for being the home to some wonderful golf clubs.</p>"],
    [46.8800, -121.7269, "<h1 class = \"mapLocations\"><a href = https://www.nps.gov/mora/index.htm target = \"blank\" class = \"mapLinks\">Mount Rainier</a></h1> <p class = \"mapTexts\">Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning five major rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier’s lower slopes. Wildlife abounds in the park’s ecosystems.</p>"],
    [47.6092, -122.1788, "<h1 class = \"mapLocations\"><a href = https://bellevuebotanical.org/admission-hours-directions-parking/ target = \"blank\" class = \"mapLinks\">Bellevue Botanical Garden</a></h1> <p class = \"mapTexts\">Since the land was donated in 1981 to the City of Bellevue, Bellevue Arboretum has been a public park with free admission to trails and gardens. There are also facilities which can be reserved for weddings and parties.</p>"],
    [47.6684, -122.3509, "<h1 class = \"mapLocations\"><a href = https://www.seattle.gov/parks/allparks/woodland-park target = \"blank\" class = \"mapLinks\">Woodland Park Zoo</a></h1> <p class = \"mapTexts\">Woodland Park is an exciting, multipurpose park and recreation space just southwest of Green Lake and north of the Fremont district. There are Trails, gardens, sports fields, and even a zoo.</p>"],
    [47.6963, -122.2741, "<h1 class = \"mapLocations\"><a href = https://www.seattle.gov/parks/allparks/matthews-beach-park = \"blank\" class = \"mapLinks\">Matthews Beach Park</a></h1> <p class = \"mapTexts\">Matthews Beach is Seattle's largest freshwater bathing beach. The park is an ideal stopping place for bicyclers on the Burke-Gilman Trail. In the 1940's, the area south of the main beach was the site of Pan American World Airways' offices, and the dock for Pan American's Clipper Ships- the world's first amphibious commercial air transports over the ocean.</p>"]
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
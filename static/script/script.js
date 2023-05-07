console.log("script.js loaded");
let script;

const contents = [
    ["University District", "A social hub for all UW Students. There are beautiful trails such as the Burke Gillman Trail. Eateries such as Mod Pizza, Cedars, and Aladdin."],
    ["The Arboretum", "A welcome oasis on the shores of Lake Washington. Take a walk through the Arboretum and discover this beautiful living collection. The Graham Visitors Center contains an information desk, and a gift shop managed by the Arboretum Foundation. The Japanese Garden, located at the south end of the Arboretum has an entrance fee and is managed by the City of Seattle."],
    ["Marymoor Park", "Marymoor Park has plenty of incredible events such as Concerts, Movies, Off Leash Dog Walking, Day Circuses, Activities Rentals, and the Velodrome!"],
    ["Bridle Trails State Park", "Bridle Trails State Park is a 489-acre day-use park with 28 miles of trails that welcomes equestrians, hikers, and visitors. It does not offer bike trails or camping. The park is known as one of the top equestrian parks west of the Mississippi; it does not, however, offer horse rentals."],
    ["Golden Gardens Park", "This popular park offers extraordinary views of Puget Sound and the Olympic Mountains. This park features two wetlands, a short loop trail, and restored the northern beach. Golden Gardens offers strolls along a rugged coastline, hikes through forest trails, sunbathing on sandy beaches, fishing from a pier and a boat launch consisting of 300' of shoreline at south end of park. The park is also home to an off-leash area for dogs in the upper northern portion of the park."],
    ["St. Vincent de Paul’s", "Cheaper than goodwill. You can buy electronics for cheap. They strive to assist and advocate for individuals and families to meet basic needs and achieve stability and self-sufficiency."],
    ["Saint Edward State Park", "Saint Edward State Park is a 326-acre day-use park with 3,000 feet of freshwater shoreline on Lake Washington. Picnic tables are available first come, first served, and the Grotto and several picnic areas are available for rental. For events at the seminary please contact The Lodge at Saint Edward."],
    ["The Quad", "Featuring gothic architecture, brick pathways and green lawns, the Quad is surrounded by six buildings that house the arts, humanities, and social sciences. It is the primary gathering place on campus, especially when the Yoshino Cherry trees are in bloom each spring.</p>"],
    ["Seattle Waterfront", "The City of Seattle is rebuilding Seattle’s central waterfront. Now that the Alaskan Way Viaduct removal is complete, the City is constructing a park promenade along the water, building a new surface street along Alaskan Way, rebuilding Pier 58 and Pier 62, building an elevated connection from Pike Place Market to the waterfront, and improving east-west connections between downtown and Elliott Bay."],
    ["Green Lake Park", "Green Lake is one of Seattle's most beloved parks. Its expanse of water and green space in the center of a dense urban neighborhood draws thousands of people daily from all over the city. The park serves as a natural preserve for hundreds of species of trees and plants, as well as numerous birds and waterfowl. The 2.8-mile path around the lake provides a perfect recreational spot for runners and walkers. Many others use the athletic fields or visit the park for boating, picnics and swimming."],
    ["Snoqualmie Summit", "Snoqualmie Summit has a ski resort for all skill levels, Snow Tubing, Sno-Go Bikes, and Snowshoeing in the Winter. In summer, they have Mountain Biking, Scenic Chair Riding, and Hiking."],
    ["Hope Island State Park", "Hope island is a beautiful park which can only be reached by boat. it has beach walks and hiking trails where you can enjoy the beautiful natural scenery and a orchards of fruit and nut Trees."],
    ["Deception Pass", "Deception Pass is Washington's most-visited state park for a reason. Mysterious coves, rugged cliffs, jaw-dropping sunsets, and a stomach-dropping high bridge make this park a go-to for locals and international travelers alike."],
    ["Jackson Park", "Jackson Park Golf Course is known as the driest public course in the City of Seattle just minutes outside of downtown. The course is maintained by the City of Seattle and managed by Premier Golf Centers LLC. The course consists of an 18 hole Championship and a 9 hole Executive. Jackson Park Golf Course is also known for holding tournaments and for being the home to some wonderful golf clubs."],
    ["Mount Rainier", "Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning five major rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier’s lower slopes. Wildlife abounds in the park’s ecosystems."],
    ["Bellevue Botanical Garden", "Since the land was donated in 1981 to the City of Bellevue, Bellevue Arboretum has been a public park with free admission to trails and gardens. There are also facilities which can be reserved for weddings and parties."],
    ["Woodland Park Zoo", "Woodland Park is an exciting, multipurpose park and recreation space just southwest of Green Lake and north of the Fremont district. There are Trails, gardens, sports fields, and even a zoo."]
];

function writeData() {
    var date = new Date();
    date = date.toDateString();
    var seed = 0;
    for(let i = 0; i < date.length; i++){
      var charCode = date.charCodeAt(i);
      if(charCode > 0 && charCode > 0)
      {
      seed = seed + date.charCodeAt(i) * Math.pow(10, i);
      }
      else {
        seed = charCodeAt(0);
      }
    }
    var modulus = 10000;
    var multiplier = 727;
    var increment = 4373;
    seed = (seed * multiplier + increment) % modulus;
    var num = Math.floor(seed / 10000*18);
    document.getElementById("LocationName").innerHTML = contents[num][0];
    document.getElementById("Description").innerHTML = contents[num][1];
}

writeData();

// export default writeData
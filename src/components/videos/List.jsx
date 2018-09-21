// ~~~~~~~~~ All Videos ~~~~~~~~~ //

const videos = [
  {
    title: "131 W 82nd",
    link: "https://videos.virtualapt.com/131w82/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/131w82.png"
  },
  {
    title: "1326 Ocean Avenue",
    link: "https://videos.virtualapt.com/1326-exr/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/1326OceanAve.png"
  },
  {
    title: "54 Warren Street",
    link: "https://videos.virtualapt.com/54warren/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/54warren.png"
  },
  {
    title: "54 Warren Street - V2",
    link: "https://videos.virtualapt.com/54warren_v2/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/54warren_v2.png"
  },
  {
    title: "Advertising Week - TECHX",
    link: "https://videos.virtualapt.com/adweek/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/adweek.png"
  },
  {
    title: "Alta by Ollie - Unit 703",
    link: "https://ollie.virtualapt.com/alta-703/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/alta-703.png"
  },
  {
    title: "Alta by Ollie - Unit 712",
    link: "https://ollie.virtualapt.com/alta-712/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/alta-712.png"
  },
  {
    title: "Alta by Ollie - Amenities",
    link: "https://ollie.virtualapt.com/alta-amenities/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/alta-amenities.png"
  },
  {
    title: "Alta by Ollie - Splash Page",
    link: "https://ollie.virtualapt.com/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/alta-splash.png"
  },
  {
    title: "Alvarium",
    link: "https://videos.virtualapt.com/alvarium/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/alvarium.png"
  },
  {
    title: "Alvarium Medium",
    link: "https://videos.virtualapt.com/alvarium_medium/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/alvarium-medium.png"
  },
  {
    title: "Alvarium Standard",
    link: "https://videos.virtualapt.com/alvarium_standard/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/alvarium-standard.png"
  },
  {
    title: "Bliss Bowl",
    link: "https://videos.virtualapt.com/blissbowl/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/bliss-bowl.png"
  },
  {
    title: "Cadillac",
    link: "https://videos.virtualapt.com/cadillac/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/cadillac.png"
  },
  {
    title: "Century 21 - 250 Mercer Street, C216",
    link: "https://videos.virtualapt.com/century21/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/250-mercer.png"
  },
  {
    title: "CBRE - Park 80 West DEMO",
    link: "https://videos.virtualapt.com/CREdemo/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/CBRE-park80.png"
  },
  {
    title: "CBRE - Park 80 West",
    link: "https://videos.virtualapt.com/creoffice/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/CBRE-park80.png"
  },
  {
    title: "Douglas Elliman - Visionaire, Apt 17G",
    link: "https://videos.virtualapt.com/elliman/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/elliman.png"
  },
  {
    title: "Even Hotels",
    link: "https://videos.virtualapt.com/evenhotels/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/evenhotels.png"
  },
  {
    title: "EXR - 1004 Gates Avenue",
    link: "https://videos.virtualapt.com/exr/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/exr.png"
  },
  {
    title: "Eye Hunee",
    link: "https://videos.virtualapt.com/eyehunee/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/eyehunee.png"
  },
  {
    title: "Global Holdings",
    link: "https://videos.virtualapt.com/globalholdings/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/global-holdings.png"
  },
  {
    title: "Global Holdings - Nomad Tower",
    link: "https://videos.virtualapt.com/globalholdings2/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/nomad-tower.png"
  },
  {
    title: "Lucy",
    link: "https://videos.virtualapt.com/lucy/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/lucy.png"
  },
  {
    title: "",
    link: "",
    thumbnail: ""
  },
  {
    title: "Michele Varian",
    link: "https://videos.virtualapt.com/mv/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/mv.png"
  },
  {
    title: "Nest Seekers - Serhant Team",
    link: "https://videos.virtualapt.com/nestseekers/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/nestseekers.png"
  },
  {
    title: "Coldwell Banker - 59 Eagle Rim Road",
    link: "https://videos.virtualapt.com/njlux/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/njlux.png"
  },
  {
    title: "PGA",
    link: "https://videos.virtualapt.com/pga/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/pga.png"
  },
  {
    title: "330 W 34th Street",
    link: "https://videos.virtualapt.com/privatecp/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/330W34th.png"
  },
  {
    title: "Chicago Red Stars",
    link: "https://videos.virtualapt.com/redstars/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/redstars.png"
  },
  {
    title: "Chicago Red Stars V2",
    link: "https://videos.virtualapt.com/redstars_v2/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/redstars.png"
  },
  {
    title: "Stonehenge - Ritz Plaza Amenities",
    link: "https://videos.virtualapt.com/rpa/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/rpa.png"
  },
  {
    title: "Roomrs - 15 Jackson St, Apt. 7E",
    link: "https://videos.virtualapt.com/roomrs/15-Jackson-St/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/15-jackson.png"
  },
  {
    title: "Roomrs - 171 E 105th St, #4",
    link: "https://videos.virtualapt.com/roomrs/171-E-105th-St/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/171-e-105th.png"
  },
  {
    title: "Roomrs - 312 W 114th St, Apt. 22",
    link: "https://videos.virtualapt.com/roomrs/312-W-114th-St/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/312-w-114th.png"
  },
  {
    title: "Roomrs - 2546 7th Ave, #4",
    link: "https://videos.virtualapt.com/roomrs/2546-7th-Ave/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/2546-7th-ave.png"
  },
  {
    title: "Silver Suites - 7 World Trade Center",
    link: "https://videos.virtualapt.com/silversuites/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/silver-suites.png"
  },
  {
    title: "Stribling - Greenwich Village",
    link: "https://videos.virtualapt.com/stribling/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/stribling.png"
  },
  {
    title: "Stribling - Greenwich Village - Stop And Go",
    link: "https://videos.virtualapt.com/stribling-stopngo/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/stribling2.png"
  },
  {
    title: "twelveNYC",
    link: "https://videos.virtualapt.com/twelvenyc/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/twelvenyc.png"
  },
  {
    title: "Urbanum",
    link: "https://videos.virtualapt.com/urbanum/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/urbanum.png"
  },
  {
    title: "Urbanum - Large Studio",
    link: "https://videos.virtualapt.com/urbanum_large/",
    thumbnail: "https://videos.virtualapt.com/thumbnails/urbanum-large.png"
  },
  {
    title: "Urbanum - Medium Studio",
    link: "http://videos.virtualapt.com/urbanum_medium",
    thumbnail: "https://videos.virtualapt.com/thumbnails/urbanum-md.png"
  },
  {
    title: "Urbanum - Standard Studio",
    link: "http://videos.virtualapt.com/urbanum_standard",
    thumbnail: "https://videos.virtualapt.com/thumbnails/urbanum.png"
  },
  {
    title: "Urbanum - Extra Large Studio",
    link: "http://videos.virtualapt.com/urbanum_xxl",
    thumbnail: "https://videos.virtualapt.com/thumbnails/urbanum-xl.png"
  },
  {
    title: "Venture University",
    link: "https://videos.virtualapt.com/venture-university",
    thumbnail: "https://videos.virtualapt.com/thumbnails/venture.png"
  },
  {
    title: "Venture University - No Audio",
    link: "https://videos.virtualapt.com/venture-university-mute",
    thumbnail: "https://videos.virtualapt.com/thumbnails/venture.png"
  },
  {
    title: "Warburg",
    link: "https://videos.virtualapt.com/warburg",
    thumbnail: "https://videos.virtualapt.com/thumbnails/warburg.png"
  }
]

// ~~~~~~~~~ DO NOT CHANGE ANYTHING BELOW THIS LINE ~~~~~~~~~ //

class List {

  videos() {
    return videos
  }

}

export default new List()
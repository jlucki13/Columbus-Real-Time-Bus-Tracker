  mapboxgl.accessToken = 'pk.eyJ1Ijoic29mdGV4cGVyaW1lbnQiLCJhIjoiY2tjMngyZm9rMDFvajJzczJ3aWo0bnh6aiJ9.Bc_qK9Xf8SFBXkFM_x2gpg';

  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-83.009167, 40.006103],
      zoom: 12
  });
 
var marker = new mapboxgl.Marker()
    .setLngLat([-83.009167, 40.006103])
    .addTo(map);

const busStops = [
    [-83.008520, 40.002464], 
    [-83.007064, 39.994635],
    [-83.005871, 39.988850],
    [-83.004140, 39.980188],
    [-83.002961, 39.974682],
    [-83.001948, 39.969618],
    [-83.000511, 39.962248],
];

let counter = 0;
function move(){
  setTimeout(()=>{
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  },1000); 
}


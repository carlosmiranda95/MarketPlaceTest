// import React, { Component } from "react";
// import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import { State } from "./State";
// import Terreno from "../../assets/img/Plano_Terreno.jpg";

// export default class SimpleExample extends Component<{}, State> {
//   state = {
//     lat: 51.505,
//     lng: -0.09,
//     zoom: 5
//   };

//   render() {
//     const position = [this.state.lat, this.state.lng];
//     return (
//       <Map center={position} zoom={this.state.zoom}>
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url={Terreno}
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </Map>
//     );
//   }
// }

import React, { useEffect } from "react";
import L from "leaflet";
import Terreno from "../../assets/img/Plano_Terreno.jpg";

var list_terrain = [];
var img = new Image();
var file_url = '@Url.Content("~/img/Plano_Terreno.jpg")';
var map = "";
var markers;

function Map() {
  useEffect(() => {
    // L.map("map", {
    //   center: [49.8419, 24.0315],
    //   zoom: 16,
    //   layers: [L.tileLayer(Terreno)]
    // });

    img.onload = function() {
      var height = img.height;
      var width = img.width;

      map = L.map("map", {
        crs: L.CRS.Simple,
        minZoom: -2,
        maxZoom: 1,
        zoomControl: false
      });

      var bounds = [[0, 0], [height, width]];
      var image = L.imageOverlay(Terreno, bounds).addTo(map);

      map.fitBounds(bounds);
    };
    img.src = Terreno;
  }, []);

  return <div id="map"></div>;
}

export default Map;

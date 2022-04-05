
import "./src/styles.css";
import L from "leaflet";
import "leaflet-arrowheads";
import icon from "./src/constants"

var mapOptions = {
  center: [14.930520880263833, 102.05646514892578],
  zoom: 10,
  zoomDelta: 0.5,
  zoomSnap: 0,
  wheelPxPerZoomLevel: 100
}

const map = L.map("mapID", mapOptions);

const myLayer = new L.TileLayer(
  "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }
);

myLayer.addTo(map);

//  ------- GROUP 1: Arrowhead Color, Fill, and Yawn Options --------------//


var someFeatures = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [102.02110290527344, 14.9544042434818],
          [102.01698303222656, 14.991550855598234],
          [102.08324432373047, 15.017085411860364],
          [102.13920593261719, 14.990887579740775],
          [102.15431213378906, 14.916587692063906],
          [102.10281372070312, 14.875114532038921],
          [102.05852508544922, 14.850890516491445],
          [101.98436737060547, 14.868478085802654]
        ]
      }
    }
  ]
};

var toLatLngs = gjson => {
  let data = [];
  gjson.features.forEach(d => {
    let _d = d.geometry.coordinates;
    _d.forEach(coordi => {
      data.push([coordi[1], coordi[0]]);
    });
  });

  return data;
};

// Options for the marker
var markerOptions = {
    title: "My TEST",
    clickable: true,
    //draggable: true,
    icon: icon
 }

 // [102.02110290527344, 14.9544042434818]
//const someMarker = L.marker(map.getCenter(),markerOptions).bindPopup(`###`);


let testMarkerPoint2 = {
    lat: 14.850890516491445,
    lng: 102.05852508544922
}



const someMarker = L.marker( testMarkerPoint2 , markerOptions).bindPopup(`###`);
someMarker.addTo(map);

var simpleVector0 = L.polyline(toLatLngs(someFeatures), { color: "blue" })
  .arrowheads()
  .bindPopup(
    `<code>var simpleVector0: L.polyline(coords).arrowheads()</code>`,
    { maxWidth: 2000 }
  );


window.map = map

L.control
  .layers(null, {
    "Vector 1": simpleVector0.addTo(map)
  })
  .addTo(map);

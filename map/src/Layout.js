
import React, { useEffect } from "react"
import "./styles.css"
import L from "leaflet"
import "leaflet-arrowheads"
import icon from "./constants"
import {antPath} from 'leaflet-ant-path'


var mapOptions = {
	center: [15.2999988, -61.3833318],
	zoom: 11,
	zoomDelta: 0.5,
	zoomSnap: 0,
	wheelPxPerZoomLevel: 100
}

let testCoords = [
	[15.583331, -61.4666648], //portsmouth
	[15.30083213, -61.386331788], //roseau
	[15.53743, -61.282] // marigot
]




let failureChainCoords = [
	[15.53743, -61.282], //marigot
	[15.32768, -61.24753], // La Plaine
	[15.36667, -61.35] //Pont Cassé
]


// Options for the marker
var markerOptions = {
	clickable: true,
	icon: icon
}

let arrowOptions = {
	yawn: 50, 				// width of the opening of the arrowhead
	size: '4%', 			// size of the arrowhead.
	frequency: 2,			// How many arrowheads are rendered on a polyline.
	fill: 2,
	offsets: { end: "15px" }
}

let linkCoords = [
	[15.583331, -61.4666648], //portsmouth
	[15.30083213, -61.386331788], //roseau
	[15.53743, -61.282] // marigot
]


//polyline
let documents = [
	{
		color: '#dc3545',
		data: [
			{id: 'Asset/Portsmouth%20Hospital', lat: 15.58333, name: 'Portsmouth', lng: -61.46667, refresh: 1646310938426},
			{id: 'Asset/Saint%20Joseph', lng: -61.43333, name: 'Saint Joseph', critical: 'true', lat: 15.4}
		]
	},
	{
		color: '#198754',
		data: [
			{id: 'Asset/Portsmouth%20Hospital', lat: 15.58333, name: 'Portsmouth', lng: -61.46667, refresh: 1646310938426},
			{id: 'Asset/Salisbury', lat: 15.43689, name: 'Salisbury', critical: 'false', lng: -61.43637}
		]
	}
]


export const LeafletMap = () => {

	useEffect(() => {
		map()
	}, [])

	const map = () => {

		const map = L.map("map-leaflet-id", mapOptions);

		const tileLayer = new L.TileLayer(
			"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			{
				attribution:
				'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
			}
		)

		tileLayer.addTo(map)
		//console.log("toLatLngs(someFeatures)",toLatLngs(someFeatures))

		// add markers to the map
		let polyLineCoordinates = testCoords//toLatLngs(someFeatures)

		polyLineCoordinates.map(pl => {
			let coord = { lat: pl[0], lng: pl[1] }
			let someMarker = L.marker(coord , markerOptions).bindPopup(`### lat: ${coord.lat} lng: ${coord.lng}`)
			someMarker.addTo(map)
		})

		failureChainCoords.map(pl => {
			let coord = { lat: pl[0], lng: pl[1] }
			let someMarker = L.marker(coord , markerOptions).bindPopup(`### lat: ${coord.lat} lng: ${coord.lng}`)
			someMarker.addTo(map)
		})

		// add polylines to map
		//, dashArray: '20, 20', dashOffset: '0' - for dashed stuff

		let linkCoordsPortsMouthRoseau_correct = [
			[15.583331, -61.4666648],  //portsmouth
			[15.30083213, -61.386331788]  //roseau
		]

		let linkCoordsPortsMouthRoseau = [
			[[15.583331, -61.4666648],  //portsmouth
			[15.30083213, -61.386331788]],			  //roseau
			[[15.583331, -61.4666648],  //portsmouth
			[15.53743, -61.282]] //marigot]
		]

		let linkCoordsPortsMouthMarigot = [
			[15.583331, -61.4666648],  //portsmouth
			[15.53743, -61.282]  //marigot
		]


		var simpleVector0 = L.polyline(linkCoordsPortsMouthRoseau, { color: "red"})
			.arrowheads(arrowOptions)
			.bindPopup(
				`<code>var simpleVector0: L.polyline(coords).arrowheads()</code>`,
				{ maxWidth: 2000 }
			)
			var simpleVectorPM = L.polyline(linkCoordsPortsMouthMarigot, { color: "red"})
			.arrowheads(arrowOptions)
			.bindPopup(
				`<code>var simpleVector0: L.polyline(coords).arrowheads()</code>`,
				{ maxWidth: 2000 }
			)

		var simpleVectorFailureChains = L.polyline(failureChainCoords, {
				color: "maroon",
				dashArray: '10, 10'
			})
			.arrowheads(arrowOptions)
			.bindPopup(
				`<code>var simpleVector0: L.polyline(coords).arrowheads()</code>`,
				{ maxWidth: 2000 }
			)





		L.control
			.layers(null, {
				"Critical": simpleVector0.addTo(map),
				//"Vecoor 3": simpleVectorPM.addTo(map),
				"Non Critical": simpleVectorFailureChains.addTo(map),
			})
			.addTo(map)

			let options = {
				"delay": 800,
				"dashArray": [
				  10,
				  20
				],
				"weight": 5,
				"color": "#842029",
				"pulseColor": "#FFFFFF",
				"paused": false,
				"reverse": false,
				"hardwareAccelerated": true
			  }

			var  antPolyline = L.polyline.antPath(failureChainCoords, options);

    		antPolyline.addTo(map);

	}



	return <div id="map-leaflet-id" style={{ height: "100vh" }}></div>
}


export function App() {
    return <LeafletMap />
}





/** function to take geo json and transform to latlngs
 * var toLatLngs = gjson => {
			let data = []
			gjson.features.forEach(d => {
				let _d = d.geometry.coordinates;
				_d.forEach(coordi => {
				data.push([coordi[1], coordi[0]])
				})
			})

			return data
		}
 */

	/**		//  ------- GROUP 1: Arrowhead Color, Fill, and Yawn Options --------------//
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
		}

		var toLatLngs = gjson => {
			let data = []
			gjson.features.forEach(d => {
				let _d = d.geometry.coordinates;
				_d.forEach(coordi => {
					data.push([coordi[1], coordi[0]])
				})
			})

			return data
		} */
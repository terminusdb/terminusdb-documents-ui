
import React, { useEffect } from "react"
import "./styles.css"
import L from "leaflet"
import "leaflet-arrowheads"
import icon from "./constants"



export const LeafletMap = () => {

	useEffect(() => {
		map()
	}, [])

	const map = () => {

		var mapOptions = {
			//center: [14.930520880263833, 102.05646514892578],
			center: [15.2999988, -61.3833318],
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
		)

		myLayer.addTo(map)

		let testCoords = [
			[15.30083213, -61.386331788], //roseau
			[15.583331, -61.4666648], //portsmouth
			[15.53743, -61.282] // marigot
		]


		let failureChainCoords = [
			[15.583331, -61.4666648], //portsmouth
			[15.32768, -61.24753], // La Plaine
			[15.36667, -61.26667] //Rosalie
		]


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
		}

		// Options for the marker
		var markerOptions = {
			clickable: true,
			icon: icon
		}

		//console.log("toLatLngs(someFeatures)",toLatLngs(someFeatures))

		// add markers to the map
		let polyLineCoordinates = testCoords//toLatLngs(someFeatures)
		polyLineCoordinates.map(pl => {
			let coord = {
				lat: pl[0],
				lng: pl[1]
			}
			let someMarker = L.marker(coord , markerOptions).bindPopup(`### lat: ${coord.lat} lng: ${coord.lng}`)
			someMarker.addTo(map)
		})

		failureChainCoords.map(pl => {
			let coord = {
				lat: pl[0],
				lng: pl[1]
			}
			let someMarker = L.marker(coord , markerOptions).bindPopup(`### lat: ${coord.lat} lng: ${coord.lng}`)
			someMarker.addTo(map)
		})


		let arrowOptions = {
			yawn: 50, 				// width of the opening of the arrowhead
			size: '4%', 			// size of the arrowhead.
			frequency: 2,			// How many arrowheads are rendered on a polyline.
			fill: 2,
    		offsets: { end: "15px" }
		}

		// add polylines to map
		//var simpleVector0 = L.polyline(toLatLngs(someFeatures), { color: "blue" })
		//, dashArray: '20, 20', dashOffset: '0' - for dashed stuff
		var simpleVector0 = L.polyline(testCoords, { color: "blue"})
			.arrowheads(arrowOptions)
			.bindPopup(
				`<code>var simpleVector0: L.polyline(coords).arrowheads()</code>`,
				{ maxWidth: 2000 }
			)

		var simpleVector1 = L.polyline(failureChainCoords, { color: "red", dashArray: '20, 20', dashOffset: '0'})
			.arrowheads(arrowOptions)
			.bindPopup(
				`<code>var simpleVector0: L.polyline(coords).arrowheads()</code>`,
				{ maxWidth: 2000 }
			)


		window.map = map

		L.control
			.layers(null, {
				"Vector 1": simpleVector0.addTo(map),
				"Vector 2": simpleVector1.addTo(map),
			})
			.addTo(map)

	}

	return <div id="mapID" style={{ height: "100vh" }}></div>
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
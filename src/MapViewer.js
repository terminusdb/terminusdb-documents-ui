
import React, {useState, useEffect, createRef} from "react"
import {MapContainer, TileLayer,  MapControl, withLeaflet, GeoJSON, Polyline} from 'react-leaflet'
import {LATITUDE, LONGITUDE, POINTS, POLYGON, LAT, LNG, REFRESH} from "./constants"
import {renderPositions} from "./Markers"
import Legend from "./MapLegend"
import icon from "./constants"
import "leaflet-arrowheads"
import L from "leaflet"

/*
**  documents            - Array of documents with latitudes and longitudes
**  zoom                 - zoom im map
**  scrollWheelZoom      - boolean to allow on scroll
*/

var mapOptions = {
	center: [15.2999988, -61.3833318],
	zoom: 11,
	zoomDelta: 0.5,
	zoomSnap: 0,
	wheelPxPerZoomLevel: 100
}
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

const LeafletMap = ({documents, onMarkerClick}) => {

	useEffect(() => {
		map()
	}, [])

	const map = () => {
		const map = L.map("map-leaflet-id", mapOptions)
		const tileLayer = new  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })

		/*const tileLayer = new L.TileLayer(
			"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			{
				attribution:
				'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
			}
		)*/

		tileLayer.addTo(map)

		//{id: 'Asset/Portsmouth%20Hospital', lat: 15.58333, name: 'Portsmouth', lng: -61.46667, refresh: 1646317993667}
		// Draw Markers
		documents.map(docs => {
			let coord = { id:docs.id, name: docs.name, lat: docs.lat, lng: docs.lng } // set lat and long
			let marker = L.marker(coord , markerOptions).bindPopup(`### name: ${coord.name} lat: ${coord.lat} lng: ${coord.lng}`).on('click', function(e) {
				//let cData = coord.id
				let cData = coord
				cData[REFRESH] = Date.now()
				if(onMarkerClick) onMarkerClick(cData)
			})
			marker.addTo(map)
		})

		window.map = map
	}

	return <div id="map-leaflet-id" style={{ height: "100vh" }}></div>
}

const PolyLineLeafletMap = ({polyLine, onMarkerClick}) => {

	useEffect(() => {
		map()
	}, [])

	//console.log("polyLine in LeafletMap", polyLine)

	const map = () => {
		const map = L.map("map-leaflet-id-polylines", mapOptions)
		let vectorJson = []

		const tileLayer = new L.TileLayer(
			"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			{
				attribution:
				'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
			}
		)

		tileLayer.addTo(map)

		if(polyLine && Array.isArray(polyLine)) {

			// Draw markers
			polyLine.map(pl => {
				if(!pl.hasOwnProperty("data")) return
				pl.data.map(arr => {
					let linkArray = arr
					linkArray.map(la => {
						// get marker lat lng
						let coord = {lat: la.lat, lng: la.lng}
						let marker = L.marker(coord , markerOptions)
						.bindPopup(`### name: ${coord.name} lat: ${coord.lat} lng: ${coord.lng}`)
						.on('click', function(e) {
							//let cData = coord.id
							let cData = coord
							cData[REFRESH] = Date.now()
							if(onMarkerClick) onMarkerClick(cData)
						})
						marker.addTo(map)
					})
				})
			})

			// extracting only lat lng
			polyLine.map(pl => { // working
				let vectorCoords = []
				pl.data.map(arr => {
					let linkArray = arr
					linkArray.map(la => {
						vectorCoords.push([la.lat, la.lng])
					})
				})
				vectorJson.push({color: pl.color, title: pl.title, data: vectorCoords})
			})
		}

		window.map = map

		// get vector and add arrows
		function getVector (vector) { // working
			let layerJson = {}
			vector.map(vc => {
				var things = L.polyline(vc.data , { color: vc.color })
					.arrowheads(arrowOptions)
					.bindPopup(
						`<code>var simpleVector0: L.polyline(coords).arrowheads()</code>`,
						{ maxWidth: 2000 }
					)

				layerJson[vc.title] = things.addTo(map)
			})
			return layerJson
		}


		L.control
			.layers(null, getVector(vectorJson),  {position: 'bottomleft'})
			.addTo(map)

	}



	return <div id="map-leaflet-id-polylines" style={{ height: "100vh" }}></div>
}


export const MapViewer = ({documents, zoom=13, scrollWheelZoom, display, onMarkerClick, polyLine, children}) => {
	const [mapRef, setMapRef] = useState(createRef())
	const [map, setMap] = useState(null)

	let type=POINTS
	if(display) type=display

    if(!Array.isArray(documents)) {
        return <React.Fragment>{"Please, Include valid documents to display on map"}</React.Fragment>
    }
    if(!documents.length) {
        return <React.Fragment>{"Cannot display empty documents on map"}</React.Fragment>
    }

	return <React.Fragment>
		{
			documents && !polyLine &&
				<LeafletMap documents={documents} onMarkerClick = {onMarkerClick}/>
		}
		{
			polyLine && <PolyLineLeafletMap polyLine={polyLine} onMarkerClick = {onMarkerClick}/>
		}
	</React.Fragment>



}


/*
return <MapContainer
		ref={mapRef}
		scrollWheelZoom = { scrollWheelZoom }
		fullscreenControl = {true}
		center= { [ documents[0][LAT] , documents[0][LNG] ] }
		zoom={zoom}
		whenCreated={setMap}
	>
		<TileLayer
			attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
		/>

		{/*<GeoJSON data={dump}/>*//*}
		{/*<Legend map={map} children={children} />*//*}
		{renderPositions(documents, onMarkerClick, polyLine)}

	</MapContainer>
	*/



	/*if(polyLine && Array.isArray(polyLine)) {

			// Draw markers
			polyLine.map(pl => {
				if(!pl.hasOwnProperty("data")) return
				pl.data.map(data => {
					let coord = {lat: data.lat, lng: data.lng}
					let marker = L.marker(coord , markerOptions)
						.bindPopup(`### name: ${coord.name} lat: ${coord.lat} lng: ${coord.lng}`)
						.on('click', function(e) {
							//let cData = coord.id
							let cData = coord
							cData[REFRESH] = Date.now()
							if(onMarkerClick) onMarkerClick(cData)
						})
					marker.addTo(map)
				})
			})

			// extracting only lat lng
			polyLine.map(pl => { // working
				let vectorCoords = []
				pl.data.map(arr => {
					vectorCoords.push([arr.lat, arr.lng])
				})
				vectorJson.push({color: pl.color, data: vectorCoords})
			})
		} */
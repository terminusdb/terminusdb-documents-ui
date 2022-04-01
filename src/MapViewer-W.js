
import React, {useState, createRef} from "react"
import {MapContainer, TileLayer,  MapControl, withLeaflet, GeoJSON, Polyline} from 'react-leaflet'
import {LATITUDE, LONGITUDE, POINTS, POLYGON, LAT, LNG} from "./constants"
import {renderPositions} from "./Markers"
import Legend from "./MapLegend"

/*
**  documents            - Array of documents with latitudes and longitudes
**  zoom                 - zoom im map
**  scrollWheelZoom      - boolean to allow on scroll
*/


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

	//console.log("dui polyLine",polyLine)

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

		{/*<GeoJSON data={dump}/>*/}
		{/*<Legend map={map} children={children} />*/}
		{renderPositions(documents, onMarkerClick, polyLine)}

	</MapContainer>

}


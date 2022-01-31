
import React, {useState} from "react"
import {MapContainer, TileLayer} from 'react-leaflet'
import {LATITUDE, LONGITUDE, POINTS, POLYGON} from "./constants"
import {Markers} from "./Markers"


/*
**  documents            - Array of documents with latitudes and longitudes
**  zoom                 - zoom im map
**  scrollWheelZoom      - boolean to allow on scroll
*/


export const MapViewer = ({documents, zoom, scrollWheelZoom, display}) => {
	let type=POINTS
	if(display) type=display

    if(!Array.isArray(documents)) {
        return <React.Fragment>{"Please, Include valid documents to display on map"}</React.Fragment>
    }
    if(!documents.length) {
        return <React.Fragment>{"Cannot display empty documents on map"}</React.Fragment>
    }

    return <React.Fragment>
		<MapContainer
			center = { [ documents[0][LATITUDE] , documents[0][LONGITUDE] ] }
			zoom = { zoom ? zoom : 7 }
			scrollWheelZoom = { true }
		>

			<TileLayer
			attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
                {type===POINTS && <Markers data={documents} display={display}/>}
		</MapContainer>

	</React.Fragment>
}



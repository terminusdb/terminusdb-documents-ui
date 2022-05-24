
import React, {useState, useEffect, createRef} from "react"
import {LATITUDE, LONGITUDE, POINTS, POLYGON, LAT, LNG, REFRESH} from "../constants"
import {PolyLineLeafletMap} from "./polyLineLeafletMap"
import {LeafletMap} from "./leafletMap"
import {PolygonLeafletMap} from "./polygonLeafletMap"
import {GeoJSONLeafletMap} from "./geoJSONLeafletMap"

/*
**  documents            - Array of documents with latitudes and longitudes
**  zoom                 - zoom im map
**  scrollWheelZoom      - boolean to allow on scroll
*/


export const MapViewer = ({documents, zoom, scrollWheelZoom, display, onMarkerClick, polyLine, polygon, icon, geojsonFeature, center}) => {
	const [mapRef, setMapRef] = useState(createRef())
	const [map, setMap] = useState(null)

	//console.log("documents",documents)

	let type=POINTS
	if(display) type=display

    /*if(!Array.isArray(documents)) {
        return <React.Fragment>{"Please, Include valid documents to display on map"}</React.Fragment>
    }
    if(!documents.length) {
        return <React.Fragment>{"Cannot display empty documents on map"}</React.Fragment>
    }*/

	return <React.Fragment>
		{
			documents && !polyLine && !polygon &&
				<LeafletMap documents={documents} onMarkerClick = {onMarkerClick} zoom={zoom} icon={icon} center={center}/>
		}
		{
			polyLine && <PolyLineLeafletMap polyLine={polyLine} onMarkerClick = {onMarkerClick} zoom={zoom} center={center}/>
		}
		{
			polygon && <PolygonLeafletMap polygon={polygon} onMarkerClick = {onMarkerClick} zoom={zoom} center={center}/>
		}
		{
			geojsonFeature && <GeoJSONLeafletMap geojsonFeature={geojsonFeature} center={center} zoom={zoom} icon={icon}/>
		}
	</React.Fragment>
}


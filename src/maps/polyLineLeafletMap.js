import React, {useState, useEffect, createRef} from "react"
import {MapContainer, TileLayer,  MapControl, withLeaflet, GeoJSON, Polyline} from 'react-leaflet'
import {LATITUDE, LONGITUDE, POINTS, POLYGON, LAT, LNG, REFRESH} from "../constants"
import {renderPositions} from "./markers"
import icon from "../constants"
import "leaflet-arrowheads"
import L from "leaflet"
import {customMapOptions, customMarkerOptions} from "./markers"
import {MAP_OPTION, ARROW_OPTION, MARKER_OPTION} from "./map.constants"

export const PolyLineLeafletMap = ({polyLine, onMarkerClick, center, zoom}) => {

	useEffect(() => {
		map()
	}, [])

	//console.log("polyLine in LeafletMap", polyLine, polyLine.data)

	const map = () => {

		let mapOptions = customMapOptions(zoom, center)
        let markerOptions= customMarkerOptions(icon)

		const map = L.map("map-leaflet-id-polylines", mapOptions)
	
		const tileLayer = new L.TileLayer(
			"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			{
				attribution:
				'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
			}
		)

		tileLayer.addTo(map)

        //var polyline = L.polyline(polyLine.data, {color: polyLine.color}).addTo(map)
		var polyline = L.polyline(polyLine.data, {color: polyLine.color}).addTo(map)

        // zoom the map to the polyline
        map.fitBounds(polyline.getBounds())

		window.map = map

    }

	return <div id="map-leaflet-id-polylines" style={{ height: "100vh" }}></div>
}
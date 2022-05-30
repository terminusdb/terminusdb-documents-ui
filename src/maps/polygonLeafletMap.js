import React, {useState, useEffect, createRef} from "react"
import {MapContainer, TileLayer,  MapControl, withLeaflet, GeoJSON, Polygon} from 'react-leaflet'
import {LATITUDE, LONGITUDE, POINTS, POLYGON, LAT, LNG, REFRESH} from "../constants"
import {renderPositions} from "./markers"
import icon from "../constants"
import "leaflet-arrowheads"
import L from "leaflet"
import {MAP_OPTION, ARROW_OPTION, MARKER_OPTION} from "./map.constants"
import {customMapOptions, customMarkerOptions} from "./markers"

export const PolygonLeafletMap = ({polygon, onMarkerClick}) => {

	useEffect(() => {
		map()
	}, [])

	//console.log("polygon in LeafletMap", polygon, polygon.data)

	const map = () => {
		let mapOptions = customMapOptions(zoom, center)
        let markerOptions= customMarkerOptions(icon)

		const map = L.map("map-leaflet-id-polygon", mapOptions)
		let vectorJson = []

        var latlngs = [
			[
			  [
				51.51,
				-0.12
			  ],
			  [
				51.51,
				-0.13
			  ],
			  [
				51.53,
				-0.13
			  ]
			],
			[
			  [
				51.51,
				-0.05
			  ],
			  [
				51.51,
				-0.07
			  ],
			  [
				51.53,
				-0.07
			  ]
			]
		  ]
		const tileLayer = new L.TileLayer(
			"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			{
				attribution:
				'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
			}
		)

		tileLayer.addTo(map)
        var polygonMap = L.polygon(polygon.data, { color: 'purple', smoothFactor: 5 }).addTo(map)

        // zoom the map to the polygon
        map.fitBounds(polygonMap.getBounds())

		window.map = map

    }

	return <div id="map-leaflet-id-polygon" style={{ height: "100vh" }}></div>
}
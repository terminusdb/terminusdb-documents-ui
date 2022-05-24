import React, {useState, useEffect, createRef} from "react"
import {MapContainer, TileLayer,  MapControl, withLeaflet, GeoJSON} from 'react-leaflet'
import {LATITUDE, LONGITUDE, POINTS, POLYGON, LAT, LNG, REFRESH} from "../constants"
import {renderPositions, customMapOptions, customMarkerOptions} from "./markers"
import icon from "../constants"
import "leaflet-arrowheads"
import L from "leaflet"


export const GeoJSONLeafletMap = ({geojsonFeature, onMarkerClick, zoom, center, icon}) => {

	useEffect(() => {
		map()
	}, [])

	const map = () => {
        let mapOptions = customMapOptions(zoom, center)
        let markerOptions= customMarkerOptions(icon)

		const map = L.map("map-geojson-leaflet-id", mapOptions)
		const tileLayer = new  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
 
		tileLayer.addTo(map)

        L.geoJSON(geojsonFeature, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, markerOptions)
            }
        }).addTo(map)

		window.map = map
	}

	return <div id="map-geojson-leaflet-id" style={{ height: "100vh" }}></div>
}
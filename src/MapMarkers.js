import React, {useState, useEffect} from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"
import {Row} from "react-bootstrap"
import icon from "./constants"
import { LAT, LNG } from "./constants"


export const MapMarkers = ({data}) => {
    return <Marker
        key={"test_index"}
        position={{ lat: data[LAT], lng: data[LNG] }}
        icon={icon}
        /*eventHandlers={{
        click: (e) => {
          alert('marker clicked')
        },
		}}*/
    >

        <Popup>
			<Row>
				<h6 className="text-dark fw-bold">{`id: `}</h6>
				<h6 className="text-dark">{data["@id"]}</h6>
			</Row>
			<Row>
				<h6 className="text-dark fw-bold">{`latitude: `}</h6>
				<h6 className="text-dark">{data[LAT]}</h6>
			</Row>
			<Row>
				<h6 className="text-dark fw-bold">{`longitude: `}</h6>
				<h6 className="text-dark">{data[LNG]}</h6>
			</Row>
        </Popup>
    </Marker>
  }

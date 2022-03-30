import React, {useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import icon from "./constants"
import {Row, Form} from "react-bootstrap"


const MarkerInfo = ({activeMarker}) => {
	let info = []
	for(var thing in activeMarker) {
		if(thing === "@type") continue
		info.push(
			<span className="d-flex w-100">
				<span className="text-dark fw-bold col-md-4">{`${thing}: `}</span>
				<span className="text-dark text-break col-md-8">{ activeMarker[thing] }</span>
			</span>
		)
	}
	return info
}

export const GetMultiplePointMap = (props) => {
  	const [ activeMarker, setActiveMarker ] = useState( null )
  	let data = []

  	if(Array.isArray(props.formData)) {
		props.formData.map(item => {
			let json = {}
			for(var thing in item) {
				json[thing.toLowerCase()] = item[thing]
			}
			data.push(json)
		})
  	}

	return <React.Fragment>
		<span>{props.name}</span>
		<MapContainer
			center = { [ data[0].latitude , data[0].longitude ] }
			zoom = { 7 }
			scrollWheelZoom = { true }
		>
			<TileLayer
			attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

				{data.map((eachData, index) => (
					<Marker
						key={index}
						position= {[eachData.latitude, eachData.longitude]}
						eventHandlers={{
						click: () => {
							setActiveMarker(eachData)
						}
						}}
						icon= {icon}
					/>
				))}

				{ activeMarker && (
					<Popup
						position={ [ activeMarker.latitude, activeMarker.longitude ] }
						onClose={()=>{
							setActiveMarker(null)
						}}
					>
					    <MarkerInfo activeMarker={activeMarker}/>
					</Popup>
				)}

		</MapContainer>

	</React.Fragment>
}






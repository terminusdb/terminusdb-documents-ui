import React, {createRef, useState} from "react"
import {
  Map,
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  Polyline,
  CircleMarker
} from "react-leaflet"
import icon from "./constants"

const MapView = () => {

  	const [mapRef, setMapRef] = useState(createRef())

  	const center = { lat: 51.515, lng: -0.09 }
	const positions = [
	  { lat: 51.505, lng: -0.09 },
	  { lat: 51.51, lng: -0.1 },
	  { lat: 51.51, lng: -0.12 }
	]

	function renderPositions(positions) {
		const [clicked, setClicked] = useState(false)

		return <React.Fragment>

			{positions.map((position, index) => (
				<Marker
					key={index}
					position= {[position.lat, position.lng]}
					icon= {icon}
					eventHandlers={{
						click: () => {
							setClicked([position.lat, position.lng])
						}
					}}
				>
					<Popup>
						<b>lat:</b> {position.lat} <br />
						<b>lng:</b> {position.lng} <br />
					</Popup>
				</Marker>
			))}

			{clicked && <Polyline color="#220bb9" positions={positions} />}
		</React.Fragment>
	}


	return (
		<div className="mt-5">
			<MapContainer
				ref={mapRef}
				scrollWheelZoom = { true }
				center={center}
				zoom={13}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
				/>

				{renderPositions(positions)}
			</MapContainer>
		</div>
	)
  }



export function App() {
  return (
	<div className="App">
	  <MapView />
	</div>
  )
}

/*
<CircleMarker
			key={index}
			center={position}
			fill={true}
			color="#220bb9"
			radius={3}
			eventHandlers={{
                click: () => {
                    setActiveMarker(position)
                }
            }}
		  >*/

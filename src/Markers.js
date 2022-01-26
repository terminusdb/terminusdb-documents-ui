
import React, {useState} from "react"
import {Marker, Popup} from 'react-leaflet'
import {LATITUDE, LONGITUDE} from "./constants"
import icon from "./constants"


const MarkerInfo = ({activeMarker}) => {
	let info = []
	for(var thing in activeMarker) {
		if(thing === "@type") continue
		info.push(
			<div className="w-100 mr-4">
				<span className="text-dark fw-bold col-md-4">{`${thing}: `}</span>
				<span className="text-dark text-break col-md-8">{ activeMarker[thing] }</span>
			</div>
		)
	}
	return info
}



export const Markers = ({data}) => {
    const [ activeMarker, setActiveMarker ] = useState(false)

    return <React.Fragment>
        {data.map((eachData, index) => (
            <Marker
                key={index}
                position= {[eachData[LATITUDE], eachData[LONGITUDE]]}
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
    </React.Fragment>
}
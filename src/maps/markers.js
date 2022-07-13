
import React, {useState, useRef, useEffect} from "react"
import {Marker, Popup, Tooltip, Polyline} from 'react-leaflet'
import {LATITUDE, LONGITUDE, REFRESH} from "../constants"
import icon from "../constants"
import {MAP_OPTION, MARKER_OPTION} from "./map.constants"

// custom changes to map options
export function customMapOptions (zoom, center, documents) {
    let mapOptions=MAP_OPTION

    if(zoom) {
        mapOptions.zoom=zoom
    }
    if(center){
        mapOptions.center=center
    }
    if(center===undefined && Array.isArray(documents)) {
        let extractedCenter=documents[0]
        mapOptions.center=extractedCenter
    }
    return mapOptions
}

// custom changes to marker options
export function customMarkerOptions (icon) {
    let markerOptions=MARKER_OPTION
    
    if(icon) {
        let custom = L.divIcon({
            className: 'custom-div-icon',
            html: "<div style='background-color:#c30b82;' class='marker-pin'></div><i class='material-icons'></i>",
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        })
       return {icon: custom }
    }
    return markerOptions
}


const MarkerInfo = ({clicked}) => {
	let info = []
	for(var thing in clicked) {
		if(thing === "@type") continue
        if(thing===REFRESH) continue
		info.push(
			<div className="w-100 mr-4">
				<span className="text-dark fw-bold col-md-4">{`${thing}: `}</span>
				<span className="text-dark text-break col-md-8">{ clicked[thing] }</span>
			</div>
		)
	}
	return info
}


export function  renderPositions(positions, onMarkerClick, polyLine, mapRef) {
    const [clicked, setClicked] = useState(false)


    return <React.Fragment>

        {positions.map((position, index) => (
            <Marker
                key={index}
                position= {[position.lat, position.lng]}
                icon= {icon}
                eventHandlers={{
                    click: () => {
                        setClicked(position)
                        let cData = position
                        cData[REFRESH] = Date.now()
                        onMarkerClick(position)
                    }
                }}
            >
                <Popup>
                    <MarkerInfo clicked={clicked}/>
                </Popup>

            </Marker>
        ))}



        {Array.isArray(polyLine) && polyLine.map(pl => {
            //console.log("pl.data", pl.data)
            return <>
                <Polyline color={pl.color} positions={pl.data}/>
            </>
        })}


    </React.Fragment>
}

/*
return <>
<Polyline color={pl.color} positions={pl.data} arrowheads />
</>*/
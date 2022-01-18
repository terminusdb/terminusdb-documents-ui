import React from "react";
import { Marker, Popup } from "react-leaflet";

import icon from "./constants";


export const MapMarkers = ({ latitude, longitude }) => {
    /*const markers = mapPoints.map((x, index) => {
      // console.log(x);
      const {
        geometry: { coordinates }
      } = x;
      return (
        <Marker
          key={index}
          position={{ lat: coordinates[1], lng: coordinates[0] }}
          icon={icon}
        >
          <Popup>
            <span style={{color: "red"}}>{"test"}</span>
          </Popup>
        </Marker>
      );
    });*/



    return <Marker
        key={"test_index"}
        position={{ lat: latitude, lng: longitude }}
        icon={icon}
    >
        <Popup>
        	<h6 className="text-dark">
				{`latitude ${latitude}, longitude ${longitude}`}
			</h6>
        </Popup>
    </Marker>
  }

/*export const MapMarkers = ({ mapPoints }) => {
  const markers = mapPoints.map((x, index) => {
    // console.log(x);
    const {
      geometry: { coordinates }
    } = x;
    return (
      <Marker
        key={index}
        position={{ lat: coordinates[1], lng: coordinates[0] }}
        icon={icon}
      >
        <Popup>
          <span style={{color: "red"}}>{"test"}</span>
        </Popup>
      </Marker>
    );
  });

  return markers;
};*/

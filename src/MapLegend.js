import React, { useEffect } from "react"
import L from "leaflet"

function Legend({map, children}) {
  //console.log(map);

  if(!children) return <div/>

  useEffect(() => {
    if (map) {
      const legend = L.control({ position: "bottomright" });

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        div.innerHTML =  children
        return div;
      };

      legend.addTo(map);
    }
  }, [map]);
  return null;
}

export default Legend;

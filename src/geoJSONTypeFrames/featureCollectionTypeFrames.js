import React from "react"
import {
    MapViewer
} from "../maps/mapViewer"
import {GEO_JSON_FORM_DATA} from "../../geoJSON/src/geo_schema"

function getFeatureCollectionTypeViewUI(formData, item) {
    let ui={}

    /** fake data for now */
    //let tempFormData = GEO_JSON_FORM_DATA
    let tempFormData =formData
 
    function getFeatureCollectionMapComponent(props) {
        if(!tempFormData.hasOwnProperty(item)) return <div/>
        let docs = []

        return <MapViewer 
            geojsonFeature={tempFormData}
            icon="<div style='background-color:#c30b82;' class='marker-pin'></div><i class='material-icons'>weekend</i>"
            zoom={4}/>
    }
    ui[item] = {"ui:field": getFeatureCollectionMapComponent}
    return ui
}

export function featureCollectionType (frame, item, uiFrame, mode, formData) {

    let properties={}, propertiesUI={}

    let layout= {
        type: "object",
        title: item
    }

    properties[item]=layout
    let ui=getFeatureCollectionTypeViewUI(formData, item) 
    propertiesUI[item]=ui[item]

    return {properties, propertiesUI}
}

import React, {useEffect, useState} from "react"
import {getTitle, getDefaultValue, checkIfKey, isFilled} from "./utils"
import {CREATE, VIEW, EDIT, LATITUDE, LONGITUDE} from "./constants"
import { MapContainer, TileLayer, Marker, Popup, Map, Polyline } from 'react-leaflet'
import { MapMarkers } from "./MapMarkers"
import icon from "./constants"
import {GetMultiplePointMap} from "./Map"



function MultipleGeoCordinateFrames (frame, item, uiFrame, mode, formData, isSet) {

    let properties={}, propertiesUI={}

    /*if(!frame.hasOwnProperty(LATITUDE) && !frame.hasOwnProperty(LONGITUDE)) {
        console.log("ERROR, schema requires both Latitude and Longitude to be defined in frames")
    }
    if(!formData.hasOwnProperty(LATITUDE) && !formData.hasOwnProperty(LONGITUDE)) {
        console.log("ERROR, schema requires both Latitude and Longitude value to be filled")
    }*/
    if(mode !== VIEW) {
        console.log("ERROR, Map component must be called only during VIEW mode")
    }

    var layout = {
        type: 'string',
        info: "DATA",
        title: item
    }

    if(formData.hasOwnProperty(item)) {
        layout["default"]=getDefaultValue(item, formData)
    }


    // schema
    properties[item] = layout
    //default ui:schema
    propertiesUI[item] = {
        "ui:placeholder": frame[item],
        "ui:disabled": mode === EDIT && checkIfKey(item, frame["@key"]) && isFilled(formData, item) ? true : false,
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        classNames: mode===VIEW ? "tdb__input mb-3 mt-3 form-label tdb__view__input" : "tdb__input mb-3 mt-3",
        "ui:field": GetMultiplePointMap
    }



    if(mode === VIEW && !Array.isArray(formData) && !layout.hasOwnProperty("default")){ // set of subdocuments
        propertiesUI[item]["ui:widget"]= "hidden"
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}


export function makeMultipleGeoCordinateFrames  (frame, item, uiFrame, mode, formData, isSet) {
    let madeFrames = MultipleGeoCordinateFrames (frame, item, uiFrame, mode, formData, isSet)
    let required=item
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI, required}
}



function GeoCordinateFrames (frame, item, uiFrame, mode, formData, isSet) {
    let properties={}, propertiesUI={}

    if(!frame.hasOwnProperty(LATITUDE) && !frame.hasOwnProperty(LONGITUDE)) {
        console.log("ERROR, schema requires both Latitude and Longitude to be defined in frames")
    }
    if(!formData.hasOwnProperty(LATITUDE) && !formData.hasOwnProperty(LONGITUDE)) {
        console.log("ERROR, schema requires both Latitude and Longitude value to be filled")
    }
    if(mode !== VIEW) {
        console.log("ERROR, Map component must be called only during VIEW mode")
    }

    var layout = {
        type: 'string',
        info: "DATA",
        title: item
    }

    if(formData.hasOwnProperty(item)) {
        layout["default"]=getDefaultValue(item, formData)
    }

    function getMapComponent(props) {
        let lat = formData[LATITUDE], long = formData[LONGITUDE]

        let center=[lat, long]
        return  <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapMarkers data={formData} />
        </MapContainer>
    }


    // schema
    properties[item] = layout
    //default ui:schema
    propertiesUI[item] = {
        "ui:placeholder": frame[item],
        "ui:disabled": mode === EDIT && checkIfKey(item, frame["@key"]) && isFilled(formData, item) ? true : false,
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        classNames: mode===VIEW ? "tdb__input mb-3 mt-3 form-label tdb__view__input" : "tdb__input mb-3 mt-3",
        "ui:field": getMapComponent
    }

    /*if(mode === VIEW && !Array.isArray(formData) && !layout.hasOwnProperty("default")){ // set of subdocuments
        propertiesUI[item]["ui:widget"]= "hidden"
    } // commenting this as formData.length = 0 is ignored here*/

    /*if(mode === VIEW && formData.length === 0 && !layout.hasOwnProperty("default")){ // set of subdocuments
        propertiesUI[item]["ui:widget"]= "hidden"
    }*/

    if(mode === VIEW && !Array.isArray(formData) && !layout.hasOwnProperty("default")){ // set of subdocuments
        propertiesUI[item]["ui:widget"]= "hidden"
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}


export function makeGeoCordinateFrames  (frame, item, uiFrame, mode, formData, isSet) {
    let madeFrames = GeoCordinateFrames (frame, item, uiFrame, mode, formData, isSet)
    let required=item
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI, required}
}
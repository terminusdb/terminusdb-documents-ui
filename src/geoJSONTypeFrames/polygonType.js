import React, {useState, useEffect} from "react"
import {ArrayFieldTemplate, getSetTitle, getTitle, getOptionalSelect, checkIfKey, getDefaultValue, removeDefaultsFromSubDocumentFrame, removeDefaultsFromDataFrame} from "../utils"
import {CREATE, DATA, VIEW, EDIT, DOCUMENT, DIMENSION, ONEOFSUBDOCUMENTS, ONEOFCLASSES, GEO_CORDINATES} from "../constants"
import {Form} from "react-bootstrap"
import {MapViewer} from "../maps/mapViewer"
import {
    getPolygonTypeFilledValues,
    getPolygonCreateEditUI,
    getPolygonTypeViewUI
} from "./polygonType.utils"

export function polygonType (frame, item, uiFrame, mode, formData) {
    let properties={}, propertiesUI={}, layout={}
     
    let polygonLayout= {
        type: "array",
        title: item,
        [DIMENSION]: frame[DIMENSION],
        items: [{
            type: "array",
            items: [{type: "number"}, {type: "number"}]
        }],
        additionalItems: {
            type: "array",
            items: [{type: "number"}, {type: "number"}]
        }
    }

    // get filled values 
    if(mode === EDIT) {
        let filled=getPolygonTypeFilledValues(formData, item)
        polygonLayout["items"]=filled
    }

    if(mode !== VIEW) {
        layout= {
            type: "array",
            title: item,
            [DIMENSION]: frame[DIMENSION],
            items: [polygonLayout]
            //additionalItems: polygonLayout
        }
    }
    else {
        layout = {
            type: "object",
            title: "View Polygon"
        }
    }

    //schema
    properties[item] = layout
    //ui
    if(mode === VIEW) {
       let uiProperties=getPolygonTypeViewUI(formData, item, frame[DIMENSION]) 
       propertiesUI[item]=uiProperties[item]
    }
    else {
        let uiProperties=getPolygonCreateEditUI(item) 
        propertiesUI[item]=uiProperties[item]
    }
    

    return {properties, propertiesUI}
}

import React, {useState, useEffect} from "react"
import {ArrayFieldTemplate, getSetTitle, getTitle, getOptionalSelect, checkIfKey, getDefaultValue, removeDefaultsFromSubDocumentFrame, removeDefaultsFromDataFrame} from "../utils"
import {CREATE, DATA, VIEW, EDIT, DOCUMENT, DIMENSION, ONEOFSUBDOCUMENTS, ONEOFCLASSES, GEO_CORDINATES} from "../constants"
import {Form} from "react-bootstrap"
import {MapViewer} from "../maps/mapViewer"
import {
    getMultiPolygonTypeFilledValues,
    getMultiPolygonCreateEditUI,
    getMultiPolygonTypeViewUI
} from "./multiPolygonType.utils"

export function multiPolygonType (frame, item, uiFrame, mode, formData) {
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
        let filled = []
        if(formData.hasOwnProperty(item)){
            formData[item].map(fd => {
                fd.map(fdVals => {
                    let json = {
                        type: "array",
                        items: [{type: "number", default: fdVals[0]}, {type: "number", default: fdVals[1]}]
                    }
                    filled.push(json)
                })
                
            })
        }
        else filled = [{ // when no filled value available
            type: "array",
            items: [{type: "number"}, {type: "number"}]
        }]
        polygonLayout["items"]=filled
    }

    if(mode !== VIEW) {
        layout= {
            type: "array",
            title: "New Polygon",
            [DIMENSION]: frame[DIMENSION],
            items: [polygonLayout],
            additionalItems: polygonLayout
        }
    }
    else {
        layout = {
            type: "object",
            title: "test"
        }
    }

    //schema
    properties[item] = layout
    //ui
    if(mode === VIEW) {
        let uiProperties=getMultiPolygonTypeViewUI(formData, item, frame[DIMENSION]) 
        propertiesUI[item]=uiProperties[item]
    }
    else {
        let uiProperties=getMultiPolygonCreateEditUI(item) 
        propertiesUI[item]=uiProperties[item]
    }
    

    return {properties, propertiesUI}
}

/*export function polygonType (frame, item, uiFrame, mode, formData) {
    let properties={}, propertiesUI={}


    let polygon_layout= {
        type: "array",
        title: "Polygon lat & lng",
        items: [{
            type: "array",
            items: [{type: "number"}, {type: "number"}]
        }],
        additionalItems: {
            type: "array",
            items: [{type: "number"}, {type: "number"}]
        }
    }

    var  layout= {
        type: "array",
        title: item,
        [DIMENSION]: frame[DIMENSION],
        items: [polygon_layout],
        additionalItems: polygon_layout
    }

    //schema
    properties[item] = layout

    let uiProperties=getPolygonCreateEditUI(item) 
    propertiesUI[item]=uiProperties[item]

    return {properties, propertiesUI}
}*/
import React from "react"
import {getSubDocumentTitle, getSubDocumentDescription} from "./utils"
import {CREATE, VIEW} from "./constants"


export function subDocumentTypeFrames (frame, item, uiFrame, mode, formData) {
    let properties={}, propertiesUI={}
    var defaultValue

    // on edit or view
    if(mode !== CREATE && formData.hasOwnProperty(item)){
        let filled= formData[item]
        if(Array.isArray(filled)){
            filled.map(val => {
                for(var key in val) {
                    if(frame.properties[key]){ // frame exists and we add a default
                        frame.properties[key]["default"] = val[key]
                    }
                }
            })
        }
        else { //json object
            for(var key in filled) {
                if(frame.properties[key]){ // frame exists and we add a default
                    frame.properties[key]["default"] = filled[key]
                }
            }
        }

    }


    let layout = {
        type: "object",
        title: item,
        info: "SUBDOCUMENT",
        properties: frame.properties
    }


    //schema
    properties[item] = layout

    propertiesUI[item] = {
        "ui:field": "collapsible",
        collapse: {
            field: "ObjectField",
            classNames:"tdb__subdocument__collapse_headers",
        },
        classNames: "card bg-secondary p-4 mt-4 mb-4",
        "ui:description": getSubDocumentDescription(item),
        "ui:title": getSubDocumentTitle(item),
    }

    // copy ui schema of data type to new ui
    for(var key in frame.uiSchema) {
        propertiesUI[item][key] = frame.uiSchema[key]
    }


    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}


export const makeSubDocumentFrames = (frame, item, uiFrame, mode, formData) => {
    let madeFrames = subDocumentTypeFrames(frame, item, uiFrame, mode, formData)
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}
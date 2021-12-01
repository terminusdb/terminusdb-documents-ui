import React from "react"
import {getFieldTitle} from "./utils"
import {CREATE} from "./constants"

function getDefaultValue(item, formData) {
    if(!formData) return ""
    var found=false
    for(var thing in formData) {
        if(thing === item) {
            found = formData[thing]
            return found
        }
    }
    return found
}

function DataTypeFrames (frame, item, uiFrame, mode, formData) {
    let properties={}, propertiesUI={}
    var uiDisable=false

    var layout = {
        type: 'string',
        info: "DATA",
        title: item
    }

    if(mode !== CREATE) layout["default"]=getDefaultValue(item, formData)

    //schema
    properties[item] = layout


    //default ui:schema
    propertiesUI[item] = {
        "ui:placeholder": frame[item],
        "ui:disabled": uiDisable,
        "ui:title": getFieldTitle(item, false),
        classNames: "tdb__input mb-3 mt-3"
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}

// mandatory
export function makeDataTypeFrames (frame, item, uiFrame, mode, formData) {
    let madeFrames = DataTypeFrames (frame, item, uiFrame, mode, formData)
    let required=item
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI, required}
}

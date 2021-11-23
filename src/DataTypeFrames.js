import React from "react"
import {getFieldTitle} from "./utils"
import {EDIT} from "./constants"

function DataTypeFrames (frame, item, uiFrame) {
    let properties={}, propertiesUI={}
    var uiDisable=false

    var layout = {
        type: 'string',
        info: "DATA"
    }

    //schema
    properties[item] = layout

    function test () {
        return  <input className="bg-info"/>
    }

    //default ui:schema
    propertiesUI[item] = {
        "ui:placeholder": frame[item],
        "ui:disabled": uiDisable,
        "ui:title": getFieldTitle(item, false)
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}

// mandatory
export function makeDataTypeFrames (frame, item, uiFrame) {
    let madeFrames = DataTypeFrames (frame, item, uiFrame)
    let required=item
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI, required}
}

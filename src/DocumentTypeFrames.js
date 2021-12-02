
import React from 'react'
import {getFieldTitle} from "./utils"
import Select from 'react-select'
import {SELECT_STYLES, DOCUMENT, CREATE} from "./constants"



function getDefault(item, formData) {
    var match
    for(var key in formData){
        if(key === item) {
            match=formData[key]
        }
    }
    return match
}

export function DocumentTypeFrames (frame, item, uiFrame, documents, mode, formData, isSet) {
    let properties={}, propertiesUI={}
    var uiDisable=false, type=frame[item]

    var layout = {
        type: 'string',
        info: DOCUMENT,
        enum: documents[type]
    }

    //schema
    properties[item] = layout

    if(mode !== CREATE) {
        layout.default=getDefault(item, formData)
    }

    //default ui:schema
    propertiesUI[item] = {
        "ui:disabled": uiDisable,
        "ui:title": getFieldTitle(item, false),
        "ui:placeholder": `Select ${frame[item]} ...`,
        classNames: "tdb__input  mb-3 mt-3 "
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}

// mandatory
export function makeDocumentTypeFrames (frame, item, uiFrame, documents, mode, formData, isSet) {
    let madeFrames = DocumentTypeFrames (frame, item, uiFrame, documents, mode, formData, isSet)
    let required=item
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI, required}
}

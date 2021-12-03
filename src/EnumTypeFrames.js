
import React from 'react'
import {getTitle, getDefaultValue} from "./utils"
import Select from 'react-select'
import {VIEW, ENUM, CREATE} from "./constants"



export function EnumTypeFrames (frame, item, uiFrame, mode, formData, isSet) {
    let properties={}, propertiesUI={}
    var uiDisable=false, type=frame[item]

    var layout = {
        type: 'string',
        info: ENUM,
        enum: frame["@values"]
    }

    //schema
    properties[item] = layout

    if(mode !== CREATE) {
        layout.default=getDefaultValue(item, formData)
    }

    //default ui:schema
    propertiesUI[item] = {
        "ui:disabled": uiDisable,
        "ui:title": getTitle(item),
        "ui:placeholder": `Select ${frame["@id"]} ...`,
        classNames: "tdb__input  mb-3 mt-3 "
    }

    if(mode === VIEW && !layout.hasOwnProperty("default")){
        propertiesUI[item]["ui:widget"]= "hidden"
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}


// mandatory
export function makeEnumTypeFrames (frame, item, uiFrame, mode, formData, isSet) {
    let madeFrames = EnumTypeFrames (frame, item, uiFrame, mode, formData, isSet)
    let required=item
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI, required}
}


import React from 'react'
import {getTitle, getDefaultValue, checkIfKey, isFilled} from "./utils"
import {VIEW, ENUM, CREATE, EDIT} from "./constants"


// for enum types
export function EnumTypeFrames (frame, item, uiFrame, mode, formData, isSet) {
    let properties={}, propertiesUI={}
    var type=frame[item]

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
        "ui:disabled": mode === EDIT && checkIfKey(item, frame["@key"]) && isFilled(formData, item) ? true : false,
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        "ui:placeholder": `Select ${frame["@id"]} ...`,
        classNames: mode===VIEW ? "tdb__input mb-3 mt-3 tdb__view__enum__input" : "tdb__input mb-3 mt-3"
    }

    if(mode === VIEW && !layout.hasOwnProperty("default")){
        propertiesUI[item]["ui:widget"]= "hidden"
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    // hide entire widget if not available in filled frame
    if(mode === VIEW && !formData.hasOwnProperty(item)) {
        propertiesUI[item] = {"ui:widget" : "hidden"}
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

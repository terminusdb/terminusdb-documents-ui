
import React from 'react'
import {getTitle, getDefaultValue, checkIfKey, isFilled} from "./utils"
import {VIEW, ENUM, CREATE, EDIT, SUBDOCUMENT} from "./constants"



export function EnumTypeFrames (frame, item, uiFrame, mode, formData, isSet, onSelect) {
    let properties={}, propertiesUI={}, required=null

    var layout = {
        type: 'string',
        info: ENUM,
        enum: frame[item]["@values"],
        title: item
    }

    if(item === "type") {
        console.log("I am type")
    }

    //schema
    properties[item] = layout

    if(mode !== CREATE) {
        layout.default=getDefaultValue(item, formData)
    }

    //default ui:schema
    propertiesUI[item] = {
        "ui:disabled": mode === EDIT && checkIfKey(item, frame[item]["@key"]) && isFilled(formData, item) ? true : false,
        "ui:title": getTitle(item, checkIfKey(item, frame[item]["@key"])),
        "ui:placeholder": `Select ${frame[item]["@id"]} ...`,
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

    //gather required properties - required is true only if not set/subdocument/list
    if(Object.keys(frame[item]).length && !frame.hasOwnProperty(SUBDOCUMENT)) {
        required=item
    }

    return {properties, propertiesUI, required}
}


// mandatory
export function makeEnumTypeFrames (frame, item, uiFrame, mode, formData, isSet, onSelect) {
    let madeFrames = EnumTypeFrames (frame, item, uiFrame, mode, formData, isSet, onSelect)
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    if(madeFrames.required !== null) {
        let required=item
        return {properties, propertiesUI, required}
    }
    else return {properties, propertiesUI}
}

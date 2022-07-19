import {
    CREATE,
    VIEW,
    EDIT
} from "../constants"

import {
    getCreateLayout,
    getCreateUILayout,
    getEditLayout,
    getEditUILayout,
    getViewLayout,
    getViewUILayout
} from "./enumTypeFrames.utils"

import {addCustomUI} from "../utils"


// get enum type frames
function enumTypeFrames (frame, item, uiFrame, mode, formData, documentation) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateLayout(frame, item)
        uiLayout=getCreateUILayout(frame, item, uiFrame, documentation)
    }
    else if (mode === EDIT) {
        layout=getEditLayout(frame, item, formData)
        uiLayout=getEditUILayout(frame, item, formData, uiFrame, documentation)
    }
    else if (mode === VIEW) {
        layout=getViewLayout(frame, item, formData)
        uiLayout=getViewUILayout(frame, item, formData, uiFrame, documentation)
    }

    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)

    // schema
    properties[item] = layout
    // ui schema
    propertiesUI[item] = addedCustomUI

    return {properties, propertiesUI}
}

// mandatory
export function makeEnumTypeFrames (frame, item, uiFrame, mode, formData, documentation) {
    let madeFrames = enumTypeFrames (frame, item, uiFrame, mode, formData, documentation)

    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}

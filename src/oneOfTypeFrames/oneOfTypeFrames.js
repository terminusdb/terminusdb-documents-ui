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
} from "./oneOfTypeFrames.utils"

import {addCustomUI} from "../utils"


// get one of  type frames
function oneOfTypeFrames (fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect)
        // pass layout here, since it has the ui layout as well from getProperties()
        uiLayout=getCreateUILayout(frame, item, layout)
    }
    else if (mode === EDIT) {
        layout=getEditLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect)
        //// pass layout here, since it has the ui layout as well from getProperties()
        uiLayout=getEditUILayout(frame, item, layout)
    }
    else if (mode === VIEW) {
        layout=getViewLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect)
        uiLayout=getViewUILayout(frame, item, layout, formData)
    }

    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)

    // schema
    properties[current] = layout
    // ui schema
    propertiesUI[current] = addedCustomUI

    return {properties, propertiesUI}
}

// mandatory
export function makeOneOfTypeFrames (fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    let madeFrames = oneOfTypeFrames (fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect)

    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}

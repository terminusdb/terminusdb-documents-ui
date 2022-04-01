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
} from "./choiceDocumentTypeFrames.utils"

import {addCustomUI} from "../utils"


// get choice  type frames
function choiceDocumentTypeFrames (fullFrame, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateLayout(fullFrame, frame, item, uiFrame, mode, formData, onTraverse, onSelect)
        // pass layout here, since it has the ui layout as well from getProperties()
        uiLayout=getCreateUILayout(frame, item, layout)
    }
    else if (mode === EDIT) {
        layout=getEditLayout(fullFrame, frame, item, uiFrame, mode, formData, onTraverse, onSelect)
        //// pass layout here, since it has the ui layout as well from getProperties()
        uiLayout=getEditUILayout(frame, item, layout)
    }
    else if (mode === VIEW) {
        layout=getViewLayout(fullFrame, frame, item, uiFrame, mode, formData, onTraverse, onSelect)
        uiLayout=getViewUILayout(frame, item, layout)
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
export function makeChoiceDocumentTypeFrames (fullFrame, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    let madeFrames = choiceDocumentTypeFrames (fullFrame, frame, item, uiFrame, mode, formData, onTraverse, onSelect)

    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}
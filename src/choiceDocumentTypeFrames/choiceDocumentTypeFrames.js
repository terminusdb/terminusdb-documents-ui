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
function choiceDocumentTypeFrames (fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}
    
    if (mode === CREATE) {
        layout=getCreateLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect)
        // pass layout here, since it has the ui layout as well from getProperties()
        uiLayout=getCreateUILayout(frame, item, layout, uiFrame, onSelect, documentation)
    }
    else if (mode === EDIT) {
        layout=getEditLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect)
        //// pass layout here, since it has the ui layout as well from getProperties()
        uiLayout=getEditUILayout(frame, item, layout, uiFrame, onSelect)
    }
    else if (mode === VIEW) {
        layout=getViewLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect)
        uiLayout=getViewUILayout(frame, item, layout, uiFrame, onTraverse, onSelect)
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
export function makeChoiceDocumentTypeFrames (fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
    let madeFrames = choiceDocumentTypeFrames (fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation)

    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}

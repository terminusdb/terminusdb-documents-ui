
import {getTitle, getDefaultValue} from "./utils"
import {DOCUMENT, CREATE, VIEW} from "./constants"


export function DocumentTypeFrames (frame, item, uiFrame, documents, mode, formData, isSet) {
    let properties={}, propertiesUI={}
    var uiDisable=false, type=frame[item]

    var layout = {
        type: 'string',
        info: DOCUMENT,
        enum: documents ? documents[type] : {}
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
        "ui:placeholder": `Select ${frame[item]} ...`,
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
export function makeDocumentTypeFrames (frame, item, uiFrame, documents, mode, formData, isSet) {
    let madeFrames = DocumentTypeFrames (frame, item, uiFrame, documents, mode, formData, isSet)
    //var required=item
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}

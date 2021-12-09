import {getTitle, getDefaultValue, checkIfKey, isFilled} from "./utils"
import {CREATE, VIEW, EDIT} from "./constants"

function DataTypeFrames (frame, item, uiFrame, mode, formData, isSet) {
    let properties={}, propertiesUI={}

    var layout = {
        type: 'string',
        info: "DATA",
        title: item
    }

    if(mode !== CREATE && formData.hasOwnProperty(item)) {
        layout["default"]=getDefaultValue(item, formData)
    }

    //schema
    properties[item] = layout
    //default ui:schema
    propertiesUI[item] = {
        "ui:placeholder": frame[item],
        "ui:disabled": mode === EDIT && checkIfKey(item, frame["@key"]) && isFilled(formData, item) ? true : false,
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        classNames: mode===VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3"
    }

    if(mode === VIEW && !Array.isArray(formData) && !layout.hasOwnProperty("default")){ // set of subdocuments
        propertiesUI[item]["ui:widget"]= "hidden"
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}

// mandatory
export function makeDataTypeFrames (frame, item, uiFrame, mode, formData, isSet) {
    let madeFrames = DataTypeFrames (frame, item, uiFrame, mode, formData, isSet)
    let required=item
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI, required}
}

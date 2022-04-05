import {getTitle, getDefaultValue, checkIfKey, isFilled} from "./utils"
import {CREATE, VIEW, EDIT, SUBDOCUMENT, XSD_BOOLEAN} from "./constants"

function DataTypeFrames (frame, item, uiFrame, mode, formData) {
    let properties={}, propertiesUI={}, required=null

    var layout = {
        type: 'string',
        info: "DATA",
        title: item
    }

    if(frame[item] === XSD_BOOLEAN) layout.type="boolean"

    if(mode !== CREATE && formData.hasOwnProperty(item)) {
        let value = getDefaultValue(item, formData)
        if(typeof value == "number") {
            layout.type="number"
            layout["default"] = value
        }
        else if(typeof value == "boolean") {
            layout.type="boolean"
            layout["default"] = value
        }
        else layout["default"] = value
    }
    else if (mode !== CREATE && Array.isArray(formData) && formData.length && formData[0].hasOwnProperty(item)) {
        // this data frame will be part of a set or list, so if value is integer we set type to number
        let value = getDefaultValue(item, formData[0])
        if(typeof value == "number") layout.type="number"
        else if(typeof value == "boolean") layout.type="boolean"
        layout["default"] = value
    }

    // schema
    properties[item] = layout
    //default ui:schema
    propertiesUI[item] = {
        "ui:placeholder": frame[item],
        "ui:disabled": mode === EDIT && checkIfKey(item, frame["@key"]) && isFilled(formData, item) ? true : false,
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        classNames: mode===VIEW ? "tdb__input mb-3 mt-3 form-label tdb__view__input" : "tdb__input mb-3 mt-3"
    }

    if(mode === VIEW && !Array.isArray(formData) && !layout.hasOwnProperty("default")){ // set of subdocuments
        propertiesUI[item]["ui:widget"]= "hidden"
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    //gather required properties - required is true only if not set/subdocument/list
    if(Object.keys(frame).length && !frame.hasOwnProperty(SUBDOCUMENT)) {
        required=item
    }

    return {properties, propertiesUI, required}
}

// mandatory
export function makeDataTypeFrames (frame, item, uiFrame, mode, formData) {
    let madeFrames = DataTypeFrames (frame, item, uiFrame, mode, formData)
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    if(madeFrames.required !== null) {
        let required=item
        return {properties, propertiesUI, required}
    }
    else return {properties, propertiesUI}

}

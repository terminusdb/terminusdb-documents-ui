import {getTitle, getDefaultValue, addCustomUI, checkIfKey, isFilled} from "../utils"
import {
    getCreateJSONWidget, 
    getEditJSONWidget, 
    getViewJSONWidget,
    getDateUIWidget,
    getDateTimeUIWidget,
    getDataType
} from "./widget"
import {
    XSD_DATE_TIME,
    DATA_TYPE,
    XSD_DATE
} from "../constants"

// Create Layout
export function getCreateLayout(frame, item) {
    let type=getDataType(frame[item])
    let layout = {
        type: type,
        info: DATA_TYPE,
        title: item
    }
    if(frame[item] === XSD_DATE_TIME) layout["format"]="date-time"
    return layout 
}


// Create UI Layout
export function getCreateUILayout(frame, item, uiFrame) {
 
    let uiLayout = {
        "ui:placeholder": frame[item],
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        classNames: "tdb__input mb-3 mt-3"
    }   
    
    if(frame[item] === XSD_DATE_TIME) {
        uiLayout=getDateTimeUIWidget() // if xsd:dateTime, use a separate widget to display
    }
    else if(frame[item] === XSD_DATE) {
        uiLayout=getDateUIWidget()
    }
    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}

// Edit Layout
export function getEditLayout(frame, item, formData) {
    let type=getDataType(frame[item])
    let layout = {
        type: type,
        info: DATA_TYPE,
        title: item,
    }
    // get default value
    let defaultValue=getDefaultValue(item, formData)
    if(defaultValue) layout["default"]=defaultValue
    return layout
}

// Edit UI Layout
export function getEditUILayout(frame, item, formData, uiFrame) {

    let uiLayout = {
        "ui:placeholder": frame[item],
        "ui:disabled": checkIfKey(item, frame["@key"]) && isFilled(formData, item) ? true : false,
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        classNames: "tdb__input mb-3 mt-3"
    }

    if(frame[item] === XSD_DATE_TIME) {
        uiLayout = {
            "ui:widget": "alt-datetime",
            "ui:options": {
                yearsRange: [1980, 2030],
                hideNowButton: false,
                hideClearButton: false,
            }
        }
        uiLayout["classNames"] = "tdb__input mb-3 mt-3 date-list-style"
    }
    else if(frame[item] === XSD_DATE) {
        uiLayout=getDateUIWidget()
    }

    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}

// View Layout
export function getViewLayout(frame, item, formData) {
    let type=getDataType(frame[item])
    let layout = {
        type: type,
        info: DATA_TYPE,
        title: item
    }
    let defaultValue = getDefaultValue(item, formData)
    if(defaultValue) layout["default"]= defaultValue
    return layout
}

// View UI Layout
export function getViewUILayout(frame, item, formData, uiFrame) {
    // hide widget if formData of item is empty
    // check for info - coz at this point there mayb be data
    // fields which belongs to subdocument sets and we do not want to hide the widget
    
    if(!isFilled(formData, item)
        && !frame.hasOwnProperty("info")) {
        uiLayout={
            "ui:widget" : "hidden"
        }
        return uiLayout
    }

    let uiLayout = {
        "ui:placeholder": frame[item],
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        classNames: "tdb__input mb-3 mt-3"
    } 
    if(frame[item] === XSD_DATE_TIME) {
        uiLayout=getDateTimeUIWidget() // if xsd:dateTime, use a separate widget to display
    }
    else if(frame[item] === XSD_DATE) {
        uiLayout=getDateUIWidget()
    }

    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}
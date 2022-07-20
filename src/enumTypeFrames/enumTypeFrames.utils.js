import {getTitle, getDefaultValue, checkIfKey, getLabelFromDocumentation, isFilled, addCustomUI} from "../utils"
import {
    ENUM
} from "../constants"



// Create Layout
export function getCreateLayout(frame, item) {
    let layout = {
        type: 'string',
        info: ENUM,
        enum: frame[item]["@values"],
        title: item
    } 

    return layout
}

// Create UI Layout 
export function getCreateUILayout(frame, item, uiFrame, documentation) {
    let label = getLabelFromDocumentation(item, documentation)
    let uiLayout = {
        "ui:title": getTitle(item, checkIfKey(item, frame[item]["@key"]), documentation),
        "ui:placeholder": `Select ${label} ...`,
        classNames: "tdb__input mb-3 mt-3"
    }
    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}

// Edit Layout
export function getEditLayout(frame, item, formData) {

    let layout = {
        type: 'string',
        info: ENUM,
        enum: frame[item]["@values"],
        title: item
    }

    // get default value
    let defaultValue=getDefaultValue(item, formData)
    if(defaultValue) layout["default"]=defaultValue
    return layout
}

// Edit UI Layout
export function getEditUILayout(frame, item, formData, uiFrame, documentation) {
    let label = getLabelFromDocumentation(item, documentation)
    let uiLayout = {
        "ui:title": getTitle(item, checkIfKey(item, frame[item]["@key"]), documentation),
        "ui:placeholder": `Select ${label} ...`,
        classNames: "tdb__input mb-3 mt-3",
        "ui:disabled": checkIfKey(item, frame[item]["@key"]) && isFilled(formData, item) ? true : false
    }

    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}

// View Layout
export function getViewLayout(frame, item, formData) {
    let layout = {
        type: 'string',
        info: ENUM,
        enum: frame[item]["@values"],
        title: item
    }

    // get default value
    let defaultValue=getDefaultValue(item, formData)
    if(defaultValue) layout["default"]=defaultValue
    return layout
}

// View UI Layout
export function getViewUILayout(frame, item, formData, uiFrame, documentation) {
    let uiLayout={}
    // hide widget if formData of item is empty
    // check for info - coz at this point there mayb be data
    // fields which belongs to subdocument sets and we do not want to hide the widget
    if(!isFilled(formData, item)
        && !frame.hasOwnProperty("info")) {
        uiLayout={ "ui:widget" : "hidden" }
        return uiLayout
    }

    let label = getLabelFromDocumentation(item, documentation)
    uiLayout= {
        "ui:title": getTitle(item, checkIfKey(item, frame[item]["@key"]), documentation),
        "ui:placeholder": `Select ${label} ...`,
        classNames: "tdb__input mb-3 mt-3 tdb__view__enum__input"
    }
    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}
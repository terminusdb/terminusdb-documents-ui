import {getTitle, getDefaultValue, checkIfKey, isFilled} from "../utils"
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
export function getCreateUILayout(frame, item) {
    let uiLayout = {
        "ui:title": getTitle(item, checkIfKey(item, frame[item]["@key"])),
        "ui:placeholder": `Select ${frame[item]["@id"]} ...`,
        classNames: "tdb__input mb-3 mt-3"
    }
    return uiLayout
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
export function getEditUILayout(frame, item, formData) {
    let uiLayout = {
        "ui:title": getTitle(item, checkIfKey(item, frame[item]["@key"])),
        "ui:placeholder": `Select ${frame[item]["@id"]} ...`,
        classNames: "tdb__input mb-3 mt-3",
        "ui:disabled": checkIfKey(item, frame[item]["@key"]) && isFilled(formData, item) ? true : false
    }

    return uiLayout
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
export function getViewUILayout(frame, item, formData) {
    let uiLayout={}
    // hide widget if formData of item is empty
    if(!isFilled(formData, item)) {
        uiLayout={ "ui:widget" : "hidden" }
        return uiLayout
    }

    uiLayout= {
        "ui:title": getTitle(item, checkIfKey(item, frame[item]["@key"])),
        "ui:placeholder": `Select ${frame[item]["@id"]} ...`,
        classNames: "tdb__input mb-3 mt-3 tdb__view__enum__input"
    }
    return uiLayout
}
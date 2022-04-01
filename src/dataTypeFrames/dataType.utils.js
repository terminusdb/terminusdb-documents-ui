import {getTitle, getDefaultValue, checkIfKey, isFilled} from "../utils"
import {
    XSD_STRING,
    XSD_DECIMAL,
    XSD_DATE_TIME,
    XSD_BOOLEAN,
    STRING_TYPE,
    NUMBER_TYPE,
    BOOLEAN_TYPE,
    DATE_TYPE,
    DATA_TYPE
} from "../constants"

// function to provide a ui widget to dates
function getDateTimeUIWidget () {
    let uiLayout = {}
    uiLayout["ui:widget"] = "alt-datetime",
    uiLayout["ui:options"] = {
        "yearsRange": [
            1980,
            2030
        ]
    }
    uiLayout["classNames"] = "tdb__input mb-3 mt-3 date-list-style"
    return uiLayout
}

//get data type xsd: or xdd:
function getDataType(type) {
    if(type === XSD_STRING) return STRING_TYPE
    else if(type === XSD_DECIMAL) return NUMBER_TYPE
    else if(type === XSD_BOOLEAN) return BOOLEAN_TYPE
    else if(type === XSD_DATE_TIME) return DATE_TYPE
}

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
export function getCreateUILayout(frame, item) {
    let uiLayout = {
        "ui:placeholder": frame[item],
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        classNames: "tdb__input mb-3 mt-3"
    }
    // if xsd:dateTime, use a separate widget to display
    if(frame[item] === XSD_DATE_TIME) {
        uiLayout=getDateTimeUIWidget()
    }
    return uiLayout
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
export function getEditUILayout(frame, item, formData) {
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
    return uiLayout
}

// View Layout
export function getViewLayout(frame, item, formData) {
    let type=getDataType(frame[item])
    let layout = {
        type: type,
        info: DATA_TYPE,
        default: getDefaultValue(item, formData)
    }
    return layout
}

// View UI Layout
export function getViewUILayout(frame, item, formData) {
    // hide widget if formData of item is empty
    if(!isFilled(formData, item)) {
        uiLayout={ "ui:widget" : "hidden" }
        return uiLayout
    }

    let uiLayout = {
        "ui:placeholder": frame[item],
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        classNames: "tdb__input mb-3 mt-3",
    }
    return uiLayout
}
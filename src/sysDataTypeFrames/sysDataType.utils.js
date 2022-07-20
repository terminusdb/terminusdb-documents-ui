import React, {useState} from "react"
import {getTitle, getDefaultValue, addCustomUI, checkIfKey, isFilled, getLabelFromDocumentation} from "../utils"
import JSONInput from 'react-json-editor-ajrm'
import locale    from 'react-json-editor-ajrm/locale/en'
import {
    XSD_DATE_TIME,
    SYS_JSON_TYPE,
    DATA_TYPE,
    XSD_DATE,
    JSON_EDITOR_HEIGHT,
    JSON_EDITOR_WIDTH
} from "../constants"
import {
    getCreateJSONWidget, 
    getViewJSONWidget,
    getDataType
} from "./widget"

// Create Layout
export function getCreateLayout(frame, item) { 
    let type=getDataType(frame[item])
    let layout = {
        type: type,
        info: DATA_TYPE,
        title: item
    }
    return layout 
}


// Create UI Layout
export function getCreateUILayout(frame, item, uiFrame, documentation) {
 
    let uiLayout = {
        "ui:placeholder": frame[item],
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"]), documentation),
        classNames: "tdb__input mb-3 mt-3"
    }   
    
    if(frame[item] === SYS_JSON_TYPE) { // if sys:JSON, use a separate widget to display
        let label = getLabelFromDocumentation (item, documentation)
        uiLayout=getCreateJSONWidget(item, label)
    }
    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}

// Edit Layout
export function getEditLayout(frame, item, formData) {
    let type=getDataType(frame[item])
    let layout = {
        type: ["string", "object"],
        info: SYS_JSON_TYPE,
        title: item,
    } 
    // get default value
    let defaultValue=getDefaultValue(item, formData)
    
    if(defaultValue) layout["default"]=defaultValue
    return layout
}

export function getEditUILayout (frame, item, defaultValue, uiFrame, documentation) {
    let uiLayout= {}
    // get label from documentation
    let label = getLabelFromDocumentation (item, documentation)
    
    function displayEditJSONInput(props) { 

        function handleInput (data) {
            if(data.hasOwnProperty("jsObject") && Object.keys(data.jsObject).length > 0) {
                props.onChange(data.jsObject)
            }
        }
 
        if(props.formData) {
            return <React.Fragment>
                <span>{label}</span>
                <JSONInput
                    id='json_type_field'
                    placeholder={props.formData}
                    locale={locale}
                    height={JSON_EDITOR_HEIGHT}
                    width={JSON_EDITOR_WIDTH}
                    onBlur={handleInput}
                />
            </React.Fragment>
        }
        if(defaultValue) {
            return <React.Fragment>
                <span>{label}</span>
                <JSONInput
                    id='json_type_field'
                    placeholder={defaultValue}
                    locale={locale}
                    height={JSON_EDITOR_HEIGHT}
                    width={JSON_EDITOR_WIDTH}
                    onBlur={handleInput}
                />
            </React.Fragment>
        }

        return <React.Fragment>
            <span>{label}</span>
            <JSONInput
                id='json_type_field'
                locale={locale}
                height={JSON_EDITOR_HEIGHT}
                width={JSON_EDITOR_WIDTH}
                onBlur={handleInput}
            />
        </React.Fragment>
    }

    uiLayout = {
        "ui:placeholder": `Search for ${label} ...`,
        classNames: "tdb__input mb-3 mt-3",
        "ui:field": displayEditJSONInput
    }
    return uiLayout
}


// View Layout
export function getViewLayout(frame, item, formData) {
    let type=getDataType(frame[item])
    let layout = {
        type: type,
        info: SYS_JSON_TYPE,
        title: item
    }
    let defaultValue = getDefaultValue(item, formData)
    if(defaultValue) layout["default"]= defaultValue
    return layout
}

// View UI Layout
export function getViewUILayout(frame, item, formData, uiFrame, documentation) {
    // hide widget if formData of item is empty
    // check for info - coz at this point there mayb be data
    // fields which belongs to subdocument sets and we do not want to hide the widget
    
    // get label from documentation
    let label = getLabelFromDocumentation (item, documentation)

    if(!isFilled(formData, item)
        && !frame.hasOwnProperty("info")) {
        uiLayout={
            "ui:widget" : "hidden"
        }
        return uiLayout
    }

    let uiLayout = {
        "ui:placeholder": frame[item],
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"]), documentation),
        classNames: "tdb__input mb-3 mt-3"
    } 
    if(frame[item] === SYS_JSON_TYPE) { // if sys:JSON, use a separate widget to display
        let fd=getDefaultValue(item, formData)
        // get label from documentation
        let label = getLabelFromDocumentation (item, documentation)
        if(fd) uiLayout=getViewJSONWidget(item, fd, label)
        else if(isFilled(formData, item)) uiLayout=getViewJSONWidget(item, formData, label)
        else uiLayout={"ui:widget": "hidden"}
    }

    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}
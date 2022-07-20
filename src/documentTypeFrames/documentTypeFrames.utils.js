import React, {useState, useEffect} from "react"
import {getSubDocumentTitle, getSubDocumentDescription, getDefaultValue, isFilled, extractUIFrameSelectTemplate, getLabelFromDocumentation} from "../utils"
import {CREATE, DOCUMENT, EDIT, VIEW, SELECT_STYLES, SUBDOCUMENT_TYPE} from "../constants"
import {Form} from "react-bootstrap"
import AsyncSelect from 'react-select/async'
import {EmptyDocumentSelect, FilledDocumentSelect, FilledDocumentViewSelect} from "./DocumentSelects"


// create layout
export function getCreateLayout (frame, item) {
    let layout= {
        type: 'string',
        info: DOCUMENT,
        linked_to: frame[item],
        title: item
    }

    return layout
}

// create ui layout
export function getCreateUILayout (frame, item, onSelect, uiFrame, documentation) {
    let uiLayout= {}
    let label = getLabelFromDocumentation (item, documentation)

    // create
    function displayEmptySelect(props) {

        const [value, setValue]=useState(props.formData ? {value: props.formData, label: props.formData} : null)// select value

        const loadOptions = async (inputValue, callback) => {
            let opts = await onSelect(inputValue, frame[item])
            callback(opts)
            return opts
        }

        const handleInputChange = (newValue) => {
            const inp = newValue.replace(/\W/g, '')
            return inp
        }

        const onChange = e => {
            setValue({value: e.value, label: e.value})
            props.onChange(e.value)
        }

        // extracting custom ui styles
        let selectStyle = extractUIFrameSelectTemplate(uiFrame) ? extractUIFrameSelectTemplate(uiFrame) : SELECT_STYLES
        
        return <EmptyDocumentSelect
            label={label}
            styles={selectStyle}
            placeholder={props.uiSchema["ui:placeholder"]}
            onChange={onChange}
            loadOptions={loadOptions}
            value={value}
            handleInputChange={handleInputChange}
        />

    }

    uiLayout = {
        "ui:placeholder": `Search for ${label} ...`,
        classNames: "tdb__input mb-3 mt-3",
        "ui:field": displayEmptySelect
    }

    return uiLayout
}

// edit layout
export function getEditLayout (frame, item, formData) {
    let layout= {
        type: 'string',
        info: DOCUMENT,
        linked_to: frame[item],
        title: item
    }

    // get default value
    let defaultValue=getDefaultValue(item, formData)
  
    if(defaultValue) layout["default"]=defaultValue

    return layout 
}

// edit ui layout
export function getEditUILayout (frame, item, onSelect, defaultValue, uiFrame, documentation) {
    let uiLayout= {}
    let label = getLabelFromDocumentation (item, documentation)

    function displayFilledSelect(props) {
        const [value, setValue]=useState(props.formData ? {value: props.formData, label: props.formData} : null)// select value

        // loadOptions on AsyncSelect
        const loadOptions = async (inputValue, callback) => {
            let opts = await onSelect(inputValue, frame[item])
            callback(opts)
            return opts
        }

        // handle input change on AsyncSelect
        const handleInputChange = (newValue) => {
            const inputValue = newValue.replace(/\W/g, '');
            return inputValue
        }

        const onChange = e => {
            setValue({value: e.value, label: e.value})
            props.onChange(e.value)
        }

        // extracting custom ui styles
        let selectStyle = extractUIFrameSelectTemplate(uiFrame) ? extractUIFrameSelectTemplate(uiFrame) : SELECT_STYLES

        if (defaultValue) {
            return <FilledDocumentSelect
                label={label}
                styles={selectStyle}
                placeholder={props.uiSchema["ui:placeholder"]}
                onChange={onChange}
                loadOptions={loadOptions}
                defaultValue={defaultValue}
                handleInputChange={handleInputChange}
            />
        }

        return <EmptyDocumentSelect
            label={props.name}
            styles={selectStyle}
            placeholder={props.uiSchema["ui:placeholder"]}
            onChange={onChange}
            loadOptions={loadOptions}
            value={value}
            handleInputChange={handleInputChange}
        />

    }

    uiLayout = {
        "ui:placeholder": `Search for ${label} ...`,
        classNames: "tdb__input mb-3 mt-3",
        "ui:field": displayFilledSelect
    }
    return uiLayout
}

// View Layout
export function getViewLayout(frame, item, formData) {
    let layout= {
        type: 'string',
        info: DOCUMENT,
        linked_to: frame[item],
        title: item
    }

    // get default value
    let defaultValue=getDefaultValue(item, formData)
    if(defaultValue) layout["default"]=defaultValue

    return layout
}

// View UI Layout
export function getViewUILayout(frame, item, formData, onTraverse, uiFrame, documentation) {
    let uiLayout= {}
    let label = getLabelFromDocumentation (item, documentation)

    // hide widget if formData of item is empty
    // check for info - coz at this point there mayb be data
    // fields which belongs to subdocument sets and we do not want to hide the widget
    if(!isFilled(formData, item)
        && !frame.hasOwnProperty("info")) {
        uiLayout={ "ui:widget" : "hidden" }
        return uiLayout
    }
    // extracting custom ui styles
    let selectStyle = extractUIFrameSelectTemplate(uiFrame) ? extractUIFrameSelectTemplate(uiFrame) : SELECT_STYLES
    
    function displayFilledSelect(props) {
        return <FilledDocumentViewSelect
            label={label}
            styles={selectStyle}
            defaultValue={props.formData}
            onTraverse={onTraverse}
        />

    }

    uiLayout = {
        "ui:placeholder": `Search for ${label} ...`,
        classNames: "tdb__input mb-3 mt-3",
        "ui:field": displayFilledSelect
    }
    return uiLayout
}
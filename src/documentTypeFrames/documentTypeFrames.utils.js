import React, {useState, useEffect} from "react"
import {getSubDocumentTitle, getSubDocumentDescription, getDefaultValue, isFilled, extractUIFrameSelectTemplate} from "../utils"
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
export function getCreateUILayout (frame, item, onSelect, uiFrame) {
    let uiLayout= {}
    // create
    function displayEmptySelect(props) {

        const [inputValue, setInputValue]=useState(props.formData) // select value
        const [value, setValue]=useState(props.formData) // select value

        const loadOptions = async (inputValue, callback) => {
            let opts = await onSelect(inputValue, frame[item])
            callback(opts)
            return opts
        }

        const handleInputChange = (newValue) => {
            const inp = newValue.replace(/\W/g, '')
            console.log("inp", inp, newValue)
            setInputValue(inp)
            return inp
        }

        /*function onChange(e, {action}) {
            console.log("action",action)
            setValue({value:e.value, label: e.label})
            if(action === "select-option") props.onChange(e.value)
        } */

        const onChange = e => {
            setValue(e.value)
            props.onChange(e.value)
          };

        // extracting custom ui styles
        let selectStyle = extractUIFrameSelectTemplate(uiFrame) ? extractUIFrameSelectTemplate(uiFrame) : SELECT_STYLES

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
        "ui:placeholder": `Search for ${frame[item]} ...`,
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
export function getEditUILayout (frame, item, onSelect, defaultValue) {
    let uiLayout= {}

    function displayFilledSelect(props) {

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

        function onChange(e) {
            props.onChange(e.value)
        }

        if (defaultValue) {
            return <FilledDocumentSelect
                label={props.name}
                styles={SELECT_STYLES}
                placeholder={props.uiSchema["ui:placeholder"]}
                onChange={onChange}
                loadOptions={loadOptions}
                defaultValue={defaultValue}
                handleInputChange={handleInputChange}
            />
        }

        return <EmptyDocumentSelect
            label={props.name}
            styles={SELECT_STYLES}
            placeholder={props.uiSchema["ui:placeholder"]}
            onChange={onChange}
            loadOptions={loadOptions}
            handleInputChange={handleInputChange}
        />

    }

    uiLayout = {
        "ui:placeholder": `Search for ${frame[item]} ...`,
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
export function getViewUILayout(frame, item, formData, onTraverse, uiFrame) {
    let uiLayout= {}

    // hide widget if formData of item is empty
    if(!isFilled(formData, item)) {
        uiLayout={ "ui:widget" : "hidden" }
        return uiLayout
    }
    // extracting custom ui styles
    let selectStyle = extractUIFrameSelectTemplate(uiFrame) ? extractUIFrameSelectTemplate(uiFrame) : SELECT_STYLES


    function displayFilledSelect(props) {
        return <FilledDocumentViewSelect
            item={item}
            styles={selectStyle}
            defaultValue={props.formData}
            onTraverse={onTraverse}
        />

    }

    uiLayout = {
        "ui:placeholder": `Search for ${frame[item]} ...`,
        classNames: "tdb__input mb-3 mt-3",
        "ui:field": displayFilledSelect
    }
    return uiLayout
}
import React, {useState, useEffect} from "react"
import {getSubDocumentTitle, getSubDocumentDescription, getDefaultValue, isFilled} from "../utils"
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
export function getCreateUILayout (frame, item, onSelect) {
    let uiLayout= {}
    // create
    function displayEmptySelect(props) {

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
export function getViewUILayout(frame, item, formData, onTraverse) {
    let uiLayout= {}

    // hide widget if formData of item is empty
    if(!isFilled(formData, item)) {
        uiLayout={ "ui:widget" : "hidden" }
        return uiLayout
    }

    function displayFilledSelect(props) {
        return <FilledDocumentViewSelect
            item={item}
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
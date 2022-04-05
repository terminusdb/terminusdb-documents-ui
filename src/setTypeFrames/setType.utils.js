import React, {useState, useEffect} from "react"
import {ArrayFieldTemplate, getSubDocumentTitle, getSubDocumentDescription, getDefaultValue, isFilled, getSetTitle} from "../utils"
import {CREATE, DOCUMENT, EDIT, VIEW, SELECT_STYLES, SUBDOCUMENT_TYPE, ONEOFVALUES} from "../constants"
import {FilledDocumentSelect, EmptyDocumentSelect} from "../documentTypeFrames/DocumentSelects"

/**************   Set SubDocuments Types       *****************/
// create set subDocument type layout
export function getCreateSetSubDocumentTypeLayout (frame, item) {
    let layout={
        type: "array",
        title: getSetTitle(),
        items: frame.properties[item],
        additionalItems: frame.properties[item]
    }
    return layout
}

// create set subDocument type ui layout
export function getCreateSetSubDocumentTypeUILayout (frame, item) {
    let uiLayout= {}
    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            items: frame.uiSchema[item],
            additionalItems: frame.uiSchema[item],
            "ui:options": {
                addable: true,
                orderable: false,
                removable: true
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }

    return uiLayout
}

// edit set subDocument type layout
export function getEditSetSubDocumentTypeLayout (frame, item, formData) {
    let layout={
        type: "array",
        title: getSetTitle()
    }

    // get default value and fill items of array
    let defaultValues=getDefaultValue(item, formData)
    let filledItems=[]
    if(Array.isArray(defaultValues) && defaultValues.length) {
        defaultValues.map(value => {
            let structure = {}
            for(var props in frame.properties[item]) {
                if(props === "default") structure[props] = value
                else structure[props] = frame.properties[item][props]
            }
            filledItems.push(structure)
        })
    }

    // get filled items
    layout.items = filledItems

    let properties = {}
    // get additional items
    for(var props in frame.properties[item]) {
        if(props !== "default"){
            properties[props] = frame.properties[item][props]
        }
    }
    // additional items
    layout.additionalItems = properties
    return layout
}

// edit set subDocument type ui layout
export function getEditSetSubDocumentTypeUILayout (frame, item) {
    let uiLayout= {}
    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            items: frame.uiSchema[item],
            additionalItems: frame.uiSchema[item],
            "ui:options": {
                addable: true,
                orderable: false,
                removable: true
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }
    return uiLayout
}

// View set subDocument type Layout
export function getViewSetSubDocumentTypeLayout(frame, item, formData) {
    let layout={
        type: "array",
        title: getSetTitle(item)
    }

    // get default value and fill items of array
    let defaultValues=getDefaultValue(item, formData)
    let filledItems=[]
    if(Array.isArray(defaultValues) && defaultValues.length) {
        defaultValues.map(value => {
            let structure = {}
            for(var props in frame.properties[item]) {
                if(props === "default") structure[props] = value
                else structure[props] = frame.properties[item][props]
            }
            filledItems.push(structure)
        })
    }

    // get filled items
    layout.items = filledItems

    let properties = {}
    // get additional items
    for(var props in frame.properties[item]) {
        if(props !== "default"){
            properties[props] = frame.properties[item][props]
        }
    }
    // additional items
    layout.additionalItems = properties
    return layout
}

// View set subDocument type UI Layout
export function getViewSetSubDocumentTypeUILayout(frame, item, formData) {
    let uiLayout= {}

    // hide widget if formData of item is empty
    if(!isFilled(formData, item)) {
        const hidden =() => <div/>
        uiLayout={ "ui:widget" : hidden }
        return uiLayout
    }

    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            items: frame.uiSchema[item],
            additionalItems: frame.uiSchema[item],
            "ui:options": {
                addable: false,
                orderable: false,
                removable: false
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }
    return uiLayout
}


/**************   Set Data Types       *****************/
// create set data type layout
export function getCreateSetDataTypeLayout (frame, item) {
    let layout={
        type: "array",
        title: getSetTitle(),
        items: frame.properties[item],
        additionalItems: frame.properties[item]
    }
    return layout
}

// create set data type ui layout
export function getCreateSetDataTypeUILayout (frame, item) {
    let uiLayout= {}
    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            items: frame.uiSchema[item],
            additionalItems: frame.uiSchema[item],
            "ui:options": {
                addable: true,
                orderable: false,
                removable: true
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }

    return uiLayout
}

// edit set data type layout
export function getEditSetDataTypeLayout (frame, item, formData) {
    let layout={
        type: "array",
        title: getSetTitle()
    }

    // get default value and fill items of array
    let defaultValues=getDefaultValue(item, formData)
    let filledItems=[]
    if(Array.isArray(defaultValues) && defaultValues.length) {
        defaultValues.map(value => {
            let structure = {}
            for(var props in frame.properties[item]) {
                if(props === "default") structure[props] = value
                else structure[props] = frame.properties[item][props]
            }
            filledItems.push(structure)
        })
    }

    // get filled items
    layout.items = filledItems

    let properties = {}
    // get additional items
    for(var props in frame.properties[item]) {
        if(props !== "default"){
            properties[props] = frame.properties[item][props]
        }
    }
    // additional items
    layout.additionalItems = properties
    return layout
}

// edit set data type ui layout
export function getEditSetDataTypeUILayout (frame, item) {
    let uiLayout= {}
    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            items: frame.uiSchema[item],
            additionalItems: frame.uiSchema[item],
            "ui:options": {
                addable: true,
                orderable: false,
                removable: true
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }
    return uiLayout
}

// View set data type Layout
export function getViewSetDataTypeLayout(frame, item, formData) {
    let layout={
        type: "array",
        title: getSetTitle()
    }

    // get default value and fill items of array
    let defaultValues=getDefaultValue(item, formData)
    let filledItems=[]
    if(Array.isArray(defaultValues) && defaultValues.length) {
        defaultValues.map(value => {
            let structure = {}
            for(var props in frame.properties[item]) {
                if(props === "default") structure[props] = value
                else structure[props] = frame.properties[item][props]
            }
            filledItems.push(structure)
        })
    }

    // get filled items
    layout.items = filledItems

    let properties = {}
    // get additional items
    for(var props in frame.properties[item]) {
        if(props !== "default"){
            properties[props] = frame.properties[item][props]
        }
    }
    // additional items
    layout.additionalItems = properties
    return layout
}

// View set data type UI Layout
export function getViewSetDataTypeUILayout(frame, item, formData) {
    let uiLayout= {}
    // hide widget if formData of item is empty
    if(!isFilled(formData, item)) {
        uiLayout={ "ui:widget" : "hidden" }
        return uiLayout
    }
    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            items: frame.uiSchema[item],
            additionalItems: frame.uiSchema[item],
            "ui:options": {
                addable: false,
                orderable: false,
                removable: false
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }
    return uiLayout
}

/**************   Set Document Types       *****************/
// create set Document type layout
export function getCreateSetDocumentTypeLayout (frame, item) {
    let layout={
        type: "array",
        title: getSetTitle(item),
        items: frame.properties[item],
        additionalItems: frame.properties[item]
    }
    return layout
}

// create set Document type ui layout
export function getCreateSetDocumentTypeUILayout (frame, item) {
    let uiLayout= {}
    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            items: frame.uiSchema[item],
            additionalItems: frame.uiSchema[item],
            "ui:options": {
                addable: true,
                orderable: false,
                removable: true
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }

    return uiLayout
}

// edit set Document type layout
export function getEditSetDocumentTypeLayout (frame, item, formData) {
    let layout={
        type: "array",
        title: getSetTitle(item)
    }

    // get default value and fill items of array
    let defaultValues=getDefaultValue(item, formData)
    let filledItems=[]
    if(Array.isArray(defaultValues) && defaultValues.length) {
        defaultValues.map(value => {
            let structure = {}
            for(var props in frame.properties[item]) {
                if(props === "default") structure[props] = value
                else structure[props] = frame.properties[item][props]
            }
            filledItems.push(structure)
        })
    }

    // get filled items
    layout.items = filledItems

    let properties = {}
    // get additional items
    for(var props in frame.properties[item]) {
        if(props !== "default"){
            properties[props] = frame.properties[item][props]
        }
    }
    // additional items
    layout.additionalItems = properties
    return layout
}

// edit set Document type ui layout
export function getEditSetDocumentTypeUILayout (frame, item, onSelect) {

    // getting ui layout for additional items
    let additionalItemsUiStruct={}, uiLayout= {}, modifiedUiLayout = {}
    for(var ui in frame.uiSchema[item]) {
        if(ui !== "ui:field"){
            additionalItemsUiStruct[ui] = frame.uiSchema[item][ui]
        }
    }

    // getting the layout to put correct st values
    for( var ui in frame.uiSchema[item] ) {
        if(ui === "ui:field") {
            function displayFilledSetSelect(props) {

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

                let returnElement = []
                if(props.formData){
                    returnElement.push(
                        <FilledDocumentSelect
                            label={props.name}
                            styles={SELECT_STYLES}
                            placeholder={props.uiSchema["ui:placeholder"]}
                            onChange={onChange}
                            loadOptions={loadOptions}
                            defaultValue={props.formData}
                            handleInputChange={handleInputChange}
                        />
                    )
                }
                else returnElement.push(
                    <EmptyDocumentSelect
                        label={props.name}
                        styles={SELECT_STYLES}
                        placeholder={props.uiSchema["ui:placeholder"]}
                        onChange={onChange}
                        loadOptions={loadOptions}
                        handleInputChange={handleInputChange}
                    />
                )

                return returnElement

            }

            modifiedUiLayout[ui] = displayFilledSetSelect
        }
        else {
            modifiedUiLayout[ui] = frame.uiSchema[item][ui]
        }
    }

    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            items: modifiedUiLayout,
            additionalItems: additionalItemsUiStruct,
            "ui:options": {
                addable: true,
                orderable: false,
                removable: true
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }
    return uiLayout
}

// View set Document type Layout
export function getViewSetDocumentTypeLayout (frame, item, formData) {
    let layout={
        type: "array",
        title: getSetTitle(item)
    }

    // get default value and fill items of array
    let defaultValues=getDefaultValue(item, formData)
    let filledItems=[]
    if(Array.isArray(defaultValues) && defaultValues.length) {
        defaultValues.map(value => {
            let structure = {}
            for(var props in frame.properties[item]) {
                if(props === "default") structure[props] = value
                else structure[props] = frame.properties[item][props]
            }
            filledItems.push(structure)
        })
    }

    // get filled items
    layout.items = filledItems

    let properties = {}
    // get additional items
    for(var props in frame.properties[item]) {
        if(props !== "default"){
            properties[props] = frame.properties[item][props]
        }
    }
    // additional items
    layout.additionalItems = properties
    return layout
}

// View set Document type UI Layout
export function getViewSetDocumentTypeUILayout (frame, item, onSelect) {
    // getting ui layout for additional items
    let additionalItemsUiStruct={}, uiLayout= {}, modifiedUiLayout = {}
    for(var ui in frame.uiSchema[item]) {
        if(ui !== "ui:field"){
            additionalItemsUiStruct[ui] = frame.uiSchema[item][ui]
        }
    }

    // getting the layout to put correct st values
    for( var ui in frame.uiSchema[item] ) {
        if(ui === "ui:field") {
            function displayFilledSetSelect(props) {

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

                let returnElement = []
                if(props.formData){
                    returnElement.push(
                        <FilledDocumentSelect
                            label={props.name}
                            styles={SELECT_STYLES}
                            placeholder={props.uiSchema["ui:placeholder"]}
                            onChange={onChange}
                            loadOptions={loadOptions}
                            defaultValue={props.formData}
                            handleInputChange={handleInputChange}
                        />
                    )
                }
                else returnElement.push(
                    <EmptyDocumentSelect
                        label={props.name}
                        styles={SELECT_STYLES}
                        placeholder={props.uiSchema["ui:placeholder"]}
                        onChange={onChange}
                        loadOptions={loadOptions}
                        handleInputChange={handleInputChange}
                    />
                )

                return returnElement

            }

            modifiedUiLayout[ui] = displayFilledSetSelect
        }
        else {
            modifiedUiLayout[ui] = frame.uiSchema[item][ui]
        }
    }

    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            items: modifiedUiLayout,
            additionalItems: additionalItemsUiStruct,
            "ui:options": {
                addable: false,
                orderable: false,
                removable: false
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }
    return uiLayout
}

/**************   Set Enum Types       *****************/
// create set Enum type layout
export function getCreateSetEnumTypeLayout (frame, item) {
    let layout={
        type: "array",
        title: getSetTitle(item),
        items: frame.properties[item],
        additionalItems: frame.properties[item]
    }
    return layout
}

// create set Enum type ui layout
export function getCreateSetEnumTypeUILayout (frame, item) {
    let uiLayout= {}
    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            items: frame.uiSchema[item],
            additionalItems: frame.uiSchema[item],
            "ui:options": {
                addable: true,
                orderable: false,
                removable: true
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }

    return uiLayout
}


// edit set Enum type layout
export function getEditSetEnumTypeLayout (frame, item, formData) {
    let layout={
        type: "array",
        title: getSetTitle(item),
        items: frame.properties[item],
        additionalItems: frame.properties[item]
    }

    // get default value and fill items of array
    let defaultValues=getDefaultValue(item, formData)
    let filledItems=[]
    if(Array.isArray(defaultValues) && defaultValues.length) {
        defaultValues.map(value => {
            let structure = {}
            for(var props in frame.properties[item]) {
                if(props === "default") structure[props] = value
                else structure[props] = frame.properties[item][props]
            }
            filledItems.push(structure)
        })
    }

    // get filled items
    layout.items = filledItems

    let properties = {}
    // get additional items
    for(var props in frame.properties[item]) {
        if(props !== "default"){
            properties[props] = frame.properties[item][props]
        }
    }
    // additional items
    layout.additionalItems = properties
    return layout
}

// edit set Enum type ui layout
export function getEditSetEnumTypeUILayout (frame, item) {
    let uiLayout= {}
    if(frame.hasOwnProperty("uiSchema")) {

        uiLayout= {
            items: frame.uiSchema[item],
            additionalItems: frame.uiSchema[item],
            "ui:options": {
                addable: true,
                orderable: false,
                removable: true
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }
    return uiLayout
}

// view set Enum type layout
export function getViewSetEnumTypeLayout (frame, item, formData) {
    let layout={
        type: "array",
        title: getSetTitle(item),
        items: frame.properties[item],
        additionalItems: frame.properties[item]
    }

    // get default value and fill items of array
    let defaultValues=getDefaultValue(item, formData)
    let filledItems=[]
    if(Array.isArray(defaultValues) && defaultValues.length) {
        defaultValues.map(value => {
            let structure = {}
            for(var props in frame.properties[item]) {
                if(props === "default") structure[props] = value
                else structure[props] = frame.properties[item][props]
            }
            filledItems.push(structure)
        })
    }

    // get filled items
    layout.items = filledItems

    let properties = {}
    // get additional items
    for(var props in frame.properties[item]) {
        if(props !== "default"){
            properties[props] = frame.properties[item][props]
        }
    }
    // additional items
    layout.additionalItems = properties
    return layout
}

// view set Enum type ui layout
export function geViewSetEnumTypeUILayout (frame, item) {
    let uiLayout= {}
    if(frame.hasOwnProperty("uiSchema")) {

        uiLayout= {
            items: frame.uiSchema[item],
            additionalItems: frame.uiSchema[item],
            "ui:options": {
                addable: false,
                orderable: false,
                removable: false
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }
    return uiLayout
}

/**************   Set Choice Document Types       *****************/
// create set Choice Document type layout
export function getCreateSetChoiceDocumentTypeLayout(frame, item) {
    let layout={
        type: "array",
        title: getSetTitle(item),
        items: frame.properties[item],
        additionalItems: frame.properties[item]
    }
    return layout
}

// create set Choice Document type ui layout
export function getCreateSetChoiceDocumentTypeUILayout (frame, item) {
    let uiLayout= {}
    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            items: frame.uiSchema[item],
            additionalItems: frame.uiSchema[item],
            "ui:options": {
                addable: true,
                orderable: false,
                removable: true
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }

    return uiLayout
}

// edit set Choice Document type layout
export function getEditSetChoiceDocumentTypeLayout(frame, item, formData) {
    let layout={
        type: "array",
        title: getSetTitle(item),
        items: frame.properties[item],
        additionalItems: frame.properties[item]
    }

    // get default value and fill items of array
    let defaultValues=getDefaultValue(item, formData)
    let filledItems=[]
    if(Array.isArray(defaultValues) && defaultValues.length) {
        defaultValues.map(value => {
            if(frame.properties[item].hasOwnProperty("anyOf")) {

                frame.properties[item]["anyOf"].map(aOf => {
                    if(aOf.title === value["@type"]) {
                        let structure = {}
                        for(var props in aOf) {
                            structure[props]=aOf[props]
                        }
                        structure["default"] = value
                        filledItems.push(structure)
                    }
                })
            }
        })
    }

    //console.log("filledItems", filledItems)

    // get filled items
    layout.items = filledItems

    let properties = {}
    // get additional items
    for(var props in frame.properties[item]) {
        if(props !== "default"){
            properties[props] = frame.properties[item][props]
        }
    }
    // additional items
    layout.additionalItems = properties
    return layout
}

// edit set Choice Document type ui layout
export function getEditSetChoiceDocumentTypeUILayout (frame, item) {
    let uiLayout= {}
    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            items: frame.uiSchema[item],
            additionalItems: frame.uiSchema[item],
            "ui:options": {
                addable: true,
                orderable: false,
                removable: true
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }

    return uiLayout
}

// view set Choice Document type layout
export function getViewSetChoiceDocumentTypeLayout(frame, item, formData) {
    let layout={
        type: "array",
        title: getSetTitle(item),
        items: frame.properties[item],
        additionalItems: frame.properties[item]
    }

    // get default value and fill items of array
    let defaultValues=getDefaultValue(item, formData)
    let filledItems=[]
    if(Array.isArray(defaultValues) && defaultValues.length) {
        defaultValues.map(value => {
            if(frame.properties[item].hasOwnProperty("anyOf")) {

                frame.properties[item]["anyOf"].map(aOf => {
                    if(aOf.title === value["@type"]) {
                        let structure = {}
                        for(var props in aOf) {
                            structure[props]=aOf[props]
                        }
                        structure["default"] = value
                        filledItems.push(structure)
                    }
                })
            }
        })
    }

    //console.log("filledItems", filledItems)

    // get filled items
    layout.items = filledItems

    let properties = {}
    // get additional items
    for(var props in frame.properties[item]) {
        if(props !== "default"){
            properties[props] = frame.properties[item][props]
        }
    }
    // additional items
    layout.additionalItems = properties
    return layout
}

// view set Choice Document type ui layout
export function getViewSetChoiceDocumentTypeUILayout (frame, item) {
    let uiLayout= {}
    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            items: frame.uiSchema[item],
            additionalItems: frame.uiSchema[item],
            "ui:options": {
                addable: false,
                orderable: false,
                removable: false
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }

    return uiLayout
}


export function getEditSetOneOfTypeLayout(frame, item, formData) {
    let layout={
        type: "array",
        title: getSetTitle(item),
        items: frame.properties[item],
        additionalItems: frame.properties[item]
    }

    // get default value and fill items of array
    let defaultValues=getDefaultValue(item, formData)
    console.log("defaultValues", defaultValues)
    let filledItems=[]

    if(Array.isArray(defaultValues) && defaultValues.length) {
        defaultValues.map(value => {
            console.log("frame.properties[item]", frame.properties[item])
            let structure = {}
            if(frame["properties"][item]["properties"].hasOwnProperty(ONEOFVALUES)
                && frame["properties"][item]["properties"][ONEOFVALUES].hasOwnProperty("anyOf")
                && frame["properties"][item]["properties"][ONEOFVALUES]["anyOf"][0].hasOwnProperty("properties")) {

                let anyOfProperties=frame["properties"][item]["properties"][ONEOFVALUES]["anyOf"][0]["properties"]
                for (var props in anyOfProperties) {
                    let propertyValue = {}
                    for(var keys in anyOfProperties[props]) {
                        /*if(key === "default"
                            && ) {

                        }
                        else propertyValue[keys] = anyOfProperties[props][keys] */
                    }
                }
            }

            /*if(frame.properties[item].hasOwnProperty("anyOf")) {

                frame.properties[item]["anyOf"].map(aOf => {
                    if(aOf.title === value["@type"]) {
                        let structure = {}
                        for(var props in aOf) {
                            structure[props]=aOf[props]
                        }
                        structure["default"] = value
                        filledItems.push(structure)
                    }
                })
            }*/
        })
    }

    //console.log("filledItems", filledItems)

    // get filled items
    layout.items = filledItems

    let properties = {}
    // get additional items
    for(var props in frame.properties[item]) {
        if(props !== "default"){
            properties[props] = frame.properties[item][props]
        }
    }
    // additional items
    layout.additionalItems = properties
    return layout
}





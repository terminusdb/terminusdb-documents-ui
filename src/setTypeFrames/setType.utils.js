import React, {useState, useEffect} from "react"
import {ArrayFieldTemplate, addCustomUI, checkIfKey, getSetChoiceEmptyFrames, HideArrayFieldTemplate, extractUIFrameSelectTemplate, extractUIFrameSubDocumentTemplate, getSubDocumentTitle, getTitle, getDefaultValue, isFilled, getSetTitle, getLabelFromDocumentation} from "../utils"
import {CREATE, DOCUMENT, EDIT, VIEW, SELECT_STYLES, SYS_JSON_TYPE, JSON_TYPE, ONEOFVALUES} from "../constants"
import {FilledDocumentSelect, EmptyDocumentSelect, FilledDocumentViewSelect} from "../documentTypeFrames/DocumentSelects"
import {Form} from "react-bootstrap"
import JSONInput from 'react-json-editor-ajrm' 
import locale    from 'react-json-editor-ajrm/locale/en'

/**************   Set SubDocuments Types       *****************/
// create set subDocument type layout
export function getCreateSetSubDocumentTypeLayout (frame, item, documentation) {
    let layout={
        type: "array",
        title: getSetTitle(item, documentation), 
        items: frame.properties[item],
        additionalItems: frame.properties[item]
    } 

    return layout
}

// create set subDocument type ui layout
export function getCreateSetSubDocumentTypeUILayout (frame, item, uiFrame) {
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

    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}

// edit set subDocument type layout
export function getEditSetSubDocumentTypeLayout (frame, item, formData, documentation) {
    
    let layout={
        type: "array",
        title: getSetTitle(item, documentation), 
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
    if(Array.isArray(filledItems) && filledItems.length){

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
    }
   
    return layout
}

// edit set subDocument type ui layout
export function getEditSetSubDocumentTypeUILayout (frame, item, uiFrame) {
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
    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}


// View set subDocument type Layout
export function getViewSetSubDocumentTypeLayout(frame, item, formData, documentation) {
    let layout={
        type: "array",
        title: getSetTitle(item, documentation)
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
    //layout.additionalItems = properties
    return layout
}

// View set subDocument type UI Layout
export function getViewSetSubDocumentTypeUILayout(frame, item, uiFrame, formData) {
    let uiLayout= {}

    
    //checkIfSysJSONFieldExists(frame)

    // hide widget if formData of item is empty
    if(!isFilled(formData, item)) {
        uiLayout={
            "ui:widget" : 'hidden',
            "ui:options": {
                addable: false,
                orderable: false,
                removable: false
            },
            "ui:ArrayFieldTemplate" : HideArrayFieldTemplate
        }
        return uiLayout
    }

    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            items: frame.uiSchema[item],
            //additionalItems: frame.uiSchema[item],
            "ui:options": {
                addable: false,
                orderable: false,
                removable: false
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }
    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}


/**************   Set Data Types       *****************/
// create set data type layout
export function getCreateSetDataTypeLayout (frame, item, documentation) {
    let layout={
        type: "array",
        title: getSetTitle(item, documentation), 
        items: frame.properties[item],
        additionalItems: frame.properties[item]
    }
    return layout
}

// create set data type ui layout
export function getCreateSetDataTypeUILayout (frame, item, uiFrame) {
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
    
    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}

// edit set data type layout
export function getEditSetDataTypeLayout (frame, item, formData, documentation) {
    let layout={
        type: "array",
        title: getSetTitle(item, documentation),
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

    // if filled values available to display
    if(filledItems.length) {
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
    }
    return layout
}

// edit set data type ui layout
export function getEditSetDataTypeUILayout (frame, item, uiFrame) {
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
    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}

// View set data type Layout
export function getViewSetDataTypeLayout(frame, item, formData, documentation) {
    let layout={
        type: "array",
        title: getSetTitle(item, documentation)
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
export function getViewSetDataTypeUILayout(frame, item, formData, uiFrame) {
    let uiLayout= {}
    // hide widget if formData of item is empty
    if(!isFilled(formData, item)) {
        uiLayout={
            "ui:widget":'hidden',
            "ui:options": {
                addable: false,
                orderable: false,
                removable: false
            },
            "ui:ArrayFieldTemplate" : HideArrayFieldTemplate
        }
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

    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}

/**************   Set Sys Data Types       *****************/
// create set sys data type layout
export function getCreateSetSysDataTypeLayout (frame, item, documentation) {
    let layout={
        type: "array",
        title: getSetTitle(item, documentation), 
        items: frame.properties[item],
        additionalItems: frame.properties[item]
    }
    return layout
}

// create set sys data type ui layout
export function getCreateSetSysDataTypeUILayout (frame, item, uiFrame) {
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
    
    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}

// edit set sys data type layout
export function getEditSetSysDataTypeLayout (frame, item, formData, documentation) {
    let layout={
        type: "array",
        title: getSetTitle(item, documentation),
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

    // if filled values available to display
    if(filledItems.length) {
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
    }
    return layout
}

// edit set sys data type ui layout
export function getEditSetSysDataTypeUILayout (frame, item, uiFrame, documentation) {
    let uiLayout= {}
    console.log("set sys frame", frame)

    function getEmptyUiSchema(uiSchema) {
        let newUiStruct = {}
        for(var ui in uiSchema) {
            if(ui === "ui:field") {
                let label = getLabelFromDocumentation (item, documentation)
                function displayCreateJSONInput(props) {
                    function handleInput (data) {
                        if(data.hasOwnProperty("jsObject") && Object.keys(data.jsObject).length > 0) {
                            props.onChange(data.jsObject)
                        }
                    }
            
                    return <React.Fragment>
                        <span>{label}</span>
                        <JSONInput
                            id          = 'json_type_field'
                            locale      = { locale }
                            height      = '500px'
                            onBlur={handleInput}
                        />
                    </React.Fragment>
                }
                newUiStruct[ui] = displayCreateJSONInput
            }
            else newUiStruct[ui] = uiSchema[ui]
        }
        return newUiStruct
    }

    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            items: frame.uiSchema[item],
            additionalItems: getEmptyUiSchema(frame.uiSchema[item]),
            "ui:options": {
                addable: true,
                orderable: false,
                removable: true
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }
    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}

// View set Sys data type Layout
export function getViewSetSysDataTypeLayout(frame, item, formData, documentation) {
    let layout={
        type: "array",
        title: getSetTitle(item, documentation)
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

// View set Sys data type UI Layout
export function getViewSetSysDataTypeUILayout(frame, item, formData, uiFrame) {
    let uiLayout= {}
    // hide widget if formData of item is empty
    if(!isFilled(formData, item)) {
        uiLayout={
            "ui:widget":'hidden',
            "ui:options": {
                addable: false,
                orderable: false,
                removable: false
            },
            "ui:ArrayFieldTemplate" : HideArrayFieldTemplate
        }
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

    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}


/**************   Set Document Types       *****************/
// create set Document type layout
export function getCreateSetDocumentTypeLayout (frame, item, documentation) {
    let layout={
        type: "array",
        title: getSetTitle(item, documentation),
        items: frame.properties[item],
        additionalItems: frame.properties[item]
    }
    return layout
}

// create set Document type ui layout
export function getCreateSetDocumentTypeUILayout (frame, item, uiFrame) {
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

    // if hidden
    if(uiFrame && uiFrame.hasOwnProperty(item) && 
        uiFrame[item].hasOwnProperty("ui:widget") && 
        uiFrame[item]["ui:widget"] === "hidden") {
            uiLayout={"ui:widget": 'hidden', "ui:ArrayFieldTemplate": HideArrayFieldTemplate}
        }

    return uiLayout
}

// edit set Document type layout
export function getEditSetDocumentTypeLayout (frame, item, formData, documentation) {
    let layout={
        type: "array",
        title: getSetTitle(item, documentation),
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

    if(filledItems.length) {
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
    }
    return layout
}

// edit set Document type ui layout
export function getEditSetDocumentTypeUILayout (frame, item, uiFrame, onSelect, documentation) {
    //console.log("***** frame.uiSchema[item]," , frame.uiSchema[item])
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
                    let type = frame.properties[item]["linked_to"]
                    let opts = await onSelect(inputValue, type)
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

                // extracting custom ui styles
                let selectStyle = extractUIFrameSelectTemplate(uiFrame) ? extractUIFrameSelectTemplate(uiFrame) : SELECT_STYLES
                let label = getLabelFromDocumentation (item, documentation)

                let returnElement = []
                if(props.formData){
                    returnElement.push(
                        <FilledDocumentSelect
                            label={label}
                            styles={selectStyle}
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
                        label={label}
                        styles={selectStyle}
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
            additionalItems: modifiedUiLayout,
            "ui:options": {
                addable: true,
                orderable: false,
                removable: true
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }
    }

    // if hidden
    if(uiFrame && uiFrame.hasOwnProperty(item) && 
        uiFrame[item].hasOwnProperty("ui:widget") && 
        uiFrame[item]["ui:widget"] === "hidden") {
            uiLayout={"ui:widget": 'hidden', "ui:ArrayFieldTemplate": HideArrayFieldTemplate}
        }
   
    return uiLayout
}

// View set Document type Layout
export function getViewSetDocumentTypeLayout (frame, item, formData, documentation) {
    let layout={
        type: "array",
        title: getSetTitle(item, documentation)
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
export function getViewSetDocumentTypeUILayout (frame, item, onSelect, uiFrame, formData, onTraverse, documentation) {
    // getting ui layout for additional items
    let additionalItemsUiStruct={}, uiLayout= {}, modifiedUiLayout = {}

    // hide widget if formData of item is empty
    if(!isFilled(formData, item)) {
        uiLayout={
            "ui:widget" : 'hidden',
            "ui:options": {
                addable: false,
                orderable: false,
                removable: false
            },
            "ui:ArrayFieldTemplate" : HideArrayFieldTemplate
        }
        return uiLayout
    }

    for(var ui in frame.uiSchema[item]) {
        if(ui !== "ui:field"){
            additionalItemsUiStruct[ui] = frame.uiSchema[item][ui]
        }
    }
    // extracting custom ui styles
    let selectStyle = extractUIFrameSelectTemplate(uiFrame) ? extractUIFrameSelectTemplate(uiFrame) : SELECT_STYLES
    let label = getLabelFromDocumentation (item, documentation)

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
                        <FilledDocumentViewSelect
                            label={label}
                            defaultValue={props.formData}
                            onTraverse={onTraverse} 
                            styles={selectStyle}/>
                        /*<FilledDocumentSelect
                            label={props.name}
                            styles={selectStyle}
                            placeholder={props.uiSchema["ui:placeholder"]}
                            onChange={onChange}
                            loadOptions={loadOptions}
                            defaultValue={props.formData}
                            handleInputChange={handleInputChange}
                        />*/
                    )
                }
                else returnElement.push(
                    <EmptyDocumentSelect
                        label={label}
                        styles={selectStyle}
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
    // if hidden
    if(uiFrame && uiFrame.hasOwnProperty(item) && 
        uiFrame[item].hasOwnProperty("ui:widget") && 
        uiFrame[item]["ui:widget"] === "hidden") {
            uiLayout={"ui:widget": 'hidden', "ui:ArrayFieldTemplate": HideArrayFieldTemplate}
        }
    return uiLayout
}

/**************   Set Enum Types       *****************/
// create set Enum type layout
export function getCreateSetEnumTypeLayout (frame, item, documentation) {
    let layout={
        type: "array",
        title: getSetTitle(item, documentation),
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
export function getEditSetEnumTypeLayout (frame, item, formData, documentation) {
    let layout={
        type: "array",
        title: getSetTitle(item, documentation),
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
    if(Array.isArray(filledItems) && filledItems.length)
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
export function getViewSetEnumTypeLayout (frame, item, formData, documentation) {
    let layout={
        type: "array",
        title: getSetTitle(item, documentation),
        items: frame.properties[item],
        //additionalItems: frame.properties[item]
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
    //layout.additionalItems = properties
    return layout
}

// view set Enum type ui layout
export function getViewSetEnumTypeUILayout (frame, item, formData) {
    let uiLayout= {}

    if(!isFilled(formData, item)) {
        uiLayout={
            "ui:widget" : 'hidden',
            "ui:options": {
                addable: false,
                orderable: false,
                removable: false
            },
            "ui:ArrayFieldTemplate" : HideArrayFieldTemplate
        }
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

/**************   Set Sub Choice Document Types       *****************/
// create set Sub Choice Document type layout
export function getCreateSetSubChoiceDocumentTypeLayout(frame, item) {
    let layout={
        type: "array",
        title: getSetTitle(item),
        items: frame.properties[item],
        additionalItems: frame.properties[item]
    }
    return layout
}

// create set Sub Choice Document type ui layout
export function getCreateSetSubChoiceDocumentTypeUILayout (frame, item, uiFrame) {
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
    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI

}

// edit set Sub Choice Document type layout
export function getEditSetChoiceSubDocumentTypeLayout(frame, item, formData) {
    //console.log("!!!! CHOICE SET frame", frame)
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
    if(Array.isArray(filledItems) && filledItems.length)
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

// edit set Sub Choice Document type ui layout
export function getEditSetChoiceSubDocumentTypeUILayout (frame, item) {
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

// view set Sub Choice Document type layout
export function getViewSetChoiceSubDocumentTypeLayout(frame, item, formData) {
    let layout={
        type: "array",
        title: getSetTitle(item),
        items: frame.properties[item],
        //additionalItems: frame.properties[item]
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
    //layout.additionalItems = properties
    return layout
}

// view set Sub Choice Document type ui layout
export function getViewSetChoiceSubDocumentTypeUILayout (frame, item, formData) {
    let uiLayout= {}

    if(!isFilled(formData, item)) {
        uiLayout={
            "ui:widget" : 'hidden',
            "ui:options": {
                addable: false,
                orderable: false,
                removable: false
            },
            "ui:ArrayFieldTemplate" : HideArrayFieldTemplate
        }
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
export function getCreateSetChoiceDocumentTypeUILayout (frame, item, uiFrame) {
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

    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return uiLayout
}

// edit set Choice Document type layout
export function getEditSetChoiceDocumentTypeLayout(frame, item, formData) {
    //console.log("!!!! CHOICE SET frame", frame)
    let layout={
        type: "array",
        title: getSetTitle(item),
        items: frame.properties[item],
        //additionalItems: frame.properties[item]
    }

    // get default value and fill items of array
    let defaultValues=getDefaultValue(item, formData)
    let filledItems=[]
    if(Array.isArray(defaultValues) && defaultValues.length) {

        defaultValues.map(value => {
            if(frame.properties[item].hasOwnProperty("anyOf")) {

                frame.properties[item]["anyOf"].map(aOf => {
                    let documentClass=aOf.title

                    if(value.includes(`${documentClass}/`)) {
                        let structure = {}
                        for(var props in aOf) {
                            structure[props]=aOf[props]
                        }
                        structure["properties"][documentClass]["default"] = value
                        filledItems.push(structure)
                    }
                })
            }
        })
    }

    //console.log("filledItems", filledItems)

    // get filled items
    layout.items = filledItems
    // set empty additional items
    let emptyAdditionalItems = getSetChoiceEmptyFrames(frame, item)

    layout.additionalItems = {
        description: frame.properties[item].description ,
        info: frame.properties[item].info,
        title: frame.properties[item].title,
        type: frame.properties[item].type,
        anyOf: emptyAdditionalItems
    }

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
        title: getSetTitle(item)
    }

    // get default value and fill items of array
    let defaultValues=getDefaultValue(item, formData)
    let filledItems=[]
    if(Array.isArray(defaultValues) && defaultValues.length) {
        defaultValues.map(value => {
            let structure = {
                type: 'string',
                tilte: item,
                default: value
            }
            filledItems.push(structure)
        })
    }
    //console.log("filledItems", filledItems)

    // get filled items
    layout["items"] = filledItems
    return layout
}

// view set Choice Document type ui layout
export function getViewSetChoiceDocumentTypeUILayout (frame, item, onTraverse) {
    let uiLayout= {}

        function getViewSetChoice(props){

            const [clicked, setClicked]=useState(false)

            useEffect(() => {
                if(!clicked) return
                if(onTraverse) onTraverse(clicked)
            }, [clicked])

            const handleClick = (e, val) => { // view if on traverse function defined
                setClicked(val)
            }

            let filledUis = []

            if(Array.isArray(props.formData)) {
                props.formData.map(value => {
                    filledUis.push(
                        <React.Fragment>
                            <div onClick={(e) => handleClick(e, value)}
                                className="tdb__span__select text-light">
                                    {value}
                            </div>
                        </React.Fragment>
                    )
                })

                return <React.Fragment>
                    <Form.Label className="control-label">{item}</Form.Label>
                    {filledUis}
                </React.Fragment>
            }
            // if not array - then theres no filled value avail
            return<div/>
        }
        uiLayout = {
            "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
            //classNames: "tdb__input mb-3 mt-3",
            "ui:field": getViewSetChoice,
            "ui:options": {
                addable: false,
                orderable: false,
                removable: false
            },
            "ui:ArrayFieldTemplate" : ArrayFieldTemplate
        }

        /*uiLayout= {
            items: frame.uiSchema[item],
            additionalItems: frame.uiSchema[item],

        }*/


    return uiLayout
}

/**************   Set oneOfs Document Types       *****************/
// edit set Sub oneOf Document type layout
export function getEditSetOneOfTypeLayout(frame, item, formData) {
    let layout={
        type: "array",
        title: getSetTitle(item),
        //items: frame.properties[item],
        additionalItems: frame.properties[item]
    }

    //console.log("frame.properties[item]",frame.properties[item])

    let filledItems=[]
    let defaultValue = (formData && Array.isArray(formData[item])) ? formData[item] : null

    if(!defaultValue) {
        layout["items"]=frame.properties[item]
        return layout
    }

    // get filled frames
    defaultValue.map(value => {

        if(frame.properties[item].hasOwnProperty("properties")
        && frame.properties[item]["properties"].hasOwnProperty("@oneOf")
        && frame.properties[item]["properties"]["@oneOf"].hasOwnProperty("anyOf")) {
            let filledAnyOfs=frame.properties[item]["properties"]["@oneOf"]["anyOf"]
            filledAnyOfs.map(fAnyOf => {
                let title=fAnyOf.title
                let structure = {}

                if(value.hasOwnProperty(title)){ // match
                    let filledProperties={}

                    for(var props in fAnyOf.properties) {
                        let gatherProperties={}
                        for(var key in fAnyOf.properties[props]) {
                            gatherProperties[key] = fAnyOf.properties[props][key]
                        }
                        if(!gatherProperties.hasOwnProperty("default")) {
                            gatherProperties["default"] = value[title][props]
                        }
                        filledProperties[props] = gatherProperties
                    }
                    //console.log("filledProperties",filledProperties)

                    let anyOfStructure={
                        type: "object",
                        title: title,
                        properties: filledProperties,
                        uiProperties: fAnyOf.uiProperties,
                        //default: value[title]
                    }

                    // anyOf structure
                    structure = {
                        type: 'object',
                        info: ONEOFVALUES,
                        title: item,
                        anyOf: [anyOfStructure]
                    }

                }
                // oneOf structure
                if(Object.keys(structure).length) {
                    //filledItems.push(structure)
                    filledItems.push({
                        properties: {
                            "@oneOf": structure,
                            "@type": {type: 'string', title: item, default: item}
                        }
                    })
                }
            })
        }

    })

    console.log("filledItems", filledItems)

    // get filled items
    layout["items"] = filledItems

    /*let properties = {}
    // get additional items
    for(var props in frame.properties[item]) {
        if(props !== "default"){
            properties[props] = frame.properties[item][props]
        }
    }
    // additional items
    layout.additionalItems = properties */
    return layout
}


// edit set oneOf Document type ui layout
export const getEditSetOneOfTypeUILayout = (frame, item, layout, uiFrame) => {

    let subDocuemntBg = extractUIFrameSubDocumentTemplate(uiFrame) ? extractUIFrameSubDocumentTemplate(uiFrame) : 'bg-secondary'
    let uiItemsLayout = {
        classNames: `card ${subDocuemntBg} p-4 mt-4 mb-4`
    }
    let uiLayout = {}, itemsLayout=[], itemCount=0

    //console.log("layout", layout)

    if(layout.hasOwnProperty("items") && Array.isArray(layout.items)) {

        layout.items.map(its => {
            if(its.hasOwnProperty("properties")
                && its["properties"].hasOwnProperty("@oneOf")
                && its["properties"]["@oneOf"].hasOwnProperty("anyOf")
                && Array.isArray(its["properties"]["@oneOf"]["anyOf"])){
            //if(its.hasOwnProperty("anyOf") && Array.isArray(its["anyOf"])) {
                let filledAnyOf=  its["properties"]["@oneOf"]["anyOf"][0] // at this point there will only be one value
                if(filledAnyOf.hasOwnProperty("uiProperties"))
                for(var ui in filledAnyOf["uiProperties"]) {
                    uiItemsLayout[ui]=filledAnyOf["uiProperties"][ui]
                }
                itemCount+=1
            }
        })
    }

    // get number of items layout
    for(var count = 0; count < itemCount; count ++) {
        itemsLayout.push({
            "@oneOf": uiItemsLayout,
            "@type": {"ui:widget": 'hidden'}
        })
    }

    //console.log("uiItemsLayout", uiItemsLayout)

    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            //items: uiItemsLayout,
            //classNames: `card ${subDocuemntBg} p-4 mt-4 mb-4`,
            items: itemsLayout,
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

// view set oneOf Document type layout
export function getViewSetOneOfTypeLayout(frame, item, formData) {
    let layout={
        type: "array",
        title: getSetTitle(item),
        //items: frame.properties[item],
        //additionalItems: frame.properties[item]
    }

    //console.log("frame.properties[item]",frame.properties[item])

    let filledItems=[]
    let defaultValue = (formData && Array.isArray(formData[item])) ? formData[item] : null

    if(!defaultValue) {
        //layout["items"]=frame.properties[item]
        let layout={} // dont display if formData is empty
        return layout
    }

    // get filled frames
    defaultValue.map(value => {

        if(frame.properties[item].hasOwnProperty("properties")
        && frame.properties[item]["properties"].hasOwnProperty("@oneOf")
        && frame.properties[item]["properties"]["@oneOf"].hasOwnProperty("anyOf")) {
            let filledAnyOfs=frame.properties[item]["properties"]["@oneOf"]["anyOf"]
            filledAnyOfs.map(fAnyOf => {
                let title=fAnyOf.title
                let structure = {}

                if(value.hasOwnProperty(title)){ // match
                    let filledProperties={}

                    for(var props in fAnyOf.properties) {
                        let gatherProperties={}
                        for(var key in fAnyOf.properties[props]) {
                            gatherProperties[key] = fAnyOf.properties[props][key]
                        }
                        if(!gatherProperties.hasOwnProperty("default")) {
                            gatherProperties["default"] = value[title][props]
                        }
                        else if (!gatherProperties["default"]) {
                            gatherProperties["default"] = value[title][props]
                        }
                        filledProperties[props] = gatherProperties
                    }
                    //console.log("filledProperties",filledProperties)

                    /*@choice: {ui:widget: 'hidden'}
                    @type: {ui:widget: 'hidden'}
                    date_range: {ui:widget: 'hidden'}
                    value: {ui:widget: 'hidden', classNames: 'tdb__input mb-3 mt-3', ui:title: {…}}
                    [[Prototype]]: Object */

                    let newUiProperties={}
                    for(var uiProp in fAnyOf.uiProperties) {
                        let newKeys={}
                        if(uiProp === "@type"){
                            newUiProperties[uiProp]=fAnyOf.uiProperties[uiProp]
                            continue
                        }
                        if(uiProp === "@choice"){
                            newUiProperties[uiProp]=fAnyOf.uiProperties[uiProp]
                            continue
                        }
                        for(var key in fAnyOf.uiProperties[uiProp]) {
                            if(key === "ui:widget" && fAnyOf.uiProperties[uiProp][key] === 'hidden') {
                                // do not hide
                            }
                            else newKeys[key] = fAnyOf.uiProperties[uiProp][key]
                        }
                        newUiProperties[uiProp]=newKeys
                    }

                    //console.log("newUiProperties",newUiProperties)

                    let anyOfStructure={
                        type: "object",
                        title: title,
                        properties: filledProperties,
                        uiProperties: newUiProperties
                        //uiProperties: fAnyOf.uiProperties,
                        //default: value[title]
                    }

                    // anyOf structure
                    structure = {
                        type: 'object',
                        info: ONEOFVALUES,
                        title: item,
                        anyOf: [anyOfStructure]
                    }

                }
                // oneOf structure
                if(Object.keys(structure).length) {
                    //filledItems.push(structure)
                    filledItems.push({
                        properties: {
                            "@oneOf": structure,
                            "@type": {type: 'string', title: item, default: item}
                        }
                    })
                }
            })
        }

    })

    //console.log("filledItems", filledItems)

    // get filled items
    layout["items"] = filledItems

    /*let properties = {}
    // get additional items
    for(var props in frame.properties[item]) {
        if(props !== "default"){
            properties[props] = frame.properties[item][props]
        }
    }
    // additional items
    layout.additionalItems = properties */
    return layout
}


// view set oneOf Document type ui layout
export const getViewSetOneOfTypeUILayout = (frame, item, layout, uiFrame, formData) => {

    if(!isFilled(formData, item)) {
        uiLayout={
            "ui:widget" : 'hidden',
            "ui:options": {
                addable: false,
                orderable: false,
                removable: false
            },
            "ui:ArrayFieldTemplate" : HideArrayFieldTemplate
        }
        return uiLayout
    }

    let subDocuemntBg = extractUIFrameSubDocumentTemplate(uiFrame) ? extractUIFrameSubDocumentTemplate(uiFrame) : 'bg-secondary'
    let uiItemsLayout = {
        classNames: `card ${subDocuemntBg} p-4 mt-4 mb-4`

    }
    let uiLayout = {}, itemsLayout=[], itemCount=0

    //console.log("layout", layout)

    if(layout.hasOwnProperty("items") && Array.isArray(layout.items)) {

        layout.items.map(its => {
            if(its.hasOwnProperty("properties")
                && its["properties"].hasOwnProperty("@oneOf")
                && its["properties"]["@oneOf"].hasOwnProperty("anyOf")
                && Array.isArray(its["properties"]["@oneOf"]["anyOf"])){
            //if(its.hasOwnProperty("anyOf") && Array.isArray(its["anyOf"])) {
                let filledAnyOf=  its["properties"]["@oneOf"]["anyOf"][0] // at this point there will only be one value
                if(filledAnyOf.hasOwnProperty("uiProperties"))
                for(var ui in filledAnyOf["uiProperties"]) {
                    uiItemsLayout[ui]=filledAnyOf["uiProperties"][ui]
                }
                itemCount+=1
            }
        })
    }

    // get number of items layout, also set type hidden
    for(var count = 0; count < itemCount; count ++) {
        itemsLayout.push({
            "@oneOf": uiItemsLayout,
            "@type": {"ui:widget": 'hidden'}
        })
    }

    // if no items to display then hide in view mode
    if(itemsLayout.length === 0) {
        uiLayout={
            "ui:widget":'hidden',
            "ui:options": {
                addable: false,
                orderable: false,
                removable: false
            },
            "ui:ArrayFieldTemplate" : HideArrayFieldTemplate
        }
        return uiLayout
    }


    //console.log("uiItemsLayout", uiItemsLayout)



    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout= {
            //items: uiItemsLayout,
            items: itemsLayout,
            //additionalItems: frame.uiSchema[item],
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



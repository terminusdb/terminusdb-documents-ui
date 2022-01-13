
import React, {useState, useEffect} from "react"
import {getTitle, getDefaultValue, checkIfKey, ArrayFieldTemplate, getPrefix} from "./utils"
import {DOCUMENT, SELECT_STYLES, CREATE, VIEW, EDIT, SYS_UNIT_DATA_TYPE} from "./constants"
import {Form} from "react-bootstrap"
import {getProperties} from "./FrameHelpers"


export function choiceTypeFrames_OLD(fullFrame, frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect) {
    let properties={}, propertiesUI={}

    var oneOfArray=[]

    if(frame[item] && Array.isArray(frame[item]))  {
        for(var thing in frame[item][0]){
            let structure = {
                title: thing,
                properties: {
                    [thing]: {
                        type: "string",
                        info: frame[item][0][thing]
                    }
                }

            }
            oneOfArray.push(structure)
        }
    }

    var layout = {
        title: item,
        type: "object",
        description: `Choose one from the list ...`,
        anyOf: oneOfArray
    }

    //schema
    properties[item] = layout

    // create and edit
    function getField(props) {

        function handleTextInput(e) {
            props.onChange(e.target.value)
        }

        if (props.schema.info === SYS_UNIT_DATA_TYPE) {
            return <React.Fragment>
                <Form.Label>{props.name}</Form.Label>
            </React.Fragment>
        }

        return <React.Fragment>
            <Form.Label>{props.name}</Form.Label>
            <Form.Control
                placeholder={`Add a ${props.schema.info} for ${props.name} `}
                classNames="tdb__input"
                onBlur={handleTextInput}/>
        </React.Fragment>
    }

    // view
    function getViewField(props) {
        if (props.schema.info === SYS_UNIT_DATA_TYPE) {
            return <React.Fragment>
                <Form.Label>{props.name}</Form.Label>
            </React.Fragment>
        }

        return <React.Fragment>
            <Form.Label>{props.name}</Form.Label>
            <Form.Control
                value={props.schema.default}
                placeholder={`Add a ${props.schema.info} value for ${props.name} `}
                classNames="tdb__input"/>
        </React.Fragment>

    }

    propertiesUI[item] = {
        classNames: mode===VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        //"ui:placeholder": `Enter a string ${item} ...`,
        "ui:options": {
            addable: false,
            orderable: false,
            removable: false
        }
    }
    // property ui of any of fields
    if(frame[item] && Array.isArray(frame[item]))  {
        for(var thing in frame[item][0]){
            propertiesUI[thing] =  {
                //"ui:placeholder": `Select ${thing} ...`,
                classNames: mode===VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
                "ui:field": mode=== VIEW ? getViewField : getField,
                //"ui:widget": mode === VIEW && layout.anyOf? : true
            }
        }
    }




    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}

}

export function choiceTypeFrames(fullFrame, frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect) {
    let properties={}, propertiesUI={}

    let oneOfArray = []
    let extractedPrefix = getPrefix(fullFrame)

    if(frame[item] && Array.isArray(frame[item]))  {
        for(var thing in frame[item][0]){

            let newFrame = {[thing] : frame[item][0][thing]}

            let fieldProperties = getProperties(fullFrame, newFrame, uiFrame, documents, mode, formData, false, extractedPrefix, onTraverse, onSelect)

            let structure = {
                title: thing,
                properties: {
                    [thing]: frame[item][0][thing] === SYS_UNIT_DATA_TYPE ?
                        {
                            type: "string",
                            info: SYS_UNIT_DATA_TYPE
                        } : fieldProperties.properties[thing]
                }

            }
            oneOfArray.push(structure)

            propertiesUI[thing] = fieldProperties.uiSchema[thing]
        }
    }

    var layout = {
        title: item,
        type: "object",
        description: `Choose from the list ...`,
        anyOf: oneOfArray
    }

    //schema
    properties[item] = layout

    propertiesUI[item] = {
        classNames: mode===VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
    }

    // property ui of any of fields
    /*if(frame[item] && Array.isArray(frame[item]))  {
        for(var thing in frame[item][0]){
            propertiesUI[thing] =  {
                //"ui:placeholder": `Select ${thing} ...`,
                classNames: mode===VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
                //"ui:field": mode=== VIEW ? getViewField : getField,
                //"ui:widget": mode === VIEW && layout.anyOf? : true
            }
        }
    }*/


    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}

}


export function makeChoiceTypeFrames(fullFrame, frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect) {
    let madeFrames = choiceTypeFrames (fullFrame, frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect)
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}
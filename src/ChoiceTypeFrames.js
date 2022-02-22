
import React, {useState, useEffect} from "react"
import {getTitle, getDefaultValue, checkIfKey, ArrayFieldTemplate, getPrefix} from "./utils"
import {DOCUMENT, SELECT_STYLES, CREATE, VIEW, EDIT, ONEOFVALUES, SYS_UNIT_DATA_TYPE, DATA} from "./constants"
import {Form} from "react-bootstrap"
import {getProperties} from "./FrameHelpers"
import Select from 'react-select'


export function choiceTypeFrames(fullFrame, frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect, prefix) {

    let properties={}, propertiesUI={}


    let anyOfArray=[]
    let extractedPrefix = getPrefix(fullFrame)


    if(frame[item] && Array.isArray(frame[item]))  {
        for(var thing in frame[item][0]){
            let newFrame = {[thing] : frame[item][0][thing]}
            var fieldProperties = {}, structure = {}

            if(frame[item][0][thing] === SYS_UNIT_DATA_TYPE){
                structure = {
                    title: thing,
                    info: SYS_UNIT_DATA_TYPE,
                    type: "object",
                    properties: {
                        [thing]: {"type": "string"}
                    },
                    default: {[thing]: SYS_UNIT_DATA_TYPE }
                }
                function getSysUnit(props){
                    return <React.Fragment>{props.name}</React.Fragment>
                }
                propertiesUI[thing] = {"ui:field" : getSysUnit}
            }
            else if(frame[item][0][thing] !== SYS_UNIT_DATA_TYPE) {

                fieldProperties  = getProperties(fullFrame, newFrame, uiFrame, documents, mode, formData, false, extractedPrefix, onTraverse, onSelect)

                console.log("***fieldProperties ****",fieldProperties)

                structure = {
                    title: thing,
                    info: ONEOFVALUES,
                    properties:{
                        [thing]: fieldProperties.properties[thing]
                    }
                }

                propertiesUI[thing] = fieldProperties.uiSchema[thing]

            }

            anyOfArray.push(structure)

        }
    }

    console.log("***anyOfArray ****",formData,  anyOfArray)


    var layout = {
        title: item,
        type: "object",
        description: `Choose from the list ...`,
        anyOf: anyOfArray
    }

    //schema
    properties[item] = layout

    propertiesUI[item] = {
        classNames: mode===VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }


    return {properties, propertiesUI}

}

export function makeChoiceTypeFrames(fullFrame, frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect, prefix) {
    let madeFrames = choiceTypeFrames (fullFrame, frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect, prefix)
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}



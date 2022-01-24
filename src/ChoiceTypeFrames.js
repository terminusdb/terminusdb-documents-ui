
import React, {useState, useEffect} from "react"
import {getTitle, getDefaultValue, checkIfKey, ArrayFieldTemplate, getPrefix} from "./utils"
import {DOCUMENT, SELECT_STYLES, CREATE, VIEW, EDIT, SYS_UNIT_DATA_TYPE, DATA} from "./constants"
import {Form} from "react-bootstrap"
import {getProperties} from "./FrameHelpers"
import Select from 'react-select'


export function choiceTypeFrames(fullFrame, frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect, prefix) {

    let properties={}, propertiesUI={}

    /*let oneOfArray = [
        {
          properties: {
            lorem: {
              type: "string",
            },
          },
        },
        {
          properties: {
            ipsum: {
              type: "string",
            },
          },
        },
    ]*/


    let oneOfArray=[]
    let extractedPrefix = getPrefix(fullFrame)

    if(frame[item] && Array.isArray(frame[item]))  {
        for(var thing in frame[item][0]){

            let newFrame = {[thing] : frame[item][0][thing]}
            var fieldProperties = {}, structure = {}

            /*if(frame[item][0][thing] === SYS_UNIT_DATA_TYPE){
                structure = {
                    title: thing,
                    properties: {
                        type: "object",
                        info: SYS_UNIT_DATA_TYPE,
                        properties: {}
                    }
                }
            }
            else{*/
                if(frame[item][0][thing] !== SYS_UNIT_DATA_TYPE){
                    fieldProperties  = getProperties(fullFrame, newFrame, uiFrame, documents, mode, formData, false, extractedPrefix, onTraverse, onSelect)
                    structure = {
                        title: thing,
                        properties:{
                            /*[thing]: {
                                type: "string"
                            }*/
                            [thing]: fieldProperties.properties[thing]
                        }
                    }
                    propertiesUI[thing] = fieldProperties.uiSchema[thing]
                }
            //}

            //console.log("fieldProperties.properties", fieldProperties.properties)
            //console.log("structure //", structure)


            oneOfArray.push(structure)


        }
    }



    var layout = {
        title: item,
        type: "object",
        description: `Choose from the list ...`,
        anyOf: oneOfArray,
        //default: {}
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



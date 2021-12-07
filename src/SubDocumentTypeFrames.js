import React, {useState, useEffect} from "react"
import {getSubDocumentTitle, getSubDocumentDescription} from "./utils"
import {CREATE, DOCUMENT, VIEW} from "./constants"
import {Form} from "react-bootstrap"

export function subDocumentTypeFrames (frame, item, uiFrame, mode, formData, onTraverse) {
    let properties={}, propertiesUI={}
    var defaultValue

    // on edit or view
    if(mode !== CREATE && formData && formData.hasOwnProperty(item)){
        let filled= formData[item]
        if(Array.isArray(filled)){
            filled.map(val => {
                for(var key in val) {
                    if(frame.properties[key]){ // frame exists and we add a default
                        frame.properties[key]["default"] = val[key]
                    }
                }
            })
        }
        else { //json object
            for(var key in filled) {
                if(frame.properties[key]){ // frame exists and we add a default
                    frame.properties[key]["default"] = filled[key]
                }
            }
        }

    }


    let layout = {
        type: "object",
        title: item,
        info: "SUBDOCUMENT",
        properties: frame.properties
    }



    //schema
    properties[item] = layout


    propertiesUI[item] = {
        "ui:field": "collapsible",
        collapse: {
            field: "ObjectField",
            classNames:"tdb__subdocument__collapse_headers",
        },
        classNames: "card bg-secondary p-4 mt-4 mb-4",
        "ui:description": getSubDocumentDescription(item),
        "ui:title": getSubDocumentTitle(item),
    }

    // copy ui schema of data type to new ui
    for(var key in frame.uiSchema) {
        propertiesUI[item][key] = frame.uiSchema[key]
    }


    // for view mode - logic to click through on traverse
    if(mode === VIEW && properties[item].properties){
        for(var key in properties[item].properties) {

            function getSelect (props) {
                const [clicked, setClicked]=useState(false)

                useEffect(() => {
                    if(!clicked) return
                    if(onTraverse) onTraverse(clicked)
                }, [clicked])

                const handleClick = (id) => { // view if on traverse function defined
                    setClicked(id)
                }

                return <React.Fragment>
                    <Form.Label>{item}</Form.Label>
                    <span onClick={(e) => handleClick(properties[item].properties[props.name].default)}>
                        {properties[item].properties[props.name].default}
                    </span>
                </React.Fragment>
            }


            if(properties[item].properties[key].info === DOCUMENT) {
                propertiesUI[item][key]["ui:field"]=getSelect
            }
        }
    }




    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    // hide entire widget if not available in filled frame
    if(mode === VIEW && !formData.hasOwnProperty(item)) {
        propertiesUI[item] = {"ui:widget" : "hidden"}
    }


    return {properties, propertiesUI}
}


export const makeSubDocumentFrames = (frame, item, uiFrame, mode, formData, onTraverse) => {
    let madeFrames = subDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse)
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}
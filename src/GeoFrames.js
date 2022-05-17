import React, {useState, useEffect} from "react"
import {ArrayFieldTemplate, getSetTitle, getTitle, getOptionalSelect, checkIfKey, getDefaultValue, removeDefaultsFromSubDocumentFrame, removeDefaultsFromDataFrame} from "./utils"
import {CREATE, DATA, VIEW, EDIT, DOCUMENT, DIMENSION, ONEOFSUBDOCUMENTS, ONEOFCLASSES, GEO_CORDINATES} from "./constants"
import {Form} from "react-bootstrap"
import {MapViewer} from "./MapViewer"

/*
"coordinates": {
    "@class": "xsd:decimal",
    "@dimensions": 1,
    "@type": "Array"
},*/

/*
propertiesUI[item]={
            "items": {
                "ui:options" : {
                    addable: false,
                    orderable: false,
                    removable: false
                },
                classNames: "tdb__input mb-3 mt-3 form-label tdb__view__input"
            }
        }
        propertiesUI[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
        */

function multiDimensions (frame, item, uiFrame, mode, formData) {
    let properties={}, propertiesUI={}

    //[[125.6, 10.1], [125.6, 15.1]] // two or more prositions

    var  layout= {
        type: "array",
        title: item,
        [DIMENSION]: frame[DIMENSION],
        items: [{
            type: "array",
            items: [{type: "number"}, {type: "number"}]
        }],
        additionalItems: {
            type: "array",
            items: [{type: "number"}, {type: "number"}]
        }
    }
    if(mode === EDIT) {
        let filled = []
        if(formData.hasOwnProperty(item)){
            formData[item].map(fd => {
                let json = {
                    type: "array",
                    items: [{type: "number", default: fd[0]}, {type: "number", default: fd[1]}]
                }
                filled.push(json)
            })
        }
        else filled = [{ // when no filled value available
            type: "array",
            items: [{type: "number"}, {type: "number"}]
        }]

        layout= {
            type: "array",
            title: item,
            [DIMENSION]: frame[DIMENSION],
            items: filled
        }
    }
    properties[item] = layout


    //ui
    if(mode === CREATE) {
        propertiesUI[item] = {
            "items": {
                "ui:description": "you can enter multiple coordinates",
                "ui:options" : {
                    addable: true,
                    orderable: true,
                    removable: true
                },
                "items" : [
                    {
                        "ui:placeholder": `Enter latitude ...`,
                        classNames: "tdb__input  mt-3"
                    },
                    {
                        "ui:placeholder": `Enter longitude ...`,
                        classNames: "tdb__input  mb-3"
                    }
                ]
            },
            "additionalItems": {
                "items" : [
                    {
                        "ui:placeholder": `Enter latitude ...`,
                        classNames: "tdb__input  mt-3"
                    },
                    {
                        "ui:placeholder": `Enter longitude ...`,
                        classNames: "tdb__input  mb-3"
                    }
                ]
            }
        }
        propertiesUI[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
    }
    else if(mode === EDIT){
        propertiesUI[item] = {
            "items": {
                "ui:description": "you can enter multiple coordinates",
                "ui:options" : {
                    addable: true,
                    orderable: true,
                    removable: true
                },
                "items" : [
                    {
                        "ui:placeholder": `Enter latitude ...`,
                        classNames: "tdb__input  mt-3"
                    },
                    {
                        "ui:placeholder": `Enter longitude ...`,
                        classNames: "tdb__input  mb-3"
                    }
                ]
            },
            "additionalItems": {
                "items" : [
                    {
                        "ui:placeholder": `Enter latitude ...`,
                        classNames: "tdb__input  mt-3"
                    },
                    {
                        "ui:placeholder": `Enter longitude ...`,
                        classNames: "tdb__input  mb-3"
                    }
                ]
            }
        }
        propertiesUI[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
    }
    else {
        //[[51, 6], [54, -6]]
        function getMapComponent(props) {
            if(!formData.hasOwnProperty(item)) return <div/>
            let docs = []
            formData[item].map(fd => {
                let co = {lat: fd[0], lng: fd[1]}
                docs.push(co)
            })

            let polyLine = [{
                color: "#de7dd8",
                data: docs
            }]

            //let co = [{lat: formData[item][0], lng: formData[item][1]}]
            return <React.Fragment>
                <span>{item}</span>
                <MapViewer documents={docs} polyLine={polyLine} scrollWheelZoom={true}/>
            </React.Fragment>
        }
        propertiesUI["geometry_location"] = {"ui:field": getMapComponent}
    }




    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
        propertiesUI[item]["ui:title"] = item
    }

    return {properties, propertiesUI}
}


// example [125.6, 10.1]
function singleDimensions (frame, item, uiFrame, mode, formData) {

    let properties={}, propertiesUI={}

    var  layout= {
        type: "array",
        title: item,
        [DIMENSION]: frame[DIMENSION],
        items: [{type: "number"}, {type: "number"}]
    }

    if(mode !== CREATE && formData.hasOwnProperty(item)){
        var filledItems = []
        var count = 0, defaultValues=formData[item]
        defaultValues.map(value => {
            filledItems.push({
                type: "number",
                default: defaultValues[count]
            })
            count += 1
        })
        layout["items"]=filledItems
    }

    //schema
    properties[item] = layout

    if(mode !== VIEW) { // we do not allow to add extra on view mode
        //ui
        propertiesUI[item] = {
            "items": [
                {
                    "ui:placeholder": `Enter latitude ...`,
                    classNames: "tdb__input mb-3 mt-3"
                },
                {
                    "ui:placeholder": `Enter longitude ...`,
                    classNames: "tdb__input mb-3 mt-3"
                }
            ],
            "ui:options" : {
                addable: false,
                orderable: false,
                removable: false
            },
        }
        propertiesUI[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
    }
    else { //view
        function getMapComponent(props) {
            if(!formData.hasOwnProperty(item)) return <div/>
            let co = [{lat: formData[item][0], lng: formData[item][1]}]
            return <React.Fragment>
                <span>{item}</span>
                <MapViewer documents={co} scrollWheelZoom={true}/>
            </React.Fragment>
        }
        propertiesUI[item] = {"ui:field": getMapComponent}
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
        propertiesUI[item]["ui:title"] = item
    }

    return {properties, propertiesUI}
}

function geoTypeFrames (frame, item, uiFrame, mode, formData) {

    if(frame.hasOwnProperty(DIMENSION) && frame[DIMENSION] === 1)
        return singleDimensions(frame, item, uiFrame, mode, formData)
    else if(frame.hasOwnProperty(DIMENSION) && frame[DIMENSION] > 1)
        return multiDimensions(frame, item, uiFrame, mode, formData)
}


export const makeGeoFrames = (frame, item, uiFrame, mode, formData) => {
    let madeFrames = geoTypeFrames(frame, item, uiFrame, mode, formData)
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}
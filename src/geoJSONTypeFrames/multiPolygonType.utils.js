
import React from "react"
import {ArrayFieldTemplate} from "../utils"
import {MapViewer} from "../maps/mapViewer"
import {DIMENSION} from "../constants"

export const getMultiPolygonTypeFilledValues = (frame, formData, item) => {
    let filled = []
    if(formData.hasOwnProperty(item)){
        formData[item].map(fd => {
            let json = {
                type: "array",
                title: item,
                [DIMENSION]: frame[DIMENSION],
                items: [{
                    type: "array",
                    items: [{type: "number", default: fd[0]}, {type: "number", default: fd[1]}]
                }],
                additionalItems: {
                    type: "array",
                    items: [{type: "number"}, {type: "number"}]
                }
            }
            filled.push(json)
        })
    }
    else filled = [{
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
    }]

    return filled
}


export function getMultiPolygonCreateEditUI (item) {
    let ui={}
    let uiPolygon = {
        "ui:options" : {
            addable: true,
            orderable: true,
            removable: true
        },
        "items": [
                {
                    "ui:placeholder": `Enter latitude ...`,
                    classNames: "tdb__input  mt-3"
                },
                {
                    "ui:placeholder": `Enter longitude ...`,
                    classNames: "tdb__input  mb-3"
                }
            ]
        ,
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
    uiPolygon["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
    
    
    //ui[item] = uiPolygon
    ui[item] = {
        "items": {
            "ui:description": "Add another polygon",
            "ui:options" : {
                addable: true,
                orderable: true,
                removable: true
            },
            "items" : uiPolygon
        },
        "additionalItems": {
            "ui:description": "Add another polygon",
            "items" : uiPolygon
        }
    }
    ui[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
    return ui
}

export function getMultiPolygonTypeViewUI (formData, item, dimension) {
    let ui={}
 
    function getMapComponent(props) {
        if(!formData.hasOwnProperty(item)) return <div/>
        let docs = []
        formData[item].map(fd => {
            docs.push(fd)
        })

        let polyLine = {
            color: "black",
            data: docs
        }

        //let co = [{lat: formData[item][0], lng: formData[item][1]}]
        return <React.Fragment>
            <span>{item}</span>
            {dimension===3 && <MapViewer documents={docs} polygon={polyLine} scrollWheelZoom={true}/>}
        </React.Fragment>
    }
    ui[item] = {"ui:field": getMapComponent}
    return ui
}




/*export function getPolygonCreateEditUI (item) {
    let ui={}
    ui[item] = {
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
    ui[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
    return ui
}*/



import React from "react"
import {ArrayFieldTemplate} from "../utils"
import {MapViewer} from "../maps/mapViewer"

// get filled values from formData 
export function getLineStringTypeFilledValues (formData, item) {
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

    return filled
}

// get UI layout for create mode
export function getLineStringCreateEditUI (item) {
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
}


// get UI layout for view mode
export function getLineStringTypeViewUI (formData, item, dimension) {
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
            {dimension===2 && <MapViewer documents={docs} polyLine={polyLine} scrollWheelZoom={true}/>}
            {dimension===3 && <MapViewer documents={docs} polygon={polyLine} scrollWheelZoom={true}/>}
        </React.Fragment>
    }
    ui[item] = {"ui:field": getMapComponent}
    return ui
}



import React from "react"
import {ArrayFieldTemplate} from "../utils"
import {MapViewer} from "../maps/mapViewer"

// get form data from single dimensions to display in view or edit modes
export function getPointTypeFilledValues (formData, item) {
    let filledItems = []
    let count = 0, defaultValues=formData[item]
    defaultValues.map(value => {
        filledItems.push({
            type: "number",
            default: defaultValues[count]
        })
        count += 1
    })
    return filledItems
}

// get ui layout for single dimensions in create or edit modes
export function getPointTypeCreateEditUI (item) {
    let ui = {}
    ui[item] = {
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
        }
    }
    ui[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
    return ui
}

// get ui layout for single dimensions in view mode
export function getPointTypeViewUI (formData, item) {
    let ui = {}
    function getMapComponent(props) {
        if(!formData.hasOwnProperty(item)) return <div/>
        let cordinates = [{lat: formData[item][0], lng: formData[item][1]}]
        return <React.Fragment>
            <span>{item}</span>
            <MapViewer documents={cordinates} scrollWheelZoom={true}/>
        </React.Fragment>
    }
    ui[item] = {"ui:field": getMapComponent}
    return ui
}
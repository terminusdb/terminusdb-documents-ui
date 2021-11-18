
import {getFieldTitle} from "./utils"

function DataTypeFrames (frame, item) {

    let properties={}, propertiesUI={}
    var uiDisable=false

    var layout = {
        type: 'string',
        info: "DATA"
    }

    //schema
    properties[item] = layout

    propertiesUI[item] = {
        "ui:placeholder": frame[item],
        "ui:disabled": uiDisable,
        "ui:title": getFieldTitle(item, false)
    }

    return {properties, propertiesUI}

}

export function getDataTypeFrames (documentObject, item) {

    let frame = DataTypeFrames (documentObject, item)

    let required=item

    let properties = frame.properties
    let propertiesUI = frame.propertiesUI
    return {properties, propertiesUI, required}
}

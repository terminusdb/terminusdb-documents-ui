import {ArrayFieldTemplate} from "./utils"

export function makeSetTypeFrames (setFrames, item, uiFrame) {
    let properties={}, propertiesUI={}

    var layout = {
        type: "array",
        items: [
            {
                type: "object",
                properties: setFrames.properties
            }
        ],
        additionalItems: {
            type: "object",
            properties: setFrames.properties
        }
    }

    //schema
    properties[item] = layout

    //default ui:schema
    propertiesUI[item] = {
        "items": setFrames.uiSchema,
        "additionalItems": setFrames.uiSchema,
        "ui:options": {
            addable: true,
            orderable: false,
            removable: true
        }
    }

    propertiesUI[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate


    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}
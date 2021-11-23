import React from "react"
import {getSubDocumentTitle, getSubDocumentDescription} from "./utils"


export function subDocumentTypeFrames (frame, item, uiFrame) {
    let properties={}, propertiesUI={}

    let layout = {
        type: "array",
        title: item,
        info: "SUBDOCUMENT",
        items: [
            {
                type: "object",
                properties: frame.properties,
                //dependencies: getDependencies(subDocumentFrame.properties),
                //required: makeSubFramesRequired(subDocumentFrame)
            }
        ]

    }

    //schema
    properties[item] = layout

    //default ui:schema
    propertiesUI[item] = {
        "ui:field": "collapsible",
        collapse: {
            field: "ArrayField",
            classNames:"tdb__subdocument__collapse_headers",
        },
        classNames: "card bg-secondary p-4 mt-4 mb-4",
        "ui:description": getSubDocumentDescription(item),
        "ui:title": getSubDocumentTitle(item),
        "ui:options": {
            addable: true,
            orderable: false,
            removable: false
        },
        items: frame.uiSchema,

    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}

/*
{
  "lives_in": {
          "classNames": "bg-success"
    },
    "name": {
        "ui:field": test
    }
}
*/
/*
{
    "name": {
        "classNames": "bg-success"
    }
}
*/


export const makeSubDocumentFrames = (frame, item, uiFrame) => {
    let madeFrames = subDocumentTypeFrames(frame, item, uiFrame)
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}
import {ArrayFieldTemplate} from "./utils"
import {CREATE, DATA} from "./constants"

function removeDefaultsFromSubDocumentFrame (json) {
    // remove default values and get them from form Data
    var newJson=json
    for(var key in newJson){
        for (var item in newJson[key]){
            if(item === "default") delete newJson[key][item]
        }
    }
    return newJson
}

function removeDefaultsFromDataFrame (json) {
    // remove default values and get them from form Data
    var newJson=json
    for(var key in newJson){
        if(key === "default") delete newJson[key]
    }
    return newJson
}

export function makeSetSubDocuments (setFrames, item, uiFrame, mode, formData) {
    let properties={}, propertiesUI={}

    var  layout= {
        type: "array",
        items: [
            {
                type: "object",
                properties: setFrames.properties[item]["properties"]
            }
        ],
        additionalItems: {
            type: "object",
            properties: setFrames.properties[item]["properties"]
        }
    }


    if(mode !== CREATE && formData.hasOwnProperty(item)){
        var filledItems = []
        let subFrames = removeDefaultsFromSubDocumentFrame(setFrames.properties[item]["properties"])
        if(formData.hasOwnProperty(item)) {
            var count = 0
            var defaultValues=formData[item]
            defaultValues.map(value => {
                filledItems.push({
                    type: "object",
                    properties: setFrames.properties[item]["properties"],
                    default: defaultValues[count]
                })
                count += 1
            })
        }
        layout["items"]=filledItems
    }

    //schema
    properties[item] = layout

    //default ui:schema
    propertiesUI[item] = {
        "items": setFrames.uiSchema[item],
        "additionalItems": setFrames.uiSchema[item],
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

export function makeSetData (setFrames, item, uiFrame, mode, formData) {
    let properties={}, propertiesUI={}

    var  layout= {
        type: "array",
        items: [
             setFrames.properties[item]
        ],
        additionalItems: setFrames.properties[item]
    }


    if(mode !== CREATE && formData.hasOwnProperty(item)){
        var filledItems = []
        let subFrames = removeDefaultsFromDataFrame(setFrames.properties[item]["properties"])
        if(formData.hasOwnProperty(item)) {
            var count = 0
            var defaultValues=formData[item]
            defaultValues.map(value => {
                filledItems.push({
                    type: "string",
                    info: DATA,
                    title: item,
                    default: defaultValues[count]
                })
                count += 1
            })
        }
        layout["items"]=filledItems
        layout["additionalItems"]={
            type: "string",
            info: DATA,
            title: item,
        }
    }

    //schema
    properties[item] = layout

    //default ui:schema
    propertiesUI[item] = {
        "items": setFrames.uiSchema[item],
        "additionalItems": setFrames.uiSchema[item],
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
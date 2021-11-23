import React from "react"
import {makeDataTypeFrames} from "./DataTypeFrames"
import {makeSubDocumentFrames} from "./SubDocumentTypeFrames"
import {isDataType, isSubDocumentType} from "./utils"

function constructSubDocumentFrame (frame, item, classType) {

    let nestedFrames = getProperties(frame)
    let newProperties=nestedFrames.properties, newUISchema=nestedFrames.uiSchema
    // add type of subdocument
    newProperties["@type"] = {
        type: "string",
        title: classType,
        info: "DATA",
        default: classType
    }
    nestedFrames.properties=newProperties
    // make type of sub document hidden
    newUISchema["@type"]={"ui:widget": "hidden"}
    nestedFrames.uiSchema=newUISchema
    return nestedFrames
}


export function getProperties (frame, uiFrame, subDocumentFrame, mode) {

    let properties = {}, propertiesUI = {}, dependencies= {}, required = [], fields={}

    for(var item in frame) {
        if(item == "@key") continue
        else if(item == "@type") continue
        else if(frame[item] && isDataType(frame[item])) { // datatype properties like xsd:/ xdd:
            let frames = makeDataTypeFrames(frame, item, uiFrame)
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(frames.required)
        }
        else if(frame[item] && isSubDocumentType(frame[item], subDocumentFrame)) { //subdocument
            let newFrame = constructSubDocumentFrame(subDocumentFrame, item, frame[item])
            let frames = makeSubDocumentFrames(newFrame, item, uiFrame)
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
        }
    }

    return {
        properties: properties,
        required: required,
        dependencies: dependencies,
        uiSchema: propertiesUI,
        fields: fields
    }

}
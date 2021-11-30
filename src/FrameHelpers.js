import React from "react"
import {makeDataTypeFrames} from "./DataTypeFrames"
import {makeSubDocumentFrames} from "./SubDocumentTypeFrames"
import {makeSetTypeFrames} from "./SetTypeFrames"
import {isDataType, isSubDocumentType, isOptionalType, isSetType} from "./utils"
import {TDB_SCHEMA} from "./constants"

function constructOptionalFrame(frame, item) {
    let newFrame = {[item]: {[item]: frame["@class"]}}
    return newFrame
}

function constructSetFrame(frame, item) {
    let newFrame = {[item]: {[item]: frame["@class"]}}
    return newFrame
}


function constructSubDocumentFrame (frame, uiFrame, item, classType) {
    let document = `${TDB_SCHEMA}${item}`
    let nestedFrames = getProperties(frame, uiFrame, document)
    let newProperties=nestedFrames.properties, newUISchema=nestedFrames.uiSchema
    // add type of subdocument
    newProperties["@type"] = {
        type: "string",
        title: classType,
        default: classType
    }
    nestedFrames.properties=newProperties
    // make type of sub document hidden
    newUISchema["@type"]={"ui:widget": "hidden"}
    nestedFrames.uiSchema=newUISchema
    return nestedFrames
}


export function getProperties (fullFrame, uiFrame, document, mode) {

    let properties = {}, propertiesUI = {}, dependencies= {}, required = [], fields={}
    let frame=fullFrame[document]


    for(var item in frame) {
        if(item == "@key") continue
        else if(item == "@type") continue
        else if(frame[item] && isDataType(frame[item])) { // datatype properties like xsd:/ xdd:
            let frames = makeDataTypeFrames(frame, item, uiFrame)

            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(frames.required)
        }
        else if (frame[item] && isOptionalType(frame[item])) { // optional
            let newFrame = constructOptionalFrame(frame[item], item)
            let optionalFrames = getProperties(newFrame, uiFrame, item)

            //set properties and ui
            properties[item] = optionalFrames.properties[item]
            propertiesUI[item] = optionalFrames.uiSchema[item]
        }
        else if (frame[item] && isSetType(frame[item])) { //set
            let newFrame = constructSetFrame(frame[item], item)
            let setFrames = getProperties(newFrame, uiFrame, item)

            let frames=makeSetTypeFrames(setFrames, item, uiFrame)

            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
        }
        else if(frame[item] && isSubDocumentType(frame[item], fullFrame)) { //subdocument
            //let subDocumentFrame=fullFrame[`${TDB_SCHEMA}${frame[item]["@class"]}`]
            let newFrame = constructSubDocumentFrame(fullFrame, uiFrame, frame[item]["@class"], frame[item])
            let frames = makeSubDocumentFrames(newFrame, item, uiFrame)

            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(item)
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
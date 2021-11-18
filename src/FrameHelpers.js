import React from "react"
import {getDataTypeFrames} from "./DataTypeFrames"
import {isDataType} from "./utils"

export function getProperties (frame) {

    let properties = {}, propertiesUI = {}, dependencies= {}, required = [], fields={}

    for(var item in frame) {
        if(item == "@key") continue
        if(item == "@type") continue
        if(frame[item] && isDataType(frame[item])) { // datatype properties like xsd:/ xdd:
            let frames = getDataTypeFrames(frame, item)
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(frames.required)
        }
    }

    return {properties: properties, required: required, dependencies: dependencies, uiSchema: propertiesUI, fields: fields}

}
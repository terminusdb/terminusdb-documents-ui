import React, {useState, useEffect} from "react"
import {Form} from "react-bootstrap"
import {makeDataTypeFrames} from "./dataTypeFrames/dataTypeFrames"
import {makeSysDataTypeFrames} from "./sysDataTypeFrames/sysDataTypeFrames"
import {makeSubDocumentFrames} from "./subDocumentTypeFrames/subDocumentTypeFrames"
import {makeOptionalTypeFrames} from "./optionalTypeFrames/optionalTypeFrames"
import {makeDocumentTypeFrames} from "./documentTypeFrames/documentTypeFrames"
import {makeSetTypeFrames} from "./setTypeFrames/setTypeFrames"
import {makeListTypeFrames} from "./listTypeFrames/listTypeFrames"
import {makeEnumTypeFrames} from "./enumTypeFrames/enumTypeFrames"
import {makeChoiceSubDocumentTypeFrames} from "./choiceSubDocumentTypeFrames/choiceSubDocumentTypeFrames"
import {makeChoiceDocumentTypeFrames} from "./choiceDocumentTypeFrames/choiceDocumentTypeFrames"
import {makeOneOfTypeFrames} from "./oneOfTypeFrames/oneOfTypeFrames"
import {makeDocumentationFrames} from "./makeDocumentationFrames"
import {
    getModifiedGeoFrame, 
    isChoiceSubDocumentType, 
    isChoiceDocumentType, 
    isDataType,
    isSysDataType,
    isPointType, 
    isSubDocumentType, 
    isOptionalType, 
    isSetType, 
    isDocumentType, 
    isEnumType, 
    isListType, 
    isSubDocumentAndClassType, 
    isDocumentClassArrayType,
    isGeoJSONTypeSet,
    extractDocumentation
} from "./utils"
import {
    DOCUMENTATION, 
    SUBDOCUMENT_CONSTRUCTED_FRAME, 
    COORDINATES
} from "./constants"
import {makeGeoCordinateFrames, makeMultipleGeoCordinateFrames} from "./GeoCordinatesTypeFrames"
//import {makeGeoFrames} from "./GeoFrames"
import {makeGeoFrames} from "./geoJSONTypeFrames/geoFrames"
import {makeGeoCollectionFrames} from "./geoJSONTypeFrames/geoCollectionFrames"

function constructOptionalFrame (frame, item) {
    let optionalFrame = {[item]: frame["@class"]}
    return optionalFrame
}

function constructSetFrame (frame, item) {
    let setFrame = {[item]: frame["@class"]}
    return setFrame
}

function constructCollectionFrame(fullFrame, item) {
    if(fullFrame.hasOwnProperty(item)) {
        return {[item]: fullFrame[item]}
    }
    return {}
}

/*
@id: "SetSubDocumentType/51f602b5529f8c94e56a38d456e584cd0ab63cee6cc9069bf9ee81e7970cfd56"
@type: "SetSubDocumentType"
subDoc: (2) [{…}, {…}]*/
function constructSubDocumentFrame (fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    let subDocumentName=item
    let subDocument = `${subDocumentName}`
    let subDocumentFormData=(formData && formData.hasOwnProperty(current)) ? formData[current] : {}
    let constructedFrame=fullFrame[subDocument]
    if(Object.keys(subDocumentFormData).length === 0
        && Array.isArray(formData)) {
            constructedFrame["info"]=SUBDOCUMENT_CONSTRUCTED_FRAME
    } 
    let documentation= extractDocumentation(fullFrame, item)
    let subDocumentFrames = getProperties(
            fullFrame,
            current,
            constructedFrame,
            uiFrame,
            mode,
            subDocumentFormData,
            onTraverse,
            onSelect,
            documentation 
        )
    let newSubDocumentFrames = {}
    // add subdocument type as @type field
    subDocumentFrames.properties["@type"]={
        type: "string",
        title: subDocumentName,
        default: subDocumentName
    }
    // hide @type field
    subDocumentFrames.uiSchema["@type"]={"ui:widget": "hidden"}
    //console.log("subDocumentFrames", subDocumentFrames)
    return subDocumentFrames
}


export function getProperties (fullFrame, current, frame, uiFrame, mode, formData, onTraverse, onSelect, documentation) {

    let properties = {}, propertiesUI = {}, dependencies= {}, required = [], fields={}

    for(var item in frame) {

        if(item === "asset_history") {
            //console.log("ubicación ")
        }

        if(item === "@key") continue
        else if(item === "@type") continue
        else if(item === "@subdocument") continue
        else if(item === DOCUMENTATION) {
            let frames = makeDocumentationFrames(frame[item], item, uiFrame)
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
        }
        else if(item === "@oneOf") { // datatype properties like xsd:/ xdd:
            let frames = makeOneOfTypeFrames(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect)
            // current is the proeprty name - instead of @oneOf
            properties["@oneOf"] = frames.properties[current]
            propertiesUI["@oneOf"] = frames.propertiesUI[current]
        }
        else if(frame[item] && isSysDataType(frame[item])) { // datatype properties like sys:JSON
            let frames = makeSysDataTypeFrames(frame, item, uiFrame, mode, formData, documentation)
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(item)
        }
        else if(frame[item] && isDataType(frame[item])) { // datatype properties like xsd:/ xdd:
            let frames = makeDataTypeFrames(frame, item, uiFrame, mode, formData, documentation)
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(item)
        }
        else if (frame[item] && isChoiceSubDocumentType(frame[item])) { // choice Sub Document
            //let constructedChoiceFrame = constructOptionalFrame(frame[item], item)
            //console.log("constructedChoiceFrame", constructedChoiceFrame)
            let frames = makeChoiceSubDocumentTypeFrames(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation)
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(item)
        }
        else if (frame[item] && isChoiceDocumentType(frame[item])) { // choice Document
            let frames = makeChoiceDocumentTypeFrames(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation)
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(item) 
        }
        else if (frame[item] && isOptionalType(frame[item])) { // optional 
            let constructedOptionalFrame = constructOptionalFrame(frame[item], item)
            let optionalProperties = getProperties(fullFrame, item, constructedOptionalFrame, uiFrame, mode, formData, onTraverse, onSelect, documentation)
            let optionalFrames = makeOptionalTypeFrames(optionalProperties, item, uiFrame, mode, formData)

            //set properties and ui
            properties[item] = optionalFrames.properties[item]
            propertiesUI[item] = optionalFrames.propertiesUI[item]
        }
        else if(frame[item] && isPointType(frame[item], fullFrame)) {
            let subDocumentName=frame[item].hasOwnProperty("@class") ? frame[item]["@class"] : null
            let subDocumentFrame = constructSubDocumentFrame(fullFrame, item, frame[item], subDocumentName, uiFrame, mode, formData, onTraverse, onSelect)
            let pointFrames = makeSubDocumentFrames(subDocumentFrame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation)
            //set properties and ui
            properties[item] = pointFrames.properties[item]
            propertiesUI[item] = pointFrames.propertiesUI[item]

        }
        else if (frame[item] && (item === COORDINATES) && isDocumentClassArrayType(frame[item])) { // coordinates for geo json
            let newGeoFrame=getModifiedGeoFrame(frame)
            let geoFrame = makeGeoFrames(newGeoFrame, item, uiFrame, mode, formData, documentation)
            //set properties and ui
            properties[item] = geoFrame.properties[item]
            propertiesUI[item] = geoFrame.propertiesUI[item]
        }
        else if (frame[item] && isSetType(frame[item]) && isGeoJSONTypeSet(frame, mode)) { //geo json set
            let newGeoCollectionFrame=constructCollectionFrame(fullFrame, frame[item]["@class"])
            let geoCollectionFrame=makeGeoCollectionFrames(newGeoCollectionFrame, item, uiFrame, mode, formData)
            //set properties and ui
            properties[item] = geoCollectionFrame.properties[item]
            propertiesUI[item] = geoCollectionFrame.propertiesUI[item]
        }
        else if(frame[item] && isSubDocumentType(frame[item])) { //subdocument
            let subDocumentName=frame[item].hasOwnProperty("@class") ? frame[item]["@class"] : null
            let subDocumentFrame = constructSubDocumentFrame(fullFrame, item, frame[item], subDocumentName, uiFrame, mode, formData, onTraverse, onSelect)
            let frames = makeSubDocumentFrames(subDocumentFrame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation)
            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            //if(frames.hasOwnProperty("required"))
            //required = item
        }
        else if (frame[item] && isSubDocumentAndClassType(frame[item], fullFrame)) { //subdocument and type class
            let newFrame=isSubDocumentAndClassType(frame[item], fullFrame)
            let classType=frame[item]
            let subDocumentFrames = constructSubDocumentFrame(fullFrame, item, newFrame, classType, uiFrame, mode, formData, onTraverse, onSelect)
            //console.log("newFrame", subDocumentFrames)
            let frames = makeSubDocumentFrames(subDocumentFrames, item, uiFrame, mode, formData, onTraverse, onSelect)

            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
        }
        else if(frame[item] && isDocumentType(frame[item], fullFrame)) { //link documents
            let frames = makeDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation)

            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(item)
        }
        else if (frame[item] && isSetType(frame[item])) { //set
            let constructedSetFrame = constructSetFrame(frame[item], item)

            let setProperties = getProperties(fullFrame, item, constructedSetFrame, uiFrame, mode, formData, onTraverse, onSelect, documentation)
       
            let setFrames = makeSetTypeFrames(setProperties, item, uiFrame, mode, formData, onTraverse, onSelect, fullFrame, documentation)

            //set properties and ui
            properties[item] = setFrames.properties[item]
            propertiesUI[item] = setFrames.propertiesUI[item]

        }
        else if (frame[item] && isListType(frame[item])) { //list
            let constructedListFrame = constructSetFrame(frame[item], item)

            let setProperties = getProperties(fullFrame, item, constructedListFrame, uiFrame, mode, formData, onTraverse, onSelect, documentation)

            let setFrames = makeListTypeFrames(setProperties, item, uiFrame, mode, formData, onTraverse, onSelect, fullFrame, documentation)

            //set properties and ui
            properties[item] = setFrames.properties[item]
            propertiesUI[item] = setFrames.propertiesUI[item]

        }
        else if (frame[item] && isEnumType(frame[item])) { // enums
            let frames = makeEnumTypeFrames(frame, item, uiFrame, mode, formData, documentation)

            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(item)
        }
    }

    return {
        properties: properties,
        required: required,
        //dependencies: dependencies,
        uiSchema: propertiesUI,
        //fields: fields
    }

}

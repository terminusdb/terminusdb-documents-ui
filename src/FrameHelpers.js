import React, {useState, useEffect} from "react"
import {Form} from "react-bootstrap"
import {makeDataTypeFrames} from "./dataTypeFrames/dataTypeFrames"
import {makeSubDocumentFrames} from "./subDocumentTypeFrames/subDocumentTypeFrames"
import {makeOptionalTypeFrames} from "./optionalTypeFrames/optionalTypeFrames"
import {makeDocumentTypeFrames} from "./documentTypeFrames/documentTypeFrames"
import {makeSetTypeFrames} from "./setTypeFrames/setTypeFrames"
import {makeListTypeFrames} from "./listTypeFrames/listTypeFrames"
import {makeEnumTypeFrames} from "./enumTypeFrames/enumTypeFrames"
import {makeChoiceDocumentTypeFrames} from "./choiceDocumentTypeFrames/choiceDocumentTypeFrames"
import {makeOneOfTypeFrames} from "./oneOfTypeFrames/oneOfTypeFrames"
//import {makeSetSubDocuments, makeSetData, makeSetDocuments} from "./SetTypeFrame Ref "
import {makeSetOneOfClassFrames} from "./SetTypeClassFrames"
//import {makeDocumentTypeFrames} from "./DocumentTypeFrames"
//import {makeEnumTypeFrames} from "./EnumTypeFrames"
import {extractPrefix, isChoiceDocumentType, isDataType,isPointType, isSubDocumentType, isOptionalType, isSetType, isDocumentType, isEnumType, isListType, isSubDocumentAndClassType, isDocumentClassArrayType} from "./utils"
import {DOCUMENT, ENUM, DATA, LONGITUDE, LATITUDE, VIEW, GEO_CORDINATES, COORDINATES, SUBDOCUMENT, ONEOFCLASSES} from "./constants"
import {OptionalDocumentTypeFrames} from "./OptionalTypeFrames"
import {makeChoiceTypeFrames} from "./ChoiceTypeFrames"
import {makeGeoCordinateFrames, makeMultipleGeoCordinateFrames} from "./GeoCordinatesTypeFrames"
import {makeOneOfClassFrames} from "./OneOfClassFrames copy"
import {makeGeoFrames} from "./GeoFrames"

function constructOptionalFrame (frame, item) {
    let optionalFrame = {[item]: frame["@class"]}
    return optionalFrame
}

function constructSetFrame (frame, item) {
    let optionalFrame = {[item]: frame["@class"]}
    return optionalFrame
}

function constructSubDocumentFrame (fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    let subDocumentName=item
    let subDocument = `${extractPrefix(fullFrame)}${subDocumentName}`
    let subDocumentFormData=(formData && formData.hasOwnProperty(current)) ? formData[current] : {}
    let subDocumentFrames = getProperties(
            fullFrame,
            current,
            fullFrame[subDocument],
            uiFrame,
            mode,
            subDocumentFormData,
            onTraverse,
            onSelect
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


export function getProperties (fullFrame, current, frame, uiFrame, mode, formData, onTraverse, onSelect) {

    let properties = {}, propertiesUI = {}, dependencies= {}, required = [], fields={}


    for(var item in frame) {

        if(item === "@key") continue
        else if(item === "@type") continue
        else if(item === "@subdocument") continue
        else if(item === "@oneOf") { // datatype properties like xsd:/ xdd:
            let frames = makeOneOfTypeFrames(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect)
            // current is the proeprty name - instead of @oneOf
            properties["@oneOf"] = frames.properties[current]
            propertiesUI["@oneOf"] = frames.propertiesUI[current]
        }
        else if(frame[item] && isDataType(frame[item])) { // datatype properties like xsd:/ xdd:
            let frames = makeDataTypeFrames(frame, item, uiFrame, mode, formData)
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(item)
        }
        else if (frame[item] && isChoiceDocumentType(frame[item])) { // choice Document
            //let constructedChoiceFrame = constructOptionalFrame(frame[item], item)
            //console.log("constructedChoiceFrame", constructedChoiceFrame)
            let frames = makeChoiceDocumentTypeFrames(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect)
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(item)
        }
        else if (frame[item] && isOptionalType(frame[item])) { // optional
            let constructedOptionalFrame = constructOptionalFrame(frame[item], item)
            let optionalProperties = getProperties(fullFrame, item, constructedOptionalFrame, uiFrame, mode, formData, onTraverse, onSelect)
            let optionalFrames = makeOptionalTypeFrames(optionalProperties, item, uiFrame, mode, formData)

            //set properties and ui
            properties[item] = optionalFrames.properties[item]
            propertiesUI[item] = optionalFrames.propertiesUI[item]
        }
        else if(frame[item] && isPointType(frame[item], fullFrame, extractPrefix(fullFrame))) {
            let subDocumentName=frame[item].hasOwnProperty("@class") ? frame[item]["@class"] : null
            let subDocumentFrame = constructSubDocumentFrame(fullFrame, item, frame[item], subDocumentName, uiFrame, mode, formData, onTraverse, onSelect)
            let pointFrames = makeSubDocumentFrames(subDocumentFrame, item, uiFrame, mode, formData, onTraverse, onSelect)
            //set properties and ui
            properties[item] = pointFrames.properties[item]
            propertiesUI[item] = pointFrames.propertiesUI[item]

        }
        else if (frame[item] && (item === COORDINATES) && isDocumentClassArrayType(frame[item])) { // coordinates for geo json
            let geoFrame = makeGeoFrames(frame[item], item, uiFrame, mode, formData)
            //set properties and ui
            properties[item] = geoFrame.properties[item]
            propertiesUI[item] = geoFrame.propertiesUI[item]
        }
        else if(frame[item] && isSubDocumentType(frame[item])) { //subdocument
            let subDocumentName=frame[item].hasOwnProperty("@class") ? frame[item]["@class"] : null
            let subDocumentFrame = constructSubDocumentFrame(fullFrame, item, frame[item], subDocumentName, uiFrame, mode, formData, onTraverse, onSelect)
            let frames = makeSubDocumentFrames(subDocumentFrame, item, uiFrame, mode, formData, onTraverse, onSelect)
            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            //if(frames.hasOwnProperty("required"))
            //required = item
        }
        else if (frame[item] && isSubDocumentAndClassType(frame[item], fullFrame, extractPrefix(fullFrame))) { //subdocument and type class
            let newFrame=isSubDocumentAndClassType(frame[item], fullFrame, extractPrefix(fullFrame))
            let classType=frame[item]
            let subDocumentFrames = constructSubDocumentFrame(fullFrame, item, newFrame, classType, uiFrame, mode, formData, onTraverse, onSelect)
            console.log("newFrame", subDocumentFrames)
            let frames = makeSubDocumentFrames(subDocumentFrames, item, uiFrame, mode, formData, onTraverse, onSelect)

            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
        }
        else if(frame[item] && isDocumentType(frame[item], fullFrame, extractPrefix(fullFrame))) { //link documents
            let frames = makeDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect)

            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(item)
        }
        else if (frame[item] && isSetType(frame[item])) { //set
            let constructedSetFrame = constructSetFrame(frame[item], item)

            let setProperties = getProperties(fullFrame, item, constructedSetFrame, uiFrame, mode, formData, onTraverse, onSelect)

            let setFrames = makeSetTypeFrames(setProperties, item, uiFrame, mode, formData, onTraverse, onSelect)

            //set properties and ui
            properties[item] = setFrames.properties[item]
            propertiesUI[item] = setFrames.propertiesUI[item]

        }
        else if (frame[item] && isListType(frame[item])) { //list
            let constructedListFrame = constructSetFrame(frame[item], item)

            let setProperties = getProperties(fullFrame, item, constructedListFrame, uiFrame, mode, formData, onTraverse, onSelect)

            let setFrames = makeListTypeFrames(setProperties, item, uiFrame, mode, formData, onTraverse, onSelect)

            //set properties and ui
            properties[item] = setFrames.properties[item]
            propertiesUI[item] = setFrames.propertiesUI[item]

        }
        else if (frame[item] && isEnumType(frame[item])) { // enums

            let frames = makeEnumTypeFrames(frame, item, uiFrame, mode, formData)

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


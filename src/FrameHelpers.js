import React, {useState, useEffect} from "react"
import {Form} from "react-bootstrap"
import {makeDataTypeFrames} from "./DataTypeFrames"
import {makeSubDocumentFrames} from "./SubDocumentTypeFrames"
import {makeSetSubDocuments, makeSetData, makeSetDocuments} from "./SetTypeFrames"
import {makeListData, makeListDocuments, makeListSubDocuments} from "./ListTypeFrames"
import {makeDocumentTypeFrames} from "./DocumentTypeFrames"
import {makeEnumTypeFrames} from "./EnumTypeFrames"
import {isDataType, isSubDocumentType, isOptionalType, isSetType, isDocumentType, isEnumType, isListType, isSubDocumentAndClassType} from "./utils"
import {DOCUMENT, ENUM, DATA, LONGITUDE, LATITUDE, VIEW, GEO_CORDINATES} from "./constants"
import {OptionalDocumentTypeFrames} from "./OptionalTypeFrames"
import {makeChoiceTypeFrames} from "./ChoiceTypeFrames"
import {makeGeoCordinateFrames, makeMultipleGeoCordinateFrames} from "./GeoCordinatesTypeFrames"
import {makeOneOfClassFrames} from "./OneOfClassFrames"


function constructNewDocumentFrame(frame, item) {
    let newFrame = {[item]: frame["@class"]}
    return newFrame
}

function constructSubDocumentFrame (fullFrame, uiFrame, item, title, documents, mode, formData, prefix, onTraverse, onSelect) {
    let subDocument = `${prefix}${title}`
    var data=[]
    if(formData && formData[item]) data=formData[item]
    let nestedFrames = getProperties(fullFrame, fullFrame[subDocument], uiFrame, documents, mode, data, false, prefix, onTraverse, onSelect)
    let newProperties=nestedFrames.properties, newUISchema=nestedFrames.uiSchema
    // add type of subdocument
    newProperties["@type"] = {
        type: "string",
        title: title,
        default: title
    }
    nestedFrames.properties=newProperties
    nestedFrames.required=nestedFrames.required
    // make type of sub document hidden
    newUISchema["@type"]={"ui:widget": "hidden"}
    nestedFrames.uiSchema=newUISchema
    return nestedFrames
}


export function getProperties (fullFrame, frame, uiFrame, documents, mode, formData, isSet, prefix, onTraverse, onSelect) {

    let properties = {}, propertiesUI = {}, dependencies= {}, required = [], fields={}



    for(var item in frame) {

        if(item === "@key") continue
        else if(item === "@type") continue
        else if(item.toUpperCase() === LATITUDE.toUpperCase() && mode === VIEW) {
            let frames = makeGeoCordinateFrames(frame, item, uiFrame, mode, formData, isSet)
            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
        }
        else if(item.toUpperCase() === LONGITUDE.toUpperCase() && mode === VIEW) {
        }
        else if(item.toUpperCase() === GEO_CORDINATES.toUpperCase() && mode === VIEW){
            let frames = makeMultipleGeoCordinateFrames(frame, item, uiFrame, mode, formData, isSet)
            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
        }
        else if(item === "@oneOf") { //choice
            let frames = makeChoiceTypeFrames(fullFrame, frame, item, uiFrame, documents,  mode, formData, onTraverse, onSelect, prefix)
            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI//[item]
        }
        else if(frame[item] && isDataType(frame[item])) { // datatype properties like xsd:/ xdd:
            let frames = makeDataTypeFrames(frame, item, uiFrame, mode, formData, isSet)

            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(frames.required)
        }
        else if (frame[item] && isOptionalType(frame[item])) { // optional

            let newFrame = constructNewDocumentFrame(frame[item], item)
            if(Array.isArray(newFrame[item])){
                //let frames = makeChoiceDocumentTypeFrames(newFrame, item, uiFrame, documents,  mode, formData, onTraverse, onSelect)
                let frames = makeOneOfClassFrames(fullFrame, newFrame, item, uiFrame,  mode, formData, prefix)
                //set properties and ui
                properties[item] = frames.properties[item]
                propertiesUI[item] = frames.propertiesUI//[item]
            }
            else {
                let optionalProperties = getProperties(fullFrame, newFrame, uiFrame, documents, mode, formData, false, prefix, onTraverse, onSelect)

                let optionalFrames = OptionalDocumentTypeFrames(optionalProperties, item, mode, onSelect)

                //set properties and ui
                properties[item] = optionalFrames.properties[item]
                propertiesUI[item] = optionalFrames.uiSchema[item]
            }
        }
        else if (frame[item] && isSetType(frame[item])) { //set

            let newFrame = constructNewDocumentFrame(frame[item], item)

            if(Array.isArray(newFrame[item])){
                //let frames = makeChoiceDocumentTypeFrames(newFrame, item, uiFrame, documents,  mode, formData, onTraverse, onSelect)
                let frames = makeOneOfClassFrames(fullFrame, newFrame, item, uiFrame,  mode, formData, prefix)
                //set properties and ui
                properties[item] = frames.properties[item]
                propertiesUI[item] = frames.propertiesUI//[item]
            }
            else {
                let setFrames = getProperties(fullFrame, newFrame, uiFrame, documents, mode, formData, true, prefix, onTraverse, onSelect)
                if(setFrames.required) delete setFrames["required"]
                //console.log("setFrames", setFrames, item, newFrame)
                if(Object.keys(setFrames.properties).length === 0) continue // skip if no properties are found
                var frames
                if(setFrames.properties[item].info === DOCUMENT || setFrames.properties[item].info === ENUM) { // if ismulti for react select
                    frames=makeSetDocuments(setFrames, item, frame[item]["@class"], uiFrame, mode, formData, onTraverse, onSelect)
                    //set properties and ui
                    properties[item] = frames.properties[item]
                    propertiesUI[item] = frames.propertiesUI[item]
                }
                else if(setFrames.properties[item].info === DATA) { //data
                    frames=makeSetData(setFrames, item, uiFrame, mode, formData)
                    //set properties and ui
                    properties[item] = frames.properties[item]
                    propertiesUI[item] = frames.propertiesUI[item]
                }
                else { // sub documents
                    frames=makeSetSubDocuments(setFrames, item, uiFrame, mode, formData, onTraverse)
                    //set properties and ui
                    properties[item] = frames.properties[item]
                    propertiesUI[item] = frames.propertiesUI[item]
                }
            }

        }
        else if (frame[item] && isListType(frame[item])) { //list
            let newFrame = constructNewDocumentFrame(frame[item], item)
            let listFrames = getProperties(fullFrame, newFrame, uiFrame, documents, mode, formData, true, prefix, onTraverse, onSelect)
            //if(listFrames.required) delete listFrames["required"]
            //console.log("setFrames", setFrames, item, newFrame)

            if(Object.keys(listFrames.properties).length === 0) continue // skip if no properties are found
            var frames
            if(listFrames.properties[item].info === DOCUMENT || listFrames.properties[item].info === ENUM) { // if ismulti for react select
                frames=makeListDocuments(listFrames, item, uiFrame, mode, formData, onTraverse)
                //set properties and ui
                properties[item] = frames.properties[item]
                propertiesUI[item] = frames.propertiesUI[item]
            }
            else if(listFrames.properties[item].info === DATA) { //data
                frames=makeListData(listFrames, item, uiFrame, mode, formData)
                //set properties and ui
                properties[item] = frames.properties[item]
                propertiesUI[item] = frames.propertiesUI[item]
            }
            else { // sub documents
                frames=makeListSubDocuments(listFrames, item, uiFrame, mode, formData, onTraverse)
                //set properties and ui
                properties[item] = frames.properties[item]
                propertiesUI[item] = frames.propertiesUI[item]
            }
        }
        else if(frame[item] && isDocumentType(frame[item], fullFrame, prefix)) { //link documents
            let frames = makeDocumentTypeFrames(frame, item, uiFrame, documents,  mode, formData, onTraverse, onSelect)

            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(frames.required)
        }
        else if (frame[item] && isEnumType(frame[item])) { // enums
            let frames = makeEnumTypeFrames(frame[item], item, uiFrame, mode, formData, isSet)

            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(frames.required)

        }
        else if(frame[item] && isSubDocumentType(frame[item])) { //subdocument
            //let subDocumentFrame=fullFrame[`${TDB_SCHEMA}${frame[item]["@class"]}`]
            let newFrame = constructSubDocumentFrame(fullFrame, uiFrame, item, frame[item]["@class"], documents, mode, formData, prefix, onTraverse, onSelect)
            let frames = makeSubDocumentFrames(newFrame, item, uiFrame, mode, formData, onTraverse, onSelect)

            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
        }
        else if (frame[item] && isSubDocumentAndClassType(frame[item], fullFrame, prefix)) { //subdocument and type class
            //let subDocumentFrame=fullFrame[`${TDB_SCHEMA}${frame[item]["@class"]}`]
            let newFrame = constructSubDocumentFrame(fullFrame, uiFrame, item, frame[item], documents, mode, formData, prefix, onTraverse, onSelect)
            let frames = makeSubDocumentFrames(newFrame, item, uiFrame, mode, formData, onTraverse, onSelect)

            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
        }
    }

    //console.log("required", required)

    return {
        properties: properties,
        required: required,
        dependencies: dependencies,
        uiSchema: propertiesUI,
        fields: fields
    }

}
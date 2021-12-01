import React from "react"
import {makeDataTypeFrames} from "./DataTypeFrames"
import {makeSubDocumentFrames} from "./SubDocumentTypeFrames"
import {makeSetSubDocuments, makeSetData} from "./SetTypeFrames"
import {makeDocumentTypeFrames} from "./DocumentTypeFrames"
import {makeEnumTypeFrames} from "./EnumTypeFrames"
import {isDataType, isSubDocumentType, isOptionalType, isSetType, isDocumentType, isEnumType} from "./utils"
import {TDB_SCHEMA, DOCUMENT, ENUM, DATA} from "./constants"

function constructNewDocumentFrame(frame, item) {
    let newFrame = {[item]: frame["@class"]}
    return newFrame
}

function constructSubDocumentFrame (fullFrame, uiFrame, item, title, documents, mode, formData) {
    let subDocument = `${TDB_SCHEMA}${title}`
    var data=[]
    if(formData[item]) data=formData[item]
    let nestedFrames = getProperties(fullFrame, fullFrame[subDocument], uiFrame, documents, mode, data, false)
    let newProperties=nestedFrames.properties, newUISchema=nestedFrames.uiSchema
    // add type of subdocument
    newProperties["@type"] = {
        type: "string",
        title: title,
        default: title
    }
    nestedFrames.properties=newProperties
    // make type of sub document hidden
    newUISchema["@type"]={"ui:widget": "hidden"}
    nestedFrames.uiSchema=newUISchema
    return nestedFrames
}


export function getProperties (fullFrame, frame, uiFrame, documents, mode, formData, isSet) {

    let properties = {}, propertiesUI = {}, dependencies= {}, required = [], fields={}

    for(var item in frame) {
        if(item == "@key") continue
        else if(item == "@type") continue
        else if(frame[item] && isDataType(frame[item])) { // datatype properties like xsd:/ xdd:
            let frames = makeDataTypeFrames(frame, item, uiFrame, mode, formData)

            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(frames.required)
        }
        else if (frame[item] && isOptionalType(frame[item])) { // optional
            let newFrame = constructNewDocumentFrame(frame[item], item)
            let optionalFrames = getProperties(fullFrame, newFrame, uiFrame, documents, mode, formData, false)

            //set properties and ui
            properties[item] = optionalFrames.properties[item]
            propertiesUI[item] = optionalFrames.uiSchema[item]
        }
        else if (frame[item] && isSetType(frame[item])) { //set
            let newFrame = constructNewDocumentFrame(frame[item], item)
            let setFrames = getProperties(fullFrame, newFrame, uiFrame, documents, mode, formData, true)
            var frames
            if(setFrames.properties[item].info === DOCUMENT || setFrames.properties[item].info === ENUM) { // if ismulti for react select
                frames=setFrames
                //set properties and ui
                properties[item] = frames.properties[item]
                propertiesUI[item] = frames.uiSchema[item]
            }
            else if(setFrames.properties[item].info === DATA) { //data
                frames=makeSetData(setFrames, item, uiFrame, mode, formData)
                //set properties and ui
                properties[item] = frames.properties[item]
                propertiesUI[item] = frames.propertiesUI[item]
            }
            else { // sub documents
                frames=makeSetSubDocuments(setFrames, item, uiFrame, mode, formData)
                //set properties and ui
                properties[item] = frames.properties[item]
                propertiesUI[item] = frames.propertiesUI[item]
            }
        }
        else if(frame[item] && isDocumentType(frame[item], fullFrame)) { //link documents
            let frames = makeDocumentTypeFrames(frame, item, uiFrame, documents, isSet)

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
            let newFrame = constructSubDocumentFrame(fullFrame, uiFrame, item, frame[item]["@class"], documents, mode, formData)
            let frames = makeSubDocumentFrames(newFrame, item, uiFrame, mode, formData)

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
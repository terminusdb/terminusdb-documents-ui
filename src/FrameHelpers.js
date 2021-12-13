import React from "react"
import {makeDataTypeFrames} from "./DataTypeFrames"
import {makeSubDocumentFrames} from "./SubDocumentTypeFrames"
import {makeSetSubDocuments, makeSetData, makeSetDocuments} from "./SetTypeFrames"
import {makeListData, makeListDocuments, makeListSubDocuments} from "./ListTypeFrames"
import {makeDocumentTypeFrames} from "./DocumentTypeFrames"
import {makeEnumTypeFrames} from "./EnumTypeFrames"
import {isDataType, isSubDocumentType, isOptionalType, isSetType, isDocumentType, isEnumType, getOptionalSelect, isListType} from "./utils"
import {DOCUMENT, ENUM, DATA, VIEW} from "./constants"

function constructNewDocumentFrame(frame, item) {
    let newFrame = {[item]: frame["@class"]}
    return newFrame
}

function constructSubDocumentFrame (fullFrame, uiFrame, item, title, documents, mode, formData, prefix, onTraverse) {
    let subDocument = `${prefix}${title}`
    var data=[]
    if(formData && formData[item]) data=formData[item]
    let nestedFrames = getProperties(fullFrame, fullFrame[subDocument], uiFrame, documents, mode, data, false, prefix, onTraverse)
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


export function getProperties (fullFrame, frame, uiFrame, documents, mode, formData, isSet, prefix, onTraverse) {

    let properties = {}, propertiesUI = {}, dependencies= {}, required = [], fields={}

    for(var item in frame) {
        if(item == "@key") continue
        else if(item == "@type") continue
        else if(frame[item] && isDataType(frame[item])) { // datatype properties like xsd:/ xdd:
            let frames = makeDataTypeFrames(frame, item, uiFrame, mode, formData, isSet)

            //set properties and ui
            properties[item] = frames.properties[item]
            propertiesUI[item] = frames.propertiesUI[item]
            required.push(frames.required)
        }
        else if (frame[item] && isOptionalType(frame[item])) { // optional
            let newFrame = constructNewDocumentFrame(frame[item], item)
            let optionalFrames = getProperties(fullFrame, newFrame, uiFrame, documents, mode, formData, false, prefix, onTraverse)

            if(mode !== VIEW) {
                if(optionalFrames.properties[item] && optionalFrames.properties[item].properties){ // these for optional sets
                    for(var props in optionalFrames.properties[item].properties) {
                        if(optionalFrames.properties[item].properties[props].info === DOCUMENT){
                            optionalFrames.uiSchema[item][props]["ui:field"]=getOptionalSelect
                        }
                    }
                }
                else {
                    if(optionalFrames.properties[item].info === DOCUMENT){
                        optionalFrames.uiSchema[item]["ui:field"]=getOptionalSelect
                    }
                }
            }

            // remove required
            if(Array.isArray(optionalFrames.properties[item].required)) {
                delete optionalFrames.properties[item].required
            }

            //set properties and ui
            properties[item] = optionalFrames.properties[item]
            propertiesUI[item] = optionalFrames.uiSchema[item]
        }
        else if (frame[item] && isSetType(frame[item])) { //set
            let newFrame = constructNewDocumentFrame(frame[item], item)
            let setFrames = getProperties(fullFrame, newFrame, uiFrame, documents, mode, formData, true, prefix, onTraverse)
            if(setFrames.required) delete setFrames["required"]
            //console.log("setFrames", setFrames, item, newFrame)
            if(Object.keys(setFrames.properties).length === 0) continue // skip if no properties are found
            var frames
            if(setFrames.properties[item].info === DOCUMENT || setFrames.properties[item].info === ENUM) { // if ismulti for react select
                frames=makeSetDocuments(setFrames, item, uiFrame, mode, formData, onTraverse)
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
        else if (frame[item] && isListType(frame[item])) { //list
            let newFrame = constructNewDocumentFrame(frame[item], item)
            let listFrames = getProperties(fullFrame, newFrame, uiFrame, documents, mode, formData, true, prefix, onTraverse)
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
            let frames = makeDocumentTypeFrames(frame, item, uiFrame, documents,  mode, formData, isSet, onTraverse)

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
            let newFrame = constructSubDocumentFrame(fullFrame, uiFrame, item, frame[item]["@class"], documents, mode, formData, prefix, onTraverse)
            let frames = makeSubDocumentFrames(newFrame, item, uiFrame, mode, formData, onTraverse)

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
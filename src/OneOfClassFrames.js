import React, {useState} from "react"
import {getTitle, getDefaultValue, checkIfKey, isFilled, getPrefix} from "./utils"
import {CREATE, VIEW, EDIT, ONEOFCLASSES} from "./constants"
import {getProperties} from "./FrameHelpers"
import {FrameViewer} from "./FrameViewer"

function oneOfClassTypeFrames (fullFrame, frame, item, uiFrame, mode, formData, prefix) {
    let properties={}, propertiesUI={}

    let anyOfArray=[]

    function getUIField(props) {
        let formDataValue = props.schema.hasOwnProperty("default") ? props.schema.default : {}
        const [input, setInput]=useState(formDataValue)
        let schema = fullFrame

        function handleFormChange(data){
            let jsonData = {
                "@type": props.name,
                "@info": ONEOFCLASSES
            }
            setInput(data)
            for(var thing in data){
                jsonData[thing] = data[thing]
            }
            if(props.onChange) {
                //console.log("value stored in props", jsonData)
                props.onChange(jsonData)
            }
        }



        let uiSchema = {
            classNames : "card bg-secondary p-4 mt-4 mb-4"
        }

        return <React.Fragment>
            {props.name}
            <FrameViewer
                frame={schema}
                mode={mode}
                hideSubmit={true}
                onChange={handleFormChange}
                type={props.name}
                uiFrame={uiSchema}
                formData={input}
            />
        </React.Fragment>
    }

    function extractProperties(documentClass, item, formData, mode) {
        var structure = {}, propertiesUI={}, anyOfArray=[]
        structure = {
            title: documentClass,
            properties: {
                [documentClass]: {
                    type: "object" //typeof documentClass === "object" ? "object" : "string"
                }
            }
        }
        if(mode !== CREATE && formData.hasOwnProperty(item)){
            //formData[item].map(par => {
            if(formData[item].hasOwnProperty("@type") && formData[item]["@type"] === documentClass) {
                structure.properties[documentClass]["default"] = formData[item]
            }
        }
        if(mode === VIEW && !formData.hasOwnProperty(item)){ // do not display if no value in formdata
            propertiesUI[documentClass] = {}
        }
        else { // get custom field on edit/ create and when View has formdata populated
            propertiesUI[documentClass] = {
                "ui:field": getUIField
            }
        }
        if(mode !== CREATE && formData.hasOwnProperty(item) && formData[item]["@type"] !== documentClass){
            //console.log("no match")
        }
        else anyOfArray.push(structure)

        return {anyOfArray: anyOfArray, propertiesUI: propertiesUI}
    }

    if(frame[item] && Array.isArray(frame[item]))  {
        var extracted={}
        if(mode === CREATE) {
            frame[item].map(it => {
                if(typeof it === "object"){
                    extracted = extractProperties(it["@class"], item, formData, mode)
                }
                else { // document class
                    extracted = extractProperties(it, item, formData, mode)
                }
                if(extracted.hasOwnProperty("anyOfArray")) anyOfArray.push(extracted.anyOfArray[0])
                if(extracted.hasOwnProperty("propertiesUI")) {
                    for(var key in extracted.propertiesUI) {
                        propertiesUI[key] = extracted.propertiesUI[key]
                    }
                }
            })
        }
        else {

            if(formData.hasOwnProperty(item) && formData[item].hasOwnProperty("@type")) {
                let doc = formData[item]["@type"]
                extracted = extractProperties(doc, item, formData, mode)
                if(extracted.hasOwnProperty("anyOfArray")) anyOfArray.push(extracted.anyOfArray[0])
                if(extracted.hasOwnProperty("propertiesUI")) {
                    for(var key in extracted.propertiesUI) {
                        propertiesUI[key] = extracted.propertiesUI[key]
                    }
                }
            }

        }


    }

    var layout = {}

    if(Array.isArray(frame[item]) && frame[item].length > 0) {
        layout = {
            type: 'object',
            info: "DATA",
            title: item,
            description: `Choose ${item} from the list ...`,
            anyOf: anyOfArray,
        }
    }

    if(mode === VIEW && !formData.hasOwnProperty(item)) { // do not display
        layout = {
            type: 'object',
            info: "DATA",
            title: item
        }
    }

    if(mode !== CREATE && formData.hasOwnProperty(item)) {
        layout["default"]=getDefaultValue(item, formData)
    }


    // schema
    properties[item] = layout
    //default ui:schema
    propertiesUI[item] = {
        //"ui:placeholder": frame[item],
        //"ui:disabled": mode === EDIT && checkIfKey(item, frame["@key"]) && isFilled(formData, item) ? true : false,
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        classNames: mode===VIEW ? "tdb__input mb-3 mt-3 form-label tdb__view__input" : "tdb__input mb-3 mt-3"
    }

    if(mode === VIEW && !Array.isArray(formData) && !formData.hasOwnProperty(item)){ // set of subdocuments
        const hidden = () => <div/>
        propertiesUI[item]["ui:widget"]= hidden
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}


// mandatory
export function makeOneOfClassFrames (fullFrame, frame, item, uiFrame, mode, formData, prefix) {
    let madeFrames = oneOfClassTypeFrames (fullFrame, frame, item, uiFrame, mode, formData, prefix)
    //let required=item
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}

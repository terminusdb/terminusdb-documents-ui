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

    if(frame[item] && Array.isArray(frame[item]))  {
        var structure = {}
        frame[item].map(it => {
            if(typeof it === "object"){
                structure = {
                    title: it["@class"],
                    properties: {
                        [it["@class"]]: {
                            type: "object"
                        }
                    }
                }
                if(mode !== CREATE && formData.hasOwnProperty(item)){
                    formData[item].map(par => {
                        if(par["@type"] === it["@class"]) {
                            structure.properties[it["@class"]]["default"] = par
                        }
                    })
                }
                if(mode === VIEW && !formData.hasOwnProperty(item)){ // do not display if no value in formdata
                    propertiesUI[it["@class"]] = {}
                }
                else { // get custom field on edit/ create and when View has formdata populated
                    propertiesUI[it["@class"]] = {
                        "ui:field": getUIField
                    }
                }
                if(mode !== CREATE && formData.hasOwnProperty(item) && formData[item][0]["@type"] !== it["@class"]){
                    //console.log("no match")
                }
                else anyOfArray.push(structure)
            }
            else { // document class
                structure = {
                    title: it,
                    properties: {
                        [it]: {
                            type: "string"
                        }
                    }
                }
                propertiesUI[it["@class"]] = {
                    "ui:field": getUIField
                }
                anyOfArray.push(structure)
            }
        })
    }


    var layout = {}

    if(Array.isArray(frame[item]) && frame[item].length > 0) {
        layout = {
            type: 'object',
            info: "DATA",
            title: item,
            description: `Choose ${item} from the list ...`,
            anyOf: anyOfArray
        }
    }

    if(mode === VIEW && !formData.hasOwnProperty(item)) { // do not display
        layout = {
            type: 'object',
            info: "DATA"
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

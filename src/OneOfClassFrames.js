import React, {useState, useEffect} from "react"
import {getTitle, getDefaultValue, checkIfKey, isFilled, getPrefix,extractClassName} from "./utils"
import {CREATE, VIEW, EDIT, ONEOFCLASSES, SUBDOCUMENT,DOCUMENT,SELECT_STYLES} from "./constants"
import {getProperties} from "./FrameHelpers"
import {FrameViewer} from "./FrameViewer"
import AsyncSelect from 'react-select/async'
import {Form} from "react-bootstrap"

function getAnyOfDocuments(documentClass) {
    var structure = {}
    structure = {
        title: documentClass,
        properties: {
            [documentClass]: {
                title: documentClass,
                type: "string"
            }
        }
    }
    return structure
}

function getAnyOfSubDocuments(subDocumentClass, mode, formData, item) {
    var structure = {}
    structure = {
        title: subDocumentClass,
        properties: {
            [subDocumentClass]: {
                title: subDocumentClass,
                type: "object"
            }
        }
    }
    //if match in formdata then pass on default
    if(mode === EDIT && formData.hasOwnProperty(item) && formData[item]["@type"] === subDocumentClass) structure.properties[subDocumentClass]["default"] = formData[item]
    return structure
}



function oneOfClassTypeFrames (fullFrame, frame, item, uiFrame, mode, formData, prefix,onTraverse, onSelect) {
    let properties={}, propertiesUI={}, layout = {}

    let anyOfArray=[]

    function getSubDocumentProperties(props) {

        let formDataValue = props.schema.hasOwnProperty("default") ? props.schema.default : {}
        let type = (mode ===VIEW) ? formDataValue["@type"] : props.name
        const [input, setInput]=useState(formDataValue)
        let schema = fullFrame

        function handleFormChange(data){
            let jsonData = {
                "@type": props.name,
                //"@info": ONEOFCLASSES
            }
            setInput(data)
            for(var thing in data){
                if(thing === "@id") continue
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
                type={type}
                uiFrame={uiSchema}
                formData={input}
            />
        </React.Fragment>
    }

    if(frame[item] && Array.isArray(frame[item]))  {
        frame[item].map(it => {
            if(typeof it === "object" && it.hasOwnProperty(SUBDOCUMENT)) { // links to subdocuments
                let subDocumentClass = it["@class"]
                anyOfArray.push(getAnyOfSubDocuments(subDocumentClass, mode, formData, item))
                function getSubDocumentsPropertiesUI(subDocumentClass) {
                    let propertiesUI = {
                        "ui:field": getSubDocumentProperties
                    }
                    return propertiesUI
                }
                propertiesUI[subDocumentClass] = getSubDocumentsPropertiesUI(subDocumentClass)
            }
            else if(typeof it === "string") { // links to documents
                let documentClass = it // frame[item]
                if(mode!==VIEW) anyOfArray.push(getAnyOfDocuments(documentClass))
                function getSelect(props) {

                    const loadOptions = async (inputValue, callback) => {
                        var type = props.name
                        let opts = await onSelect(inputValue, type)
                        callback(opts)
                        return opts
                    }

                    const handleInputChange = (newValue) => {
                        const inputValue = newValue.replace(/\W/g, '');
                        return inputValue
                    }

                    function onChange(e) {
                        props.onChange(e.value)
                    }

                    if(mode === EDIT
                        && formData.hasOwnProperty(item)
                        && formData[item]
                        && props.name === extractClassName(formData[item], fullFrame, prefix)) {
                        let defaultValue = formData[item]
                        return <React.Fragment>
                            <Form.Label>{props.name} <span class="required">*</span> </Form.Label>
                            <AsyncSelect
                                cacheOptions
                                classNames="tdb__input"
                                styles={SELECT_STYLES}
                                placeholder={props.uiSchema["ui:placeholder"]}
                                onChange={onChange}
                                loadOptions={loadOptions}
                                defaultOptions
                                defaultValue={{value: defaultValue, label: defaultValue}}
                                onInputChange={handleInputChange}
                            />
                        </React.Fragment>
                    }

                    return <React.Fragment>
                        <Form.Label>{props.name} </Form.Label>
                        <AsyncSelect
                            cacheOptions
                            classNames="tdb__input"
                            styles={SELECT_STYLES}
                            placeholder={props.uiSchema["ui:placeholder"]}
                            onChange={onChange}
                            loadOptions={loadOptions}
                            onInputChange={handleInputChange}
                        />
                    </React.Fragment>
                }
                function getOneOfDocumentsPropertiesUI (documentClass) {
                    let propertiesUI = {
                        "ui:field": getSelect,
                        "ui:placeholder": `Select ${documentClass}`
                    }
                    return propertiesUI
                }
                propertiesUI[documentClass] = getOneOfDocumentsPropertiesUI(documentClass)
            }
        })
    }

    if(mode === CREATE) {
        layout = {
            type: 'object',
            info: ONEOFCLASSES,
            title: item,
            description: `Choose ${item} from the list ...`,
            anyOf:anyOfArray
        }
    }
    else if(mode === EDIT) {
        layout = {
            type: 'object',
            info: ONEOFCLASSES,
            title: item,
            description: `Choose ${item} from the list ...`
        }
        if(formData.hasOwnProperty(item)){
            //arrange ordering of options
            function sortAnyOfArray(anyOfArray) {
                let sorted = []
                let className = (formData.hasOwnProperty(item) && typeof formData[item] === "object" && formData[item].hasOwnProperty("@type")) ? formData[item]["@type"] : formData[item]
                //arranging order of appearance
                anyOfArray.map(thing => {
                       if(thing.hasOwnProperty("title")
                        && thing.title === extractClassName(className, fullFrame, prefix)) {
                        sorted.push(thing)
                    }
                })
                if(typeof formData[item] === "string"){
                    anyOfArray.map(thing => {
                        if(thing.hasOwnProperty("title")
                            && thing.title !==  extractClassName(className, fullFrame, prefix)) {
                            sorted.push(thing)
                        }
                    })
                }
                return sorted
            }
            layout["anyOf"] = sortAnyOfArray(anyOfArray)
        }
        if(!formData.hasOwnProperty(item))  layout["anyOf"] = anyOfArray
    }
    else {
        if(formData.hasOwnProperty(item) && typeof formData[item] === "object"){
            layout = {
                type: 'object',
                info: ONEOFCLASSES,
                title: item,
                description: `Choose ${item} from the list ...`,
                //anyOf:anyOfArray,
                default: formData[item]
            }
        }
        else {
            layout = {
                type: 'string',
                info: ONEOFCLASSES,
                title: item
            }
        }
    }

    // schema
    properties[item] = layout
    //default ui:schema
    propertiesUI[item] = {
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        "classNames": mode===VIEW ? "tdb__input mb-3 mt-3 form-label tdb__view__input" : "tdb__input mb-3 mt-3"
    }
    if(mode === VIEW && formData.hasOwnProperty(item) && typeof formData[item] === "string") {
        function getViewSelect (props) {
            const [clicked, setClicked]=useState(false)

            useEffect(() => {
                if(!clicked) return
                if(onTraverse) onTraverse(clicked)
            }, [clicked])

            const handleClick = (e, val) => { // view if on traverse function defined
                setClicked(val)
            }

            if(!frame.hasOwnProperty(item)) return <div/>

            return <React.Fragment>
                <Form.Label className="control-label">{item}</Form.Label>
                <span onClick={(e) => handleClick(e, formData[item])} className="tdb__span__select form-control bg-transparent text-light">{formData[item]}</span>
            </React.Fragment>
        }
        propertiesUI[item]["ui:field"] =  getViewSelect
    }
    else if (mode === VIEW && formData.hasOwnProperty(item) && typeof formData[item] === "object") {
        propertiesUI[item]["ui:field"] =  getSubDocumentProperties
    }

    if(mode === VIEW && !Array.isArray(formData) && !formData.hasOwnProperty(item)){ // set of subdocuments
        const hidden = () => <div/>
        propertiesUI[item]["ui:title"]=hidden
        propertiesUI[item]["ui:widget"]= hidden
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    if(mode === VIEW) {
        let newPropertiesUI = propertiesUI[item]
        propertiesUI = newPropertiesUI
        return {properties, propertiesUI}
    }
    return {properties, propertiesUI}
}


// mandatory
export function makeOneOfClassFrames (fullFrame, frame, item, uiFrame, mode, formData, prefix, onTraverse, onSelect) {
    let madeFrames = oneOfClassTypeFrames (fullFrame, frame, item, uiFrame, mode, formData, prefix, onTraverse, onSelect)
    //let required=item
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}

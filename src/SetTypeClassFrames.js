import React, {useState, useEffect} from "react"
import {getTitle, getDefaultValue, checkIfKey, isFilled, getPrefix, extractClassName, ArrayFieldTemplate, removeIds} from "./utils"
import {CREATE, VIEW, EDIT, ONEOFCLASSES, SELECT_STYLE_KEY, SUBDOCUMENT,DOCUMENT,SELECT_STYLES, SUBDOCUMENT_BACKGROUND, SUBDOCUMENT_STYLE_KEY} from "./constants"
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
    return structure
}


export const makeSetOneOfClassFrames = (fullFrame, frame, item, uiFrame,  mode, formData, prefix, onTraverse, onSelect) => {
    let properties={}, propertiesUI={}, subPropertiesUI={}, layout = {}

    let anyOfArray=[]

    // can pass custom styles via ui frame for react-select
    let selectStyle=SELECT_STYLES, subDocumentStyles=SUBDOCUMENT_BACKGROUND

    //custom ui:schema
    if(uiFrame && uiFrame.hasOwnProperty(SELECT_STYLE_KEY)) {
        selectStyle=uiFrame[SELECT_STYLE_KEY]
    }
    //subdocument styles
    if(uiFrame && uiFrame.hasOwnProperty(SUBDOCUMENT_STYLE_KEY)) {
        subDocumentStyles=uiFrame[SUBDOCUMENT_STYLE_KEY]
    }

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
                props.onChange(jsonData)
            }
        }

        let uiSchema = {
            classNames : `card ${selectStyle} p-4 mt-4 mb-4`
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
                function getSubDocumentsPropertiesUI() {
                    let subPropertiesUI = {
                        "ui:field": getSubDocumentProperties
                    }
                    return subPropertiesUI
                }
                if(mode !== VIEW) subPropertiesUI[subDocumentClass] = getSubDocumentsPropertiesUI()
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

                    return <React.Fragment>
                        <Form.Label>{props.name} </Form.Label>
                        <AsyncSelect
                            cacheOptions
                            classNames="tdb__input"
                            styles={selectStyle}
                            placeholder={props.uiSchema["ui:placeholder"]}
                            onChange={onChange}
                            loadOptions={loadOptions}
                            onInputChange={handleInputChange}
                        />
                    </React.Fragment>
                }
                function getDocumentsPropertiesUI (documentClass) {
                    let subPropertiesUI = {
                        "ui:field": getSelect,
                        "ui:placeholder": `Select ${documentClass}`
                    }
                    return subPropertiesUI
                }
                if(mode !== VIEW) subPropertiesUI[documentClass] = getDocumentsPropertiesUI(documentClass)
            }
        })
    }


    if(mode === CREATE) {
        layout = {
            type: 'array',
            info: ONEOFCLASSES,
            title: item,
            description: `Choose ${item} from the list ...`,
            items: {
                type: "object",
                anyOf: anyOfArray
            }
        }
    }
    else {//if (mode === VIEW) {
        if(formData.hasOwnProperty(item) && Array.isArray(formData[item]) && typeof formData[item][0] === "object"){
            layout = {
                type: 'array',
                info: ONEOFCLASSES,
                title: item,
                items : {
                    type: "object"
                }
            }
        }
        else {
            layout = {
                type: 'array',
                info: ONEOFCLASSES,
                title: item,

            }
        }
    }

    // schema
    properties[item] = layout

    propertiesUI[item] = {
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        "classNames": mode===VIEW ? "tdb__input mb-3 mt-3 form-label tdb__view__input" : "tdb__input mb-3 mt-3",
        "items": subPropertiesUI,
        //"additionalItems": subPropertiesUI
    }

    if(mode === CREATE) { // we do not allow to add extra on view mode
        // layout
        properties[item]["additionalItems"]={
            type: "object",
            anyOf: anyOfArray
        }
        //ui
        //propertiesUI[item]["additionalItems"]=setFrames.uiSchema[item]
        propertiesUI[item]["ui:options"] = {
            addable: true,
            orderable: false,
            removable: true
        }
        propertiesUI[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
    }
    if(mode === EDIT) { // we do not allow to add extra on view mode
        // layout
        /*properties[item]["additionalItems"]={
            type: "object",
            anyOf: anyOfArray
        }*/
        //ui
        //propertiesUI[item]["additionalItems"]=setFrames.uiSchema[item]
        function getEditSubDocuments(props) {
            let schema = fullFrame
            let uiSchema = {
                classNames : `card ${subDocumentStyles} p-4 mt-4 mb-4`
            }
            let filled = []
            if(formData.hasOwnProperty(item)) {
                formData[item].map(things => {
                    let type = things["@type"]
                    let formDataValue = things
                    const [input, setInput] = useState(formDataValue)

                    function handleFormChange(data){
                        let jsonData = {
                            "@type": props.name
                        }
                        setInput(data)

                        if(props.onChange) {
                            let populate = []
                            // gather other formData too
                            formData[item].map(fd => {
                                if(fd["@id"] === data["@id"]) {
                                    populate.push(data)
                                }
                                else populate.push(fd)
                            })
                            props.onChange(removeIds(populate))
                        }
                    }


                    filled.push(
                        <React.Fragment>
                            {type}
                            <FrameViewer
                                frame={schema}
                                mode={mode}
                                hideSubmit={true}
                                type={type}
                                onChange={handleFormChange}
                                uiFrame={uiSchema}
                                formData={input}
                            />
                        </React.Fragment>
                    )
                })
            }

            return <div className="w-100">{filled}</div>
        }
        if(frame.hasOwnProperty(item) && Array.isArray(frame[item]) && typeof frame[item][0] === "object") {
            propertiesUI[item]["ui:field"] = getEditSubDocuments
        }
        else if(frame.hasOwnProperty(item) && Array.isArray(frame[item]) && typeof frame[item][0] === "string") {
            function getEditDocuments(props) {
                let filled = []
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
                    props.onChange([e.value])
                }

                if(formData.hasOwnProperty(item)) {
                    formData[item].map(things => {
                        filled.push(
                            <AsyncSelect
                                cacheOptions
                                classNames="tdb__input"
                                styles={selectStyle}
                                //placeholder={props.uiSchema["ui:placeholder"]}
                                onChange={onChange}
                                loadOptions={loadOptions}
                                defaultOptions
                                defaultValue={{value: things, label: things}}
                                onInputChange={handleInputChange}
                            />
                        )
                    })
                }

                return <React.Fragment>
                    <Form.Label className="control-label">{item}</Form.Label>
                    <div className="w-100">{filled}</div>
                </React.Fragment>
            }
            propertiesUI[item]["ui:field"] = getEditDocuments
        }
    }
    else if(mode === VIEW){

        if(frame.hasOwnProperty(item) && Array.isArray(frame[item]) && typeof frame[item][0] === "object") {
            function getViewSubDocuments(props) {
                let schema = fullFrame
                let uiSchema = {
                    classNames :  `card ${subDocumentStyles} p-4 mt-4 mb-4`
                }
                let filled = []
                if(formData.hasOwnProperty(item)) {
                    formData[item].map(things => {
                        let type = things["@type"]
                        let formDataValue = things

                        filled.push(
                            <React.Fragment>
                                {type}
                                <FrameViewer
                                    frame={schema}
                                    mode={mode}
                                    hideSubmit={true}
                                    type={type}
                                    uiFrame={uiSchema}
                                    formData={formDataValue}
                                />
                            </React.Fragment>
                        )
                    })
                }

                return <div className="w-100">{filled}</div>
            }

            propertiesUI[item]["ui:field"] = getViewSubDocuments
        }
        else {
            function getViewDocuments(props) {

                let filled = []
                const [clicked, setClicked]=useState(false)

                useEffect(() => {
                    if(!clicked) return
                    if(onTraverse) onTraverse(clicked)
                }, [clicked])

                const handleClick = (e, val) => { // view if on traverse function defined
                    setClicked(val)
                }

                if(!frame.hasOwnProperty(item)) return <div/>

                if(formData.hasOwnProperty(item)) {
                    formData[item].map(things => {
                        filled.push(
                            <span  onClick={(e) => handleClick(e, things)} className="tdb__span__select form-control bg-transparent text-light">
                                {things}
                            </span>
                        )
                    })
                }

                return <React.Fragment>
                    <Form.Label className="control-label">{item}</Form.Label>
                    <div className="w-100  tdb__view__input d-block">{filled}</div>
                </React.Fragment>
            }
            propertiesUI[item]["ui:field"] = getViewDocuments
        }

        propertiesUI[item]["ui:options"] = { // disable add more on view
            addable: false,
            orderable: false,
            removable: false
        }
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }
    return {properties, propertiesUI}

}
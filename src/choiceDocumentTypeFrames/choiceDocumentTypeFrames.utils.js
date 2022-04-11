import React, {useState, useEffect} from "react"
import {getTitle, getDefaultValue, extractUIFrameSelectTemplate, checkIfKey, isFilled, extractPrefix, extractUIFrameSubDocumentTemplate} from "../utils"
import {getProperties} from "../FrameHelpers"
import {EmptyDocumentSelect,  FilledDocumentSelect, FilledDocumentViewSelect} from "../documentTypeFrames/DocumentSelects"
import AsyncSelect from 'react-select/async'
import {Form} from "react-bootstrap"
import {
    XSD_STRING,
    XSD_DECIMAL,
    XSD_DATE_TIME,
    CHOICECLASSES,
    SELECT_STYLES,
    DOCUMENT,
    XSD_BOOLEAN,
    STRING_TYPE,
    NUMBER_TYPE,
    BOOLEAN_TYPE,
    DATE_TYPE,
    DATA_TYPE
} from "../constants"

// get layout of document class
function getCreateDocumentLayout(documentClass){
    let layout = {
        "title": documentClass,
        "type": "object",
        "properties": {
            [documentClass]: {"type": "string"},
            "info": {"type": "string", default: CHOICECLASSES, title: "info"}
        }
    }
    return layout
}
// get edit layout of document class
function getEditDocumentLayout(documentClass, formData){

    let layout = {
        "title": documentClass,
        "type": "object",
        "properties": {
            [documentClass]: {"type": "string", default: formData? formData: false},
            "info": {"type": "string", default: CHOICECLASSES, title: "info"}
        }
    }
    return layout
}


// Create Layout
export function getCreateLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {

    // get choice documents
    let anyOfArray = []
    frame[item].map(fr => {
        var documentClass=fr
        anyOfArray.push(getCreateDocumentLayout(documentClass))
    })

    let layout = {
        type: 'object',
        info: CHOICECLASSES,
        title: item,
        description: `Choose ${item} from the list ...`,
        anyOf:anyOfArray
    }

    return layout
}

export function getCreateUILayout(frame, item, layout, uiFrame, onSelect) {
    let subDocuemntBg = extractUIFrameSubDocumentTemplate(uiFrame) ? extractUIFrameSubDocumentTemplate(uiFrame) : 'bg-secondary'
    // extracting custom ui styles
    let selectStyle = extractUIFrameSelectTemplate(uiFrame) ? extractUIFrameSelectTemplate(uiFrame) : SELECT_STYLES


    let uiLayout = {
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        //classNames: "tdb__input mb-3 mt-3",
        classNames:`card ${subDocuemntBg} p-4 mt-4 mb-4`
    }

    if(layout.hasOwnProperty("anyOf") && Array.isArray(layout.anyOf)) {
        layout.anyOf.map(aOf => {
            let choice = aOf.title
            function getChoiceSelect(props){
                const loadOptions = async (inputValue, callback) => {
                    let opts = await onSelect(inputValue, choice)
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
                    <span>{choice}</span>
                    <AsyncSelect
                        cacheOptions
                        classNames="tdb__input"
                        styles={selectStyle}
                        placeholder={ `Select ${choice} ...`}
                        onChange={onChange}
                        loadOptions={loadOptions}
                        onInputChange={handleInputChange}
                    />
                </React.Fragment>
            }
            uiLayout[choice]={
                "ui:field": getChoiceSelect
            }
            uiLayout["info"]={"ui:widget": "hidden"}
        })
    }
    //console.log("!!! create layout", layout, uiLayout)

    return uiLayout
}

// Edit Layout
export function getEditLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {

    // get choice documents
    let anyOfArray = []
    let defaultValue = (formData && formData.hasOwnProperty(item)) ? formData[item] : null
    frame[item].map(fr => {
        var documentClass=fr
        anyOfArray.push(getEditDocumentLayout(documentClass, defaultValue))
    })

    let layout = {
        type: 'object',
        info: CHOICECLASSES,
        title: item,
        description: `Choose ${item} from the list ...`,
        anyOf:anyOfArray
    }

    return layout
}

export function getEditUILayout(frame, item, layout, uiFrame, onSelect) {
    let subDocuemntBg = extractUIFrameSubDocumentTemplate(uiFrame) ? extractUIFrameSubDocumentTemplate(uiFrame) : 'bg-secondary'
    // extracting custom ui styles
    let selectStyle = extractUIFrameSelectTemplate(uiFrame) ? extractUIFrameSelectTemplate(uiFrame) : SELECT_STYLES


    let uiLayout = {
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        //classNames: "tdb__input mb-3 mt-3",
        classNames:`card ${subDocuemntBg} p-4 mt-4 mb-4`

    }

    if(layout.hasOwnProperty("anyOf") && Array.isArray(layout.anyOf)) {
        layout.anyOf.map(aOf => {
            let choice = aOf.title
            function getChoiceSelect(props){

                const [value, setValue]= useState(props.formData ? {value: props.formData, label: props.formData} : null)// select value

                const loadOptions = async (inputValue, callback) => {
                    let opts = await onSelect(inputValue, choice)
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
                    {value &&  <React.Fragment>
                        <span>{choice}</span>
                        <AsyncSelect
                            cacheOptions
                            classNames="tdb__input"
                            styles={selectStyle}
                            placeholder={ `Select ${choice} ...`}
                            onChange={onChange}
                            loadOptions={loadOptions}
                            defaultValue={value}
                            onInputChange={handleInputChange}
                        />
                    </React.Fragment>}
                    {!value &&  <React.Fragment>
                        <span>{choice}</span>
                        <AsyncSelect
                            cacheOptions
                            classNames="tdb__input"
                            styles={selectStyle}
                            placeholder={ `Select ${choice} ...`}
                            onChange={onChange}
                            loadOptions={loadOptions}
                            onInputChange={handleInputChange}
                        />
                    </React.Fragment>}
                </React.Fragment>


            }
            uiLayout[choice]={
                "ui:field": getChoiceSelect
            }
            uiLayout["info"]={"ui:widget": "hidden"}
        })
    }
    console.log("!!! edit layout", layout, uiLayout)

    return uiLayout
}

// View Layout
export function getViewLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {

    // get choice documents
    let anyOfArray = []
    let defaultValue = (formData && formData.hasOwnProperty(item)) ? formData[item] : null
    let layout = {
        type: 'object',
        info: CHOICECLASSES,
        title: item,
        default: defaultValue
    }

    return layout
}

export function getViewUILayout(frame, item, layout, uiFrame, onTraverse, onSelect) {
    function getViewChoice (props) {
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
            <span onClick={(e) => handleClick(e, props.formData)}
                className="tdb__span__select text-light">
                    {props.formData}
            </span>
        </React.Fragment>
    }
    let uiLayout = {
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        //classNames: "tdb__input mb-3 mt-3",
        "ui:field": getViewChoice
    }


    return uiLayout
}




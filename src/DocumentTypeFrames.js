
import React, {useState, useEffect} from "react"
import {getTitle, getDefaultValue, checkIfKey, getRequiredSelect, isFilled} from "./utils"
import {DOCUMENT, SELECT_STYLES, CREATE, VIEW, EDIT} from "./constants"
import {Form} from "react-bootstrap"
import AsyncSelect from 'react-select/async'
import "babel-polyfill"
import 'regenerator-runtime/runtime'


/*export function DocumentTypeFrames (frame, item, uiFrame, documents, mode, formData, isSet, onTraverse) {
    let properties={}, propertiesUI={}
    var type=frame[item]


    var layout = {
        type: 'string',
        info: DOCUMENT,
        enum: documents ? documents[type] : {}
    }

    //schema
    properties[item] = layout

    if(mode !== CREATE) {
        layout.default=getDefaultValue(item, formData)
    }


    function getSelect (props) {
        const [clicked, setClicked]=useState(false)

        useEffect(() => {
            if(!clicked) return
            if(onTraverse) onTraverse(clicked)
        }, [clicked])

        const handleClick = (e) => { // view if on traverse function defined
            setClicked(e.target.value)
        }

        let opts=[]
        opts.push(<option value="">{`Select ${frame[item]} ...`}</option>)
        if(Array.isArray(props.schema.enum)) {
            props.schema.enum.map(enu => {
                opts.push(<option value={enu}>{enu}</option>)
            })
        }

        // for view mode - logic to click through on traverse
        if(mode === VIEW) {
            return <React.Fragment>
                <Form.Label className="col-md-1">{item}</Form.Label>
                <span onClick={handleClick}>
                    <Form.Select defaultValue={layout.default} disabled >
                        {opts}
                    </Form.Select>
                </span>
            </React.Fragment>
        }
        //return getRequiredSelect(item, frame[item], layout.default, props.schema.enum)
    }


    //default ui:schema
    propertiesUI[item] = {
        "ui:disabled": mode === EDIT && checkIfKey(item, frame["@key"]) && isFilled(formData, item) ? true : false,
        //"ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        "ui:placeholder": `Select ${frame[item]} ...`,
        classNames: mode===VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
        "ui:field": mode ===VIEW ? getSelect : getRequiredSelect
    }

    if(mode === VIEW && !layout.hasOwnProperty("default")){
        propertiesUI[item]["ui:widget"]= "hidden"
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}*/

export function DocumentTypeFrames (frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect) {
    let properties={}, propertiesUI={}
    var type=frame[item]


    var layout = {
        type: 'string',
        info: DOCUMENT,
        linked_to: frame[item],
        enum: documents ? documents[type] : {}
    }

    //schema
    properties[item] = layout

    if(mode !== CREATE) {
        layout.default=getDefaultValue(item, formData)
    }

    // view
    function getViewSelect (props) {
        const [clicked, setClicked]=useState(false)

        useEffect(() => {
            if(!clicked) return
            if(onTraverse) onTraverse(clicked)
        }, [clicked])

        const handleClick = (e, val) => { // view if on traverse function defined
            setClicked(val)
        }

        return <React.Fragment>
            <Form.Label className="col-md-1">{item}</Form.Label>
            <span onClick={(e) => handleClick(e, layout.default)} className="tdb__span__select">{layout.default}</span>
        </React.Fragment>
    }


    // create and edit
    function getSelect(props) {

        const loadOptions = async (inputValue, callback) => {
            let opts = await onSelect(inputValue, frame[item])
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
            <Form.Label>{props.name} <span class="required">*</span> </Form.Label>
            <AsyncSelect
                cacheOptions
                classNames="tdb__input"
                styles={SELECT_STYLES}
                placeholder={props.uiSchema["ui:placeholder"]}
                onChange={onChange}
                loadOptions={loadOptions}
                defaultOptions
                defaultValue={{value: layout.default, label: layout.default}}
                onInputChange={handleInputChange}
            />
        </React.Fragment>
    }

    //default ui:schema
    propertiesUI[item] = {
        "ui:disabled": mode === EDIT && checkIfKey(item, frame["@key"]) && isFilled(formData, item) ? true : false,
        //"ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        "ui:placeholder": `Select ${frame[item]} ...`,
        classNames: mode===VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
        "ui:field": mode ===VIEW ? getViewSelect : getSelect
    }

    if(mode === VIEW && !layout.hasOwnProperty("default")){
        propertiesUI[item]["ui:widget"]= "hidden"
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}



// mandatory
export function makeDocumentTypeFrames (frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect) {
    let madeFrames = DocumentTypeFrames (frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect)
    var required=item
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI, required}
}

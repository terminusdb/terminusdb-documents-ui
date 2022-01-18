
import React, {useState, useEffect} from "react"
import {getTitle, getDefaultValue, checkIfKey, getRequiredSelect, isFilled, ArrayFieldTemplate} from "./utils"
import {DOCUMENT, SELECT_STYLES, CREATE, VIEW, EDIT} from "./constants"
import {Form} from "react-bootstrap"
import AsyncSelect from 'react-select/async'
import Select from 'react-select'
import "babel-polyfill"
import 'regenerator-runtime/runtime'

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

export function choiceDocumentTypeFrames(frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect) {
    let properties={}, propertiesUI={}
    var type=frame[item], oneOfArray=[]

    if(frame[item] && Array.isArray(frame[item]))  {
        frame[item].map(it => {
            let structure = {
                title: it,
                properties: {
                    [it]: {
                      type: "string"
                    }
                }

            }
            oneOfArray.push(structure)
        })
    }


    var layout = {
        title: item,
        type: "array",
        items: {
            type: "object",
            oneOf: oneOfArray
        }
    }

    if(mode === VIEW){
        layout = {
            title: item,
            type: "array"
        }
        if(formData.hasOwnProperty(item)){
            var filledItems = []
            var count = 0, defaultValues=formData[item]
            defaultValues.map(value => {
                filledItems.push({
                    type: "string",
                    default: defaultValues[count]
                })
                count += 1
            })
            layout["items"]=filledItems
        }
    }



    if(mode !== CREATE) {
        //layout.default=getDefaultValue(item, formData)
    }

    //schema
    properties[item] = layout

    //view
    function getViewSelect(props){
        const [clicked, setClicked]=useState(false)

        useEffect(() => {
            if(!clicked) return
            if(onTraverse) onTraverse(clicked)
        }, [clicked])

        const handleClick = (e, val) => { // view if on traverse function defined
            setClicked(val)
        }

        return <React.Fragment>
            <Form.Label >{item}</Form.Label>
            <span onClick={(e) => handleClick(e, props.formData)} className="tdb__span__select">{props.formData}</span>
        </React.Fragment>
    }

    // create and edit
    function getSelect(props) {

        function constructOptions(docOptions){
            let constructedOpts = []
            docOptions.map(it => {
                constructedOpts.push({value: it, label: it})
            })
            return constructedOpts
        }

        let opts=documents[props.name] ? constructOptions(documents[props.name]) : []

        function onChange(e) {
            props.onChange(e.value)
        }

        return <React.Fragment>
            <Form.Label>{props.name} <span class="required">*</span> </Form.Label>
            <Select
                classNames="tdb__input"
                styles={SELECT_STYLES}
                placeholder={props.uiSchema["ui:placeholder"]}
                onChange={onChange}
                options={opts}
            />
        </React.Fragment>
    }

    var itemUi = {}
    frame[item].map(it => {
        itemUi[it] =  {
            "ui:placeholder": `Select ${it} ...`,
            classNames: mode===VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
            "ui:field": mode=== VIEW ? getViewSelect : getSelect
        }
    })

    propertiesUI[item] = {
        classNames: mode===VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        "ui:placeholder": `Select ${item} ...`,
        "items" : itemUi
    }

    if(mode !== VIEW) {
        propertiesUI[item]["ui:options"] = {
            addable: true,
            orderable: false,
            removable: true
        },
        propertiesUI[item]["ui:ArrayFieldTemplate"] = ArrayFieldTemplate
    }
    else if (mode === VIEW) {
        propertiesUI[item]["ui:options"] = {
            addable: false,
            orderable: false,
            removable: false
        }
        propertiesUI[item]["items"] = {
            classNames: mode===VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
            "ui:field": getViewSelect
        }
        //propertiesUI[item]["ui:field"] = getViewSelect
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}

}


export function makeChoiceDocumentTypeFrames(frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect) {
    let madeFrames = choiceDocumentTypeFrames (frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect)
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}

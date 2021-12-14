import React, {useState, useEffect} from "react"
import {ArrayFieldTemplate, getSetTitle, getTitle, getOptionalSelect, removeDefaultsFromSubDocumentFrame, removeDefaultsFromDataFrame} from "./utils"
import {CREATE, DATA, VIEW, DOCUMENT, SELECT_STYLES} from "./constants"
import {Form} from "react-bootstrap"
import AsyncSelect from 'react-select/async'
import "babel-polyfill"
import 'regenerator-runtime/runtime'

export function makeSetSubDocuments (setFrames, item, uiFrame, mode, formData, onTraverse) {
    let properties={}, propertiesUI={}


    if(mode !== VIEW){
        for(var props in setFrames.properties[item]["properties"]) {
            if(setFrames.properties[item]["properties"][props].info === DOCUMENT) {
                setFrames.uiSchema[item][props]["ui:field"]=getOptionalSelect
            }
        }
    }

    var  layout= {
        type: "array",
        title: mode === VIEW ? getTitle() : getSetTitle(),
        items: [
            {
                type: "object",
                properties: setFrames.properties[item]["properties"]
            }
        ]
    }


    if(mode !== CREATE && formData.hasOwnProperty(item)){
        var filledItems = []
        propertiesUI[item] = {
            "items": []
        }
        let subFrames = removeDefaultsFromSubDocumentFrame(setFrames.properties[item]["properties"])
        if(formData.hasOwnProperty(item)) {
            var count = 0
            var defaultValues=formData[item]
            propertiesUI[item]["items"]=[]

            defaultValues.map(value=>{ // remove custom select function
                for(var thing in setFrames.properties[item]["properties"]) {
                    if(setFrames.properties[item]["properties"][thing].info === DOCUMENT &&
                    setFrames.uiSchema[item][thing]["ui:field"]) {
                        delete setFrames.uiSchema[item][thing]["ui:field"]
                        //setFrames.uiSchema[item][thing]["ui:field"] = getRequiredSelect(item, selectDocument, defaultValue, enums)
                    }
                }
                propertiesUI[item]["items"].push(setFrames.uiSchema[item])
            })


            defaultValues.map(value => {
                filledItems.push({
                    type: "object",
                    properties: setFrames.properties[item]["properties"],
                    default: defaultValues[count]
                })

                count += 1
            })
        }
        layout["items"]=filledItems
    }

    //schema
    properties[item] = layout



    // get filled values on View mode
    if(mode === VIEW && formData.hasOwnProperty(item) && Array.isArray(layout["items"])) {
        var count=0
        layout["items"].map(it => {
            for(var thing in it.properties){
                if(it.properties[thing].info === DOCUMENT && it.default && it.default[thing]) {
                    function getSelect (props) {
                        const [clicked, setClicked]=useState(false)

                        useEffect(() => {
                            if(!clicked) return
                            if(onTraverse) onTraverse(clicked)
                        }, [clicked])

                        const handleClick = (id, setClicked) => { // view if on traverse function defined
                            setClicked(id)
                        }

                        return <React.Fragment>
                            <Form.Label>{props.name}</Form.Label>
                            <span className="text-gray  tdb__span__select" onClick={(e) => handleClick(props.formData, setClicked)}>
                                {props.formData}
                            </span>
                        </React.Fragment>
                    }

                    propertiesUI[item]["items"][count][thing]["ui:field"]=getSelect
                }
                if(it.properties[thing].info === "DATA" && it.default) {
                    function getFieldValue(props){
                        if(!props.formData ||  props.formData===undefined)
                            return <span className="tdb__blank"></span>
                        return <React.Fragment>
                            <Form.Label>{props.name}</Form.Label>
                            <span>{props.formData}</span>
                        </React.Fragment>
                    }
                    propertiesUI[item]["items"][count][thing]["ui:field"]=getFieldValue
                }
            }
            count+=1
        })
    }

    if(mode !== VIEW) { // we do not allow to add extra on view mode
        //default ui:schema
        propertiesUI[item] = {
            "items": setFrames.uiSchema[item],

        }
        // layout
        properties[item]["additionalItems"]={
            type: "object",
            properties: setFrames.properties[item]["properties"]
        }
        //ui
        propertiesUI[item]["additionalItems"]=setFrames.uiSchema[item]
        propertiesUI[item]["ui:options"] = {
            addable: true,
            orderable: false,
            removable: true
        }
        propertiesUI[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
    }


    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    // hide entire widget if not available in filled frame
    if(mode === VIEW && !formData.hasOwnProperty(item)) {
        propertiesUI[item] = {"ui:widget" : "hidden"}
    }

    return {properties, propertiesUI}
}

export function makeSetData (setFrames, item, uiFrame, mode, formData) {
    let properties={}, propertiesUI={}

    var  layout= {
        type: "array",
        title: mode === VIEW ? getTitle() : getSetTitle(),
        items: setFrames.properties[item]
    }

    if(mode !== CREATE && formData.hasOwnProperty(item)){
        var filledItems = []
        let subFrames = removeDefaultsFromDataFrame(setFrames.properties[item]["properties"])
        var count = 0, defaultValues=formData[item]
        defaultValues.map(value => {
            filledItems.push({
                type: "string",
                info: DATA,
                //title: item,
                default: defaultValues[count]
            })
            count += 1
        })
        layout["items"]=filledItems
    }

    //schema
    properties[item] = layout

    //default ui:schema
    propertiesUI[item] = {
        "items": setFrames.uiSchema[item]
    }

    if(mode !== VIEW) { // we do not allow to add extra on view mode
        // layout
        properties[item]["additionalItems"]={
            type: setFrames.properties[item].type,
            info: setFrames.properties[item].info,
            title: item,
        }
        //ui
        propertiesUI[item]["additionalItems"]=setFrames.uiSchema[item]
        propertiesUI[item]["ui:options"] = {
            addable: true,
            orderable: false,
            removable: true
        }
        propertiesUI[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
    }
    else if(mode === VIEW){
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

export function makeSetDocuments  (setFrames, item, selectDocType, uiFrame, mode, formData, onTraverse, onSelect) {
    let properties={}, propertiesUI={}

    var  layout= {
        type: "array",
        title: mode === VIEW ? getTitle() : getSetTitle(),
        items: setFrames.properties[item]
    }

    if(mode !== CREATE && formData.hasOwnProperty(item)){
        var filledItems = []

        let defaultValues = setFrames.properties[item].default
        defaultValues.map(def => {
            filledItems.push({
                default: def,
                enum: setFrames.properties[item].enum,
                info: setFrames.properties[item].info,
                type: setFrames.properties[item].type,
                title: item
            })
        })

        layout["items"]=filledItems
    }

    //schema
    properties[item] = layout

    // get select component with no required
    function getOptionalSelect (props) {

        const loadOptions = async (inputValue, callback) => {
            let opts = await onSelect(inputValue, selectDocType)
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
                styles={SELECT_STYLES}
                placeholder={props.uiSchema["ui:placeholder"]}
                onChange={onChange}
                loadOptions={loadOptions}
                defaultOptions
                defaultValue={{value: props.formData, label: props.formData}}
                onInputChange={handleInputChange}
            />
        </React.Fragment>
    }


    //default ui:schema
    if(mode !== VIEW && setFrames.uiSchema[item] && setFrames.uiSchema[item]["ui:field"]){
        //setFrames.uiSchema[item]["ui:field"]=getOptionalSelect
        setFrames.uiSchema[item]["ui:field"]=getOptionalSelect
    }


    function getViewSelect (props) {
        const [clicked, setClicked]=useState(false)

        useEffect(() => {
            if(!clicked) return
            if(onTraverse) onTraverse(clicked)
        }, [clicked])

        const handleClick = (e) => { // view if on traverse function defined
            setClicked(e.target.value)
        }
        return <React.Fragment>
            <Form.Label  className="col-md-1">{item}</Form.Label>
            <span onClick={(e) => handleClick(e, props.formData)} className="tdb__span__select">{props.formData}</span>
        </React.Fragment>
    }

    var ui = {}
    if(mode === VIEW) {
        for(var u in setFrames.uiSchema[item]) {
            if(u == "ui:field"){
                //ui[u]=setFrames.uiSchema[item][u]
                ui[u]=getViewSelect
            }
            else ui[u]=setFrames.uiSchema[item][u]
        }
    }
    else ui = setFrames.uiSchema[item]
    propertiesUI[item] = {
        "items": ui
    }

    if(mode !== VIEW) { // we do not allow to add extra on view mode
        // layout
        properties[item]["additionalItems"]={
            info: setFrames.properties[item].info,
            type: setFrames.properties[item].type,
            enum: setFrames.properties[item].enum,
            title: item
        }
        //ui
        propertiesUI[item]["additionalItems"]=setFrames.uiSchema[item]
        propertiesUI[item]["ui:options"] = {
            addable: true,
            orderable: false,
            removable: true
        }
        propertiesUI[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
    }

    if(mode === VIEW && !formData.hasOwnProperty(item)) {       // hide add options on view
        propertiesUI[item]["ui:options"] = {
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
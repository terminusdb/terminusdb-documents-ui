import React, {useState, useEffect} from "react"
import {getSubDocumentTitle, getSubDocumentDescription} from "./utils"
import {CREATE, DOCUMENT, VIEW, SELECT_STYLES} from "./constants"
import {Form} from "react-bootstrap"
import AsyncSelect from 'react-select/async'
import {AsyncTypeahead} from 'react-bootstrap-typeahead'

export function subDocumentTypeFrames (frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    let properties={}, propertiesUI={}
    var defaultValue

    // on edit or view
    if(mode !== CREATE && formData && formData.hasOwnProperty(item)){
        let filled= formData[item]
        if(Array.isArray(filled)){
            filled.map(val => {
                for(var key in val) {
                    if(frame.properties[key]){ // frame exists and we add a default
                        frame.properties[key]["default"] = val[key].toString()
                    }
                }
            })
        }
        else { //json object
            for(var key in filled) {
                if(frame.properties[key]){ // frame exists and we add a default
                    frame.properties[key]["default"] = filled[key]//.toString()
                }
            }
        }

    }


    let layout = {
        type: "object",
        title: item,
        info: "SUBDOCUMENT",
        properties: frame.properties,
        required: Array.isArray(frame.required) ? frame.required : []
    }

    //schema
    properties[item] = layout

    propertiesUI[item] = {
        "ui:field": "collapsible",
        collapse: {
            field: "ObjectField",
            classNames:"tdb__subdocument__collapse_headers",
        },
        classNames: "card bg-secondary p-4 mt-4 mb-4",
        "ui:description": getSubDocumentDescription(item),
        "ui:title": getSubDocumentTitle(item),
    }

    // copy ui schema of data type to new ui
    for(var key in frame.uiSchema) {
        propertiesUI[item][key] = frame.uiSchema[key]
        if(frame.properties[key].info === DOCUMENT){
            function getSelect(props) {
                const loadOptions = async (inputValue, callback) => {
                    let opts = await onSelect(inputValue, frame.properties[props.name]["linked_to"])
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

                if( props.formData) {
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

            function getTypeAheadSelect(props) {
                const [isLoading, setIsLoading] = useState(false)
                const [options, setOptions] = useState([])

                const handleSearch = async(inputValue) => {
                    setIsLoading(true)
                    let opts = await onSelect(inputValue, props.schema.linked_to)
                    setOptions(opts)
                    setIsLoading(false)
                }

                // Bypass client-side filtering by returning `true`. Results are already
                // filtered by the search endpoint, so no need to do it again.
                const filterBy = () => true

                const getLabelKey = (option) => {
                    props.onChange(option.value)
                    return option.label
                }

                return <React.Fragment>
                    <Form.Label>{props.name} <span class="required">*</span> </Form.Label>
                    <Form.Group className="d-flex">
                        <AsyncTypeahead
                            filterBy={filterBy}
                            id={`${props.name}_async_search`}
                            isLoading={isLoading}
                            //labelKey={(option) => `${option.label}`}
                            labelKey={(option) => `${getLabelKey(option)}`}
                            minLength={2}
                            onSearch={handleSearch}
                            options={options}
                            classNames="tdb__input"
                            styles={SELECT_STYLES}
                            placeholder={`Type to search for ${props.schema.linked_to} ...`}
                            renderMenuItemChildren={(option, props) => (
                            <React.Fragment>
                                <span>{option.label}</span>
                            </React.Fragment>
                            )}
                        />
                    </Form.Group>
                </React.Fragment>
            }
            propertiesUI[item][key]["ui:field"]=getSelect
        }
    }


    // for view mode - logic to click through on traverse
    if(mode === VIEW && properties[item].properties){
        for(var key in properties[item].properties) {

            function getViewSelect (props) {
                const [clicked, setClicked]=useState(false)

                useEffect(() => {
                    if(!clicked) return
                    if(onTraverse) onTraverse(clicked)
                }, [clicked])

                const handleClick = (id) => { // view if on traverse function defined
                    setClicked(id)
                }

                return <React.Fragment>
                    <Form.Label  className="col-md-1 control-label">{props.name}</Form.Label>
                    <span className="tdb__span__select form-control" onClick={(e) => handleClick(properties[item].properties[props.name].default)}>
                        {properties[item].properties[props.name].default}
                    </span>
                </React.Fragment>
            }


            if(properties[item].properties[key].info === DOCUMENT) {
                propertiesUI[item][key]["ui:field"]=getViewSelect
            }
        }
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
        if(uiFrame[item].hasOwnProperty("ui:collapsible") && uiFrame[item]["ui:collapsible"]){
            propertiesUI[item]["ui:field"] = "collapsible",
            propertiesUI[item]["collapse"] = {
                field: "ObjectField",
                classNames:"tdb__subdocument__collapse_headers",
            }
        }
    }

    // hide entire widget if not available in filled frame
    if(mode === VIEW) {
        if(Array.isArray(formData)){
            // in case of subdocuments set dont hide
        }
        else if (!formData.hasOwnProperty(item)) {
            const hidden = () => <div/>
            propertiesUI[item] = {"ui:field": hidden }
        }
    }


    return {properties, propertiesUI}
}


export const makeSubDocumentFrames = (frame, item, uiFrame, mode, formData, onTraverse, onSelect) => {
    let madeFrames = subDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect)
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}
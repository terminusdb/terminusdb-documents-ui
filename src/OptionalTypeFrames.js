import React, {useState, useEffect} from "react"
import {DOCUMENT, VIEW, SELECT_STYLES} from "./constants"
import AsyncSelect from 'react-select/async'
import "babel-polyfill"
import 'regenerator-runtime/runtime'
import {Form} from "react-bootstrap"

export function OptionalDocumentTypeFrames (optionalFrames, item, selectDocType, mode, onSelect) {
    if(mode !== VIEW) {

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
    else { //view
        function getOptionalSelectView (props) {
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
                <span onClick={(e) => handleClick(e, props.formData)} className="tdb__span__select">{props.formData}</span>
            </React.Fragment>
        }

        if (optionalFrames.properties[item].default) {
            if(optionalFrames.properties[item].info === DOCUMENT){
                optionalFrames.uiSchema[item]["ui:field"]=getOptionalSelectView
            }
        }
        else {
            optionalFrames.uiSchema[item]["ui:widget"] = "hidden"
        }
    }

    // remove required
    if(Array.isArray(optionalFrames.properties[item].required)) {
        delete optionalFrames.properties[item].required
    }
    console.log("** optionalFrames ** ", optionalFrames)
    return optionalFrames
}
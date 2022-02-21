import React, {useState, useEffect} from "react"
import {DOCUMENT, VIEW, SELECT_STYLES} from "./constants"
import AsyncSelect from 'react-select/async'
import {Form} from "react-bootstrap"
import {AsyncTypeahead} from 'react-bootstrap-typeahead'

export function OptionalDocumentTypeFrames (optionalFrames, uiFrame, item, mode, onSelect) {
    if(mode !== VIEW) {

        // get select component with no required
        function getOptionalSelect (props) {
            const loadOptions = async (inputValue, callback) => {
                var classType
                if(optionalFrames.properties[item].type === "object"){ // subdocument
                    classType = optionalFrames.properties[item].properties[props.name].linked_to
                }
                else if (optionalFrames.properties[item].type === "string"){ // normal
                    classType = optionalFrames.properties[item].linked_to
                }

                let opts = await onSelect(inputValue, classType)
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

            if(props.formData) { //edit
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

        function getOptionalTypeAheadSelect(props){
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


        if(optionalFrames.properties[item] && optionalFrames.properties[item].properties){ // these for optional sets
            for(var props in optionalFrames.properties[item].properties) {
                if(optionalFrames.properties[item].properties[props].info === DOCUMENT &&
                    optionalFrames.uiSchema[item][props]){
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
                <Form.Label className="contol-label">{item}</Form.Label>
                <span onClick={(e) => handleClick(e, props.formData)} className="tdb__span__select form-control">{props.formData}</span>
            </React.Fragment>
        }

        if (optionalFrames.properties[item].default) {
            if(optionalFrames.properties[item].info === DOCUMENT){
                optionalFrames.uiSchema[item]["ui:field"]=getOptionalSelectView
            }
        }
        else {
            if(optionalFrames.properties[item].info !== "SUBDOCUMENT")
                optionalFrames.uiSchema[item]["ui:widget"] = "hidden"
        }
    }

    // remove required
    if(Array.isArray(optionalFrames.properties[item].required)) {
        delete optionalFrames.properties[item].required
    }
    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        optionalFrames.uiSchema[item] = uiFrame[item]
    }

    return optionalFrames
}
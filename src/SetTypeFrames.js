import React, {useState, useEffect} from "react"
import {ArrayFieldTemplate, getSetTitle, getTitle, getOptionalSelect, checkIfKey, getDefaultValue, removeDefaultsFromSubDocumentFrame, removeDefaultsFromDataFrame} from "./utils"
import {CREATE, DATA, VIEW, EDIT, SELECT_STYLE_KEY, DOCUMENT, ONEOFVALUES, SELECT_STYLES, ONEOFSUBDOCUMENTS, ONEOFCLASSES} from "./constants"
import {Form} from "react-bootstrap"
import AsyncSelect from 'react-select/async'
import {AsyncTypeahead} from 'react-bootstrap-typeahead'
import {FrameViewer} from "./FrameViewer"
import {getFilledChoiceTypeFrames} from "./FilledChoiceTypeFrames"

//Set Subdocuments
export function makeSetSubDocuments (setFrames, item, uiFrame, mode, formData, onTraverse) {
    let properties={}, propertiesUI={}

    // can pass custom styles via ui frame for react-select
    let selectStyle=SELECT_STYLES

    //custom ui:schema
    if(uiFrame && uiFrame.hasOwnProperty(SELECT_STYLE_KEY)) {
        selectStyle=uiFrame[SELECT_STYLE_KEY]
    }

    if(mode !== VIEW){
        for(var props in setFrames.properties[item]["properties"]) {
            if(setFrames.properties[item]["properties"][props].info === DOCUMENT) {
                setFrames.uiSchema[item][props]["ui:field"]=getOptionalSelect
            }
        }
    }

    var  layout= {
        type: "array",
        title: mode === VIEW ? getTitle() : item,
        items: [
            {
                type: "object",
                properties: setFrames.properties[item]["properties"]
            }
        ]
    }



    // remove hidden widgets from frames - logic for default in subdocuments done here
    for(var key in setFrames.uiSchema[item]) {
        if(setFrames.uiSchema[item][key]["ui:widget"] &&
            key !== "@type" &&
            setFrames.uiSchema[item][key]["ui:widget"] === "hidden") {
            delete setFrames.uiSchema[item][key]["ui:widget"]
        }
    }

    var filledItems = []

    if(mode !== CREATE && formData.hasOwnProperty(item)){

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


            // normal cases which are not @oneOfs
            for(var x=0; x<defaultValues.length; x++){
                filledItems.push({
                    type: "object",
                    properties: setFrames.properties[item]["properties"],
                    default: defaultValues[x]
                })
            }
            layout["items"] = filledItems
        }
    }

    //schema
    properties[item] = layout

    // get filled values on View mode
    if(mode === VIEW && formData.hasOwnProperty(item) && Array.isArray(layout["items"])) {
        var count=0
        layout["items"].map(it => {
            for(var thing in it.properties){
                if(it.properties[thing].info === "ONEOFVALUES" && it.default) {

                }
                else if(it.properties[thing].info === DOCUMENT && it.default && it.default[thing]) {
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
                else if(it.properties[thing].info === "DATA" && it.default) {
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
                else if(it.properties[thing].info === "SUBDOCUMENT" && it.default){
                    for(var flds in it.properties[thing].properties) {
                        function getFieldValue(props){
                            if(!props.formData ||  props.formData===undefined)
                                return <span className="tdb__blank"></span>
                            return <React.Fragment>
                                <Form.Label>{props.name}</Form.Label>
                                <span>{props.formData}</span>
                            </React.Fragment>
                        }
                        if(flds === "@type") propertiesUI[item]["items"][count][thing][flds]["ui:widget"]="hidden"
                        else propertiesUI[item]["items"][count][thing][flds]["ui:field"]=getFieldValue
                    }
                }
                else if(it.properties[thing].info === "CHOICE"){
                    function getFieldValue(props){
                        if(!props.formData ||  props.formData===undefined)
                            return <span className="tdb__blank"></span>
                        return <React.Fragment>
                            <Form.Label className="col-md-1">{props.name}</Form.Label>
                            <span>{props.formData.value}</span>
                        </React.Fragment>
                    }
                    propertiesUI[item]["items"][count][thing] = {
                            "ui:field" : getFieldValue
                    }
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
        const hidden = () => <div/>
        propertiesUI[item] = {"ui:field": hidden }
        //propertiesUI[item] = {"ui:widget" : "hidden"}
    }


    var subProperties = setFrames.properties[item]["properties"]

    // check for @oneOf (used in seshat) // separate logic to get filled frames
    if(mode!==CREATE && formData.hasOwnProperty(item) && subProperties.hasOwnProperty(ONEOFVALUES)) {
        let filledChoiceTypeFrames = getFilledChoiceTypeFrames(item, formData, mode, setFrames, properties, propertiesUI)
        properties[item] = filledChoiceTypeFrames[item]
    }
    /*else if(mode === VIEW && !formData.hasOwnProperty(item)) {
        const hidden = () => <div/>
        propertiesUI[item]={"ui:field": hidden}
        return {properties, propertiesUI}
    }*/

    return {properties, propertiesUI}
}

//Set Data types
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
        propertiesUI[item]["ui:title"] = item
    }

    return {properties, propertiesUI}
}


//Set Document Classes
export function makeSetDocuments  (setFrames, item, selectDocType, uiFrame, mode, formData, onTraverse, onSelect) {
    let properties={}, propertiesUI={}

    // can pass custom styles via ui frame for react-select
    let selectStyle=SELECT_STYLES

    //custom ui:schema
    if(uiFrame && uiFrame.hasOwnProperty(SELECT_STYLE_KEY)) {
        selectStyle=uiFrame[SELECT_STYLE_KEY]
    }


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

        if(props.formData) {
            return <React.Fragment>
                <Form.Label>{props.name} </Form.Label>
                <AsyncSelect
                    cacheOptions
                    classNames="tdb__input"
                    styles={selectStyle}
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
                styles={selectStyle}
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
                    styles={selectStyle}
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


    //default ui:schema
    if(mode !== VIEW && setFrames.uiSchema[item] && setFrames.uiSchema[item]["ui:field"]){
        setFrames.uiSchema[item]["ui:field"]=getOptionalSelect
        //setFrames.uiSchema[item]["ui:field"]=getOptionalTypeAheadSelect
    }


    function getViewSelect (props) {
        const [clicked, setClicked]=useState(false)

        useEffect(() => {
            if(!clicked) return
            if(onTraverse) onTraverse(clicked)
        }, [clicked])

        const handleClick = (e, value) => { // view if on traverse function defined
            setClicked(value)
        }
        return <React.Fragment>
            <Form.Label  className="control-label">{item}</Form.Label>
            <span onClick={(e) => handleClick(e, props.formData)} className="tdb__span__select form-control">{props.formData}</span>
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




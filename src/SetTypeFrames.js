import React, {useState, useEffect} from "react"
import {ArrayFieldTemplate, getSetTitle, getTitle, getOptionalSelect, checkIfKey, getDefaultValue, removeDefaultsFromSubDocumentFrame, removeDefaultsFromDataFrame} from "./utils"
import {CREATE, DATA, VIEW, DOCUMENT, SELECT_STYLES, ONEOFSUBDOCUMENTS, ONEOFCLASSES} from "./constants"
import {Form} from "react-bootstrap"
import AsyncSelect from 'react-select/async'
import {AsyncTypeahead} from 'react-bootstrap-typeahead'
import {FrameViewer} from "./FrameViewer"


//Set Subdocuments
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

    // remove hidden widgets from frames - logic for default in subdocuments done here
    for(var key in setFrames.uiSchema[item]) {
        if(setFrames.uiSchema[item][key]["ui:widget"] &&
            key !== "@type" &&
            setFrames.uiSchema[item][key]["ui:widget"] === "hidden") {
            delete setFrames.uiSchema[item][key]["ui:widget"]
        }
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

            function checkProperties(properties, value) {
                for(var props in properties){
                    if(props === "@oneOf"){ // alter the structure for @oneOf type
                        for(var thing in value){
                            properties[props]["oneOf"].map(aOf => {
                                if(aOf["properties"] && aOf["properties"][thing]){
                                    properties[thing] = aOf["properties"][thing]
                                    properties[thing].info = ONEOFSUBDOCUMENTS
                                }
                            })
                        }
                        propertiesUI[item]["items"][0][thing] = setFrames.uiSchema[item][props][thing]
                        if(mode === VIEW){ // hide one of calue which are empty
                            for(var thing in value){
                                for(var uiProps in propertiesUI[item]["items"][0][thing]) {
                                    if(!value[thing][uiProps]){
                                        if(propertiesUI[item]["items"][0][thing][uiProps]["ui:title"]) { // use ui:title here to see the fields - review later
                                            const hidden = () => <div/>
                                            propertiesUI[item]["items"][0][thing][uiProps] = {"ui:field": hidden }
                                        }
                                    }
                                }
                            }
                        }
                        delete properties[props]
                    }
                }
                return properties
            }

            defaultValues.map(value => {

                filledItems.push({
                    type: "object",
                    //properties: checkProperties(setFrames.properties[item]["properties"], value), //setFrames.properties[item]["properties"],
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
                if(it.properties[thing].info === "SUBDOCUMENT" && it.default){
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
                /*if(it.properties[thing].info === ONEOFSUBDOCUMENTS && it.default){ // we alter properties of @oneOf
                    for(var flds in it.properties[thing].properties) {
                        function getFieldValue(props){
                            if(!props.formData ||  props.formData===undefined)
                                return <span className="tdb__blank"></span>
                            return <React.Fragment>
                                <Form.Label>{props.name}</Form.Label>
                                <span>{props.formData}</span>
                            </React.Fragment>
                        }

                        //propertiesUI[item]["items"].push(setFrames.uiSchema[item][props][thing])
                        //if(flds === "@type") propertiesUI[item]["items"][count][thing][flds]["ui:widget"]="hidden"
                        //else propertiesUI[item]["items"][count][thing][flds]["ui:field"]=getFieldValue
                    }
                }*/
                if(it.properties[thing].info === "CHOICE"){
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

// Set One Of Class frames
export function makeSetOneOfClassFrames(fullFrame, frame, item, uiFrame,  mode, formData, prefix) {


    let properties={}, propertiesUI={}

    let anyOfArray=[]

    function getUIField(props) {
        let formDataValue = props.schema.hasOwnProperty("default") ? props.schema.default : {}
        const [input, setInput]=useState(formDataValue)
        let schema = fullFrame

        function handleFormChange(data){
            let jsonData = {
                "@type": props.name,
                "@info": ONEOFCLASSES
            }
            setInput(data)
            for(var thing in data){
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
                type={props.name}
                uiFrame={uiSchema}
                formData={input}
            />
        </React.Fragment>
    }



    function extractProperties(subFrame, documentClass, item, formData, count, mode) {
        var structure = {}
        structure = {
            title: documentClass,
            properties: {
                [documentClass]: {
                    type: typeof subFrame === "object" ? "object" : "string"
                }
            }
        }
        if(mode !== CREATE && formData.hasOwnProperty(item)){
            formData[item].map(par => {
                if(typeof subFrame === "object" && par.hasOwnProperty("@type") && par["@type"] === documentClass) {
                    structure.properties[documentClass]["default"] = par
                }
                else if(typeof subFrame === "string"){
                    structure.properties[documentClass]["default"] = par
                }
            })
        }
        if(mode !== CREATE && formData.hasOwnProperty(item) && formData[item][count]["@type"] !== documentClass){
            return {}
        }
        else return structure
    }

    if(frame[item] && Array.isArray(frame[item]))  {
        var extracted=[], documentClass, documentClassUi = {}
        var count = 0
        frame[item].map(it => {
            if(typeof it === "object"){
                documentClass=it["@class"]
                extracted.push(extractProperties(it, it["@class"], item, formData, count, mode))
                documentClassUi[documentClass] =  {
                    "ui:field": getUIField
                }
            }
            else { // document class
                documentClass=it
                extracted.push(extractProperties(it, it, item, formData, count, mode))
            }

            count += 1
        })
        anyOfArray = extracted
        //item property ui
        if(mode === VIEW && !formData.hasOwnProperty(item)){ // do not display if no value in formdata
            propertiesUI[item] = {}
        }
        propertiesUI[item] = {
            "items" : documentClassUi
        }
    }

    var layout = {}

    if(Array.isArray(frame[item]) && frame[item].length > 0) {
        layout = {
            type: "array",
            info: "DATA",
            title: item,
            description: `Choose ${item} from the list ...`,
            items: {
                type: "object",
                anyOf: anyOfArray
            }
        }
    }

    if(mode === VIEW && !formData.hasOwnProperty(item)) { // do not display
        layout = {
            type: 'object',
            info: "DATA",
            title: item
        }
    }

    //if(mode !== CREATE && formData.hasOwnProperty(item)) {
        //layout["default"]=getDefaultValue(item, formData)
    //}

    // schema
    properties[item] = layout


    propertiesUI[item]["ui:title"] = getTitle(item, checkIfKey(item, frame["@key"]))
    propertiesUI[item]["classNames"] = mode===VIEW ? "tdb__input mb-3 mt-3 form-label tdb__view__input" : "tdb__input mb-3 mt-3"




    if(mode !== VIEW) { // we do not allow to add extra on view mode
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
    else if(mode === VIEW){
        propertiesUI[item]["ui:options"] = { // disable add more on view
            addable: false,
            orderable: false,
            removable: false
        }
    }




    if(mode === VIEW && !Array.isArray(formData) && !formData.hasOwnProperty(item)){ // set of subdocuments
        const hidden = () => <div/>
        propertiesUI[item]["ui:widget"]= hidden
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}

}
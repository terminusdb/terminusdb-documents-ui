import React, {useEffect, useState} from "react"
import Form from "@terminusdb/rjsf-core"
import {getProperties} from "./FrameHelpers"
import CollapsibleField from "react-jsonschema-form-extras/lib/CollapsibleField"
import {TDB_SCHEMA, SUBMIT_BUTTON_STYLE_KEY, VIEW, EDIT, CREATE, DOCUMENTATION} from "./constants"
import {Alert, Button} from "react-bootstrap"
import {isValueHashDocument, getValueHashMessage, extractDocumentation} from "./utils"
import {transformData} from "./extract"

/*
**  frame     - full json schema of a document
**  uiFrame   - ui json of a document
**  type      - document type of interest
**  mode      - create/ edit/ view
**  submitButton - submit button configuration json object
**  formData  - filled value of the document
**  onSubmit  - a function with have custom logic to process data submitted
**  hideSubmit - hides Submit button - this is helpfull when you want to display nested FrameViewers
**  onChange   - a function with custom logic to process data when form data is changed
**  onSelect   - a js function which gets back the selected value from selects
**  onTraverse - a js function which gets back the ID of a document on click
**  FieldTemplate - a js function which you can pass at root level of FrameViewer to alter look and feel of fields
*/
export function FrameViewer({frame, uiFrame, type, mode, submitButton, formData, onSubmit, onTraverse, onSelect, hideSubmit, onChange, FieldTemplate}){

    const [prefix, setPrefix]=useState(TDB_SCHEMA)
    const [schema, setSchema]=useState(false)
    const [uiSchema, setUISchema]=useState(false)
    const [readOnly, setReadOnly]=useState(false)
    const [error, setError]=useState(false)
    const [input, setInput]=useState({})
    //const [definitions, setDefinitions]=useState({})

    const [message, setMessage]=useState(false)


    if(!frame) return <div>No schema provided!</div>
    if(!mode) return  <div>Please include a mode - Create/ Edit/ View</div>
    if(mode === VIEW && !formData) return <div>Mode is set to View, please provide filled form data</div>
    if(!type) return  <div>Please include the type of document</div>

    //let extractedPrefix = getPrefix(frame)
    //let current = `${extractedPrefix}${type}`
    let current = `${type}`


    useEffect(() => {
        //setPrefix(extractedPrefix)
        try{
            //console.log("extractedPrefix", extractedPrefix)
            //console.log("frame", frame)
            //let properties = getProperties(frame, frame[current], uiFrame, documents, mode, formData, false, extractedPrefix, onTraverse, onSelect)

            let documentation= extractDocumentation(frame, current)
            let properties=getProperties(frame, type, frame[current], uiFrame, mode, formData, onTraverse, onSelect, documentation)
            
            let schema = {
                type: "object",
                properties: properties.properties,
                required: properties.required,
                dependencies: properties.dependencies,
            }
            //console.log("schema", JSON.stringify(schema, null, 2))
            //console.log("uiSchema", JSON.stringify(properties.uiSchema, null, 2))

            console.log("schema", schema)
            console.log("properties.uiSchema", properties.uiSchema)
            //console.log("uiSchema", uiSchema)

            if(mode === VIEW) {
                setReadOnly(true)
                setInput(formData)
            }
            else if(mode === CREATE) setInput(formData)
            else if(mode === EDIT && isValueHashDocument(frame[current])) {
                setInput(formData)
                setMessage(getValueHashMessage())
                setReadOnly(true)
            }
            else if(onChange) { // form nested frame viewers
                setInput(formData)
            }
            else {
                setReadOnly(false)
                setInput({})
            }
            setSchema(schema)
            const uiSchema = properties.uiSchema

            // get form level ui schema 
            if(uiFrame && uiFrame.hasOwnProperty("classNames")) uiSchema["classNames"]= uiFrame.classNames
            if(uiFrame && uiFrame.hasOwnProperty("ui:order")) uiSchema["ui:order"]=uiFrame["ui:order"]
            if(uiFrame && uiFrame.hasOwnProperty("ui:title")) uiSchema["ui:title"]= uiFrame["ui:title"]
            if(uiFrame && uiFrame.hasOwnProperty("ui:description")) uiSchema["ui:description"]= uiFrame["ui:description"]
            
            // order is set to place @documentation field at the start of the document
            uiSchema["ui:order"] = ["@documentation", "*"]
            // styling submit button
            /*uiSchema["ui:submitButtonOptions"]= {
                "props": {
                   "disabled": false,
                   "className": submitButton.hasOwnProperty("classNames") ? submitButton["classNames"]  : "btn btn-info",
                },
                 "norender": false,
                 "submitText": submitButton.hasOwnProperty("text") ? submitButton["text"] : "Submit"
            }*/

            setUISchema(uiSchema)
        }
        catch(e) {
            setError("An error has occured in generating frames. Err - ", e)
        }

    }, [frame, uiFrame, type, mode, formData]) 


    const handleSubmit = ({formData}) => {
        //console.log("Data before extract: ",  formData)
        if(onSubmit) {

            var extracted = transformData(mode, schema.properties, formData, frame, current, type)
            if(!extracted.hasOwnProperty("@type")) extracted["@type"] = type
            onSubmit(extracted)
            console.log("Data submitted: ",  extracted)
            //console.log("Data submitted: ",  JSON.stringify(extracted, null, 2))
        }
    }

    const handleChange = (data) => {
        //console.log("Data changed: ",  data)
        setInput(data)
        if(onChange) {
            onChange(data)
        }
    }


    if(error) {
        return <Alert variant="danger">{error}</Alert>
    }

    //return <>{"HELLO WORLD"}</>

    /*function CustomFieldTemplate(props) {
        const {id, classNames, label, help, required, description, errors, children} = props;
        var css
        console.log("props", props)
        if(label === "address") css = "d-none"
        return (
          <div className={css}>
            <label htmlFor={id}>{label}{required ? "*" : null}</label>
            {description}
            {children}
            {errors}
            {help}
          </div>
        );
      }*/

    /*let submitButtonCss="btn-info"
    if(uiFrame && Object.keys(uiFrame).length && uiFrame.hasOwnProperty(SUBMIT_BUTTON_STYLE_KEY)) {
        submitButtonCss=uiFrame[SUBMIT_BUTTON_STYLE_KEY]
    }*/

    return <React.Fragment>
        {schema && message && message}
        {schema && <Form schema={schema}
            uiSchema={uiSchema}
            mode={mode} 
            onSubmit={handleSubmit}
            readonly={readOnly}
            formData={input}
            onChange={({formData}) => handleChange(formData)}
            fields={{
                collapsible: CollapsibleField
            }}
            children={hideSubmit} // hide submit button on view mode
            FieldTemplate={FieldTemplate}
        >
            {/*<div>
                <Button type="submit" className={submitButtonCss}>Submit</Button>
        </div>*/}
        </Form>
    }
    </React.Fragment>
 }


 /*<pre>
    {JSON.stringify(schema, null, 2)}
</pre>*/

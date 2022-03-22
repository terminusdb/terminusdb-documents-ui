import React, {useEffect, useState} from "react"
import Form from "@terminusdb/rjsf-core"
import {getProperties} from "./FrameHelpers"
import CollapsibleField from "react-jsonschema-form-extras/lib/CollapsibleField"
import {TDB_SCHEMA} from "./constants"
import {Alert} from "react-bootstrap"
import {VIEW, EDIT} from "./constants"
import {formatData, getPrefix, isValueHashDocument, getValueHashMessage} from "./utils"
import {transformData} from "./extract"

/*
**  frame     - full json schema of a document
**  uiFrame   - ui json of a document
**  type      - document type of interest
**  mode      - create/ edit/ view
**  documents - document list
**  formData  - filled value of the document
**  onSubmit  - a function which can have custom logic to process data submitted
**  hideSubmit - hides Submit button - this is helpfull when you want to display nested FrameViewers
**  onChange   - a function which have custom logic to process data when form data is changed
**  onSelect   - a js function which gets back the selected value from selects
**  FieldTemplate - a js function which you can pass at root level of FrameViewer to alter look and feel of fields
*/
export function FrameViewer({frame, uiFrame, type, mode, documents, formData, onSubmit, onTraverse, onSelect, hideSubmit, onChange, FieldTemplate}){

    const [prefix, setPrefix]=useState(TDB_SCHEMA)
    const [schema, setSchema]=useState(false)
    const [uiSchema, setUISchema]=useState(false)
    const [readOnly, setReadOnly]=useState(false)
    const [error, setError]=useState(false)
    const [input, setInput]=useState({})
    //const [definitions, setDefinitions]=useState({})

    const [message, setMessage]=useState(false)

    if(type === "Owner") {
        console.log("Owner")
    }


    if(!frame) return <div>No schema provided!</div>
    if(!mode) return  <div>Please include a mode - Create/ Edit/ View</div>
    if(mode === VIEW && !formData) return <div>Mode is set to View, please provide filled form data</div>
    if(!type) return  <div>Please include the type of document</div>

    let extractedPrefix = getPrefix(frame)
    let current = `${extractedPrefix}${type}`


    useEffect(() => {
        setPrefix(extractedPrefix)
        //try{
            //console.log("extractedPrefix", extractedPrefix)
            //console.log("frame", frame)
            let properties = getProperties(frame, frame[current], uiFrame, documents, mode, formData, false, extractedPrefix, onTraverse, onSelect)
            let definitions = {
                testdef: {
                    title: "test",
                    type: "string"
                }
            }
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
            console.log("uiSchema", uiSchema)

            if(mode === VIEW) {
                setReadOnly(true)
                setInput(formData)
            }
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
            if(uiFrame && uiFrame.classNames) uiSchema["classNames"]= uiFrame.classNames
            if(uiFrame && uiFrame["ui:title"]) uiSchema["ui:title"]= uiFrame["ui:title"]
            if(uiFrame && uiFrame["ui:description"]) uiSchema["ui:description"]= uiFrame["ui:description"]
            setUISchema(uiSchema)
        //}
        //catch(e) {
          //  setError("An error has occured in generating frames. Err - ", e)
        //}

    }, [frame, uiFrame, type, mode, formData])


    const handleSubmit = ({formData}) => {
        console.log("Data before extract: ",  formData)
        if(onSubmit) {

            var extracted = transformData(mode, schema, formData, frame, current, type)

            //var extracted=formatData(mode, schema, formData, frame, current, type)
            onSubmit(extracted)
            console.log("Data submitted: ",  extracted)
            //console.log("Data submitted: ",  JSON.stringify(extracted, null, 2))
        }
    }

    const handleChange = (data) => {
        console.log("Data changed: ",  data)
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

    return <React.Fragment>
        {schema && message && message}
        {schema && <Form schema={schema}
            uiSchema={uiSchema}
            mode={mode}
            onSubmit={handleSubmit}
            //onBlur={e => handleBlur(e.formData)}
            readonly={readOnly}
            formData={input}
            onChange={({formData}) => handleChange(formData)}
            fields={{
                collapsible: CollapsibleField
            }}
            //liveValidate={false}
            //omitExtraData={true}
            //showErrorList={false}
            children={hideSubmit} // hide submit button on view mode
            FieldTemplate={FieldTemplate}
        />}
    </React.Fragment>
 }


 /*<pre>
    {JSON.stringify(schema, null, 2)}
</pre>*/

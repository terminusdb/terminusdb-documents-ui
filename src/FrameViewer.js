import React, {useEffect, useState} from "react"
import Form from "@rjsf/core"
import {getProperties} from "./FrameHelpers"
import CollapsibleField from "react-jsonschema-form-extras/lib/CollapsibleField"
import {TDB_SCHEMA} from "./constants"
import {Alert} from "react-bootstrap"
import {VIEW, EDIT} from "./constants"
import {formatData, getPrefix, isValueHashDocument, getValueHashMessage} from "./utils"


/*
**  frame     - full json schema of a document
**  uiFrame   - ui json of a document
**  type      - document type of interest
**  mode      - create/ edit/ view
**  documents - document list
**  formData  - filled value of the document
**  onSubmit  - a function which can have custom logic to process data submitted
*/
export function FrameViewer({frame, uiFrame, type, mode, documents, formData, onSubmit, onTraverse, onSelect}){

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

    let extractedPrefix = getPrefix(frame)
    let current = `${extractedPrefix}${type}`


    useEffect(() => {
        setPrefix(extractedPrefix)
        //try{
            console.log("extractedPrefix", extractedPrefix)
            console.log("frame", frame)
            let properties = getProperties(frame, frame[current], uiFrame, documents, mode, formData, false, extractedPrefix, onTraverse, onSelect)
            /*let properties ={                properties:{},
                required: {},
                dependencies:{},
                uiSchema:{}
            }*/
            console.log("definitions", definitions)
            let definitions = {
                testdef: {
                    title: "test",
                    type: "string"
                }
            }
            const schema = {
                type: "object",
                properties: properties.properties,
                required: properties.required,
                dependencies: properties.dependencies
            }
            //console.log("schema", JSON.stringify(schema, null, 2))
            console.log("schema", schema)
            console.log("properties.uiSchema", properties.uiSchema)
            console.log("uiSchema", uiSchema)
            console.log("required", properties.required)
            if(mode === VIEW) {
                setReadOnly(true)
                setInput(formData)
            }
            else if(mode === EDIT && isValueHashDocument(frame[current])) {
                setInput(formData)
                setMessage(getValueHashMessage())
                setReadOnly(true)
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
            var extracted=formatData(formData, frame, current)
            onSubmit(extracted)
            console.log("Data submitted: ",  extracted)
            //console.log("Data submitted: ",  JSON.stringify(extracted, null, 2))
        }
    }

    if(error) {
        return <Alert variant="danger">{error}</Alert>
    }

    //return <>{"HELLO WORLD"}</>

    /*function CustomFieldTemplate(props) {
        const {id, classNames, label, help, required, description, errors, children} = props;
        return (
          <div className={"test"}>
            <label htmlFor={id}>{label}{required ? "*" : null}</label>
            {description}
            {children}
            {errors}
            {help}
          </div>
        );
      }*/

    return <div>
        {schema && message && message}
        {schema && <Form schema={schema}
            uiSchema={uiSchema}
            mode={mode}
            onSubmit={handleSubmit}
            readonly={readOnly}
            formData={input}
            onChange={({formData}) => setInput(formData)}
            fields={{
                collapsible: CollapsibleField
            }}
            liveValidate={false}
            //omitExtraData={true}
            //showErrorList={false}
            children={readOnly} // hide submit button on view mode
            //FieldTemplate={CustomFieldTemplate}
        />}
    </div>
 }


 /*<pre>
    {JSON.stringify(schema, null, 2)}
</pre>*/

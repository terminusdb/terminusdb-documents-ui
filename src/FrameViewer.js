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
export function FrameViewer({frame, uiFrame, type, mode, documents, formData, onSubmit, onTraverse}){

    const [prefix, setPrefix]=useState(TDB_SCHEMA)
    const [schema, setSchema]=useState(false)
    const [uiSchema, setUISchema]=useState(false)
    const [readOnly, setReadOnly]=useState(false)
    const [error, setError]=useState(false)
    const [input, setInput]=useState({})

    const [message, setMessage]=useState(false)


    if(!frame) return <div>No schema provided!</div>



    useEffect(() => {
        let extractedPrefix = getPrefix(frame)
        setPrefix(extractedPrefix)
        let current = `${extractedPrefix}${type}`
        //try{
            let properties = getProperties(frame, frame[current], uiFrame, documents, mode, formData, false, extractedPrefix, onTraverse)
            const schema = {
                "type": "object",
                "properties": properties.properties,
                "required": properties.required,
                "dependencies": properties.dependencies
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
            setUISchema(uiSchema)
        //}
        //catch(e) {
          //  setError("An error has occured in generating frames. Err - ", e)
        //}

    }, [frame, uiFrame, type, mode, formData])


    const handleSubmit = ({formData}) => {
        if(onSubmit) {
            var extracted=formatData(formData)
            onSubmit(extracted)
            console.log("Data submitted: ",  extracted)
        }
    }

    if(error) {
        return <Alert variant="danger">{error}</Alert>
    }

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
            children={readOnly} // hide submit button on view mode
        />}
    </div>
 }


 /*<pre>
    {JSON.stringify(schema, null, 2)}
</pre>*/

import React, {useEffect, useState} from "react"
import Form from "@rjsf/core"
import {getProperties} from "./FrameHelpers"
import CollapsibleField from "react-jsonschema-form-extras/lib/CollapsibleField"
import {TDB_SCHEMA} from "./constants"
import {Alert} from "react-bootstrap"
import {VIEW} from "./constants"

/*
**  frame   - full json schema of a document
**  uiFrame - ui json of a document
**  type    - document type of interest
**  mode    - create/ edit/ view
*/
export function FrameViewer({frame, uiFrame, type, mode, documents, formData}){
    const [schema, setSchema]=useState(false)
    const [uiSchema, setUISchema]=useState(false)
    const [readOnly, setReadOnly]=useState(false)

    const [error, setError]=useState(false)

    if(!frame) return <div>No schema provided!</div>

    useEffect(() => {
        let current = `${TDB_SCHEMA}${type}`
        //try{
            let properties = getProperties(frame, frame[current], uiFrame, documents, mode, formData, false)
            const schema = {
                "type": "object",
                "properties": properties.properties,
                "required": properties.required,
                "dependencies": properties.dependencies
            }
            setSchema(schema)
            const uiSchema = properties.uiSchema
            if(uiFrame.classNames) uiSchema["classNames"]=uiFrame.classNames
            setUISchema(uiSchema)
            console.log("schema", JSON.stringify(schema, null, 2))
            console.log("schema", schema)
            console.log("uiSchema", uiSchema)
            if(mode === VIEW) setReadOnly(true)
            else setReadOnly(false)
        //}
        //catch(e) {
          //  setError("An error has occured in generating frames. Err - ", e)
        //}

    }, [frame, uiFrame, type, mode, formData])


    const onSubmit = ({formData}) => {
        console.log("Data submitted: ",  formData)
    }

    if(error) {
        return <Alert variant="danger">{error}</Alert>
    }

    return <div>
        {schema && <Form schema={schema}
            uiSchema={uiSchema}
            mode={mode}
            onSubmit={onSubmit}
            readonly={readOnly}
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

import React, {useEffect, useState} from "react"
import Form from "@rjsf/core"
import {getProperties} from "./FrameHelpers"
import CollapsibleField from "react-jsonschema-form-extras/lib/CollapsibleField"

/*
**  frame   - full json schema of a document
**  uiFrame - ui json of a document
**  mode    - create/ edit/ view
*/
export function FrameViewer({frame, uiFrame, mode, subDocumentFrame}){
    const [schema, setSchema]=useState(false)
    const [uiSchema, setUISchema]=useState(false)

    if(!frame) return <div>No schema provided!</div>

    useEffect(() => {
        let properties = getProperties(frame, uiFrame, subDocumentFrame, mode)
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
        console.log("uiSchema", uiSchema)
    }, [frame, uiFrame])


    return <div>
        {schema && <Form schema={schema}
            uiSchema={uiSchema}
            mode={mode}
            fields={{
                collapsible: CollapsibleField
            }}
        />}
    </div>
 }


 /*<pre>
    {JSON.stringify(schema, null, 2)}
</pre>*/

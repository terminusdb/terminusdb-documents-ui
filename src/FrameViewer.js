import React, {useEffect, useState} from "react"
import Form from "@rjsf/core"
import {getProperties} from "./FrameHelpers"

export function FrameViewer({frame, uiFrame, edit}){
    const [schema, setSchema]=useState(false)
    const [uiSchema, setUISchema]=useState(false)

    if(!frame) return <div>No schema provided!</div>

    useEffect(() => {
        let properties = getProperties(frame)
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

    }, [frame, uiFrame])


    return <div>
        {/*<pre>
            {JSON.stringify(schema, null, 2)}
        </pre>*/}
        {schema && <Form schema={schema}
            uiSchema={uiSchema}
        />}
    </div>
 }

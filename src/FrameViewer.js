import React from "react"

export function FrameViewer({schema}){

    if(!schema) return <div>No schema provided!</div>

    return <div>
        <pre>
            {JSON.stringify(schema, null, 2)}
        </pre>
    </div>
 }

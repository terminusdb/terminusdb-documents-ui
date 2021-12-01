import React from 'react'
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'
import {DEMO_DOCUMENTS} from "./sample"

export const Output = ({schema, uiSchema, type, mode, formData}) => {
    return <React.Fragment>
        <h3 className="mt-5 mb-4 text-warning">Output</h3>
        <FrameViewer
            frame={schema}
            uiFrame={uiSchema}
            type={type}
            documents={DEMO_DOCUMENTS}
            formData={formData}
            mode={mode}/>
    </React.Fragment>
}
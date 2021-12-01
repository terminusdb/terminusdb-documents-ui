import React from 'react'
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'
import {DEMO_DOCUMENTS} from "./sample"

export const Output = ({schema, uiSchema, type}) => {
    return <React.Fragment>
        <FrameViewer
            frame={schema}
            uiFrame={uiSchema}
            type={type}
            documents={DEMO_DOCUMENTS}/>
    </React.Fragment>
}
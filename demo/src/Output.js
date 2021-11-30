import React from 'react'
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'
import {DEMO_DOCUMENTS} from "./sample"

export const Output = ({schema, uiSchema}) => {
    return <React.Fragment>
        <FrameViewer frame={schema} uiFrame={uiSchema} type={"Organization"} documents={DEMO_DOCUMENTS}/>
    </React.Fragment>
}
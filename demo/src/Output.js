import React from 'react'
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'
import {SUBDOCUMENT_FRAME} from "./sample"

export const Output = ({schema, uiSchema}) => {
    return <React.Fragment>
        <FrameViewer frame={schema} uiFrame={uiSchema} subDocumentFrame={SUBDOCUMENT_FRAME}/>
    </React.Fragment>
}
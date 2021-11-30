import React from 'react'
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'

export const Output = ({schema, uiSchema}) => {
    return <React.Fragment>
        <FrameViewer frame={schema} uiFrame={uiSchema} document={"Person"}/>
    </React.Fragment>
}
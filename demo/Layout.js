import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'
import React from 'react'
import {DEMO_SCHEMA} from "./schema"

const App= (props) =>{
    return <FrameViewer schema={DEMO_SCHEMA}/>
}

export default App
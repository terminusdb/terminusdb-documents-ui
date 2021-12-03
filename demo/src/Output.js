import React from 'react'
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'
import {DEMO_DOCUMENTS, PROFILE_DEMO_DOCUMENTS} from "./sample"

export const Output = ({schema, uiSchema, type, mode, formData}) => {

    function handleSubmit(e) {
        console.log("*****Data Submitted****", e)
    }

    return <React.Fragment>
        <h3 className="mt-5 mb-4 text-warning">{`Output - ${type}`}</h3>
        <FrameViewer
            frame={schema}
            uiFrame={uiSchema}
            type={type}
            documents={PROFILE_DEMO_DOCUMENTS}
            formData={formData}
            mode={mode}
            onSubmit={handleSubmit}/>
    </React.Fragment>
}
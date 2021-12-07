import React from 'react'
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'
import {DEMO_DOCUMENTS, PROFILE_DEMO_DOCUMENTS} from "./sample"

export const Output = ({schema, uiSchema, type, mode, formData}) => {

    function handleSubmit(data) {
        console.log("*****Data Submitted****", data)
    }

    function handleTraverse(id) {
        console.log("*****Clicked on****", id)
    }

    return <React.Fragment>
        <h3 className="mt-5 mb-4 text-warning">{`Output - ${type}`}</h3>
        <FrameViewer
            frame={schema}
            uiFrame={uiSchema}
            type={type}
            documents={DEMO_DOCUMENTS}
            formData={formData}
            mode={mode}
            onTraverse={handleTraverse}
            onSubmit={handleSubmit}/>
    </React.Fragment>
}
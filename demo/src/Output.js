import React from 'react'
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'
import {DEMO_DOCUMENTS, PROFILE_DEMO_DOCUMENTS, VIEW, EDIT} from "./sample"

export const Output = ({schema, uiSchema, type, mode, formData}) => {

    function handleSubmit(data) {
        console.log("*****Data Submitted****", data)
    }

    function handleTraverse(id) {
        console.log("*****Clicked on****", id)
    }

    function handleSelect(inp){
        //console.log("*****Select****", inp)
        let matched=[]
        let options=[
            { value: 'Art', label: 'Blakey' },
            { value: 'John', label: 'Coltrane' },
            { value: 'Miles', label: 'Davis' },
            { value: 'Herbie', label: 'Hancock' },
            { value: 'Charlie', label: 'Parker' },
            { value: 'Tony', label: 'Williams' },
        ]
        options.map(item => {
            if(item.value.toUpperCase() === inp.toUpperCase()){
                matched.push(item)
            }
        })
        //console.log("matched", matched)
        return matched
    }

    return <React.Fragment>
        <h3 className="mt-5 mb-4 text-warning">{`Output - ${type}`}</h3>
        <FrameViewer
            frame={schema}
            uiFrame={uiSchema}
            type={type}
            documents={PROFILE_DEMO_DOCUMENTS}
            formData={formData}
            onSelect={handleSelect}
            mode={mode}
            onTraverse={handleTraverse}
            onSubmit={handleSubmit}/>
    </React.Fragment>
}
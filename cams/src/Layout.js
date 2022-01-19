import React,{useState, useEffect} from 'react'
import {Container, Row} from "react-bootstrap"
import {CAMS_SCHEMA, CAMS_FORM_DATA, CAMS_TYPE} from "./cams_schema"
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'

const App= (props) =>{
    const [schema, setSchema]=useState(CAMS_SCHEMA)

    function handleSelect(inp){
        console.log("*****Select****", inp)
        let matched=[] //-- TEST DATA
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
        console.log("matched", matched)
        return matched
    }


    return <Container fluid className="p-0 h-100 d-flex justify-content-center mt-5 mb-5">
    <FrameViewer
        frame={schema}
        mode={"Create"}
        formData={CAMS_FORM_DATA}
        type={CAMS_TYPE}
        onSelect={handleSelect}
    />
    </Container>



}

export default App
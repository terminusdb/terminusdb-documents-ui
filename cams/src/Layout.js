import React,{useState, useEffect} from 'react'
import {Container, Row} from "react-bootstrap"
import {CAMS_SCHEMA, CAMS_FORM_DATA, CAMS_TYPE} from "./cams_schema"
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'

const App= (props) =>{
    const [schema, setSchema]=useState(CAMS_SCHEMA)

        return <Container fluid className="p-0 h-100 d-flex justify-content-center mt-5 mb-5">
        <FrameViewer
            frame={schema}
            mode={"View"}
            formData={CAMS_FORM_DATA}
            type={CAMS_TYPE}
        />
    </Container>



}

export default App
import React,{useState, useEffect} from 'react'
import {Container, Row} from "react-bootstrap"
import {SCHEMA, FORM_DATA_POINT_LINE_STRING, TYPE, FORM_DATA_POINT, TEMP} from "./schema"
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'
const TerminusDBClient = require("@terminusdb/terminusdb-client")

const App= (props) =>{
    const [schema, setSchema]=useState(SCHEMA)
    const [mode, setMode]=useState("Edit")



    function handleSelect(inp){
        console.log("*****Select****", inp)
    }

    function handleSubmit(data) {
        console.log("*****Data Submitted ****", data)
    }



    return <React.Fragment>
        <Container fluid className="p-0 h-100 d-flex justify-content-center mt-5 mb-5">
            <div className="p-5 w-100">
                <FrameViewer
                    frame={schema}
                    mode={mode}
                    formData={TEMP}
                    type={TYPE}
                    onSelect={handleSelect}
                    onSubmit={handleSubmit}
                    hideSubmit={mode === "View" ? true : false}
                />
            </div>
        </Container>
    </React.Fragment>



}

export default App
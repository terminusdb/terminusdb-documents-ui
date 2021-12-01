import React,{useState} from 'react'
import {Container, Row} from "react-bootstrap"
import {SchemaEditors} from "./SchemaEditors"
import {DocumentInput} from "./DocumentInput"
import {UIEditors} from "./UIEditors"
import {Output} from "./Output"
import {DEMO_SCHEMA, PROFILE_SCHEMA, DEMO_SCHEMA_UI, DEMO_DOCUMENT_TYPE} from "./sample"

const App= (props) =>{

    const [schema, setSchema]=useState(PROFILE_SCHEMA)
    const [uiSchema, setUISchema]=useState(DEMO_SCHEMA_UI)
    const [type, setType]=useState(DEMO_DOCUMENT_TYPE)

    return <Container fluid className="p-0 h-100 d-flex">
        <div className="side-black ml-2 mt-4 w-100 d-flex">
            <Row>
                <DocumentInput type={type} setType={setType}/>
                <SchemaEditors setSchema={setSchema} schema={schema}/>
                <UIEditors setUISchema={setUISchema} uiSchema={uiSchema}/>
            </Row>
        </div>
            <div className="main-content w-100 ml-2 mt-4">
                <div className="container-fluid" >
                    <Output schema={schema} uiSchema={uiSchema} type={type} />
                </div>
            </div>
    </Container>
}

export default App
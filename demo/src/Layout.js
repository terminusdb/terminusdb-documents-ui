import React,{useState} from 'react'
import {Container, Row} from "react-bootstrap"
import {SchemaEditors} from "./SchemaEditors"
import {UIEditors} from "./UIEditors"
import {Output} from "./Output"
import {DEMO_SCHEMA, PROFILE_SCHEMA, DEMO_SCHEMA_UI} from "./sample"

const App= (props) =>{

    const [schema, setSchema]=useState(PROFILE_SCHEMA)
    const [uiSchema, setUISchema]=useState(DEMO_SCHEMA_UI)

    return <Container fluid className="p-0 h-100 d-flex">
        <div className="side-black w-100 d-flex">
            <Row>
                <SchemaEditors setSchema={setSchema} schema={schema}/>
                <UIEditors setUISchema={setUISchema} uiSchema={uiSchema}/>
            </Row>
        </div>
            <div className="main-content w-100 m-5">
                <div className="container-fluid" >
                    <Output schema={schema} uiSchema={uiSchema}/>
                </div>
            </div>
    </Container>
}

export default App
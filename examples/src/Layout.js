import React,{useState} from 'react'
import {Container, Row} from "react-bootstrap"
import {SchemaEditors} from "./SchemaEditors"
import {DocumentInput} from "./DocumentInput"
import {ModeInput} from "./ModeInput"
import {UIEditors} from "./UIEditors"
import {Output} from "./Output"
import {FormData} from "./FormData"
import {DEMO_ACTION, DEMO_SCHEMA, DEMO_SCHEMA_UI, DEMO_DOCUMENT_TYPE, DEMO_FORM_DATA, CREATE} from "./sample"

const App= (props) =>{

    const [schema, setSchema]=useState(DEMO_SCHEMA) //schema
    const [uiSchema, setUISchema]=useState(DEMO_SCHEMA_UI) //ui schema
    const [type, setType]=useState(DEMO_DOCUMENT_TYPE)  // document type
    const [mode, setMode]=useState(DEMO_ACTION)  // mode
    const [formData, setFormData]=useState(DEMO_FORM_DATA) // formdata => required only on edit/ view

    return <Container fluid className="p-0 h-100 d-flex">
        <div className="side-black ml-2 mt-4 w-100 d-flex">
            <Row style={{width: "750px"}}>
                <DocumentInput type={type} setType={setType}/>
                {mode!==CREATE && <FormData formData={formData} setFormData={setFormData}/>}
                <SchemaEditors setSchema={setSchema} schema={schema}/>
                <UIEditors setUISchema={setUISchema} uiSchema={uiSchema}/>
            </Row>
        </div>
            <div className="main-content w-100 ml-2 mt-4">
                <div className="container-fluid" >
                    <ModeInput mode={mode} setMode={setMode}/>
                    <Output schema={schema} uiSchema={uiSchema} type={type} mode={mode} formData={formData}/>
                </div>
            </div>
    </Container>
}

export default App
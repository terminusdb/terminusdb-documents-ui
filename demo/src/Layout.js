import React,{useState} from 'react'
import {Container, Row} from "react-bootstrap"
import {SchemaEditors} from "./SchemaEditors"
import {DocumentInput} from "./DocumentInput"
import {ModeInput} from "./ModeInput"
import {UIEditors} from "./UIEditors"
import {Output} from "./Output"
import {FormData} from "./FormData"
import {DEMO_SCHEMA, SESHAT_SCHEMA_FULL_REPLACED_TEST, SESHAT_SCHEMA_FULL, SESHAT_SCHEMA_SMALL, SMALL_SCHEMA, SMALL_SCHEMA_FORM_DATA, SESHAT_FORM_DATA, SESHAT_SCHEMA, NUCLEAR_SCHEMA, NUCLEAR_FORM_DATA, PROFILE_FORM_DATA, PROFILE_SCHEMA, PROFILE_FORM_DATA_USER, DEMO_FORM_DATA, DEMO_SCHEMA_UI, DEMO_DOCUMENT_TYPE, CREATE} from "./sample"

const App= (props) =>{

    const [schema, setSchema]=useState(SESHAT_SCHEMA_SMALL) //schema
    const [uiSchema, setUISchema]=useState(DEMO_SCHEMA_UI) //ui schema
    const [type, setType]=useState(DEMO_DOCUMENT_TYPE)  // document type
    const [mode, setMode]=useState("Create")  // mode
    const [formData, setFormData]=useState(SESHAT_FORM_DATA) // formdata => required only on edit/ view

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
import React,{useEffect, useState} from 'react'
import {Container, Row} from "react-bootstrap"
import {SchemaEditors} from "./SchemaEditors"
import {DocumentInput} from "./DocumentInput"
import {ModeInput} from "./ModeInput"
import {UIEditors} from "./UIEditors"
import {Output} from "./Output"
import {FormData} from "./FormData"
import {DEMO_ACTION, DEMO_SCHEMA, MAP_SCHEMA, DEMO_SCHEMA_UI, DEMO_DOCUMENT_TYPE, DEMO_FORM_DATA, CREATE} from "./sample"
const TerminusDBClient = require("@terminusdb/terminusdb-client")
 
const App= (props) =>{ 

    const [schema, setSchema]=useState(DEMO_SCHEMA) //schema
    const [uiSchema, setUISchema]=useState(DEMO_SCHEMA_UI) //ui schema
    const [type, setType]=useState(DEMO_DOCUMENT_TYPE)  // document type
    const [mode, setMode]=useState(DEMO_ACTION)  // mode
    const [formData, setFormData]=useState(DEMO_FORM_DATA) // formdata => required only on edit/ view
    const [frames, setFrames]=useState(false)

    const team = "SantaAna";
    const client = new TerminusDBClient.WOQLClient(`https://cloud.terminusdb.com/${team}/`, {
        user: "kitty@terminusdb.com",
        organization: team
    })

    let token = "dGVybWludXNkYjovLy9kYXRhL2tleXNfYXBpL2UwZWUyOTJmZDM1ZjYyZjBjNTUyODhkMzlkYWNmNjU5ZmJkODY2MWRlYWQwOTRhZTIyN2Y0Y2NmYTExYzhlOWI=_9c98ef175880690e41057c511f7a616bd513bd4b0c66fb13a933760713f5ce3f633f83fe881ee5b50beec5ec7f3dfdd38c5f3bf8d7b47117673f59c192f1787d9da293085c851adb"
    client.setApiKey(token)

    async function connectToServer () {
        try {
            await client.connect()
        } catch (err) {
            console.error("Error in connecting to TerminusDB", err)
        }
        console.log("Connected to TerminusDB successfully!")
    }

    async function getFrames () {
        await client.getSchemaFrame(null, "CAMS").then((res) => {
            console.log("^^^^^ frames ^^^^" , res)
            setFrames(res)
        })
        .catch((err) =>  {
            console.error(`Error in init woql while fetching schema frames - ${err.message}`)
        })
    }

    useEffect(() => {
        connectToServer()
        getFrames()
    }, [])

    if(!frames) return <>{"Extracting franes ...."}</>

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
                    <Output schema={frames} uiSchema={uiSchema} type={"Asset"} mode={mode} formData={formData}/>
                </div>
            </div>
    </Container>
}

export default App
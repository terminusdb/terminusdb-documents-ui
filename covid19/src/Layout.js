import React,{useState, useEffect} from 'react'
import {Container, Row} from "react-bootstrap"
import {DATA_PRODUCT, COVID19_SCHEMA, COVID19_FORM_DATA_IRELAND, COVID19_FORM_DATA_ITALY, COVID19_FORM_DATA_INDIA, COVID19_TYPE} from "./covid19_schema"
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'
const TerminusDBClient = require("@terminusdb/terminusdb-client")
import {token} from './ref'

const App= (props) =>{
    const [schema, setSchema]=useState(COVID19_SCHEMA)
    const [message, setMessage]=useState(false)
    const [mode, setMode]=useState("View")


    const team = "termterm";
    const client = new TerminusDBClient.WOQLClient(`https://cloud.terminusdb.com/${team}/`, {
        user: "kitty@terminusdb.com",
        organization: team
    });

    client.setApiKey(token)

    const connectToServer = async () => {
        try {
            await client.connect()
        } catch (err) {
            console.error("Error in connecting to TerminusDB", err)
        }
        setMessage("Connected to TerminusDB successfully!")
    }

    connectToServer()


    if(!message) return ("Waiting to connect to TerminusDB ... ")

    function handleSelect(inp){
        console.log("*****Select****", inp)
    }

    function handleSubmit(data) {
        console.log("*****Data Submitted ****", data)
    }

    const uiSchema = {
        "name": {"ui:widget" : "hidden"},
    }

    const uiSchemaIndia = {
        "name": {"ui:widget" : "hidden"},
        "classNames": "bg-danger"
    }

    const uiSchemaItaly = {
        "name": {"ui:widget" : "hidden"},
        "classNames": "bg-warning"
    }




    if(!schema) return <div>{"Loading ..."}</div>

    return <React.Fragment>
        {message}
        <Container fluid className="p-0 h-100 d-flex justify-content-center mt-5 mb-5">

            <div className="p-5 w-100">
                <h2 className="text-warning">{"IRELAND"}</h2>
                <FrameViewer
                    frame={schema}
                    uiFrame={uiSchema}
                    mode={mode}
                    formData={COVID19_FORM_DATA_IRELAND}
                    type={COVID19_TYPE}
                    onSelect={handleSelect}
                    onSubmit={handleSubmit}
                    hideSubmit={mode === "View" ? true : false}
                />
            </div>

            <div className="p-5 w-100">
                <h2 className="text-warning">{"INDIA"}</h2>
                <FrameViewer
                    frame={schema}
                    uiFrame={uiSchemaIndia}
                    mode={mode}
                    formData={COVID19_FORM_DATA_INDIA}
                    type={COVID19_TYPE}
                    onSelect={handleSelect}
                    onSubmit={handleSubmit}
                    hideSubmit={mode === "View" ? true : false}
                />
            </div>

            <div className="p-5 w-100">
                <h2 className="text-warning">{"ITALY"}</h2>
                <FrameViewer
                    frame={schema}
                    uiFrame={uiSchemaItaly}
                    mode={mode}
                    formData={ COVID19_FORM_DATA_ITALY}
                    type={COVID19_TYPE}
                    onSelect={handleSelect}
                    onSubmit={handleSubmit}
                    hideSubmit={mode === "View" ? true : false}
                />
            </div>


        </Container>
    </React.Fragment>
}

export default App
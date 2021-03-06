import React,{useState, useEffect} from 'react'
import {Container, Row} from "react-bootstrap"
import {CAMS_SCHEMA, CAMS_SCHEMA_EVENTS, LOCATION_FORM_DATA, CAMS_SCHEMA_LATEST_LOCATION, CAMS_SCHEMA_FULL_ASSET, CAMS_SCHEMA_FULL, CAMS_FORM_DATA, CAMS_TYPE} from "./cams_schema"
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'
const TerminusDBClient = require("@terminusdb/terminusdb-client")
import {token} from './ref'

const App= (props) =>{
    const [schema, setSchema]=useState(CAMS_SCHEMA_FULL_ASSET)
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
            console.error(err)
        }

        setMessage("Connected to TerminusDB successfully!")
    };

    //connectToServer()

    //if(!message) return ("Waiting to connect to TerminusDB ... ")

    function handleSelect(inp){
        //"*****Select****", inp)
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
        //console.log("matched", matched)
        return matched
    }

    function handleSubmit(data) {
        console.log("*****Data Submitted ****", data)
    }

    let uiSchema = {
        "spatial_web_identifier": {
            classNames: "text-danger myOWNSelect",
            "ui:placeholder": "select kitty go for it",

        }
    }


    return <React.Fragment>
        {message}
        <Container fluid className="p-0 h-100 d-flex justify-content-center mt-5 mb-5">
            <div className="p-5 w-100">
                <FrameViewer
                    frame={schema}
                    //uiFrame={uiSchema}
                    mode={mode}
                    formData={LOCATION_FORM_DATA}
                    type={CAMS_TYPE}
                    onSelect={handleSelect}
                    onSubmit={handleSubmit}
                    hideSubmit={mode === "View" ? true : false}
                />
            </div>
        </Container>
    </React.Fragment>



}

export default App
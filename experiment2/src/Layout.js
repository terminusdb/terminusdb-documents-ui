import React,{useState, useEffect} from 'react'
import {Container, Row} from "react-bootstrap"
import {SCHEMA} from "./schema"
import {MapViewer, FrameViewer} from '@terminusdb/terminusdb-documents-ui'
import Select from 'react-select'
import {token} from "./ref"
const TerminusDBClient = require("@terminusdb/terminusdb-client")
import {CustomCuisineFieldTemplate, CustomBoroughFieldTemplate, getDocuments} from "./utils"

const App= (props) =>{
    const [results, setResults] = useState(false)
    const [cuisine, setCuisine] = useState(false)
    const [borough, setBorough] = useState(false)

    //constants
    const team = "team2022",
        dataProduct = "Restaurants",
        documentType = "Restaurant",
        mode = "Create"

    // connect to client
    const client = new TerminusDBClient.WOQLClient(`https://cloud.terminusdb.com/${team}/`, {
        user: "kitty@terminusdb.com",
        organization: team
    })

    client.setApiKey(token)
    client.db(dataProduct)

    useEffect(() => {
        getDocuments(client, setResults, cuisine, borough)
    }, [cuisine, borough])


    let uiSchema = {
        "classNames": "bg-light p-3"
    }

    function handleChange (inp) {
        let cuisine = inp.hasOwnProperty("cuisine") ? inp["cuisine"] : false
        let borough = inp.hasOwnProperty("borough") ? inp["borough"] : false
        if(cuisine) setCuisine(cuisine)
        else if (cuisine === undefined)  setCuisine(false) //when nothing is selected
        if(borough) setBorough(borough)
        else if (borough === undefined)  setBorough(false) //when nothing is selected
    }

    return <Container className="mt-5">
        <div style={{display: "flex"}}>
            <FrameViewer
                frame={SCHEMA}
                mode={mode}
                //uiFrame={uiSchema}
                type={documentType}
                onChange={handleChange}
                FieldTemplate={CustomCuisineFieldTemplate}
                hideSubmit={true}
            />
            <FrameViewer
                frame={SCHEMA}
                mode={mode}
                //uiFrame={uiSchema}
                type={documentType}
                onChange={handleChange}
                FieldTemplate={CustomBoroughFieldTemplate}
                hideSubmit={true}
            />
        </div>

        {results && <MapViewer
            documents={results}
            zoom={11}
            scrollWheelZoom={true}
        />}
    </Container>



}

export default App


/*** sample
 * return <MapViewer documents={[
        {latitude: 53.35014, longitude: -6.266155},
        {latitude: 51.903614, longitude: -8.468399}
    ]}/>
 */
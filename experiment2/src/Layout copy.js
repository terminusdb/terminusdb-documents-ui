import React,{useState, useEffect} from 'react'
import {Container, Row} from "react-bootstrap"
import {SCHEMA} from "./schema"
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'
import Select from 'react-select'
import {token} from "./ref"
const TerminusDBClient = require("@terminusdb/terminusdb-client")

const App= (props) =>{
    const [schema, setSchema]=useState(SCHEMA)
    const [options, setOptions]=useState(getOptions())
    const [mode, setMode]=useState("Create")
    const [message, setMessage]=useState(false)

    const [selected, setSelected] = useState(false)
    const [filteredResult, setFilteredResults] = useState(false)

    function getOptions() {
        let opts = []
        SCHEMA["terminusdb:///schema#Restaurant"]["has_cuisine"]["@class"]["@values"].map(item => {
                opts.push({ value: item, label: item })
        })
        return opts
    }

    function handleSelect(inp){
        console.log("*****Select****", inp)
    }

    function handleSubmit(data) {
        console.log("*****Data Submitted ****", data)
    }

    function handleCusineChange(e) {
        getResults(e.value)
        setSelected(e.value)
    }

    const team = "team2022";
    const client = new TerminusDBClient.WOQLClient(`https://cloud.terminusdb.com/${team}/`, {
        user: "kitty@terminusdb.com",
        organization: team
    });

    client.setApiKey(token)

    const getResults = async (selected) => {
        try {
            client.db("Experiment2")
            let WOQL= TerminusDBClient.WOQL
            let cusine = `@schema:cuisine/${selected}`
            //triple("v:R", "rdf:type", "@schema:Restaurant").triple("v:R", "@schema:has_cuisine", "@schema:cuisine/American")
            const query = WOQL.triple("v:R", "rdf:type", "@schema:Restaurant").triple("v:R", "@schema:has_cuisine", cusine)
            let results = await client.query(query)
            setFilteredResults(results)
            console.log("results", results)
        } catch (err) {
            console.error("Error in connecting to TerminusDB", err)
        }
        setMessage("Connected to TerminusDB successfully!")
    }










    if(!schema) return <div>{"Loading ..."}</div>

    return <React.Fragment>
        <Container fluid className="p-0 h-100 d-flex justify-content-center mt-5 mb-5">

            <div className="p-5 w-100">
                {selected && <> {`Selected cusine : ${selected}`}</>}
                <Select
                    options={options}
                    onChange={handleCusineChange}
                    className="bg-dark tdb__input mb-3 mt-3"/>


                {filteredResult && <pre>{JSON.stringify(filteredResult, null, 2)}</pre>}

                {filteredResult && <FrameViewer
                    frame={schema}
                    //uiFrame={uiSchema}
                    mode={mode}
                    formData={filteredResult.bindings[0]}
                    type={"Restaurant"}
                    onSelect={handleSelect}
                    onSubmit={handleSubmit}
                    hideSubmit={mode === "View" ? true : false}
                />}
            </div>




        </Container>
    </React.Fragment>
}

export default App
import React,{useState, useEffect} from 'react'
import {Container, Row, Col} from "react-bootstrap"
import {jane, janine, oldJSON, newJSON} from "./constants"
import {DiffViewer} from '@terminusdb/terminusdb-documents-ui'
const TerminusDBClient = require("@terminusdb/terminusdb-client")
import {token} from './ref'
import ReactDiffViewer from 'react-diff-viewer'

const App= (props) =>{
    const [schema, setSchema]=useState()
    const [message, setMessage]=useState(false)
    const [mode, setMode]=useState("View")


    const team = "MYNEWTEAM"
    const client = new TerminusDBClient.WOQLClient(`https://cloud-dev.terminusdb.com/${team}/`, {
        user: "kitty@terminusdb.com",
        organization: team
    })

    client.setApiKey(token)

    const connectToServer = async () => {
        try {
            await client.connect()
        } catch (err) {
            setMessage("Error in connecting to TerminusDB", err)
        }
        setMessage("Connected to TerminusDB successfully!")
    }

    connectToServer()

    const getDiff = async () => {
        try {
            const result_patch = await client.getDiff(oldJSON, newJSON)
            console.log("result_patch",result_patch)
            const after_patch = await client.patch(oldJSON, result_patch)
            console.log(after_patch)
            //console.log(JSON.stringify(after_patch) === JSON.stringify(jane))
        } catch (err) {
            console.log("Error in getting diff", err)
            setMessage("Error in getting diff", err)
        }
    }

    getDiff()



    return <React.Fragment>
        {message}
        <br/><br/><br/><br/>
        <Row className="justify-content-center">
            <Col md={8}>
                <DiffViewer 
                    oldValue={oldJSON} 
                    newValue={newJSON} 
                    splitView={true} 
                    //useDarkTheme={true}
                    disableWordDiff={true} 
                    patch={true}
                    leftTitle={"Left"} 
                    rightTitle={"Right"}
                    linesOffset={0}/>
            </Col>
        </Row>
        
    </React.Fragment>
}

export default App
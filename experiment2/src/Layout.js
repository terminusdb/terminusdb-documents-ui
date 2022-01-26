import React,{useState, useEffect} from 'react'
import {Container, Row} from "react-bootstrap"
import {SCHEMA} from "./schema"
import {MapViewer} from '@terminusdb/terminusdb-documents-ui'
import Select from 'react-select'
import {token} from "./ref"
const TerminusDBClient = require("@terminusdb/terminusdb-client")

const App= (props) =>{

    return <MapViewer documents={[
        {latitude: 53.35014, longitude: -6.266155},
        {latitude: 51.903614, longitude: -8.468399}
    ]}/>
}

export default App
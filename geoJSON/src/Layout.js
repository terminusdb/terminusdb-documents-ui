import React,{useState, useEffect} from 'react'
import {Container, Row} from "react-bootstrap"
import {GEO_JSON_FRAMES, TYPE, GEO_JSON_FORM_DATA} from "./geo_schema"
import {FrameViewer, MapViewer} from '@terminusdb/terminusdb-documents-ui'
const TerminusDBClient = require("@terminusdb/terminusdb-client")
import {token} from './ref'
import {FEATURE_SEGMET} from "./seg"
import {GREEN_ICON} from "./constants"
import {GEO_POINTS_FEATURE_COLLECTION} from "./geoPoints"

const App= (props) =>{
    const [schema, setSchema]=useState(GEO_JSON_FRAMES)
    const [message, setMessage]=useState(false)
    const [mode, setMode]=useState("Edit")

    return <MapViewer 
        geojsonFeature={GEO_POINTS_FEATURE_COLLECTION}
        icon="<div style='background-color:#c30b82;' class='marker-pin'></div><i class='material-icons'>weekend</i>"
        zoom={4}/>

    /*return <MapViewer 
        geojsonFeature={FEATURE_SEGMET}
        center={[41.55306762713997, -99.49565725403058]}
        zoom={4}/>*/





}

export default App
import React,{useState, useEffect} from 'react'
import {Container, Row} from "react-bootstrap"
import {GEO_JSON_FRAMES, TYPE, GEO_JSON_FORM_DATA} from "./geo_schema"
import {FrameViewer, MapViewer} from '@terminusdb/terminusdb-documents-ui'
const TerminusDBClient = require("@terminusdb/terminusdb-client")
import {token} from './ref'
import {FEATURE_SEGMET} from "./seg"
import {GREEN_ICON} from "./constants"
import {GEO_POINTS_FEATURE_COLLECTION} from "./geoPoints"
import {greekBorderGeoJson, serbianBorder} from "./greekBorder_geoLines"
import {IRELAND_DATA} from "./ireland"

const App= (props) =>{
    const [schema, setSchema]=useState(GEO_JSON_FRAMES)
    const [message, setMessage]=useState(false)
    const [mode, setMode]=useState("View")

    /** points collection */
    /*return <MapViewer 
        geojsonFeature={GEO_POINTS_FEATURE_COLLECTION}
        icon="<div style='background-color:#c30b82;' class='marker-pin'></div><i class='material-icons'>weekend</i>"
        zoom={4}/>*/

    /** polygon collection */
    /*return <MapViewer 
        geojsonFeature={FEATURE_SEGMET}
        center={[41.55306762713997, -99.49565725403058]}
        zoom={4}/>*/

    /** line string collection */
    /*return <MapViewer 
        geojsonFeature={greekBorderGeoJson}
        smoothFactor={5} 
        center={[
            26.62811279296875,
            41.413895564677304
          ]}
        zoom={8}/>*/

    /** ireland collection */
   /* return <MapViewer 
        geojsonFeature={IRELAND_DATA}
        smoothFactor={5} 
        center={[
            26.62811279296875,
            41.413895564677304
          ]}
        zoom={8}/>*/

    /** frame collection */
    return <FrameViewer
        frame={GEO_JSON_FRAMES}
        mode={mode}
        formData={GEO_JSON_FORM_DATA}
        type={TYPE}
        //onSelect={handleSelect}
        //onSubmit={handleSubmit}
        hideSubmit={mode === "View" ? true : false}
    />



}

export default App
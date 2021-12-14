import React from "react"
import {FrameViewer} from '@terminusdb/terminusdb-documents-ui'
import {MINIMAL_SCHEMA, CREATE, EDIT, VIEW, MINIMAL_DOCUMENT, MINIMAL_FORM_DATA} from "./sample"

const App= (props) =>{

    function displayName(props){
        return <React.Fragment>
            <span style={{marginRight: "30px", fontSize: "50px"}}>{props.name}</span>
            <span>{props.formData}</span>
        </React.Fragment>
    }

    const MINIMAL_UI_SCHEMA = {
        "classNames": "bg__form",
        "ui:title": "Minimal form",
        "ui:description": "This is a form showing a minimal ui frame",
        "likes": {
            "classNames": "field__inputs"
        },
        "name": {
            "classNames": "field__inputs",
            "ui:field": displayName
        },
        "nicknames": {
            "classNames": "field__inputs"
        },
        "works_as": {
            "classNames": "field__inputs"
        },
        "lives_in": {
            "classNames": "field__inputs",
            "ui:collapsible": true
        }
    }

    return <React.Fragment>
        <FrameViewer
            frame={MINIMAL_SCHEMA}
            mode={VIEW}
            formData={MINIMAL_FORM_DATA}
            uiFrame={MINIMAL_UI_SCHEMA}
            type={MINIMAL_DOCUMENT}/>
    </React.Fragment>

}

export default App
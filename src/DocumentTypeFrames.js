
import React, {useState, useEffect} from "react"
import {getTitle, getDefaultValue} from "./utils"
import {DOCUMENT, CREATE, VIEW} from "./constants"
import {Form} from "react-bootstrap"

export function DocumentTypeFrames (frame, item, uiFrame, documents, mode, formData, isSet, onTraverse) {
    let properties={}, propertiesUI={}
    var uiDisable=false, type=frame[item]


    var layout = {
        type: 'string',
        info: DOCUMENT,
        enum: documents ? documents[type] : {}
    }

    //schema
    properties[item] = layout

    if(mode !== CREATE) {
        layout.default=getDefaultValue(item, formData)
    }


    function getSelect (props) {
        const [clicked, setClicked]=useState(false)

        useEffect(() => {
            if(!clicked) return
            if(onTraverse) onTraverse(clicked)
        }, [clicked])

        const handleSelect= (e, props) => { //create or edit
            if(props.onChange) props.onChange(e.target.value)
        }

        const handleClick = (e) => { // view if on traverse function defined
            setClicked(e.target.value)
        }

        let opts=[]
        opts.push(<option>{`Select ${frame[item]} ...`}</option>)
        if(Array.isArray(props.schema.enum)) {
            props.schema.enum.map(enu => {
                opts.push(<option value={enu}>{enu}</option>)
            })
        }

        // for view mode - logic to click through on traverse
        if(layout.default) {
            if(mode === VIEW) {
                return <React.Fragment>
                    <Form.Label>{item}</Form.Label>
                    <span onClick={handleClick}>
                        <Form.Select defaultValue={layout.default} disabled >
                            {opts}
                        </Form.Select>
                    </span>
                </React.Fragment>
            }
            return <React.Fragment>
                <Form.Label>{item}</Form.Label>
                <Form.Select defaultValue={layout.default} onClick={(e) => handleClick(e, onTraverse)}>
                    {opts}
                </Form.Select>
            </React.Fragment>
        }

        return <React.Fragment>
            <Form.Label>{item}</Form.Label>
            {/*<span class="required">*</span>*/}
            <Form.Select onChange={(e) => handleSelect(e, props)}>
                {opts}
            </Form.Select>
        </React.Fragment>
    }


    //default ui:schema
    propertiesUI[item] = {
        "ui:disabled": uiDisable,
        "ui:title": getTitle(item),
        "ui:placeholder": `Select ${frame[item]} ...`,
        classNames: mode===VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
        "ui:field": getSelect
    }

    if(mode === VIEW && !layout.hasOwnProperty("default")){
        propertiesUI[item]["ui:widget"]= "hidden"
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}

// mandatory
export function makeDocumentTypeFrames (frame, item, uiFrame, documents, mode, formData, isSet, onTraverse) {
    let madeFrames = DocumentTypeFrames (frame, item, uiFrame, documents, mode, formData, isSet, onTraverse)
    var required=item
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI, required}
}

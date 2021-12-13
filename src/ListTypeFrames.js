import React, {useState, useEffect} from "react"
import {ArrayFieldTemplate, getSetTitle, getTitle, getOptionalSelect, removeDefaultsFromSubDocumentFrame, removeDefaultsFromDataFrame, getRequiredForListSubDocs} from "./utils"
import {CREATE, DATA, VIEW, DOCUMENT} from "./constants"
import {Form} from "react-bootstrap"

export function makeListSubDocuments (setFrames, item, uiFrame, mode, formData, onTraverse) {
    let properties={}, propertiesUI={}


    if(mode !== VIEW){
        for(var props in setFrames.properties[item]["properties"]) {
            if(setFrames.properties[item]["properties"][props].info === DOCUMENT) {
                setFrames.uiSchema[item][props]["ui:field"]=getOptionalSelect
            }
        }
    }



    var  layout= {
        type: "array",
        title: mode === VIEW ? getTitle() : getSetTitle(),
        items: [
            {
                type: "object",
                properties: setFrames.properties[item]["properties"],
                required: getRequiredForListSubDocs(setFrames.properties[item]["properties"])
            }
        ]
    }


    if(mode !== CREATE && formData.hasOwnProperty(item)){
        var filledItems = []
        propertiesUI[item] = {
            "items": []
        }
        let subFrames = removeDefaultsFromSubDocumentFrame(setFrames.properties[item]["properties"])
        if(formData.hasOwnProperty(item)) {
            var count = 0
            var defaultValues=formData[item]
            propertiesUI[item]["items"]=[]

            defaultValues.map(value=>{ // remove custom select function
                for(var thing in setFrames.properties[item]["properties"]) {
                    if(setFrames.properties[item]["properties"][thing].info === DOCUMENT &&
                    setFrames.uiSchema[item][thing]["ui:field"]) {
                        delete setFrames.uiSchema[item][thing]["ui:field"]
                        //setFrames.uiSchema[item][thing]["ui:field"] = getRequiredSelect(item, selectDocument, defaultValue, enums)
                    }
                }
                propertiesUI[item]["items"].push(setFrames.uiSchema[item])
            })


            defaultValues.map(value => {
                filledItems.push({
                    type: "object",
                    properties: setFrames.properties[item]["properties"],
                    default: defaultValues[count]
                })

                count += 1
            })
        }
        layout["items"]=filledItems
    }

    //schema
    properties[item] = layout

    // get filled values on View mode
    if(mode === VIEW && formData.hasOwnProperty(item) && Array.isArray(layout["items"])) {
        var count=0
        layout["items"].map(it => {
            for(var thing in it.properties){
                if(it.properties[thing].info === DOCUMENT && it.default && it.default[thing]) {
                    function getSelect (props) {
                        const [clicked, setClicked]=useState(false)

                        useEffect(() => {
                            if(!clicked) return
                            if(onTraverse) onTraverse(clicked)
                        }, [clicked])

                        const handleClick = (id, setClicked) => { // view if on traverse function defined
                            setClicked(id)
                        }

                        return <React.Fragment>
                            <Form.Label>{props.name}</Form.Label>
                            <span className="text-gray  tdb__span__select" onClick={(e) => handleClick(props.formData, setClicked)}>
                                {props.formData}
                            </span>
                        </React.Fragment>
                    }

                    propertiesUI[item]["items"][count][thing]["ui:field"]=getSelect
                }
                if(it.properties[thing].info === "DATA" && it.default) {
                    function getFieldValue(props){
                        if(!props.formData ||  props.formData===undefined)
                            return <span className="tdb__blank"></span>
                        return <React.Fragment>
                            <Form.Label>{props.name}</Form.Label>
                            <span>{props.formData}</span>
                        </React.Fragment>
                    }
                    propertiesUI[item]["items"][count][thing]["ui:field"]=getFieldValue
                }
            }
            count+=1
        })
    }

    if(mode !== VIEW) { // we do not allow to add extra on view mode
        //default ui:schema
        propertiesUI[item] = {
            "items": setFrames.uiSchema[item],

        }
        // layout
        properties[item]["additionalItems"]={
            type: "object",
            properties: setFrames.properties[item]["properties"]
        }
        //ui
        propertiesUI[item]["additionalItems"]=setFrames.uiSchema[item]
        propertiesUI[item]["ui:options"] = {
            addable: true,
            orderable: false,
            removable: true
        }
        propertiesUI[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
    }


    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    // hide entire widget if not available in filled frame
    if(mode === VIEW && !formData.hasOwnProperty(item)) {
        propertiesUI[item] = {"ui:widget" : "hidden"}
    }

    return {properties, propertiesUI}
}

export function makeListData (listFrames, item, uiFrame, mode, formData) {
    let properties={}, propertiesUI={}

    var  layout= {
        type: "array",
        title: mode === VIEW ? getTitle() : getSetTitle(),
        items: [listFrames.properties[item]] // items is array, list required at lease 1 value
    }

    if(mode !== CREATE && formData.hasOwnProperty(item)){
        var filledItems = []
        let subFrames = removeDefaultsFromDataFrame(listFrames.properties[item]["properties"])
        var count = 0, defaultValues=formData[item]
        defaultValues.map(value => {
            filledItems.push({
                type: "string",
                info: DATA,
                //title: item,
                default: defaultValues[count]
            })
            count += 1
        })
        layout["items"]=filledItems
    }

    //schema
    properties[item] = layout

    //default ui:schema
    propertiesUI[item] = {
        "items": listFrames.uiSchema[item]
    }

    if(mode !== VIEW) { // we do not allow to add extra on view mode
        // layout
        properties[item]["additionalItems"]={
            type: listFrames.properties[item].type,
            info: listFrames.properties[item].info,
            title: item,
        }
        //ui
        propertiesUI[item]["additionalItems"]=listFrames.uiSchema[item]
        propertiesUI[item]["ui:options"] = {
            addable: true,
            orderable: false,
            removable: true
        }
        propertiesUI[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
    }
    else if(mode === VIEW){
        propertiesUI[item]["ui:options"] = { // disable add more on view
            addable: false,
            orderable: false,
            removable: false
        }
    }



    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}

export function makeListDocuments  (listFrames, item, uiFrame, mode, formData, onTraverse) {
    let properties={}, propertiesUI={}

    var  layout= {
        type: "array",
        title: mode === VIEW ? getTitle() : getSetTitle(),
        items: [listFrames.properties[item]]
    }


    if(mode !== CREATE && formData.hasOwnProperty(item)){
        var filledItems = []
        let defaultValues = listFrames.properties[item].default
        defaultValues.map(def => {
            filledItems.push({
                default: def,
                enum: listFrames.properties[item].enum,
                info: listFrames.properties[item].info,
                type: listFrames.properties[item].type,
                title: item
            })
        })

        layout["items"]=filledItems
    }

    //schema
    properties[item] = layout


    //default ui:schema
    if(mode !== VIEW && listFrames.uiSchema[item] && listFrames.uiSchema[item]["ui:field"]){
        listFrames.uiSchema[item]["ui:field"]=getOptionalSelect
    }


    function getViewSelect (props) {
        const [clicked, setClicked]=useState(false)

        useEffect(() => {
            if(!clicked) return
            if(onTraverse) onTraverse(clicked)
        }, [clicked])

        const handleClick = (e) => { // view if on traverse function defined
            setClicked(e.target.value)
        }

        let opts=[]
        opts.push(<option value="">{props.uiSchema["ui:placeholder"]}</option>)
        if(Array.isArray(props.schema.enum)) {
            props.schema.enum.map(enu => {
                opts.push(<option value={enu}>{enu}</option>)
            })
        }

        return <React.Fragment>
            <Form.Label>{item}</Form.Label>
            <span onClick={handleClick}>
                <Form.Select defaultValue={props.formData} disabled >
                    {opts}
                </Form.Select>
            </span>
        </React.Fragment>
    }

    var ui = {}
    if(mode === VIEW) {
        for(var u in listFrames.uiSchema[item]) {
            if(u == "ui:field"){
                //ui[u]=listFrames.uiSchema[item][u]
                ui[u]=getViewSelect
            }
            else ui[u]=listFrames.uiSchema[item][u]
        }
    }
    else ui = listFrames.uiSchema[item]
    propertiesUI[item] = {
        "items": ui
    }

    if(mode !== VIEW) { // we do not allow to add extra on view mode
        // layout
        properties[item]["additionalItems"]={
            info: listFrames.properties[item].info,
            type: listFrames.properties[item].type,
            enum: listFrames.properties[item].enum,
            title: item
        }
        //ui
        propertiesUI[item]["additionalItems"]=listFrames.uiSchema[item]
        propertiesUI[item]["ui:options"] = {
            addable: true,
            orderable: false,
            removable: true
        }
        propertiesUI[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
    }

    if(mode === VIEW && !formData.hasOwnProperty(item)) {       // hide add options on view
        propertiesUI[item]["ui:options"] = {
            addable: false,
            orderable: false,
            removable: false
        }
    }


    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}

import React, {useState, useEffect} from "react"
import {VIEW, DOCUMENT} from "./constants"
import {Form} from "react-bootstrap"

// get frmaes of all any of properties
function getAnyOfProperties(setFrames, item) {
    let anyOfPropertyArray = []
    setFrames.properties[item].properties["@oneOf"]["anyOf"].map(aOf => {
        let choice = aOf["title"] // title is same as choice name here
        anyOfPropertyArray.push(aOf)
    })
    return anyOfPropertyArray
}

// sort any ofs to place value with default as first
function sortanyOfArray(anyOf) {
    let newAnyOfArray = [], newFirstElement = {}, returnArray =[]
    anyOf.map(it => {
        if(it.hasOwnProperty("order")){
            newFirstElement = it
        }
        else {
            newAnyOfArray.push(it)
        }
    })
    returnArray = [newFirstElement].concat(newAnyOfArray)
    return returnArray
}

//construct an entire new json
function returnFilledIfExists(mode,  propertiesUI, item, json, defaultValue) {
    let returnJson = {}
    for(var key in json){
        if(key === "properties") {
            returnJson["properties"] = {}
            // removing defaults which are not filled at this point for document links
            for(var thing in json["properties"]){
                if(defaultValue.hasOwnProperty(thing)){ //if match found
                    returnJson["properties"][thing] = {}
                    for(var stuff in json["properties"][thing]) {
                        returnJson["properties"][thing][stuff]=json["properties"][thing][stuff]
                        function getCorrectDefault(props) {
                            const [clicked, setClicked]=useState(false)
                            useEffect(() => {
                                if(!clicked) return
                                if(onTraverse) onTraverse(clicked)
                            }, [clicked])

                            const handleClick = (e, val) => { // view if on traverse function defined
                                setClicked(val)
                            }

                            return <React.Fragment>
                                <Form.Label className="control-label">{props.name}</Form.Label>
                                <span onClick={(e) => handleClick(e, props.formData)} className="tdb__span__select form-control">
                                    {props.formData}
                                </span>
                            </React.Fragment>
                        }
                        if(mode === VIEW){
                            propertiesUI[item]["items"].map(pUi =>{
                                for(var its in pUi["@oneOf"]){
                                    // only change ui:field for <Select/> => document links
                                    if(pUi["@oneOf"][its].hasOwnProperty(thing) &&
                                        pUi["@oneOf"][its][thing].hasOwnProperty("ui:info") &&
                                        pUi["@oneOf"][its][thing]["ui:info"] === DOCUMENT &&
                                        thing !== "@type")
                                        pUi["@oneOf"][its][thing]["ui:field"]=getCorrectDefault
                                }
                            })
                        }

                    }
                    returnJson["properties"][thing]["default"] = defaultValue[thing]
                }
                else returnJson["properties"][thing]=json["properties"][thing]
            }
        }
        else returnJson[key] = json[key]
    }
    // add correct filled value for sets here
    if(defaultValue) returnJson["default"] = defaultValue
    return returnJson
}


export const getFilledChoiceTypeFrames = (item, formData, mode, setFrames, properties, propertiesUI) => {


    let tempFormData = formData[item], anyOfArray = []
    let anyOfProperties = getAnyOfProperties(setFrames, item)
    let defaultValues=formData[item]

    // loop through formData
    for(var x=0; x< defaultValues.length; x++){
        anyOfArray[x] = []

        for(var anyOf=0; anyOf < anyOfProperties.length; anyOf++){ // one of properties
            let choice = anyOfProperties[anyOf]["title"]
            var newJson = {}
            for(var thing in anyOfProperties[anyOf]){
                if(thing === "properties"){
                    if(tempFormData[x].hasOwnProperty(choice)) {
                        newJson["order"] = 1
                        newJson["properties"] = {
                            [choice] : returnFilledIfExists(mode, propertiesUI, item, anyOfProperties[anyOf]["properties"][choice], tempFormData[x][choice])
                        }
                    }
                    else {
                        newJson["properties"] = {
                            [choice] : anyOfProperties[anyOf]["properties"][choice]
                        }
                    }
                }
                else newJson[thing] = anyOfProperties[anyOf][thing]
            }
            anyOfArray[x].push(newJson)
        }

    }

    var newPropertiesForOneOf = {}, newItems = [], newItemProperties={}
    // refilling any of frames with correct filled values from Sets
    for(var x=0; x< anyOfArray.length ; x++) {
        newItemProperties = {
            "@oneOf": {
                anyOf: sortanyOfArray(anyOfArray[x]),//anyOfArray[x],
                title: "@oneOf",
                type: "object"
            },
            "@type": {type: 'string', title: item}
        }
        newItems.push({
            type: "object",
            default: formData[item][x],
            properties: newItemProperties
        })
    }

    newPropertiesForOneOf[item] = {
        type : "array",
        title : item,
        additionalItems : properties[item].additionalItems,
        default: properties[item].default,
        items: newItems
    }
    //console.log('newPropertiesForOneOf[item]["items"]', newPropertiesForOneOf)

    return newPropertiesForOneOf
}
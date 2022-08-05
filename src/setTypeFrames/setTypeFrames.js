import React, {useState, useEffect} from "react"
import {CREATE, DOCUMENT, EDIT, VIEW, CHOICESUBCLASSES, CHOICECLASSES, SYS_JSON_TYPE,ENUM, DATA_TYPE, SUBDOCUMENT_TYPE, ONEOFVALUES} from "../constants"
import {Form} from "react-bootstrap"
import AsyncSelect from 'react-select/async'
import {AsyncTypeahead} from 'react-bootstrap-typeahead'
import {
    getCreateSetDataTypeLayout,
    getCreateSetDataTypeUILayout,
    getEditSetDataTypeLayout,
    getEditSetDataTypeUILayout,
    getViewSetDataTypeLayout,
    getViewSetDataTypeUILayout,
    getCreateSetSysDataTypeLayout,
    getCreateSetSysDataTypeUILayout,
    getEditSetSysDataTypeLayout,
    getEditSetSysDataTypeUILayout,
    getViewSetSysDataTypeLayout,
    getViewSetSysDataTypeUILayout,
    getCreateSetSubDocumentTypeLayout,
    getCreateSetSubDocumentTypeUILayout,
    getEditSetSubDocumentTypeLayout,
    getEditSetSubDocumentTypeUILayout,
    getViewSetSubDocumentTypeLayout,
    getViewSetSubDocumentTypeUILayout,
    getCreateSetDocumentTypeLayout,
    getCreateSetDocumentTypeUILayout,
    getEditSetDocumentTypeLayout,
    getEditSetDocumentTypeUILayout,
    getViewSetDocumentTypeLayout,
    getViewSetDocumentTypeUILayout,
    getCreateSetEnumTypeLayout,
    getCreateSetEnumTypeUILayout,
    getEditSetEnumTypeLayout,
    getEditSetEnumTypeUILayout,
    getViewSetEnumTypeLayout,
    getViewSetEnumTypeUILayout,
    getCreateSetChoiceDocumentTypeLayout,
    getCreateSetChoiceDocumentTypeUILayout,
    getEditSetChoiceDocumentTypeLayout,
    getEditSetChoiceDocumentTypeUILayout,
    getViewSetChoiceDocumentTypeLayout,
    getViewSetChoiceDocumentTypeUILayout,
    getCreateSetSubChoiceDocumentTypeLayout,
    getCreateSetSubChoiceDocumentTypeUILayout,
    getEditSetChoiceSubDocumentTypeLayout,
    getEditSetChoiceSubDocumentTypeUILayout,
    getViewSetChoiceSubDocumentTypeLayout,
    getViewSetChoiceSubDocumentTypeUILayout,

    getEditSetOneOfTypeLayout,
    getEditSetOneOfTypeUILayout,
    getViewSetOneOfTypeLayout,
    getViewSetOneOfTypeUILayout

} from "./setType.utils"
import { DEMO_DOCUMENT_TYPE } from "../../examples/src/sample"

// set sub choice document types
export function makeSetSubChoiceTypeFrames (frame, item, uiFrame, mode, formData, documentation) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateSetSubChoiceDocumentTypeLayout(frame, item, documentation)
        uiLayout=getCreateSetSubChoiceDocumentTypeUILayout(frame, item, uiFrame)
    }

    if (mode === EDIT) {
        layout=getEditSetChoiceSubDocumentTypeLayout(frame, item, formData, documentation)
        uiLayout=getEditSetChoiceSubDocumentTypeUILayout(frame, item)
    }

    if (mode === VIEW) {
        layout=getViewSetChoiceSubDocumentTypeLayout(frame, item, formData, documentation)
        uiLayout=getViewSetChoiceSubDocumentTypeUILayout(frame, item, formData)
    }

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}

// set Choice document types
export function makeSetChoiceTypeFrames (frame, item, uiFrame, mode, formData, onTraverse) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateSetChoiceDocumentTypeLayout(frame, item)
        uiLayout=getCreateSetChoiceDocumentTypeUILayout(frame, item, uiFrame)
    }

    if (mode === EDIT) {
        layout=getEditSetChoiceDocumentTypeLayout(frame, item, formData)
        uiLayout=getEditSetChoiceDocumentTypeUILayout(frame, item)
    }

    if (mode === VIEW) {
        layout=getViewSetChoiceDocumentTypeLayout(frame, item, formData)
        uiLayout=getViewSetChoiceDocumentTypeUILayout(frame, item, onTraverse)
    }

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}

// set Enum Types
export function  makeSetEnumTypeFrames(frame, item, uiFrame, mode, formData, documentation) {

    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateSetEnumTypeLayout(frame, item, documentation)
        uiLayout=getCreateSetEnumTypeUILayout(frame, item)
    }

    if (mode === EDIT) {
        layout=getEditSetEnumTypeLayout(frame, item, formData, documentation)
        uiLayout=getEditSetEnumTypeUILayout(frame, item)
    }

    if (mode === VIEW) {
        layout=getViewSetEnumTypeLayout(frame, item, formData, documentation)
        uiLayout=getViewSetEnumTypeUILayout(frame, item, formData)
    }

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}

// set document types
export function makeSetDocumentTypeFrames (frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {

    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateSetDocumentTypeLayout(frame, item, documentation)
        uiLayout=getCreateSetDocumentTypeUILayout(frame, item, uiFrame)
    }

    if (mode === EDIT) {
        layout=getEditSetDocumentTypeLayout(frame, item, formData, documentation)
        uiLayout=getEditSetDocumentTypeUILayout(frame, item, uiFrame, onSelect, documentation)
    }

    if (mode === VIEW) {
        layout=getViewSetDocumentTypeLayout(frame, item, formData, documentation)
        uiLayout=getViewSetDocumentTypeUILayout(frame, item, onSelect, uiFrame, formData, onTraverse, documentation)
    }

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}

// set subDocument types
export function makeSubDocumentTypeFrames (frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateSetSubDocumentTypeLayout(frame, item, documentation)
        uiLayout=getCreateSetSubDocumentTypeUILayout(frame, item, uiFrame)
    }

    if (mode === EDIT) {
        layout=getEditSetSubDocumentTypeLayout(frame, item, formData, documentation)
        uiLayout=getEditSetSubDocumentTypeUILayout(frame, item, uiFrame)
    }

    if (mode === VIEW) {
        layout=getViewSetSubDocumentTypeLayout(frame, item, formData, documentation)
        uiLayout=getViewSetSubDocumentTypeUILayout(frame, item, uiFrame, formData)
    }

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}

// set data types
export function makeSetDataTypeFrames (frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateSetDataTypeLayout(frame, item, documentation)
        uiLayout=getCreateSetDataTypeUILayout(frame, item, uiFrame)
    }

    if (mode === EDIT) {
        layout=getEditSetDataTypeLayout(frame, item, formData, documentation)
        uiLayout=getEditSetDataTypeUILayout(frame, item, uiFrame)
    }

    if (mode === VIEW) {
        layout=getViewSetDataTypeLayout(frame, item, formData, documentation)
        uiLayout=getViewSetDataTypeUILayout(frame, item, formData, uiFrame)
    }

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}

export function makeSetSysDataTypeFrames (frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateSetSysDataTypeLayout(frame, item, documentation)
        uiLayout=getCreateSetSysDataTypeUILayout(frame, item, uiFrame)
    }

    if (mode === EDIT) {
        layout=getEditSetSysDataTypeLayout(frame, item, formData, documentation)
        uiLayout=getEditSetSysDataTypeUILayout(frame, item, uiFrame, documentation)
    }

    if (mode === VIEW) {
        layout=getViewSetSysDataTypeLayout(frame, item, formData, documentation)
        uiLayout=getViewSetSysDataTypeUILayout(frame, item, formData, uiFrame)
    }

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}

// function which checks if properties of a set has @oneOf
function checkIfSubPropertiesHasOneOf(frame, item){
    if(frame["properties"][item].hasOwnProperty("properties")
        && frame["properties"][item]["properties"].hasOwnProperty(ONEOFVALUES)) {
            return true
    }
    return false
}

// set @oneOfs
function makeSubOneOfTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateSetDataTypeLayout(frame, item)
        uiLayout=getCreateSetDataTypeUILayout(frame, item)
    }

    if (mode === EDIT) {
        layout=getEditSetOneOfTypeLayout(frame, item, formData, uiFrame)
        uiLayout=getEditSetOneOfTypeUILayout(frame, item, layout, uiFrame)
    }

    if (mode === VIEW) {
        layout=getViewSetOneOfTypeLayout(frame, item, formData, uiFrame)
        uiLayout=getViewSetOneOfTypeUILayout(frame, item, layout, uiFrame, formData)
    }

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}


export const makeSetTypeFrames = (frame, item, uiFrame, mode, formData, onTraverse, onSelect,fullFrame, documentation) => {
    //console.log("!!! SET frame", frame)
    let madeFrames = {}

    // set Data Types
    if(frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
        if(frame["properties"][item].hasOwnProperty("info")
            && frame["properties"][item]["info"] === DATA_TYPE)
            madeFrames=makeSetDataTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation)
    }

    // set Sys Data Types
    if(frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
        if(frame["properties"][item].hasOwnProperty("info")
            && frame["properties"][item]["info"] === SYS_JSON_TYPE)
            madeFrames=makeSetSysDataTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation)
    }
    
    // check if any subdocument has a @oneOf property?
    if(frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
        if(frame["properties"][item].hasOwnProperty("info")
            && frame["properties"][item]["info"] === SUBDOCUMENT_TYPE
            && checkIfSubPropertiesHasOneOf(frame, item))
            madeFrames=makeSubOneOfTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect)
    }

    // set Sub Document Types
    if(frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
        if(frame["properties"][item].hasOwnProperty("info")
            && frame["properties"][item]["info"] === SUBDOCUMENT_TYPE
            && !checkIfSubPropertiesHasOneOf(frame, item))
            madeFrames=makeSubDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation)
    }

    // set Document Types
    if(frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
        if(frame["properties"][item].hasOwnProperty("info")
            && frame["properties"][item]["info"] === DOCUMENT)
            madeFrames=makeSetDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation)
    }

    // set Enum Types
    if(frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
        if(frame["properties"][item].hasOwnProperty("info")
            && frame["properties"][item]["info"] === ENUM)
            madeFrames=makeSetEnumTypeFrames(frame, item, uiFrame, mode, formData, documentation)
    }

    // set Choice Document classes
    if(frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
        if(frame["properties"][item].hasOwnProperty("info")
            && frame["properties"][item]["info"] === CHOICESUBCLASSES)
            madeFrames=makeSetSubChoiceTypeFrames(frame, item, uiFrame, mode, formData, documentation)
    }

    // set Choice Document classes
    if(frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
        if(frame["properties"][item].hasOwnProperty("info")
            && frame["properties"][item]["info"] === CHOICECLASSES)
            madeFrames=makeSetChoiceTypeFrames(frame, item, uiFrame, mode, formData,onTraverse)
    }

    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI

    return {properties, propertiesUI}
}
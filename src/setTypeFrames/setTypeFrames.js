import React, {useState, useEffect} from "react"
import {ArrayFieldTemplate, getSubDocumentDescription, addCustomUI} from "../utils"
import {CREATE, DOCUMENT, EDIT, VIEW, CHOICECLASSES, SELECT_STYLES,ENUM, DATA_TYPE, SUBDOCUMENT_TYPE, ONEOFVALUES} from "../constants"
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
    geViewSetEnumTypeUILayout,
    getCreateSetChoiceDocumentTypeLayout,
    getCreateSetChoiceDocumentTypeUILayout,
    getEditSetChoiceDocumentTypeLayout,
    getEditSetChoiceDocumentTypeUILayout,
    getViewSetChoiceDocumentTypeLayout,
    getViewSetChoiceDocumentTypeUILayout,
    getEditSetOneOfTypeLayout,
    getEditSetOneOfTypeUILayout,
    getViewSetOneOfTypeLayout,
    getViewSetOneOfTypeUILayout

} from "./setType.utils"
import { DEMO_DOCUMENT_TYPE } from "../../examples/src/sample"

// set choice document types
export function makeSetChoiceTypeFrames (frame, item, uiFrame, mode, formData) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateSetChoiceDocumentTypeLayout(frame, item)
        uiLayout=getCreateSetChoiceDocumentTypeUILayout(frame, item)
    }

    if (mode === EDIT) {
        layout=getEditSetChoiceDocumentTypeLayout(frame, item, formData)
        uiLayout=getEditSetChoiceDocumentTypeUILayout(frame, item)
    }

    if (mode === VIEW) {
        layout=getViewSetChoiceDocumentTypeLayout(frame, item, formData)
        uiLayout=getViewSetChoiceDocumentTypeUILayout(frame, item)
    }

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}

// set Enum Types
export function  makeSetEnumTypeFrames(frame, item, uiFrame, mode, formData) {

    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateSetEnumTypeLayout(frame, item)
        uiLayout=getCreateSetEnumTypeUILayout(frame, item)
    }

    if (mode === EDIT) {
        layout=getEditSetEnumTypeLayout(frame, item, formData)
        uiLayout=getEditSetEnumTypeUILayout(frame, item)
    }

    if (mode === VIEW) {
        layout=getViewSetEnumTypeLayout(frame, item, formData)
        uiLayout=geViewSetEnumTypeUILayout(frame, item)
    }

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}

// set document types
export function makeSetDocumentTypeFrames (frame, item, uiFrame, mode, formData, onTraverse, onSelect) {

    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateSetDocumentTypeLayout(frame, item)
        uiLayout=getCreateSetDocumentTypeUILayout(frame, item)
    }

    if (mode === EDIT) {
        layout=getEditSetDocumentTypeLayout(frame, item, formData)
        uiLayout=getEditSetDocumentTypeUILayout(frame, item, onSelect)
    }

    if (mode === VIEW) {
        layout=getViewSetDocumentTypeLayout(frame, item, formData)
        uiLayout=getViewSetDocumentTypeUILayout(frame, item, onSelect)
    }

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}

// set subDocument types
export function makeSubDocumentTypeFrames (frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateSetSubDocumentTypeLayout(frame, item)
        uiLayout=getCreateSetSubDocumentTypeUILayout(frame, item)
    }

    if (mode === EDIT) {
        layout=getEditSetSubDocumentTypeLayout(frame, item, formData)
        uiLayout=getEditSetSubDocumentTypeUILayout(frame, item)
    }

    if (mode === VIEW) {
        layout=getViewSetSubDocumentTypeLayout(frame, item, formData)
        uiLayout=getViewSetSubDocumentTypeUILayout(frame, item, formData)
    }

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}

// set data types
export function makeSetDataTypeFrames (frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateSetDataTypeLayout(frame, item)
        uiLayout=getCreateSetDataTypeUILayout(frame, item)
    }

    if (mode === EDIT) {
        layout=getEditSetDataTypeLayout(frame, item, formData)
        uiLayout=getEditSetDataTypeUILayout(frame, item)
    }

    if (mode === VIEW) {
        layout=getViewSetDataTypeLayout(frame, item, formData)
        uiLayout=getViewSetDataTypeUILayout(frame, item, formData)
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
        uiLayout=getViewSetOneOfTypeUILayout(frame, item, layout, uiFrame)
    }

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}


export const makeSetTypeFrames = (frame, item, uiFrame, mode, formData, onTraverse, onSelect) => {
    console.log("!!! SET frame", frame)
    let madeFrames = {}

    // set Data Types
    if(frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
        if(frame["properties"][item].hasOwnProperty("info")
            && frame["properties"][item]["info"] === DATA_TYPE)
            madeFrames=makeSetDataTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect)
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
            madeFrames=makeSubDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect)
    }

    // set Document Types
    if(frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
        if(frame["properties"][item].hasOwnProperty("info")
            && frame["properties"][item]["info"] === DOCUMENT)
            madeFrames=makeSetDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect)
    }

    // set Enum Types
    if(frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
        if(frame["properties"][item].hasOwnProperty("info")
            && frame["properties"][item]["info"] === ENUM)
            madeFrames=makeSetEnumTypeFrames(frame, item, uiFrame, mode, formData)
    }

    // set Choice Document classes
    if(frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
        if(frame["properties"][item].hasOwnProperty("info")
            && frame["properties"][item]["info"] === CHOICECLASSES)
            madeFrames=makeSetChoiceTypeFrames(frame, item, uiFrame, mode, formData)
    }

    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI

    return {properties, propertiesUI}
}
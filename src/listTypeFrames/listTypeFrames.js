import React, {useState, useEffect} from "react"
import {CREATE, DOCUMENT, EDIT, VIEW, CHOICESUBCLASSES, SYS_JSON_TYPE,ENUM, DATA_TYPE, SUBDOCUMENT_TYPE} from "../constants"
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
    getCreateListSysDataTypeLayout,
    getCreateListSysDataTypeUILayout,
    getEditListSysDataTypeLayout,
    getEditListSysDataTypeUILayout,
    getViewListSysDataTypeLayout,
    getViewListSysDataTypeUILayout,
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
    getViewSetChoiceDocumentTypeUILayout
} from "./listType.utils"
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
        uiLayout=geViewSetEnumTypeUILayout(frame, item)
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
        uiLayout=getCreateSetDocumentTypeUILayout(frame, item) 
    }

    if (mode === EDIT) {
        layout=getEditSetDocumentTypeLayout(frame, item, formData, documentation)
        uiLayout=getEditSetDocumentTypeUILayout(frame, item, onSelect, documentation)
    }

    if (mode === VIEW) {
        layout=getViewSetDocumentTypeLayout(frame, item, formData, documentation)
        uiLayout=getViewSetDocumentTypeUILayout(frame, item, onSelect, documentation)
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
        uiLayout=getCreateSetSubDocumentTypeUILayout(frame, item)
    }

    if (mode === EDIT) {
        layout=getEditSetSubDocumentTypeLayout(frame, item, formData, documentation)
        uiLayout=getEditSetSubDocumentTypeUILayout(frame, item)
    }

    if (mode === VIEW) {
        layout=getViewSetSubDocumentTypeLayout(frame, item, formData, documentation)
        uiLayout=getViewSetSubDocumentTypeUILayout(frame, item, formData)
    }

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}

// list data types
export function makeListDataTypeFrames (frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateSetDataTypeLayout(frame, item, documentation)
        uiLayout=getCreateSetDataTypeUILayout(frame, item)
    }

    if (mode === EDIT) {
        layout=getEditSetDataTypeLayout(frame, item, formData, documentation)
        uiLayout=getEditSetDataTypeUILayout(frame, item)
    }

    if (mode === VIEW) {
        layout=getViewSetDataTypeLayout(frame, item, formData, documentation)
        uiLayout=getViewSetDataTypeUILayout(frame, item, formData)
    }

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}

// list sys data types
export function makeSysDataTypeFrames (frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateListSysDataTypeLayout(frame, item, documentation)
        uiLayout=getCreateListSysDataTypeUILayout(frame, item)
    }

    if (mode === EDIT) {
        layout=getEditListSysDataTypeLayout(frame, item, formData, documentation)
        uiLayout=getEditListSysDataTypeUILayout(frame, item, documentation)
    }

    if (mode === VIEW) { 
        layout=getViewListSysDataTypeLayout(frame, item, formData, documentation)
        uiLayout=getViewListSysDataTypeUILayout(frame, item, formData)
    }

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}


export const makeListTypeFrames = (frame, item, uiFrame, mode, formData, onTraverse, onSelect, fullFrame, documentation) => {
    
    let madeFrames = {}

    // set Data Types
    if(frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
        if(frame["properties"][item].hasOwnProperty("info")
            && frame["properties"][item]["info"] === DATA_TYPE)
            madeFrames=makeListDataTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation)
    }

    // list Sys Data Types
    if(frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
        if(frame["properties"][item].hasOwnProperty("info")
            && frame["properties"][item]["info"] === SYS_JSON_TYPE)
            madeFrames=makeSysDataTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation)
    }

    // set Sub Document Types
    if(frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
        if(frame["properties"][item].hasOwnProperty("info")
            && frame["properties"][item]["info"] === SUBDOCUMENT_TYPE)
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
            madeFrames=makeSetChoiceTypeFrames(frame, item, uiFrame, mode, formData)
    }

    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI

    return {properties, propertiesUI}
} 
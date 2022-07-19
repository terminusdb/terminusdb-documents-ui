import React, {useState, useEffect} from "react"
import {getSubDocumentTitle, getSubDocumentDescription, addCustomUI} from "../utils"
import {CREATE, DOCUMENT, EDIT, VIEW, SELECT_STYLES} from "../constants"
import {Form} from "react-bootstrap"
import AsyncSelect from 'react-select/async'
import {AsyncTypeahead} from 'react-bootstrap-typeahead'
import {
    getCreateLayout,
    getCreateUILayout,
    getEditLayout,
    getEditUILayout,
    getViewUILayout,
    getViewLayout
} from "./documentTypeFrames.utils"


export function documentTypeFrames (frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
    let properties={}, propertiesUI={}, required=null, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateLayout(frame, item)
        uiLayout=getCreateUILayout(frame, item, onSelect, uiFrame, documentation)
    }

    if (mode === EDIT) {
        layout=getEditLayout(frame, item, formData)
        let defaultValue=false
        if(layout.hasOwnProperty("default")) defaultValue=layout.default
        uiLayout=getEditUILayout(frame, item, onSelect, defaultValue, uiFrame, documentation)
    }

    if (mode === VIEW) {
        layout=getViewLayout(frame, item, formData)
        let defaultValue=false
        if(layout.hasOwnProperty("default")) defaultValue=layout.default
        uiLayout=getViewUILayout(frame, item, formData, onTraverse, uiFrame, documentation)
    }

    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=addedCustomUI

    return {properties, propertiesUI, required}
}


export const makeDocumentTypeFrames = (frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) => {
    let madeFrames = documentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation)
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    /*if(frame.hasOwnProperty("required")) {
        let required=frame.required
        return {properties, propertiesUI, required}
    }*/
    return {properties, propertiesUI}
}
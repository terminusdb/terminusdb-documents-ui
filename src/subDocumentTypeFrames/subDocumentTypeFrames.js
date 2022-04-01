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
} from "./subDocumentType.utils"


export function subDocumentTypeFrames (frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateLayout(frame, item)
        uiLayout=getCreateUILayout(frame, item)
    }

    if (mode === EDIT) {
        layout=getEditLayout(frame, item, formData)
        uiLayout=getEditUILayout(frame, item, formData)
    }

    if (mode === VIEW) {
        layout=getViewLayout(frame, item, formData)
        uiLayout=getViewUILayout(frame, item, formData)
    }

    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=uiLayout

    return {properties, propertiesUI}
}


export const makeSubDocumentFrames = (frame, item, uiFrame, mode, formData, onTraverse, onSelect) => {
    let madeFrames = subDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect)
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}
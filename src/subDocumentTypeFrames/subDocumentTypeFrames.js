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


export function subDocumentTypeFrames (frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
    let properties={}, propertiesUI={}, layout ={}, uiLayout={}

    if (mode === CREATE) {
        layout=getCreateLayout(frame, item)
        uiLayout=getCreateUILayout(frame, item, uiFrame, documentation)
    }

    if (mode === EDIT) {
        layout=getEditLayout(frame, item, formData)
        uiLayout=getEditUILayout(frame, item, formData, uiFrame, documentation)
    }

    if (mode === VIEW) {
        layout=getViewLayout(frame, item, formData)
        uiLayout=getViewUILayout(frame, item, formData, uiFrame, documentation)
    }

    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)

    // schema
    properties[item]=layout
    // ui schema
    propertiesUI[item]=addedCustomUI

    return {properties, propertiesUI}
}


export const makeSubDocumentFrames = (frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) => {
    let madeFrames = subDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation)
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}
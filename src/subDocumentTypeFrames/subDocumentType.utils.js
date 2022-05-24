import React, {useState, useEffect} from "react"
import {getSubDocumentTitle, getSubDocumentDescription, getDefaultValue, isFilled, addCustomUI, extractUIFrameSubDocumentTemplate} from "../utils"
import {CREATE, DOCUMENT, EDIT, VIEW, SELECT_STYLES, SUBDOCUMENT_TYPE} from "../constants"


// create layout
export function getCreateLayout (frame, item) {
    let layout= {
        type: "object",
        title: item,
        info: SUBDOCUMENT_TYPE,
        properties: frame.properties
        //required: Array.isArray(frame.required) ? frame.required : []
    }

    return layout
}

// create ui layout
export function getCreateUILayout (frame, item, uiFrame) {
    let uiLayout= {}
    let subDocuemntBg = extractUIFrameSubDocumentTemplate(uiFrame) ? extractUIFrameSubDocumentTemplate(uiFrame) : 'bg-secondary'
    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout=frame["uiSchema"]
    }
    uiLayout["ui:field"]="collapsible"
    uiLayout["collapse"]={
        field: "ObjectField",
        classNames:"tdb__subdocument__collapse_headers"
    }
    uiLayout["classNames"]=`card ${subDocuemntBg} p-4 mt-4 mb-4`
    uiLayout["ui:description"]=getSubDocumentDescription(item)
    uiLayout["ui:title"]=getSubDocumentTitle(item)
    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}

// edit layout
export function getEditLayout (frame, item, formData) {
    let layout= {
        type: "object",
        title: item,
        info: SUBDOCUMENT_TYPE,
        properties: frame.properties
        //required: Array.isArray(frame.required) ? frame.required : []
    }

    // get default value
    let defaultValue=getDefaultValue(item, formData)
    if(defaultValue) layout["default"]=defaultValue

    //console.log("SUB LAYOUT", layout)

    return layout
}

// edit ui layout
export function getEditUILayout (frame, item, formData, uiFrame) {
    let uiLayout= {}
    let subDocuemntBg = extractUIFrameSubDocumentTemplate(uiFrame) ? extractUIFrameSubDocumentTemplate(uiFrame) : 'bg-secondary'

    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout=frame["uiSchema"]
    }
    uiLayout["ui:field"]="collapsible"
    uiLayout["collapse"]={
        field: "ObjectField",
        classNames:"tdb__subdocument__collapse_headers"
    }
    uiLayout["classNames"]=`card ${subDocuemntBg} p-4 mt-4 mb-4`
    uiLayout["ui:description"]=getSubDocumentDescription(item)
    uiLayout["ui:title"]=getSubDocumentTitle(item) 

    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}

// View Layout
export function getViewLayout(frame, item, formData) {

    let layout = {
        type: "object",
        title: item,
        info: SUBDOCUMENT_TYPE,
        properties: frame.properties
    }

    // get default value
    let defaultValue=getDefaultValue(item, formData)
    if(defaultValue) layout["default"]=defaultValue

    if(!isFilled(formData, item)) {
        layout = {
            type: "object",
            title: item,
            info: SUBDOCUMENT_TYPE,
            //properties: frame.properties
        }
    }

    return layout
}

// View UI Layout
export function getViewUILayout(frame, item, formData, uiFrame) {
    let uiLayout= {}
    let subDocuemntBg = extractUIFrameSubDocumentTemplate(uiFrame) ? extractUIFrameSubDocumentTemplate(uiFrame) : 'bg-secondary'
    
    // hide widget if formData of item is empty
    if(!isFilled(formData, item)) {
        uiLayout={ "ui:widget" : "hidden" }
        return uiLayout
    }

    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout=frame["uiSchema"]
    }
    uiLayout["ui:field"]="collapsible"
    uiLayout["collapse"]={
        field: "ObjectField",
        classNames:"tdb__subdocument__collapse_headers"
    }
    uiLayout["classNames"]=`card ${subDocuemntBg} p-4 mt-4 mb-4`
    uiLayout["ui:description"]=getSubDocumentDescription(item)
    uiLayout["ui:title"]=getSubDocumentTitle(item) 
    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)
    return addedCustomUI
}
//  classNames: `card ${subDocumentStyles} p-4 mt-4 mb-4`,

import React, {useState, useEffect} from "react"
import {getSubDocumentTitle, getSubDocumentDescription, getDefaultValue, isFilled} from "../utils"
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
export function getCreateUILayout (frame, item) {
    let uiLayout= {}
    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout=frame["uiSchema"]
    }
    uiLayout["ui:field"]="collapsible"
    uiLayout["collapse"]={
        field: "ObjectField",
        classNames:"tdb__subdocument__collapse_headers"
    }
    uiLayout["classNames"]="card bg-secondary p-4 mt-4 mb-4"
    uiLayout["ui:description"]=getSubDocumentDescription(item)
    uiLayout["ui:title"]=getSubDocumentTitle(item)
    return uiLayout
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

    return layout
}

// edit ui layout
export function getEditUILayout (frame, item) {
    let uiLayout= {}
    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout=frame["uiSchema"]
    }
    uiLayout["ui:field"]="collapsible"
    uiLayout["collapse"]={
        field: "ObjectField",
        classNames:"tdb__subdocument__collapse_headers"
    }
    uiLayout["classNames"]="card bg-secondary p-4 mt-4 mb-4"
    uiLayout["ui:description"]=getSubDocumentDescription(item)
    uiLayout["ui:title"]=getSubDocumentTitle(item)
    return uiLayout
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

    return layout
}

// View UI Layout
export function getViewUILayout(frame, item, formData) {
    let uiLayout= {}
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
    uiLayout["classNames"]="card bg-secondary p-4 mt-4 mb-4"
    uiLayout["ui:description"]=getSubDocumentDescription(item)
    uiLayout["ui:title"]=getSubDocumentTitle(item)
    return uiLayout
}
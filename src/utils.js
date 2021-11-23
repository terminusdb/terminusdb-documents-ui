
import React from "react"
import {XSD_DATA_TYPE_PREFIX, XDD_DATA_TYPE_PREFIX, SUBDOCUMENT} from "./constants"

// returns true for properties which are of data types xsd and xdd
export const isDataType = (property) => {
    if(typeof property === "object") return false
    if(property.substring(0, 4) ==  XSD_DATA_TYPE_PREFIX) return true
}

// returns true for properties which are subdocuments
export const isSubDocumentType = (property, subDocumentFrame) => {
    if(!subDocumentFrame) return false
    if(subDocumentFrame["@id"] === property) {
        return true
    }
    return false
}

// field array to display field titles
export function getSubDocumentTitle(item) {
    let title=[]
    title.push(<h6 className="subdoc-label-color">{item}</h6>)
    //<GoFileSubmodule className="mr-2"/>
    return title
}

export function getSubDocumentDescription(item) {
    let descr=[]
    descr.push(<p className="text-muted fw-bold">{`${item} is a sub document. If you wish to fill a property of ${item} make sure all mandatory fields are entered.`}</p>)
    // /<BiErrorCircle className="mr-2"/>
    return descr
}


// field array to display key fields
export function getFieldTitle(item, uiDisable) {
    if(uiDisable) return <span title={`${item} is a key field. Once created, you will not be able to update this field.`}>
        <FcKey className="mr-2"/>{item}</span>
}

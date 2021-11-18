
import React from "react"
import {XSD_DATA_TYPE_PREFIX, XDD_DATA_TYPE_PREFIX} from "./constants"

export const isDataType = (property) => {
    if(typeof property == "object") return false
    if(property.substring(0, 4) ==  XSD_DATA_TYPE_PREFIX) return true
    else if(property.substring(0, 4) ==  XDD_DATA_TYPE_PREFIX) return true
    else return false
}

export function getFieldTitle(item, uiDisable) {
    if(uiDisable) return <span title={`${item} is a key field. Once created, you will not be able to update this field.`}><FcKey className="mr-2"/>{item}</span>
    else return <span>{item}</span>
}

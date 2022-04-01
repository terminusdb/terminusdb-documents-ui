import {getTitle, getDefaultValue, checkIfKey, isFilled, extractPrefix} from "../utils"
import {getProperties} from "../FrameHelpers"
import {
    XSD_STRING,
    XSD_DECIMAL,
    XSD_DATE_TIME,
    CHOICECLASSES,
    XSD_BOOLEAN,
    STRING_TYPE,
    NUMBER_TYPE,
    BOOLEAN_TYPE,
    DATE_TYPE,
    DATA_TYPE
} from "../constants"

// get layout of document class
function getDocumentLayout(documentClass, fullFrame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    var layout = {}
    let documentClassIRI = `${extractPrefix(fullFrame)}${documentClass}`
    let frame = fullFrame[documentClassIRI]
    let filledData = formData.hasOwnProperty(item) ? formData[item] : {}
    let exractedProperties = getProperties (fullFrame, frame, uiFrame, mode, filledData, onTraverse, onSelect)
    console.log("exractedProperties", exractedProperties)
    // add subdocument type as @type field
    exractedProperties.properties["@type"]={
        type: "string",
        title: documentClass,
        default: documentClass
    }

    // hide @type field
    exractedProperties.uiSchema["@type"]={"ui:widget": "hidden"}

    layout = {
        title: documentClass,
        properties: {
            [documentClass]: {
                title: documentClass,
                type: "object",
                properties: exractedProperties.properties,
                uiProperties:  exractedProperties.uiSchema
            }
        }
    }
    return layout
}


// Create Layout
export function getCreateLayout(fullFrame, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {

    // get choice documents
    let anyOfArray = []
    frame[item].map(fr => {
        let documentName=fr//["@class"]
        anyOfArray.push(getDocumentLayout(documentName, fullFrame, item, uiFrame, mode, formData, onTraverse, onSelect))
    })

    let layout = {
        type: 'object',
        info: CHOICECLASSES,
        title: item,
        description: `Choose ${item} from the list ...`,
        anyOf: anyOfArray
    }
    return layout
}

// Create UI Layout
export function getCreateUILayout(frame, item, layout) {
    let uiLayout = {
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        classNames: "tdb__input mb-3 mt-3"
    }

    if(layout.hasOwnProperty("anyOf") && Array.isArray(layout.anyOf)) {
        layout.anyOf.map(aOf => {
            if(aOf.hasOwnProperty("properties")) {
                let DocumentClassName = aOf.title
                uiLayout[DocumentClassName] = aOf.properties[DocumentClassName].uiProperties
            }
        })
    }

    return uiLayout
}

// Edit Layout
export function getEditLayout(fullFrame, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    // get choice documents
    let anyOfArray = []
    frame[item].map(fr => {
        let documentName=fr//["@class"]
        let documentLayout= getDocumentLayout(documentName, fullFrame, item, uiFrame, mode, formData, onTraverse, onSelect)

        if(formData.hasOwnProperty(item))  {
            if(documentLayout.hasOwnProperty("title")
                && documentLayout.title === formData[item]["@type"])
            anyOfArray.push(documentLayout)
        }
        else {
            anyOfArray.push(documentLayout)
        }


    })

    let layout = {
        type: 'object',
        info: CHOICECLASSES,
        title: item,
        description: `Choose ${item} from the list ...`,
        anyOf: anyOfArray
    }
    return layout
}

// Edit UI Layout
export function getEditUILayout(frame, item, layout) {
    let uiLayout = {
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        classNames: "tdb__input mb-3 mt-3"
    }

    if(layout.hasOwnProperty("anyOf") && Array.isArray(layout.anyOf)) {
        layout.anyOf.map(aOf => {
            if(aOf.hasOwnProperty("properties")) {
                let DocumentClassName = aOf.title
                uiLayout[DocumentClassName] = aOf.properties[DocumentClassName].uiProperties
            }
        })
    }

    return uiLayout
}

// View Layout
export function getViewLayout(fullFrame, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    // get choice documents
    let anyOfArray = []
    frame[item].map(fr => {
        let documentName=fr//["@class"]
        let documentLayout= getDocumentLayout(documentName, fullFrame, item, uiFrame, mode, formData, onTraverse, onSelect)
        if(documentLayout.hasOwnProperty("title")
            && formData.hasOwnProperty(item)
            && documentLayout.title === formData[item]["@type"])
        anyOfArray.push(documentLayout)
    })

    let layout = {
        type: 'object',
        info: CHOICECLASSES,
        title: item
    }

    if(isFilled(formData, item)) {
        layout["anyOf"]=anyOfArray
        layout["description"]=`Choose ${item} from the list ...`
    }

    return layout
}

// View UI Layout
export function getViewUILayout(frame, item, layout) {
    // hide widget if formData of item is empty
    if(!layout.hasOwnProperty("anyOf")) {
        uiLayout={ "ui:widget" : "hidden" }
        return uiLayout
    }

    let uiLayout = {
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        classNames: "tdb__input mb-3 mt-3"
    }

    if(layout.hasOwnProperty("anyOf") && Array.isArray(layout.anyOf)) {
        layout.anyOf.map(aOf => {
            if(aOf.hasOwnProperty("properties")) {
                let DocumentClassName = aOf.title
                uiLayout[DocumentClassName] = aOf.properties[DocumentClassName].uiProperties
            }
        })
    }

    return uiLayout
}
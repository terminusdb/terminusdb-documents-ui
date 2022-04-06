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
    DATA_TYPE,
    ONEOFVALUES,
    SYS_UNIT_DATA_TYPE
} from "../constants"

/*
@id: "Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/GeneralVariables/177d2ef58cb358ca64cdf861c3fa0ec7ad2a06570456dc1f49c94a650bd892c9/alternative_names/AlternativeNames/4aadbbecee6ee577f9a394ecedbbf6407d2200e749f98ba254e3c8cf81d35835"
@type: "AlternativeNames"
known:
@id: "Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/GeneralVariables/177d2ef58cb358ca64cdf861c3fa0ec7ad2a06570456dc1f49c94a650bd892c9/alternative_names/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa26e0264af3748acd0151d7/general_variables/GeneralVariables/177d2ef58cb358ca64cdf861c3fa0ec7ad2a06570456dc1f49c94a650bd892c9/alternative_names/AlternativeNames/4aadbbecee6ee577f9a394ecedbbf6407d2200e749f98ba254e3c8cf81d35835/known/StringValue/eba154d9d78b874db7f8154ba5698cfe7ce95553c81164d0c1256b8f1d46b695"
@type: "StringValue"
date_range: {@id: 'Polity/7c8970c578b2fdad1ebd8b4a3693a560cb95febafa2…d3bacc897166b4ab46ee5e0c171dcb589caa9e77d75087e94', @type: 'DateRange', from: 2019, to: 2018}
value: "KNOWN VAL"*/

// get layout of document class
export function getCreateDocumentLayout(documentClass, fullFrame, current, item, uiFrame, mode, formData, onTraverse, onSelect) {
    var layout = {}, currentData, exractedUiProperties={}
    let documentClassIRI = `${extractPrefix(fullFrame)}${documentClass}`
    let frame = fullFrame[documentClassIRI]

    let exractedProperties = getProperties (fullFrame, current, frame, uiFrame, mode, {}, onTraverse, onSelect)
    //console.log("exractedProperties", exractedProperties)
    // add subdocument type as @type field
    exractedProperties.properties["@type"]={
        type: "string",
        title: documentClass,
        default: documentClass
    }
    exractedProperties.properties["@choice"]={
        type: "string",
        title: current,
        default: current
    }

    // hide @type field
    exractedProperties.uiSchema["@type"]={"ui:widget": "hidden"}
    // hide @choice field
    exractedProperties.uiSchema["@choice"]={"ui:widget": "hidden"}

    layout = {
        title: current,
        type: "object",
        properties: exractedProperties.properties,
        uiProperties: exractedProperties.uiSchema
    }
    return layout
}

// get layout of document class
function getCreateDocumentLayoutOLD(documentClass, fullFrame, current, item, uiFrame, mode, formData, onTraverse, onSelect) {
    var layout = {}, currentData
    let documentClassIRI = `${extractPrefix(fullFrame)}${documentClass}`
    let frame = fullFrame[documentClassIRI]

    let exractedProperties = getProperties (fullFrame, current, frame, uiFrame, mode, formData, onTraverse, onSelect)
    //console.log("exractedProperties", exractedProperties)
    // add subdocument type as @type field
    exractedProperties.properties["@type"]={
        type: "string",
        title: documentClass,
        default: documentClass
    }
    exractedProperties.properties["@choice"]={
        type: "string",
        title: current,
        default: current
    }

    // hide @type field
    exractedProperties.uiSchema["@type"]={"ui:widget": "hidden"}
    // hide @choice field
    exractedProperties.uiSchema["@choice"]={"ui:widget": "hidden"}

    layout = {
        title: current,
        type: "object",
        properties: exractedProperties.properties,
        uiProperties: exractedProperties.uiSchema
    }
    return layout
}

// get layout of document class
function getEditDocumentLayout(documentClass, fullFrame, current, item, uiFrame, mode, formData, onTraverse, onSelect) {
    var layout = {}, currentData
    let documentClassIRI = `${extractPrefix(fullFrame)}${documentClass}`
    let frame = fullFrame[documentClassIRI]



    let exractedProperties = getProperties (fullFrame, current, frame, uiFrame, mode, formData, onTraverse, onSelect)
    //console.log("exractedProperties", exractedProperties)
    // add subdocument type as @type field
    exractedProperties.properties["@type"]={
        type: "string",
        title: documentClass,
        default: documentClass
    }
    exractedProperties.properties["@choice"]={
        type: "string",
        title: current,
        default: current
    }


    // hide @type field
    exractedProperties.uiSchema["@type"]={"ui:widget": "hidden"}
    // hide @choice field
    exractedProperties.uiSchema["@choice"]={"ui:widget": "hidden"}

    layout = {
        title: current,
        type: "object",
        properties: exractedProperties.properties,
        uiProperties: exractedProperties.uiSchema
    }
    return layout
}

// get layout of document class
function getDocumentLayout(documentClass, fullFrame, current, item, uiFrame, mode, formData, onTraverse, onSelect) {
    var layout = {}, currentData
    let documentClassIRI = `${extractPrefix(fullFrame)}${documentClass}`
    let frame = fullFrame[documentClassIRI]

    console.log("formData", formData)

    if(formData && Array.isArray(formData)) {
        formData.map(fds => {
            if(!fds.hasOwnProperty("used") && fds.hasOwnProperty(current)) {
                currentData=fds[current]
                fds["used"]=true
                return
            }
        })
    }
    //console.log("currentData",currentData)

    let exractedProperties = getProperties (fullFrame, current, frame, uiFrame, mode, currentData, onTraverse, onSelect)
    //console.log("exractedProperties", exractedProperties)
    // add subdocument type as @type field
    exractedProperties.properties["@type"]={
        type: "string",
        title: documentClass,
        default: documentClass
    }
    exractedProperties.properties["@choice"]={
        type: "string",
        title: current,
        default: current
    }


    // hide @type field
    exractedProperties.uiSchema["@type"]={"ui:widget": "hidden"}
    // hide @choice field
    exractedProperties.uiSchema["@choice"]={"ui:widget": "hidden"}

    layout = {
        title: current,
        type: "object",
        properties: exractedProperties.properties,
        uiProperties: exractedProperties.uiSchema
    }
    return layout
}


// Create Layout
export function getCreateLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {

    // get choice documents
    let anyOfArray = []

    //console.log("frame one of", frame)

    frame[item].map(fr => {
        for(var oneOf in fr) {
            let documentName=fr[oneOf]
            let currentChoice=oneOf
            if(documentName !== SYS_UNIT_DATA_TYPE) {
                anyOfArray.push(getCreateDocumentLayout(documentName, fullFrame, currentChoice, item, uiFrame, mode, formData, onTraverse, onSelect))
            }
        }
    })

    let layout = {
        type: 'object',
        info: ONEOFVALUES,
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
                //let DocumentClassName = aOf.title
                //uiLayout[DocumentClassName] = aOf.properties[DocumentClassName].uiProperties
                for(var ui in aOf.uiProperties) {
                    uiLayout[ui]=aOf.uiProperties[ui]
                }
            }
        })
    }

    return uiLayout
}



// Edit Layout
export function getEditLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    // get choice documents
    let anyOfArray = []

    let defaultValues=(formData && Array.isArray(formData)) ? formData : null

    let defaultValueArray=formData

    frame[item].map(fr => {
        for(var oneOf in fr) {
            let documentName=fr[oneOf], data={}
            let currentChoice=oneOf

            if(documentName !== SYS_UNIT_DATA_TYPE){
                anyOfArray.push(getEditDocumentLayout(documentName, fullFrame, currentChoice, item, uiFrame, mode, formData, onTraverse, onSelect))
            }
        }
    })

    let layout = {
        type: 'object',
        info: ONEOFVALUES,
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
                //let DocumentClassName = aOf.title
                //uiLayout[DocumentClassName] = aOf.properties[DocumentClassName].uiProperties
                for(var ui in aOf.uiProperties) {
                    uiLayout[ui]=aOf.uiProperties[ui]
                }
            }
        })
    }

    return uiLayout
}

// View Layout
/*export function getViewLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    // get choice documents
    let anyOfArray = []

    //console.log("frame one of", frame)

    frame[item].map(fr => {
        for(var oneOf in fr) {
            let documentName=fr[oneOf]
            let currentChoice=oneOf

            let filledData = (formData && Array.isArray(formData) && formData[0].hasOwnProperty(oneOf))? formData[0][oneOf] : null

            if(documentName !== SYS_UNIT_DATA_TYPE && filledData) {
                anyOfArray.push(getDocumentLayout(documentName, fullFrame, currentChoice, item, uiFrame, mode, filledData, onTraverse, onSelect))
            }
        }
    })

    let layout = {
        type: 'object',
        info: ONEOFVALUES,
        title: item,
        description: `Choose ${item} from the list ...`,
        anyOf: anyOfArray
    }
    return layout
} */


// View Layout
export function getViewLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
    // get choice documents
    let anyOfArray = []

    let defaultValues=(formData && Array.isArray(formData)) ? formData : null

    let defaultValueArray=formData

    frame[item].map(fr => {
        for(var oneOf in fr) {
            let documentName=fr[oneOf], data={}
            let currentChoice=oneOf

            if(documentName !== SYS_UNIT_DATA_TYPE){
                anyOfArray.push(getDocumentLayout(documentName, fullFrame, currentChoice, item, uiFrame, mode, formData, onTraverse, onSelect))
            }
        }
    })

    let layout = {
        type: 'object',
        info: ONEOFVALUES,
        title: item,
        description: `Choose ${item} from the list ...`,
        anyOf: anyOfArray
    }
    return layout
}


// View UI Layout
export function getViewUILayout(frame, item, layout) {
    let uiLayout = {
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
        classNames: "tdb__input mb-3 mt-3"
    }

    if(layout.hasOwnProperty("anyOf") && Array.isArray(layout.anyOf)) {

        layout.anyOf.map(aOf => {
            if(aOf.hasOwnProperty("properties")) {
                //let DocumentClassName = aOf.title
                //uiLayout[DocumentClassName] = aOf.properties[DocumentClassName].uiProperties
                for(var ui in aOf.uiProperties) {
                    uiLayout[ui]=aOf.uiProperties[ui]
                }
            }
        })
    }

    return uiLayout

}
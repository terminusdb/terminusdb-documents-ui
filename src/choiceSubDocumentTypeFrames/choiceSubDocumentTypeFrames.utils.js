import {getTitle, extractChoiceDocumentLabels, addCustomUI, checkIfKey, isFilled, extractUIFrameSubDocumentTemplate, getLabelFromDocumentation} from "../utils"
import {getProperties} from "../FrameHelpers"
import {
    CHOICESUBCLASSES,
    DOCUMENTATION
} from "../constants"
 
// get layout of document class
function getDocumentLayout(documentClass, fullFrame, current, item, uiFrame, mode, formData, onTraverse, onSelect) {
    var layout = {}
    let documentClassIRI = `${documentClass}`
    let frame = fullFrame[documentClassIRI]
    let filledData = (formData && formData.hasOwnProperty(item))? formData[item] : {}
    let documentation= frame.hasOwnProperty(DOCUMENTATION) ? frame[DOCUMENTATION] : {}
    let exractedProperties = getProperties (fullFrame, current, frame, uiFrame, mode, filledData, onTraverse, onSelect, documentation)
    //console.log("exractedProperties", exractedProperties)
    // add subdocument type as @type field
    let docLabel=extractChoiceDocumentLabels(fullFrame, documentClass)
    exractedProperties.properties["@type"]={
        type: "string", 
        title: documentClass,
        default: documentClass
    }

    // hide @type field
    exractedProperties.uiSchema["@type"]={"ui:widget": "hidden"}

    layout = {
        title: documentClass,
        type: "object",
        properties: exractedProperties.properties,
        uiProperties:  exractedProperties.uiSchema
    }
    return layout
}


// Create Layout
export function getCreateLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {

    // get choice documents
    let anyOfArray = []
    frame[item].map(fr => { 
        var documentName
        if(typeof fr === "object" && fr.hasOwnProperty("@class")) {
            // optional, set or list
            documentName=fr["@class"]
        }
        else documentName=fr
        anyOfArray.push(getDocumentLayout(documentName, fullFrame, current, item, uiFrame, mode, formData, onTraverse, onSelect))
    })

    let label = getLabelFromDocumentation (item, documentation)
    let layout = {
        type: 'object',
        info: CHOICESUBCLASSES,
        title: label,
        description: `Choose ${label} from the list ...`,
        anyOf: anyOfArray
    }
    return layout
}

// Create UI Layout
export function getCreateUILayout(frame, item, layout, uiFrame, documentation) {

    let subDocuemntBg = extractUIFrameSubDocumentTemplate(uiFrame) ? extractUIFrameSubDocumentTemplate(uiFrame) : 'bg-secondary'


    let uiLayout = {
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"]), documentation),
        //classNames: "tdb__input mb-3 mt-3",
        classNames:`card ${subDocuemntBg} p-4 mt-4 mb-4`
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

    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)

    return addedCustomUI
}

// Edit Layout
export function getEditLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
    // get choice documents
    let anyOfArray = []
    frame[item].map(fr => {
        var documentName
        if(typeof fr === "object" && fr.hasOwnProperty("@class")) {
            // optional, set or list
            documentName=fr["@class"]
        }
        else documentName=fr
        let documentLayout= getDocumentLayout(documentName, fullFrame, current, item, uiFrame, mode, formData, onTraverse, onSelect)

        if(formData.hasOwnProperty(item))  {
            if(documentLayout.hasOwnProperty("title")
                && documentLayout.title === formData[item]["@type"]) {
                    anyOfArray.push(documentLayout)
            }
            else if (documentLayout.hasOwnProperty("title")
                && Array.isArray(formData[item])) {
                    //set
                    anyOfArray.push(documentLayout)
            }
        }
        else {
            anyOfArray.push(documentLayout)
        }


    })
    let label = getLabelFromDocumentation (item, documentation)
    let layout = {
        type: 'object',
        info: CHOICESUBCLASSES,
        title: label,
        description: `Choose ${label} from the list ...`,
        anyOf: anyOfArray
    }
    return layout
}

// Edit UI Layout
export function getEditUILayout(frame, item, layout, uiFrame, documentation) {
    let subDocuemntBg = extractUIFrameSubDocumentTemplate(uiFrame) ? extractUIFrameSubDocumentTemplate(uiFrame) : 'bg-secondary'

    let uiLayout = {
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"]), documentation),
        classNames: `card ${subDocuemntBg} p-4 mt-4 mb-4`//"tdb__input mb-3 mt-3"
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
export function getViewLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
    // get choice documents
    let anyOfArray = []
    frame[item].map(fr => {
        var documentName
        if(typeof fr === "object" && fr.hasOwnProperty("@class")) {
            // optional, set or list
            documentName=fr["@class"]
        }
        else documentName=fr
        let documentLayout= getDocumentLayout(documentName, fullFrame, current, item, uiFrame, mode, formData, onTraverse, onSelect)

        if(formData.hasOwnProperty(item))  {
            if(documentLayout.hasOwnProperty("title")
                && documentLayout.title === formData[item]["@type"]) {
                    anyOfArray.push(documentLayout)
            }
            else if (documentLayout.hasOwnProperty("title")
                && Array.isArray(formData[item])) {
                    //set
                    anyOfArray.push(documentLayout)
            }
        }
        else {
            anyOfArray.push(documentLayout)
        }

    })
    
    let label = getLabelFromDocumentation (item, documentation)
    let layout = {
        type: 'object',
        info: CHOICESUBCLASSES,
        title: label
    }

    if(isFilled(formData, item)) {
        layout["anyOf"]=anyOfArray
        layout["description"]=`Choose ${label} from the list ...`
    }

    return layout
}

// View UI Layout
export function getViewUILayout(frame, item, layout, uiFrame, documentation) {
    // hide widget if formData of item is empty
    if(!layout.hasOwnProperty("anyOf")) {
        uiLayout={ "ui:widget" : "hidden" }
        return uiLayout
    }
    let subDocuemntBg = extractUIFrameSubDocumentTemplate(uiFrame) ? extractUIFrameSubDocumentTemplate(uiFrame) : 'bg-secondary'


    let uiLayout = {
        "ui:title": getTitle(item, checkIfKey(item, frame["@key"]), documentation),
        classNames:  `card ${subDocuemntBg} p-4 mt-4 mb-4`//"tdb__input mb-3 mt-3"
    }

    if(layout.hasOwnProperty("anyOf") && Array.isArray(layout.anyOf)) {
        layout.anyOf.map(aOf => {
            if(aOf.hasOwnProperty("properties")) {
                for(var ui in aOf.uiProperties) {
                    uiLayout[ui]=aOf.uiProperties[ui]
                }
            }
        })
    }

    return uiLayout
}
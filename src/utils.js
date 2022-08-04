
import React from "react"
import {Button, Form} from "react-bootstrap"
import {
	XSD_DATA_TYPE_PREFIX, 
	XDD_DATA_TYPE_PREFIX, 
	POINT_TYPE, 
	UI_FRAME_SELECT_STYLE, 
	UI_FRAME_SUBDOCUMENT_STYLE, 
	VIEW,
	DIMENSION, 
	ONEOFVALUES, 
	OPTIONAL, 
	SET, 
	ONEOFCLASSES, 
	DOCUMENT, 
	ENUM, 
	VALUE_HASH_KEY, 
	LIST, 
	SYS_UNIT_DATA_TYPE, 
	SUBDOCUMENT, 
	ARRAY, 
	COORDINATES, 
	SUBDOCUMENT_TYPE,
	FEATURE_COLLECTION,
	SYS_UNIT_TYPE_PREFIX,
	DOCUMENTATION
} from "./constants"
import {BiKey, BiPlus} from "react-icons/bi"
import {RiDeleteBin5Fill} from "react-icons/ri"
import {FcKey} from "react-icons/fc"
import {BiErrorCircle} from "react-icons/bi"
import {FaArrowDown, FaArrowUp, FaHourglassEnd} from "react-icons/fa"

// returns true for properties which are of data types xsd and xdd
export const isDataType = (property) => {
	if(typeof property === "object") return false
	if(property.substring(0, 4) === XSD_DATA_TYPE_PREFIX) return true
	if(property.substring(0, 4) === XDD_DATA_TYPE_PREFIX) return true
}

export const isSysDataType = (property) => {
	if(typeof property === "object") return false
	if(property.substring(0, 4) === SYS_UNIT_TYPE_PREFIX) return true 
}

// returns true for properties which are subdocuments
export const isSubDocumentType = (property) => {
	if(property.hasOwnProperty(SUBDOCUMENT)) return true
	return false
}


// to identify if choice sub documenst
export const isChoiceSubDocumentType = (property) => {
	if(typeof property !== "object") return false
	if(Array.isArray(property)) {
		let props=property[0]
		if(props.hasOwnProperty("@class") && props.hasOwnProperty(SUBDOCUMENT))
			return true
		return false
	}
	return false
}

// to identify if choice documenst
export const isChoiceDocumentType = (property) => {
	if(typeof property !== "object") return false
	if(Array.isArray(property)) {
		let props=property[0]
		if(typeof props === "string")
			return true
		return false
	}
	return false
}

// returns true for optional
export const isOptionalType = (property) => {
	if(typeof property !== "object") return false
	if(property["@type"] === OPTIONAL) return true
	return false
}


// returns true for set
export const isSetType = (property) => {
	if(typeof property !== "object") return false
	if(property["@type"] === SET) return true
	return false
}

// display geo json in view mode in a different way 
export const isGeoJSONTypeSet = (frame, mode) => {
	if(mode !== VIEW) return false 
	if(frame.hasOwnProperty("type") && 
		frame["type"].hasOwnProperty("@type") && 
		frame["type"]["@type"] === ENUM){ 
			if(frame["type"]["@values"][0] === FEATURE_COLLECTION) return true
			else return false
		}
	return false 
}

// returns true for List
export const isListType = (property) => {
	if(typeof property !== "object") return false
	if(property["@type"] === LIST) return true
	return false
}

// returns true for properties pointing to other documents or enums
export const isDocumentType = (property, frame) => {
	if(typeof property === "object") return false
	if(!frame) return false
	let document = `${property}`
	if(frame[document]) {
		if(frame[document]["@type"] === DOCUMENT && !frame[document]["@subdocument"]) return true
	}
	return false
}

//returns true if @class is POINT type
export const isPointType = (property, frame) => {
	if(typeof property !== "object") return false


	if(property.hasOwnProperty("@class")
		&& property["@class"] === POINT_TYPE) {
			let pointProperty=`${property["@class"]}`
			if(frame.hasOwnProperty(pointProperty)) {
				return frame[pointProperty]
			}
		return false
	}
	return false
}

// returns true if @subdocuments and type class
export const isSubDocumentAndClassType = (property, frame) => {
	if(typeof property === "object") return false
	if(!frame) return false
	let document = `${property}`
	if(frame[document]) {
		if(frame[document]["@type"] === DOCUMENT && frame[document]["@subdocument"]) return frame[document]
	}
	return false
}
 
// returns true if @type is Array and item is coordinates
export const isDocumentClassArrayType = (frame) => {
	if(typeof frame !== "object") return false
	if(frame.hasOwnProperty("@type") && frame["@type"] === ARRAY) return true
	return false
}


// returns modified frames for coordinates with type as well to differntiate between polygon/ multipolygon
export const getModifiedGeoFrame = (frame) => {
	let newFrame={}
	newFrame=frame[COORDINATES]
	if(frame.hasOwnProperty("type") && 
		frame["type"].hasOwnProperty("@type") && 
		frame["type"]["@type"] === ENUM && 
		frame["type"].hasOwnProperty("@values")) {
			newFrame["info"]=frame["type"]["@values"][0]
	}
	return newFrame
}

// returns true for properties ponting to an enum class
export const isEnumType = (property) => {
	if(typeof property !== "object") return false
	if(property["@type"] === ENUM) return true
}



// field array to display field titles
export function getSubDocumentTitle(item, documentation) {
	let title=[]
	let label=getLabelFromDocumentation(item, documentation)
	title.push(<h6 style={{display: "contents"}}>{label}</h6>)
	//<GoFileSubmodule className="mr-2"/>
	return title
}

export function getSubDocumentDescription(item) {
	let descr=[]
	descr.push(<p className="text-muted fw-bold">{`${item} is a sub document. If you wish to fill a property of ${item} make sure all mandatory fields are entered.`}</p>)
	// /<BiErrorCircle className="mr-2"/>
	return descr
}

export function getTitle(item, uiDisable, documentation) {
	let label=getLabelFromDocumentation(item, documentation)
	if(uiDisable) return <span key={label}  title={`${label} is a key field. Once created, you will not be able to update this field.`}><FcKey className="mr-2"/>{label}</span>
    else return <span key={label} >{label}</span>
}

export function getSetTitle(item, documentation) {
	let label=getLabelFromDocumentation(item, documentation)
	return label
}


// field array to display key fields
export function getFieldTitle(item, uiDisable) {
	if(uiDisable) return <span key={item} title={`${item} is a key field. Once created, you will not be able to update this field.`}>
	<FcKey className="mr-2"/>{item}</span>
}

// get default values to document/ enum types
export function getDefaultValue(item, formData) {
	if(!formData) return false
	if(Object.keys(formData).length === 0) return false
	if(formData.hasOwnProperty(item)) return formData[item]
	return false
}

// List required min 1 item in it so forthe first subdocument we make all its fields mandatory
export function getRequiredForListSubDocs(properties){
	let required=[]
	for(var key in properties){
		if(key !== "@type") required.push(key)
	}
	return required
}

export function HideArrayFieldTemplate(props) {
	return <div/>
}


export function ArrayFieldTemplate(props) {
	//console.log("props", props)
	var variant="dark"
	if(props.schema.info==="SUBDOCUMENT") variant="secondary"

	return  (
			<div className={props.className}>
				<span className="control-label">{props.title}</span>
				{/*<p className="text-muted fw-bold">{`${props.title} is a Set. To add ${props.title} click on the Add button`}</p>*/}
				{props.items &&
					props.items.map(element => (
						<div key={element.key} className={element.className}>
							{<div>{element.children}</div>}
							{element.hasMoveDown && (
									<Button variant={variant} className="mb-3 tdb__array__item__list bg-transparent border-0" title="Move Down"  onClick={element.onReorderClick(
											element.index,
											element.index + 1
										)}>
										<FaArrowDown className="text-light" style={{fontSize: "20px"}}/>
									</Button>
							)}
							{element.hasMoveUp && (
									<Button variant={variant} title="Move Up"  className="mb-3 tdb__array__item__list bg-transparent border-0" onClick={element.onReorderClick(
											element.index,
											element.index - 1
										)}>
									<FaArrowUp className="text-light" style={{fontSize: "20px"}}/>
							</Button>
							)}

							{element.hasRemove && <Button  variant={variant} className="mb-3 tdb__array__item__list bg-transparent border-0" title="Delete" onClick={element.onDropIndexClick(element.index)}>
									<RiDeleteBin5Fill className="text-danger" style={{fontSize: "25px"}}/>
							</Button>}

						</div>
				))}

				{props.canAdd && (
					<div className="row">
						<p className="col-xs-3 col-xs-offset-9 array-item-add text-right">
							<Button variant="light" className="text-dark" type="button" onClick={props.onAddClick}>
									<BiPlus className="mr-2"/>{`Add ${props.title}`}
							</Button>
						</p>
					</div>
				)}
			</div>
		)

}


// hide a field
export const hidden = () => <div/>

// function checks if formData has a filled value for item
export function isFilled (formData, item){
	if(!formData) return false
	if(Array.isArray(formData)) return true
	if(formData.hasOwnProperty(item) && Array.isArray(formData[item]) && formData[item].length) return true
	if(formData.hasOwnProperty(item) && formData[item]) return true
	return false
}

// function checks in property is key of a document
export function checkIfKey(property, key) {
    if(!key) return
	if(!key["@fields"]) return
	var isKey=false
	key["@fields"].map(item => {
		if(item === property) {
			isKey=true
			return
		}
	})
	return isKey
}


 // check if document has ValueHash type key
export function isValueHashDocument(frame) {
	if(!frame) return null
	if(frame["@key"] && frame["@key"]["@type"] &&
		frame["@key"]["@type"] === VALUE_HASH_KEY) {
			return true
	}
	return false
}

export function getValueHashMessage () {
	return <p className="text-muted fw-bold">
		<BiErrorCircle className="mr-2"/>
		Edit is disabled for a document with Value Hash key.
		A Value Hash object will change its id and is generated from its properties. Best way would be to
		delete this document and create a new one.
	</p>
}


// function for set subdocuments to make fields mandatory only if one field is enterred
function getOtherProperties(property, properties)  {
    let other = []
    for (var props in properties) {
        if(props === "@type") continue
        if(props !== property) {
            other.push(props)
        }
    }
    return other
}

export function getDependencies(properties) {
    let dependencies = {}
    for (var props in properties) {
        if(props === "@type") continue
        dependencies[props] = getOtherProperties(props, properties)
    }
    return dependencies
}

// get select options to display
function getSelectOptions(placeholder, defaultValue, enums) {
	let opts=[]
	opts.push(<option value="">{placeholder}</option>)
	if(Array.isArray(enums)) {
		enums.map(enu => {
			if(enu === defaultValue) opts.push(<option value={enu} selected>{enu}</option>)
			else opts.push(<option value={enu}>{enu}</option>)
		})
	}
	return opts
}

// get select component with required
export function getRequiredSelect_ol(item, selectDocument, defaultValue, enums) {
	const handleSelect= (e, props) => { //create or edit
		if(props.onChange) props.onChange(e.target.value)
	}

	let opts=getSelectOptions(`Select ${selectDocument} ...`, defaultValue, enums)
	return <React.Fragment>
		<Form.Label>{item}</Form.Label>
		<span class="required">*</span>
		<select className="d-block form-control"
			defaultValue={defaultValue}
			required
			onChange={(e) => handleSelect(e, props)}>
			{opts}
		</select>
	</React.Fragment>
}

// get select component with required
export function getRequiredSelect(props) {
	const handleSelect= (e, props) => { //create or edit
		if(props.onChange) props.onChange(e.target.value)
	}

	let opts=getSelectOptions(props.uiSchema["ui:placeholder"], props.formData, props.schema.enum)
	return <React.Fragment>
		<Form.Label>{props.name}<span class="required">*</span></Form.Label>
		<select className="d-block form-control"
			required
			onChange={(e) => handleSelect(e, props)}>
			{opts}
		</select>
	</React.Fragment>
}

// get select component with no required
export function getOptionalSelect_OLD (props) {
	const handleSelect= (e, props) => { //create or edit
		if(props.onChange) props.onChange(e.target.value)
	}
	let opts=getSelectOptions(props.uiSchema["ui:placeholder"], props.formData, props.schema.enum)
	return <React.Fragment>
		<Form.Label>{props.name}</Form.Label>
		<select className="d-block form-control"
			onChange={(e) => handleSelect(e, props)}>
			{opts}
		</select>
	</React.Fragment>
}

// get select component with no required
export function getOptionalSelect (props) {
	const handleSelect= (e, props) => { //create or edit
		if(props.onChange) props.onChange(e.target.value)
	}
	let opts=getSelectOptions(props.uiSchema["ui:placeholder"], props.formData, props.schema.enum)
	return <React.Fragment>
		<Form.Label>{props.name}</Form.Label>
		<select className="d-block form-control"
			onChange={(e) => handleSelect(e, props)}>
			{opts}
		</select>
	</React.Fragment>
}

// remove defaults from set/ list - filled frames of subdocuments
export function removeDefaultsFromSubDocumentFrame (json) {
    // remove default values and get them from form Data
    var newJson=json
    for(var key in newJson){
        for (var item in newJson[key]){
            if(item === "default") delete newJson[key][item]
        }
    }
    return newJson
}

// remove defaults from set/ list - filled frames of data
export function removeDefaultsFromDataFrame (json) {
    // remove default values and get them from form Data
    var newJson=json
    for(var key in newJson){
        if(key === "default") delete newJson[key]
    }
    return newJson
}


// extract document class name from link documents
export function extractClassName(document, fullFrame) {
    let str = document
    let splits = str.split('/')
    let documentClass = splits[0]
    if(fullFrame.hasOwnProperty( `${documentClass}`)) {
        return splits[0] // if definition available in full frame
    }
    return false
}

// function to remove @ids from filled frames - we use this function during edit mode so we do not re send id
export function removeIds(dataArray){
	if(!Array.isArray(dataArray)) return []
	let newDataArray = []
	dataArray.map(da => {
		let newJson = {}
		for(var thing in da){
			if(thing === "@id") continue
			newJson[thing] = da[thing]
		}
		newDataArray.push(newJson)
	})
	return newDataArray
}

// add custom ui layout to existing default ui layout
export function addCustomUI (item, uiFrame, uiLayout) {
	if(!uiFrame) return uiLayout
	if(!Object.keys(uiFrame).length) return uiLayout

	let defaultUILayout = uiLayout
	if(uiFrame && uiFrame.hasOwnProperty(item)) {
        for (var uiItems in uiFrame[item]) {
            if(defaultUILayout.hasOwnProperty(uiItems) 
				&& uiItems !== "ui:widget"
				&& uiItems !== "ui:placeholder"
				&& uiItems !== "ui:description"
				&& uiItems !== "ui:title"
				&& uiItems !== "classNames") {
                let uiDefault = defaultUILayout[uiItems]
                defaultUILayout[uiItems] = `${uiDefault} ${uiFrame[item][uiItems]}`
            }
            else defaultUILayout[uiItems] = uiFrame[item][uiItems]
        }
    }
	//console.log("defaultUILayout", item, defaultUILayout)
	if(defaultUILayout && defaultUILayout.hasOwnProperty("ui:widget") && defaultUILayout["ui:widget"] === "hidden") {
		if(defaultUILayout.hasOwnProperty("ui:ArrayFieldTemplate")){
			// array type - set or list
			defaultUILayout={
				"ui:widget": 'hidden',
				"ui:ArrayFieldTemplate": HideArrayFieldTemplate
			}
		}
		else defaultUILayout={"ui:widget": 'hidden'}
	}
	return defaultUILayout
}

// function to check if custom uiFrame has select_style defined
export function extractUIFrameSelectTemplate (uiFrame) {
	if(!uiFrame) return null
	if(Object.keys(uiFrame).length===0) return null
	if(uiFrame.hasOwnProperty(UI_FRAME_SELECT_STYLE)){
		return uiFrame[UI_FRAME_SELECT_STYLE]
	}
	return null
}

// function to check if custom uiFrame has subDocument_styles style defined
export function extractUIFrameSubDocumentTemplate (uiFrame) {
	if(!uiFrame) return null
	if(Object.keys(uiFrame).length===0) return null
	if(uiFrame.hasOwnProperty(UI_FRAME_SUBDOCUMENT_STYLE)){
		return uiFrame[UI_FRAME_SUBDOCUMENT_STYLE]
	}
	return null
}

// function to extract empty frames from choice any of properties already filled with defaults
export function getSetChoiceEmptyFrames (frame, item) {
	let anyOfFrames = frame.properties[item].anyOf, emptyAnyOfFrames=[]
    if(anyOfFrames && Array.isArray(anyOfFrames)) {
        anyOfFrames.map(choice => {
            let choiceStructure = {}
            for(var chItems in choice) {
                if(chItems === "properties") {
                    let propertyStructure={}
                    for(var props in choice["properties"]) {
                        // remove default values
                        propertyStructure[props]={}
                        // do not remove default of info, since required in extract.js
                        if(props === "info") {
                            propertyStructure[props]=choice["properties"][props]
                        }
                        else {
                            for(var pItem in choice["properties"][props]) {
                                if(pItem !== "default") {
                                    propertyStructure[props][pItem] = choice["properties"][props][pItem]
                                }
                            }
                        }

                    }
                    choiceStructure["properties"]=propertyStructure
                }
                else choiceStructure[chItems] = choice[chItems]
            }
            emptyAnyOfFrames.push(choiceStructure)
        })
    }
	return emptyAnyOfFrames
}

/**
 * 
 * @param {*} documentation - documentation object which contains labels and comments
 * @param {*} item - item 
 * @returns - returns label in which item is to be displayed in UI 
 */
export function getLabelFromDocumentation (item, documentation) {
	if(!documentation) return item
	if(documentation.hasOwnProperty("@properties")) {
		for(var props in documentation["@properties"]) { 
			if(props === item) {
				return documentation["@properties"][props]
			}
		}
	}
	return item
}

/**
 * 
 * @param {*} frame - full frame from a data product
 * @param {*} item - item 
 * @returns - returns documentation of item of interest
 */
export function extractDocumentation(frame, item) {
	let documentation={}
	if(frame.hasOwnProperty(item) && frame[item].hasOwnProperty(DOCUMENTATION)) {
		documentation = frame[item][DOCUMENTATION]
	}
	return documentation
}

/**
 * 
 * @param {*} fullFrame - full frame from a data product
 * @param {*} documentClass - choice document classes 
 */
export function extractChoiceDocumentLabels(frame, choice) {
	if(frame.hasOwnProperty(choice) && 
		frame[choice].hasOwnProperty(DOCUMENTATION) && 
		frame[choice][DOCUMENTATION].hasOwnProperty("@comment")) {
			return frame[choice][DOCUMENTATION]["@comment"]
	}
	return choice
}
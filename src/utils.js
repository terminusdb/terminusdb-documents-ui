
import React from "react"
import {Button, Form} from "react-bootstrap"
import {XSD_DATA_TYPE_PREFIX, CREATE, XDD_DATA_TYPE_PREFIX, POINT_TYPE, DIMENSION, ONEOFVALUES, OPTIONAL, SET, ONEOFCLASSES, DOCUMENT, ENUM, VALUE_HASH_KEY, LIST, SYS_UNIT_DATA_TYPE, TDB_SCHEMA, SUBDOCUMENT, ARRAY, COORDINATES} from "./constants"
import {BiKey, BiPlus} from "react-icons/bi"
import {RiDeleteBin5Fill} from "react-icons/ri"
import {FcKey} from "react-icons/fc"
import {BiErrorCircle} from "react-icons/bi"
import {FaArrowDown, FaArrowUp} from "react-icons/fa"
import { getFilledChoiceTypeFrames } from "./FilledChoiceTypeFrames"

//returns extracted prefix
export function getPrefix(frame) {
	if(!frame) return TDB_SCHEMA
	var key = Object.keys(frame)[0]
	var arr = key.split("#")
	return arr[0]+"#"
}

// returns true for properties which are of data types xsd and xdd
export const isDataType = (property) => {
	if(typeof property === "object") return false
	if(property.substring(0, 4) ==  XSD_DATA_TYPE_PREFIX) return true
	if(property.substring(0, 4) ==  XDD_DATA_TYPE_PREFIX) return true
}

// returns true for properties which are subdocuments
export const isSubDocumentType = (property) => {
	if(property.hasOwnProperty(SUBDOCUMENT)) return true
	return false
}

// to identify if choice documenst
export const isChoiceDocumentType = (property) => {
	if(typeof property !== "object") return false
	if(Array.isArray(property)) {
		return true
	}
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

// returns true for List
export const isListType = (property) => {
	if(typeof property !== "object") return false
	if(property["@type"] === LIST) return true
	return false
}

// returns true for properties pointing to other documents or enums
export const isDocumentType = (property, frame, prefix) => {
	if(typeof property === "object") return false
	if(!frame) return false
	let document = `${prefix}${property}`
	if(frame[document]) {
		if(frame[document]["@type"] === DOCUMENT && !frame[document]["@subdocument"]) return true
	}
	return false
}

//returns true if @class is POINT type
export const isPointType = (property, frame, prefix) => {
	if(typeof property !== "object") return false


	if(property.hasOwnProperty("@class")
		&& property["@class"] === POINT_TYPE) {
			let pointProperty=`${prefix}${property["@class"]}`
			if(frame.hasOwnProperty(pointProperty)) {
				return frame[pointProperty]
			}
		return false
	}
	return false
}

// returns true if @subdocuments and type class
export const isSubDocumentAndClassType = (property, frame, prefix) => {
	if(typeof property === "object") return false
	if(!frame) return false
	let document = `${prefix}${property}`
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

// returns true for properties ponting to an enum class
export const isEnumType = (property) => {
	if(typeof property !== "object") return false
	if(property["@type"] === ENUM) return true
}



// field array to display field titles
export function getSubDocumentTitle(item) {
	let title=[]
	title.push(<h6 style={{display: "contents"}}>{item}</h6>)
	//<GoFileSubmodule className="mr-2"/>
	return title
}

export function getSubDocumentDescription(item) {
	let descr=[]
	descr.push(<p className="text-muted fw-bold">{`${item} is a sub document. If you wish to fill a property of ${item} make sure all mandatory fields are entered.`}</p>)
	// /<BiErrorCircle className="mr-2"/>
	return descr
}

export function getTitle(item, uiDisable) {
	if(uiDisable) return <span key={item}  title={`${item} is a key field. Once created, you will not be able to update this field.`}><FcKey className="mr-2"/>{item}</span>
    else return <span key={item} >{item}</span>
}

export function getSetTitle(item) {
	return item
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
	/*var match
	for(var key in formData){
		if(key === item) {
			match=formData[key]
			return match
		}
	}
	return match */
}

// List required min 1 item in it so forthe first subdocument we make all its fields mandatory
export function getRequiredForListSubDocs(properties){
	let required=[]
	for(var key in properties){
		if(key !== "@type") required.push(key)
	}
	return required
}


export function ArrayFieldTemplate(props) {
	//console.log("props", props)
	var variant="dark"
	if(props.schema.info==="SUBDOCUMENT") variant="secondary"

	/*
		{props.TitleField && (props.schema.info==="SUBDOCUMENT") && getTitle(props.schema.title, "SUBDOCUMENT")}
			{props.TitleField && (props.schema.info!=="SUBDOCUMENT") &&  getTitle(props.schema.title)}
			{props.DescriptionField && (props.schema.info==="SUBDOCUMENT") && getDescription(props.schema.title)}
			*/
	return  (
			<div className={props.className}>
				<span>{props.title}</span>
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


function removeEmptyFields(data) {
	for(var key in data){
		//if(checkIfOnlyType(data)) return false // remove only when @type is available
		if(data[key] === undefined) continue
		if(Array.isArray(data[key]) &&
			data.hasOwnProperty("@type") &&
			data["@type"] === POINT_TYPE) continue // coordinates
		if (Object.keys(data[key]).length && typeof data[key] === 'object') {
			var cleaned = removeEmptyFields(data[key])
			if(!cleaned) { // delete this coz no filled value {@type: "sometype"}
				delete data[key]
			}
			if(Object.keys(cleaned).length === 1 && cleaned["@type"]){
				cleaned = {}
			}
			if(Array.isArray(cleaned) && cleaned.length === 0) {
				delete data[key]
			}
			else if(Object.keys(cleaned).length === 0) {
				delete data[key]
			}
			else data[key] = cleaned
		}
		else if (Object.keys(data[key]).length && typeof data[key] === 'string') { // review this check
			if(data[key] === SYS_UNIT_DATA_TYPE) data[key]={}
			else data[key] = data[key]
		}
		else if (typeof data[key] === 'number') {
			data[key] = data[key]
		}
		else {
			delete data[key]
		}

	}
	return data;

}


function modifyCoordinates(data) {
	// convert strings to array - ['[125.6, 15.1]', '[125.6, 10.1]']
	let newArray = []
	data.map(dat => {
		let splits = dat.split(",")
		let lat = Number(splits[0])
		let lng = Number(splits[1])
		newArray.push([lat, lng])
	})
	return newArray
}

function containsGeoTypes(json) { // altering data
	if(json.hasOwnProperty("Point")) return json["Point"]
	if(json.hasOwnProperty("LineString")) return json["LineString"]
	return false
}

function checkIfOnlyType(jsonFrame){
	if(Object.keys(jsonFrame).length === 1 && jsonFrame.hasOwnProperty("@type")) return true
	return false
}




//alter formData of one of data
function modifyOneOfData(mode, schema, data) {
	let modifiedData = {}
	for(var item in data) {
		if(item === ONEOFVALUES) { // dont use "@oneOf"
			//if(data[item] === undefined) return {} // for sys:Unit
			return data[item]
		}
		if(item === "coordinates" && Array.isArray(data[item])) { // coordinates geo
			/*let newArr = modifyCoordinates(data[item])
			console.log("^^^newArr ^^^", newArr)
			modifiedData[item] = newArr*/
			//if(schema.properties.hasOwnProperty(item) && schema.properties[item].hasOwnProperty(DIMENSION)) {
			if(data.hasOwnProperty("@type") && data["@type"] === POINT_TYPE){
				modifiedData[item]=data[item]
			}
			else if (data.hasOwnProperty("@type") && data["@type"] === "LineString") {
				modifiedData[item]=data[item]
			}
		}
		else if(Array.isArray(data[item])){
			let arr =[]
			data[item].map(amd => {
				if(typeof amd === "string") modifiedData[item] =data[item]
				else if (amd.hasOwnProperty(ONEOFVALUES)){
					var thing = modifyOneOfData(mode, schema, amd) //set @oneOfs - example seshat
					//console.log("thng", thing)
					//let choice = getFilledChoiceKey(thing)
					let choice = Object.keys(thing)[0]
					arr.push({
						"@type": amd["@type"],
						[choice]: thing[choice]
					})
				}
				else {
					//modifiedData[item] = [modifyOneOfData(mode, schema, amd)] - review this logic
					var thing = modifyOneOfData(mode, schema, amd) //set subdocuments - example invitation
					arr.push(thing)
				}
			})
			if(arr.length) modifiedData[item]=arr
		}
		else if(typeof data[item] === "object"){
			let modified = modifyOneOfData(mode, schema, data[item])
			if(containsGeoTypes(modified)){
				modifiedData[item] = containsGeoTypes(modified)
			}
			else modifiedData[item] = modified
		}
		else modifiedData[item] = data[item]
	}
	//console.log("****** modifiedData ****", modifiedData)
	return modifiedData
}


//alter formData of choice classes
function modifyChoiceTypeData(mode, schema, data, frame) {
	let modifiedData = data
	for(var item in schema.properties) {
		if(schema.properties[item].hasOwnProperty("info") && schema.properties[item]["info"] === ONEOFCLASSES) {
			if(modifiedData.hasOwnProperty(item) && modifiedData[item]) {
				if(Array.isArray(modifiedData[item])){ //set
					if(mode === CREATE) {
						let newArray = []
						modifiedData[item].map(things => {
							for(var keys in things){
								//if(things[keys].hasOwnProperty("@type")) {
									newArray.push(things[keys])
								//}
							}
						})
						//console.log("newArray///", newArray)
						// for OneOfClasses layout is different from Create
						modifiedData[item] = newArray
					}
				}
				else { //optional or mandatory
					for(var thing in data[item]){
						if(Object.keys(data[item][thing]).length) { // one ofs for document classes
							modifiedData[item] = data[item][thing]
						}
					}
				}
			}
		}
	}
	return modifiedData
}




// removes properties with no filled values on submit form
export function formatData(mode, schema, data, frame, current, type) {
	var extracted={}
	let currentFrame=frame[current]
	//let formData=data
	let modifiedData = modifyChoiceTypeData(mode, schema, data, frame)
	let formData = modifyOneOfData(mode, schema, modifiedData, frame)

	for(var key in formData){
		var newArray=[]
		if(formData[key] === undefined) continue
		if(Array.isArray(formData[key])){ //array
			formData[key].map(arr => {
				if(Object.keys(arr).length === 1 && arr["@type"]){
					//console.log("removing sub docs with only @type defined")
				}
				else {
					if(currentFrame[key]["@type"] === "Set"
						&& Array.isArray(currentFrame[key].hasOwnProperty("@class"))
						&& !currentFrame[key].hasOwnProperty(SUBDOCUMENT)){
							// for choice sets: example - "reactors": {"@class": ["PowerReactor","AtomicReactor"],"@type": "Set"}
							for(var thing in arr){
								newArray.push(arr[thing])
							}
					}
					else newArray.push(arr)
				}
			})
			if(newArray.length !== 0) extracted[key]=newArray
		}
		else if(Object.keys(formData[key]).length !== 1){  //json
			extracted[key]=formData[key]
		}
		else if(Object.keys(formData[key]).length === 1 &&  Object.keys(formData[key])[0] !== "@type"){  //json
			extracted[key]=formData[key]
		}
		else if(formData[key] === "" || formData[key] === undefined){ // string
			extracted[key]=formData[key]
		}
	}
	//console.log("extracted", extracted)
	let extr = removeEmptyFields(extracted)
	if(!extr.hasOwnProperty("@type")) extr["@type"]=type
	return extr
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
export function extractClassName(document, fullFrame, prefix) {
    let str = document
    let splits = str.split('/')
    let documentClass = splits[0]
    if(fullFrame.hasOwnProperty( `${prefix}${documentClass}`)) {
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

// extract prefix from frame
export function extractPrefix (fullFrame) {
	if(!fullFrame) return null
	if(fullFrame.hasOwnProperty("@context") && fullFrame["@context"].hasOwnProperty("@schema"))
		return fullFrame["@context"]["@schema"]
	return TDB_SCHEMA
	//return "http://lib.seshatdatabank.info/schema#"
	//return "iri://CAMS#"
}



// add custom ui layout to existing default ui layout
export function addCustomUI (item, uiFrame, uiLayout) {
	if(!uiFrame) return uiLayout
	if(!Object.keys(uiFrame).length) return uiLayout
	let customUILayout = uiLayout
	if(uiFrame && uiFrame.hasOwnProperty(item)) {
        for (var uiItems in uiFrame[item]) {
            if(customUILayout.hasOwnProperty(uiItems)) {
                let uiDefault = customUILayout[uiItems]
                customUILayout[uiItems] = `${uiDefault} ${uiFrame[item][uiItems]}`
            }
            else customUILayout[uiItems] = customUILayout[uiItems]
        }
    }
	return customUILayout
}


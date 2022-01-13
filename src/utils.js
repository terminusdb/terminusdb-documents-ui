
import React from "react"
import {Button, Form} from "react-bootstrap"
import {XSD_DATA_TYPE_PREFIX, XDD_DATA_TYPE_PREFIX, OPTIONAL, SET, DOCUMENT, ENUM, VALUE_HASH_KEY, LIST, SYS_UNIT_DATA_TYPE, TDB_SCHEMA} from "./constants"
import {BiPlus} from "react-icons/bi"
import {RiDeleteBin5Fill} from "react-icons/ri"
import {FcKey} from "react-icons/fc"
import {BiErrorCircle} from "react-icons/bi"

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
	if(property["@subdocument"]) return true
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

// returns true if @subdocuments and type class
export const isSubDocumentAndClassType = (property, frame, prefix) => {
	if(typeof property === "object") return false
	if(!frame) return false
	let document = `${prefix}${property}`
	if(frame[document]) {
		if(frame[document]["@type"] === DOCUMENT && frame[document]["@subdocument"]) return true
	}
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
	if(uiDisable) return <span title={`${item} is a key field. Once created, you will not be able to update this field.`}><FcKey className="mr-2"/>{item}</span>
    else return <span>{item}</span>
}

export function getSetTitle(item) {
	return item
}


// field array to display key fields
export function getFieldTitle(item, uiDisable) {
	if(uiDisable) return <span title={`${item} is a key field. Once created, you will not be able to update this field.`}>
	<FcKey className="mr-2"/>{item}</span>
}

// get default values to document/ enum types
export function getDefaultValue(item, formData) {
	var match
	for(var key in formData){
			if(key === item) {
				match=formData[key]
			}
	}
	return match
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


// this check is for seshat data with one of property to alter submitted value
function modifyChoiceTypeData(data, frame) {
    for(var key in data){
		if(key === "@oneOf") {

			for(var thing in data[key]) {
				let dataType = data["@type"]
				let extractedPrefix = getPrefix(frame)
    			let type = `${extractedPrefix}${dataType}`
				if(frame[type]["@oneOf"]) {
					// if sys:Unit type
					if(frame[type]["@oneOf"][0][thing] && frame[type]["@oneOf"][0][thing] === SYS_UNIT_DATA_TYPE) {
						delete data[key]
						data[thing] = [] // empty list
					}
					else if(frame[type]["@oneOf"][0][thing]) {
						let inputValue = data[key][thing]
						delete data[key]
						if(inputValue) {
							data[thing]=inputValue
						}
					}
				}
			}
		}
        if (data.hasOwnProperty(key)) {
            if (Object.keys(data[key]).length && typeof data[key] === 'object') {
                data[key] = modifyChoiceTypeData(data[key], frame)
            }
			else if(Object.keys(data[key]).length && key === "@type") { // add type
				data[key] = data[key]
			}
            else {
				//delete data[key]
				data[key] = data[key]
            }
        }
    }
    return data
}

function removeEmptyFields(data) {
	for(var key in data){
		if (data.hasOwnProperty(key)) {
			if (Object.keys(data[key]).length && typeof data[key] === 'object') {
				var cleaned = removeEmptyFields(data[key])
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
			else if (Object.keys(data[key]).length && typeof data[key] === 'string') {
				data[key] = data[key]
			}
			else {
				delete data[key]
			}
		}
	}
	return data;

}


// removes properties with no filled values on submit form
export function formatData(data, frame, current) {
	var extracted={}
	let currentFrame=frame[current]
	//let formData=data
	let formData = modifyChoiceTypeData(data, frame)
	console.log("***formData***",formData)
	for(var key in formData){
		var newArray=[]
		if(Array.isArray(formData[key])){ //array
			formData[key].map(arr => {
				if(Object.keys(arr).length === 1 && arr["@type"]){
					//console.log("removing sub docs with only @type defined")
				}
				else {
					if(currentFrame[key]["@type"] === "Set" && Array.isArray(currentFrame[key]["@class"])){
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
	let extr = removeEmptyFields(extracted)
	return extr
}

// function checks if formData has a filled value for item
export function isFilled (formData, item){
	if(formData[item]) return true
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




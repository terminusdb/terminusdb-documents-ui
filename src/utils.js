
import React from "react"
import {Button, Form} from "react-bootstrap"
import {XSD_DATA_TYPE_PREFIX, XDD_DATA_TYPE_PREFIX, OPTIONAL, SET, DOCUMENT, ENUM, VALUE_HASH_KEY} from "./constants"
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

// returns true for properties pointing to other documents or enums
export const isDocumentType = (property, frame, prefix) => {
		if(typeof property === "object") return false
		if(!frame) return false
		let document = `${prefix}${property}`
		if(frame[document]) {
				if(frame[document]["@type"] === DOCUMENT) return true
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

// removes properties with no filled values on submit form
export function formatData(formData) {
	var extracted={}
	for(var key in formData){
		if(Array.isArray(formData[key])){ //array
			var newArray=[]
			formData[key].map(arr => {
				if(Object.keys(arr).length !== 1) {
					newArray.push(arr)
				}
			})
			if(newArray.length !== 0) extracted[key]=newArray
		}
		else if(Object.keys(formData[key]).length !== 1){  //json
			extracted[key]=formData[key]
		}
		else if(formData[key] === "" || formData[key] === undefined){ // string
			extracted[key]=formData[key]
		}
	}
	return extracted
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
	if(frame["@key"]["@type"] &&
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


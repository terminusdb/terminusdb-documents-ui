import {ONEOFVALUES, CREATE, COORDINATES, ONEOFCLASSES, POINT_TYPE, SYS_UNIT_DATA_TYPE} from "./constants"

// return true if only @type is available
function checkIfNotFilled (json){
    if(Object.keys(json).length === 1 && json.hasOwnProperty("@type")) return true
    return false
}

// return new constructed frame for choices filled by user
function constructNewOneOfFilledFrame (mode, schema, data, frame, current, type) {
    let choice, selectedChoices = transformData(mode, schema, data[ONEOFVALUES], current, type)

    for(var sc in selectedChoices) {
        if(checkIfNotFilled(selectedChoices[sc])){
            // ignore, dont do anything when only type available
        }
        else choice=sc
    }
    if(!choice) return {}
    let newOneOfFrame = {
        "@type": data["@type"],
        [choice]: selectedChoices[choice]
    }
    return newOneOfFrame
}

// return new constructed frame for choice classes
function checkIfChoiceTypeData(mode, schema, data, frame, current, type) {
    //ONEOFCLASSES
    let modifiedData = data
    if(!data) return false
    if(!Object.keys(data).length) return false
    let choiceClassName = Object.keys(data)[0]
    // loop over schema to find the type of choiceClassName
    for(var item in schema.properties) {
		if(schema.properties[item].hasOwnProperty("info") && schema.properties[item]["info"] === ONEOFCLASSES) {
            if(Array.isArray(modifiedData[item])){ //set
                if(mode === CREATE) {
                    let newArray = []
                    modifiedData[item].map(things => {
                        for(var keys in things){
                            newArray.push(things[keys])
                        }
                    })
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
	return modifiedData
}


export const transformData = (mode, schema, data, frame, current, type, itemSchema) => {
	var extracted={}
	//let currentFrame=frame[current]
    let formData = data

    let newFd = checkIfChoiceTypeData(mode, schema, data, frame, current, type)

    for(var key in formData){
        if(formData[key] === undefined) continue //undefined
        else if(formData[key] === SYS_UNIT_DATA_TYPE) return {[key] : []} // sys:Units
        else if(key === ONEOFVALUES) { //@oneOf
            return constructNewOneOfFilledFrame(mode, schema, formData, frame, current, type)
        }
        else if(key === "geometry_location") { // temporary fix => review required
            if(formData.hasOwnProperty(key) && !formData[key].hasOwnProperty(POINT_TYPE)) {
                let defaultValue= {}
                for(var schemaItems in itemSchema.properties[key].default) {
                    if(schemaItems !=="@id")
                        defaultValue[schemaItems] = itemSchema.properties[key].default[schemaItems]
                }
                extracted[key] = defaultValue
            }
            else extracted[key] = formData[key][POINT_TYPE]
            //console.log("formData", formData, schema)
        }
        else if(key === COORDINATES && Array.isArray(formData[key])) {
            // coordinates for geo jsons - we only support POINT TYPE
            if(formData.hasOwnProperty("@type") && formData["@type"] === POINT_TYPE){
				return formData
			}
        }
        else if(Array.isArray(formData[key])) {
            // array
            let transformedArray = [], transformed
            formData[key].map(fd => {
                // loop over each frames in Set/ List
                if(checkIfNotFilled(fd)) {
                    // object with only @type in it , we dont extract this value as it is not filled
                    //return extracted
                    return
                }
                if(typeof fd === "string") { // set of document classes
                    transformed=fd
                }
                else transformed=transformData(mode, schema, fd, frame, current, type)
                if(transformed && Object.keys(transformed).length)
                    transformedArray.push(transformed)
            })
            if(Array.isArray(transformedArray) && transformedArray.length) {
                // populate only if not empty
                extracted[key] = transformedArray
            }
        }
        else if(typeof formData[key] !== "string" && Object.keys(formData[key]).length > 1) {
            // objects
            let transformed=transformData(mode, schema, formData[key], frame, current, type, schema.properties[key])
            if(key === POINT_TYPE) return transformed
            if(transformed) extracted[key]=transformed
        }
        else if(checkIfNotFilled(formData[key])) {
            // object with only @type in it , we dont extract this value as it is not filled
            //return extracted
            continue
        }
        else if(typeof formData[key] === "string" || typeof formData[key] === "number" || typeof formData[key] === "boolean") {
            // data types
            extracted[key] = formData[key]
        }
    }

    if(checkIfNotFilled(extracted)) return null
    return extracted
}

//geometry_location: {@type: "Point", coordinates: [124, 21], type: "Point"}
//console.log("transformed", transformed)


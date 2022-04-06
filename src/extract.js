import {ONEOFVALUES, CREATE, COORDINATES, CHOICECLASSES, POINT_TYPE, SYS_UNIT_DATA_TYPE} from "./constants"

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
    //CHOICECLASSES
    let modifiedData = data
    if(!data) return false
    if(!Object.keys(data).length) return false
    let choiceClassName = Object.keys(data)[0]
    // loop over schema to find the type of choiceClassName
    for(var item in schema.properties) {
		if(schema.properties[item].hasOwnProperty("info") && schema.properties[item]["info"] === CHOICECLASSES) {
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

function modifyChoiceDocuments (mode, schema, data, frame, current, type) {
    let modifiedData = data
    if(!Object.keys(data).length) return false
    for(var item in schema.properties) {
		if(schema.properties[item].items.hasOwnProperty("info") && schema.properties[item].items["info"] === CHOICECLASSES) {
            if(Array.isArray(modifiedData[item])){ //set
                console.log("modifiedData[item]",modifiedData[item])
                if(mode === CREATE) {
                    let newArray = []
                    modifiedData[item].map(choices => {
                        //if()
                        for(var keys in choices){
                            newArray.push(choices[keys])
                        }
                    })
                    modifiedData[item] = newArray
                }
            }
            else {

            }
        }
    }
}


/*
@oneOf:
    {
        @choice: "known",
        @type: "StringValue",
        date_range: {
            @type: "DateRange",
            from: 23,
            to: 3
        }
        value: "hello"
        @type: "AlternativeNames"
    } */



export const transformData = (mode, schema, data, frame, current, type, itemSchema) => {
	var extracted={}
	//let currentFrame=frame[current]
    let formData = data

    for(var key in formData){
        if(formData[key] === undefined) continue //undefined
        else if(formData[key] === SYS_UNIT_DATA_TYPE) return {[key] : []} // sys:Units
        else if(key === ONEOFVALUES) { //@oneOf
            let oneOfData=formData[key]
            let choice = oneOfData["@choice"]
            let choiceData = {}
            for(var cds in oneOfData) {
                if(cds !== "@choice") {
                    choiceData[cds]= oneOfData[cds]
                }
            }
            let newOneOfData = {
                [choice]: choiceData
            }
            //console.log("newOneOfData",newOneOfData)
            return newOneOfData
            //let oneOfData=formData[key]
            //formData[]
            //console.log("IN HERE", formData[key])
            //return constructNewOneOfFilledFrame(mode, schema, formData, frame, current, type)
        }
        /*else if(key === "geometry_location") { // temporary fix => review required
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
        }*/
        /*else if(key === COORDINATES && Array.isArray(formData[key])) {
            // coordinates for geo jsons - we only support POINT TYPE
            if(formData.hasOwnProperty("@type") && formData["@type"] === POINT_TYPE){
				return formData
			}
        }*/
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


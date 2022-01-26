let {RESTAURANT_TYPE, GEOCOORDINATES_TYPE, ADDRESS_TYPE, LONGITUDE, LATITUDE} = require("./constants")


//function to tranform mongo db restraunt sample data to TerminusDB documents
function transform(data) {
    let documents = []
    data.map(jsons => {
        let tJsons = {}
        tJsons["@type"] = RESTAURANT_TYPE

        for(var key in jsons) {

            if(key === "PriceRange") continue
            else if(key === "OutdoorSeating") continue
            else if(key === "HappyHour") continue
            else if(key === "TakeOut") continue
            else if(key === "DogsAllowed") continue
            else if(key === "attributes") continue
            else if(key === "_id") continue
            else if(key === "menu") continue
            else if(key === "address") {
                let addressJson = {}
                addressJson["@type"] = ADDRESS_TYPE
                for(var aKey in jsons[key]){
                    if(aKey === "coord") continue
                    addressJson[aKey] = jsons[key][aKey]
                }
                tJsons[key] = addressJson
                continue
            }
            else if(key === "location") {
                let locationJson = {}
                locationJson["@type"] = GEOCOORDINATES_TYPE
                for(var lKey in jsons[key]){
                    if(lKey === "coordinates") {
                        locationJson[LATITUDE] = jsons[key][lKey][0] // lat
                        locationJson[LONGITUDE] = jsons[key][lKey][1]   // long
                    }
                }
                tJsons[key] = locationJson
                continue
            }
            else tJsons[key] = jsons[key]
        }

        documents.push(tJsons)
    })
    //console.log("transformed", JSON.stringify(documents, null, 2))
    return documents
}

module.exports = {
    transform
}
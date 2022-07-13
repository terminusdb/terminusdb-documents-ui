import {
    XSD_STRING,
    XSD_DECIMAL,
    XSD_DATE_TIME,
    XSD_BOOLEAN,
    XSD_INTEGER,
    STRING_TYPE,
    SYS_JSON_TYPE,
    NUMBER_TYPE,
    BOOLEAN_TYPE, 
    DATE_TYPE,
    DATA_TYPE,
    JSON_TYPE,
    XSD_G_YEAR,
    XSD_DATE
} from "../constants"

// function to provide a ui widget to date
export function getDateUIWidget() {
    let uiLayout = {}
    uiLayout["ui:widget"] = "date",
    uiLayout["ui:options"] = {
        "yearsRange": [
            1980,
            2030
        ]
    }
    uiLayout["classNames"] = "tdb__input mb-3 mt-3 date-list-style"
    return uiLayout
}

// function to provide a ui widget to dateTime
export function getDateTimeUIWidget () {
    let uiLayout = {}
    uiLayout["ui:widget"] = "alt-datetime",
    uiLayout["ui:options"] = {
        "yearsRange": [
            1980,
            2030
        ]
    }
    uiLayout["classNames"] = "tdb__input mb-3 mt-3 date-list-style"
    return uiLayout
}


//get data type xsd: or xdd:
export function getDataType(type) { 
    if(type === XSD_STRING) return STRING_TYPE
    else if(type === SYS_JSON_TYPE) return JSON_TYPE
    else if(type === XSD_DECIMAL) return NUMBER_TYPE
    else if(type === XSD_INTEGER) return NUMBER_TYPE
    else if(type === XSD_BOOLEAN) return BOOLEAN_TYPE
    else if(type === XSD_DATE_TIME) return DATE_TYPE 
    else if(type === XSD_G_YEAR) return DATE_TYPE 
    else if(type === XSD_DATE) return STRING_TYPE
}

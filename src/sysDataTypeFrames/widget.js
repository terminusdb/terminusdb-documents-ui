import React from "react"
import JSONInput from 'react-json-editor-ajrm'
import locale    from 'react-json-editor-ajrm/locale/en'
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
    XSD_DATE,
    JSON_EDITOR_HEIGHT,
    JSON_EDITOR_WIDTH
} from "../constants"

//get data type xsd: or xdd:
export function getDataType(type) { 
    if(type === SYS_JSON_TYPE) return JSON_TYPE
    return XSD_STRING // return basic string
}

/* function to display sys:JSON types in code mirror in create mode*/
export function getCreateJSONWidget(item, label) {
    let uiLayout = {}

    function displayCreateJSONInput(props) {
        
        function handleInput (data) {
            if(data.hasOwnProperty("jsObject") && Object.keys(data.jsObject).length > 0) {
                props.onChange(data.jsObject)
            }
        }

        return <React.Fragment>
            <span>{label}</span>
            <JSONInput
                id          = 'json_type_field'
                locale      = { locale }
                height      ={JSON_EDITOR_HEIGHT}
                width       ={JSON_EDITOR_WIDTH}
                onBlur={handleInput}
            />
        </React.Fragment>
    }
    uiLayout["ui:description"] = "Enter a valid JSON object below"
    uiLayout["ui:field"] = displayCreateJSONInput
    return uiLayout
}

/* function to display sys:JSON types in view mirror */
export function getViewJSONWidget(item, formData, label) {
    let uiLayout = {}

    function displayJSONViewInput(props) { 
        return <React.Fragment>
            <span>{label}</span>
            <JSONInput
                id='json_type_field'
                placeholder={props.formData}
                locale={locale}
                height={JSON_EDITOR_HEIGHT}
                width={JSON_EDITOR_WIDTH}
                viewOnly={true}
            />
        </React.Fragment>
    }

    uiLayout["ui:field"] = displayJSONViewInput
    return uiLayout
}

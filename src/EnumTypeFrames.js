
import React from 'react'
import {getFieldTitle} from "./utils"
import Select from 'react-select'
import {SELECT_STYLES, ENUM} from "./constants"


export function EnumTypeFrames (frame, item, uiFrame, isSet) {
    let properties={}, propertiesUI={}
    var uiDisable=false

    var layout = {
        type: 'string',
        info: ENUM
    }

    //schema
    properties[item] = layout

    const getSelection = (props) => {


        function onChange(e) {
            if(isSet) {
                var val
                e.map(item =>{
                    val+=item.value
                })
                props.onChange(val)
            }
            else props.onChange(e.value)
        }

        let options=[]
        if(frame && frame["@values"]) {
            let enums=frame["@values"]
            enums.map(item => {
                options.push({value: item, label: item})
            })
        }
        return  <Select
            isMulti={isSet}
            classNames="tdb__input"
            styles={SELECT_STYLES}
            placeholder={`Select a ${frame["@id"]} ...`}
            options={options}
            onChange={onChange}
        />
    }


    //default ui:schema
    propertiesUI[item] = {
        "ui:disabled": uiDisable,
        "ui:title": getFieldTitle(item, false),
        "ui:widget": getSelection,
        classNames: "mb-3 mt-3"
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
    }

    return {properties, propertiesUI}
}

// mandatory
export function makeEnumTypeFrames (frame, item, uiFrame, isSet) {
    let madeFrames = EnumTypeFrames (frame, item, uiFrame, isSet)
    let required=item
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI, required}
}

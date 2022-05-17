
import {addCustomUI, isFilled} from "../utils"

// get optional frames
export function makeOptionalTypeFrames (frame, item, uiFrame, mode, formData) {
    // frame will already have extracted frames at this point

    let properties = {}, propertiesUI = {}, layout = {}, uiLayout={}

    // if no filled values
    /*if(!isFilled(formData, item)) {
        propertiesUI[item]={"ui:widget" : 'hidden'}
        properties[item]={}
        return {properties, propertiesUI}
    }*/

    if(frame.hasOwnProperty("properties")) {
        layout=frame.properties[item]
    }

    if(frame.hasOwnProperty("uiSchema")) {
        uiLayout=frame.uiSchema[item]
    }

    // custom ui:schema - add to default ui schema
    let addedCustomUI=addCustomUI(item, uiFrame, uiLayout)

    properties[item] =  layout
    propertiesUI[item] = addedCustomUI

    return {properties, propertiesUI}

}

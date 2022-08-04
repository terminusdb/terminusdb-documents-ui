import {CREATE, VIEW, DIMENSION} from "../constants"
import {
    getPointTypeFilledValues, 
    getPointTypeCreateEditUI,
    getPointTypeViewUI
} from "./pointTypeFrames.utils"
import {getLabelFromDocumentation} from "../utils"

// example [125.6, 10.1]
export function pointType (frame, item, uiFrame, mode, formData, documentation) {

    let properties={}, propertiesUI={}
    let label = getLabelFromDocumentation (item, documentation)
    var  layout= {
        type: "array",
        title: label,
        [DIMENSION]: frame[DIMENSION],
        items: [{type: "number"}, {type: "number"}]
    }

    // populate form data on edit or view mode
    if(mode !== CREATE && formData.hasOwnProperty(item)){
        layout["items"]=getPointTypeFilledValues(formData, item)
    }

    //schema
    properties[item] = layout

    if(mode !== VIEW) { // we do not allow to add extra on view mode
        //ui
        let uiProperties=getPointTypeCreateEditUI(item, documentation)
        propertiesUI[item] = uiProperties[item]
    }
    else { //view
        let uiProperties=getPointTypeViewUI (formData, item, documentation)
        propertiesUI[item] = uiProperties[item]
    }

    //custom ui:schema
    if(uiFrame && uiFrame[item]) {
        propertiesUI[item] = uiFrame[item]
        propertiesUI[item]["ui:title"] = item
    }

    return {properties, propertiesUI}
}

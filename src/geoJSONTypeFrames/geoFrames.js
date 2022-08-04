
import {
    POINT_TYPE_DIMENSION,
    LINE_STRING_TYPE_DIMENSION,
    POLYGON_STRING_TYPE_DIMENSION, 
    DIMENSION,
    MULTIPOLYGON,
    POLYGON
} from "../constants"
import {pointType} from "./pointTypeFrames"
import {lineStringType} from "./lineStringType"
import {multiPolygonType} from "./multiPolygonType"
import {polygonType} from "./polygonType"


function geoTypeFrames (frame, item, uiFrame, mode, formData, documentation) {
    if(frame.hasOwnProperty(DIMENSION) && frame[DIMENSION] === POINT_TYPE_DIMENSION)
        return pointType(frame, item, uiFrame, mode, formData, documentation)
    else if(frame.hasOwnProperty(DIMENSION) && frame[DIMENSION] === LINE_STRING_TYPE_DIMENSION)
        return lineStringType(frame, item, uiFrame, mode, formData)
    else if(frame.hasOwnProperty(DIMENSION) && 
        frame[DIMENSION] === POLYGON_STRING_TYPE_DIMENSION && 
        frame["info"]===MULTIPOLYGON)
            return multiPolygonType(frame, item, uiFrame, mode, formData)
    else if(frame.hasOwnProperty(DIMENSION) && 
        frame[DIMENSION] === POLYGON_STRING_TYPE_DIMENSION && 
        frame["info"]===POLYGON)
            return polygonType(frame, item, uiFrame, mode, formData)
}


export const makeGeoFrames = (frame, item, uiFrame, mode, formData, documentation) => {
    let madeFrames = geoTypeFrames(frame, item, uiFrame, mode, formData, documentation)
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}
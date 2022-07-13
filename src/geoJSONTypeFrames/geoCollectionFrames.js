
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
import {featureCollectionType} from "./featureCollectionTypeFrames"

function geoCollectionTypeFrames (frame, item, uiFrame, mode, formData) {
    return featureCollectionType(frame[item], item, uiFrame, mode, formData)
}


export const makeGeoCollectionFrames = (frame, item, uiFrame, mode, formData) => {
    let madeFrames = geoCollectionTypeFrames(frame, item, uiFrame, mode, formData)
    let properties = madeFrames.properties
    let propertiesUI = madeFrames.propertiesUI
    return {properties, propertiesUI}
}
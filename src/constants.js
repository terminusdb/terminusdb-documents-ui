// DATA PROPERTY TYPE
export const XSD_DATA_TYPE_PREFIX = "xsd:"
export const XDD_DATA_TYPE_PREFIX = "xdd:"
export const SUBDOCUMENT="@subdocument"
export const ONEOFSUBDOCUMENTS="OneOfSubDocuments"
export const OPTIONAL="Optional"
export const SET="Set"
export const LIST="List"
export const DOCUMENT="Class"
export const ENUM="Enum"
export const DATA="DATA"
export const LATITUDE="Latitude"
export const LONGITUDE="Longitude"
export const GEO_CORDINATES="GeoCoordinates"
export const ONEOFCLASSES="OneOfClasses"
export const ONEOFVALUES="@oneOf"
export const COORDINATES="coordinates"
export const ARRAY="Array"
export const DIMENSION= "@dimensions"
export const POINT_TYPE="Point"

// react leaflet constants
export const LNG="lng"
export const LAT="lat"
export const REFRESH="refresh"

export const POINTS="Points"
export const POLYGON="Polygon"
export const POLYLINE="Polyline"

export const SYS_UNIT_DATA_TYPE="sys:Unit"


export const CREATE="Create"
export const EDIT="Edit"
export const VIEW="View"

export const VALUE_HASH_KEY="ValueHash"

export const TDB_SCHEMA= "terminusdb:///schema#"

// default select styles
export const SELECT_STYLES = {
  control: (styles) => ({ ...styles, backgroundColor: 'dark', borderColor: "rgb(102, 102, 102) !important", width: "100%" }),
  menu: (styles) => ({ ...styles, backgroundColor: '#444', width: "100%" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? "black"
        : isFocused
        ? "black"
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? "black"
            : "black"
          : undefined,
      },
    }
  }
}
export const SELECT_STYLE_KEY="select_styles"

//default subdocument background
export const SUBDOCUMENT_BACKGROUND="bg-secondary"
export const SUBDOCUMENT_STYLE_KEY= "subDocument_styles"


// map icon component
import L from "leaflet";

export default L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});
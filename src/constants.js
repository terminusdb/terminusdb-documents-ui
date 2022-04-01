// DATA PROPERTY TYPE
export const STRING_TYPE="string"
export const NUMBER_TYPE="number"
export const BOOLEAN_TYPE="boolean"
export const DATE_TYPE="string"
export const XSD_DATA_TYPE_PREFIX = "xsd:"
export const XDD_DATA_TYPE_PREFIX = "xdd:"
export const XSD_STRING="xsd:string"
export const XSD_DECIMAL="xsd:decimal"
export const XSD_DATE_TIME="xsd:dateTime"
export const XSD_BOOLEAN="xsd:boolean"

export const SUBDOCUMENT="@subdocument"
export const ONEOFSUBDOCUMENTS="OneOfSubDocuments"
export const OPTIONAL="Optional"
export const SET="Set"
export const LIST="List"
export const DOCUMENT="Class"
export const ENUM="Enum"
export const DATA="DATA"
export const DATA_TYPE="DATA_TYPE"
export const SUBDOCUMENT_TYPE="SUBDOCUMENT_TYPE"
export const LATITUDE="Latitude"
export const LONGITUDE="Longitude"
export const GEO_CORDINATES="GeoCoordinates"
export const ONEOFCLASSES="OneOfClasses"
export const CHOICECLASSES="ChoiceClasses"
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


export const SELECT_STYLES = {
    control: (styles) => ({ ...styles, backgroundColor: 'dark', borderColor: "rgb(102, 102, 102) !important" }),
    menu: (styles) => ({ ...styles, backgroundColor: '#444'}),
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



// map icon component
import L from "leaflet";

export default L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});
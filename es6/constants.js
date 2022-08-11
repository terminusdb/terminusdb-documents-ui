"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.XSD_STRING = exports.XSD_INTEGER = exports.XSD_G_YEAR = exports.XSD_DECIMAL = exports.XSD_DATE_TIME = exports.XSD_DATE = exports.XSD_DATA_TYPE_PREFIX = exports.XSD_BOOLEAN = exports.XDD_DATA_TYPE_PREFIX = exports.VIEW = exports.VALUE_HASH_KEY = exports.UI_FRAME_SUBDOCUMENT_STYLE = exports.UI_FRAME_SELECT_STYLE = exports.TDB_SCHEMA = exports.SYS_UNIT_TYPE_PREFIX = exports.SYS_UNIT_DATA_TYPE = exports.SYS_JSON_TYPE = exports.SUBMIT_BUTTON_STYLE_KEY = exports.SUBDOCUMENT_TYPE = exports.SUBDOCUMENT_STYLE_KEY = exports.SUBDOCUMENT_CONSTRUCTED_FRAME = exports.SUBDOCUMENT_BACKGROUND = exports.SUBDOCUMENT = exports.STRING_TYPE = exports.SET = exports.SELECT_STYLE_KEY = exports.SELECT_STYLES = exports.REFRESH = exports.POLYLINE = exports.POLYGON_STRING_TYPE_DIMENSION = exports.POLYGON = exports.POINT_TYPE_DIMENSION = exports.POINT_TYPE = exports.POINTS = exports.OPTIONAL = exports.ONEOFVALUES = exports.ONEOFSUBDOCUMENTS = exports.ONEOFCLASSES = exports.NUMBER_TYPE = exports.MULTIPOLYGON = exports.LONGITUDE = exports.LNG = exports.LIST = exports.LINE_STRING_TYPE_DIMENSION = exports.LATITUDE = exports.LAT = exports.JSON_TYPE = exports.JSON_EDITOR_WIDTH = exports.JSON_EDITOR_HEIGHT = exports.GEO_CORDINATES = exports.GEOMETRY_COLLECTION = exports.FEATURE_COLLECTION = exports.ENUM = exports.EDIT = exports.DOCUMENTATION = exports.DOCUMENT = exports.DIMENSION = exports.DATE_TYPE = exports.DATA_TYPE = exports.DATA = exports.CREATE = exports.COORDINATES = exports.CHOICESUBCLASSES = exports.CHOICECLASSES = exports.BOOLEAN_TYPE = exports.ARRAY = void 0;

var _leaflet = _interopRequireDefault(require("leaflet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// DATA PROPERTY TYPE
var STRING_TYPE = "string";
exports.STRING_TYPE = STRING_TYPE;
var JSON_TYPE = "object";
exports.JSON_TYPE = JSON_TYPE;
var NUMBER_TYPE = "number";
exports.NUMBER_TYPE = NUMBER_TYPE;
var BOOLEAN_TYPE = "boolean";
exports.BOOLEAN_TYPE = BOOLEAN_TYPE;
var DATE_TYPE = "string";
exports.DATE_TYPE = DATE_TYPE;
var XSD_DATA_TYPE_PREFIX = "xsd:";
exports.XSD_DATA_TYPE_PREFIX = XSD_DATA_TYPE_PREFIX;
var XDD_DATA_TYPE_PREFIX = "xdd:";
exports.XDD_DATA_TYPE_PREFIX = XDD_DATA_TYPE_PREFIX;
var SYS_UNIT_TYPE_PREFIX = "sys:";
exports.SYS_UNIT_TYPE_PREFIX = SYS_UNIT_TYPE_PREFIX;
var XSD_STRING = "xsd:string";
exports.XSD_STRING = XSD_STRING;
var XSD_DECIMAL = "xsd:decimal";
exports.XSD_DECIMAL = XSD_DECIMAL;
var XSD_INTEGER = "xsd:integer";
exports.XSD_INTEGER = XSD_INTEGER;
var XSD_DATE_TIME = "xsd:dateTime";
exports.XSD_DATE_TIME = XSD_DATE_TIME;
var XSD_G_YEAR = "xsd:gYear";
exports.XSD_G_YEAR = XSD_G_YEAR;
var XSD_DATE = "xsd:date";
exports.XSD_DATE = XSD_DATE;
var XSD_BOOLEAN = "xsd:boolean";
exports.XSD_BOOLEAN = XSD_BOOLEAN;
var SYS_JSON_TYPE = "sys:JSON";
exports.SYS_JSON_TYPE = SYS_JSON_TYPE;
var SUBDOCUMENT = "@subdocument";
exports.SUBDOCUMENT = SUBDOCUMENT;
var DOCUMENTATION = "@documentation";
exports.DOCUMENTATION = DOCUMENTATION;
var ONEOFSUBDOCUMENTS = "OneOfSubDocuments";
exports.ONEOFSUBDOCUMENTS = ONEOFSUBDOCUMENTS;
var OPTIONAL = "Optional";
exports.OPTIONAL = OPTIONAL;
var SET = "Set";
exports.SET = SET;
var LIST = "List";
exports.LIST = LIST;
var DOCUMENT = "Class";
exports.DOCUMENT = DOCUMENT;
var ENUM = "Enum";
exports.ENUM = ENUM;
var DATA = "DATA";
exports.DATA = DATA;
var DATA_TYPE = "DATA_TYPE";
exports.DATA_TYPE = DATA_TYPE;
var SUBDOCUMENT_TYPE = "SUBDOCUMENT_TYPE";
exports.SUBDOCUMENT_TYPE = SUBDOCUMENT_TYPE;
var SUBDOCUMENT_CONSTRUCTED_FRAME = "CONSTRUCTED_SUBDOCUMENT";
exports.SUBDOCUMENT_CONSTRUCTED_FRAME = SUBDOCUMENT_CONSTRUCTED_FRAME;
var LATITUDE = "Latitude";
exports.LATITUDE = LATITUDE;
var LONGITUDE = "Longitude";
exports.LONGITUDE = LONGITUDE;
var GEO_CORDINATES = "GeoCoordinates";
exports.GEO_CORDINATES = GEO_CORDINATES;
var ONEOFCLASSES = "OneOfClasses";
exports.ONEOFCLASSES = ONEOFCLASSES;
var CHOICESUBCLASSES = "ChoiceSubClasses";
exports.CHOICESUBCLASSES = CHOICESUBCLASSES;
var CHOICECLASSES = "ChoiceClasses";
exports.CHOICECLASSES = CHOICECLASSES;
var ONEOFVALUES = "@oneOf";
exports.ONEOFVALUES = ONEOFVALUES;
var COORDINATES = "coordinates"; // geo frame constants

exports.COORDINATES = COORDINATES;
var ARRAY = "Array";
exports.ARRAY = ARRAY;
var DIMENSION = "@dimensions";
exports.DIMENSION = DIMENSION;
var POINT_TYPE = "Point";
exports.POINT_TYPE = POINT_TYPE;
var POINT_TYPE_DIMENSION = 1;
exports.POINT_TYPE_DIMENSION = POINT_TYPE_DIMENSION;
var LINE_STRING_TYPE_DIMENSION = 2;
exports.LINE_STRING_TYPE_DIMENSION = LINE_STRING_TYPE_DIMENSION;
var POLYGON_STRING_TYPE_DIMENSION = 3; // react leaflet constants

exports.POLYGON_STRING_TYPE_DIMENSION = POLYGON_STRING_TYPE_DIMENSION;
var LNG = "lng";
exports.LNG = LNG;
var LAT = "lat";
exports.LAT = LAT;
var REFRESH = "refresh"; // geo JSON constants 

exports.REFRESH = REFRESH;
var POINTS = "Points";
exports.POINTS = POINTS;
var POLYGON = "Polygon";
exports.POLYGON = POLYGON;
var MULTIPOLYGON = "MultiPolygon";
exports.MULTIPOLYGON = MULTIPOLYGON;
var POLYLINE = "Polyline";
exports.POLYLINE = POLYLINE;
var GEOMETRY_COLLECTION = "GeometryCollection";
exports.GEOMETRY_COLLECTION = GEOMETRY_COLLECTION;
var FEATURE_COLLECTION = "FeatureCollection";
exports.FEATURE_COLLECTION = FEATURE_COLLECTION;
var SYS_UNIT_DATA_TYPE = "sys:Unit";
exports.SYS_UNIT_DATA_TYPE = SYS_UNIT_DATA_TYPE;
var CREATE = "Create";
exports.CREATE = CREATE;
var EDIT = "Edit";
exports.EDIT = EDIT;
var VIEW = "View";
exports.VIEW = VIEW;
var VALUE_HASH_KEY = "ValueHash";
exports.VALUE_HASH_KEY = VALUE_HASH_KEY;
var TDB_SCHEMA = "terminusdb:///schema#"; // default select styles

exports.TDB_SCHEMA = TDB_SCHEMA;
var SELECT_STYLES = {
  control: function control(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      backgroundColor: 'dark',
      borderColor: "rgb(102, 102, 102) !important",
      width: "100%"
    });
  },
  menu: function menu(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      backgroundColor: '#444',
      width: "100%"
    });
  },
  option: function option(styles, _ref) {
    var data = _ref.data,
        isDisabled = _ref.isDisabled,
        isFocused = _ref.isFocused,
        isSelected = _ref.isSelected;
    return _objectSpread(_objectSpread({}, styles), {}, {
      backgroundColor: isDisabled ? undefined : isSelected ? "black" : isFocused ? "black" : undefined,
      color: isDisabled ? '#ccc' : isSelected,
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': _objectSpread(_objectSpread({}, styles[':active']), {}, {
        backgroundColor: !isDisabled ? isSelected ? "black" : "black" : undefined
      })
    });
  },
  input: function input(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      color: '#fff'
    });
  },
  singleValue: function singleValue(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      color: '#fff'
    });
  }
};
/*export const SELECT_STYLES = {
  control: (styles) => ({ ...styles, backgroundColor: '#fff', borderColor: "#ccc", width: "100%" }),
  menu: (styles) => ({ ...styles, backgroundColor: '#fff', width: "100%" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? "#fff"
        : isFocused
        ? "#fff"
        : undefined,
      color: isDisabled
        ? '#000'
        : isSelected,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? "#f8f8f8"
            : "#f8f8f8"
          : undefined,
      },
    }
  },
  input: (styles) => {
    return {
        ...styles,
        color: '#000'
    }
},
singleValue:(styles) => {
    return {
        ...styles,
        color: '#000'
    }
}
}*/

exports.SELECT_STYLES = SELECT_STYLES;
var SELECT_STYLE_KEY = "select_styles"; //default subdocument background

exports.SELECT_STYLE_KEY = SELECT_STYLE_KEY;
var SUBDOCUMENT_BACKGROUND = "bg-secondary";
exports.SUBDOCUMENT_BACKGROUND = SUBDOCUMENT_BACKGROUND;
var SUBDOCUMENT_STYLE_KEY = "subDocument_styles";
exports.SUBDOCUMENT_STYLE_KEY = SUBDOCUMENT_STYLE_KEY;
var UI_FRAME_SELECT_STYLE = "select_styles";
exports.UI_FRAME_SELECT_STYLE = UI_FRAME_SELECT_STYLE;
var UI_FRAME_SUBDOCUMENT_STYLE = "subDocument_styles";
exports.UI_FRAME_SUBDOCUMENT_STYLE = UI_FRAME_SUBDOCUMENT_STYLE;
var SUBMIT_BUTTON_STYLE_KEY = "submitButton_styles"; // map icon component

exports.SUBMIT_BUTTON_STYLE_KEY = SUBMIT_BUTTON_STYLE_KEY;

var _default = _leaflet["default"].icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

exports["default"] = _default;
var JSON_EDITOR_HEIGHT = "200px";
exports.JSON_EDITOR_HEIGHT = JSON_EDITOR_HEIGHT;
var JSON_EDITOR_WIDTH = "100%";
exports.JSON_EDITOR_WIDTH = JSON_EDITOR_WIDTH;
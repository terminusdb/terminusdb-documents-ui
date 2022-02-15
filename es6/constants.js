"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.XSD_DATA_TYPE_PREFIX = exports.XDD_DATA_TYPE_PREFIX = exports.VIEW = exports.VALUE_HASH_KEY = exports.TDB_SCHEMA = exports.SYS_UNIT_DATA_TYPE = exports.SUBDOCUMENT = exports.SET = exports.SELECT_STYLES = exports.REFRESH = exports.POLYLINE = exports.POLYGON = exports.POINTS = exports.OPTIONAL = exports.ONEOFVALUES = exports.ONEOFSUBDOCUMENTS = exports.ONEOFCLASSES = exports.LONGITUDE = exports.LNG = exports.LIST = exports.LATITUDE = exports.LAT = exports.GEO_CORDINATES = exports.ENUM = exports.EDIT = exports.DOCUMENT = exports.DIMENSION = exports.DATA = exports.CREATE = exports.COORDINATES = exports.ARRAY = void 0;

var _leaflet = _interopRequireDefault(require("leaflet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// DATA PROPERTY TYPE
var XSD_DATA_TYPE_PREFIX = "xsd:";
exports.XSD_DATA_TYPE_PREFIX = XSD_DATA_TYPE_PREFIX;
var XDD_DATA_TYPE_PREFIX = "xdd:";
exports.XDD_DATA_TYPE_PREFIX = XDD_DATA_TYPE_PREFIX;
var SUBDOCUMENT = "@subdocument";
exports.SUBDOCUMENT = SUBDOCUMENT;
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
var LATITUDE = "Latitude";
exports.LATITUDE = LATITUDE;
var LONGITUDE = "Longitude";
exports.LONGITUDE = LONGITUDE;
var GEO_CORDINATES = "GeoCoordinates";
exports.GEO_CORDINATES = GEO_CORDINATES;
var ONEOFCLASSES = "OneOfClasses";
exports.ONEOFCLASSES = ONEOFCLASSES;
var ONEOFVALUES = "@oneOf";
exports.ONEOFVALUES = ONEOFVALUES;
var COORDINATES = "coordinates";
exports.COORDINATES = COORDINATES;
var ARRAY = "Array";
exports.ARRAY = ARRAY;
var DIMENSION = "@dimensions"; // react leaflet constants

exports.DIMENSION = DIMENSION;
var LNG = "lng";
exports.LNG = LNG;
var LAT = "lat";
exports.LAT = LAT;
var REFRESH = "refresh";
exports.REFRESH = REFRESH;
var POINTS = "Points";
exports.POINTS = POINTS;
var POLYGON = "Polygon";
exports.POLYGON = POLYGON;
var POLYLINE = "Polyline";
exports.POLYLINE = POLYLINE;
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
var TDB_SCHEMA = "terminusdb:///schema#";
exports.TDB_SCHEMA = TDB_SCHEMA;
var SELECT_STYLES = {
  control: function control(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      backgroundColor: 'dark',
      borderColor: "rgb(102, 102, 102) !important"
    });
  },
  menu: function menu(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      backgroundColor: '#444'
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
  }
}; // map icon component

exports.SELECT_STYLES = SELECT_STYLES;

var _default = _leaflet["default"].icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

exports["default"] = _default;
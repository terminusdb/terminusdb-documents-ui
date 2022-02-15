"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGeoCordinateFrames = makeGeoCordinateFrames;
exports.makeMultipleGeoCordinateFrames = makeMultipleGeoCordinateFrames;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _constants = _interopRequireWildcard(require("./constants"));

var _reactLeaflet = require("react-leaflet");

var _MapMarkers = require("./MapMarkers");

var _Map = require("./Map");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function MultipleGeoCordinateFrames(frame, item, uiFrame, mode, formData, isSet) {
  var properties = {},
      propertiesUI = {};
  /*if(!frame.hasOwnProperty(LATITUDE) && !frame.hasOwnProperty(LONGITUDE)) {
      console.log("ERROR, schema requires both Latitude and Longitude to be defined in frames")
  }
  if(!formData.hasOwnProperty(LATITUDE) && !formData.hasOwnProperty(LONGITUDE)) {
      console.log("ERROR, schema requires both Latitude and Longitude value to be filled")
  }*/

  if (mode !== _constants.VIEW) {
    console.log("ERROR, Map component must be called only during VIEW mode");
  }

  var layout = {
    type: 'string',
    info: "DATA",
    title: item
  };

  if (formData.hasOwnProperty(item)) {
    layout["default"] = (0, _utils.getDefaultValue)(item, formData);
  } // schema


  properties[item] = layout; //default ui:schema

  propertiesUI[item] = {
    "ui:placeholder": frame[item],
    "ui:disabled": mode === _constants.EDIT && (0, _utils.checkIfKey)(item, frame["@key"]) && (0, _utils.isFilled)(formData, item) ? true : false,
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"])),
    classNames: mode === _constants.VIEW ? "tdb__input mb-3 mt-3 form-label tdb__view__input" : "tdb__input mb-3 mt-3",
    "ui:field": _Map.GetMultiplePointMap
  };

  if (mode === _constants.VIEW && !Array.isArray(formData) && !layout.hasOwnProperty("default")) {
    // set of subdocuments
    propertiesUI[item]["ui:widget"] = "hidden";
  } //custom ui:schema


  if (uiFrame && uiFrame[item]) {
    propertiesUI[item] = uiFrame[item];
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}

function makeMultipleGeoCordinateFrames(frame, item, uiFrame, mode, formData, isSet) {
  var madeFrames = MultipleGeoCordinateFrames(frame, item, uiFrame, mode, formData, isSet);
  var required = item;
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI,
    required: required
  };
}

function GeoCordinateFrames(frame, item, uiFrame, mode, formData, isSet) {
  var properties = {},
      propertiesUI = {};

  if (!frame.hasOwnProperty(_constants.LATITUDE) && !frame.hasOwnProperty(_constants.LONGITUDE)) {
    console.log("ERROR, schema requires both Latitude and Longitude to be defined in frames");
  }

  if (!formData.hasOwnProperty(_constants.LATITUDE) && !formData.hasOwnProperty(_constants.LONGITUDE)) {
    console.log("ERROR, schema requires both Latitude and Longitude value to be filled");
  }

  if (mode !== _constants.VIEW) {
    console.log("ERROR, Map component must be called only during VIEW mode");
  }

  var layout = {
    type: 'string',
    info: "DATA",
    title: item
  };

  if (formData.hasOwnProperty(item)) {
    layout["default"] = (0, _utils.getDefaultValue)(item, formData);
  }

  function getMapComponent(props) {
    var data = {};

    for (var key in formData) {
      if (key.toUpperCase() === _constants.LATITUDE.toUpperCase()) {
        data[_constants.LAT] = formData[key];
      } else if (key.toUpperCase() === _constants.LONGITUDE.toUpperCase()) {
        data[_constants.LNG] = formData[key];
      } else data[key] = formData[key];
    }

    var lat = data[_constants.LAT],
        _long = data[_constants.LNG];
    var center = [lat, _long];
    return /*#__PURE__*/_react["default"].createElement(_reactLeaflet.MapContainer, {
      center: center,
      zoom: 13,
      scrollWheelZoom: true
    }, /*#__PURE__*/_react["default"].createElement(_reactLeaflet.TileLayer, {
      attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    }), /*#__PURE__*/_react["default"].createElement(_MapMarkers.MapMarkers, {
      data: data
    }));
  } // schema


  properties[item] = layout; //default ui:schema

  propertiesUI[item] = {
    "ui:placeholder": frame[item],
    "ui:disabled": mode === _constants.EDIT && (0, _utils.checkIfKey)(item, frame["@key"]) && (0, _utils.isFilled)(formData, item) ? true : false,
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"])),
    classNames: mode === _constants.VIEW ? "tdb__input mb-3 mt-3 form-label tdb__view__input" : "tdb__input mb-3 mt-3",
    "ui:field": getMapComponent
  };
  /*if(mode === VIEW && !Array.isArray(formData) && !layout.hasOwnProperty("default")){ // set of subdocuments
      propertiesUI[item]["ui:widget"]= "hidden"
  } // commenting this as formData.length = 0 is ignored here*/

  /*if(mode === VIEW && formData.length === 0 && !layout.hasOwnProperty("default")){ // set of subdocuments
      propertiesUI[item]["ui:widget"]= "hidden"
  }*/

  if (mode === _constants.VIEW && !Array.isArray(formData) && !layout.hasOwnProperty("default")) {
    // set of subdocuments
    propertiesUI[item]["ui:widget"] = "hidden";
  } //custom ui:schema


  if (uiFrame && uiFrame[item]) {
    propertiesUI[item] = uiFrame[item];
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}

function makeGeoCordinateFrames(frame, item, uiFrame, mode, formData, isSet) {
  var madeFrames = GeoCordinateFrames(frame, item, uiFrame, mode, formData, isSet);
  var required = item;
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI,
    required: required
  };
}
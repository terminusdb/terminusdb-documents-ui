"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.featureCollectionType = featureCollectionType;

var _react = _interopRequireDefault(require("react"));

var _mapViewer = require("../maps/mapViewer");

var _geo_schema = require("../../geoJSON/src/geo_schema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getFeatureCollectionTypeViewUI(formData, item) {
  var ui = {};
  /** fake data for now */
  //let tempFormData = GEO_JSON_FORM_DATA

  var tempFormData = formData;

  function getFeatureCollectionMapComponent(props) {
    if (!tempFormData.hasOwnProperty(item)) return /*#__PURE__*/_react["default"].createElement("div", null);
    var docs = [];
    return /*#__PURE__*/_react["default"].createElement(_mapViewer.MapViewer, {
      geojsonFeature: tempFormData,
      icon: "<div style='background-color:#c30b82;' class='marker-pin'></div><i class='material-icons'>weekend</i>",
      zoom: 4
    });
  }

  ui[item] = {
    "ui:field": getFeatureCollectionMapComponent
  };
  return ui;
}

function featureCollectionType(frame, item, uiFrame, mode, formData) {
  var properties = {},
      propertiesUI = {};
  var layout = {
    type: "object",
    title: item
  };
  properties[item] = layout;
  var ui = getFeatureCollectionTypeViewUI(formData, item);
  propertiesUI[item] = ui[item];
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}
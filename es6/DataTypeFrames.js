"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDataTypeFrames = makeDataTypeFrames;

var _utils = require("./utils");

var _constants = require("./constants");

function DataTypeFrames(frame, item, uiFrame, mode, formData) {
  var properties = {},
      propertiesUI = {};
  var layout = {
    type: 'string',
    info: "DATA",
    title: item
  };

  if (mode !== _constants.CREATE && formData.hasOwnProperty(item)) {
    var value = (0, _utils.getDefaultValue)(item, formData);
    layout["default"] = value.toString();
  } // schema


  properties[item] = layout; //default ui:schema

  propertiesUI[item] = {
    "ui:placeholder": frame[item],
    "ui:disabled": mode === _constants.EDIT && (0, _utils.checkIfKey)(item, frame["@key"]) && (0, _utils.isFilled)(formData, item) ? true : false,
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"])),
    classNames: mode === _constants.VIEW ? "tdb__input mb-3 mt-3 form-label tdb__view__input" : "tdb__input mb-3 mt-3"
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
} // mandatory


function makeDataTypeFrames(frame, item, uiFrame, mode, formData) {
  var madeFrames = DataTypeFrames(frame, item, uiFrame, mode, formData);
  var required = item;
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI,
    required: required
  };
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDataTypeFrames = makeDataTypeFrames;

var _constants = require("../constants");

var _dataType = require("./dataType.utils");

var _utils = require("../utils");

// get data type frames
function dataTypeFrames(frame, item, uiFrame, mode, formData, documentation) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _dataType.getCreateLayout)(frame, item, documentation);
    uiLayout = (0, _dataType.getCreateUILayout)(frame, item, uiFrame, documentation);
  } else if (mode === _constants.EDIT) {
    layout = (0, _dataType.getEditLayout)(frame, item, formData, documentation);
    uiLayout = (0, _dataType.getEditUILayout)(frame, item, formData, uiFrame, documentation);
  } else if (mode === _constants.VIEW) {
    layout = (0, _dataType.getViewLayout)(frame, item, formData, documentation);
    uiLayout = (0, _dataType.getViewUILayout)(frame, item, formData, uiFrame, documentation);
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout); // schema

  properties[item] = layout; // ui schema

  propertiesUI[item] = addedCustomUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // mandatory


function makeDataTypeFrames(frame, item, uiFrame, mode, formData, documentation) {
  var madeFrames = dataTypeFrames(frame, item, uiFrame, mode, formData, documentation);
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}
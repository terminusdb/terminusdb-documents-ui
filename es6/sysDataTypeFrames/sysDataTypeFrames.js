"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSysDataTypeFrames = makeSysDataTypeFrames;

var _constants = require("../constants");

var _sysDataType = require("./sysDataType.utils");

var _utils = require("../utils");

// get data type frames
function sysDataTypeFrames(frame, item, uiFrame, mode, formData, documentation) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _sysDataType.getCreateLayout)(frame, item);
    uiLayout = (0, _sysDataType.getCreateUILayout)(frame, item, uiFrame, documentation);
  } else if (mode === _constants.EDIT) {
    layout = (0, _sysDataType.getEditLayout)(frame, item, formData);
    var defaultValue = false;
    if (layout.hasOwnProperty("default")) defaultValue = layout["default"];
    uiLayout = (0, _sysDataType.getEditUILayout)(frame, item, defaultValue, uiFrame, documentation); //uiLayout=getEditUILayout(frame, item, formData, uiFrame)
  } else if (mode === _constants.VIEW) {
    layout = (0, _sysDataType.getViewLayout)(frame, item, formData);
    uiLayout = (0, _sysDataType.getViewUILayout)(frame, item, formData, uiFrame, documentation);
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout); // schema

  properties[item] = layout; // ui schema

  propertiesUI[item] = addedCustomUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // mandatory


function makeSysDataTypeFrames(frame, item, uiFrame, mode, formData, documentation) {
  var madeFrames = sysDataTypeFrames(frame, item, uiFrame, mode, formData, documentation);
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}
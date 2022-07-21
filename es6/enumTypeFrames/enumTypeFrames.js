"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeEnumTypeFrames = makeEnumTypeFrames;

var _constants = require("../constants");

var _enumTypeFrames = require("./enumTypeFrames.utils");

var _utils = require("../utils");

// get enum type frames
function enumTypeFrames(frame, item, uiFrame, mode, formData, documentation) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _enumTypeFrames.getCreateLayout)(frame, item);
    uiLayout = (0, _enumTypeFrames.getCreateUILayout)(frame, item, uiFrame, documentation);
  } else if (mode === _constants.EDIT) {
    layout = (0, _enumTypeFrames.getEditLayout)(frame, item, formData);
    uiLayout = (0, _enumTypeFrames.getEditUILayout)(frame, item, formData, uiFrame, documentation);
  } else if (mode === _constants.VIEW) {
    layout = (0, _enumTypeFrames.getViewLayout)(frame, item, formData);
    uiLayout = (0, _enumTypeFrames.getViewUILayout)(frame, item, formData, uiFrame, documentation);
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout); // schema

  properties[item] = layout; // ui schema

  propertiesUI[item] = addedCustomUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // mandatory


function makeEnumTypeFrames(frame, item, uiFrame, mode, formData, documentation) {
  var madeFrames = enumTypeFrames(frame, item, uiFrame, mode, formData, documentation);
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}
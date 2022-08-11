"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeOptionalTypeFrames = makeOptionalTypeFrames;

var _utils = require("../utils");

// get optional frames
function makeOptionalTypeFrames(frame, item, uiFrame, mode, formData) {
  // frame will already have extracted frames at this point
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (frame.hasOwnProperty("properties")) {
    layout = frame.properties[item];
  }

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = frame.uiSchema[item];
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  properties[item] = layout;
  propertiesUI[item] = addedCustomUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}
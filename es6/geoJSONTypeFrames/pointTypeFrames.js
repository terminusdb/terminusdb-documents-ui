"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pointType = pointType;

var _constants = require("../constants");

var _pointTypeFrames = require("./pointTypeFrames.utils");

var _utils = require("../utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// example [125.6, 10.1]
function pointType(frame, item, uiFrame, mode, formData, documentation) {
  var _layout;

  var properties = {},
      propertiesUI = {};
  var label = (0, _utils.getLabelFromDocumentation)(item, documentation);
  var layout = (_layout = {
    type: "array",
    title: label
  }, _defineProperty(_layout, _constants.DIMENSION, frame[_constants.DIMENSION]), _defineProperty(_layout, "items", [{
    type: "number"
  }, {
    type: "number"
  }]), _layout); // populate form data on edit or view mode

  if (mode !== _constants.CREATE && formData.hasOwnProperty(item)) {
    layout["items"] = (0, _pointTypeFrames.getPointTypeFilledValues)(formData, item);
  } //schema


  properties[item] = layout;

  if (mode !== _constants.VIEW) {
    // we do not allow to add extra on view mode
    //ui
    var uiProperties = (0, _pointTypeFrames.getPointTypeCreateEditUI)(item, documentation);
    propertiesUI[item] = uiProperties[item];
  } else {
    //view
    var _uiProperties = (0, _pointTypeFrames.getPointTypeViewUI)(formData, item, documentation);

    propertiesUI[item] = _uiProperties[item];
  } //custom ui:schema


  if (uiFrame && uiFrame[item]) {
    propertiesUI[item] = uiFrame[item];
    propertiesUI[item]["ui:title"] = item;
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}
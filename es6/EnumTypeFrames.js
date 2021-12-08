"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnumTypeFrames = EnumTypeFrames;
exports.makeEnumTypeFrames = makeEnumTypeFrames;

var _react = _interopRequireDefault(require("react"));

var _utils = require("./utils");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function EnumTypeFrames(frame, item, uiFrame, mode, formData, isSet) {
  var properties = {},
      propertiesUI = {};
  var uiDisable = false,
      type = frame[item];
  var layout = {
    type: 'string',
    info: _constants.ENUM,
    "enum": frame["@values"]
  }; //schema

  properties[item] = layout;

  if (mode !== _constants.CREATE) {
    layout["default"] = (0, _utils.getDefaultValue)(item, formData);
  } //default ui:schema


  propertiesUI[item] = {
    "ui:disabled": uiDisable,
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"])),
    "ui:placeholder": "Select ".concat(frame["@id"], " ..."),
    classNames: mode === _constants.VIEW ? "tdb__input mb-3 mt-3 tdb__view__enum__input" : "tdb__input mb-3 mt-3"
  };

  if (mode === _constants.VIEW && !layout.hasOwnProperty("default")) {
    propertiesUI[item]["ui:widget"] = "hidden";
  } //custom ui:schema


  if (uiFrame && uiFrame[item]) {
    propertiesUI[item] = uiFrame[item];
  } // hide entire widget if not available in filled frame


  if (mode === _constants.VIEW && !formData.hasOwnProperty(item)) {
    propertiesUI[item] = {
      "ui:widget": "hidden"
    };
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // mandatory


function makeEnumTypeFrames(frame, item, uiFrame, mode, formData, isSet) {
  var madeFrames = EnumTypeFrames(frame, item, uiFrame, mode, formData, isSet);
  var required = item;
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI,
    required: required
  };
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCreateLayout = getCreateLayout;
exports.getCreateUILayout = getCreateUILayout;
exports.getEditLayout = getEditLayout;
exports.getEditUILayout = getEditUILayout;
exports.getViewLayout = getViewLayout;
exports.getViewUILayout = getViewUILayout;

var _utils = require("../utils");

var _constants = require("../constants");

// Create Layout
function getCreateLayout(frame, item) {
  var layout = {
    type: 'string',
    info: _constants.ENUM,
    "enum": frame[item]["@values"],
    title: item
  };
  return layout;
} // Create UI Layout 


function getCreateUILayout(frame, item, uiFrame, documentation) {
  var label = (0, _utils.getLabelFromDocumentation)(item, documentation);
  var uiLayout = {
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame[item]["@key"]), documentation),
    "ui:placeholder": "Select ".concat(label, " ..."),
    classNames: "tdb__input mb-3 mt-3"
  }; // custom ui:schema - add to default ui schema

  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
} // Edit Layout


function getEditLayout(frame, item, formData) {
  var layout = {
    type: 'string',
    info: _constants.ENUM,
    "enum": frame[item]["@values"],
    title: item
  }; // get default value

  var defaultValue = (0, _utils.getDefaultValue)(item, formData);
  if (defaultValue) layout["default"] = defaultValue;
  return layout;
} // Edit UI Layout


function getEditUILayout(frame, item, formData, uiFrame, documentation) {
  var label = (0, _utils.getLabelFromDocumentation)(item, documentation);
  var uiLayout = {
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame[item]["@key"]), documentation),
    "ui:placeholder": "Select ".concat(label, " ..."),
    classNames: "tdb__input mb-3 mt-3",
    "ui:disabled": (0, _utils.checkIfKey)(item, frame[item]["@key"]) && (0, _utils.isFilled)(formData, item) ? true : false
  }; // custom ui:schema - add to default ui schema

  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
} // View Layout


function getViewLayout(frame, item, formData) {
  var layout = {
    type: 'string',
    info: _constants.ENUM,
    "enum": frame[item]["@values"],
    title: item
  }; // get default value

  var defaultValue = (0, _utils.getDefaultValue)(item, formData);
  if (defaultValue) layout["default"] = defaultValue;
  return layout;
} // View UI Layout


function getViewUILayout(frame, item, formData, uiFrame, documentation) {
  var uiLayout = {}; // hide widget if formData of item is empty
  // check for info - coz at this point there mayb be data
  // fields which belongs to subdocument sets and we do not want to hide the widget

  if (!(0, _utils.isFilled)(formData, item) && !frame.hasOwnProperty("info")) {
    uiLayout = {
      "ui:widget": "hidden"
    };
    return uiLayout;
  }

  var label = (0, _utils.getLabelFromDocumentation)(item, documentation);
  uiLayout = {
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame[item]["@key"]), documentation),
    "ui:placeholder": "Select ".concat(label, " ..."),
    classNames: "tdb__input mb-3 mt-3 tdb__view__enum__input"
  }; // custom ui:schema - add to default ui schema

  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
}
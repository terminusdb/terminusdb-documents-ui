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

var _widget = require("./widget");

var _constants = require("../constants");

var _bi = require("react-icons/bi");

// Create Layout
function getCreateLayout(frame, item, documentation) {
  var label = (0, _utils.getLabelFromDocumentation)(item, documentation);
  var type = (0, _widget.getDataType)(frame[item]);
  var layout = {
    type: type,
    info: _constants.DATA_TYPE,
    title: label
  };
  if (frame[item] === _constants.XSD_DATE_TIME) layout["format"] = "date-time";
  return layout;
} // Create UI Layout


function getCreateUILayout(frame, item, uiFrame, documentation) {
  var title = (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"]), documentation);
  var uiLayout = {
    "ui:placeholder": frame[item],
    "ui:title": title,
    classNames: "tdb__input mb-3 mt-3"
  };

  if (frame[item] === _constants.XSD_DATE_TIME) {
    uiLayout = (0, _widget.getDateTimeUIWidget)(title); // if xsd:dateTime, use a separate widget to display
  } else if (frame[item] === _constants.XSD_DATE) {
    uiLayout = (0, _widget.getDateUIWidget)(title);
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
} // Edit Layout


function getEditLayout(frame, item, formData, documentation) {
  var type = (0, _widget.getDataType)(frame[item]);
  var label = (0, _utils.getLabelFromDocumentation)(item, documentation);
  var layout = {
    type: type,
    info: _constants.DATA_TYPE,
    title: label
  }; // get default value

  var defaultValue = (0, _utils.getDefaultValue)(item, formData);
  if (defaultValue) layout["default"] = defaultValue;
  return layout;
} // Edit UI Layout


function getEditUILayout(frame, item, formData, uiFrame, documentation) {
  var title = (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"]), documentation);
  var uiLayout = {
    "ui:placeholder": frame[item],
    "ui:disabled": (0, _utils.checkIfKey)(item, frame["@key"]) && (0, _utils.isFilled)(formData, item) ? true : false,
    "ui:title": title,
    classNames: "tdb__input mb-3 mt-3"
  };

  if (frame[item] === _constants.XSD_DATE_TIME) {
    uiLayout = {
      "ui:widget": "alt-datetime",
      "ui:title": title,
      "ui:options": {
        yearsRange: [1980, 2030],
        hideNowButton: false,
        hideClearButton: false
      }
    };
    uiLayout["classNames"] = "tdb__input mb-3 mt-3 date-list-style";
  } else if (frame[item] === _constants.XSD_DATE) {
    uiLayout = (0, _widget.getDateUIWidget)(title);
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
} // View Layout


function getViewLayout(frame, item, formData, documentation) {
  var type = (0, _widget.getDataType)(frame[item]);
  var label = (0, _utils.getLabelFromDocumentation)(item, documentation);
  var layout = {
    type: type,
    info: _constants.DATA_TYPE,
    title: label
  };
  var defaultValue = (0, _utils.getDefaultValue)(item, formData);
  if (defaultValue) layout["default"] = defaultValue;
  return layout;
} // View UI Layout


function getViewUILayout(frame, item, formData, uiFrame, documentation) {
  // hide widget if formData of item is empty
  // check for info - coz at this point there mayb be data
  // fields which belongs to subdocument sets and we do not want to hide the widget
  if (!(0, _utils.isFilled)(formData, item) && !frame.hasOwnProperty("info")) {
    uiLayout = {
      "ui:widget": "hidden"
    };
    return uiLayout;
  }

  var title = (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"]), documentation);
  var uiLayout = {
    "ui:placeholder": frame[item],
    "ui:title": title,
    classNames: "tdb__input mb-3 mt-3"
  };

  if (frame[item] === _constants.XSD_DATE_TIME) {
    uiLayout = (0, _widget.getDateTimeUIWidget)(title); // if xsd:dateTime, use a separate widget to display
  } else if (frame[item] === _constants.XSD_DATE) {
    uiLayout = (0, _widget.getDateUIWidget)(title);
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
}
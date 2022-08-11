"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataType = getDataType;
exports.getDateTimeUIWidget = getDateTimeUIWidget;
exports.getDateUIWidget = getDateUIWidget;

var _constants = require("../constants");

// function to provide a ui widget to date
function getDateUIWidget(title) {
  var uiLayout = {};
  uiLayout["ui:widget"] = "date", uiLayout["ui:title"] = title, uiLayout["ui:options"] = {
    "yearsRange": [1980, 2030]
  };
  uiLayout["classNames"] = "tdb__input mb-3 mt-3 date-list-style";
  return uiLayout;
} // function to provide a ui widget to dateTime


function getDateTimeUIWidget(title) {
  var uiLayout = {};
  uiLayout["ui:widget"] = "alt-datetime", uiLayout["ui:title"] = title, uiLayout["ui:options"] = {
    "yearsRange": [1980, 2030]
  };
  uiLayout["classNames"] = "tdb__input mb-3 mt-3 date-list-style";
  return uiLayout;
} //get data type xsd: or xdd:


function getDataType(type) {
  if (type === _constants.XSD_STRING) return _constants.STRING_TYPE;else if (type === _constants.SYS_JSON_TYPE) return _constants.JSON_TYPE;else if (type === _constants.XSD_DECIMAL) return _constants.NUMBER_TYPE;else if (type === _constants.XSD_INTEGER) return _constants.NUMBER_TYPE;else if (type === _constants.XSD_BOOLEAN) return _constants.BOOLEAN_TYPE;else if (type === _constants.XSD_DATE_TIME) return _constants.DATE_TYPE;else if (type === _constants.XSD_G_YEAR) return _constants.DATE_TYPE;else if (type === _constants.XSD_DATE) return _constants.STRING_TYPE;
}
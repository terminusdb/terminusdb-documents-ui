"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCreateJSONWidget = getCreateJSONWidget;
exports.getDataType = getDataType;
exports.getViewJSONWidget = getViewJSONWidget;

var _react = _interopRequireDefault(require("react"));

var _reactJsonEditorAjrm = _interopRequireDefault(require("react-json-editor-ajrm"));

var _en = _interopRequireDefault(require("react-json-editor-ajrm/locale/en"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//get data type xsd: or xdd:
function getDataType(type) {
  if (type === _constants.SYS_JSON_TYPE) return _constants.JSON_TYPE;
  return _constants.XSD_STRING; // return basic string
}
/* function to display sys:JSON types in code mirror in create mode*/


function getCreateJSONWidget(item, label) {
  var uiLayout = {};

  function displayCreateJSONInput(props) {
    function handleInput(data) {
      if (data.hasOwnProperty("jsObject") && Object.keys(data.jsObject).length > 0) {
        props.onChange(data.jsObject);
      }
    }

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, label), /*#__PURE__*/_react["default"].createElement(_reactJsonEditorAjrm["default"], {
      id: "json_type_field",
      locale: _en["default"],
      height: _constants.JSON_EDITOR_HEIGHT,
      width: _constants.JSON_EDITOR_WIDTH,
      onBlur: handleInput
    }));
  }

  uiLayout["ui:description"] = "Enter a valid JSON object below";
  uiLayout["ui:field"] = displayCreateJSONInput;
  return uiLayout;
}
/* function to display sys:JSON types in view mirror */


function getViewJSONWidget(item, formData, label) {
  var uiLayout = {};

  function displayJSONViewInput(props) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, label), /*#__PURE__*/_react["default"].createElement(_reactJsonEditorAjrm["default"], {
      id: "json_type_field",
      placeholder: props.formData,
      locale: _en["default"],
      height: _constants.JSON_EDITOR_HEIGHT,
      width: _constants.JSON_EDITOR_WIDTH,
      viewOnly: true
    }));
  }

  uiLayout["ui:field"] = displayJSONViewInput;
  return uiLayout;
}
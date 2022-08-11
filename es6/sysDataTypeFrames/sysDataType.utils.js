"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCreateLayout = getCreateLayout;
exports.getCreateUILayout = getCreateUILayout;
exports.getEditLayout = getEditLayout;
exports.getEditUILayout = getEditUILayout;
exports.getViewLayout = getViewLayout;
exports.getViewUILayout = getViewUILayout;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _reactJsonEditorAjrm = _interopRequireDefault(require("react-json-editor-ajrm"));

var _en = _interopRequireDefault(require("react-json-editor-ajrm/locale/en"));

var _constants = require("../constants");

var _widget = require("./widget");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Create Layout
function getCreateLayout(frame, item) {
  var type = (0, _widget.getDataType)(frame[item]);
  var layout = {
    type: type,
    info: _constants.DATA_TYPE,
    title: item
  };
  return layout;
} // Create UI Layout


function getCreateUILayout(frame, item, uiFrame, documentation) {
  var uiLayout = {
    "ui:placeholder": frame[item],
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"]), documentation),
    classNames: "tdb__input mb-3 mt-3"
  };

  if (frame[item] === _constants.SYS_JSON_TYPE) {
    // if sys:JSON, use a separate widget to display
    var label = (0, _utils.getLabelFromDocumentation)(item, documentation);
    uiLayout = (0, _widget.getCreateJSONWidget)(item, label);
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
} // Edit Layout


function getEditLayout(frame, item, formData) {
  var type = (0, _widget.getDataType)(frame[item]);
  var layout = {
    type: ["string", "object"],
    info: _constants.SYS_JSON_TYPE,
    title: item
  }; // get default value

  var defaultValue = (0, _utils.getDefaultValue)(item, formData);
  if (defaultValue) layout["default"] = defaultValue;
  return layout;
}

function getEditUILayout(frame, item, defaultValue, uiFrame, documentation) {
  var uiLayout = {}; // get label from documentation

  var label = (0, _utils.getLabelFromDocumentation)(item, documentation);

  function displayEditJSONInput(props) {
    function handleInput(data) {
      if (data.hasOwnProperty("jsObject") && Object.keys(data.jsObject).length > 0) {
        props.onChange(data.jsObject);
      }
    }

    if (props.formData) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, label), /*#__PURE__*/_react["default"].createElement(_reactJsonEditorAjrm["default"], {
        id: "json_type_field",
        placeholder: props.formData,
        locale: _en["default"],
        height: _constants.JSON_EDITOR_HEIGHT,
        width: _constants.JSON_EDITOR_WIDTH,
        onBlur: handleInput
      }));
    }

    if (defaultValue) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, label), /*#__PURE__*/_react["default"].createElement(_reactJsonEditorAjrm["default"], {
        id: "json_type_field",
        placeholder: defaultValue,
        locale: _en["default"],
        height: _constants.JSON_EDITOR_HEIGHT,
        width: _constants.JSON_EDITOR_WIDTH,
        onBlur: handleInput
      }));
    }

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, label), /*#__PURE__*/_react["default"].createElement(_reactJsonEditorAjrm["default"], {
      id: "json_type_field",
      locale: _en["default"],
      height: _constants.JSON_EDITOR_HEIGHT,
      width: _constants.JSON_EDITOR_WIDTH,
      onBlur: handleInput
    }));
  }

  uiLayout = {
    "ui:placeholder": "Search for ".concat(label, " ..."),
    classNames: "tdb__input mb-3 mt-3",
    "ui:field": displayEditJSONInput
  };
  return uiLayout;
} // View Layout


function getViewLayout(frame, item, formData) {
  var type = (0, _widget.getDataType)(frame[item]);
  var layout = {
    type: type,
    info: _constants.SYS_JSON_TYPE,
    title: item
  };
  var defaultValue = (0, _utils.getDefaultValue)(item, formData);
  if (defaultValue) layout["default"] = defaultValue;
  return layout;
} // View UI Layout


function getViewUILayout(frame, item, formData, uiFrame, documentation) {
  // hide widget if formData of item is empty
  // check for info - coz at this point there mayb be data
  // fields which belongs to subdocument sets and we do not want to hide the widget
  // get label from documentation
  var label = (0, _utils.getLabelFromDocumentation)(item, documentation);

  if (!(0, _utils.isFilled)(formData, item) && !frame.hasOwnProperty("info")) {
    uiLayout = {
      "ui:widget": "hidden"
    };
    return uiLayout;
  }

  var uiLayout = {
    "ui:placeholder": frame[item],
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"]), documentation),
    classNames: "tdb__input mb-3 mt-3"
  };

  if (frame[item] === _constants.SYS_JSON_TYPE) {
    // if sys:JSON, use a separate widget to display
    var fd = (0, _utils.getDefaultValue)(item, formData); // get label from documentation

    var _label = (0, _utils.getLabelFromDocumentation)(item, documentation);

    if (fd) uiLayout = (0, _widget.getViewJSONWidget)(item, fd, _label);else if ((0, _utils.isFilled)(formData, item)) uiLayout = (0, _widget.getViewJSONWidget)(item, formData, _label);else uiLayout = {
      "ui:widget": "hidden"
    };
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
}
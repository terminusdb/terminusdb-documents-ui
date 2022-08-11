"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCreateDocumentLayout = getCreateDocumentLayout;
exports.getCreateSysUnitDocumentLayout = getCreateSysUnitDocumentLayout;
exports.getViewDocumentLayout = getViewDocumentLayout;
exports.getViewSysUnitDocumentLayout = getViewSysUnitDocumentLayout;

var _utils = require("../utils");

var _FrameHelpers = require("../FrameHelpers");

var _react = _interopRequireDefault(require("react"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// get view layout of document class
function getViewDocumentLayout(documentClass, fullFrame, current, item, uiFrame, mode, formData, onTraverse, onSelect) {
  var layout = {},
      currentData,
      exractedUiProperties = {};
  var documentClassIRI = "".concat(documentClass);
  var frame = fullFrame[documentClassIRI]; // We set mode to create just to get the frames

  var exractedProperties = (0, _FrameHelpers.getProperties)(fullFrame, current, frame, uiFrame, "Create", {}, onTraverse, onSelect); //console.log("view exractedProperties", exractedProperties)
  // add subdocument type as @type field

  exractedProperties.properties["@type"] = {
    type: "string",
    title: documentClass,
    "default": documentClass
  };
  exractedProperties.properties["@choice"] = {
    type: "string",
    title: current,
    "default": current
  }; // hide @type field

  exractedProperties.uiSchema["@type"] = {
    "ui:widget": "hidden"
  }; // hide @choice field

  exractedProperties.uiSchema["@choice"] = {
    "ui:widget": "hidden"
  };
  var setReadOnlyUi = {}; // make sure these keys are read only at this point

  for (var keys in exractedProperties.uiSchema) {
    var keyUi = exractedProperties.uiSchema[keys];
    keyUi["ui:readonly"] = true;
    setReadOnlyUi[keys] = keyUi;
  }

  layout = {
    title: current,
    type: "object",
    properties: exractedProperties.properties,
    uiProperties: setReadOnlyUi
  };
  return layout;
} // get layout of document class


function getCreateDocumentLayout(documentClass, fullFrame, current, item, uiFrame, mode, formData, onTraverse, onSelect) {
  var layout = {},
      currentData,
      exractedUiProperties = {};
  var documentClassIRI = "".concat(documentClass);
  var frame = fullFrame[documentClassIRI];
  var exractedProperties = (0, _FrameHelpers.getProperties)(fullFrame, current, frame, uiFrame, mode, {}, onTraverse, onSelect); //console.log("exractedProperties", exractedProperties)
  // add subdocument type as @type field

  exractedProperties.properties["@type"] = {
    type: "string",
    title: documentClass,
    "default": documentClass
  };
  exractedProperties.properties["@choice"] = {
    type: "string",
    title: current,
    "default": current
  }; // hide @type field

  exractedProperties.uiSchema["@type"] = {
    "ui:widget": "hidden"
  }; // hide @choice field

  exractedProperties.uiSchema["@choice"] = {
    "ui:widget": "hidden"
  };
  layout = {
    title: current,
    type: "object",
    properties: exractedProperties.properties,
    uiProperties: exractedProperties.uiSchema
  };
  return layout;
} // get layout of sys units


function getCreateSysUnitDocumentLayout(documentClass, fullFrame, current, item, uiFrame, mode, formData, onTraverse, onSelect) {
  var layout = {},
      currentData,
      exractedUiProperties = {};
  var documentClassIRI = "".concat(documentClass);
  var frame = fullFrame[documentClassIRI];

  function displaySysUnit(props) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.name);
  }

  layout = {
    title: current,
    type: "object",
    properties: _defineProperty({}, current, {
      "type": "string",
      "default": _constants.SYS_UNIT_DATA_TYPE
    }),
    uiProperties: _defineProperty({}, current, {
      "ui:field": displaySysUnit
    })
  };
  /*  properties: {date_range: {…}, value: {…}, @type: {…}, @choice: {…}}
  required: ['value']
  uiSchema: {date_range: {…}, value: {…}, @type: {…}, @choice: {…}}
  */

  /*layout = {
      title: current,
      type: "object",
      properties: {
          "@type": {
              type: "string",
              title: documentClass,
              default: documentClass
          },
          "@choice": {
              type: "string",
              title: current,
              default: current
          },
          [current]: {
              type: "string",
              title: current,
              default: current
          }
      },
      uiProperties: {
          "@type": {"ui:widget": "hidden"},
          "@choice": {"ui:widget": "hidden"},
          //[current]: {"ui:field": displaySysUnit}
      }
  } */

  return layout;
} // view layout of sys units


function getViewSysUnitDocumentLayout(documentClass, fullFrame, current, item, uiFrame, mode, formData, onTraverse, onSelect) {
  var layout = {},
      currentData,
      exractedUiProperties = {};
  var documentClassIRI = "".concat(documentClass);
  var frame = fullFrame[documentClassIRI];

  function displaySysUnit(props) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.name);
  }

  layout = {
    title: current,
    type: "object",
    properties: _defineProperty({}, current, {
      "type": "string",
      "default": _constants.SYS_UNIT_DATA_TYPE
    }),
    uiProperties: _defineProperty({}, current, {
      "ui:field": displaySysUnit
    })
  };
  return layout;
}
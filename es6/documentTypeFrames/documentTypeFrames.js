"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.documentTypeFrames = documentTypeFrames;
exports.makeDocumentTypeFrames = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _constants = require("../constants");

var _reactBootstrap = require("react-bootstrap");

var _async = _interopRequireDefault(require("react-select/async"));

var _reactBootstrapTypeahead = require("react-bootstrap-typeahead");

var _documentTypeFrames = require("./documentTypeFrames.utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function documentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  var properties = {},
      propertiesUI = {},
      required = null,
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _documentTypeFrames.getCreateLayout)(frame, item);
    uiLayout = (0, _documentTypeFrames.getCreateUILayout)(frame, item, onSelect, uiFrame, documentation);
  }

  if (mode === _constants.EDIT) {
    layout = (0, _documentTypeFrames.getEditLayout)(frame, item, formData);
    var defaultValue = false;
    if (layout.hasOwnProperty("default")) defaultValue = layout["default"];
    uiLayout = (0, _documentTypeFrames.getEditUILayout)(frame, item, onSelect, defaultValue, uiFrame, documentation);
  }

  if (mode === _constants.VIEW) {
    layout = (0, _documentTypeFrames.getViewLayout)(frame, item, formData);
    var _defaultValue = false;
    if (layout.hasOwnProperty("default")) _defaultValue = layout["default"];
    uiLayout = (0, _documentTypeFrames.getViewUILayout)(frame, item, formData, onTraverse, uiFrame, documentation);
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout); // schema

  properties[item] = layout; // ui schema

  propertiesUI[item] = addedCustomUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI,
    required: required
  };
}

var makeDocumentTypeFrames = function makeDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  var madeFrames = documentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation);
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  /*if(frame.hasOwnProperty("required")) {
      let required=frame.required
      return {properties, propertiesUI, required}
  }*/

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
};

exports.makeDocumentTypeFrames = makeDocumentTypeFrames;
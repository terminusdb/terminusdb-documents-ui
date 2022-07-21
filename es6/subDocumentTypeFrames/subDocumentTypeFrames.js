"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSubDocumentFrames = void 0;
exports.subDocumentTypeFrames = subDocumentTypeFrames;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _constants = require("../constants");

var _reactBootstrap = require("react-bootstrap");

var _async = _interopRequireDefault(require("react-select/async"));

var _reactBootstrapTypeahead = require("react-bootstrap-typeahead");

var _subDocumentType = require("./subDocumentType.utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function subDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _subDocumentType.getCreateLayout)(frame, item);
    uiLayout = (0, _subDocumentType.getCreateUILayout)(frame, item, uiFrame, documentation);
  }

  if (mode === _constants.EDIT) {
    layout = (0, _subDocumentType.getEditLayout)(frame, item, formData);
    uiLayout = (0, _subDocumentType.getEditUILayout)(frame, item, formData, uiFrame, documentation);
  }

  if (mode === _constants.VIEW) {
    layout = (0, _subDocumentType.getViewLayout)(frame, item, formData);
    uiLayout = (0, _subDocumentType.getViewUILayout)(frame, item, formData, uiFrame, documentation);
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout); // schema

  properties[item] = layout; // ui schema

  propertiesUI[item] = addedCustomUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}

var makeSubDocumentFrames = function makeSubDocumentFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  var madeFrames = subDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation);
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
};

exports.makeSubDocumentFrames = makeSubDocumentFrames;
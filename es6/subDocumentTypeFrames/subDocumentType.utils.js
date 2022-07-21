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

var _constants = require("../constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// create layout
function getCreateLayout(frame, item) {
  var layout = {
    type: "object",
    title: item,
    info: _constants.SUBDOCUMENT_TYPE,
    properties: frame.properties //required: Array.isArray(frame.required) ? frame.required : []

  };
  return layout;
} // create ui layout


function getCreateUILayout(frame, item, uiFrame, documentation) {
  var uiLayout = {};
  var subDocuemntBg = (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) ? (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) : 'bg-secondary';

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = frame["uiSchema"];
  }

  uiLayout["ui:field"] = "collapsible";
  uiLayout["collapse"] = {
    field: "ObjectField",
    classNames: "tdb__subdocument__collapse_headers"
  };
  uiLayout["classNames"] = "card ".concat(subDocuemntBg, " p-4 mt-4 mb-4");
  uiLayout["ui:description"] = (0, _utils.getSubDocumentDescription)(item);
  uiLayout["ui:title"] = (0, _utils.getSubDocumentTitle)(item, documentation); // custom ui:schema - add to default ui schema

  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
} // edit layout


function getEditLayout(frame, item, formData) {
  var layout = {
    type: "object",
    title: item,
    info: _constants.SUBDOCUMENT_TYPE,
    properties: frame.properties //required: Array.isArray(frame.required) ? frame.required : []

  }; // get default value

  var defaultValue = (0, _utils.getDefaultValue)(item, formData);
  if (defaultValue) layout["default"] = defaultValue; //console.log("SUB LAYOUT", layout)

  return layout;
} // edit ui layout


function getEditUILayout(frame, item, formData, uiFrame, documentation) {
  var uiLayout = {};
  var subDocuemntBg = (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) ? (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) : 'bg-secondary';

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = frame["uiSchema"];
  }

  uiLayout["ui:field"] = "collapsible";
  uiLayout["collapse"] = {
    field: "ObjectField",
    classNames: "tdb__subdocument__collapse_headers"
  };
  uiLayout["classNames"] = "card ".concat(subDocuemntBg, " p-4 mt-4 mb-4");
  uiLayout["ui:description"] = (0, _utils.getSubDocumentDescription)(item);
  uiLayout["ui:title"] = (0, _utils.getSubDocumentTitle)(item, documentation); // custom ui:schema - add to default ui schema

  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
} // View Layout


function getViewLayout(frame, item, formData) {
  var layout = {
    type: "object",
    title: item,
    info: _constants.SUBDOCUMENT_TYPE,
    properties: frame.properties
  }; // get default value

  var defaultValue = (0, _utils.getDefaultValue)(item, formData);
  if (defaultValue) layout["default"] = defaultValue;

  if (!(0, _utils.isFilled)(formData, item)) {
    layout = {
      type: "object",
      title: item,
      info: _constants.SUBDOCUMENT_TYPE //properties: frame.properties

    };
  }

  return layout;
} // View UI Layout


function getViewUILayout(frame, item, formData, uiFrame, documentation) {
  var uiLayout = {};
  var subDocuemntBg = (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) ? (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) : 'bg-secondary'; // hide widget if formData of item is empty

  if (!(0, _utils.isFilled)(formData, item)) {
    uiLayout = {
      "ui:widget": "hidden"
    };
    return uiLayout;
  }

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = frame["uiSchema"];
  }

  uiLayout["ui:field"] = "collapsible";
  uiLayout["collapse"] = {
    field: "ObjectField",
    classNames: "tdb__subdocument__collapse_headers"
  };
  uiLayout["classNames"] = "card ".concat(subDocuemntBg, " p-4 mt-4 mb-4");
  uiLayout["ui:description"] = (0, _utils.getSubDocumentDescription)(item);
  uiLayout["ui:title"] = (0, _utils.getSubDocumentTitle)(item, documentation); // custom ui:schema - add to default ui schema

  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
} //  classNames: `card ${subDocumentStyles} p-4 mt-4 mb-4`,
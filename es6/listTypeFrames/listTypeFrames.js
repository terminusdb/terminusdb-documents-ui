"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeListDataTypeFrames = makeListDataTypeFrames;
exports.makeListTypeFrames = void 0;
exports.makeSetChoiceTypeFrames = makeSetChoiceTypeFrames;
exports.makeSetDocumentTypeFrames = makeSetDocumentTypeFrames;
exports.makeSetEnumTypeFrames = makeSetEnumTypeFrames;
exports.makeSubDocumentTypeFrames = makeSubDocumentTypeFrames;
exports.makeSysDataTypeFrames = makeSysDataTypeFrames;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _constants = require("../constants");

var _reactBootstrap = require("react-bootstrap");

var _async = _interopRequireDefault(require("react-select/async"));

var _reactBootstrapTypeahead = require("react-bootstrap-typeahead");

var _listType = require("./listType.utils");

var _sample = require("../../examples/src/sample");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// set choice document types
function makeSetChoiceTypeFrames(frame, item, uiFrame, mode, formData) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _listType.getCreateSetChoiceDocumentTypeLayout)(frame, item);
    uiLayout = (0, _listType.getCreateSetChoiceDocumentTypeUILayout)(frame, item);
  }

  if (mode === _constants.EDIT) {
    layout = (0, _listType.getEditSetChoiceDocumentTypeLayout)(frame, item, formData);
    uiLayout = (0, _listType.getEditSetChoiceDocumentTypeUILayout)(frame, item);
  }

  if (mode === _constants.VIEW) {
    layout = (0, _listType.getViewSetChoiceDocumentTypeLayout)(frame, item, formData);
    uiLayout = (0, _listType.getViewSetChoiceDocumentTypeUILayout)(frame, item);
  } // schema


  properties[item] = layout; // ui schema

  propertiesUI[item] = uiLayout;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // set Enum Types


function makeSetEnumTypeFrames(frame, item, uiFrame, mode, formData, documentation) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _listType.getCreateSetEnumTypeLayout)(frame, item, documentation);
    uiLayout = (0, _listType.getCreateSetEnumTypeUILayout)(frame, item);
  }

  if (mode === _constants.EDIT) {
    layout = (0, _listType.getEditSetEnumTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _listType.getEditSetEnumTypeUILayout)(frame, item);
  }

  if (mode === _constants.VIEW) {
    layout = (0, _listType.getViewSetEnumTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _listType.geViewSetEnumTypeUILayout)(frame, item);
  } // schema


  properties[item] = layout; // ui schema

  propertiesUI[item] = uiLayout;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // set document types


function makeSetDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _listType.getCreateSetDocumentTypeLayout)(frame, item, documentation);
    uiLayout = (0, _listType.getCreateSetDocumentTypeUILayout)(frame, item);
  }

  if (mode === _constants.EDIT) {
    layout = (0, _listType.getEditSetDocumentTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _listType.getEditSetDocumentTypeUILayout)(frame, item, onSelect, documentation);
  }

  if (mode === _constants.VIEW) {
    layout = (0, _listType.getViewSetDocumentTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _listType.getViewSetDocumentTypeUILayout)(frame, item, onSelect, documentation);
  } // schema


  properties[item] = layout; // ui schema

  propertiesUI[item] = uiLayout;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // set subDocument types


function makeSubDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _listType.getCreateSetSubDocumentTypeLayout)(frame, item, documentation);
    uiLayout = (0, _listType.getCreateSetSubDocumentTypeUILayout)(frame, item);
  }

  if (mode === _constants.EDIT) {
    layout = (0, _listType.getEditSetSubDocumentTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _listType.getEditSetSubDocumentTypeUILayout)(frame, item);
  }

  if (mode === _constants.VIEW) {
    layout = (0, _listType.getViewSetSubDocumentTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _listType.getViewSetSubDocumentTypeUILayout)(frame, item, formData);
  } // schema


  properties[item] = layout; // ui schema

  propertiesUI[item] = uiLayout;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // list data types


function makeListDataTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _listType.getCreateSetDataTypeLayout)(frame, item, documentation);
    uiLayout = (0, _listType.getCreateSetDataTypeUILayout)(frame, item);
  }

  if (mode === _constants.EDIT) {
    layout = (0, _listType.getEditSetDataTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _listType.getEditSetDataTypeUILayout)(frame, item);
  }

  if (mode === _constants.VIEW) {
    layout = (0, _listType.getViewSetDataTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _listType.getViewSetDataTypeUILayout)(frame, item, formData);
  } // schema


  properties[item] = layout; // ui schema

  propertiesUI[item] = uiLayout;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // list sys data types


function makeSysDataTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _listType.getCreateListSysDataTypeLayout)(frame, item, documentation);
    uiLayout = (0, _listType.getCreateListSysDataTypeUILayout)(frame, item);
  }

  if (mode === _constants.EDIT) {
    layout = (0, _listType.getEditListSysDataTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _listType.getEditListSysDataTypeUILayout)(frame, item, documentation);
  }

  if (mode === _constants.VIEW) {
    layout = (0, _listType.getViewListSysDataTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _listType.getViewListSysDataTypeUILayout)(frame, item, formData);
  } // schema


  properties[item] = layout; // ui schema

  propertiesUI[item] = uiLayout;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}

var makeListTypeFrames = function makeListTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, fullFrame, documentation) {
  var madeFrames = {}; // set Data Types

  if (frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
    if (frame["properties"][item].hasOwnProperty("info") && frame["properties"][item]["info"] === _constants.DATA_TYPE) madeFrames = makeListDataTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation);
  } // list Sys Data Types


  if (frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
    if (frame["properties"][item].hasOwnProperty("info") && frame["properties"][item]["info"] === _constants.SYS_JSON_TYPE) madeFrames = makeSysDataTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation);
  } // set Sub Document Types


  if (frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
    if (frame["properties"][item].hasOwnProperty("info") && frame["properties"][item]["info"] === _constants.SUBDOCUMENT_TYPE) madeFrames = makeSubDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation);
  } // set Document Types


  if (frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
    if (frame["properties"][item].hasOwnProperty("info") && frame["properties"][item]["info"] === _constants.DOCUMENT) madeFrames = makeSetDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation);
  } // set Enum Types


  if (frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
    if (frame["properties"][item].hasOwnProperty("info") && frame["properties"][item]["info"] === _constants.ENUM) madeFrames = makeSetEnumTypeFrames(frame, item, uiFrame, mode, formData, documentation);
  } // set Choice Document classes


  if (frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
    if (frame["properties"][item].hasOwnProperty("info") && frame["properties"][item]["info"] === _constants.CHOICESUBCLASSES) madeFrames = makeSetChoiceTypeFrames(frame, item, uiFrame, mode, formData);
  }

  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
};

exports.makeListTypeFrames = makeListTypeFrames;
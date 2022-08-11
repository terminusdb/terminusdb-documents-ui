"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSetChoiceTypeFrames = makeSetChoiceTypeFrames;
exports.makeSetDataTypeFrames = makeSetDataTypeFrames;
exports.makeSetDocumentTypeFrames = makeSetDocumentTypeFrames;
exports.makeSetEnumTypeFrames = makeSetEnumTypeFrames;
exports.makeSetSubChoiceTypeFrames = makeSetSubChoiceTypeFrames;
exports.makeSetSysDataTypeFrames = makeSetSysDataTypeFrames;
exports.makeSetTypeFrames = void 0;
exports.makeSubDocumentTypeFrames = makeSubDocumentTypeFrames;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _constants = require("../constants");

var _reactBootstrap = require("react-bootstrap");

var _async = _interopRequireDefault(require("react-select/async"));

var _reactBootstrapTypeahead = require("react-bootstrap-typeahead");

var _setType = require("./setType.utils");

var _sample = require("../../examples/src/sample");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// set sub choice document types
function makeSetSubChoiceTypeFrames(frame, item, uiFrame, mode, formData, documentation) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _setType.getCreateSetSubChoiceDocumentTypeLayout)(frame, item, documentation);
    uiLayout = (0, _setType.getCreateSetSubChoiceDocumentTypeUILayout)(frame, item, uiFrame);
  }

  if (mode === _constants.EDIT) {
    layout = (0, _setType.getEditSetChoiceSubDocumentTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _setType.getEditSetChoiceSubDocumentTypeUILayout)(frame, item);
  }

  if (mode === _constants.VIEW) {
    layout = (0, _setType.getViewSetChoiceSubDocumentTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _setType.getViewSetChoiceSubDocumentTypeUILayout)(frame, item, formData);
  } // schema


  properties[item] = layout; // ui schema

  propertiesUI[item] = uiLayout;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // set Choice document types


function makeSetChoiceTypeFrames(frame, item, uiFrame, mode, formData, onTraverse) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _setType.getCreateSetChoiceDocumentTypeLayout)(frame, item);
    uiLayout = (0, _setType.getCreateSetChoiceDocumentTypeUILayout)(frame, item, uiFrame);
  }

  if (mode === _constants.EDIT) {
    layout = (0, _setType.getEditSetChoiceDocumentTypeLayout)(frame, item, formData);
    uiLayout = (0, _setType.getEditSetChoiceDocumentTypeUILayout)(frame, item);
  }

  if (mode === _constants.VIEW) {
    layout = (0, _setType.getViewSetChoiceDocumentTypeLayout)(frame, item, formData);
    uiLayout = (0, _setType.getViewSetChoiceDocumentTypeUILayout)(frame, item, onTraverse);
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
    layout = (0, _setType.getCreateSetEnumTypeLayout)(frame, item, documentation);
    uiLayout = (0, _setType.getCreateSetEnumTypeUILayout)(frame, item);
  }

  if (mode === _constants.EDIT) {
    layout = (0, _setType.getEditSetEnumTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _setType.getEditSetEnumTypeUILayout)(frame, item);
  }

  if (mode === _constants.VIEW) {
    layout = (0, _setType.getViewSetEnumTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _setType.getViewSetEnumTypeUILayout)(frame, item, formData);
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
    layout = (0, _setType.getCreateSetDocumentTypeLayout)(frame, item, documentation);
    uiLayout = (0, _setType.getCreateSetDocumentTypeUILayout)(frame, item, uiFrame);
  }

  if (mode === _constants.EDIT) {
    layout = (0, _setType.getEditSetDocumentTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _setType.getEditSetDocumentTypeUILayout)(frame, item, uiFrame, onSelect, documentation);
  }

  if (mode === _constants.VIEW) {
    layout = (0, _setType.getViewSetDocumentTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _setType.getViewSetDocumentTypeUILayout)(frame, item, onSelect, uiFrame, formData, onTraverse, documentation);
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
    layout = (0, _setType.getCreateSetSubDocumentTypeLayout)(frame, item, documentation);
    uiLayout = (0, _setType.getCreateSetSubDocumentTypeUILayout)(frame, item, uiFrame);
  }

  if (mode === _constants.EDIT) {
    layout = (0, _setType.getEditSetSubDocumentTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _setType.getEditSetSubDocumentTypeUILayout)(frame, item, uiFrame);
  }

  if (mode === _constants.VIEW) {
    layout = (0, _setType.getViewSetSubDocumentTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _setType.getViewSetSubDocumentTypeUILayout)(frame, item, uiFrame, formData);
  } // schema


  properties[item] = layout; // ui schema

  propertiesUI[item] = uiLayout;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // set data types


function makeSetDataTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _setType.getCreateSetDataTypeLayout)(frame, item, documentation);
    uiLayout = (0, _setType.getCreateSetDataTypeUILayout)(frame, item, uiFrame);
  }

  if (mode === _constants.EDIT) {
    layout = (0, _setType.getEditSetDataTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _setType.getEditSetDataTypeUILayout)(frame, item, uiFrame);
  }

  if (mode === _constants.VIEW) {
    layout = (0, _setType.getViewSetDataTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _setType.getViewSetDataTypeUILayout)(frame, item, formData, uiFrame);
  } // schema


  properties[item] = layout; // ui schema

  propertiesUI[item] = uiLayout;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}

function makeSetSysDataTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _setType.getCreateSetSysDataTypeLayout)(frame, item, documentation);
    uiLayout = (0, _setType.getCreateSetSysDataTypeUILayout)(frame, item, uiFrame);
  }

  if (mode === _constants.EDIT) {
    layout = (0, _setType.getEditSetSysDataTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _setType.getEditSetSysDataTypeUILayout)(frame, item, uiFrame, documentation);
  }

  if (mode === _constants.VIEW) {
    layout = (0, _setType.getViewSetSysDataTypeLayout)(frame, item, formData, documentation);
    uiLayout = (0, _setType.getViewSetSysDataTypeUILayout)(frame, item, formData, uiFrame);
  } // schema


  properties[item] = layout; // ui schema

  propertiesUI[item] = uiLayout;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // function which checks if properties of a set has @oneOf


function checkIfSubPropertiesHasOneOf(frame, item) {
  if (frame["properties"][item].hasOwnProperty("properties") && frame["properties"][item]["properties"].hasOwnProperty(_constants.ONEOFVALUES)) {
    return true;
  }

  return false;
} // set @oneOfs


function makeSubOneOfTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _setType.getCreateSetDataTypeLayout)(frame, item);
    uiLayout = (0, _setType.getCreateSetDataTypeUILayout)(frame, item);
  }

  if (mode === _constants.EDIT) {
    layout = (0, _setType.getEditSetOneOfTypeLayout)(frame, item, formData, uiFrame);
    uiLayout = (0, _setType.getEditSetOneOfTypeUILayout)(frame, item, layout, uiFrame);
  }

  if (mode === _constants.VIEW) {
    layout = (0, _setType.getViewSetOneOfTypeLayout)(frame, item, formData, uiFrame);
    uiLayout = (0, _setType.getViewSetOneOfTypeUILayout)(frame, item, layout, uiFrame, formData);
  } // schema


  properties[item] = layout; // ui schema

  propertiesUI[item] = uiLayout;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}

var makeSetTypeFrames = function makeSetTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, fullFrame, documentation) {
  //console.log("!!! SET frame", frame)
  var madeFrames = {}; // set Data Types

  if (frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
    if (frame["properties"][item].hasOwnProperty("info") && frame["properties"][item]["info"] === _constants.DATA_TYPE) madeFrames = makeSetDataTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation);
  } // set Sys Data Types


  if (frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
    if (frame["properties"][item].hasOwnProperty("info") && frame["properties"][item]["info"] === _constants.SYS_JSON_TYPE) madeFrames = makeSetSysDataTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation);
  } // check if any subdocument has a @oneOf property?


  if (frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
    if (frame["properties"][item].hasOwnProperty("info") && frame["properties"][item]["info"] === _constants.SUBDOCUMENT_TYPE && checkIfSubPropertiesHasOneOf(frame, item)) madeFrames = makeSubOneOfTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect);
  } // set Sub Document Types


  if (frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
    if (frame["properties"][item].hasOwnProperty("info") && frame["properties"][item]["info"] === _constants.SUBDOCUMENT_TYPE && !checkIfSubPropertiesHasOneOf(frame, item)) madeFrames = makeSubDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation);
  } // set Document Types


  if (frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
    if (frame["properties"][item].hasOwnProperty("info") && frame["properties"][item]["info"] === _constants.DOCUMENT) madeFrames = makeSetDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation);
  } // set Enum Types


  if (frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
    if (frame["properties"][item].hasOwnProperty("info") && frame["properties"][item]["info"] === _constants.ENUM) madeFrames = makeSetEnumTypeFrames(frame, item, uiFrame, mode, formData, documentation);
  } // set Choice Document classes


  if (frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
    if (frame["properties"][item].hasOwnProperty("info") && frame["properties"][item]["info"] === _constants.CHOICESUBCLASSES) madeFrames = makeSetSubChoiceTypeFrames(frame, item, uiFrame, mode, formData, documentation);
  } // set Choice Document classes


  if (frame.hasOwnProperty("properties") && frame["properties"].hasOwnProperty(item)) {
    if (frame["properties"][item].hasOwnProperty("info") && frame["properties"][item]["info"] === _constants.CHOICECLASSES) madeFrames = makeSetChoiceTypeFrames(frame, item, uiFrame, mode, formData, onTraverse);
  }

  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
};

exports.makeSetTypeFrames = makeSetTypeFrames;
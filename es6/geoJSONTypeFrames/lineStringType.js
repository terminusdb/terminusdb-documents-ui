"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lineStringType = lineStringType;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _constants = require("../constants");

var _reactBootstrap = require("react-bootstrap");

var _mapViewer = require("../maps/mapViewer");

var _lineStringType = require("./lineStringType.utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//[[125.6, 10.1], [125.6, 15.1]] // two or more prositions
function lineStringType(frame, item, uiFrame, mode, formData) {
  var _layout;

  var properties = {},
      propertiesUI = {};
  var layout = (_layout = {
    type: "array",
    title: item
  }, _defineProperty(_layout, _constants.DIMENSION, frame[_constants.DIMENSION]), _defineProperty(_layout, "items", [{
    type: "array",
    items: [{
      type: "number"
    }, {
      type: "number"
    }]
  }]), _defineProperty(_layout, "additionalItems", {
    type: "array",
    items: [{
      type: "number"
    }, {
      type: "number"
    }]
  }), _layout);

  if (mode === _constants.EDIT) {
    layout["items"] = (0, _lineStringType.getLineStringTypeFilledValues)(formData, item);
  } //schema


  properties[item] = layout; //ui

  if (mode === _constants.CREATE) {
    var uiProperties = (0, _lineStringType.getLineStringCreateEditUI)(item);
    propertiesUI[item] = uiProperties[item];
  } else if (mode === _constants.EDIT) {
    var _uiProperties = (0, _lineStringType.getLineStringCreateEditUI)(item);

    propertiesUI[item] = _uiProperties[item];
  } else {
    var _uiProperties2 = (0, _lineStringType.getLineStringTypeViewUI)(formData, item, frame[_constants.DIMENSION]);

    propertiesUI[item] = _uiProperties2[item];
  } //custom ui:schema


  if (uiFrame && uiFrame[item]) {
    propertiesUI[item] = uiFrame[item];
    propertiesUI[item]["ui:title"] = item;
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}
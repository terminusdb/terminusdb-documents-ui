"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiPolygonType = multiPolygonType;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _constants = require("../constants");

var _reactBootstrap = require("react-bootstrap");

var _mapViewer = require("../maps/mapViewer");

var _multiPolygonType = require("./multiPolygonType.utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function multiPolygonType(frame, item, uiFrame, mode, formData) {
  var _polygonLayout;

  var properties = {},
      propertiesUI = {},
      layout = {};
  var polygonLayout = (_polygonLayout = {
    type: "array",
    title: item
  }, _defineProperty(_polygonLayout, _constants.DIMENSION, frame[_constants.DIMENSION]), _defineProperty(_polygonLayout, "items", [{
    type: "array",
    items: [{
      type: "number"
    }, {
      type: "number"
    }]
  }]), _defineProperty(_polygonLayout, "additionalItems", {
    type: "array",
    items: [{
      type: "number"
    }, {
      type: "number"
    }]
  }), _polygonLayout); // get filled values 

  if (mode === _constants.EDIT) {
    var filled = [];

    if (formData.hasOwnProperty(item)) {
      formData[item].map(function (fd) {
        fd.map(function (fdVals) {
          var json = {
            type: "array",
            items: [{
              type: "number",
              "default": fdVals[0]
            }, {
              type: "number",
              "default": fdVals[1]
            }]
          };
          filled.push(json);
        });
      });
    } else filled = [{
      // when no filled value available
      type: "array",
      items: [{
        type: "number"
      }, {
        type: "number"
      }]
    }];

    polygonLayout["items"] = filled;
  }

  if (mode !== _constants.VIEW) {
    var _layout;

    layout = (_layout = {
      type: "array",
      title: "New Polygon"
    }, _defineProperty(_layout, _constants.DIMENSION, frame[_constants.DIMENSION]), _defineProperty(_layout, "items", [polygonLayout]), _defineProperty(_layout, "additionalItems", polygonLayout), _layout);
  } else {
    layout = {
      type: "object",
      title: "test"
    };
  } //schema


  properties[item] = layout; //ui

  if (mode === _constants.VIEW) {
    var uiProperties = (0, _multiPolygonType.getMultiPolygonTypeViewUI)(formData, item, frame[_constants.DIMENSION]);
    propertiesUI[item] = uiProperties[item];
  } else {
    var _uiProperties = (0, _multiPolygonType.getMultiPolygonCreateEditUI)(item);

    propertiesUI[item] = _uiProperties[item];
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}
/*export function polygonType (frame, item, uiFrame, mode, formData) {
    let properties={}, propertiesUI={}


    let polygon_layout= {
        type: "array",
        title: "Polygon lat & lng",
        items: [{
            type: "array",
            items: [{type: "number"}, {type: "number"}]
        }],
        additionalItems: {
            type: "array",
            items: [{type: "number"}, {type: "number"}]
        }
    }

    var  layout= {
        type: "array",
        title: item,
        [DIMENSION]: frame[DIMENSION],
        items: [polygon_layout],
        additionalItems: polygon_layout
    }

    //schema
    properties[item] = layout

    let uiProperties=getPolygonCreateEditUI(item) 
    propertiesUI[item]=uiProperties[item]

    return {properties, propertiesUI}
}*/
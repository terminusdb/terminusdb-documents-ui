"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGeoFrames = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _constants = require("./constants");

var _reactBootstrap = require("react-bootstrap");

var _MapViewer = require("./MapViewer");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
"coordinates": {
    "@class": "xsd:decimal",
    "@dimensions": 1,
    "@type": "Array"
},*/

/*
propertiesUI[item]={
            "items": {
                "ui:options" : {
                    addable: false,
                    orderable: false,
                    removable: false
                },
                classNames: "tdb__input mb-3 mt-3 form-label tdb__view__input"
            }
        }
        propertiesUI[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
        */
function multiDimensions(frame, item, uiFrame, mode, formData) {
  var _layout;

  var properties = {},
      propertiesUI = {}; //[[125.6, 10.1], [125.6, 15.1]] // two or more prositions

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
    var _layout2;

    var filled = [];

    if (formData.hasOwnProperty(item)) {
      formData[item].map(function (fd) {
        var json = {
          type: "array",
          items: [{
            type: "number",
            "default": fd[0]
          }, {
            type: "number",
            "default": fd[1]
          }]
        };
        filled.push(json);
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

    layout = (_layout2 = {
      type: "array",
      title: item
    }, _defineProperty(_layout2, _constants.DIMENSION, frame[_constants.DIMENSION]), _defineProperty(_layout2, "items", filled), _layout2);
  }

  properties[item] = layout; //ui

  if (mode === _constants.CREATE) {
    propertiesUI[item] = {
      "items": {
        "ui:description": "you can enter multiple coordinates",
        "ui:options": {
          addable: true,
          orderable: true,
          removable: true
        },
        "items": [{
          "ui:placeholder": "Enter latitude ...",
          classNames: "tdb__input  mt-3"
        }, {
          "ui:placeholder": "Enter longitude ...",
          classNames: "tdb__input  mb-3"
        }]
      },
      "additionalItems": {
        "items": [{
          "ui:placeholder": "Enter latitude ...",
          classNames: "tdb__input  mt-3"
        }, {
          "ui:placeholder": "Enter longitude ...",
          classNames: "tdb__input  mb-3"
        }]
      }
    };
    propertiesUI[item]["ui:ArrayFieldTemplate"] = _utils.ArrayFieldTemplate;
  } else if (mode === _constants.EDIT) {
    propertiesUI[item] = {
      "items": {
        "ui:description": "you can enter multiple coordinates",
        "ui:options": {
          addable: true,
          orderable: true,
          removable: true
        },
        "items": [{
          "ui:placeholder": "Enter latitude ...",
          classNames: "tdb__input  mt-3"
        }, {
          "ui:placeholder": "Enter longitude ...",
          classNames: "tdb__input  mb-3"
        }]
      },
      "additionalItems": {
        "items": [{
          "ui:placeholder": "Enter latitude ...",
          classNames: "tdb__input  mt-3"
        }, {
          "ui:placeholder": "Enter longitude ...",
          classNames: "tdb__input  mb-3"
        }]
      }
    };
    propertiesUI[item]["ui:ArrayFieldTemplate"] = _utils.ArrayFieldTemplate;
  } else {
    //[[51, 6], [54, -6]]
    var getMapComponent = function getMapComponent(props) {
      if (!formData.hasOwnProperty(item)) return /*#__PURE__*/_react["default"].createElement("div", null);
      var docs = [];
      formData[item].map(function (fd) {
        var co = {
          lat: fd[0],
          lng: fd[1]
        };
        docs.push(co);
      });
      var polyLine = [{
        color: "#de7dd8",
        data: docs
      }]; //let co = [{lat: formData[item][0], lng: formData[item][1]}]

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, item), /*#__PURE__*/_react["default"].createElement(_MapViewer.MapViewer, {
        documents: docs,
        polyLine: polyLine,
        scrollWheelZoom: true
      }));
    };

    propertiesUI["geometry_location"] = {
      "ui:field": getMapComponent
    };
  } //custom ui:schema


  if (uiFrame && uiFrame[item]) {
    propertiesUI[item] = uiFrame[item];
    propertiesUI[item]["ui:title"] = item;
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // example [125.6, 10.1]


function singleDimensions(frame, item, uiFrame, mode, formData) {
  var _layout3;

  var properties = {},
      propertiesUI = {};
  var layout = (_layout3 = {
    type: "array",
    title: item
  }, _defineProperty(_layout3, _constants.DIMENSION, frame[_constants.DIMENSION]), _defineProperty(_layout3, "items", [{
    type: "number"
  }, {
    type: "number"
  }]), _layout3);

  if (mode !== _constants.CREATE && formData.hasOwnProperty(item)) {
    var filledItems = [];
    var count = 0,
        defaultValues = formData[item];
    defaultValues.map(function (value) {
      filledItems.push({
        type: "number",
        "default": defaultValues[count]
      });
      count += 1;
    });
    layout["items"] = filledItems;
  } //schema


  properties[item] = layout;

  if (mode !== _constants.VIEW) {
    // we do not allow to add extra on view mode
    //ui
    propertiesUI[item] = {
      "items": [{
        "ui:placeholder": "Enter latitude ...",
        classNames: "tdb__input mb-3 mt-3"
      }, {
        "ui:placeholder": "Enter longitude ...",
        classNames: "tdb__input mb-3 mt-3"
      }],
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false
      }
    };
    propertiesUI[item]["ui:ArrayFieldTemplate"] = _utils.ArrayFieldTemplate;
  } else {
    //view
    var getMapComponent = function getMapComponent(props) {
      if (!formData.hasOwnProperty(item)) return /*#__PURE__*/_react["default"].createElement("div", null);
      var co = [{
        lat: formData[item][0],
        lng: formData[item][1]
      }];
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, item), /*#__PURE__*/_react["default"].createElement(_MapViewer.MapViewer, {
        documents: co,
        scrollWheelZoom: true
      }));
    };

    propertiesUI[item] = {
      "ui:field": getMapComponent
    };
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

function geoTypeFrames(frame, item, uiFrame, mode, formData) {
  if (frame.hasOwnProperty(_constants.DIMENSION) && frame[_constants.DIMENSION] === 1) return singleDimensions(frame, item, uiFrame, mode, formData);else if (frame.hasOwnProperty(_constants.DIMENSION) && frame[_constants.DIMENSION] > 1) return multiDimensions(frame, item, uiFrame, mode, formData);
}

var makeGeoFrames = function makeGeoFrames(frame, item, uiFrame, mode, formData) {
  var madeFrames = geoTypeFrames(frame, item, uiFrame, mode, formData);
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
};

exports.makeGeoFrames = makeGeoFrames;
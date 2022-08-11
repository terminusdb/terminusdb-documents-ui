"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPolygonCreateEditUI = getPolygonCreateEditUI;
exports.getPolygonTypeFilledValues = getPolygonTypeFilledValues;
exports.getPolygonTypeViewUI = getPolygonTypeViewUI;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

var _mapViewer = require("../maps/mapViewer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getPolygonTypeFilledValues(formData, item) {
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

  return filled;
}

function getPolygonCreateEditUI(item) {
  var ui = {};
  var uiPolygon = {
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
    }],
    "additionalItems": {
      "items": [{
        "ui:placeholder": "Enter latitude ...",
        classNames: "tdb__input  mt-3"
      }, {
        "ui:placeholder": "Enter longitude ...",
        classNames: "tdb__input  mb-3"
      }]
    }
    /*"additionalItems": {
        "items" : [
            {
                "ui:placeholder": `Enter latitude ...`,
                classNames: "tdb__input  mt-3"
            },
            {
                "ui:placeholder": `Enter longitude ...`,
                classNames: "tdb__input  mb-3"
            }
        ]
    }*/

  };
  uiPolygon["ui:ArrayFieldTemplate"] = _utils.ArrayFieldTemplate; //ui[item] = uiPolygon

  ui[item] = {
    "items": {
      //"ui:description": "Add another polygon",
      "ui:options": {
        addable: true,
        orderable: true,
        removable: true
      },
      "items": uiPolygon
    }
    /*"additionalItems": {
        "ui:description": "Add another polygon",
        "items" : uiPolygon
    }*/

  };
  ui[item]["ui:ArrayFieldTemplate"] = _utils.ArrayFieldTemplate;
  return ui;
}

function getPolygonTypeViewUI(formData, item, dimension) {
  var ui = {};

  function getMapComponent(props) {
    if (!formData.hasOwnProperty(item)) return /*#__PURE__*/_react["default"].createElement("div", null);
    var docs = [];
    formData[item].map(function (fd) {
      docs.push(fd);
    });
    var polyLine = {
      color: "black",
      data: docs
    }; //let co = [{lat: formData[item][0], lng: formData[item][1]}]

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, item), dimension === 3 && /*#__PURE__*/_react["default"].createElement(_mapViewer.MapViewer, {
      documents: docs,
      polygon: polyLine,
      scrollWheelZoom: true
    }));
  }

  ui[item] = {
    "ui:field": getMapComponent
  };
  return ui;
}
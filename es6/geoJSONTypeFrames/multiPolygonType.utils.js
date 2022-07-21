"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMultiPolygonCreateEditUI = getMultiPolygonCreateEditUI;
exports.getMultiPolygonTypeFilledValues = void 0;
exports.getMultiPolygonTypeViewUI = getMultiPolygonTypeViewUI;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

var _mapViewer = require("../maps/mapViewer");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getMultiPolygonTypeFilledValues = function getMultiPolygonTypeFilledValues(frame, formData, item) {
  var _ref;

  var filled = [];

  if (formData.hasOwnProperty(item)) {
    formData[item].map(function (fd) {
      var _json;

      var json = (_json = {
        type: "array",
        title: item
      }, _defineProperty(_json, _constants.DIMENSION, frame[_constants.DIMENSION]), _defineProperty(_json, "items", [{
        type: "array",
        items: [{
          type: "number",
          "default": fd[0]
        }, {
          type: "number",
          "default": fd[1]
        }]
      }]), _defineProperty(_json, "additionalItems", {
        type: "array",
        items: [{
          type: "number"
        }, {
          type: "number"
        }]
      }), _json);
      filled.push(json);
    });
  } else filled = [(_ref = {
    type: "array",
    title: item
  }, _defineProperty(_ref, _constants.DIMENSION, frame[_constants.DIMENSION]), _defineProperty(_ref, "items", [{
    type: "array",
    items: [{
      type: "number"
    }, {
      type: "number"
    }]
  }]), _defineProperty(_ref, "additionalItems", {
    type: "array",
    items: [{
      type: "number"
    }, {
      type: "number"
    }]
  }), _ref)];

  return filled;
};

exports.getMultiPolygonTypeFilledValues = getMultiPolygonTypeFilledValues;

function getMultiPolygonCreateEditUI(item) {
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
  };
  uiPolygon["ui:ArrayFieldTemplate"] = _utils.ArrayFieldTemplate; //ui[item] = uiPolygon

  ui[item] = {
    "items": {
      "ui:description": "Add another polygon",
      "ui:options": {
        addable: true,
        orderable: true,
        removable: true
      },
      "items": uiPolygon
    },
    "additionalItems": {
      "ui:description": "Add another polygon",
      "items": uiPolygon
    }
  };
  ui[item]["ui:ArrayFieldTemplate"] = _utils.ArrayFieldTemplate;
  return ui;
}

function getMultiPolygonTypeViewUI(formData, item, dimension) {
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
/*export function getPolygonCreateEditUI (item) {
    let ui={}
    ui[item] = {
        "items": {
            "ui:description": "you can enter multiple coordinates",
            "ui:options" : {
                addable: true,
                orderable: true,
                removable: true
            },
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
        },
        "additionalItems": {
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
        }
    }
    ui[item]["ui:ArrayFieldTemplate"]=ArrayFieldTemplate
    return ui
}*/
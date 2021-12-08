"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSubDocumentFrames = void 0;
exports.subDocumentTypeFrames = subDocumentTypeFrames;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _constants = require("./constants");

var _reactBootstrap = require("react-bootstrap");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function subDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse) {
  var properties = {},
      propertiesUI = {};
  var defaultValue; // on edit or view

  if (mode !== _constants.CREATE && formData && formData.hasOwnProperty(item)) {
    var filled = formData[item];

    if (Array.isArray(filled)) {
      filled.map(function (val) {
        for (var key in val) {
          if (frame.properties[key]) {
            // frame exists and we add a default
            frame.properties[key]["default"] = val[key];
          }
        }
      });
    } else {
      //json object
      for (var key in filled) {
        if (frame.properties[key]) {
          // frame exists and we add a default
          frame.properties[key]["default"] = filled[key];
        }
      }
    }
  }

  var layout = {
    type: "object",
    title: item,
    info: "SUBDOCUMENT",
    properties: frame.properties,
    required: Array.isArray(frame.required) ? frame.required : []
  }; //schema

  properties[item] = layout;
  propertiesUI[item] = {
    "ui:field": "collapsible",
    collapse: {
      field: "ObjectField",
      classNames: "tdb__subdocument__collapse_headers"
    },
    classNames: "card bg-secondary p-4 mt-4 mb-4",
    "ui:description": (0, _utils.getSubDocumentDescription)(item),
    "ui:title": (0, _utils.getSubDocumentTitle)(item)
  }; // copy ui schema of data type to new ui

  for (var key in frame.uiSchema) {
    propertiesUI[item][key] = frame.uiSchema[key];
  } // for view mode - logic to click through on traverse


  if (mode === _constants.VIEW && properties[item].properties) {
    for (var key in properties[item].properties) {
      var getSelect = function getSelect(props) {
        var _useState = (0, _react.useState)(false),
            _useState2 = _slicedToArray(_useState, 2),
            clicked = _useState2[0],
            setClicked = _useState2[1];

        (0, _react.useEffect)(function () {
          if (!clicked) return;
          if (onTraverse) onTraverse(clicked);
        }, [clicked]);

        var handleClick = function handleClick(id) {
          // view if on traverse function defined
          setClicked(id);
        };

        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, item), /*#__PURE__*/_react["default"].createElement("span", {
          onClick: function onClick(e) {
            return handleClick(properties[item].properties[props.name]["default"]);
          }
        }, properties[item].properties[props.name]["default"]));
      };

      if (properties[item].properties[key].info === _constants.DOCUMENT) {
        propertiesUI[item][key]["ui:field"] = getSelect;
      }
    }
  } //custom ui:schema


  if (uiFrame && uiFrame[item]) {
    propertiesUI[item] = uiFrame[item];
  } // hide entire widget if not available in filled frame


  if (mode === _constants.VIEW && !formData.hasOwnProperty(item)) {
    propertiesUI[item] = {
      "ui:widget": "hidden"
    };
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}

var makeSubDocumentFrames = function makeSubDocumentFrames(frame, item, uiFrame, mode, formData, onTraverse) {
  var madeFrames = subDocumentTypeFrames(frame, item, uiFrame, mode, formData, onTraverse);
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
};

exports.makeSubDocumentFrames = makeSubDocumentFrames;
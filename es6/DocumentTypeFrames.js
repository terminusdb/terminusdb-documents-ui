"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentTypeFrames = DocumentTypeFrames;
exports.makeDocumentTypeFrames = makeDocumentTypeFrames;

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

function DocumentTypeFrames(frame, item, uiFrame, documents, mode, formData, isSet, onTraverse) {
  var properties = {},
      propertiesUI = {};
  var type = frame[item];
  var layout = {
    type: 'string',
    info: _constants.DOCUMENT,
    "enum": documents ? documents[type] : {}
  }; //schema

  properties[item] = layout;

  if (mode !== _constants.CREATE) {
    layout["default"] = (0, _utils.getDefaultValue)(item, formData);
  }

  function getSelect(props) {
    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        clicked = _useState2[0],
        setClicked = _useState2[1];

    (0, _react.useEffect)(function () {
      if (!clicked) return;
      if (onTraverse) onTraverse(clicked);
    }, [clicked]);

    var handleClick = function handleClick(e) {
      // view if on traverse function defined
      setClicked(e.target.value);
    };

    var opts = [];
    opts.push( /*#__PURE__*/_react["default"].createElement("option", {
      value: ""
    }, "Select ".concat(frame[item], " ...")));

    if (Array.isArray(props.schema["enum"])) {
      props.schema["enum"].map(function (enu) {
        opts.push( /*#__PURE__*/_react["default"].createElement("option", {
          value: enu
        }, enu));
      });
    } // for view mode - logic to click through on traverse


    if (mode === _constants.VIEW) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, {
        className: "col-md-1"
      }, item), /*#__PURE__*/_react["default"].createElement("span", {
        onClick: handleClick
      }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Select, {
        defaultValue: layout["default"],
        disabled: true
      }, opts)));
    } //return getRequiredSelect(item, frame[item], layout.default, props.schema.enum)

  } //default ui:schema


  propertiesUI[item] = {
    "ui:disabled": mode === _constants.EDIT && (0, _utils.checkIfKey)(item, frame["@key"]) ? true : false,
    //"ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
    "ui:placeholder": "Select ".concat(frame[item], " ..."),
    classNames: mode === _constants.VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
    "ui:field": mode === _constants.VIEW ? getSelect : _utils.getRequiredSelect
  };

  if (mode === _constants.VIEW && !layout.hasOwnProperty("default")) {
    propertiesUI[item]["ui:widget"] = "hidden";
  } //custom ui:schema


  if (uiFrame && uiFrame[item]) {
    propertiesUI[item] = uiFrame[item];
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // mandatory


function makeDocumentTypeFrames(frame, item, uiFrame, documents, mode, formData, isSet, onTraverse) {
  var madeFrames = DocumentTypeFrames(frame, item, uiFrame, documents, mode, formData, isSet, onTraverse);
  var required = item;
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI,
    required: required
  };
}
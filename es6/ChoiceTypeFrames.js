"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.choiceTypeFrames = choiceTypeFrames;
exports.makeChoiceTypeFrames = makeChoiceTypeFrames;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _constants = require("./constants");

var _reactBootstrap = require("react-bootstrap");

var _FrameHelpers = require("./FrameHelpers");

var _reactSelect = _interopRequireDefault(require("react-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function choiceTypeFrames(fullFrame, frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect, prefix) {
  var properties = {},
      propertiesUI = {};
  var anyOfArray = [];
  var extractedPrefix = (0, _utils.getPrefix)(fullFrame);

  if (frame[item] && Array.isArray(frame[item])) {
    for (var thing in frame[item][0]) {
      var newFrame = _defineProperty({}, thing, frame[item][0][thing]);

      var fieldProperties = {},
          structure = {};

      if (frame[item][0][thing] === _constants.SYS_UNIT_DATA_TYPE) {
        var getSysUnit = function getSysUnit(props) {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.name);
        };

        structure = {
          title: thing,
          info: _constants.SYS_UNIT_DATA_TYPE,
          type: "object",
          properties: _defineProperty({}, thing, {
            "type": "string"
          }),
          "default": _defineProperty({}, thing, _constants.SYS_UNIT_DATA_TYPE)
        };
        propertiesUI[thing] = {
          "ui:field": getSysUnit
        };
      } else if (frame[item][0][thing] !== _constants.SYS_UNIT_DATA_TYPE) {
        fieldProperties = (0, _FrameHelpers.getProperties)(fullFrame, newFrame, uiFrame, documents, mode, formData, false, extractedPrefix, onTraverse, onSelect);
        console.log("fieldProperties", fieldProperties);
        structure = {
          title: thing,
          info: _constants.ONEOFVALUES,
          properties: _defineProperty({}, thing, fieldProperties.properties[thing])
        };
        propertiesUI[thing] = fieldProperties.uiSchema[thing];
      }

      anyOfArray.push(structure);
    }
  }

  console.log("***anyOfArray ****", formData, anyOfArray);
  var layout = {
    title: item,
    type: "object",
    description: "Choose from the list ...",
    anyOf: anyOfArray
  }; //schema

  properties[item] = layout;
  propertiesUI[item] = {
    classNames: mode === _constants.VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"]))
  }; //custom ui:schema

  if (uiFrame && uiFrame[item]) {
    propertiesUI[item] = uiFrame[item];
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}

function makeChoiceTypeFrames(fullFrame, frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect, prefix) {
  var madeFrames = choiceTypeFrames(fullFrame, frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect, prefix);
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}
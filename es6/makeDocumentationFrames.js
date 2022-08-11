"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDocumentationFrames = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _Stack = _interopRequireDefault(require("react-bootstrap/Stack"));

var _fa = require("react-icons/fa");

var _Overlay = _interopRequireDefault(require("react-bootstrap/Overlay"));

var _reactBootstrap = require("react-bootstrap");

var _Tooltip = _interopRequireDefault(require("react-bootstrap/Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// get data type frames
function documentationTypeFrames(frame, item, uiFrame) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};
  layout = {
    type: "string",
    title: item
  };

  function displayDocumentation(props) {
    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        show = _useState2[0],
        setShow = _useState2[1];

    var target = (0, _react.useRef)(null);

    var DisplayPropertyDocumentation = function DisplayPropertyDocumentation() {
      var propertyDocuments = [];

      for (var props in frame["@properties"]) {
        propertyDocuments.push( /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
          direction: "horizontal",
          gap: 2
        }, /*#__PURE__*/_react["default"].createElement("small", {
          className: "text-gray"
        }, props), /*#__PURE__*/_react["default"].createElement("small", {
          className: "text-muted"
        }, frame["@properties"][props])));
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, propertyDocuments);
    };

    return /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
      direction: "horizontal",
      gap: 1
    }, frame["@comment"] && /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
      direction: "horizontal",
      gap: 2
    }, /*#__PURE__*/_react["default"].createElement(_fa.FaRegComment, {
      className: "text-muted"
    }), /*#__PURE__*/_react["default"].createElement("label", {
      className: "text-muted"
    }, frame["@comment"])));
  }

  uiLayout = {
    "ui:placeholder": "Search for ".concat(frame[item], " ..."),
    classNames: "tdb__input mb-3 mt-3",
    "ui:field": displayDocumentation
  }; // schema

  properties[item] = layout; // ui schema

  propertiesUI[item] = uiLayout;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}

var makeDocumentationFrames = function makeDocumentationFrames(frame, item, uiFrame) {
  var madeFrames = documentationTypeFrames(frame, item, uiFrame);
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
};

exports.makeDocumentationFrames = makeDocumentationFrames;
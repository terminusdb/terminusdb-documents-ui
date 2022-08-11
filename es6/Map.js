"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetMultiplePointMap = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLeaflet = require("react-leaflet");

var _constants = _interopRequireDefault(require("./constants"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MarkerInfo = function MarkerInfo(_ref) {
  var activeMarker = _ref.activeMarker;
  var info = [];

  for (var thing in activeMarker) {
    if (thing === "@type") continue;
    info.push( /*#__PURE__*/_react["default"].createElement("span", {
      className: "d-flex w-100"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-dark fw-bold col-md-4"
    }, "".concat(thing, ": ")), /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-dark text-break col-md-8"
    }, activeMarker[thing])));
  }

  return info;
};

var GetMultiplePointMap = function GetMultiplePointMap(props) {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeMarker = _useState2[0],
      setActiveMarker = _useState2[1];

  var data = [];

  if (Array.isArray(props.formData)) {
    props.formData.map(function (item) {
      var json = {};

      for (var thing in item) {
        json[thing.toLowerCase()] = item[thing];
      }

      data.push(json);
    });
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, props.name), /*#__PURE__*/_react["default"].createElement(_reactLeaflet.MapContainer, {
    center: [data[0].latitude, data[0].longitude],
    zoom: 7,
    scrollWheelZoom: true
  }, /*#__PURE__*/_react["default"].createElement(_reactLeaflet.TileLayer, {
    attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  }), data.map(function (eachData, index) {
    return /*#__PURE__*/_react["default"].createElement(_reactLeaflet.Marker, {
      key: index,
      position: [eachData.latitude, eachData.longitude],
      eventHandlers: {
        click: function click() {
          setActiveMarker(eachData);
        }
      },
      icon: _constants["default"]
    });
  }), activeMarker && /*#__PURE__*/_react["default"].createElement(_reactLeaflet.Popup, {
    position: [activeMarker.latitude, activeMarker.longitude],
    onClose: function onClose() {
      setActiveMarker(null);
    }
  }, /*#__PURE__*/_react["default"].createElement(MarkerInfo, {
    activeMarker: activeMarker
  }))));
};

exports.GetMultiplePointMap = GetMultiplePointMap;
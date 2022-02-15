"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapMarkers = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLeaflet = require("react-leaflet");

var _reactBootstrap = require("react-bootstrap");

var _constants = _interopRequireWildcard(require("./constants"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MapMarkers = function MapMarkers(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react["default"].createElement(_reactLeaflet.Marker, {
    key: "test_index",
    position: {
      lat: data[_constants.LAT],
      lng: data[_constants.LNG]
    },
    icon: _constants["default"]
    /*eventHandlers={{
    click: (e) => {
      alert('marker clicked')
    },
    }}*/

  }, /*#__PURE__*/_react["default"].createElement(_reactLeaflet.Popup, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react["default"].createElement("h6", {
    className: "text-dark fw-bold"
  }, "id: "), /*#__PURE__*/_react["default"].createElement("h6", {
    className: "text-dark"
  }, data["@id"])), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react["default"].createElement("h6", {
    className: "text-dark fw-bold"
  }, "latitude: "), /*#__PURE__*/_react["default"].createElement("h6", {
    className: "text-dark"
  }, data[_constants.LAT])), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react["default"].createElement("h6", {
    className: "text-dark fw-bold"
  }, "longitude: "), /*#__PURE__*/_react["default"].createElement("h6", {
    className: "text-dark"
  }, data[_constants.LNG]))));
};

exports.MapMarkers = MapMarkers;
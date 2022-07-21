"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customMapOptions = customMapOptions;
exports.customMarkerOptions = customMarkerOptions;
exports.renderPositions = renderPositions;

var _react = _interopRequireWildcard(require("react"));

var _reactLeaflet = require("react-leaflet");

var _constants = _interopRequireWildcard(require("../constants"));

var _map = require("./map.constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// custom changes to map options
function customMapOptions(zoom, center, documents) {
  var mapOptions = _map.MAP_OPTION;

  if (zoom) {
    mapOptions.zoom = zoom;
  }

  if (center) {
    mapOptions.center = center;
  }

  if (center === undefined && Array.isArray(documents)) {
    var extractedCenter = documents[0];
    mapOptions.center = extractedCenter;
  }

  return mapOptions;
} // custom changes to marker options


function customMarkerOptions(icon) {
  var markerOptions = _map.MARKER_OPTION;

  if (icon) {
    var custom = L.divIcon({
      className: 'custom-div-icon',
      html: "<div style='background-color:#c30b82;' class='marker-pin'></div><i class='material-icons'></i>",
      iconSize: [30, 42],
      iconAnchor: [15, 42]
    });
    return {
      icon: custom
    };
  }

  return markerOptions;
}

var MarkerInfo = function MarkerInfo(_ref) {
  var clicked = _ref.clicked;
  var info = [];

  for (var thing in clicked) {
    if (thing === "@type") continue;
    if (thing === _constants.REFRESH) continue;
    info.push( /*#__PURE__*/_react["default"].createElement("div", {
      className: "w-100 mr-4"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-dark fw-bold col-md-4"
    }, "".concat(thing, ": ")), /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-dark text-break col-md-8"
    }, clicked[thing])));
  }

  return info;
};

function renderPositions(positions, onMarkerClick, polyLine, mapRef) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, positions.map(function (position, index) {
    return /*#__PURE__*/_react["default"].createElement(_reactLeaflet.Marker, {
      key: index,
      position: [position.lat, position.lng],
      icon: _constants["default"],
      eventHandlers: {
        click: function click() {
          setClicked(position);
          var cData = position;
          cData[_constants.REFRESH] = Date.now();
          onMarkerClick(position);
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactLeaflet.Popup, null, /*#__PURE__*/_react["default"].createElement(MarkerInfo, {
      clicked: clicked
    })));
  }), Array.isArray(polyLine) && polyLine.map(function (pl) {
    //console.log("pl.data", pl.data)
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactLeaflet.Polyline, {
      color: pl.color,
      positions: pl.data
    }));
  }));
}
/*
return <>
<Polyline color={pl.color} positions={pl.data} arrowheads />
</>*/
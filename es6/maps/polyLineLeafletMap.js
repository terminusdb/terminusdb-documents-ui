"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolyLineLeafletMap = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLeaflet = require("react-leaflet");

var _constants = _interopRequireWildcard(require("../constants"));

var _markers = require("./markers");

require("leaflet-arrowheads");

var _leaflet = _interopRequireDefault(require("leaflet"));

var _map = require("./map.constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PolyLineLeafletMap = function PolyLineLeafletMap(_ref) {
  var polyLine = _ref.polyLine,
      onMarkerClick = _ref.onMarkerClick,
      center = _ref.center,
      zoom = _ref.zoom;
  (0, _react.useEffect)(function () {
    map();
  }, []); //console.log("polyLine in LeafletMap", polyLine, polyLine.data)

  var map = function map() {
    var mapOptions = (0, _markers.customMapOptions)(zoom, center);
    var markerOptions = (0, _markers.customMarkerOptions)(_constants["default"]);

    var map = _leaflet["default"].map("map-leaflet-id-polylines", mapOptions);

    var tileLayer = new _leaflet["default"].TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });
    tileLayer.addTo(map); //var polyline = L.polyline(polyLine.data, {color: polyLine.color}).addTo(map)

    var polyline = _leaflet["default"].polyline(polyLine.data, {
      color: polyLine.color
    }).addTo(map); // zoom the map to the polyline


    map.fitBounds(polyline.getBounds());
    window.map = map;
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "map-leaflet-id-polylines",
    style: {
      height: "100vh"
    }
  });
};

exports.PolyLineLeafletMap = PolyLineLeafletMap;
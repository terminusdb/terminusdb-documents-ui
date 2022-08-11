"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeoJSONLeafletMap = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLeaflet = require("react-leaflet");

var _constants = _interopRequireWildcard(require("../constants"));

var _markers = require("./markers");

require("leaflet-arrowheads");

var _leaflet = _interopRequireDefault(require("leaflet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var GeoJSONLeafletMap = function GeoJSONLeafletMap(_ref) {
  var geojsonFeature = _ref.geojsonFeature,
      onMarkerClick = _ref.onMarkerClick,
      zoom = _ref.zoom,
      center = _ref.center,
      icon = _ref.icon;
  (0, _react.useEffect)(function () {
    map();
  }, []);

  var map = function map() {
    var mapOptions = (0, _markers.customMapOptions)(zoom, center);
    var markerOptions = (0, _markers.customMarkerOptions)(icon);

    var map = _leaflet["default"].map("map-geojson-leaflet-id", mapOptions);

    var tileLayer = new _leaflet["default"].tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    tileLayer.addTo(map);

    _leaflet["default"].geoJSON(geojsonFeature, {
      pointToLayer: function pointToLayer(feature, latlng) {
        return _leaflet["default"].marker(latlng, markerOptions);
      }
    }).addTo(map);

    window.map = map;
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "map-geojson-leaflet-id",
    style: {
      height: "100vh"
    }
  });
};

exports.GeoJSONLeafletMap = GeoJSONLeafletMap;
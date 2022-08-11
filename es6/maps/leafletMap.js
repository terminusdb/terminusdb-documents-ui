"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeafletMap = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLeaflet = require("react-leaflet");

var _constants = _interopRequireWildcard(require("../constants"));

var _markers = require("./markers");

require("leaflet-arrowheads");

var _leaflet = _interopRequireDefault(require("leaflet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LeafletMap = function LeafletMap(_ref) {
  var documents = _ref.documents,
      onMarkerClick = _ref.onMarkerClick,
      zoom = _ref.zoom,
      center = _ref.center,
      icon = _ref.icon;
  (0, _react.useEffect)(function () {
    map();
  }, []);

  var map = function map() {
    var mapOptions = (0, _markers.customMapOptions)(zoom, center, documents);
    var markerOptions = (0, _markers.customMarkerOptions)(icon);

    var map = _leaflet["default"].map("map-leaflet-id", mapOptions);

    var tileLayer = new _leaflet["default"].tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    tileLayer.addTo(map); // Draw Markers

    documents.map(function (docs) {
      var coord = {
        id: docs.id,
        name: docs.name,
        lat: docs.lat,
        lng: docs.lng
      }; // set lat and long
      //let marker = L.marker(coord , markerOptions).bindPopup(`hellotest`).openPopup()

      var marker = _leaflet["default"].marker(coord, markerOptions).bindPopup("lat: ".concat(coord.lat, " lng: ").concat(coord.lng)).on('click', function (e) {
        //let cData = coord.id
        var cData = coord;
        cData[_constants.REFRESH] = Date.now();
        if (onMarkerClick) onMarkerClick(cData);
      });

      marker.addTo(map);
    });
    window.map = map;
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "map-leaflet-id",
    style: {
      height: "100vh"
    }
  });
};

exports.LeafletMap = LeafletMap;
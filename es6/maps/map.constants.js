"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MARKER_OPTION = exports.MAP_OPTION = exports.ARROW_OPTION = void 0;

var _constants = _interopRequireDefault(require("../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MAP_OPTION = {
  center: [15.2999988, -61.3833318],
  //center: [45.51, -122.68],
  zoom: 11,
  zoomDelta: 0.5,
  zoomSnap: 0,
  wheelPxPerZoomLevel: 100
}; // Options for the marker

exports.MAP_OPTION = MAP_OPTION;
var MARKER_OPTION = {
  clickable: true,
  icon: _constants["default"]
}; // arrow options

exports.MARKER_OPTION = MARKER_OPTION;
var ARROW_OPTION = {
  yawn: 50,
  // width of the opening of the arrowhead
  size: '4%',
  // size of the arrowhead.
  frequency: 2,
  // How many arrowheads are rendered on a polyline.
  fill: 2,
  offsets: {
    end: "15px"
  }
};
exports.ARROW_OPTION = ARROW_OPTION;
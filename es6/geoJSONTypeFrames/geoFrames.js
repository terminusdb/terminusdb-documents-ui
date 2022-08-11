"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGeoFrames = void 0;

var _constants = require("../constants");

var _pointTypeFrames = require("./pointTypeFrames");

var _lineStringType = require("./lineStringType");

var _multiPolygonType = require("./multiPolygonType");

var _polygonType = require("./polygonType");

function geoTypeFrames(frame, item, uiFrame, mode, formData, documentation) {
  if (frame.hasOwnProperty(_constants.DIMENSION) && frame[_constants.DIMENSION] === _constants.POINT_TYPE_DIMENSION) return (0, _pointTypeFrames.pointType)(frame, item, uiFrame, mode, formData, documentation);else if (frame.hasOwnProperty(_constants.DIMENSION) && frame[_constants.DIMENSION] === _constants.LINE_STRING_TYPE_DIMENSION) return (0, _lineStringType.lineStringType)(frame, item, uiFrame, mode, formData);else if (frame.hasOwnProperty(_constants.DIMENSION) && frame[_constants.DIMENSION] === _constants.POLYGON_STRING_TYPE_DIMENSION && frame["info"] === _constants.MULTIPOLYGON) return (0, _multiPolygonType.multiPolygonType)(frame, item, uiFrame, mode, formData);else if (frame.hasOwnProperty(_constants.DIMENSION) && frame[_constants.DIMENSION] === _constants.POLYGON_STRING_TYPE_DIMENSION && frame["info"] === _constants.POLYGON) return (0, _polygonType.polygonType)(frame, item, uiFrame, mode, formData);
}

var makeGeoFrames = function makeGeoFrames(frame, item, uiFrame, mode, formData, documentation) {
  var madeFrames = geoTypeFrames(frame, item, uiFrame, mode, formData, documentation);
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
};

exports.makeGeoFrames = makeGeoFrames;
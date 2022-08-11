"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGeoCollectionFrames = void 0;

var _constants = require("../constants");

var _pointTypeFrames = require("./pointTypeFrames");

var _lineStringType = require("./lineStringType");

var _multiPolygonType = require("./multiPolygonType");

var _polygonType = require("./polygonType");

var _featureCollectionTypeFrames = require("./featureCollectionTypeFrames");

function geoCollectionTypeFrames(frame, item, uiFrame, mode, formData) {
  return (0, _featureCollectionTypeFrames.featureCollectionType)(frame[item], item, uiFrame, mode, formData);
}

var makeGeoCollectionFrames = function makeGeoCollectionFrames(frame, item, uiFrame, mode, formData) {
  var madeFrames = geoCollectionTypeFrames(frame, item, uiFrame, mode, formData);
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
};

exports.makeGeoCollectionFrames = makeGeoCollectionFrames;
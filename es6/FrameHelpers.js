"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProperties = getProperties;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _dataTypeFrames = require("./dataTypeFrames/dataTypeFrames");

var _sysDataTypeFrames = require("./sysDataTypeFrames/sysDataTypeFrames");

var _subDocumentTypeFrames = require("./subDocumentTypeFrames/subDocumentTypeFrames");

var _optionalTypeFrames = require("./optionalTypeFrames/optionalTypeFrames");

var _documentTypeFrames = require("./documentTypeFrames/documentTypeFrames");

var _setTypeFrames = require("./setTypeFrames/setTypeFrames");

var _listTypeFrames = require("./listTypeFrames/listTypeFrames");

var _enumTypeFrames = require("./enumTypeFrames/enumTypeFrames");

var _choiceSubDocumentTypeFrames = require("./choiceSubDocumentTypeFrames/choiceSubDocumentTypeFrames");

var _choiceDocumentTypeFrames = require("./choiceDocumentTypeFrames/choiceDocumentTypeFrames");

var _oneOfTypeFrames = require("./oneOfTypeFrames/oneOfTypeFrames");

var _makeDocumentationFrames = require("./makeDocumentationFrames");

var _utils = require("./utils");

var _constants = require("./constants");

var _GeoCordinatesTypeFrames = require("./GeoCordinatesTypeFrames");

var _geoFrames = require("./geoJSONTypeFrames/geoFrames");

var _geoCollectionFrames = require("./geoJSONTypeFrames/geoCollectionFrames");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function constructOptionalFrame(frame, item) {
  var optionalFrame = _defineProperty({}, item, frame["@class"]);

  return optionalFrame;
}

function constructSetFrame(frame, item) {
  var setFrame = _defineProperty({}, item, frame["@class"]);

  return setFrame;
}

function constructCollectionFrame(fullFrame, item) {
  if (fullFrame.hasOwnProperty(item)) {
    return _defineProperty({}, item, fullFrame[item]);
  }

  return {};
}
/*
@id: "SetSubDocumentType/51f602b5529f8c94e56a38d456e584cd0ab63cee6cc9069bf9ee81e7970cfd56"
@type: "SetSubDocumentType"
subDoc: (2) [{…}, {…}]*/


function constructSubDocumentFrame(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
  var subDocumentName = item;
  var subDocument = "".concat(subDocumentName);
  var subDocumentFormData = formData && formData.hasOwnProperty(current) ? formData[current] : {};
  var constructedFrame = fullFrame[subDocument];

  if (Object.keys(subDocumentFormData).length === 0 && Array.isArray(formData)) {
    constructedFrame["info"] = _constants.SUBDOCUMENT_CONSTRUCTED_FRAME;
  }

  var documentation = (0, _utils.extractDocumentation)(fullFrame, item);
  var subDocumentFrames = getProperties(fullFrame, current, constructedFrame, uiFrame, mode, subDocumentFormData, onTraverse, onSelect, documentation);
  var newSubDocumentFrames = {}; // add subdocument type as @type field

  subDocumentFrames.properties["@type"] = {
    type: "string",
    title: subDocumentName,
    "default": subDocumentName
  }; // hide @type field

  subDocumentFrames.uiSchema["@type"] = {
    "ui:widget": "hidden"
  }; //console.log("subDocumentFrames", subDocumentFrames)

  return subDocumentFrames;
}

function getProperties(fullFrame, current, frame, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  var properties = {},
      propertiesUI = {},
      dependencies = {},
      required = [],
      fields = {};

  for (var item in frame) {
    if (item === "asset_history") {//console.log("ubicación ")
    }

    if (item === "@key") continue;else if (item === "@type") continue;else if (item === "@subdocument") continue;else if (item === _constants.DOCUMENTATION) {
      var frames = (0, _makeDocumentationFrames.makeDocumentationFrames)(frame[item], item, uiFrame);
      properties[item] = frames.properties[item];
      propertiesUI[item] = frames.propertiesUI[item];
    } else if (item === "@oneOf") {
      // datatype properties like xsd:/ xdd:
      var _frames = (0, _oneOfTypeFrames.makeOneOfTypeFrames)(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect); // current is the proeprty name - instead of @oneOf


      properties["@oneOf"] = _frames.properties[current];
      propertiesUI["@oneOf"] = _frames.propertiesUI[current];
    } else if (frame[item] && (0, _utils.isSysDataType)(frame[item])) {
      // datatype properties like sys:JSON
      var _frames2 = (0, _sysDataTypeFrames.makeSysDataTypeFrames)(frame, item, uiFrame, mode, formData, documentation);

      properties[item] = _frames2.properties[item];
      propertiesUI[item] = _frames2.propertiesUI[item];
      required.push(item);
    } else if (frame[item] && (0, _utils.isDataType)(frame[item])) {
      // datatype properties like xsd:/ xdd:
      var _frames3 = (0, _dataTypeFrames.makeDataTypeFrames)(frame, item, uiFrame, mode, formData, documentation);

      properties[item] = _frames3.properties[item];
      propertiesUI[item] = _frames3.propertiesUI[item];
      required.push(item);
    } else if (frame[item] && (0, _utils.isChoiceSubDocumentType)(frame[item])) {
      // choice Sub Document
      //let constructedChoiceFrame = constructOptionalFrame(frame[item], item)
      //console.log("constructedChoiceFrame", constructedChoiceFrame)
      var _frames4 = (0, _choiceSubDocumentTypeFrames.makeChoiceSubDocumentTypeFrames)(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation);

      properties[item] = _frames4.properties[item];
      propertiesUI[item] = _frames4.propertiesUI[item];
      required.push(item);
    } else if (frame[item] && (0, _utils.isChoiceDocumentType)(frame[item])) {
      // choice Document
      var _frames5 = (0, _choiceDocumentTypeFrames.makeChoiceDocumentTypeFrames)(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation);

      properties[item] = _frames5.properties[item];
      propertiesUI[item] = _frames5.propertiesUI[item];
      required.push(item);
    } else if (frame[item] && (0, _utils.isOptionalType)(frame[item])) {
      // optional 
      var constructedOptionalFrame = constructOptionalFrame(frame[item], item);
      var optionalProperties = getProperties(fullFrame, item, constructedOptionalFrame, uiFrame, mode, formData, onTraverse, onSelect, documentation);
      var optionalFrames = (0, _optionalTypeFrames.makeOptionalTypeFrames)(optionalProperties, item, uiFrame, mode, formData); //set properties and ui

      properties[item] = optionalFrames.properties[item];
      propertiesUI[item] = optionalFrames.propertiesUI[item];
    } else if (frame[item] && (0, _utils.isPointType)(frame[item], fullFrame)) {
      var subDocumentName = frame[item].hasOwnProperty("@class") ? frame[item]["@class"] : null;
      var subDocumentFrame = constructSubDocumentFrame(fullFrame, item, frame[item], subDocumentName, uiFrame, mode, formData, onTraverse, onSelect);
      var pointFrames = (0, _subDocumentTypeFrames.makeSubDocumentFrames)(subDocumentFrame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation); //set properties and ui

      properties[item] = pointFrames.properties[item];
      propertiesUI[item] = pointFrames.propertiesUI[item];
    } else if (frame[item] && item === _constants.COORDINATES && (0, _utils.isDocumentClassArrayType)(frame[item])) {
      // coordinates for geo json
      var newGeoFrame = (0, _utils.getModifiedGeoFrame)(frame);
      var geoFrame = (0, _geoFrames.makeGeoFrames)(newGeoFrame, item, uiFrame, mode, formData, documentation); //set properties and ui

      properties[item] = geoFrame.properties[item];
      propertiesUI[item] = geoFrame.propertiesUI[item];
    } else if (frame[item] && (0, _utils.isSetType)(frame[item]) && (0, _utils.isGeoJSONTypeSet)(frame, mode)) {
      //geo json set
      var newGeoCollectionFrame = constructCollectionFrame(fullFrame, frame[item]["@class"]);
      var geoCollectionFrame = (0, _geoCollectionFrames.makeGeoCollectionFrames)(newGeoCollectionFrame, item, uiFrame, mode, formData); //set properties and ui

      properties[item] = geoCollectionFrame.properties[item];
      propertiesUI[item] = geoCollectionFrame.propertiesUI[item];
    } else if (frame[item] && (0, _utils.isSubDocumentType)(frame[item])) {
      //subdocument
      var _subDocumentName = frame[item].hasOwnProperty("@class") ? frame[item]["@class"] : null;

      var _subDocumentFrame = constructSubDocumentFrame(fullFrame, item, frame[item], _subDocumentName, uiFrame, mode, formData, onTraverse, onSelect);

      var _frames6 = (0, _subDocumentTypeFrames.makeSubDocumentFrames)(_subDocumentFrame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation); //set properties and ui


      properties[item] = _frames6.properties[item];
      propertiesUI[item] = _frames6.propertiesUI[item]; //if(frames.hasOwnProperty("required"))
      //required = item
    } else if (frame[item] && (0, _utils.isSubDocumentAndClassType)(frame[item], fullFrame)) {
      //subdocument and type class
      var newFrame = (0, _utils.isSubDocumentAndClassType)(frame[item], fullFrame);
      var classType = frame[item];
      var subDocumentFrames = constructSubDocumentFrame(fullFrame, item, newFrame, classType, uiFrame, mode, formData, onTraverse, onSelect); //console.log("newFrame", subDocumentFrames)

      var _frames7 = (0, _subDocumentTypeFrames.makeSubDocumentFrames)(subDocumentFrames, item, uiFrame, mode, formData, onTraverse, onSelect); //set properties and ui


      properties[item] = _frames7.properties[item];
      propertiesUI[item] = _frames7.propertiesUI[item];
    } else if (frame[item] && (0, _utils.isDocumentType)(frame[item], fullFrame)) {
      //link documents
      var _frames8 = (0, _documentTypeFrames.makeDocumentTypeFrames)(frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation); //set properties and ui


      properties[item] = _frames8.properties[item];
      propertiesUI[item] = _frames8.propertiesUI[item];
      required.push(item);
    } else if (frame[item] && (0, _utils.isSetType)(frame[item])) {
      //set
      var constructedSetFrame = constructSetFrame(frame[item], item);
      var setProperties = getProperties(fullFrame, item, constructedSetFrame, uiFrame, mode, formData, onTraverse, onSelect, documentation);
      var setFrames = (0, _setTypeFrames.makeSetTypeFrames)(setProperties, item, uiFrame, mode, formData, onTraverse, onSelect, fullFrame, documentation); //set properties and ui

      properties[item] = setFrames.properties[item];
      propertiesUI[item] = setFrames.propertiesUI[item];
    } else if (frame[item] && (0, _utils.isListType)(frame[item])) {
      //list
      var constructedListFrame = constructSetFrame(frame[item], item);

      var _setProperties = getProperties(fullFrame, item, constructedListFrame, uiFrame, mode, formData, onTraverse, onSelect, documentation);

      var _setFrames = (0, _listTypeFrames.makeListTypeFrames)(_setProperties, item, uiFrame, mode, formData, onTraverse, onSelect, fullFrame, documentation); //set properties and ui


      properties[item] = _setFrames.properties[item];
      propertiesUI[item] = _setFrames.propertiesUI[item];
    } else if (frame[item] && (0, _utils.isEnumType)(frame[item])) {
      // enums
      var _frames9 = (0, _enumTypeFrames.makeEnumTypeFrames)(frame, item, uiFrame, mode, formData, documentation); //set properties and ui


      properties[item] = _frames9.properties[item];
      propertiesUI[item] = _frames9.propertiesUI[item];
      required.push(item);
    }
  }

  return {
    properties: properties,
    required: required,
    //dependencies: dependencies,
    uiSchema: propertiesUI //fields: fields

  };
}
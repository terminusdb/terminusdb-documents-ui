"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProperties = getProperties;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _DataTypeFrames = require("./DataTypeFrames");

var _SubDocumentTypeFrames = require("./SubDocumentTypeFrames");

var _SetTypeFrames = require("./SetTypeFrames");

var _SetTypeClassFrames = require("./SetTypeClassFrames");

var _ListTypeFrames = require("./ListTypeFrames");

var _DocumentTypeFrames = require("./DocumentTypeFrames");

var _EnumTypeFrames = require("./EnumTypeFrames");

var _utils = require("./utils");

var _constants = require("./constants");

var _OptionalTypeFrames = require("./OptionalTypeFrames");

var _ChoiceTypeFrames = require("./ChoiceTypeFrames");

var _GeoCordinatesTypeFrames = require("./GeoCordinatesTypeFrames");

var _OneOfClassFrames = require("./OneOfClassFrames");

var _GeoFrames = require("./GeoFrames");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function constructNewDocumentFrame(frame, item) {
  var newFrame = _defineProperty({}, item, frame["@class"]);

  return newFrame;
}

function constructSubDocumentFrame(fullFrame, uiFrame, item, title, documents, mode, formData, prefix, onTraverse, onSelect) {
  var subDocument = "".concat(prefix).concat(title);
  var data = [];
  if (formData && formData[item]) data = formData[item];
  var nestedFrames = getProperties(fullFrame, fullFrame[subDocument], uiFrame, documents, mode, data, false, prefix, onTraverse, onSelect);
  var newProperties = nestedFrames.properties,
      newUISchema = nestedFrames.uiSchema; // add type of subdocument

  newProperties["@type"] = {
    type: "string",
    title: title,
    "default": title
  };
  nestedFrames.properties = newProperties;
  nestedFrames.required = nestedFrames.required; // make type of sub document hidden

  newUISchema["@type"] = {
    "ui:widget": "hidden"
  };
  nestedFrames.uiSchema = newUISchema;
  return nestedFrames;
}

function getProperties(fullFrame, frame, uiFrame, documents, mode, formData, isSet, prefix, onTraverse, onSelect) {
  var properties = {},
      propertiesUI = {},
      dependencies = {},
      required = [],
      fields = {}; //console.log("frame",frame)

  for (var item in frame) {
    if (item === "@key") continue;else if (item === "@type") continue;else if (item.toUpperCase() === _constants.LATITUDE.toUpperCase() && mode === _constants.VIEW) {
      var _frames = (0, _GeoCordinatesTypeFrames.makeGeoCordinateFrames)(frame, item, uiFrame, mode, formData, isSet); //set properties and ui


      properties[item] = _frames.properties[item];
      propertiesUI[item] = _frames.propertiesUI[item];
    } else if (item.toUpperCase() === _constants.LONGITUDE.toUpperCase() && mode === _constants.VIEW) {} else if (item === "@oneOf") {
      //choice
      var _frames2 = (0, _ChoiceTypeFrames.makeChoiceTypeFrames)(fullFrame, frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect, prefix); //set properties and ui


      properties[item] = _frames2.properties[item];
      propertiesUI[item] = _frames2.propertiesUI; //[item]
    } else if (frame[item] && (0, _utils.isDataType)(frame[item])) {
      // datatype properties like xsd:/ xdd:
      var _frames3 = (0, _DataTypeFrames.makeDataTypeFrames)(frame, item, uiFrame, mode, formData); //console.log("frames,", JSON.stringify(frames, null, 2))
      //set properties and ui


      properties[item] = _frames3.properties[item];
      propertiesUI[item] = _frames3.propertiesUI[item];
      required.push(_frames3.required);
    } else if (frame[item] && (0, _utils.isOptionalType)(frame[item])) {
      // optional
      var newFrame = constructNewDocumentFrame(frame[item], item);

      if (Array.isArray(newFrame[item])) {
        //let frames = makeChoiceDocumentTypeFrames(newFrame, item, uiFrame, documents,  mode, formData, onTraverse, onSelect)
        var _frames4 = (0, _OneOfClassFrames.makeOneOfClassFrames)(fullFrame, newFrame, item, uiFrame, mode, formData, prefix, onTraverse, onSelect); //set properties and ui


        properties[item] = _frames4.properties[item];
        propertiesUI[item] = _frames4.propertiesUI; //[item]
      } else {
        var optionalProperties = getProperties(fullFrame, newFrame, uiFrame, documents, mode, formData, false, prefix, onTraverse, onSelect);
        var optionalFrames = (0, _OptionalTypeFrames.OptionalDocumentTypeFrames)(optionalProperties, item, mode, onSelect); //set properties and ui

        properties[item] = optionalFrames.properties[item];
        propertiesUI[item] = optionalFrames.uiSchema[item];
      }
    } else if (frame[item] && (0, _utils.isSetType)(frame[item])) {
      //set
      var _newFrame2 = constructNewDocumentFrame(frame[item], item);

      if (Array.isArray(_newFrame2[item])) {
        //let frames = makeOneOfClassFrames(fullFrame, newFrame, item, uiFrame,  mode, formData, prefix)
        var _frames5 = (0, _SetTypeClassFrames.makeSetOneOfClassFrames)(fullFrame, _newFrame2, item, uiFrame, mode, formData, prefix, onTraverse, onSelect); //set properties and ui


        properties[item] = _frames5.properties[item]; //propertiesUI[item] = frames.propertiesUI[item]

        for (var things in _frames5.propertiesUI) {
          propertiesUI[things] = _frames5.propertiesUI[things];
        }
      } else {
        var setFrames = getProperties(fullFrame, _newFrame2, uiFrame, documents, mode, formData, true, prefix, onTraverse, onSelect);
        if (setFrames.required) delete setFrames["required"]; //console.log("setFrames", setFrames, item, newFrame)

        if (Object.keys(setFrames.properties).length === 0) continue; // skip if no properties are found

        var frames;

        if (setFrames.properties[item].info === _constants.DOCUMENT || setFrames.properties[item].info === _constants.ENUM) {
          // if ismulti for react select
          frames = (0, _SetTypeFrames.makeSetDocuments)(setFrames, item, frame[item]["@class"], uiFrame, mode, formData, onTraverse, onSelect); //set properties and ui

          properties[item] = frames.properties[item];
          propertiesUI[item] = frames.propertiesUI[item];
        } else if (setFrames.properties[item].info === _constants.DATA) {
          //data
          frames = (0, _SetTypeFrames.makeSetData)(setFrames, item, uiFrame, mode, formData); //set properties and ui

          properties[item] = frames.properties[item];
          propertiesUI[item] = frames.propertiesUI[item];
        } //GeoCoordinates
        else if (_newFrame2 && _newFrame2.hasOwnProperty(item) && _newFrame2[item].hasOwnProperty("@class") && _newFrame2[item]["@class"] === _constants.GEO_CORDINATES) {
          var _frames6 = (0, _GeoCordinatesTypeFrames.makeMultipleGeoCordinateFrames)(frame, item, uiFrame, mode, formData, isSet); //set properties and ui


          properties[item] = _frames6.properties[item];
          propertiesUI[item] = _frames6.propertiesUI[item];
        } else {
          // sub documents
          frames = (0, _SetTypeFrames.makeSetSubDocuments)(setFrames, item, uiFrame, mode, formData, onTraverse); //set properties and ui

          console.log("frames", frames);
          properties[item] = frames.properties[item];
          propertiesUI[item] = frames.propertiesUI[item];
        }
      }
    } else if (frame[item] && (0, _utils.isListType)(frame[item])) {
      //list
      var _newFrame3 = constructNewDocumentFrame(frame[item], item);

      if (Array.isArray(_newFrame3[item])) {
        //let frames = makeOneOfClassFrames(fullFrame, newFrame, item, uiFrame,  mode, formData, prefix)
        var _frames7 = (0, _SetTypeClassFrames.makeSetOneOfClassFrames)(fullFrame, _newFrame3, item, uiFrame, mode, formData, prefix, onTraverse, onSelect); //set properties and ui


        properties[item] = _frames7.properties[item]; //propertiesUI[item] = frames.propertiesUI[item]

        for (var things in _frames7.propertiesUI) {
          propertiesUI[things] = _frames7.propertiesUI[things];
        }
      } else {
        var listFrames = getProperties(fullFrame, _newFrame3, uiFrame, documents, mode, formData, true, prefix, onTraverse, onSelect); //if(listFrames.required) delete listFrames["required"]
        //console.log("setFrames", setFrames, item, newFrame)

        if (Object.keys(listFrames.properties).length === 0) continue; // skip if no properties are found

        var frames;

        if (listFrames.properties[item].info === _constants.DOCUMENT || listFrames.properties[item].info === _constants.ENUM) {
          // if ismulti for react select
          frames = (0, _ListTypeFrames.makeListDocuments)(listFrames, item, uiFrame, mode, formData, onTraverse); //set properties and ui

          properties[item] = frames.properties[item];
          propertiesUI[item] = frames.propertiesUI[item];
        } else if (listFrames.properties[item].info === _constants.DATA) {
          //data
          frames = (0, _ListTypeFrames.makeListData)(listFrames, item, uiFrame, mode, formData); //set properties and ui

          properties[item] = frames.properties[item];
          propertiesUI[item] = frames.propertiesUI[item];
        } else {
          // sub documents
          frames = (0, _ListTypeFrames.makeListSubDocuments)(listFrames, item, uiFrame, mode, formData, onTraverse); //set properties and ui

          properties[item] = frames.properties[item];
          propertiesUI[item] = frames.propertiesUI[item];
        }
      }
    } else if (frame[item] && (0, _utils.isDocumentType)(frame[item], fullFrame, prefix)) {
      //link documents
      var _frames8 = (0, _DocumentTypeFrames.makeDocumentTypeFrames)(frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect); //set properties and ui


      properties[item] = _frames8.properties[item];
      propertiesUI[item] = _frames8.propertiesUI[item];
      required.push(_frames8.required);
    } else if (frame[item] && (0, _utils.isEnumType)(frame[item])) {
      // enums
      var _frames9 = (0, _EnumTypeFrames.makeEnumTypeFrames)(frame[item], item, uiFrame, mode, formData, isSet, onSelect); //set properties and ui


      properties[item] = _frames9.properties[item];
      propertiesUI[item] = _frames9.propertiesUI[item];
      required.push(_frames9.required);
    } else if (frame[item] && (0, _utils.isSubDocumentType)(frame[item])) {
      //subdocument
      //let subDocumentFrame=fullFrame[`${TDB_SCHEMA}${frame[item]["@class"]}`]
      var _newFrame4 = constructSubDocumentFrame(fullFrame, uiFrame, item, frame[item]["@class"], documents, mode, formData, prefix, onTraverse, onSelect);

      var _frames10 = (0, _SubDocumentTypeFrames.makeSubDocumentFrames)(_newFrame4, item, uiFrame, mode, formData, onTraverse, onSelect); //set properties and ui


      properties[item] = _frames10.properties[item];
      propertiesUI[item] = _frames10.propertiesUI[item];
    } else if (frame[item] && (0, _utils.isSubDocumentAndClassType)(frame[item], fullFrame, prefix)) {
      //subdocument and type class
      //let subDocumentFrame=fullFrame[`${TDB_SCHEMA}${frame[item]["@class"]}`]
      var _newFrame5 = constructSubDocumentFrame(fullFrame, uiFrame, item, frame[item], documents, mode, formData, prefix, onTraverse, onSelect);

      var _frames11 = (0, _SubDocumentTypeFrames.makeSubDocumentFrames)(_newFrame5, item, uiFrame, mode, formData, onTraverse, onSelect); //set properties and ui


      properties[item] = _frames11.properties[item];
      propertiesUI[item] = _frames11.propertiesUI[item];
    } else if (frame[item] && item === _constants.COORDINATES && (0, _utils.isDocumentClassArrayType)(frame[item])) {
      // coordinates for geo json
      var geoFrame = (0, _GeoFrames.makeGeoFrames)(frame[item], item, uiFrame, mode, formData); //set properties and ui

      properties[item] = geoFrame.properties[item];
      propertiesUI[item] = geoFrame.propertiesUI[item];
    } else if (Array.isArray(frame[item]) && !frame[item].hasOwnProperty("@type") && item !== _constants.SUBDOCUMENT) {
      // a choice property with no type
      //let frames = makeChoiceDocumentTypeFrames(newFrame, item, uiFrame, documents,  mode, formData, onTraverse, onSelect)
      var _newFrame6 = _defineProperty({}, item, frame[item]);

      var _frames12 = (0, _OneOfClassFrames.makeOneOfClassFrames)(fullFrame, _newFrame6, item, uiFrame, mode, formData, prefix, onTraverse, onSelect); //set properties and ui


      properties[item] = _frames12.properties[item];
      propertiesUI[item] = _frames12.propertiesUI[item];
    }
  } //console.log("required", required)


  return {
    properties: properties,
    required: required,
    dependencies: dependencies,
    uiSchema: propertiesUI,
    fields: fields
  };
}
/* single choice frames
 if(Array.isArray(newFrame[item])){
                //let frames = makeChoiceDocumentTypeFrames(newFrame, item, uiFrame, documents,  mode, formData, onTraverse, onSelect)
                let frames = makeOneOfClassFrames(fullFrame, newFrame, item, uiFrame,  mode, formData, prefix)
                //set properties and ui
                properties[item] = frames.properties[item]
                propertiesUI[item] = frames.propertiesUI//[item]
            }
            */
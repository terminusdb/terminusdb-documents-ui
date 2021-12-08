"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProperties = getProperties;

var _react = _interopRequireDefault(require("react"));

var _DataTypeFrames = require("./DataTypeFrames");

var _SubDocumentTypeFrames = require("./SubDocumentTypeFrames");

var _SetTypeFrames = require("./SetTypeFrames");

var _DocumentTypeFrames = require("./DocumentTypeFrames");

var _EnumTypeFrames = require("./EnumTypeFrames");

var _utils = require("./utils");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function constructNewDocumentFrame(frame, item) {
  var newFrame = _defineProperty({}, item, frame["@class"]);

  return newFrame;
}

function constructSubDocumentFrame(fullFrame, uiFrame, item, title, documents, mode, formData, prefix, onTraverse) {
  var subDocument = "".concat(prefix).concat(title);
  var data = [];
  if (formData && formData[item]) data = formData[item];
  var nestedFrames = getProperties(fullFrame, fullFrame[subDocument], uiFrame, documents, mode, data, false, prefix, onTraverse);
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

function getProperties(fullFrame, frame, uiFrame, documents, mode, formData, isSet, prefix, onTraverse) {
  var properties = {},
      propertiesUI = {},
      dependencies = {},
      required = [],
      fields = {};

  for (var item in frame) {
    if (item == "@key") continue;else if (item == "@type") continue;else if (frame[item] && (0, _utils.isDataType)(frame[item])) {
      // datatype properties like xsd:/ xdd:
      var _frames = (0, _DataTypeFrames.makeDataTypeFrames)(frame, item, uiFrame, mode, formData, isSet); //set properties and ui


      properties[item] = _frames.properties[item];
      propertiesUI[item] = _frames.propertiesUI[item];
      required.push(_frames.required);
    } else if (frame[item] && (0, _utils.isOptionalType)(frame[item])) {
      // optional
      var newFrame = constructNewDocumentFrame(frame[item], item);
      var optionalFrames = getProperties(fullFrame, newFrame, uiFrame, documents, mode, formData, false, prefix, onTraverse);

      if (mode !== _constants.VIEW) {
        if (optionalFrames.properties[item] && optionalFrames.properties[item].properties) {
          // these for optional sets
          for (var props in optionalFrames.properties[item].properties) {
            if (optionalFrames.properties[item].properties[props].info === _constants.DOCUMENT) {
              optionalFrames.uiSchema[item][props]["ui:field"] = _utils.getOptionalSelect;
            }
          }
        } else {
          if (optionalFrames.properties[item].info === _constants.DOCUMENT) {
            optionalFrames.uiSchema[item]["ui:field"] = _utils.getOptionalSelect;
          }
        }
      } // remove required


      if (Array.isArray(optionalFrames.properties[item].required)) {
        delete optionalFrames.properties[item].required;
      } //set properties and ui


      properties[item] = optionalFrames.properties[item];
      propertiesUI[item] = optionalFrames.uiSchema[item];
    } else if (frame[item] && (0, _utils.isSetType)(frame[item])) {
      //set
      var _newFrame2 = constructNewDocumentFrame(frame[item], item);

      var setFrames = getProperties(fullFrame, _newFrame2, uiFrame, documents, mode, formData, true, prefix, onTraverse);
      if (setFrames.required) delete setFrames["required"]; //console.log("setFrames", setFrames, item, newFrame)

      if (Object.keys(setFrames.properties).length === 0) continue; // skip if no properties are found

      var frames;

      if (setFrames.properties[item].info === _constants.DOCUMENT || setFrames.properties[item].info === _constants.ENUM) {
        // if ismulti for react select
        frames = (0, _SetTypeFrames.makeSetDocuments)(setFrames, item, uiFrame, mode, formData, onTraverse); //set properties and ui

        properties[item] = frames.properties[item];
        propertiesUI[item] = frames.propertiesUI[item];
      } else if (setFrames.properties[item].info === _constants.DATA) {
        //data
        frames = (0, _SetTypeFrames.makeSetData)(setFrames, item, uiFrame, mode, formData); //set properties and ui

        properties[item] = frames.properties[item];
        propertiesUI[item] = frames.propertiesUI[item];
      } else {
        // sub documents
        frames = (0, _SetTypeFrames.makeSetSubDocuments)(setFrames, item, uiFrame, mode, formData, onTraverse); //set properties and ui

        properties[item] = frames.properties[item];
        propertiesUI[item] = frames.propertiesUI[item];
      }
    } else if (frame[item] && (0, _utils.isDocumentType)(frame[item], fullFrame, prefix)) {
      //link documents
      var _frames2 = (0, _DocumentTypeFrames.makeDocumentTypeFrames)(frame, item, uiFrame, documents, mode, formData, isSet, onTraverse); //set properties and ui


      properties[item] = _frames2.properties[item];
      propertiesUI[item] = _frames2.propertiesUI[item];
      required.push(_frames2.required);
    } else if (frame[item] && (0, _utils.isEnumType)(frame[item])) {
      // enums
      var _frames3 = (0, _EnumTypeFrames.makeEnumTypeFrames)(frame[item], item, uiFrame, mode, formData, isSet); //set properties and ui


      properties[item] = _frames3.properties[item];
      propertiesUI[item] = _frames3.propertiesUI[item];
      required.push(_frames3.required);
    } else if (frame[item] && (0, _utils.isSubDocumentType)(frame[item])) {
      //subdocument
      //let subDocumentFrame=fullFrame[`${TDB_SCHEMA}${frame[item]["@class"]}`]
      var _newFrame3 = constructSubDocumentFrame(fullFrame, uiFrame, item, frame[item]["@class"], documents, mode, formData, prefix, onTraverse);

      var _frames4 = (0, _SubDocumentTypeFrames.makeSubDocumentFrames)(_newFrame3, item, uiFrame, mode, formData, onTraverse); //set properties and ui


      properties[item] = _frames4.properties[item];
      propertiesUI[item] = _frames4.propertiesUI[item];
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
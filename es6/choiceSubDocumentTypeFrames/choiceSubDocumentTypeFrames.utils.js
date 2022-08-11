"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCreateLayout = getCreateLayout;
exports.getCreateUILayout = getCreateUILayout;
exports.getEditLayout = getEditLayout;
exports.getEditUILayout = getEditUILayout;
exports.getViewLayout = getViewLayout;
exports.getViewUILayout = getViewUILayout;

var _utils = require("../utils");

var _FrameHelpers = require("../FrameHelpers");

var _constants = require("../constants");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// get layout of document class
function getDocumentLayout(documentClass, fullFrame, current, item, uiFrame, mode, formData, onTraverse, onSelect) {
  var layout = {};
  var documentClassIRI = "".concat(documentClass);
  var frame = fullFrame[documentClassIRI];
  var filledData = formData && formData.hasOwnProperty(item) ? formData[item] : {};
  var documentation = frame.hasOwnProperty(_constants.DOCUMENTATION) ? frame[_constants.DOCUMENTATION] : {};
  var exractedProperties = (0, _FrameHelpers.getProperties)(fullFrame, current, frame, uiFrame, mode, filledData, onTraverse, onSelect, documentation); //console.log("exractedProperties", exractedProperties)
  // add subdocument type as @type field

  var docLabel = (0, _utils.extractChoiceDocumentLabels)(fullFrame, documentClass);
  exractedProperties.properties["@type"] = {
    type: "string",
    title: documentClass,
    "default": documentClass
  }; // hide @type field

  exractedProperties.uiSchema["@type"] = {
    "ui:widget": "hidden"
  };
  layout = {
    title: documentClass,
    type: "object",
    properties: exractedProperties.properties,
    uiProperties: exractedProperties.uiSchema
  };
  return layout;
} // Create Layout


function getCreateLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  // get choice documents
  var anyOfArray = [];
  frame[item].map(function (fr) {
    var documentName;

    if (_typeof(fr) === "object" && fr.hasOwnProperty("@class")) {
      // optional, set or list
      documentName = fr["@class"];
    } else documentName = fr;

    anyOfArray.push(getDocumentLayout(documentName, fullFrame, current, item, uiFrame, mode, formData, onTraverse, onSelect));
  });
  var label = (0, _utils.getLabelFromDocumentation)(item, documentation);
  var layout = {
    type: 'object',
    info: _constants.CHOICESUBCLASSES,
    title: label,
    description: "Choose ".concat(label, " from the list ..."),
    anyOf: anyOfArray
  };
  return layout;
} // Create UI Layout


function getCreateUILayout(frame, item, layout, uiFrame, documentation) {
  var subDocuemntBg = (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) ? (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) : 'bg-secondary';
  var uiLayout = {
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"]), documentation),
    //classNames: "tdb__input mb-3 mt-3",
    classNames: "card ".concat(subDocuemntBg, " p-4 mt-4 mb-4")
  };

  if (layout.hasOwnProperty("anyOf") && Array.isArray(layout.anyOf)) {
    layout.anyOf.map(function (aOf) {
      if (aOf.hasOwnProperty("properties")) {
        //let DocumentClassName = aOf.title
        //uiLayout[DocumentClassName] = aOf.properties[DocumentClassName].uiProperties
        for (var ui in aOf.uiProperties) {
          uiLayout[ui] = aOf.uiProperties[ui];
        }
      }
    });
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
} // Edit Layout


function getEditLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  // get choice documents
  var anyOfArray = [];
  frame[item].map(function (fr) {
    var documentName;

    if (_typeof(fr) === "object" && fr.hasOwnProperty("@class")) {
      // optional, set or list
      documentName = fr["@class"];
    } else documentName = fr;

    var documentLayout = getDocumentLayout(documentName, fullFrame, current, item, uiFrame, mode, formData, onTraverse, onSelect);

    if (formData.hasOwnProperty(item)) {
      if (documentLayout.hasOwnProperty("title") && documentLayout.title === formData[item]["@type"]) {
        anyOfArray.push(documentLayout);
      } else if (documentLayout.hasOwnProperty("title") && Array.isArray(formData[item])) {
        //set
        anyOfArray.push(documentLayout);
      }
    } else {
      anyOfArray.push(documentLayout);
    }
  });
  var label = (0, _utils.getLabelFromDocumentation)(item, documentation);
  var layout = {
    type: 'object',
    info: _constants.CHOICESUBCLASSES,
    title: label,
    description: "Choose ".concat(label, " from the list ..."),
    anyOf: anyOfArray
  };
  return layout;
} // Edit UI Layout


function getEditUILayout(frame, item, layout, uiFrame, documentation) {
  var subDocuemntBg = (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) ? (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) : 'bg-secondary';
  var uiLayout = {
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"]), documentation),
    classNames: "card ".concat(subDocuemntBg, " p-4 mt-4 mb-4") //"tdb__input mb-3 mt-3"

  };

  if (layout.hasOwnProperty("anyOf") && Array.isArray(layout.anyOf)) {
    layout.anyOf.map(function (aOf) {
      if (aOf.hasOwnProperty("properties")) {
        //let DocumentClassName = aOf.title
        //uiLayout[DocumentClassName] = aOf.properties[DocumentClassName].uiProperties
        for (var ui in aOf.uiProperties) {
          uiLayout[ui] = aOf.uiProperties[ui];
        }
      }
    });
  }

  return uiLayout;
} // View Layout


function getViewLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  // get choice documents
  var anyOfArray = [];
  frame[item].map(function (fr) {
    var documentName;

    if (_typeof(fr) === "object" && fr.hasOwnProperty("@class")) {
      // optional, set or list
      documentName = fr["@class"];
    } else documentName = fr;

    var documentLayout = getDocumentLayout(documentName, fullFrame, current, item, uiFrame, mode, formData, onTraverse, onSelect);

    if (formData.hasOwnProperty(item)) {
      if (documentLayout.hasOwnProperty("title") && documentLayout.title === formData[item]["@type"]) {
        anyOfArray.push(documentLayout);
      } else if (documentLayout.hasOwnProperty("title") && Array.isArray(formData[item])) {
        //set
        anyOfArray.push(documentLayout);
      }
    } else {
      anyOfArray.push(documentLayout);
    }
  });
  var label = (0, _utils.getLabelFromDocumentation)(item, documentation);
  var layout = {
    type: 'object',
    info: _constants.CHOICESUBCLASSES,
    title: label
  };

  if ((0, _utils.isFilled)(formData, item)) {
    layout["anyOf"] = anyOfArray;
    layout["description"] = "Choose ".concat(label, " from the list ...");
  }

  return layout;
} // View UI Layout


function getViewUILayout(frame, item, layout, uiFrame, documentation) {
  // hide widget if formData of item is empty
  if (!layout.hasOwnProperty("anyOf")) {
    uiLayout = {
      "ui:widget": "hidden"
    };
    return uiLayout;
  }

  var subDocuemntBg = (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) ? (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) : 'bg-secondary';
  var uiLayout = {
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"]), documentation),
    classNames: "card ".concat(subDocuemntBg, " p-4 mt-4 mb-4") //"tdb__input mb-3 mt-3"

  };

  if (layout.hasOwnProperty("anyOf") && Array.isArray(layout.anyOf)) {
    layout.anyOf.map(function (aOf) {
      if (aOf.hasOwnProperty("properties")) {
        for (var ui in aOf.uiProperties) {
          uiLayout[ui] = aOf.uiProperties[ui];
        }
      }
    });
  }

  return uiLayout;
}
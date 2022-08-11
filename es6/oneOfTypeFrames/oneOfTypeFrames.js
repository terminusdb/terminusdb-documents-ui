"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeOneOfTypeFrames = makeOneOfTypeFrames;

var _constants = require("../constants");

var _utils = require("../utils");

var _oneOfTypeFrames = require("./oneOfTypeFrames.utils");

// get one of  type frames
function oneOfTypeFrames(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
  var properties = {},
      propertiesUI = {}; // get choice documents

  var anyOfArray = []; //layout

  frame[item].map(function (fr) {
    for (var oneOf in fr) {
      var documentName = fr[oneOf];
      var currentChoice = oneOf;

      if (documentName !== _constants.SYS_UNIT_DATA_TYPE) {
        if (mode !== _constants.VIEW) anyOfArray.push((0, _oneOfTypeFrames.getCreateDocumentLayout)(documentName, fullFrame, currentChoice, item, uiFrame, mode, formData, onTraverse, onSelect));else anyOfArray.push((0, _oneOfTypeFrames.getViewDocumentLayout)(documentName, fullFrame, currentChoice, item, uiFrame, mode, formData, onTraverse, onSelect));
      } else if (documentName === _constants.SYS_UNIT_DATA_TYPE) {
        if (mode !== _constants.VIEW) {
          anyOfArray.push((0, _oneOfTypeFrames.getCreateSysUnitDocumentLayout)(documentName, fullFrame, currentChoice, item, uiFrame, mode, formData, onTraverse, onSelect));
        } else anyOfArray.push((0, _oneOfTypeFrames.getViewSysUnitDocumentLayout)(documentName, fullFrame, currentChoice, item, uiFrame, mode, formData, onTraverse, onSelect));
      }
    }
  });
  var layout = {
    type: 'object',
    info: _constants.ONEOFVALUES,
    title: item,
    description: "Choose ".concat(item, " from the list ..."),
    anyOf: anyOfArray
  }; //ui layout

  var uiLayout = {
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"])),
    classNames: "tdb__input mb-3 mt-3"
  }; //console.log("qqq layout", layout)

  if (layout.hasOwnProperty("anyOf") && Array.isArray(layout.anyOf)) {
    layout.anyOf.map(function (aOf) {
      if (aOf.hasOwnProperty("properties")) {
        for (var ui in aOf.uiProperties) {
          uiLayout[ui] = aOf.uiProperties[ui];
        }
      }
    });
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout); // schema

  properties[current] = layout; // ui schema

  propertiesUI[current] = addedCustomUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // mandatory


function makeOneOfTypeFrames(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
  var madeFrames = oneOfTypeFrames(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect);
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}
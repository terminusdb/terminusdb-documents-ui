"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeChoiceSubDocumentTypeFrames = makeChoiceSubDocumentTypeFrames;

var _constants = require("../constants");

var _choiceSubDocumentTypeFrames = require("./choiceSubDocumentTypeFrames.utils");

var _utils = require("../utils");

// get choice  type frames
function choiceSubDocumentTypeFrames(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _choiceSubDocumentTypeFrames.getCreateLayout)(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation); // pass layout here, since it has the ui layout as well from getProperties()

    uiLayout = (0, _choiceSubDocumentTypeFrames.getCreateUILayout)(frame, item, layout, uiFrame, documentation);
  } else if (mode === _constants.EDIT) {
    layout = (0, _choiceSubDocumentTypeFrames.getEditLayout)(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation); //// pass layout here, since it has the ui layout as well from getProperties()

    uiLayout = (0, _choiceSubDocumentTypeFrames.getEditUILayout)(frame, item, layout, uiFrame, documentation);
  } else if (mode === _constants.VIEW) {
    layout = (0, _choiceSubDocumentTypeFrames.getViewLayout)(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation);
    uiLayout = (0, _choiceSubDocumentTypeFrames.getViewUILayout)(frame, item, layout, uiFrame, documentation);
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout); // schema

  properties[item] = layout; // ui schema

  propertiesUI[item] = addedCustomUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // mandatory


function makeChoiceSubDocumentTypeFrames(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  var madeFrames = choiceSubDocumentTypeFrames(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation);
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}
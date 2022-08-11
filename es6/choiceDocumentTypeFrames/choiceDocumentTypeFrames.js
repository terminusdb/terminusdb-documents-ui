"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeChoiceDocumentTypeFrames = makeChoiceDocumentTypeFrames;

var _constants = require("../constants");

var _choiceDocumentTypeFrames = require("./choiceDocumentTypeFrames.utils");

var _utils = require("../utils");

// get choice  type frames
function choiceDocumentTypeFrames(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  var properties = {},
      propertiesUI = {},
      layout = {},
      uiLayout = {};

  if (mode === _constants.CREATE) {
    layout = (0, _choiceDocumentTypeFrames.getCreateLayout)(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect); // pass layout here, since it has the ui layout as well from getProperties()

    uiLayout = (0, _choiceDocumentTypeFrames.getCreateUILayout)(frame, item, layout, uiFrame, onSelect, documentation);
  } else if (mode === _constants.EDIT) {
    layout = (0, _choiceDocumentTypeFrames.getEditLayout)(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect); //// pass layout here, since it has the ui layout as well from getProperties()

    uiLayout = (0, _choiceDocumentTypeFrames.getEditUILayout)(frame, item, layout, uiFrame, onSelect);
  } else if (mode === _constants.VIEW) {
    layout = (0, _choiceDocumentTypeFrames.getViewLayout)(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect);
    uiLayout = (0, _choiceDocumentTypeFrames.getViewUILayout)(frame, item, layout, uiFrame, onTraverse, onSelect);
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout); // schema

  properties[item] = layout; // ui schema

  propertiesUI[item] = addedCustomUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // mandatory


function makeChoiceDocumentTypeFrames(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation) {
  var madeFrames = choiceDocumentTypeFrames(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect, documentation);
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPointTypeCreateEditUI = getPointTypeCreateEditUI;
exports.getPointTypeFilledValues = getPointTypeFilledValues;
exports.getPointTypeViewUI = getPointTypeViewUI;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

var _mapViewer = require("../maps/mapViewer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// get form data from single dimensions to display in view or edit modes
function getPointTypeFilledValues(formData, item) {
  var filledItems = [];
  var count = 0,
      defaultValues = formData[item];
  defaultValues.map(function (value) {
    filledItems.push({
      type: "number",
      "default": defaultValues[count]
    });
    count += 1;
  });
  return filledItems;
} // get ui layout for single dimensions in create or edit modes


function getPointTypeCreateEditUI(item) {
  var ui = {};
  ui[item] = {
    "items": [{
      "ui:placeholder": "Enter latitude ...",
      classNames: "tdb__input mb-3 mt-3"
    }, {
      "ui:placeholder": "Enter longitude ...",
      classNames: "tdb__input mb-3 mt-3"
    }],
    "ui:options": {
      addable: false,
      orderable: false,
      removable: false
    }
  };
  ui[item]["ui:ArrayFieldTemplate"] = _utils.ArrayFieldTemplate;
  return ui;
} // get ui layout for single dimensions in view mode


function getPointTypeViewUI(formData, item, documentation) {
  var ui = {};

  function getMapComponent(props) {
    if (!formData.hasOwnProperty(item)) return /*#__PURE__*/_react["default"].createElement("div", null);
    var cordinates = [{
      lat: formData[item][0],
      lng: formData[item][1]
    }];
    var label = (0, _utils.getLabelFromDocumentation)(item, documentation);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, label), /*#__PURE__*/_react["default"].createElement(_mapViewer.MapViewer, {
      documents: cordinates,
      scrollWheelZoom: true
    }));
  }

  ui[item] = {
    "ui:field": getMapComponent
  };
  return ui;
}
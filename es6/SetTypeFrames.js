"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSetData = makeSetData;
exports.makeSetDocuments = makeSetDocuments;
exports.makeSetSubDocuments = makeSetSubDocuments;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _constants = require("./constants");

var _reactBootstrap = require("react-bootstrap");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function removeDefaultsFromSubDocumentFrame(json) {
  // remove default values and get them from form Data
  var newJson = json;

  for (var key in newJson) {
    for (var item in newJson[key]) {
      if (item === "default") delete newJson[key][item];
    }
  }

  return newJson;
}

function removeDefaultsFromDataFrame(json) {
  // remove default values and get them from form Data
  var newJson = json;

  for (var key in newJson) {
    if (key === "default") delete newJson[key];
  }

  return newJson;
}

function makeSetSubDocuments(setFrames, item, uiFrame, mode, formData, onTraverse) {
  var properties = {},
      propertiesUI = {};

  if (mode !== _constants.VIEW) {
    for (var props in setFrames.properties[item]["properties"]) {
      if (setFrames.properties[item]["properties"][props].info === _constants.DOCUMENT) {
        setFrames.uiSchema[item][props]["ui:field"] = _utils.getOptionalSelect;
      }
    }
  }

  var layout = {
    type: "array",
    title: mode === _constants.VIEW ? (0, _utils.getTitle)() : (0, _utils.getSetTitle)(),
    items: [{
      type: "object",
      properties: setFrames.properties[item]["properties"]
    }]
  };

  if (mode !== _constants.CREATE && formData.hasOwnProperty(item)) {
    var filledItems = [];
    propertiesUI[item] = {
      "items": []
    };
    var subFrames = removeDefaultsFromSubDocumentFrame(setFrames.properties[item]["properties"]);

    if (formData.hasOwnProperty(item)) {
      var count = 0;
      var defaultValues = formData[item];
      propertiesUI[item]["items"] = [];
      defaultValues.map(function (value) {
        // remove custom select function
        for (var thing in setFrames.properties[item]["properties"]) {
          if (setFrames.properties[item]["properties"][thing].info === _constants.DOCUMENT && setFrames.uiSchema[item][thing]["ui:field"]) {
            delete setFrames.uiSchema[item][thing]["ui:field"]; //setFrames.uiSchema[item][thing]["ui:field"] = getRequiredSelect(item, selectDocument, defaultValue, enums)
          }
        }

        propertiesUI[item]["items"].push(setFrames.uiSchema[item]);
      });
      defaultValues.map(function (value) {
        filledItems.push({
          type: "object",
          properties: setFrames.properties[item]["properties"],
          "default": defaultValues[count]
        });
        count += 1;
      });
    }

    layout["items"] = filledItems;
  } //schema


  properties[item] = layout; // get filled values on View mode

  if (mode === _constants.VIEW && formData.hasOwnProperty(item) && Array.isArray(layout["items"])) {
    var count = 0;
    layout["items"].map(function (it) {
      for (var thing in it.properties) {
        if (it.properties[thing].info === _constants.DOCUMENT && it["default"] && it["default"][thing]) {
          var getSelect = function getSelect(props) {
            var _useState = (0, _react.useState)(false),
                _useState2 = _slicedToArray(_useState, 2),
                clicked = _useState2[0],
                setClicked = _useState2[1];

            (0, _react.useEffect)(function () {
              if (!clicked) return;
              if (onTraverse) onTraverse(clicked);
            }, [clicked]);

            var handleClick = function handleClick(id, setClicked) {
              // view if on traverse function defined
              setClicked(id);
            };

            return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, props.name), /*#__PURE__*/_react["default"].createElement("span", {
              className: "text-gray tbd__view__select",
              onClick: function onClick(e) {
                return handleClick(props.formData, setClicked);
              }
            }, props.formData));
          };

          propertiesUI[item]["items"][count][thing]["ui:field"] = getSelect;
        }

        if (it.properties[thing].info === "DATA" && it["default"]) {
          var getFieldValue = function getFieldValue(props) {
            if (!props.formData || props.formData === undefined) return /*#__PURE__*/_react["default"].createElement("span", {
              className: "tdb__blank"
            });
            return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, props.name), /*#__PURE__*/_react["default"].createElement("span", null, props.formData));
          };

          propertiesUI[item]["items"][count][thing]["ui:field"] = getFieldValue;
        }
      }

      count += 1;
    });
  }

  if (mode !== _constants.VIEW) {
    // we do not allow to add extra on view mode
    //default ui:schema
    propertiesUI[item] = {
      "items": setFrames.uiSchema[item]
    }; // layout

    properties[item]["additionalItems"] = {
      type: "object",
      properties: setFrames.properties[item]["properties"]
    }; //ui

    propertiesUI[item]["additionalItems"] = setFrames.uiSchema[item];
    propertiesUI[item]["ui:options"] = {
      addable: true,
      orderable: false,
      removable: true
    };
    propertiesUI[item]["ui:ArrayFieldTemplate"] = _utils.ArrayFieldTemplate;
  } //custom ui:schema


  if (uiFrame && uiFrame[item]) {
    propertiesUI[item] = uiFrame[item];
  } // hide entire widget if not available in filled frame


  if (mode === _constants.VIEW && !formData.hasOwnProperty(item)) {
    propertiesUI[item] = {
      "ui:widget": "hidden"
    };
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}

function makeSetData(setFrames, item, uiFrame, mode, formData) {
  var properties = {},
      propertiesUI = {};
  var layout = {
    type: "array",
    title: mode === _constants.VIEW ? (0, _utils.getTitle)() : (0, _utils.getSetTitle)(),
    items: setFrames.properties[item]
  };

  if (mode !== _constants.CREATE && formData.hasOwnProperty(item)) {
    var filledItems = [];
    var subFrames = removeDefaultsFromDataFrame(setFrames.properties[item]["properties"]);
    var count = 0,
        defaultValues = formData[item];
    defaultValues.map(function (value) {
      filledItems.push({
        type: "string",
        info: _constants.DATA,
        //title: item,
        "default": defaultValues[count]
      });
      count += 1;
    });
    layout["items"] = filledItems;
  } //schema


  properties[item] = layout; //default ui:schema

  propertiesUI[item] = {
    "items": setFrames.uiSchema[item]
  };

  if (mode !== _constants.VIEW) {
    // we do not allow to add extra on view mode
    // layout
    properties[item]["additionalItems"] = {
      type: setFrames.properties[item].type,
      info: setFrames.properties[item].info,
      title: item
    }; //ui

    propertiesUI[item]["additionalItems"] = setFrames.uiSchema[item];
    propertiesUI[item]["ui:options"] = {
      addable: true,
      orderable: false,
      removable: true
    };
    propertiesUI[item]["ui:ArrayFieldTemplate"] = _utils.ArrayFieldTemplate;
  } else if (mode === _constants.VIEW) {
    propertiesUI[item]["ui:options"] = {
      // disable add more on view
      addable: false,
      orderable: false,
      removable: false
    };
  } //custom ui:schema


  if (uiFrame && uiFrame[item]) {
    propertiesUI[item] = uiFrame[item];
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}

function makeSetDocuments(setFrames, item, uiFrame, mode, formData, onTraverse) {
  var properties = {},
      propertiesUI = {};
  var layout = {
    type: "array",
    title: mode === _constants.VIEW ? (0, _utils.getTitle)() : (0, _utils.getSetTitle)(),
    items: setFrames.properties[item]
  };

  if (mode !== _constants.CREATE && formData.hasOwnProperty(item)) {
    var filledItems = [];
    var defaultValues = setFrames.properties[item]["default"];
    defaultValues.map(function (def) {
      filledItems.push({
        "default": def,
        "enum": setFrames.properties[item]["enum"],
        info: setFrames.properties[item].info,
        type: setFrames.properties[item].type,
        title: item
      });
    });
    layout["items"] = filledItems;
  } //schema


  properties[item] = layout; //default ui:schema

  if (mode !== _constants.VIEW && setFrames.uiSchema[item] && setFrames.uiSchema[item]["ui:field"]) {
    setFrames.uiSchema[item]["ui:field"] = _utils.getOptionalSelect;
  }

  function getViewSelect(props) {
    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        clicked = _useState4[0],
        setClicked = _useState4[1];

    (0, _react.useEffect)(function () {
      if (!clicked) return;
      if (onTraverse) onTraverse(clicked);
    }, [clicked]);

    var handleClick = function handleClick(e) {
      // view if on traverse function defined
      setClicked(e.target.value);
    };

    var opts = [];
    opts.push( /*#__PURE__*/_react["default"].createElement("option", {
      value: ""
    }, props.uiSchema["ui:placeholder"]));

    if (Array.isArray(props.schema["enum"])) {
      props.schema["enum"].map(function (enu) {
        opts.push( /*#__PURE__*/_react["default"].createElement("option", {
          value: enu
        }, enu));
      });
    }

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, item), /*#__PURE__*/_react["default"].createElement("span", {
      onClick: handleClick
    }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Select, {
      defaultValue: props.formData,
      disabled: true
    }, opts)));
  }

  var ui = {};

  if (mode === _constants.VIEW) {
    for (var u in setFrames.uiSchema[item]) {
      if (u == "ui:field") {
        //ui[u]=setFrames.uiSchema[item][u]
        ui[u] = getViewSelect;
      } else ui[u] = setFrames.uiSchema[item][u];
    }
  } else ui = setFrames.uiSchema[item];

  propertiesUI[item] = {
    "items": ui
  };

  if (mode !== _constants.VIEW) {
    // we do not allow to add extra on view mode
    // layout
    properties[item]["additionalItems"] = {
      info: setFrames.properties[item].info,
      type: setFrames.properties[item].type,
      "enum": setFrames.properties[item]["enum"],
      title: item
    }; //ui

    propertiesUI[item]["additionalItems"] = setFrames.uiSchema[item];
    propertiesUI[item]["ui:options"] = {
      addable: true,
      orderable: false,
      removable: true
    };
    propertiesUI[item]["ui:ArrayFieldTemplate"] = _utils.ArrayFieldTemplate;
  }

  if (mode === _constants.VIEW && !formData.hasOwnProperty(item)) {
    // hide add options on view
    propertiesUI[item]["ui:options"] = {
      addable: false,
      orderable: false,
      removable: false
    };
  } //custom ui:schema


  if (uiFrame && uiFrame[item]) {
    propertiesUI[item] = uiFrame[item];
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayFieldTemplate = ArrayFieldTemplate;
exports.HideArrayFieldTemplate = HideArrayFieldTemplate;
exports.addCustomUI = addCustomUI;
exports.checkIfKey = checkIfKey;
exports.extractChoiceDocumentLabels = extractChoiceDocumentLabels;
exports.extractClassName = extractClassName;
exports.extractDocumentation = extractDocumentation;
exports.extractUIFrameSelectTemplate = extractUIFrameSelectTemplate;
exports.extractUIFrameSubDocumentTemplate = extractUIFrameSubDocumentTemplate;
exports.getDefaultValue = getDefaultValue;
exports.getDependencies = getDependencies;
exports.getFieldTitle = getFieldTitle;
exports.getLabelFromDocumentation = getLabelFromDocumentation;
exports.getModifiedGeoFrame = void 0;
exports.getOptionalSelect = getOptionalSelect;
exports.getOptionalSelect_OLD = getOptionalSelect_OLD;
exports.getRequiredForListSubDocs = getRequiredForListSubDocs;
exports.getRequiredSelect = getRequiredSelect;
exports.getRequiredSelect_ol = getRequiredSelect_ol;
exports.getSetChoiceEmptyFrames = getSetChoiceEmptyFrames;
exports.getSetTitle = getSetTitle;
exports.getSubDocumentDescription = getSubDocumentDescription;
exports.getSubDocumentTitle = getSubDocumentTitle;
exports.getTitle = getTitle;
exports.getValueHashMessage = getValueHashMessage;
exports.isEnumType = exports.isDocumentType = exports.isDocumentClassArrayType = exports.isDataType = exports.isChoiceSubDocumentType = exports.isChoiceDocumentType = exports.hidden = void 0;
exports.isFilled = isFilled;
exports.isSysDataType = exports.isSubDocumentType = exports.isSubDocumentAndClassType = exports.isSetType = exports.isPointType = exports.isOptionalType = exports.isListType = exports.isGeoJSONTypeSet = void 0;
exports.isValueHashDocument = isValueHashDocument;
exports.removeDefaultsFromDataFrame = removeDefaultsFromDataFrame;
exports.removeDefaultsFromSubDocumentFrame = removeDefaultsFromSubDocumentFrame;
exports.removeIds = removeIds;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _constants = require("./constants");

var _bi = require("react-icons/bi");

var _ri = require("react-icons/ri");

var _fc = require("react-icons/fc");

var _fa = require("react-icons/fa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// returns true for properties which are of data types xsd and xdd
var isDataType = function isDataType(property) {
  if (_typeof(property) === "object") return false;
  if (property.substring(0, 4) === _constants.XSD_DATA_TYPE_PREFIX) return true;
  if (property.substring(0, 4) === _constants.XDD_DATA_TYPE_PREFIX) return true;
};

exports.isDataType = isDataType;

var isSysDataType = function isSysDataType(property) {
  if (_typeof(property) === "object") return false;
  if (property.substring(0, 4) === _constants.SYS_UNIT_TYPE_PREFIX) return true;
}; // returns true for properties which are subdocuments


exports.isSysDataType = isSysDataType;

var isSubDocumentType = function isSubDocumentType(property) {
  if (property.hasOwnProperty(_constants.SUBDOCUMENT)) return true;
  return false;
}; // to identify if choice sub documenst


exports.isSubDocumentType = isSubDocumentType;

var isChoiceSubDocumentType = function isChoiceSubDocumentType(property) {
  if (_typeof(property) !== "object") return false;

  if (Array.isArray(property)) {
    var _props = property[0];
    if (_props.hasOwnProperty("@class") && _props.hasOwnProperty(_constants.SUBDOCUMENT)) return true;
    return false;
  }

  return false;
}; // to identify if choice documenst


exports.isChoiceSubDocumentType = isChoiceSubDocumentType;

var isChoiceDocumentType = function isChoiceDocumentType(property) {
  if (_typeof(property) !== "object") return false;

  if (Array.isArray(property)) {
    var _props2 = property[0];
    if (typeof _props2 === "string") return true;
    return false;
  }

  return false;
}; // returns true for optional


exports.isChoiceDocumentType = isChoiceDocumentType;

var isOptionalType = function isOptionalType(property) {
  if (_typeof(property) !== "object") return false;
  if (property["@type"] === _constants.OPTIONAL) return true;
  return false;
}; // returns true for set


exports.isOptionalType = isOptionalType;

var isSetType = function isSetType(property) {
  if (_typeof(property) !== "object") return false;
  if (property["@type"] === _constants.SET) return true;
  return false;
}; // display geo json in view mode in a different way 


exports.isSetType = isSetType;

var isGeoJSONTypeSet = function isGeoJSONTypeSet(frame, mode) {
  if (mode !== _constants.VIEW) return false;

  if (frame.hasOwnProperty("type") && frame["type"].hasOwnProperty("@type") && frame["type"]["@type"] === _constants.ENUM) {
    if (frame["type"]["@values"][0] === _constants.FEATURE_COLLECTION) return true;else return false;
  }

  return false;
}; // returns true for List


exports.isGeoJSONTypeSet = isGeoJSONTypeSet;

var isListType = function isListType(property) {
  if (_typeof(property) !== "object") return false;
  if (property["@type"] === _constants.LIST) return true;
  return false;
}; // returns true for properties pointing to other documents or enums


exports.isListType = isListType;

var isDocumentType = function isDocumentType(property, frame) {
  if (_typeof(property) === "object") return false;
  if (!frame) return false;
  var document = "".concat(property);

  if (frame[document]) {
    if (frame[document]["@type"] === _constants.DOCUMENT && !frame[document]["@subdocument"]) return true;
  }

  return false;
}; //returns true if @class is POINT type


exports.isDocumentType = isDocumentType;

var isPointType = function isPointType(property, frame) {
  if (_typeof(property) !== "object") return false;

  if (property.hasOwnProperty("@class") && property["@class"] === _constants.POINT_TYPE) {
    var pointProperty = "".concat(property["@class"]);

    if (frame.hasOwnProperty(pointProperty)) {
      return frame[pointProperty];
    }

    return false;
  }

  return false;
}; // returns true if @subdocuments and type class


exports.isPointType = isPointType;

var isSubDocumentAndClassType = function isSubDocumentAndClassType(property, frame) {
  if (_typeof(property) === "object") return false;
  if (!frame) return false;
  var document = "".concat(property);

  if (frame[document]) {
    if (frame[document]["@type"] === _constants.DOCUMENT && frame[document]["@subdocument"]) return frame[document];
  }

  return false;
}; // returns true if @type is Array and item is coordinates


exports.isSubDocumentAndClassType = isSubDocumentAndClassType;

var isDocumentClassArrayType = function isDocumentClassArrayType(frame) {
  if (_typeof(frame) !== "object") return false;
  if (frame.hasOwnProperty("@type") && frame["@type"] === _constants.ARRAY) return true;
  return false;
}; // returns modified frames for coordinates with type as well to differntiate between polygon/ multipolygon


exports.isDocumentClassArrayType = isDocumentClassArrayType;

var getModifiedGeoFrame = function getModifiedGeoFrame(frame) {
  var newFrame = {};
  newFrame = frame[_constants.COORDINATES];

  if (frame.hasOwnProperty("type") && frame["type"].hasOwnProperty("@type") && frame["type"]["@type"] === _constants.ENUM && frame["type"].hasOwnProperty("@values")) {
    newFrame["info"] = frame["type"]["@values"][0];
  }

  return newFrame;
}; // returns true for properties ponting to an enum class


exports.getModifiedGeoFrame = getModifiedGeoFrame;

var isEnumType = function isEnumType(property) {
  if (_typeof(property) !== "object") return false;
  if (property["@type"] === _constants.ENUM) return true;
}; // field array to display field titles


exports.isEnumType = isEnumType;

function getSubDocumentTitle(item, documentation) {
  var title = [];
  var label = getLabelFromDocumentation(item, documentation);
  title.push( /*#__PURE__*/_react["default"].createElement("h6", {
    style: {
      display: "contents"
    }
  }, label)); //<GoFileSubmodule className="mr-2"/>

  return title;
}

function getSubDocumentDescription(item) {
  var descr = [];
  descr.push( /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-muted fw-bold"
  }, "".concat(item, " is a sub document. If you wish to fill a property of ").concat(item, " make sure all mandatory fields are entered."))); // /<BiErrorCircle className="mr-2"/>

  return descr;
}

function getTitle(item, uiDisable, documentation) {
  var label = getLabelFromDocumentation(item, documentation);
  if (uiDisable) return /*#__PURE__*/_react["default"].createElement("span", {
    key: label,
    title: "".concat(label, " is a key field. Once created, you will not be able to update this field.")
  }, /*#__PURE__*/_react["default"].createElement(_fc.FcKey, {
    className: "mr-2"
  }), label);else return /*#__PURE__*/_react["default"].createElement("span", {
    key: label
  }, label);
}

function getSetTitle(item, documentation) {
  var label = getLabelFromDocumentation(item, documentation);
  return label;
} // field array to display key fields


function getFieldTitle(item, uiDisable) {
  if (uiDisable) return /*#__PURE__*/_react["default"].createElement("span", {
    key: item,
    title: "".concat(item, " is a key field. Once created, you will not be able to update this field.")
  }, /*#__PURE__*/_react["default"].createElement(_fc.FcKey, {
    className: "mr-2"
  }), item);
} // get default values to document/ enum types


function getDefaultValue(item, formData) {
  if (!formData) return false;
  if (Object.keys(formData).length === 0) return false;
  if (formData.hasOwnProperty(item)) return formData[item];
  return false;
} // List required min 1 item in it so forthe first subdocument we make all its fields mandatory


function getRequiredForListSubDocs(properties) {
  var required = [];

  for (var key in properties) {
    if (key !== "@type") required.push(key);
  }

  return required;
}

function HideArrayFieldTemplate(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null);
}

function ArrayFieldTemplate(props) {
  //console.log("props", props)
  var variant = "dark";
  if (props.schema.info === "SUBDOCUMENT") variant = "secondary";
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: props.className
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "control-label"
  }, props.title), props.items && props.items.map(function (element) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: element.key,
      className: element.className
    }, /*#__PURE__*/_react["default"].createElement("div", null, element.children), element.hasMoveDown && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
      variant: variant,
      className: "mb-3 tdb__array__item__list bg-transparent border-0",
      title: "Move Down",
      onClick: element.onReorderClick(element.index, element.index + 1)
    }, /*#__PURE__*/_react["default"].createElement(_fa.FaArrowDown, {
      className: "text-light",
      style: {
        fontSize: "20px"
      }
    })), element.hasMoveUp && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
      variant: variant,
      title: "Move Up",
      className: "mb-3 tdb__array__item__list bg-transparent border-0",
      onClick: element.onReorderClick(element.index, element.index - 1)
    }, /*#__PURE__*/_react["default"].createElement(_fa.FaArrowUp, {
      className: "text-light",
      style: {
        fontSize: "20px"
      }
    })), element.hasRemove && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
      variant: variant,
      className: "mb-3 tdb__array__item__list bg-transparent border-0",
      title: "Delete",
      onClick: element.onDropIndexClick(element.index)
    }, /*#__PURE__*/_react["default"].createElement(_ri.RiDeleteBin5Fill, {
      className: "text-danger",
      style: {
        fontSize: "25px"
      }
    })));
  }), props.canAdd && /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "col-xs-3 col-xs-offset-9 array-item-add text-right"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
    variant: "light",
    className: "text-dark",
    type: "button",
    onClick: props.onAddClick
  }, /*#__PURE__*/_react["default"].createElement(_bi.BiPlus, {
    className: "mr-2"
  }), "Add ".concat(props.title)))));
} // hide a field


var hidden = function hidden() {
  return /*#__PURE__*/_react["default"].createElement("div", null);
}; // function checks if formData has a filled value for item


exports.hidden = hidden;

function isFilled(formData, item) {
  if (!formData) return false;
  if (Array.isArray(formData)) return true;
  if (formData.hasOwnProperty(item) && Array.isArray(formData[item]) && formData[item].length) return true;
  if (formData.hasOwnProperty(item) && formData[item]) return true;
  return false;
} // function checks in property is key of a document


function checkIfKey(property, key) {
  if (!key) return;
  if (!key["@fields"]) return;
  var isKey = false;
  key["@fields"].map(function (item) {
    if (item === property) {
      isKey = true;
      return;
    }
  });
  return isKey;
} // check if document has ValueHash type key


function isValueHashDocument(frame) {
  if (!frame) return null;

  if (frame["@key"] && frame["@key"]["@type"] && frame["@key"]["@type"] === _constants.VALUE_HASH_KEY) {
    return true;
  }

  return false;
}

function getValueHashMessage() {
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-muted fw-bold"
  }, /*#__PURE__*/_react["default"].createElement(_bi.BiErrorCircle, {
    className: "mr-2"
  }), "Edit is disabled for a document with Value Hash key. A Value Hash object will change its id and is generated from its properties. Best way would be to delete this document and create a new one.");
} // function for set subdocuments to make fields mandatory only if one field is enterred


function getOtherProperties(property, properties) {
  var other = [];

  for (var props in properties) {
    if (props === "@type") continue;

    if (props !== property) {
      other.push(props);
    }
  }

  return other;
}

function getDependencies(properties) {
  var dependencies = {};

  for (var props in properties) {
    if (props === "@type") continue;
    dependencies[props] = getOtherProperties(props, properties);
  }

  return dependencies;
} // get select options to display


function getSelectOptions(placeholder, defaultValue, enums) {
  var opts = [];
  opts.push( /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, placeholder));

  if (Array.isArray(enums)) {
    enums.map(function (enu) {
      if (enu === defaultValue) opts.push( /*#__PURE__*/_react["default"].createElement("option", {
        value: enu,
        selected: true
      }, enu));else opts.push( /*#__PURE__*/_react["default"].createElement("option", {
        value: enu
      }, enu));
    });
  }

  return opts;
} // get select component with required


function getRequiredSelect_ol(item, selectDocument, defaultValue, enums) {
  var handleSelect = function handleSelect(e, props) {
    //create or edit
    if (props.onChange) props.onChange(e.target.value);
  };

  var opts = getSelectOptions("Select ".concat(selectDocument, " ..."), defaultValue, enums);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, item), /*#__PURE__*/_react["default"].createElement("span", {
    "class": "required"
  }, "*"), /*#__PURE__*/_react["default"].createElement("select", {
    className: "d-block form-control",
    defaultValue: defaultValue,
    required: true,
    onChange: function onChange(e) {
      return handleSelect(e, props);
    }
  }, opts));
} // get select component with required


function getRequiredSelect(props) {
  var handleSelect = function handleSelect(e, props) {
    //create or edit
    if (props.onChange) props.onChange(e.target.value);
  };

  var opts = getSelectOptions(props.uiSchema["ui:placeholder"], props.formData, props.schema["enum"]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, props.name, /*#__PURE__*/_react["default"].createElement("span", {
    "class": "required"
  }, "*")), /*#__PURE__*/_react["default"].createElement("select", {
    className: "d-block form-control",
    required: true,
    onChange: function onChange(e) {
      return handleSelect(e, props);
    }
  }, opts));
} // get select component with no required


function getOptionalSelect_OLD(props) {
  var handleSelect = function handleSelect(e, props) {
    //create or edit
    if (props.onChange) props.onChange(e.target.value);
  };

  var opts = getSelectOptions(props.uiSchema["ui:placeholder"], props.formData, props.schema["enum"]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, props.name), /*#__PURE__*/_react["default"].createElement("select", {
    className: "d-block form-control",
    onChange: function onChange(e) {
      return handleSelect(e, props);
    }
  }, opts));
} // get select component with no required


function getOptionalSelect(props) {
  var handleSelect = function handleSelect(e, props) {
    //create or edit
    if (props.onChange) props.onChange(e.target.value);
  };

  var opts = getSelectOptions(props.uiSchema["ui:placeholder"], props.formData, props.schema["enum"]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, props.name), /*#__PURE__*/_react["default"].createElement("select", {
    className: "d-block form-control",
    onChange: function onChange(e) {
      return handleSelect(e, props);
    }
  }, opts));
} // remove defaults from set/ list - filled frames of subdocuments


function removeDefaultsFromSubDocumentFrame(json) {
  // remove default values and get them from form Data
  var newJson = json;

  for (var key in newJson) {
    for (var item in newJson[key]) {
      if (item === "default") delete newJson[key][item];
    }
  }

  return newJson;
} // remove defaults from set/ list - filled frames of data


function removeDefaultsFromDataFrame(json) {
  // remove default values and get them from form Data
  var newJson = json;

  for (var key in newJson) {
    if (key === "default") delete newJson[key];
  }

  return newJson;
} // extract document class name from link documents


function extractClassName(document, fullFrame) {
  var str = document;
  var splits = str.split('/');
  var documentClass = splits[0];

  if (fullFrame.hasOwnProperty("".concat(documentClass))) {
    return splits[0]; // if definition available in full frame
  }

  return false;
} // function to remove @ids from filled frames - we use this function during edit mode so we do not re send id


function removeIds(dataArray) {
  if (!Array.isArray(dataArray)) return [];
  var newDataArray = [];
  dataArray.map(function (da) {
    var newJson = {};

    for (var thing in da) {
      if (thing === "@id") continue;
      newJson[thing] = da[thing];
    }

    newDataArray.push(newJson);
  });
  return newDataArray;
} // add custom ui layout to existing default ui layout


function addCustomUI(item, uiFrame, uiLayout) {
  if (!uiFrame) return uiLayout;
  if (!Object.keys(uiFrame).length) return uiLayout;
  var defaultUILayout = uiLayout;

  if (uiFrame && uiFrame.hasOwnProperty(item)) {
    for (var uiItems in uiFrame[item]) {
      if (defaultUILayout.hasOwnProperty(uiItems) && uiItems !== "ui:widget" && uiItems !== "ui:placeholder" && uiItems !== "ui:description" && uiItems !== "ui:title" && uiItems !== "classNames") {
        var uiDefault = defaultUILayout[uiItems];
        defaultUILayout[uiItems] = "".concat(uiDefault, " ").concat(uiFrame[item][uiItems]);
      } else defaultUILayout[uiItems] = uiFrame[item][uiItems];
    }
  } //console.log("defaultUILayout", item, defaultUILayout)


  if (defaultUILayout && defaultUILayout.hasOwnProperty("ui:widget") && defaultUILayout["ui:widget"] === "hidden") {
    if (defaultUILayout.hasOwnProperty("ui:ArrayFieldTemplate")) {
      // array type - set or list
      defaultUILayout = {
        "ui:widget": 'hidden',
        "ui:ArrayFieldTemplate": HideArrayFieldTemplate
      };
    } else defaultUILayout = {
      "ui:widget": 'hidden'
    };
  }

  return defaultUILayout;
} // function to check if custom uiFrame has select_style defined


function extractUIFrameSelectTemplate(uiFrame) {
  if (!uiFrame) return null;
  if (Object.keys(uiFrame).length === 0) return null;

  if (uiFrame.hasOwnProperty(_constants.UI_FRAME_SELECT_STYLE)) {
    return uiFrame[_constants.UI_FRAME_SELECT_STYLE];
  }

  return null;
} // function to check if custom uiFrame has subDocument_styles style defined


function extractUIFrameSubDocumentTemplate(uiFrame) {
  if (!uiFrame) return null;
  if (Object.keys(uiFrame).length === 0) return null;

  if (uiFrame.hasOwnProperty(_constants.UI_FRAME_SUBDOCUMENT_STYLE)) {
    return uiFrame[_constants.UI_FRAME_SUBDOCUMENT_STYLE];
  }

  return null;
} // function to extract empty frames from choice any of properties already filled with defaults


function getSetChoiceEmptyFrames(frame, item) {
  var anyOfFrames = frame.properties[item].anyOf,
      emptyAnyOfFrames = [];

  if (anyOfFrames && Array.isArray(anyOfFrames)) {
    anyOfFrames.map(function (choice) {
      var choiceStructure = {};

      for (var chItems in choice) {
        if (chItems === "properties") {
          var propertyStructure = {};

          for (var props in choice["properties"]) {
            // remove default values
            propertyStructure[props] = {}; // do not remove default of info, since required in extract.js

            if (props === "info") {
              propertyStructure[props] = choice["properties"][props];
            } else {
              for (var pItem in choice["properties"][props]) {
                if (pItem !== "default") {
                  propertyStructure[props][pItem] = choice["properties"][props][pItem];
                }
              }
            }
          }

          choiceStructure["properties"] = propertyStructure;
        } else choiceStructure[chItems] = choice[chItems];
      }

      emptyAnyOfFrames.push(choiceStructure);
    });
  }

  return emptyAnyOfFrames;
}
/**
 * 
 * @param {*} documentation - documentation object which contains labels and comments
 * @param {*} item - item 
 * @returns - returns label in which item is to be displayed in UI 
 */


function getLabelFromDocumentation(item, documentation) {
  if (!documentation) return item;

  if (documentation.hasOwnProperty("@properties")) {
    for (var props in documentation["@properties"]) {
      if (props === item) {
        return documentation["@properties"][props];
      }
    }
  }

  return item;
}
/**
 * 
 * @param {*} frame - full frame from a data product
 * @param {*} item - item 
 * @returns - returns documentation of item of interest
 */


function extractDocumentation(frame, item) {
  var documentation = {};

  if (frame.hasOwnProperty(item) && frame[item].hasOwnProperty(_constants.DOCUMENTATION)) {
    documentation = frame[item][_constants.DOCUMENTATION];
  }

  return documentation;
}
/**
 * 
 * @param {*} fullFrame - full frame from a data product
 * @param {*} documentClass - choice document classes 
 */


function extractChoiceDocumentLabels(frame, choice) {
  if (frame.hasOwnProperty(choice) && frame[choice].hasOwnProperty(_constants.DOCUMENTATION) && frame[choice][_constants.DOCUMENTATION].hasOwnProperty("@comment")) {
    return frame[choice][_constants.DOCUMENTATION]["@comment"];
  }

  return choice;
}
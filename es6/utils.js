"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayFieldTemplate = ArrayFieldTemplate;
exports.checkIfKey = checkIfKey;
exports.formatData = formatData;
exports.getDefaultValue = getDefaultValue;
exports.getDependencies = getDependencies;
exports.getFieldTitle = getFieldTitle;
exports.getOptionalSelect = getOptionalSelect;
exports.getPrefix = getPrefix;
exports.getRequiredSelect = getRequiredSelect;
exports.getRequiredSelect_ol = getRequiredSelect_ol;
exports.getSetTitle = getSetTitle;
exports.getSubDocumentDescription = getSubDocumentDescription;
exports.getSubDocumentTitle = getSubDocumentTitle;
exports.getTitle = getTitle;
exports.getValueHashMessage = getValueHashMessage;
exports.isSubDocumentType = exports.isSetType = exports.isOptionalType = exports.isEnumType = exports.isDocumentType = exports.isDataType = void 0;
exports.isValueHashDocument = isValueHashDocument;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _constants = require("./constants");

var _bi = require("react-icons/bi");

var _ri = require("react-icons/ri");

var _fc = require("react-icons/fc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//returns extracted prefix
function getPrefix(frame) {
  if (!frame) return TDB_SCHEMA;
  var key = Object.keys(frame)[0];
  var arr = key.split("#");
  return arr[0] + "#";
} // returns true for properties which are of data types xsd and xdd


var isDataType = function isDataType(property) {
  if (_typeof(property) === "object") return false;
  if (property.substring(0, 4) == _constants.XSD_DATA_TYPE_PREFIX) return true;
  if (property.substring(0, 4) == _constants.XDD_DATA_TYPE_PREFIX) return true;
}; // returns true for properties which are subdocuments


exports.isDataType = isDataType;

var isSubDocumentType = function isSubDocumentType(property) {
  if (property["@subdocument"]) return true;
  return false;
}; // returns true for optional


exports.isSubDocumentType = isSubDocumentType;

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
}; // returns true for properties pointing to other documents or enums


exports.isSetType = isSetType;

var isDocumentType = function isDocumentType(property, frame, prefix) {
  if (_typeof(property) === "object") return false;
  if (!frame) return false;
  var document = "".concat(prefix).concat(property);

  if (frame[document]) {
    if (frame[document]["@type"] === _constants.DOCUMENT) return true;
  }

  return false;
}; // returns true for properties ponting to an enum class


exports.isDocumentType = isDocumentType;

var isEnumType = function isEnumType(property) {
  if (_typeof(property) !== "object") return false;
  if (property["@type"] === _constants.ENUM) return true;
}; // field array to display field titles


exports.isEnumType = isEnumType;

function getSubDocumentTitle(item) {
  var title = [];
  title.push( /*#__PURE__*/_react["default"].createElement("h6", {
    style: {
      display: "contents"
    }
  }, item)); //<GoFileSubmodule className="mr-2"/>

  return title;
}

function getSubDocumentDescription(item) {
  var descr = [];
  descr.push( /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-muted fw-bold"
  }, "".concat(item, " is a sub document. If you wish to fill a property of ").concat(item, " make sure all mandatory fields are entered."))); // /<BiErrorCircle className="mr-2"/>

  return descr;
}

function getTitle(item, uiDisable) {
  if (uiDisable) return /*#__PURE__*/_react["default"].createElement("span", {
    title: "".concat(item, " is a key field. Once created, you will not be able to update this field.")
  }, /*#__PURE__*/_react["default"].createElement(_fc.FcKey, {
    className: "mr-2"
  }), item);else return /*#__PURE__*/_react["default"].createElement("span", null, item);
}

function getSetTitle(item) {
  return item;
} // field array to display key fields


function getFieldTitle(item, uiDisable) {
  if (uiDisable) return /*#__PURE__*/_react["default"].createElement("span", {
    title: "".concat(item, " is a key field. Once created, you will not be able to update this field.")
  }, /*#__PURE__*/_react["default"].createElement(_fc.FcKey, {
    className: "mr-2"
  }), item);
} // get default values to document/ enum types


function getDefaultValue(item, formData) {
  var match;

  for (var key in formData) {
    if (key === item) {
      match = formData[key];
    }
  }

  return match;
}

function ArrayFieldTemplate(props) {
  //console.log("props", props)
  var variant = "dark";
  if (props.schema.info === "SUBDOCUMENT") variant = "secondary";
  /*
  	{props.TitleField && (props.schema.info==="SUBDOCUMENT") && getTitle(props.schema.title, "SUBDOCUMENT")}
  		{props.TitleField && (props.schema.info!=="SUBDOCUMENT") &&  getTitle(props.schema.title)}
  		{props.DescriptionField && (props.schema.info==="SUBDOCUMENT") && getDescription(props.schema.title)}
  		*/

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: props.className
  }, /*#__PURE__*/_react["default"].createElement("span", null, props.title), props.items && props.items.map(function (element) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: element.key,
      className: element.className
    }, /*#__PURE__*/_react["default"].createElement("div", null, element.children), element.hasMoveDown && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
      variant: variant,
      className: "mb-3 tdb__array__item__list bg-transparent border-0",
      title: "Move Down",
      onClick: element.onReorderClick(element.index, element.index + 1)
    }, /*#__PURE__*/_react["default"].createElement(FaArrowDown, {
      className: "text-light",
      style: {
        fontSize: "20px"
      }
    })), element.hasMoveUp && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
      variant: variant,
      title: "Move Up",
      className: "mb-3 tdb__array__item__list bg-transparent border-0",
      onClick: element.onReorderClick(element.index, element.index - 1)
    }, /*#__PURE__*/_react["default"].createElement(FaArrowUp, {
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
} // removes properties with no filled values on submit form


function formatData(formData) {
  var extracted = {};

  for (var key in formData) {
    if (Array.isArray(formData[key])) {
      //array
      var newArray = [];
      formData[key].map(function (arr) {
        if (Object.keys(arr).length !== 1) {
          newArray.push(arr);
        }
      });
      if (newArray.length !== 0) extracted[key] = newArray;
    } else if (Object.keys(formData[key]).length !== 1) {
      //json
      extracted[key] = formData[key];
    } else if (formData[key] === "" || formData[key] === undefined) {
      // string
      extracted[key] = formData[key];
    }
  }

  return extracted;
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
  if (frame["@key"]["@type"] && frame["@key"]["@type"] === _constants.VALUE_HASH_KEY) {
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
}
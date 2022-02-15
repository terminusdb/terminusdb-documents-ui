"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayFieldTemplate = ArrayFieldTemplate;
exports.checkIfKey = checkIfKey;
exports.extractClassName = extractClassName;
exports.formatData = formatData;
exports.getDefaultValue = getDefaultValue;
exports.getDependencies = getDependencies;
exports.getFieldTitle = getFieldTitle;
exports.getOptionalSelect = getOptionalSelect;
exports.getOptionalSelect_OLD = getOptionalSelect_OLD;
exports.getPrefix = getPrefix;
exports.getRequiredForListSubDocs = getRequiredForListSubDocs;
exports.getRequiredSelect = getRequiredSelect;
exports.getRequiredSelect_ol = getRequiredSelect_ol;
exports.getSetTitle = getSetTitle;
exports.getSubDocumentDescription = getSubDocumentDescription;
exports.getSubDocumentTitle = getSubDocumentTitle;
exports.getTitle = getTitle;
exports.getValueHashMessage = getValueHashMessage;
exports.isEnumType = exports.isDocumentType = exports.isDocumentClassArrayType = exports.isDataType = void 0;
exports.isFilled = isFilled;
exports.isSubDocumentType = exports.isSubDocumentAndClassType = exports.isSetType = exports.isOptionalType = exports.isListType = void 0;
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//returns extracted prefix
function getPrefix(frame) {
  if (!frame) return _constants.TDB_SCHEMA;
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
}; // returns true for List


exports.isSetType = isSetType;

var isListType = function isListType(property) {
  if (_typeof(property) !== "object") return false;
  if (property["@type"] === _constants.LIST) return true;
  return false;
}; // returns true for properties pointing to other documents or enums


exports.isListType = isListType;

var isDocumentType = function isDocumentType(property, frame, prefix) {
  if (_typeof(property) === "object") return false;
  if (!frame) return false;
  var document = "".concat(prefix).concat(property);

  if (frame[document]) {
    if (frame[document]["@type"] === _constants.DOCUMENT && !frame[document]["@subdocument"]) return true;
  }

  return false;
}; // returns true if @subdocuments and type class


exports.isDocumentType = isDocumentType;

var isSubDocumentAndClassType = function isSubDocumentAndClassType(property, frame, prefix) {
  if (_typeof(property) === "object") return false;
  if (!frame) return false;
  var document = "".concat(prefix).concat(property);

  if (frame[document]) {
    if (frame[document]["@type"] === _constants.DOCUMENT && frame[document]["@subdocument"]) return true;
  }

  return false;
}; // returns true if @type is Array and item is coordinates


exports.isSubDocumentAndClassType = isSubDocumentAndClassType;

var isDocumentClassArrayType = function isDocumentClassArrayType(frame) {
  if (_typeof(frame) !== "object") return false;
  if (frame.hasOwnProperty("@type") && frame["@type"] === _constants.ARRAY) return true;
  return false;
}; // returns true for properties ponting to an enum class


exports.isDocumentClassArrayType = isDocumentClassArrayType;

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
    key: item,
    title: "".concat(item, " is a key field. Once created, you will not be able to update this field.")
  }, /*#__PURE__*/_react["default"].createElement(_fc.FcKey, {
    className: "mr-2"
  }), item);else return /*#__PURE__*/_react["default"].createElement("span", {
    key: item
  }, item);
}

function getSetTitle(item) {
  return item;
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
  var match;

  for (var key in formData) {
    if (key === item) {
      match = formData[key];
      return match;
    }
  }

  return match;
} // List required min 1 item in it so forthe first subdocument we make all its fields mandatory


function getRequiredForListSubDocs(properties) {
  var required = [];

  for (var key in properties) {
    if (key !== "@type") required.push(key);
  }

  return required;
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
}

function removeEmptyFields(data) {
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      if (data[key] === undefined) continue;
      if (Array.isArray(data[key])) continue; // coordinates

      if (Object.keys(data[key]).length && _typeof(data[key]) === 'object') {
        var cleaned = removeEmptyFields(data[key]);

        if (Object.keys(cleaned).length === 1 && cleaned["@type"]) {
          cleaned = {};
        }

        if (Array.isArray(cleaned) && cleaned.length === 0) {
          delete data[key];
        } else if (Object.keys(cleaned).length === 0) {
          delete data[key];
        } else data[key] = cleaned;
      } else if (Object.keys(data[key]).length && typeof data[key] === 'string') {
        if (data[key] === _constants.SYS_UNIT_DATA_TYPE) data[key] = {};else data[key] = data[key];
      } else {
        delete data[key];
      }
    }
  }

  return data;
}

function modifyCoordinates(data) {
  // convert strings to array - ['[125.6, 15.1]', '[125.6, 10.1]']
  var newArray = [];
  data.map(function (dat) {
    var splits = dat.split(",");
    var lat = Number(splits[0]);
    var lng = Number(splits[1]);
    newArray.push([lat, lng]);
  });
  return newArray;
}

function containsGeoTypes(json) {
  // altering data
  if (json.hasOwnProperty("Point")) return json["Point"];
  if (json.hasOwnProperty("LineString")) return json["LineString"];
  return false;
} //alter formData of one of data


function modifyOneOfData(mode, schema, data) {
  var modifiedData = {};

  for (var item in data) {
    if (item === _constants.ONEOFVALUES) {
      // dont use "@oneOf"
      //if(data[item] === undefined) return {} // for sys:Unit
      return data[item];
    }

    if (item === "coordinates" && Array.isArray(data[item])) {
      // coordinates geo

      /*let newArr = modifyCoordinates(data[item])
      console.log("^^^newArr ^^^", newArr)
      modifiedData[item] = newArr*/
      //if(schema.properties.hasOwnProperty(item) && schema.properties[item].hasOwnProperty(DIMENSION)) {
      if (data.hasOwnProperty("@type") && data["@type"] === "Point") {
        modifiedData[item] = data[item];
      } else if (data.hasOwnProperty("@type") && data["@type"] === "LineString") {
        modifiedData[item] = data[item];
      }
    } else if (Array.isArray(data[item])) {
      data[item].map(function (amd) {
        if (typeof amd === "string") modifiedData[item] = data[item];else modifiedData[item] = [modifyOneOfData(mode, schema, amd)];
      });
    } else if (_typeof(data[item]) === "object") {
      var modified = modifyOneOfData(mode, schema, data[item]);

      if (containsGeoTypes(modified)) {
        modifiedData[item] = containsGeoTypes(modified);
      } else modifiedData[item] = modified;
    } else modifiedData[item] = data[item];
  }

  console.log("****** modifiedData ****", modifiedData);
  return modifiedData;
} //alter formData of choice classes


function modifyChoiceTypeData(mode, schema, data, frame) {
  var modifiedData = data;

  for (var item in schema.properties) {
    if (schema.properties[item].hasOwnProperty("info") && schema.properties[item]["info"] === _constants.ONEOFCLASSES) {
      if (modifiedData.hasOwnProperty(item) && modifiedData[item]) {
        if (Array.isArray(modifiedData[item])) {
          //set
          if (mode === _constants.CREATE) {
            (function () {
              var newArray = [];
              modifiedData[item].map(function (things) {
                for (var keys in things) {
                  //if(things[keys].hasOwnProperty("@type")) {
                  newArray.push(things[keys]); //}
                }
              }); //console.log("newArray///", newArray)
              // for OneOfClasses layout is different from Create

              modifiedData[item] = newArray;
            })();
          }
        } else {
          //optional or mandatory
          for (var thing in data[item]) {
            if (Object.keys(data[item][thing]).length) {
              // one ofs for document classes
              modifiedData[item] = data[item][thing];
            }
          }
        }
      }
    }
  }

  return modifiedData;
} // removes properties with no filled values on submit form


function formatData(mode, schema, data, frame, current) {
  var extracted = {};
  var currentFrame = frame[current]; //let formData=data

  var modifiedData = modifyChoiceTypeData(mode, schema, data, frame);
  var formData = modifyOneOfData(mode, schema, modifiedData, frame);

  for (var key in formData) {
    var newArray = [];
    if (formData[key] === undefined) continue;

    if (Array.isArray(formData[key])) {
      //array
      formData[key].map(function (arr) {
        if (Object.keys(arr).length === 1 && arr["@type"]) {//console.log("removing sub docs with only @type defined")
        } else {
          if (currentFrame[key]["@type"] === "Set" && Array.isArray(currentFrame[key].hasOwnProperty("@class")) && !currentFrame[key].hasOwnProperty(_constants.SUBDOCUMENT)) {
            // for choice sets: example - "reactors": {"@class": ["PowerReactor","AtomicReactor"],"@type": "Set"}
            for (var thing in arr) {
              newArray.push(arr[thing]);
            }
          } else newArray.push(arr);
        }
      });
      if (newArray.length !== 0) extracted[key] = newArray;
    } else if (Object.keys(formData[key]).length !== 1) {
      //json
      extracted[key] = formData[key];
    } else if (Object.keys(formData[key]).length === 1 && Object.keys(formData[key])[0] !== "@type") {
      //json
      extracted[key] = formData[key];
    } else if (formData[key] === "" || formData[key] === undefined) {
      // string
      extracted[key] = formData[key];
    }
  }

  console.log("extracted", extracted);
  var extr = removeEmptyFields(extracted);
  return extr;
} // function checks if formData has a filled value for item


function isFilled(formData, item) {
  if (formData[item]) return true;
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


function extractClassName(document, fullFrame, prefix) {
  var str = document;
  var splits = str.split('/');
  var documentClass = splits[0];

  if (fullFrame.hasOwnProperty("".concat(prefix).concat(documentClass))) {
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
}
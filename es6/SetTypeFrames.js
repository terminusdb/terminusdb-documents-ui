"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSetData = makeSetData;
exports.makeSetDocuments = makeSetDocuments;
exports.makeSetOneOfClassFrames_OLD = makeSetOneOfClassFrames_OLD;
exports.makeSetSubDocuments = makeSetSubDocuments;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _constants = require("./constants");

var _reactBootstrap = require("react-bootstrap");

var _async = _interopRequireDefault(require("react-select/async"));

var _reactBootstrapTypeahead = require("react-bootstrap-typeahead");

var _FrameViewer = require("./FrameViewer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//Set Subdocuments
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
  }; // remove hidden widgets from frames - logic for default in subdocuments done here

  for (var key in setFrames.uiSchema[item]) {
    if (setFrames.uiSchema[item][key]["ui:widget"] && key !== "@type" && setFrames.uiSchema[item][key]["ui:widget"] === "hidden") {
      delete setFrames.uiSchema[item][key]["ui:widget"];
    }
  }

  if (mode !== _constants.CREATE && formData.hasOwnProperty(item)) {
    var filledItems = [];
    propertiesUI[item] = {
      "items": []
    };
    var subFrames = (0, _utils.removeDefaultsFromSubDocumentFrame)(setFrames.properties[item]["properties"]);

    if (formData.hasOwnProperty(item)) {
      var checkProperties = function checkProperties(properties, value) {
        for (var props in properties) {
          if (props === "@oneOf") {
            // alter the structure for @oneOf type
            for (var thing in value) {
              properties[props]["oneOf"].map(function (aOf) {
                if (aOf["properties"] && aOf["properties"][thing]) {
                  properties[thing] = aOf["properties"][thing];
                  properties[thing].info = _constants.ONEOFSUBDOCUMENTS;
                }
              });
            }

            propertiesUI[item]["items"][0][thing] = setFrames.uiSchema[item][props][thing];

            if (mode === _constants.VIEW) {
              // hide one of calue which are empty
              for (var thing in value) {
                for (var uiProps in propertiesUI[item]["items"][0][thing]) {
                  if (!value[thing][uiProps]) {
                    if (propertiesUI[item]["items"][0][thing][uiProps]["ui:title"]) {
                      // use ui:title here to see the fields - review later
                      var hidden = function hidden() {
                        return /*#__PURE__*/_react["default"].createElement("div", null);
                      };

                      propertiesUI[item]["items"][0][thing][uiProps] = {
                        "ui:field": hidden
                      };
                    }
                  }
                }
              }
            }

            delete properties[props];
          }
        }

        return properties;
      };

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
        console.log("defaultValues[count]", defaultValues[count], setFrames.properties[item]["properties"]);
        var subProperties = setFrames.properties[item]["properties"];

        if (subProperties.hasOwnProperty(_constants.ONEOFVALUES)) {
          subProperties[_constants.ONEOFVALUES]["anyOf"].map(function (aOf) {
            if (defaultValues[count].hasOwnProperty(aOf["title"])) {
              // filled value available
              //let stuff = aOf.properties[aOf["title"]].properties
              console.log("aOf", aOf);
              aOf.properties[aOf["title"]]["default"] = defaultValues[count][aOf["title"]];
            }
          });

          filledItems.push({
            type: "object",
            //properties: checkProperties(setFrames.properties[item]["properties"], value), //setFrames.properties[item]["properties"],
            properties: setFrames.properties[item]["properties"],
            "default": defaultValues[count]
          });
        } else {
          filledItems.push({
            type: "object",
            //properties: checkProperties(setFrames.properties[item]["properties"], value), //setFrames.properties[item]["properties"],
            properties: setFrames.properties[item]["properties"],
            "default": defaultValues[count]
          });
        }

        count += 1;
      });
    }

    console.log("filledItems filledItems something", filledItems);
    layout["items"] = filledItems;
  } //schema


  properties[item] = layout;
  console.log("properties befire something", properties); // get filled values on View mode

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
              className: "text-gray  tdb__span__select",
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

        if (it.properties[thing].info === "SUBDOCUMENT" && it["default"]) {
          for (var flds in it.properties[thing].properties) {
            var _getFieldValue = function _getFieldValue(props) {
              if (!props.formData || props.formData === undefined) return /*#__PURE__*/_react["default"].createElement("span", {
                className: "tdb__blank"
              });
              return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, props.name), /*#__PURE__*/_react["default"].createElement("span", null, props.formData));
            };

            if (flds === "@type") propertiesUI[item]["items"][count][thing][flds]["ui:widget"] = "hidden";else propertiesUI[item]["items"][count][thing][flds]["ui:field"] = _getFieldValue;
          }
        }
        /*if(it.properties[thing].info === ONEOFSUBDOCUMENTS && it.default){ // we alter properties of @oneOf
            for(var flds in it.properties[thing].properties) {
                function getFieldValue(props){
                    if(!props.formData ||  props.formData===undefined)
                        return <span className="tdb__blank"></span>
                    return <React.Fragment>
                        <Form.Label>{props.name}</Form.Label>
                        <span>{props.formData}</span>
                    </React.Fragment>
                }
                 //propertiesUI[item]["items"].push(setFrames.uiSchema[item][props][thing])
                //if(flds === "@type") propertiesUI[item]["items"][count][thing][flds]["ui:widget"]="hidden"
                //else propertiesUI[item]["items"][count][thing][flds]["ui:field"]=getFieldValue
            }
        }*/


        if (it.properties[thing].info === "CHOICE") {
          var _getFieldValue2 = function _getFieldValue2(props) {
            if (!props.formData || props.formData === undefined) return /*#__PURE__*/_react["default"].createElement("span", {
              className: "tdb__blank"
            });
            return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, {
              className: "col-md-1"
            }, props.name), /*#__PURE__*/_react["default"].createElement("span", null, props.formData.value));
          };

          propertiesUI[item]["items"][count][thing] = {
            "ui:field": _getFieldValue2
          };
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
    var hidden = function hidden() {
      return /*#__PURE__*/_react["default"].createElement("div", null);
    };

    propertiesUI[item] = {
      "ui:field": hidden
    }; //propertiesUI[item] = {"ui:widget" : "hidden"}
  }

  console.log("properties SET", properties);
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} //Set Data types


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
    var subFrames = (0, _utils.removeDefaultsFromDataFrame)(setFrames.properties[item]["properties"]);
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
    propertiesUI[item]["ui:title"] = item;
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} //Set Document Classes


function makeSetDocuments(setFrames, item, selectDocType, uiFrame, mode, formData, onTraverse, onSelect) {
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


  properties[item] = layout; // get select component with no required

  function getOptionalSelect(props) {
    var loadOptions = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(inputValue, callback) {
        var opts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return onSelect(inputValue, selectDocType);

              case 2:
                opts = _context.sent;
                callback(opts);
                return _context.abrupt("return", opts);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function loadOptions(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    var handleInputChange = function handleInputChange(newValue) {
      var inputValue = newValue.replace(/\W/g, '');
      return inputValue;
    };

    function onChange(e) {
      props.onChange(e.value);
    }

    if (props.formData) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, props.name, " "), /*#__PURE__*/_react["default"].createElement(_async["default"], {
        cacheOptions: true,
        classNames: "tdb__input",
        styles: _constants.SELECT_STYLES,
        placeholder: props.uiSchema["ui:placeholder"],
        onChange: onChange,
        loadOptions: loadOptions,
        defaultOptions: true,
        defaultValue: {
          value: props.formData,
          label: props.formData
        },
        onInputChange: handleInputChange
      }));
    }

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, props.name, " "), /*#__PURE__*/_react["default"].createElement(_async["default"], {
      cacheOptions: true,
      classNames: "tdb__input",
      styles: _constants.SELECT_STYLES,
      placeholder: props.uiSchema["ui:placeholder"],
      onChange: onChange,
      loadOptions: loadOptions,
      onInputChange: handleInputChange
    }));
  }

  function getOptionalTypeAheadSelect(props) {
    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        isLoading = _useState4[0],
        setIsLoading = _useState4[1];

    var _useState5 = (0, _react.useState)([]),
        _useState6 = _slicedToArray(_useState5, 2),
        options = _useState6[0],
        setOptions = _useState6[1];

    var handleSearch = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(inputValue) {
        var opts;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                setIsLoading(true);
                _context2.next = 3;
                return onSelect(inputValue, props.schema.linked_to);

              case 3:
                opts = _context2.sent;
                setOptions(opts);
                setIsLoading(false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function handleSearch(_x3) {
        return _ref2.apply(this, arguments);
      };
    }(); // Bypass client-side filtering by returning `true`. Results are already
    // filtered by the search endpoint, so no need to do it again.


    var filterBy = function filterBy() {
      return true;
    };

    var getLabelKey = function getLabelKey(option) {
      props.onChange(option.value);
      return option.label;
    };

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, props.name, " ", /*#__PURE__*/_react["default"].createElement("span", {
      "class": "required"
    }, "*"), " "), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Group, {
      className: "d-flex"
    }, /*#__PURE__*/_react["default"].createElement(_reactBootstrapTypeahead.AsyncTypeahead, {
      filterBy: filterBy,
      id: "".concat(props.name, "_async_search"),
      isLoading: isLoading //labelKey={(option) => `${option.label}`}
      ,
      labelKey: function labelKey(option) {
        return "".concat(getLabelKey(option));
      },
      minLength: 2,
      onSearch: handleSearch,
      options: options,
      classNames: "tdb__input",
      styles: _constants.SELECT_STYLES,
      placeholder: "Type to search for ".concat(props.schema.linked_to, " ..."),
      renderMenuItemChildren: function renderMenuItemChildren(option, props) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, option.label));
      }
    })));
  } //default ui:schema


  if (mode !== _constants.VIEW && setFrames.uiSchema[item] && setFrames.uiSchema[item]["ui:field"]) {
    setFrames.uiSchema[item]["ui:field"] = getOptionalSelect; //setFrames.uiSchema[item]["ui:field"]=getOptionalTypeAheadSelect
  }

  function getViewSelect(props) {
    var _useState7 = (0, _react.useState)(false),
        _useState8 = _slicedToArray(_useState7, 2),
        clicked = _useState8[0],
        setClicked = _useState8[1];

    (0, _react.useEffect)(function () {
      if (!clicked) return;
      if (onTraverse) onTraverse(clicked);
    }, [clicked]);

    var handleClick = function handleClick(e, value) {
      // view if on traverse function defined
      setClicked(value);
    };

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, {
      className: "control-label"
    }, item), /*#__PURE__*/_react["default"].createElement("span", {
      onClick: function onClick(e) {
        return handleClick(e, props.formData);
      },
      className: "tdb__span__select form-control"
    }, props.formData));
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
} // Set One Of Class frames


function makeSetOneOfClassFrames_OLD(fullFrame, frame, item, uiFrame, mode, formData, prefix) {
  var properties = {},
      propertiesUI = {};
  var anyOfArray = [];

  function getUIField(props) {
    var formDataValue = props.schema.hasOwnProperty("default") ? props.schema["default"] : {};

    var _useState9 = (0, _react.useState)(formDataValue),
        _useState10 = _slicedToArray(_useState9, 2),
        input = _useState10[0],
        setInput = _useState10[1];

    var schema = fullFrame;

    function handleFormChange(data) {
      var jsonData = {
        "@type": props.name,
        "@info": _constants.ONEOFCLASSES
      };
      setInput(data);

      for (var thing in data) {
        jsonData[thing] = data[thing];
      }

      if (props.onChange) {
        //console.log("value stored in props", jsonData)
        props.onChange(jsonData);
      }
    }

    var uiSchema = {
      classNames: "card bg-secondary p-4 mt-4 mb-4"
    };
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.name, /*#__PURE__*/_react["default"].createElement(_FrameViewer.FrameViewer, {
      frame: schema,
      mode: mode,
      hideSubmit: true,
      onChange: handleFormChange,
      type: props.name,
      uiFrame: uiSchema,
      formData: input
    }));
  }

  function extractProperties(subFrame, documentClass, item, formData, count, mode) {
    var structure = {};
    structure = {
      title: documentClass,
      properties: _defineProperty({}, documentClass, {
        type: _typeof(subFrame) === "object" ? "object" : "string"
      })
    };

    if (mode !== _constants.CREATE && formData.hasOwnProperty(item)) {
      formData[item].map(function (par) {
        if (_typeof(subFrame) === "object" && par.hasOwnProperty("@type") && par["@type"] === documentClass) {
          structure.properties[documentClass]["default"] = par;
        } else if (typeof subFrame === "string") {
          structure.properties[documentClass]["default"] = par;
        }
      });
    }

    if (mode !== _constants.CREATE && formData.hasOwnProperty(item) && formData[item][count]["@type"] !== documentClass) {
      return {};
    } else return structure;
  }

  if (frame[item] && Array.isArray(frame[item])) {
    var extracted = [],
        documentClass,
        documentClassUi = {};
    var count = 0;
    frame[item].map(function (it) {
      if (_typeof(it) === "object") {
        documentClass = it["@class"];
        extracted.push(extractProperties(it, it["@class"], item, formData, count, mode));
        documentClassUi[documentClass] = {
          "ui:field": getUIField
        };
      } else {
        // document class
        documentClass = it;
        extracted.push(extractProperties(it, it, item, formData, count, mode));
      }

      count += 1;
    });
    anyOfArray = extracted; //item property ui

    if (mode === _constants.VIEW && !formData.hasOwnProperty(item)) {
      // do not display if no value in formdata
      propertiesUI[item] = {};
    }

    propertiesUI[item] = {
      "items": documentClassUi
    };
  }

  var layout = {};

  if (Array.isArray(frame[item]) && frame[item].length > 0) {
    layout = {
      type: "array",
      info: "DATA",
      title: item,
      description: "Choose ".concat(item, " from the list ..."),
      items: {
        type: "object",
        anyOf: anyOfArray
      }
    };
  }

  if (mode === _constants.VIEW && !formData.hasOwnProperty(item)) {
    // do not display
    layout = {
      type: 'object',
      info: "DATA",
      title: item
    };
  } //if(mode !== CREATE && formData.hasOwnProperty(item)) {
  //layout["default"]=getDefaultValue(item, formData)
  //}
  // schema


  properties[item] = layout;
  propertiesUI[item]["ui:title"] = (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"]));
  propertiesUI[item]["classNames"] = mode === _constants.VIEW ? "tdb__input mb-3 mt-3 form-label tdb__view__input" : "tdb__input mb-3 mt-3";

  if (mode !== _constants.VIEW) {
    // we do not allow to add extra on view mode
    // layout
    properties[item]["additionalItems"] = {
      type: "object",
      anyOf: anyOfArray
    }; //ui
    //propertiesUI[item]["additionalItems"]=setFrames.uiSchema[item]

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
  }

  if (mode === _constants.VIEW && !Array.isArray(formData) && !formData.hasOwnProperty(item)) {
    // set of subdocuments
    var hidden = function hidden() {
      return /*#__PURE__*/_react["default"].createElement("div", null);
    };

    propertiesUI[item]["ui:widget"] = hidden;
  } //custom ui:schema


  if (uiFrame && uiFrame[item]) {
    propertiesUI[item] = uiFrame[item];
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}
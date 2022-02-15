"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentTypeFrames = DocumentTypeFrames;
exports.choiceDocumentTypeFrames = choiceDocumentTypeFrames;
exports.makeChoiceDocumentTypeFrames = makeChoiceDocumentTypeFrames;
exports.makeDocumentTypeFrames = makeDocumentTypeFrames;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _constants = require("./constants");

var _reactBootstrap = require("react-bootstrap");

var _async = _interopRequireDefault(require("react-select/async"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _reactBootstrapTypeahead = require("react-bootstrap-typeahead");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function DocumentTypeFrames(frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect) {
  var properties = {},
      propertiesUI = {};
  var type = frame[item];
  var layout = {
    type: 'string',
    info: _constants.DOCUMENT,
    linked_to: frame[item],
    title: item //enum: documents ? documents[type] : {}

  }; //schema

  properties[item] = layout;

  if (mode !== _constants.CREATE) {
    layout["default"] = (0, _utils.getDefaultValue)(item, formData);
  } // view


  function getViewSelect(props) {
    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        clicked = _useState2[0],
        setClicked = _useState2[1];

    (0, _react.useEffect)(function () {
      if (!clicked) return;
      if (onTraverse) onTraverse(clicked);
    }, [clicked]);

    var handleClick = function handleClick(e, val) {
      // view if on traverse function defined
      setClicked(val);
    };

    if (!layout["default"]) return /*#__PURE__*/_react["default"].createElement("div", null);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, {
      className: "control-label"
    }, item), /*#__PURE__*/_react["default"].createElement("span", {
      onClick: function onClick(e) {
        return handleClick(e, layout["default"]);
      },
      className: "tdb__span__select form-control"
    }, layout["default"]));
  } // create and edit


  function getSelect(props) {
    var loadOptions = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(inputValue, callback) {
        var opts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return onSelect(inputValue, frame[item]);

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

    if (layout["default"]) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, props.name, " ", /*#__PURE__*/_react["default"].createElement("span", {
        "class": "required"
      }, "*"), " "), /*#__PURE__*/_react["default"].createElement(_async["default"], {
        cacheOptions: true,
        classNames: "tdb__input",
        styles: _constants.SELECT_STYLES,
        placeholder: props.uiSchema["ui:placeholder"],
        onChange: onChange,
        loadOptions: loadOptions,
        defaultOptions: true,
        defaultValue: {
          value: layout["default"],
          label: layout["default"]
        },
        onInputChange: handleInputChange
      }));
    }

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, props.name, " ", /*#__PURE__*/_react["default"].createElement("span", {
      "class": "required"
    }, "*"), " "), /*#__PURE__*/_react["default"].createElement(_async["default"], {
      cacheOptions: true,
      classNames: "tdb__input",
      styles: _constants.SELECT_STYLES,
      placeholder: props.uiSchema["ui:placeholder"],
      onChange: onChange,
      loadOptions: loadOptions,
      onInputChange: handleInputChange
    }));
  }

  function getTypeAheadSelect(props) {
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
                return onSelect(inputValue, frame[item]);

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
    }();

    var getLabelKey = function getLabelKey(option) {
      props.onChange(option.value);
      return option.label;
    };

    var getDefaultSelected = function getDefaultSelected() {
      if (mode === _constants.EDIT && formData.hasOwnProperty(item)) {
        return formData[item];
      }
    }; // Bypass client-side filtering by returning `true`. Results are already
    // filtered by the search endpoint, so no need to do it again.


    var filterBy = function filterBy() {
      return true;
    };

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, props.name, " ", /*#__PURE__*/_react["default"].createElement("span", {
      "class": "required"
    }, "*"), " "), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Group, {
      className: "d-flex"
    }, /*#__PURE__*/_react["default"].createElement(_reactBootstrapTypeahead.AsyncTypeahead, {
      clearButton: true,
      filterBy: filterBy,
      id: "".concat(props.name, "_async_search"),
      isLoading: isLoading,
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


  propertiesUI[item] = {
    "ui:disabled": mode === _constants.EDIT && (0, _utils.checkIfKey)(item, frame["@key"]) && (0, _utils.isFilled)(formData, item) ? true : false,
    //"ui:title": getTitle(item, checkIfKey(item, frame["@key"])),
    "ui:placeholder": "Search for ".concat(frame[item], " ..."),
    classNames: mode === _constants.VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
    "ui:field": mode === _constants.VIEW ? getViewSelect : getSelect
  };

  if (mode === _constants.VIEW && !layout.hasOwnProperty("default")) {
    propertiesUI[item]["ui:widget"] = "hidden";
  } //custom ui:schema


  if (uiFrame && uiFrame[item]) {
    propertiesUI[item] = uiFrame[item];
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
} // mandatory


function makeDocumentTypeFrames(frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect) {
  var madeFrames = DocumentTypeFrames(frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect);
  var required = item;
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI,
    required: required
  };
}

function choiceDocumentTypeFrames(frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect) {
  var properties = {},
      propertiesUI = {};
  var type = frame[item],
      oneOfArray = [];

  if (frame[item] && Array.isArray(frame[item])) {
    frame[item].map(function (it) {
      var structure = {
        title: it,
        properties: _defineProperty({}, it, {
          type: "string"
        })
      };
      oneOfArray.push(structure);
    });
  }

  var layout = {
    title: item,
    type: "array",
    items: {
      type: "object",
      oneOf: oneOfArray
    }
  };

  if (mode === _constants.VIEW) {
    layout = {
      title: item,
      type: "array"
    };

    if (formData.hasOwnProperty(item)) {
      var filledItems = [];
      var count = 0,
          defaultValues = formData[item];
      defaultValues.map(function (value) {
        filledItems.push({
          type: "string",
          "default": defaultValues[count]
        });
        count += 1;
      });
      layout["items"] = filledItems;
    }
  }

  if (mode !== _constants.CREATE) {//layout.default=getDefaultValue(item, formData)
  } //schema


  properties[item] = layout; //view

  function getViewSelect(props) {
    var _useState7 = (0, _react.useState)(false),
        _useState8 = _slicedToArray(_useState7, 2),
        clicked = _useState8[0],
        setClicked = _useState8[1];

    (0, _react.useEffect)(function () {
      if (!clicked) return;
      if (onTraverse) onTraverse(clicked);
    }, [clicked]);

    var handleClick = function handleClick(e, val) {
      // view if on traverse function defined
      setClicked(val);
    };

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, item), /*#__PURE__*/_react["default"].createElement("span", {
      onClick: function onClick(e) {
        return handleClick(e, props.formData);
      },
      className: "tdb__span__select"
    }, props.formData));
  } // create and edit


  function getSelect(props) {
    function constructOptions(docOptions) {
      var constructedOpts = [];
      docOptions.map(function (it) {
        constructedOpts.push({
          value: it,
          label: it
        });
      });
      return constructedOpts;
    }

    var opts = documents[props.name] ? constructOptions(documents[props.name]) : [];

    function onChange(e) {
      props.onChange(e.value);
    }

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, props.name, " ", /*#__PURE__*/_react["default"].createElement("span", {
      "class": "required"
    }, "*"), " "), /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], {
      classNames: "tdb__input",
      styles: _constants.SELECT_STYLES,
      placeholder: props.uiSchema["ui:placeholder"],
      onChange: onChange,
      options: opts
    }));
  }

  var itemUi = {};
  frame[item].map(function (it) {
    itemUi[it] = {
      "ui:placeholder": "Select ".concat(it, " ..."),
      classNames: mode === _constants.VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
      "ui:field": mode === _constants.VIEW ? getViewSelect : getSelect
    };
  });
  propertiesUI[item] = {
    classNames: mode === _constants.VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"])),
    "ui:placeholder": "Select ".concat(item, " ..."),
    "items": itemUi
  };

  if (mode !== _constants.VIEW) {
    propertiesUI[item]["ui:options"] = {
      addable: true,
      orderable: false,
      removable: true
    }, propertiesUI[item]["ui:ArrayFieldTemplate"] = _utils.ArrayFieldTemplate;
  } else if (mode === _constants.VIEW) {
    propertiesUI[item]["ui:options"] = {
      addable: false,
      orderable: false,
      removable: false
    };
    propertiesUI[item]["items"] = {
      classNames: mode === _constants.VIEW ? "tdb__input mb-3 mt-3 tdb__view__input" : "tdb__input mb-3 mt-3",
      "ui:field": getViewSelect
    }; //propertiesUI[item]["ui:field"] = getViewSelect
  } //custom ui:schema


  if (uiFrame && uiFrame[item]) {
    propertiesUI[item] = uiFrame[item];
  }

  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}

function makeChoiceDocumentTypeFrames(frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect) {
  var madeFrames = choiceDocumentTypeFrames(frame, item, uiFrame, documents, mode, formData, onTraverse, onSelect);
  var properties = madeFrames.properties;
  var propertiesUI = madeFrames.propertiesUI;
  return {
    properties: properties,
    propertiesUI: propertiesUI
  };
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCreateLayout = getCreateLayout;
exports.getCreateUILayout = getCreateUILayout;
exports.getEditLayout = getEditLayout;
exports.getEditUILayout = getEditUILayout;
exports.getViewLayout = getViewLayout;
exports.getViewUILayout = getViewUILayout;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _FrameHelpers = require("../FrameHelpers");

var _DocumentSelects = require("../documentTypeFrames/DocumentSelects");

var _async = _interopRequireDefault(require("react-select/async"));

var _reactBootstrap = require("react-bootstrap");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// get layout of document class
function getCreateDocumentLayout(documentClass, fullFrame) {
  var _properties;

  // review documentation in a bit ...
  var documentation = (0, _utils.extractDocumentation)(fullFrame, documentClass); //console.log("documentation +++", documentation)

  var layout = {
    "title": documentClass,
    "type": "object",
    "properties": (_properties = {}, _defineProperty(_properties, documentClass, {
      "type": "string"
    }), _defineProperty(_properties, "info", {
      "type": "string",
      "default": _constants.CHOICECLASSES,
      title: "info"
    }), _properties)
  };
  return layout;
} // get edit layout of document class


function getEditDocumentLayout(documentClass, formData) {
  var _properties2;

  var layout = {
    "title": documentClass,
    "type": "object",
    "properties": (_properties2 = {}, _defineProperty(_properties2, documentClass, {
      "type": "string",
      "default": formData ? formData : false
    }), _defineProperty(_properties2, "info", {
      "type": "string",
      "default": _constants.CHOICECLASSES,
      title: "info"
    }), _properties2)
  };
  return layout;
} // Create Layout


function getCreateLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
  // get choice documents
  var anyOfArray = [];
  frame[item].map(function (fr) {
    var documentClass = fr;
    anyOfArray.push(getCreateDocumentLayout(documentClass, fullFrame));
  });
  var layout = {
    type: 'object',
    info: _constants.CHOICECLASSES,
    title: item,
    description: "Choose ".concat(item, " from the list ..."),
    anyOf: anyOfArray
  };
  return layout;
}

function getCreateUILayout(frame, item, layout, uiFrame, onSelect, documentation) {
  var subDocuemntBg = (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) ? (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) : 'bg-secondary'; // extracting custom ui styles

  var selectStyle = (0, _utils.extractUIFrameSelectTemplate)(uiFrame) ? (0, _utils.extractUIFrameSelectTemplate)(uiFrame) : _constants.SELECT_STYLES;
  var uiLayout = {
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"]), documentation),
    //classNames: "tdb__input mb-3 mt-3",
    classNames: "card ".concat(subDocuemntBg, " p-4 mt-4 mb-4")
  };

  if (layout.hasOwnProperty("anyOf") && Array.isArray(layout.anyOf)) {
    layout.anyOf.map(function (aOf) {
      var choice = aOf.title;

      function getChoiceSelect(props) {
        var loadOptions = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(inputValue, callback) {
            var opts;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return onSelect(inputValue, choice);

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

        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, choice), /*#__PURE__*/_react["default"].createElement(_async["default"], {
          cacheOptions: true,
          classNames: "tdb__input",
          styles: selectStyle,
          placeholder: "Select ".concat(choice, " ..."),
          onChange: onChange,
          loadOptions: loadOptions,
          onInputChange: handleInputChange
        }));
      }

      uiLayout[choice] = {
        "ui:field": getChoiceSelect
      };
      uiLayout["info"] = {
        "ui:widget": "hidden"
      };
    });
  }

  console.log("!!! create layout", layout, uiLayout); // custom ui:schema - add to default ui schema

  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
} // Edit Layout


function getEditLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
  // get choice documents
  var anyOfArray = [];
  var defaultValue = formData && formData.hasOwnProperty(item) ? formData[item] : null;
  frame[item].map(function (fr) {
    var documentClass = fr;
    anyOfArray.push(getEditDocumentLayout(documentClass, defaultValue));
  });
  var layout = {
    type: 'object',
    info: _constants.CHOICECLASSES,
    title: item,
    description: "Choose ".concat(item, " from the list ..."),
    anyOf: anyOfArray
  };
  return layout;
}

function getEditUILayout(frame, item, layout, uiFrame, onSelect) {
  var subDocuemntBg = (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) ? (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) : 'bg-secondary'; // extracting custom ui styles

  var selectStyle = (0, _utils.extractUIFrameSelectTemplate)(uiFrame) ? (0, _utils.extractUIFrameSelectTemplate)(uiFrame) : _constants.SELECT_STYLES;
  var uiLayout = {
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"])),
    //classNames: "tdb__input mb-3 mt-3",
    classNames: "card ".concat(subDocuemntBg, " p-4 mt-4 mb-4")
  };

  if (layout.hasOwnProperty("anyOf") && Array.isArray(layout.anyOf)) {
    layout.anyOf.map(function (aOf) {
      var choice = aOf.title;

      function getChoiceSelect(props) {
        var _useState = (0, _react.useState)(props.formData ? {
          value: props.formData,
          label: props.formData
        } : null),
            _useState2 = _slicedToArray(_useState, 2),
            value = _useState2[0],
            setValue = _useState2[1]; // select value


        var loadOptions = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(inputValue, callback) {
            var opts;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return onSelect(inputValue, choice);

                  case 2:
                    opts = _context2.sent;
                    callback(opts);
                    return _context2.abrupt("return", opts);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function loadOptions(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }();

        var handleInputChange = function handleInputChange(newValue) {
          var inputValue = newValue.replace(/\W/g, '');
          return inputValue;
        };

        function onChange(e) {
          props.onChange(e.value);
        }

        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, value && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, choice), /*#__PURE__*/_react["default"].createElement(_async["default"], {
          cacheOptions: true,
          classNames: "tdb__input",
          styles: selectStyle,
          placeholder: "Select ".concat(choice, " ..."),
          onChange: onChange,
          loadOptions: loadOptions,
          defaultValue: value,
          onInputChange: handleInputChange
        })), !value && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, choice), /*#__PURE__*/_react["default"].createElement(_async["default"], {
          cacheOptions: true,
          classNames: "tdb__input",
          styles: selectStyle,
          placeholder: "Select ".concat(choice, " ..."),
          onChange: onChange,
          loadOptions: loadOptions,
          onInputChange: handleInputChange
        })));
      }

      uiLayout[choice] = {
        "ui:field": getChoiceSelect
      };
      uiLayout["info"] = {
        "ui:widget": "hidden"
      };
    });
  } //console.log("!!! edit layout", layout, uiLayout)


  return uiLayout;
} // View Layout


function getViewLayout(fullFrame, current, frame, item, uiFrame, mode, formData, onTraverse, onSelect) {
  // get choice documents
  var anyOfArray = [];
  var defaultValue = formData && formData.hasOwnProperty(item) ? formData[item] : null;
  var layout = {
    type: 'object',
    info: _constants.CHOICECLASSES,
    title: item,
    "default": defaultValue
  };
  return layout;
}

function getViewUILayout(frame, item, layout, uiFrame, onTraverse, onSelect) {
  function getViewChoice(props) {
    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        clicked = _useState4[0],
        setClicked = _useState4[1];

    (0, _react.useEffect)(function () {
      if (!clicked) return;
      if (onTraverse) onTraverse(clicked);
    }, [clicked]);

    var handleClick = function handleClick(e, val) {
      // view if on traverse function defined
      setClicked(val);
    };

    if (!frame.hasOwnProperty(item)) return /*#__PURE__*/_react["default"].createElement("div", null);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, {
      className: "control-label"
    }, item), /*#__PURE__*/_react["default"].createElement("span", {
      onClick: function onClick(e) {
        return handleClick(e, props.formData);
      },
      className: "tdb__span__select text-light"
    }, props.formData));
  }

  var uiLayout = {
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"])),
    //classNames: "tdb__input mb-3 mt-3",
    "ui:field": getViewChoice
  };
  return uiLayout;
}
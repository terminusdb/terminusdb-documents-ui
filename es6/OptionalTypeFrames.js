"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionalDocumentTypeFrames = OptionalDocumentTypeFrames;

var _react = _interopRequireWildcard(require("react"));

var _constants = require("./constants");

var _async = _interopRequireDefault(require("react-select/async"));

var _reactBootstrap = require("react-bootstrap");

var _reactBootstrapTypeahead = require("react-bootstrap-typeahead");

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

function OptionalDocumentTypeFrames(optionalFrames, item, mode, onSelect) {
  if (mode !== _constants.VIEW) {
    // get select component with no required
    var getOptionalSelect = function getOptionalSelect(props) {
      var loadOptions = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(inputValue, callback) {
          var classType, opts;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (optionalFrames.properties[item].type === "object") {
                    // subdocument
                    classType = optionalFrames.properties[item].properties[props.name].linked_to;
                  } else if (optionalFrames.properties[item].type === "string") {
                    // normal
                    classType = optionalFrames.properties[item].linked_to;
                  }

                  _context.next = 3;
                  return onSelect(inputValue, classType);

                case 3:
                  opts = _context.sent;
                  callback(opts);
                  return _context.abrupt("return", opts);

                case 6:
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
        //edit
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
    };

    var getOptionalTypeAheadSelect = function getOptionalTypeAheadSelect(props) {
      var _useState = (0, _react.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          isLoading = _useState2[0],
          setIsLoading = _useState2[1];

      var _useState3 = (0, _react.useState)([]),
          _useState4 = _slicedToArray(_useState3, 2),
          options = _useState4[0],
          setOptions = _useState4[1];

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
    };

    if (optionalFrames.properties[item] && optionalFrames.properties[item].properties) {
      // these for optional sets
      for (var props in optionalFrames.properties[item].properties) {
        if (optionalFrames.properties[item].properties[props].info === _constants.DOCUMENT && optionalFrames.uiSchema[item][props]) {
          optionalFrames.uiSchema[item][props]["ui:field"] = getOptionalSelect;
        }
      }
    } else {
      if (optionalFrames.properties[item].info === _constants.DOCUMENT) {
        optionalFrames.uiSchema[item]["ui:field"] = getOptionalSelect;
      }
    }
  } else {
    //view
    var getOptionalSelectView = function getOptionalSelectView(props) {
      var _useState5 = (0, _react.useState)(false),
          _useState6 = _slicedToArray(_useState5, 2),
          clicked = _useState6[0],
          setClicked = _useState6[1];

      (0, _react.useEffect)(function () {
        if (!clicked) return;
        if (onTraverse) onTraverse(clicked);
      }, [clicked]);

      var handleClick = function handleClick(e, val) {
        // view if on traverse function defined
        setClicked(val);
      };

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, {
        className: "contol-label"
      }, item), /*#__PURE__*/_react["default"].createElement("span", {
        onClick: function onClick(e) {
          return handleClick(e, props.formData);
        },
        className: "tdb__span__select form-control"
      }, props.formData));
    };

    if (optionalFrames.properties[item]["default"]) {
      if (optionalFrames.properties[item].info === _constants.DOCUMENT) {
        optionalFrames.uiSchema[item]["ui:field"] = getOptionalSelectView;
      }
    } else {
      if (optionalFrames.properties[item].info !== "SUBDOCUMENT") optionalFrames.uiSchema[item]["ui:widget"] = "hidden";
    }
  } // remove required


  if (Array.isArray(optionalFrames.properties[item].required)) {
    delete optionalFrames.properties[item].required;
  }

  return optionalFrames;
}
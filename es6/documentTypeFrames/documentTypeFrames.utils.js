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

var _constants = require("../constants");

var _reactBootstrap = require("react-bootstrap");

var _async = _interopRequireDefault(require("react-select/async"));

var _DocumentSelects = require("./DocumentSelects");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// create layout
function getCreateLayout(frame, item) {
  var layout = {
    type: 'string',
    info: _constants.DOCUMENT,
    linked_to: frame[item],
    title: item
  };
  return layout;
} // create ui layout


function getCreateUILayout(frame, item, onSelect, uiFrame, documentation) {
  var uiLayout = {};
  var label = (0, _utils.getLabelFromDocumentation)(item, documentation); // create

  function displayEmptySelect(props) {
    var _useState = (0, _react.useState)(props.formData ? {
      value: props.formData,
      label: props.formData
    } : null),
        _useState2 = _slicedToArray(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1]; // select value


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
      var inp = newValue.replace(/\W/g, '');
      return inp;
    };

    var onChange = function onChange(e) {
      setValue({
        value: e.value,
        label: e.value
      });
      props.onChange(e.value);
    }; // extracting custom ui styles


    var selectStyle = (0, _utils.extractUIFrameSelectTemplate)(uiFrame) ? (0, _utils.extractUIFrameSelectTemplate)(uiFrame) : _constants.SELECT_STYLES;
    return /*#__PURE__*/_react["default"].createElement(_DocumentSelects.EmptyDocumentSelect, {
      label: label,
      styles: selectStyle,
      placeholder: props.uiSchema["ui:placeholder"],
      onChange: onChange,
      loadOptions: loadOptions,
      value: value,
      handleInputChange: handleInputChange
    });
  }

  uiLayout = {
    "ui:placeholder": "Search for ".concat(label, " ..."),
    classNames: "tdb__input mb-3 mt-3",
    "ui:field": displayEmptySelect
  };
  return uiLayout;
} // edit layout


function getEditLayout(frame, item, formData) {
  var layout = {
    type: 'string',
    info: _constants.DOCUMENT,
    linked_to: frame[item],
    title: item
  }; // get default value

  var defaultValue = (0, _utils.getDefaultValue)(item, formData);
  if (defaultValue) layout["default"] = defaultValue;
  return layout;
} // edit ui layout


function getEditUILayout(frame, item, onSelect, defaultValue, uiFrame, documentation) {
  var uiLayout = {};
  var label = (0, _utils.getLabelFromDocumentation)(item, documentation);

  function displayFilledSelect(props) {
    var _useState3 = (0, _react.useState)(props.formData ? {
      value: props.formData,
      label: props.formData
    } : null),
        _useState4 = _slicedToArray(_useState3, 2),
        value = _useState4[0],
        setValue = _useState4[1]; // select value
    // loadOptions on AsyncSelect


    var loadOptions = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(inputValue, callback) {
        var opts;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return onSelect(inputValue, frame[item]);

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
    }(); // handle input change on AsyncSelect


    var handleInputChange = function handleInputChange(newValue) {
      var inputValue = newValue.replace(/\W/g, '');
      return inputValue;
    };

    var onChange = function onChange(e) {
      setValue({
        value: e.value,
        label: e.value
      });
      props.onChange(e.value);
    }; // extracting custom ui styles


    var selectStyle = (0, _utils.extractUIFrameSelectTemplate)(uiFrame) ? (0, _utils.extractUIFrameSelectTemplate)(uiFrame) : _constants.SELECT_STYLES;

    if (defaultValue) {
      return /*#__PURE__*/_react["default"].createElement(_DocumentSelects.FilledDocumentSelect, {
        label: label,
        styles: selectStyle,
        placeholder: props.uiSchema["ui:placeholder"],
        onChange: onChange,
        loadOptions: loadOptions,
        defaultValue: defaultValue,
        handleInputChange: handleInputChange
      });
    }

    return /*#__PURE__*/_react["default"].createElement(_DocumentSelects.EmptyDocumentSelect, {
      label: props.name,
      styles: selectStyle,
      placeholder: props.uiSchema["ui:placeholder"],
      onChange: onChange,
      loadOptions: loadOptions,
      value: value,
      handleInputChange: handleInputChange
    });
  }

  uiLayout = {
    "ui:placeholder": "Search for ".concat(label, " ..."),
    classNames: "tdb__input mb-3 mt-3",
    "ui:field": displayFilledSelect
  };
  return uiLayout;
} // View Layout


function getViewLayout(frame, item, formData) {
  var layout = {
    type: 'string',
    info: _constants.DOCUMENT,
    linked_to: frame[item],
    title: item
  }; // get default value

  var defaultValue = (0, _utils.getDefaultValue)(item, formData);
  if (defaultValue) layout["default"] = defaultValue;
  return layout;
} // View UI Layout


function getViewUILayout(frame, item, formData, onTraverse, uiFrame, documentation) {
  var uiLayout = {};
  var label = (0, _utils.getLabelFromDocumentation)(item, documentation); // hide widget if formData of item is empty
  // check for info - coz at this point there mayb be data
  // fields which belongs to subdocument sets and we do not want to hide the widget

  if (!(0, _utils.isFilled)(formData, item) && !frame.hasOwnProperty("info")) {
    uiLayout = {
      "ui:widget": "hidden"
    };
    return uiLayout;
  } // extracting custom ui styles


  var selectStyle = (0, _utils.extractUIFrameSelectTemplate)(uiFrame) ? (0, _utils.extractUIFrameSelectTemplate)(uiFrame) : _constants.SELECT_STYLES;

  function displayFilledSelect(props) {
    return /*#__PURE__*/_react["default"].createElement(_DocumentSelects.FilledDocumentViewSelect, {
      label: label,
      styles: selectStyle,
      defaultValue: props.formData,
      onTraverse: onTraverse
    });
  }

  uiLayout = {
    "ui:placeholder": "Search for ".concat(label, " ..."),
    classNames: "tdb__input mb-3 mt-3",
    "ui:field": displayFilledSelect
  };
  return uiLayout;
}
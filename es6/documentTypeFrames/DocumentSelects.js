"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilledDocumentViewSelect = exports.FilledDocumentSelect = exports.EmptyDocumentSelect = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _async = _interopRequireDefault(require("react-select/async"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// filled Select - view mode 
var FilledDocumentViewSelect = function FilledDocumentViewSelect(_ref) {
  var label = _ref.label,
      defaultValue = _ref.defaultValue,
      onTraverse = _ref.onTraverse,
      styles = _ref.styles;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  (0, _react.useEffect)(function () {
    //console.log("clicked", clicked)
    if (!clicked) return;
    if (onTraverse) onTraverse(clicked);
  }, [clicked]);

  var handleClick = function handleClick(e, val) {
    // view if on traverse function defined
    setClicked(val);
  };

  var color = "text-light";
  if (styles.hasOwnProperty("mode") && styles["mode"] === "light") color = "text-dark";
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, {
    className: "control-label "
  }, label), /*#__PURE__*/_react["default"].createElement("span", {
    onClick: function onClick(e) {
      return handleClick(e, defaultValue);
    },
    className: "tdb__span__select ".concat(color)
  }, defaultValue));
}; // empty Select - edit mode


exports.FilledDocumentViewSelect = FilledDocumentViewSelect;

var EmptyDocumentSelect = function EmptyDocumentSelect(_ref2) {
  var label = _ref2.label,
      styles = _ref2.styles,
      placeholder = _ref2.placeholder,
      value = _ref2.value,
      onChange = _ref2.onChange,
      loadOptions = _ref2.loadOptions,
      handleInputChange = _ref2.handleInputChange;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, label, " ", " "), value && /*#__PURE__*/_react["default"].createElement(_async["default"], {
    classNames: "tdb__input",
    styles: styles,
    value: value,
    onChange: onChange,
    loadOptions: loadOptions,
    onInputChange: handleInputChange
  }), !value && /*#__PURE__*/_react["default"].createElement(_async["default"], {
    classNames: "tdb__input",
    styles: styles,
    placeholder: placeholder,
    onChange: onChange,
    loadOptions: loadOptions,
    onInputChange: handleInputChange
  }));
}; // filled Select - edit mode


exports.EmptyDocumentSelect = EmptyDocumentSelect;

var FilledDocumentSelect = function FilledDocumentSelect(_ref3) {
  var label = _ref3.label,
      styles = _ref3.styles,
      placeholder = _ref3.placeholder,
      defaultValue = _ref3.defaultValue,
      onChange = _ref3.onChange,
      loadOptions = _ref3.loadOptions,
      handleInputChange = _ref3.handleInputChange;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, label, " ", " "), /*#__PURE__*/_react["default"].createElement(_async["default"], {
    cacheOptions: true,
    classNames: "tdb__input",
    styles: styles,
    placeholder: placeholder,
    onChange: onChange,
    loadOptions: loadOptions,
    defaultOptions: true,
    defaultValue: {
      value: defaultValue,
      label: defaultValue
    },
    onInputChange: handleInputChange
  }));
};

exports.FilledDocumentSelect = FilledDocumentSelect;
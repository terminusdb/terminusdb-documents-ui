"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiffViewer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDiffViewer = _interopRequireDefault(require("react-diff-viewer"));

var _reactBootstrap = require("react-bootstrap");

var _ai = require("react-icons/ai");

var _bs = require("react-icons/bs");

var _Stack = _interopRequireDefault(require("react-bootstrap/Stack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DisplayDiff = function DisplayDiff(_ref) {
  var left = _ref.left,
      right = _ref.right,
      useDarkTheme = _ref.useDarkTheme,
      disableWordDiff = _ref.disableWordDiff,
      leftTitle = _ref.leftTitle,
      rightTitle = _ref.rightTitle,
      showDiffOnly = _ref.showDiffOnly;
  return /*#__PURE__*/_react["default"].createElement(_reactDiffViewer["default"], {
    oldValue: JSON.stringify(left, null, 2),
    newValue: JSON.stringify(right, null, 2),
    splitView: true,
    useDarkTheme: useDarkTheme,
    linesOffset: 0,
    leftTitle: leftTitle,
    showDiffOnly: showDiffOnly,
    rightTitle: rightTitle,
    disableWordDiff: disableWordDiff
  });
};

var PatchToolBar = function PatchToolBar(_ref2) {
  var left = _ref2.left,
      right = _ref2.right,
      setDisplayRight = _ref2.setDisplayRight,
      setDisplayLeft = _ref2.setDisplayLeft,
      variant = _ref2.variant,
      textVariant = _ref2.textVariant,
      setShowDiffOnly = _ref2.setShowDiffOnly,
      showDiffOnly = _ref2.showDiffOnly;

  var handleLeftSwap = function handleLeftSwap(e) {
    setDisplayRight(left);
    setShowDiffOnly(false);
  };

  var handleRightSwap = function handleRightSwap(e) {
    setDisplayLeft(right);
    setShowDiffOnly(false);
  };

  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
    variant: variant,
    className: textVariant
  }, "Patch");
  return /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.ButtonGroup, {
    "aria-label": "patch tool bar"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
    variant: variant,
    className: textVariant,
    onClick: handleLeftSwap
  }, "Merge ", /*#__PURE__*/_react["default"].createElement(_ai.AiOutlineSwapRight, {
    className: "text-danger"
  })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
    variant: variant,
    className: textVariant,
    onClick: handleRightSwap
  }, "Merge ", /*#__PURE__*/_react["default"].createElement(_ai.AiOutlineSwapLeft, {
    className: "text-success"
  }))), !showDiffOnly && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_bs.BsCheck2Circle, {
    className: "text-success"
  }), /*#__PURE__*/_react["default"].createElement("small", null, "Click on Patch button, to patch")));
};
/**
 * 
 * @param {json} [oldValue] - Old value 
 * @param {json} [newValue] - New value 
 * @param {boolean} [useDarkTheme] - true to use dark theme
 * @param {boolean} [disableWordDiff] - true to enable word diff 
 * @returns - a rect component 
 */


var DiffViewer = function DiffViewer(_ref3) {
  var oldValue = _ref3.oldValue,
      newValue = _ref3.newValue,
      useDarkTheme = _ref3.useDarkTheme,
      disableWordDiff = _ref3.disableWordDiff,
      patch = _ref3.patch,
      leftTitle = _ref3.leftTitle,
      rightTitle = _ref3.rightTitle;

  var _useState = (0, _react.useState)("light"),
      _useState2 = _slicedToArray(_useState, 2),
      variant = _useState2[0],
      setVariant = _useState2[1];

  var _useState3 = (0, _react.useState)("text-dark"),
      _useState4 = _slicedToArray(_useState3, 2),
      textVariant = _useState4[0],
      setTextVariant = _useState4[1];

  var _useState5 = (0, _react.useState)(oldValue),
      _useState6 = _slicedToArray(_useState5, 2),
      displayLeft = _useState6[0],
      setDisplayLeft = _useState6[1];

  var _useState7 = (0, _react.useState)(newValue),
      _useState8 = _slicedToArray(_useState7, 2),
      displayRight = _useState8[0],
      setDisplayRight = _useState8[1];

  var _useState9 = (0, _react.useState)(true),
      _useState10 = _slicedToArray(_useState9, 2),
      showDiffOnly = _useState10[0],
      setShowDiffOnly = _useState10[1];

  (0, _react.useEffect)(function () {
    if (useDarkTheme) {
      setVariant("secondary");
      setTextVariant("text-gray");
    }
  }, [useDarkTheme]);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "horizontal",
    gap: 2
  }, patch && /*#__PURE__*/_react["default"].createElement(PatchToolBar, {
    variant: variant,
    textVariant: textVariant,
    left: displayLeft,
    right: displayRight,
    setShowDiffOnly: setShowDiffOnly,
    showDiffOnly: showDiffOnly,
    setDisplayRight: setDisplayRight,
    setDisplayLeft: setDisplayLeft
  })), /*#__PURE__*/_react["default"].createElement(DisplayDiff, {
    left: displayLeft,
    right: displayRight,
    leftTitle: leftTitle,
    showDiffOnly: showDiffOnly,
    rightTitle: rightTitle,
    useDarkTheme: useDarkTheme,
    disableWordDiff: disableWordDiff
  }));
};

exports.DiffViewer = DiffViewer;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FrameViewer = FrameViewer;

var _react = _interopRequireWildcard(require("react"));

var _core = _interopRequireDefault(require("@rjsf/core"));

var _FrameHelpers = require("./FrameHelpers");

var _CollapsibleField = _interopRequireDefault(require("react-jsonschema-form-extras/lib/CollapsibleField"));

var _constants = require("./constants");

var _reactBootstrap = require("react-bootstrap");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
**  frame     - full json schema of a document
**  uiFrame   - ui json of a document
**  type      - document type of interest
**  mode      - create/ edit/ view
**  documents - document list
**  formData  - filled value of the document
**  onSubmit  - a function which can have custom logic to process data submitted
*/
function FrameViewer(_ref) {
  var frame = _ref.frame,
      uiFrame = _ref.uiFrame,
      type = _ref.type,
      mode = _ref.mode,
      documents = _ref.documents,
      formData = _ref.formData,
      onSubmit = _ref.onSubmit,
      onTraverse = _ref.onTraverse;

  var _useState = (0, _react.useState)(_constants.TDB_SCHEMA),
      _useState2 = _slicedToArray(_useState, 2),
      prefix = _useState2[0],
      setPrefix = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      schema = _useState4[0],
      setSchema = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      uiSchema = _useState6[0],
      setUISchema = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      readOnly = _useState8[0],
      setReadOnly = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      error = _useState10[0],
      setError = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      input = _useState12[0],
      setInput = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      message = _useState14[0],
      setMessage = _useState14[1];

  if (!frame) return /*#__PURE__*/_react["default"].createElement("div", null, "No schema provided!");
  (0, _react.useEffect)(function () {
    var extractedPrefix = (0, _utils.getPrefix)(frame);
    setPrefix(extractedPrefix);
    var current = "".concat(extractedPrefix).concat(type); //try{

    var properties = (0, _FrameHelpers.getProperties)(frame, frame[current], uiFrame, documents, mode, formData, false, extractedPrefix, onTraverse);
    var schema = {
      "type": "object",
      "properties": properties.properties,
      "required": properties.required,
      "dependencies": properties.dependencies
    }; //console.log("schema", JSON.stringify(schema, null, 2))

    console.log("schema", schema);
    console.log("properties.uiSchema", properties.uiSchema);
    console.log("uiSchema", uiSchema);
    console.log("required", properties.required);

    if (mode === _constants.VIEW) {
      setReadOnly(true);
      setInput(formData);
    }

    if (mode === _constants.EDIT && (0, _utils.isValueHashDocument)(frame[current])) {
      setInput(formData);
      setMessage((0, _utils.getValueHashMessage)());
      setReadOnly(true);
    } else {
      setReadOnly(false);
      setInput({});
    }

    setSchema(schema);
    var uiSchema = properties.uiSchema;
    if (uiFrame && uiFrame.classNames) uiSchema["classNames"] = uiFrame.classNames;
    setUISchema(uiSchema); //}
    //catch(e) {
    //  setError("An error has occured in generating frames. Err - ", e)
    //}
  }, [frame, uiFrame, type, mode, formData]);

  var handleSubmit = function handleSubmit(_ref2) {
    var formData = _ref2.formData;

    if (onSubmit) {
      var extracted = (0, _utils.formatData)(formData);
      onSubmit(extracted);
      console.log("Data submitted: ", extracted);
    }
  };

  if (error) {
    return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Alert, {
      variant: "danger"
    }, error);
  }

  return /*#__PURE__*/_react["default"].createElement("div", null, schema && message && message, schema && /*#__PURE__*/_react["default"].createElement(_core["default"], {
    schema: schema,
    uiSchema: uiSchema,
    mode: mode,
    onSubmit: handleSubmit,
    readonly: readOnly,
    formData: input,
    onChange: function onChange(_ref3) {
      var formData = _ref3.formData;
      return setInput(formData);
    },
    fields: {
      collapsible: _CollapsibleField["default"]
    },
    children: readOnly // hide submit button on view mode

  }));
}
/*<pre>
   {JSON.stringify(schema, null, 2)}
</pre>*/
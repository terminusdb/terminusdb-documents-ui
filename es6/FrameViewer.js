"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FrameViewer = FrameViewer;

var _react = _interopRequireWildcard(require("react"));

var _rjsfCore = _interopRequireDefault(require("@terminusdb/rjsf-core"));

var _FrameHelpers = require("./FrameHelpers");

var _CollapsibleField = _interopRequireDefault(require("react-jsonschema-form-extras/lib/CollapsibleField"));

var _constants = require("./constants");

var _reactBootstrap = require("react-bootstrap");

var _utils = require("./utils");

var _extract = require("./extract");

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
**  submitButton - submit button configuration json object
**  formData  - filled value of the document
**  onSubmit  - a function with have custom logic to process data submitted
**  hideSubmit - hides Submit button - this is helpfull when you want to display nested FrameViewers
**  onChange   - a function with custom logic to process data when form data is changed
**  onSelect   - a js function which gets back the selected value from selects
**  onTraverse - a js function which gets back the ID of a document on click
**  FieldTemplate - a js function which you can pass at root level of FrameViewer to alter look and feel of fields
*/
function FrameViewer(_ref) {
  var frame = _ref.frame,
      uiFrame = _ref.uiFrame,
      type = _ref.type,
      mode = _ref.mode,
      submitButton = _ref.submitButton,
      formData = _ref.formData,
      onSubmit = _ref.onSubmit,
      onTraverse = _ref.onTraverse,
      onSelect = _ref.onSelect,
      hideSubmit = _ref.hideSubmit,
      onChange = _ref.onChange,
      FieldTemplate = _ref.FieldTemplate;

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
      setInput = _useState12[1]; //const [definitions, setDefinitions]=useState({})


  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      message = _useState14[0],
      setMessage = _useState14[1];

  if (!frame) return /*#__PURE__*/_react["default"].createElement("div", null, "No schema provided!");
  if (!mode) return /*#__PURE__*/_react["default"].createElement("div", null, "Please include a mode - Create/ Edit/ View");
  if (mode === _constants.VIEW && !formData) return /*#__PURE__*/_react["default"].createElement("div", null, "Mode is set to View, please provide filled form data");
  if (!type) return /*#__PURE__*/_react["default"].createElement("div", null, "Please include the type of document"); //let extractedPrefix = getPrefix(frame)
  //let current = `${extractedPrefix}${type}`

  var current = "".concat(type);
  (0, _react.useEffect)(function () {
    //setPrefix(extractedPrefix)
    try {
      //console.log("extractedPrefix", extractedPrefix)
      //console.log("frame", frame)
      //let properties = getProperties(frame, frame[current], uiFrame, documents, mode, formData, false, extractedPrefix, onTraverse, onSelect)
      var documentation = (0, _utils.extractDocumentation)(frame, current);
      var properties = (0, _FrameHelpers.getProperties)(frame, type, frame[current], uiFrame, mode, formData, onTraverse, onSelect, documentation);
      var _schema = {
        type: "object",
        properties: properties.properties,
        required: properties.required,
        dependencies: properties.dependencies
      }; //console.log("schema", JSON.stringify(schema, null, 2))
      //console.log("uiSchema", JSON.stringify(properties.uiSchema, null, 2))

      console.log("schema", _schema);
      console.log("properties.uiSchema", properties.uiSchema); //console.log("uiSchema", uiSchema)

      if (mode === _constants.VIEW) {
        setReadOnly(true);
        setInput(formData);
      } else if (mode === _constants.CREATE) setInput(formData);else if (mode === _constants.EDIT && (0, _utils.isValueHashDocument)(frame[current])) {
        setInput(formData);
        setMessage((0, _utils.getValueHashMessage)());
        setReadOnly(true);
      } else if (onChange) {
        // form nested frame viewers
        setInput(formData);
      } else {
        setReadOnly(false);
        setInput({});
      }

      setSchema(_schema);
      var _uiSchema = properties.uiSchema; // get form level ui schema 

      if (uiFrame && uiFrame.hasOwnProperty("classNames")) _uiSchema["classNames"] = uiFrame.classNames;
      if (uiFrame && uiFrame.hasOwnProperty("ui:order")) _uiSchema["ui:order"] = uiFrame["ui:order"];
      if (uiFrame && uiFrame.hasOwnProperty("ui:title")) _uiSchema["ui:title"] = uiFrame["ui:title"];
      if (uiFrame && uiFrame.hasOwnProperty("ui:description")) _uiSchema["ui:description"] = uiFrame["ui:description"]; // order is set to place @documentation field at the start of the document

      _uiSchema["ui:order"] = ["@documentation", "*"]; // styling submit button

      /*uiSchema["ui:submitButtonOptions"]= {
          "props": {
             "disabled": false,
             "className": submitButton.hasOwnProperty("classNames") ? submitButton["classNames"]  : "btn btn-info",
          },
           "norender": false,
           "submitText": submitButton.hasOwnProperty("text") ? submitButton["text"] : "Submit"
      }*/

      setUISchema(_uiSchema);
    } catch (e) {
      setError("An error has occured in generating frames. Err - ", e);
    }
  }, [frame, uiFrame, type, mode, formData]);

  var handleSubmit = function handleSubmit(_ref2) {
    var formData = _ref2.formData;

    //console.log("Data before extract: ",  formData)
    if (onSubmit) {
      var extracted = (0, _extract.transformData)(mode, schema.properties, formData, frame, current, type);
      if (!extracted.hasOwnProperty("@type")) extracted["@type"] = type;
      onSubmit(extracted);
      console.log("Data submitted: ", extracted); //console.log("Data submitted: ",  JSON.stringify(extracted, null, 2))
    }
  };

  var handleChange = function handleChange(data) {
    //console.log("Data changed: ",  data)
    setInput(data);

    if (onChange) {
      onChange(data);
    }
  };

  if (error) {
    return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Alert, {
      variant: "danger"
    }, error);
  } //return <>{"HELLO WORLD"}</>

  /*function CustomFieldTemplate(props) {
      const {id, classNames, label, help, required, description, errors, children} = props;
      var css
      console.log("props", props)
      if(label === "address") css = "d-none"
      return (
        <div className={css}>
          <label htmlFor={id}>{label}{required ? "*" : null}</label>
          {description}
          {children}
          {errors}
          {help}
        </div>
      );
    }*/

  /*let submitButtonCss="btn-info"
  if(uiFrame && Object.keys(uiFrame).length && uiFrame.hasOwnProperty(SUBMIT_BUTTON_STYLE_KEY)) {
      submitButtonCss=uiFrame[SUBMIT_BUTTON_STYLE_KEY]
  }*/


  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, schema && message && message, schema && /*#__PURE__*/_react["default"].createElement(_rjsfCore["default"], {
    schema: schema,
    uiSchema: uiSchema,
    mode: mode,
    onSubmit: handleSubmit,
    readonly: readOnly,
    formData: input,
    onChange: function onChange(_ref3) {
      var formData = _ref3.formData;
      return handleChange(formData);
    },
    fields: {
      collapsible: _CollapsibleField["default"]
    },
    children: hideSubmit // hide submit button on view mode
    ,
    FieldTemplate: FieldTemplate
  }));
}
/*<pre>
   {JSON.stringify(schema, null, 2)}
</pre>*/
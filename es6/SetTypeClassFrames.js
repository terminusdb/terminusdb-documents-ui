"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSetOneOfClassFrames = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _constants = require("./constants");

var _FrameHelpers = require("./FrameHelpers");

var _FrameViewer = require("./FrameViewer");

var _async = _interopRequireDefault(require("react-select/async"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getAnyOfDocuments(documentClass) {
  var structure = {};
  structure = {
    title: documentClass,
    properties: _defineProperty({}, documentClass, {
      title: documentClass,
      type: "string"
    })
  };
  return structure;
}

function getAnyOfSubDocuments(subDocumentClass, mode, formData, item) {
  var structure = {};
  structure = {
    title: subDocumentClass,
    properties: _defineProperty({}, subDocumentClass, {
      title: subDocumentClass,
      type: "object"
    })
  };
  return structure;
}

var makeSetOneOfClassFrames = function makeSetOneOfClassFrames(fullFrame, frame, item, uiFrame, mode, formData, prefix, onTraverse, onSelect) {
  var properties = {},
      propertiesUI = {},
      subPropertiesUI = {},
      layout = {};
  var anyOfArray = [];

  function getSubDocumentProperties(props) {
    var formDataValue = props.schema.hasOwnProperty("default") ? props.schema["default"] : {};
    var type = mode === _constants.VIEW ? formDataValue["@type"] : props.name;

    var _useState = (0, _react.useState)(formDataValue),
        _useState2 = _slicedToArray(_useState, 2),
        input = _useState2[0],
        setInput = _useState2[1];

    var schema = fullFrame;

    function handleFormChange(data) {
      var jsonData = {
        "@type": props.name //"@info": ONEOFCLASSES

      };
      setInput(data);

      for (var thing in data) {
        if (thing === "@id") continue;
        jsonData[thing] = data[thing];
      }

      if (props.onChange) {
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
      type: type,
      uiFrame: uiSchema // formData={input}

    }));
  }

  if (frame[item] && Array.isArray(frame[item])) {
    frame[item].map(function (it) {
      if (_typeof(it) === "object" && it.hasOwnProperty(_constants.SUBDOCUMENT)) {
        var getSubDocumentsPropertiesUI = function getSubDocumentsPropertiesUI() {
          var subPropertiesUI = {
            "ui:field": getSubDocumentProperties
          };
          return subPropertiesUI;
        };

        // links to subdocuments
        var subDocumentClass = it["@class"];
        anyOfArray.push(getAnyOfSubDocuments(subDocumentClass, mode, formData, item));
        if (mode !== _constants.VIEW) subPropertiesUI[subDocumentClass] = getSubDocumentsPropertiesUI();
      } else if (typeof it === "string") {
        var getSelect = function getSelect(props) {
          var loadOptions = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(inputValue, callback) {
              var type, opts;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      type = props.name;
                      _context.next = 3;
                      return onSelect(inputValue, type);

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

        var getDocumentsPropertiesUI = function getDocumentsPropertiesUI(documentClass) {
          var subPropertiesUI = {
            "ui:field": getSelect,
            "ui:placeholder": "Select ".concat(documentClass)
          };
          return subPropertiesUI;
        };

        // links to documents
        var documentClass = it; // frame[item]

        if (mode !== _constants.VIEW) anyOfArray.push(getAnyOfDocuments(documentClass));
        if (mode !== _constants.VIEW) subPropertiesUI[documentClass] = getDocumentsPropertiesUI(documentClass);
      }
    });
  }

  if (mode === _constants.CREATE) {
    layout = {
      type: 'array',
      info: _constants.ONEOFCLASSES,
      title: item,
      description: "Choose ".concat(item, " from the list ..."),
      items: {
        type: "object",
        anyOf: anyOfArray
      }
    };
  } else {
    //if (mode === VIEW) {
    if (formData.hasOwnProperty(item) && Array.isArray(formData[item]) && _typeof(formData[item][0]) === "object") {
      layout = {
        type: 'array',
        info: _constants.ONEOFCLASSES,
        title: item,
        items: {
          type: "object"
        }
      };
    } else {
      layout = {
        type: 'array',
        info: _constants.ONEOFCLASSES,
        title: item
      };
    }
  } // schema


  properties[item] = layout;
  propertiesUI[item] = {
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"])),
    "classNames": mode === _constants.VIEW ? "tdb__input mb-3 mt-3 form-label tdb__view__input" : "tdb__input mb-3 mt-3",
    "items": subPropertiesUI //"additionalItems": subPropertiesUI

  };

  if (mode === _constants.CREATE) {
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
  }

  if (mode === _constants.EDIT) {
    // we do not allow to add extra on view mode
    // layout

    /*properties[item]["additionalItems"]={
        type: "object",
        anyOf: anyOfArray
    }*/
    //ui
    //propertiesUI[item]["additionalItems"]=setFrames.uiSchema[item]
    var getEditSubDocuments = function getEditSubDocuments(props) {
      var schema = fullFrame;
      var uiSchema = {
        classNames: "card bg-secondary p-4 mt-4 mb-4"
      };
      var filled = [];

      if (formData.hasOwnProperty(item)) {
        formData[item].map(function (things) {
          var type = things["@type"];
          var formDataValue = things;

          var _useState3 = (0, _react.useState)(formDataValue),
              _useState4 = _slicedToArray(_useState3, 2),
              input = _useState4[0],
              setInput = _useState4[1];

          function handleFormChange(data) {
            var jsonData = {
              "@type": props.name
            };
            setInput(data);

            if (props.onChange) {
              var populate = []; // gather other formData too

              formData[item].map(function (fd) {
                if (fd["@id"] === data["@id"]) {
                  populate.push(data);
                } else populate.push(fd);
              });
              props.onChange((0, _utils.removeIds)(populate));
            }
          }

          filled.push( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, type, /*#__PURE__*/_react["default"].createElement(_FrameViewer.FrameViewer, {
            frame: schema,
            mode: mode,
            hideSubmit: true,
            type: type,
            onChange: handleFormChange,
            uiFrame: uiSchema,
            formData: input
          })));
        });
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "w-100"
      }, filled);
    };

    if (frame.hasOwnProperty(item) && Array.isArray(frame[item]) && _typeof(frame[item][0]) === "object") {
      propertiesUI[item]["ui:field"] = getEditSubDocuments;
    } else if (frame.hasOwnProperty(item) && Array.isArray(frame[item]) && typeof frame[item][0] === "string") {
      var getEditDocuments = function getEditDocuments(props) {
        var filled = [];

        var loadOptions = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(inputValue, callback) {
            var type, opts;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    type = props.name;
                    _context2.next = 3;
                    return onSelect(inputValue, type);

                  case 3:
                    opts = _context2.sent;
                    callback(opts);
                    return _context2.abrupt("return", opts);

                  case 6:
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
          props.onChange([e.value]);
        }

        if (formData.hasOwnProperty(item)) {
          formData[item].map(function (things) {
            filled.push( /*#__PURE__*/_react["default"].createElement(_async["default"], {
              cacheOptions: true,
              classNames: "tdb__input",
              styles: _constants.SELECT_STYLES //placeholder={props.uiSchema["ui:placeholder"]}
              ,
              onChange: onChange,
              loadOptions: loadOptions,
              defaultOptions: true,
              defaultValue: {
                value: things,
                label: things
              },
              onInputChange: handleInputChange
            }));
          });
        }

        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, {
          className: "control-label"
        }, item), /*#__PURE__*/_react["default"].createElement("div", {
          className: "w-100"
        }, filled));
      };

      propertiesUI[item]["ui:field"] = getEditDocuments;
    }
  } else if (mode === _constants.VIEW) {
    if (frame.hasOwnProperty(item) && Array.isArray(frame[item]) && _typeof(frame[item][0]) === "object") {
      var getViewSubDocuments = function getViewSubDocuments(props) {
        var schema = fullFrame;
        var uiSchema = {
          classNames: "card bg-secondary p-4 mt-4 mb-4"
        };
        var filled = [];

        if (formData.hasOwnProperty(item)) {
          formData[item].map(function (things) {
            var type = things["@type"];
            var formDataValue = things;
            filled.push( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, type, /*#__PURE__*/_react["default"].createElement(_FrameViewer.FrameViewer, {
              frame: schema,
              mode: mode,
              hideSubmit: true,
              type: type,
              uiFrame: uiSchema,
              formData: formDataValue
            })));
          });
        }

        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "w-100"
        }, filled);
      };

      propertiesUI[item]["ui:field"] = getViewSubDocuments;
    } else {
      var getViewDocuments = function getViewDocuments(props) {
        var filled = [];

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

        if (!frame.hasOwnProperty(item)) return /*#__PURE__*/_react["default"].createElement("div", null);

        if (formData.hasOwnProperty(item)) {
          formData[item].map(function (things) {
            filled.push( /*#__PURE__*/_react["default"].createElement("span", {
              onClick: function onClick(e) {
                return handleClick(e, things);
              },
              className: "tdb__span__select form-control bg-transparent text-light"
            }, things));
          });
        }

        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, {
          className: "control-label"
        }, item), /*#__PURE__*/_react["default"].createElement("div", {
          className: "w-100  tdb__view__input d-block"
        }, filled));
      };

      propertiesUI[item]["ui:field"] = getViewDocuments;
    }

    propertiesUI[item]["ui:options"] = {
      // disable add more on view
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
};

exports.makeSetOneOfClassFrames = makeSetOneOfClassFrames;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geViewSetEnumTypeUILayout = geViewSetEnumTypeUILayout;
exports.getCreateListSysDataTypeLayout = getCreateListSysDataTypeLayout;
exports.getCreateListSysDataTypeUILayout = getCreateListSysDataTypeUILayout;
exports.getCreateSetChoiceDocumentTypeLayout = getCreateSetChoiceDocumentTypeLayout;
exports.getCreateSetChoiceDocumentTypeUILayout = getCreateSetChoiceDocumentTypeUILayout;
exports.getCreateSetDataTypeLayout = getCreateSetDataTypeLayout;
exports.getCreateSetDataTypeUILayout = getCreateSetDataTypeUILayout;
exports.getCreateSetDocumentTypeLayout = getCreateSetDocumentTypeLayout;
exports.getCreateSetDocumentTypeUILayout = getCreateSetDocumentTypeUILayout;
exports.getCreateSetEnumTypeLayout = getCreateSetEnumTypeLayout;
exports.getCreateSetEnumTypeUILayout = getCreateSetEnumTypeUILayout;
exports.getCreateSetSubDocumentTypeLayout = getCreateSetSubDocumentTypeLayout;
exports.getCreateSetSubDocumentTypeUILayout = getCreateSetSubDocumentTypeUILayout;
exports.getEditListSysDataTypeLayout = getEditListSysDataTypeLayout;
exports.getEditListSysDataTypeUILayout = getEditListSysDataTypeUILayout;
exports.getEditSetChoiceDocumentTypeLayout = getEditSetChoiceDocumentTypeLayout;
exports.getEditSetChoiceDocumentTypeUILayout = getEditSetChoiceDocumentTypeUILayout;
exports.getEditSetDataTypeLayout = getEditSetDataTypeLayout;
exports.getEditSetDataTypeUILayout = getEditSetDataTypeUILayout;
exports.getEditSetDocumentTypeLayout = getEditSetDocumentTypeLayout;
exports.getEditSetDocumentTypeUILayout = getEditSetDocumentTypeUILayout;
exports.getEditSetEnumTypeLayout = getEditSetEnumTypeLayout;
exports.getEditSetEnumTypeUILayout = getEditSetEnumTypeUILayout;
exports.getEditSetSubDocumentTypeLayout = getEditSetSubDocumentTypeLayout;
exports.getEditSetSubDocumentTypeUILayout = getEditSetSubDocumentTypeUILayout;
exports.getViewListSysDataTypeLayout = getViewListSysDataTypeLayout;
exports.getViewListSysDataTypeUILayout = getViewListSysDataTypeUILayout;
exports.getViewSetChoiceDocumentTypeLayout = getViewSetChoiceDocumentTypeLayout;
exports.getViewSetChoiceDocumentTypeUILayout = getViewSetChoiceDocumentTypeUILayout;
exports.getViewSetDataTypeLayout = getViewSetDataTypeLayout;
exports.getViewSetDataTypeUILayout = getViewSetDataTypeUILayout;
exports.getViewSetDocumentTypeLayout = getViewSetDocumentTypeLayout;
exports.getViewSetDocumentTypeUILayout = getViewSetDocumentTypeUILayout;
exports.getViewSetEnumTypeLayout = getViewSetEnumTypeLayout;
exports.getViewSetSubDocumentTypeLayout = getViewSetSubDocumentTypeLayout;
exports.getViewSetSubDocumentTypeUILayout = getViewSetSubDocumentTypeUILayout;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _constants = require("../constants");

var _DocumentSelects = require("../documentTypeFrames/DocumentSelects");

var _reactJsonEditorAjrm = _interopRequireDefault(require("react-json-editor-ajrm"));

var _en = _interopRequireDefault(require("react-json-editor-ajrm/locale/en"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**************   Set SubDocuments Types       *****************/
// create set subDocument type layout 
function getCreateSetSubDocumentTypeLayout(frame, item, documentation) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item, documentation),
    items: frame.properties[item],
    additionalItems: frame.properties[item]
  };
  return layout;
} // create set subDocument type ui layout


function getCreateSetSubDocumentTypeUILayout(frame, item) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: true,
        orderable: true,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
} // edit set subDocument type layout


function getEditSetSubDocumentTypeLayout(frame, item, formData, documentation) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item, documentation)
  }; // get default value and fill items of array

  var defaultValues = (0, _utils.getDefaultValue)(item, formData);
  var filledItems = [];

  if (Array.isArray(defaultValues) && defaultValues.length) {
    defaultValues.map(function (value) {
      var structure = {};

      for (var props in frame.properties[item]) {
        if (props === "default") structure[props] = value;else structure[props] = frame.properties[item][props];
      }

      filledItems.push(structure);
    });
  } // get filled items


  layout.items = filledItems;
  var properties = {}; // get additional items

  for (var props in frame.properties[item]) {
    if (props !== "default") {
      properties[props] = frame.properties[item][props];
    }
  } // additional items


  layout.additionalItems = properties;
  return layout;
} // edit set subDocument type ui layout


function getEditSetSubDocumentTypeUILayout(frame, item) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: true,
        orderable: true,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
} // View set subDocument type Layout


function getViewSetSubDocumentTypeLayout(frame, item, formData, documentation) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item, documentation)
  }; // get default value and fill items of array

  var defaultValues = (0, _utils.getDefaultValue)(item, formData);
  var filledItems = [];

  if (Array.isArray(defaultValues) && defaultValues.length) {
    defaultValues.map(function (value) {
      var structure = {};

      for (var props in frame.properties[item]) {
        if (props === "default") structure[props] = value;else structure[props] = frame.properties[item][props];
      }

      filledItems.push(structure);
    });
  } // get filled items


  layout.items = filledItems;
  var properties = {}; // get additional items

  for (var props in frame.properties[item]) {
    if (props !== "default") {
      properties[props] = frame.properties[item][props];
    }
  } // additional items


  layout.additionalItems = properties;
  return layout;
} // View set subDocument type UI Layout


function getViewSetSubDocumentTypeUILayout(frame, item, formData) {
  var uiLayout = {}; // hide widget if formData of item is empty

  if (!(0, _utils.isFilled)(formData, item)) {
    var hidden = function hidden() {
      return /*#__PURE__*/_react["default"].createElement("div", null);
    };

    uiLayout = {
      "ui:widget": hidden
    };
    return uiLayout;
  }

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: false,
        orderable: true,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
}
/**************   List Data Types       *****************/
// create set data type layout


function getCreateSetDataTypeLayout(frame, item) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(),
    items: frame.properties[item],
    additionalItems: frame.properties[item]
  };
  return layout;
} // create set data type ui layout


function getCreateSetDataTypeUILayout(frame, item) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: true,
        orderable: true,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
} // edit set data type layout


function getEditSetDataTypeLayout(frame, item, formData) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)()
  }; // get default value and fill items of array

  var defaultValues = (0, _utils.getDefaultValue)(item, formData);
  var filledItems = [];

  if (Array.isArray(defaultValues) && defaultValues.length) {
    defaultValues.map(function (value) {
      var structure = {};

      for (var props in frame.properties[item]) {
        if (props === "default") structure[props] = value;else structure[props] = frame.properties[item][props];
      }

      filledItems.push(structure);
    });
  } // get filled items


  layout.items = filledItems;
  var properties = {}; // get additional items

  for (var props in frame.properties[item]) {
    if (props !== "default") {
      properties[props] = frame.properties[item][props];
    }
  } // additional items


  layout.additionalItems = properties;
  return layout;
} // edit set data type ui layout


function getEditSetDataTypeUILayout(frame, item) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: true,
        orderable: true,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
} // View set data type Layout


function getViewSetDataTypeLayout(frame, item, formData) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)()
  }; // get default value and fill items of array

  var defaultValues = (0, _utils.getDefaultValue)(item, formData);
  var filledItems = [];

  if (Array.isArray(defaultValues) && defaultValues.length) {
    defaultValues.map(function (value) {
      var structure = {};

      for (var props in frame.properties[item]) {
        if (props === "default") structure[props] = value;else structure[props] = frame.properties[item][props];
      }

      filledItems.push(structure);
    });
  } // get filled items


  layout.items = filledItems;
  var properties = {}; // get additional items

  for (var props in frame.properties[item]) {
    if (props !== "default") {
      properties[props] = frame.properties[item][props];
    }
  } // additional items


  layout.additionalItems = properties;
  return layout;
} // View set data type UI Layout


function getViewSetDataTypeUILayout(frame, item, formData) {
  var uiLayout = {}; // hide widget if formData of item is empty

  if (!(0, _utils.isFilled)(formData, item)) {
    uiLayout = {
      "ui:widget": "hidden"
    };
    return uiLayout;
  }

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: false,
        orderable: true,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
}
/**************   List Sys Data Types       *****************/
// create set data type layout


function getCreateListSysDataTypeLayout(frame, item) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(),
    items: frame.properties[item],
    additionalItems: frame.properties[item]
  };
  return layout;
} // create set data type ui layout


function getCreateListSysDataTypeUILayout(frame, item) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: true,
        orderable: true,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
} // edit set sys data type layout


function getEditListSysDataTypeLayout(frame, item, formData, documentation) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item, documentation),
    items: frame.properties[item],
    additionalItems: frame.properties[item]
  }; // get default value and fill items of array

  var defaultValues = (0, _utils.getDefaultValue)(item, formData);
  var filledItems = [];

  if (Array.isArray(defaultValues) && defaultValues.length) {
    defaultValues.map(function (value) {
      var structure = {};

      for (var props in frame.properties[item]) {
        if (props === "default") structure[props] = value;else structure[props] = frame.properties[item][props];
      }

      filledItems.push(structure);
    });
  } // if filled values available to display


  if (filledItems.length) {
    // get filled items
    layout.items = filledItems;
    var properties = {}; // get additional items

    for (var props in frame.properties[item]) {
      if (props !== "default") {
        properties[props] = frame.properties[item][props];
      }
    } // additional items


    layout.additionalItems = properties;
  }

  return layout;
} // edit set sys data type ui layout


function getEditListSysDataTypeUILayout(frame, item, uiFrame, documentation) {
  var uiLayout = {};
  console.log("set sys frame", frame);

  function getEmptyUiSchema(uiSchema) {
    var newUiStruct = {};

    for (var ui in uiSchema) {
      if (ui === "ui:field") {
        (function () {
          var displayCreateJSONInput = function displayCreateJSONInput(props) {
            function handleInput(data) {
              if (data.hasOwnProperty("jsObject") && Object.keys(data.jsObject).length > 0) {
                props.onChange(data.jsObject);
              }
            }

            return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, label), /*#__PURE__*/_react["default"].createElement(_reactJsonEditorAjrm["default"], {
              id: "json_type_field",
              locale: _en["default"],
              height: _constants.JSON_EDITOR_HEIGHT,
              width: _constants.JSON_EDITOR_WIDTH,
              onBlur: handleInput
            }));
          };

          var label = (0, _utils.getLabelFromDocumentation)(item, documentation);
          newUiStruct[ui] = displayCreateJSONInput;
        })();
      } else newUiStruct[ui] = uiSchema[ui];
    }

    return newUiStruct;
  }

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: getEmptyUiSchema(frame.uiSchema[item]),
      "ui:options": {
        addable: true,
        orderable: false,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
} // View list data type Layout


function getViewListSysDataTypeLayout(frame, item, formData) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)()
  }; // get default value and fill items of array

  var defaultValues = (0, _utils.getDefaultValue)(item, formData);
  var filledItems = [];

  if (Array.isArray(defaultValues) && defaultValues.length) {
    defaultValues.map(function (value) {
      var structure = {};

      for (var props in frame.properties[item]) {
        if (props === "default") structure[props] = value;else structure[props] = frame.properties[item][props];
      }

      filledItems.push(structure);
    });
  } // get filled items


  layout.items = filledItems;
  var properties = {}; // get additional items

  for (var props in frame.properties[item]) {
    if (props !== "default") {
      properties[props] = frame.properties[item][props];
    }
  } // additional items


  layout.additionalItems = properties;
  return layout;
} // View list data type UI Layout


function getViewListSysDataTypeUILayout(frame, item, formData) {
  var uiLayout = {}; // hide widget if formData of item is empty

  if (!(0, _utils.isFilled)(formData, item)) {
    uiLayout = {
      "ui:widget": "hidden"
    };
    return uiLayout;
  }

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: false,
        orderable: true,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
}
/**************   List Document Types       *****************/
// create set Document type layout


function getCreateSetDocumentTypeLayout(frame, item) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item),
    items: frame.properties[item],
    additionalItems: frame.properties[item]
  };
  return layout;
} // create set Document type ui layout


function getCreateSetDocumentTypeUILayout(frame, item) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: true,
        orderable: true,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
} // edit set Document type layout


function getEditSetDocumentTypeLayout(frame, item, formData) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item)
  }; // get default value and fill items of array

  var defaultValues = (0, _utils.getDefaultValue)(item, formData);
  var filledItems = [];

  if (Array.isArray(defaultValues) && defaultValues.length) {
    defaultValues.map(function (value) {
      var structure = {};

      for (var props in frame.properties[item]) {
        if (props === "default") structure[props] = value;else structure[props] = frame.properties[item][props];
      }

      filledItems.push(structure);
    });
  } // get filled items


  layout.items = filledItems;
  var properties = {}; // get additional items

  for (var props in frame.properties[item]) {
    if (props !== "default") {
      properties[props] = frame.properties[item][props];
    }
  } // additional items


  layout.additionalItems = properties;
  return layout;
} // edit set Document type ui layout


function getEditSetDocumentTypeUILayout(frame, item, onSelect) {
  // getting ui layout for additional items
  var additionalItemsUiStruct = {},
      uiLayout = {},
      modifiedUiLayout = {};

  for (var ui in frame.uiSchema[item]) {
    if (ui !== "ui:field") {
      additionalItemsUiStruct[ui] = frame.uiSchema[item][ui];
    }
  } // getting the layout to put correct st values


  for (var ui in frame.uiSchema[item]) {
    if (ui === "ui:field") {
      var displayFilledSetSelect = function displayFilledSetSelect(props) {
        // loadOptions on AsyncSelect
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
        }(); // handle input change on AsyncSelect


        var handleInputChange = function handleInputChange(newValue) {
          var inputValue = newValue.replace(/\W/g, '');
          return inputValue;
        };

        function onChange(e) {
          props.onChange(e.value);
        }

        var returnElement = [];

        if (props.formData) {
          returnElement.push( /*#__PURE__*/_react["default"].createElement(_DocumentSelects.FilledDocumentSelect, {
            label: props.name,
            styles: _constants.SELECT_STYLES,
            placeholder: props.uiSchema["ui:placeholder"],
            onChange: onChange,
            loadOptions: loadOptions,
            defaultValue: props.formData,
            handleInputChange: handleInputChange
          }));
        } else returnElement.push( /*#__PURE__*/_react["default"].createElement(_DocumentSelects.EmptyDocumentSelect, {
          label: props.name,
          styles: _constants.SELECT_STYLES,
          placeholder: props.uiSchema["ui:placeholder"],
          onChange: onChange,
          loadOptions: loadOptions,
          handleInputChange: handleInputChange
        }));

        return returnElement;
      };

      modifiedUiLayout[ui] = displayFilledSetSelect;
    } else {
      modifiedUiLayout[ui] = frame.uiSchema[item][ui];
    }
  }

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: modifiedUiLayout,
      additionalItems: additionalItemsUiStruct,
      "ui:options": {
        addable: true,
        orderable: true,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
} // View set Document type Layout


function getViewSetDocumentTypeLayout(frame, item, formData) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item)
  }; // get default value and fill items of array

  var defaultValues = (0, _utils.getDefaultValue)(item, formData);
  var filledItems = [];

  if (Array.isArray(defaultValues) && defaultValues.length) {
    defaultValues.map(function (value) {
      var structure = {};

      for (var props in frame.properties[item]) {
        if (props === "default") structure[props] = value;else structure[props] = frame.properties[item][props];
      }

      filledItems.push(structure);
    });
  } // get filled items


  layout.items = filledItems;
  var properties = {}; // get additional items

  for (var props in frame.properties[item]) {
    if (props !== "default") {
      properties[props] = frame.properties[item][props];
    }
  } // additional items


  layout.additionalItems = properties;
  return layout;
} // View set Document type UI Layout


function getViewSetDocumentTypeUILayout(frame, item, onSelect) {
  // getting ui layout for additional items
  var additionalItemsUiStruct = {},
      uiLayout = {},
      modifiedUiLayout = {};

  for (var ui in frame.uiSchema[item]) {
    if (ui !== "ui:field") {
      additionalItemsUiStruct[ui] = frame.uiSchema[item][ui];
    }
  } // getting the layout to put correct st values


  for (var ui in frame.uiSchema[item]) {
    if (ui === "ui:field") {
      var displayFilledSetSelect = function displayFilledSetSelect(props) {
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

        function onChange(e) {
          props.onChange(e.value);
        }

        var returnElement = [];

        if (props.formData) {
          returnElement.push( /*#__PURE__*/_react["default"].createElement(_DocumentSelects.FilledDocumentSelect, {
            label: props.name,
            styles: _constants.SELECT_STYLES,
            placeholder: props.uiSchema["ui:placeholder"],
            onChange: onChange,
            loadOptions: loadOptions,
            defaultValue: props.formData,
            handleInputChange: handleInputChange
          }));
        } else returnElement.push( /*#__PURE__*/_react["default"].createElement(_DocumentSelects.EmptyDocumentSelect, {
          label: props.name,
          styles: _constants.SELECT_STYLES,
          placeholder: props.uiSchema["ui:placeholder"],
          onChange: onChange,
          loadOptions: loadOptions,
          handleInputChange: handleInputChange
        }));

        return returnElement;
      };

      modifiedUiLayout[ui] = displayFilledSetSelect;
    } else {
      modifiedUiLayout[ui] = frame.uiSchema[item][ui];
    }
  }

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: modifiedUiLayout,
      additionalItems: additionalItemsUiStruct,
      "ui:options": {
        addable: false,
        orderable: true,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
}
/**************   Set Enum Types       *****************/
// create set Enum type layout


function getCreateSetEnumTypeLayout(frame, item) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item),
    items: frame.properties[item],
    additionalItems: frame.properties[item]
  };
  return layout;
} // create set Enum type ui layout


function getCreateSetEnumTypeUILayout(frame, item) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: true,
        orderable: true,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
} // edit set Enum type layout


function getEditSetEnumTypeLayout(frame, item, formData) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item),
    items: frame.properties[item],
    additionalItems: frame.properties[item]
  }; // get default value and fill items of array

  var defaultValues = (0, _utils.getDefaultValue)(item, formData);
  var filledItems = [];

  if (Array.isArray(defaultValues) && defaultValues.length) {
    defaultValues.map(function (value) {
      var structure = {};

      for (var props in frame.properties[item]) {
        if (props === "default") structure[props] = value;else structure[props] = frame.properties[item][props];
      }

      filledItems.push(structure);
    });
  } // get filled items


  layout.items = filledItems;
  var properties = {}; // get additional items

  for (var props in frame.properties[item]) {
    if (props !== "default") {
      properties[props] = frame.properties[item][props];
    }
  } // additional items


  layout.additionalItems = properties;
  return layout;
} // edit set Enum type ui layout


function getEditSetEnumTypeUILayout(frame, item) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: true,
        orderable: true,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
} // view set Enum type layout


function getViewSetEnumTypeLayout(frame, item, formData) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item),
    items: frame.properties[item],
    additionalItems: frame.properties[item]
  }; // get default value and fill items of array

  var defaultValues = (0, _utils.getDefaultValue)(item, formData);
  var filledItems = [];

  if (Array.isArray(defaultValues) && defaultValues.length) {
    defaultValues.map(function (value) {
      var structure = {};

      for (var props in frame.properties[item]) {
        if (props === "default") structure[props] = value;else structure[props] = frame.properties[item][props];
      }

      filledItems.push(structure);
    });
  } // get filled items


  layout.items = filledItems;
  var properties = {}; // get additional items

  for (var props in frame.properties[item]) {
    if (props !== "default") {
      properties[props] = frame.properties[item][props];
    }
  } // additional items


  layout.additionalItems = properties;
  return layout;
} // view set Enum type ui layout


function geViewSetEnumTypeUILayout(frame, item) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: false,
        orderable: true,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
}
/**************   Set Choice Document Types       *****************/
// create set Choice Document type layout


function getCreateSetChoiceDocumentTypeLayout(frame, item) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item),
    items: frame.properties[item],
    additionalItems: frame.properties[item]
  };
  return layout;
} // create set Choice Document type ui layout


function getCreateSetChoiceDocumentTypeUILayout(frame, item) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: true,
        orderable: true,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
} // edit set Choice Document type layout


function getEditSetChoiceDocumentTypeLayout(frame, item, formData) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item),
    items: frame.properties[item],
    additionalItems: frame.properties[item]
  }; // get default value and fill items of array

  var defaultValues = (0, _utils.getDefaultValue)(item, formData);
  var filledItems = [];

  if (Array.isArray(defaultValues) && defaultValues.length) {
    defaultValues.map(function (value) {
      if (frame.properties[item].hasOwnProperty("anyOf")) {
        frame.properties[item]["anyOf"].map(function (aOf) {
          if (aOf.title === value["@type"]) {
            var structure = {};

            for (var props in aOf) {
              structure[props] = aOf[props];
            }

            structure["default"] = value;
            filledItems.push(structure);
          }
        });
      }
    });
  } //console.log("filledItems", filledItems)
  // get filled items


  layout.items = filledItems;
  var properties = {}; // get additional items

  for (var props in frame.properties[item]) {
    if (props !== "default") {
      properties[props] = frame.properties[item][props];
    }
  } // additional items


  layout.additionalItems = properties;
  return layout;
} // edit set Choice Document type ui layout


function getEditSetChoiceDocumentTypeUILayout(frame, item) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: true,
        orderable: true,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
} // view set Choice Document type layout


function getViewSetChoiceDocumentTypeLayout(frame, item, formData) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item),
    items: frame.properties[item],
    additionalItems: frame.properties[item]
  }; // get default value and fill items of array

  var defaultValues = (0, _utils.getDefaultValue)(item, formData);
  var filledItems = [];

  if (Array.isArray(defaultValues) && defaultValues.length) {
    defaultValues.map(function (value) {
      if (frame.properties[item].hasOwnProperty("anyOf")) {
        frame.properties[item]["anyOf"].map(function (aOf) {
          if (aOf.title === value["@type"]) {
            var structure = {};

            for (var props in aOf) {
              structure[props] = aOf[props];
            }

            structure["default"] = value;
            filledItems.push(structure);
          }
        });
      }
    });
  } //console.log("filledItems", filledItems)
  // get filled items


  layout.items = filledItems;
  var properties = {}; // get additional items

  for (var props in frame.properties[item]) {
    if (props !== "default") {
      properties[props] = frame.properties[item][props];
    }
  } // additional items


  layout.additionalItems = properties;
  return layout;
} // view set Choice Document type ui layout


function getViewSetChoiceDocumentTypeUILayout(frame, item) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: false,
        orderable: true,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
}
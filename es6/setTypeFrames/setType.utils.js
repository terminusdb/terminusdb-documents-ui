"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCreateSetChoiceDocumentTypeLayout = getCreateSetChoiceDocumentTypeLayout;
exports.getCreateSetChoiceDocumentTypeUILayout = getCreateSetChoiceDocumentTypeUILayout;
exports.getCreateSetDataTypeLayout = getCreateSetDataTypeLayout;
exports.getCreateSetDataTypeUILayout = getCreateSetDataTypeUILayout;
exports.getCreateSetDocumentTypeLayout = getCreateSetDocumentTypeLayout;
exports.getCreateSetDocumentTypeUILayout = getCreateSetDocumentTypeUILayout;
exports.getCreateSetEnumTypeLayout = getCreateSetEnumTypeLayout;
exports.getCreateSetEnumTypeUILayout = getCreateSetEnumTypeUILayout;
exports.getCreateSetSubChoiceDocumentTypeLayout = getCreateSetSubChoiceDocumentTypeLayout;
exports.getCreateSetSubChoiceDocumentTypeUILayout = getCreateSetSubChoiceDocumentTypeUILayout;
exports.getCreateSetSubDocumentTypeLayout = getCreateSetSubDocumentTypeLayout;
exports.getCreateSetSubDocumentTypeUILayout = getCreateSetSubDocumentTypeUILayout;
exports.getCreateSetSysDataTypeLayout = getCreateSetSysDataTypeLayout;
exports.getCreateSetSysDataTypeUILayout = getCreateSetSysDataTypeUILayout;
exports.getEditSetChoiceDocumentTypeLayout = getEditSetChoiceDocumentTypeLayout;
exports.getEditSetChoiceDocumentTypeUILayout = getEditSetChoiceDocumentTypeUILayout;
exports.getEditSetChoiceSubDocumentTypeLayout = getEditSetChoiceSubDocumentTypeLayout;
exports.getEditSetChoiceSubDocumentTypeUILayout = getEditSetChoiceSubDocumentTypeUILayout;
exports.getEditSetDataTypeLayout = getEditSetDataTypeLayout;
exports.getEditSetDataTypeUILayout = getEditSetDataTypeUILayout;
exports.getEditSetDocumentTypeLayout = getEditSetDocumentTypeLayout;
exports.getEditSetDocumentTypeUILayout = getEditSetDocumentTypeUILayout;
exports.getEditSetEnumTypeLayout = getEditSetEnumTypeLayout;
exports.getEditSetEnumTypeUILayout = getEditSetEnumTypeUILayout;
exports.getEditSetOneOfTypeLayout = getEditSetOneOfTypeLayout;
exports.getEditSetOneOfTypeUILayout = void 0;
exports.getEditSetSubDocumentTypeLayout = getEditSetSubDocumentTypeLayout;
exports.getEditSetSubDocumentTypeUILayout = getEditSetSubDocumentTypeUILayout;
exports.getEditSetSysDataTypeLayout = getEditSetSysDataTypeLayout;
exports.getEditSetSysDataTypeUILayout = getEditSetSysDataTypeUILayout;
exports.getViewSetChoiceDocumentTypeLayout = getViewSetChoiceDocumentTypeLayout;
exports.getViewSetChoiceDocumentTypeUILayout = getViewSetChoiceDocumentTypeUILayout;
exports.getViewSetChoiceSubDocumentTypeLayout = getViewSetChoiceSubDocumentTypeLayout;
exports.getViewSetChoiceSubDocumentTypeUILayout = getViewSetChoiceSubDocumentTypeUILayout;
exports.getViewSetDataTypeLayout = getViewSetDataTypeLayout;
exports.getViewSetDataTypeUILayout = getViewSetDataTypeUILayout;
exports.getViewSetDocumentTypeLayout = getViewSetDocumentTypeLayout;
exports.getViewSetDocumentTypeUILayout = getViewSetDocumentTypeUILayout;
exports.getViewSetEnumTypeLayout = getViewSetEnumTypeLayout;
exports.getViewSetEnumTypeUILayout = getViewSetEnumTypeUILayout;
exports.getViewSetOneOfTypeLayout = getViewSetOneOfTypeLayout;
exports.getViewSetOneOfTypeUILayout = void 0;
exports.getViewSetSubDocumentTypeLayout = getViewSetSubDocumentTypeLayout;
exports.getViewSetSubDocumentTypeUILayout = getViewSetSubDocumentTypeUILayout;
exports.getViewSetSysDataTypeLayout = getViewSetSysDataTypeLayout;
exports.getViewSetSysDataTypeUILayout = getViewSetSysDataTypeUILayout;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _constants = require("../constants");

var _DocumentSelects = require("../documentTypeFrames/DocumentSelects");

var _reactBootstrap = require("react-bootstrap");

var _reactJsonEditorAjrm = _interopRequireDefault(require("react-json-editor-ajrm"));

var _en = _interopRequireDefault(require("react-json-editor-ajrm/locale/en"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

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


function getCreateSetSubDocumentTypeUILayout(frame, item, uiFrame) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
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
} // edit set subDocument type layout


function getEditSetSubDocumentTypeLayout(frame, item, formData, documentation) {
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
  } // get filled items


  if (Array.isArray(filledItems) && filledItems.length) {
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
} // edit set subDocument type ui layout


function getEditSetSubDocumentTypeUILayout(frame, item, uiFrame) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
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
  //layout.additionalItems = properties


  return layout;
} // View set subDocument type UI Layout


function getViewSetSubDocumentTypeUILayout(frame, item, uiFrame, formData) {
  var uiLayout = {}; //checkIfSysJSONFieldExists(frame)
  // hide widget if formData of item is empty

  if (!(0, _utils.isFilled)(formData, item)) {
    uiLayout = {
      "ui:widget": 'hidden',
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.HideArrayFieldTemplate
    };
    return uiLayout;
  }

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      //additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
}
/**************   Set Data Types       *****************/
// create set data type layout


function getCreateSetDataTypeLayout(frame, item, documentation) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item, documentation),
    items: frame.properties[item],
    additionalItems: frame.properties[item]
  };
  return layout;
} // create set data type ui layout


function getCreateSetDataTypeUILayout(frame, item, uiFrame) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
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
} // edit set data type layout


function getEditSetDataTypeLayout(frame, item, formData, documentation) {
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
} // edit set data type ui layout


function getEditSetDataTypeUILayout(frame, item, uiFrame) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
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
} // View set data type Layout


function getViewSetDataTypeLayout(frame, item, formData, documentation) {
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
} // View set data type UI Layout


function getViewSetDataTypeUILayout(frame, item, formData, uiFrame) {
  var uiLayout = {}; // hide widget if formData of item is empty

  if (!(0, _utils.isFilled)(formData, item)) {
    uiLayout = {
      "ui:widget": 'hidden',
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.HideArrayFieldTemplate
    };
    return uiLayout;
  }

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
}
/**************   Set Sys Data Types       *****************/
// create set sys data type layout


function getCreateSetSysDataTypeLayout(frame, item, documentation) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item, documentation),
    items: frame.properties[item],
    additionalItems: frame.properties[item]
  };
  return layout;
} // create set sys data type ui layout


function getCreateSetSysDataTypeUILayout(frame, item, uiFrame) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
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
} // edit set sys data type layout


function getEditSetSysDataTypeLayout(frame, item, formData, documentation) {
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


function getEditSetSysDataTypeUILayout(frame, item, uiFrame, documentation) {
  var uiLayout = {}; //console.log("set sys frame", frame)

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
} // View set Sys data type Layout


function getViewSetSysDataTypeLayout(frame, item, formData, documentation) {
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
} // View set Sys data type UI Layout


function getViewSetSysDataTypeUILayout(frame, item, formData, uiFrame) {
  var uiLayout = {}; // hide widget if formData of item is empty

  if (!(0, _utils.isFilled)(formData, item)) {
    uiLayout = {
      "ui:widget": 'hidden',
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.HideArrayFieldTemplate
    };
    return uiLayout;
  }

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return addedCustomUI;
}
/**************   Set Document Types       *****************/
// create set Document type layout


function getCreateSetDocumentTypeLayout(frame, item, documentation) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item, documentation),
    items: frame.properties[item],
    additionalItems: frame.properties[item]
  };
  return layout;
} // create set Document type ui layout


function getCreateSetDocumentTypeUILayout(frame, item, uiFrame) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: true,
        orderable: false,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  } // if hidden


  if (uiFrame && uiFrame.hasOwnProperty(item) && uiFrame[item].hasOwnProperty("ui:widget") && uiFrame[item]["ui:widget"] === "hidden") {
    uiLayout = {
      "ui:widget": 'hidden',
      "ui:ArrayFieldTemplate": _utils.HideArrayFieldTemplate
    };
  }

  return uiLayout;
} // edit set Document type layout


function getEditSetDocumentTypeLayout(frame, item, formData, documentation) {
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
  }

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
} // edit set Document type ui layout


function getEditSetDocumentTypeUILayout(frame, item, uiFrame, onSelect, documentation) {
  //console.log("***** frame.uiSchema[item]," , frame.uiSchema[item])
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
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(inputValue, callback) {
            var type, opts;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    type = frame.properties[item]["linked_to"];
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
        }(); // handle input change on AsyncSelect


        var handleInputChange = function handleInputChange(newValue) {
          var inputValue = newValue.replace(/\W/g, '');
          return inputValue;
        };

        function onChange(e) {
          props.onChange(e.value);
        } // extracting custom ui styles


        var selectStyle = (0, _utils.extractUIFrameSelectTemplate)(uiFrame) ? (0, _utils.extractUIFrameSelectTemplate)(uiFrame) : _constants.SELECT_STYLES;
        var label = (0, _utils.getLabelFromDocumentation)(item, documentation);
        var returnElement = [];

        if (props.formData) {
          returnElement.push( /*#__PURE__*/_react["default"].createElement(_DocumentSelects.FilledDocumentSelect, {
            label: label,
            styles: selectStyle,
            placeholder: props.uiSchema["ui:placeholder"],
            onChange: onChange,
            loadOptions: loadOptions,
            defaultValue: props.formData,
            handleInputChange: handleInputChange
          }));
        } else returnElement.push( /*#__PURE__*/_react["default"].createElement(_DocumentSelects.EmptyDocumentSelect, {
          label: label,
          styles: selectStyle,
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
      additionalItems: modifiedUiLayout,
      "ui:options": {
        addable: true,
        orderable: false,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  } // if hidden


  if (uiFrame && uiFrame.hasOwnProperty(item) && uiFrame[item].hasOwnProperty("ui:widget") && uiFrame[item]["ui:widget"] === "hidden") {
    uiLayout = {
      "ui:widget": 'hidden',
      "ui:ArrayFieldTemplate": _utils.HideArrayFieldTemplate
    };
  }

  return uiLayout;
} // View set Document type Layout


function getViewSetDocumentTypeLayout(frame, item, formData, documentation) {
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
} // View set Document type UI Layout


function getViewSetDocumentTypeUILayout(frame, item, onSelect, uiFrame, formData, onTraverse, documentation) {
  // getting ui layout for additional items
  var additionalItemsUiStruct = {},
      uiLayout = {},
      modifiedUiLayout = {}; // hide widget if formData of item is empty

  if (!(0, _utils.isFilled)(formData, item)) {
    uiLayout = {
      "ui:widget": 'hidden',
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.HideArrayFieldTemplate
    };
    return uiLayout;
  }

  for (var ui in frame.uiSchema[item]) {
    if (ui !== "ui:field") {
      additionalItemsUiStruct[ui] = frame.uiSchema[item][ui];
    }
  } // extracting custom ui styles


  var selectStyle = (0, _utils.extractUIFrameSelectTemplate)(uiFrame) ? (0, _utils.extractUIFrameSelectTemplate)(uiFrame) : _constants.SELECT_STYLES;
  var label = (0, _utils.getLabelFromDocumentation)(item, documentation); // getting the layout to put correct st values

  for (var ui in frame.uiSchema[item]) {
    if (ui === "ui:field") {
      var displayFilledSetSelect = function displayFilledSetSelect(props) {
        // loadOptions on AsyncSelect
        var loadOptions = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(inputValue, callback) {
            var opts;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
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
          returnElement.push( /*#__PURE__*/_react["default"].createElement(_DocumentSelects.FilledDocumentViewSelect, {
            label: label,
            defaultValue: props.formData,
            onTraverse: onTraverse,
            styles: selectStyle
          })
          /*<FilledDocumentSelect
              label={props.name}
              styles={selectStyle}
              placeholder={props.uiSchema["ui:placeholder"]}
              onChange={onChange}
              loadOptions={loadOptions}
              defaultValue={props.formData}
              handleInputChange={handleInputChange}
          />*/
          );
        } else returnElement.push( /*#__PURE__*/_react["default"].createElement(_DocumentSelects.EmptyDocumentSelect, {
          label: label,
          styles: selectStyle,
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
        orderable: false,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  } // if hidden


  if (uiFrame && uiFrame.hasOwnProperty(item) && uiFrame[item].hasOwnProperty("ui:widget") && uiFrame[item]["ui:widget"] === "hidden") {
    uiLayout = {
      "ui:widget": 'hidden',
      "ui:ArrayFieldTemplate": _utils.HideArrayFieldTemplate
    };
  }

  return uiLayout;
}
/**************   Set Enum Types       *****************/
// create set Enum type layout


function getCreateSetEnumTypeLayout(frame, item, documentation) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item, documentation),
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
        orderable: false,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
} // edit set Enum type layout


function getEditSetEnumTypeLayout(frame, item, formData, documentation) {
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
  } // get filled items


  if (Array.isArray(filledItems) && filledItems.length) layout.items = filledItems;
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
        orderable: false,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
} // view set Enum type layout


function getViewSetEnumTypeLayout(frame, item, formData, documentation) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item, documentation),
    items: frame.properties[item] //additionalItems: frame.properties[item]

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
  //layout.additionalItems = properties


  return layout;
} // view set Enum type ui layout


function getViewSetEnumTypeUILayout(frame, item, formData) {
  var uiLayout = {};

  if (!(0, _utils.isFilled)(formData, item)) {
    uiLayout = {
      "ui:widget": 'hidden',
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.HideArrayFieldTemplate
    };
    return uiLayout;
  }

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
}
/**************   Set Sub Choice Document Types       *****************/
// create set Sub Choice Document type layout


function getCreateSetSubChoiceDocumentTypeLayout(frame, item, documentation) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item, documentation),
    //getSetTitle(item),
    items: frame.properties[item],
    additionalItems: frame.properties[item]
  };
  return layout;
} // create set Sub Choice Document type ui layout


function getCreateSetSubChoiceDocumentTypeUILayout(frame, item, uiFrame) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
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
} // edit set Sub Choice Document type layout


function getEditSetChoiceSubDocumentTypeLayout(frame, item, formData, documentation) {
  //console.log("!!!! CHOICE SET frame", frame)
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


  if (Array.isArray(filledItems) && filledItems.length) layout.items = filledItems;
  var properties = {}; // get additional items

  for (var props in frame.properties[item]) {
    if (props !== "default") {
      properties[props] = frame.properties[item][props];
    }
  } // additional items


  layout.additionalItems = properties;
  return layout;
} // edit set Sub Choice Document type ui layout


function getEditSetChoiceSubDocumentTypeUILayout(frame, item) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: true,
        orderable: false,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
} // view set Sub Choice Document type layout


function getViewSetChoiceSubDocumentTypeLayout(frame, item, formData, documentation) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item, documentation),
    items: frame.properties[item] //additionalItems: frame.properties[item]

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
  //layout.additionalItems = properties


  return layout;
} // view set Sub Choice Document type ui layout


function getViewSetChoiceSubDocumentTypeUILayout(frame, item, formData) {
  var uiLayout = {};

  if (!(0, _utils.isFilled)(formData, item)) {
    uiLayout = {
      "ui:widget": 'hidden',
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.HideArrayFieldTemplate
    };
    return uiLayout;
  }

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: false,
        orderable: false,
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


function getCreateSetChoiceDocumentTypeUILayout(frame, item, uiFrame) {
  var uiLayout = {};

  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: true,
        orderable: false,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  } // custom ui:schema - add to default ui schema


  var addedCustomUI = (0, _utils.addCustomUI)(item, uiFrame, uiLayout);
  return uiLayout;
} // edit set Choice Document type layout


function getEditSetChoiceDocumentTypeLayout(frame, item, formData) {
  //console.log("!!!! CHOICE SET frame", frame)
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item),
    items: frame.properties[item] //additionalItems: frame.properties[item]

  }; // get default value and fill items of array

  var defaultValues = (0, _utils.getDefaultValue)(item, formData);
  var filledItems = [];

  if (Array.isArray(defaultValues) && defaultValues.length) {
    defaultValues.map(function (value) {
      if (frame.properties[item].hasOwnProperty("anyOf")) {
        frame.properties[item]["anyOf"].map(function (aOf) {
          var documentClass = aOf.title;

          if (value.includes("".concat(documentClass, "/"))) {
            var structure = {};

            for (var props in aOf) {
              structure[props] = aOf[props];
            }

            structure["properties"][documentClass]["default"] = value;
            filledItems.push(structure);
          }
        });
      }
    });
  } //console.log("filledItems", filledItems)
  // get filled items


  layout.items = filledItems; // set empty additional items

  var emptyAdditionalItems = (0, _utils.getSetChoiceEmptyFrames)(frame, item);
  layout.additionalItems = {
    description: frame.properties[item].description,
    info: frame.properties[item].info,
    title: frame.properties[item].title,
    type: frame.properties[item].type,
    anyOf: emptyAdditionalItems
  };
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
        orderable: false,
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
    title: (0, _utils.getSetTitle)(item)
  }; // get default value and fill items of array

  var defaultValues = (0, _utils.getDefaultValue)(item, formData);
  var filledItems = [];

  if (Array.isArray(defaultValues) && defaultValues.length) {
    defaultValues.map(function (value) {
      var structure = {
        type: 'string',
        tilte: item,
        "default": value
      };
      filledItems.push(structure);
    });
  } //console.log("filledItems", filledItems)
  // get filled items


  layout["items"] = filledItems;
  return layout;
} // view set Choice Document type ui layout


function getViewSetChoiceDocumentTypeUILayout(frame, item, onTraverse) {
  var uiLayout = {};

  function getViewSetChoice(props) {
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

    var filledUis = [];

    if (Array.isArray(props.formData)) {
      props.formData.map(function (value) {
        filledUis.push( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
          onClick: function onClick(e) {
            return handleClick(e, value);
          },
          className: "tdb__span__select text-light"
        }, value)));
      });
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, {
        className: "control-label"
      }, item), filledUis);
    } // if not array - then theres no filled value avail


    return /*#__PURE__*/_react["default"].createElement("div", null);
  }

  uiLayout = {
    "ui:title": (0, _utils.getTitle)(item, (0, _utils.checkIfKey)(item, frame["@key"])),
    //classNames: "tdb__input mb-3 mt-3",
    "ui:field": getViewSetChoice,
    "ui:options": {
      addable: false,
      orderable: false,
      removable: false
    },
    "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
  };
  /*uiLayout= {
      items: frame.uiSchema[item],
      additionalItems: frame.uiSchema[item],
   }*/

  return uiLayout;
}
/**************   Set oneOfs Document Types       *****************/
// edit set Sub oneOf Document type layout


function getEditSetOneOfTypeLayout(frame, item, formData) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item),
    //items: frame.properties[item],
    additionalItems: frame.properties[item]
  }; //console.log("frame.properties[item]",frame.properties[item])

  var filledItems = [];
  var defaultValue = formData && Array.isArray(formData[item]) ? formData[item] : null;

  if (!defaultValue) {
    layout["items"] = frame.properties[item];
    return layout;
  } // get filled frames


  defaultValue.map(function (value) {
    if (frame.properties[item].hasOwnProperty("properties") && frame.properties[item]["properties"].hasOwnProperty("@oneOf") && frame.properties[item]["properties"]["@oneOf"].hasOwnProperty("anyOf")) {
      var filledAnyOfs = frame.properties[item]["properties"]["@oneOf"]["anyOf"];
      filledAnyOfs.map(function (fAnyOf) {
        var title = fAnyOf.title;
        var structure = {};

        if (value.hasOwnProperty(title)) {
          // match
          var filledProperties = {};

          for (var props in fAnyOf.properties) {
            var gatherProperties = {};

            for (var key in fAnyOf.properties[props]) {
              gatherProperties[key] = fAnyOf.properties[props][key];
            }

            if (!gatherProperties.hasOwnProperty("default")) {
              gatherProperties["default"] = value[title][props];
            }

            filledProperties[props] = gatherProperties;
          } //console.log("filledProperties",filledProperties)


          var anyOfStructure = {
            type: "object",
            title: title,
            properties: filledProperties,
            uiProperties: fAnyOf.uiProperties //default: value[title]

          }; // anyOf structure

          structure = {
            type: 'object',
            info: _constants.ONEOFVALUES,
            title: item,
            anyOf: [anyOfStructure]
          };
        } // oneOf structure


        if (Object.keys(structure).length) {
          //filledItems.push(structure)
          filledItems.push({
            properties: {
              "@oneOf": structure,
              "@type": {
                type: 'string',
                title: item,
                "default": item
              }
            }
          });
        }
      });
    }
  });
  console.log("filledItems", filledItems); // get filled items

  layout["items"] = filledItems;
  /*let properties = {}
  // get additional items
  for(var props in frame.properties[item]) {
      if(props !== "default"){
          properties[props] = frame.properties[item][props]
      }
  }
  // additional items
  layout.additionalItems = properties */

  return layout;
} // edit set oneOf Document type ui layout


var getEditSetOneOfTypeUILayout = function getEditSetOneOfTypeUILayout(frame, item, layout, uiFrame) {
  var subDocuemntBg = (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) ? (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) : 'bg-secondary';
  var uiItemsLayout = {
    classNames: "card ".concat(subDocuemntBg, " p-4 mt-4 mb-4")
  };
  var uiLayout = {},
      itemsLayout = [],
      itemCount = 0; //console.log("layout", layout)

  if (layout.hasOwnProperty("items") && Array.isArray(layout.items)) {
    layout.items.map(function (its) {
      if (its.hasOwnProperty("properties") && its["properties"].hasOwnProperty("@oneOf") && its["properties"]["@oneOf"].hasOwnProperty("anyOf") && Array.isArray(its["properties"]["@oneOf"]["anyOf"])) {
        //if(its.hasOwnProperty("anyOf") && Array.isArray(its["anyOf"])) {
        var filledAnyOf = its["properties"]["@oneOf"]["anyOf"][0]; // at this point there will only be one value

        if (filledAnyOf.hasOwnProperty("uiProperties")) for (var ui in filledAnyOf["uiProperties"]) {
          uiItemsLayout[ui] = filledAnyOf["uiProperties"][ui];
        }
        itemCount += 1;
      }
    });
  } // get number of items layout


  for (var count = 0; count < itemCount; count++) {
    itemsLayout.push({
      "@oneOf": uiItemsLayout,
      "@type": {
        "ui:widget": 'hidden'
      }
    });
  } //console.log("uiItemsLayout", uiItemsLayout)


  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      //items: uiItemsLayout,
      //classNames: `card ${subDocuemntBg} p-4 mt-4 mb-4`,
      items: itemsLayout,
      additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: true,
        orderable: false,
        removable: true
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
}; // view set oneOf Document type layout


exports.getEditSetOneOfTypeUILayout = getEditSetOneOfTypeUILayout;

function getViewSetOneOfTypeLayout(frame, item, formData) {
  var layout = {
    type: "array",
    title: (0, _utils.getSetTitle)(item) //items: frame.properties[item],
    //additionalItems: frame.properties[item]

  }; //console.log("frame.properties[item]",frame.properties[item])

  var filledItems = [];
  var defaultValue = formData && Array.isArray(formData[item]) ? formData[item] : null;

  if (!defaultValue) {
    //layout["items"]=frame.properties[item]
    var _layout = {}; // dont display if formData is empty

    return _layout;
  } // get filled frames


  defaultValue.map(function (value) {
    if (frame.properties[item].hasOwnProperty("properties") && frame.properties[item]["properties"].hasOwnProperty("@oneOf") && frame.properties[item]["properties"]["@oneOf"].hasOwnProperty("anyOf")) {
      var filledAnyOfs = frame.properties[item]["properties"]["@oneOf"]["anyOf"];
      filledAnyOfs.map(function (fAnyOf) {
        var title = fAnyOf.title;
        var structure = {};

        if (value.hasOwnProperty(title)) {
          // match
          var filledProperties = {};

          for (var props in fAnyOf.properties) {
            var gatherProperties = {};

            for (var key in fAnyOf.properties[props]) {
              gatherProperties[key] = fAnyOf.properties[props][key];
            }

            if (!gatherProperties.hasOwnProperty("default")) {
              gatherProperties["default"] = value[title][props];
            } else if (!gatherProperties["default"]) {
              gatherProperties["default"] = value[title][props];
            }

            filledProperties[props] = gatherProperties;
          } //console.log("filledProperties",filledProperties)

          /*@choice: {ui:widget: 'hidden'}
          @type: {ui:widget: 'hidden'}
          date_range: {ui:widget: 'hidden'}
          value: {ui:widget: 'hidden', classNames: 'tdb__input mb-3 mt-3', ui:title: {…}}
          [[Prototype]]: Object */


          var newUiProperties = {};

          for (var uiProp in fAnyOf.uiProperties) {
            var newKeys = {};

            if (uiProp === "@type") {
              newUiProperties[uiProp] = fAnyOf.uiProperties[uiProp];
              continue;
            }

            if (uiProp === "@choice") {
              newUiProperties[uiProp] = fAnyOf.uiProperties[uiProp];
              continue;
            }

            for (var key in fAnyOf.uiProperties[uiProp]) {
              if (key === "ui:widget" && fAnyOf.uiProperties[uiProp][key] === 'hidden') {// do not hide
              } else newKeys[key] = fAnyOf.uiProperties[uiProp][key];
            }

            newUiProperties[uiProp] = newKeys;
          } //console.log("newUiProperties",newUiProperties)


          var anyOfStructure = {
            type: "object",
            title: title,
            properties: filledProperties,
            uiProperties: newUiProperties //uiProperties: fAnyOf.uiProperties,
            //default: value[title]

          }; // anyOf structure

          structure = {
            type: 'object',
            info: _constants.ONEOFVALUES,
            title: item,
            anyOf: [anyOfStructure]
          };
        } // oneOf structure


        if (Object.keys(structure).length) {
          //filledItems.push(structure)
          filledItems.push({
            properties: {
              "@oneOf": structure,
              "@type": {
                type: 'string',
                title: item,
                "default": item
              }
            }
          });
        }
      });
    }
  }); //console.log("filledItems", filledItems)
  // get filled items

  layout["items"] = filledItems;
  /*let properties = {}
  // get additional items
  for(var props in frame.properties[item]) {
      if(props !== "default"){
          properties[props] = frame.properties[item][props]
      }
  }
  // additional items
  layout.additionalItems = properties */

  return layout;
} // view set oneOf Document type ui layout


var getViewSetOneOfTypeUILayout = function getViewSetOneOfTypeUILayout(frame, item, layout, uiFrame, formData) {
  if (!(0, _utils.isFilled)(formData, item)) {
    uiLayout = {
      "ui:widget": 'hidden',
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.HideArrayFieldTemplate
    };
    return uiLayout;
  }

  var subDocuemntBg = (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) ? (0, _utils.extractUIFrameSubDocumentTemplate)(uiFrame) : 'bg-secondary';
  var uiItemsLayout = {
    classNames: "card ".concat(subDocuemntBg, " p-4 mt-4 mb-4")
  };
  var uiLayout = {},
      itemsLayout = [],
      itemCount = 0; //console.log("layout", layout)

  if (layout.hasOwnProperty("items") && Array.isArray(layout.items)) {
    layout.items.map(function (its) {
      if (its.hasOwnProperty("properties") && its["properties"].hasOwnProperty("@oneOf") && its["properties"]["@oneOf"].hasOwnProperty("anyOf") && Array.isArray(its["properties"]["@oneOf"]["anyOf"])) {
        //if(its.hasOwnProperty("anyOf") && Array.isArray(its["anyOf"])) {
        var filledAnyOf = its["properties"]["@oneOf"]["anyOf"][0]; // at this point there will only be one value

        if (filledAnyOf.hasOwnProperty("uiProperties")) for (var ui in filledAnyOf["uiProperties"]) {
          uiItemsLayout[ui] = filledAnyOf["uiProperties"][ui];
        }
        itemCount += 1;
      }
    });
  } // get number of items layout, also set type hidden


  for (var count = 0; count < itemCount; count++) {
    itemsLayout.push({
      "@oneOf": uiItemsLayout,
      "@type": {
        "ui:widget": 'hidden'
      }
    });
  } // if no items to display then hide in view mode


  if (itemsLayout.length === 0) {
    uiLayout = {
      "ui:widget": 'hidden',
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.HideArrayFieldTemplate
    };
    return uiLayout;
  } //console.log("uiItemsLayout", uiItemsLayout)


  if (frame.hasOwnProperty("uiSchema")) {
    uiLayout = {
      //items: uiItemsLayout,
      items: itemsLayout,
      //additionalItems: frame.uiSchema[item],
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false
      },
      "ui:ArrayFieldTemplate": _utils.ArrayFieldTemplate
    };
  }

  return uiLayout;
};

exports.getViewSetOneOfTypeUILayout = getViewSetOneOfTypeUILayout;
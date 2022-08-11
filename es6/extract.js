"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformData = void 0;

var _constants = require("./constants");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// return true if only @type is available
function checkIfNotFilled(json) {
  if (Object.keys(json).length === 1 && json.hasOwnProperty("@type")) return true;
  return false;
}

var transformData = function transformData(mode, schema, data, frame, current, type) {
  var extracted = {}; //let currentFrame=frame[current]

  var formData = data;

  for (var key in formData) {
    if (formData[key] === undefined) continue; // undefined
    //else if(formData[key] === SYS_UNIT_DATA_TYPE) return {[key] : []} // sys:Units
    else if (key === _constants.ONEOFVALUES) {
      //@oneOf
      var sysUnit = false,
          newOneOfData = {};

      for (var oneOf in formData[key]) {
        if (formData[key][oneOf] === _constants.SYS_UNIT_DATA_TYPE) {
          sysUnit = oneOf;
          break;
        }
      }

      if (sysUnit) {
        newOneOfData = _defineProperty({}, sysUnit, []);
      } else {
        var oneOfData = formData[key];
        var choice = oneOfData["@choice"];
        var choiceData = {};

        for (var cds in oneOfData) {
          if (cds !== "@choice") {
            choiceData[cds] = oneOfData[cds];
          }
        }

        newOneOfData = _defineProperty({}, choice, choiceData);
      }

      return newOneOfData;
    } else if (key === _constants.COORDINATES && Array.isArray(formData[key])) {
      // coordinates for geo jsons - we only support POINT TYPE
      return formData;
    } else if (Array.isArray(formData[key])) {
      (function () {
        // array (sets/ lists)
        var transformedArray = [],
            transformed = void 0;
        formData[key].map(function (fd) {
          // loop over each frames in Set/ List
          if (checkIfNotFilled(fd)) {
            // object with only @type in it , we dont extract this value as it is not filled
            //return extracted
            return;
          }

          if (typeof fd === "string" || typeof fd === "number" || typeof fd === "boolean") {
            // set of document classes
            transformedArray.push(fd);
          } else {
            if (fd.hasOwnProperty("info") && fd.info === _constants.CHOICECLASSES) {
              var temp = fd;
              delete temp.info; // at this stage there should be only 1 elemenet in frame[key]

              var k = Object.keys(temp)[0];
              transformed = temp[k];
            } else transformed = transformData(mode, schema, fd, frame, current, type);
          }

          if (transformed && Object.keys(transformed).length) transformedArray.push(transformed);
        });

        if (Array.isArray(transformedArray) && transformedArray.length) {
          // populate only if not empty
          extracted[key] = transformedArray;
        }
      })();
    } else if (typeof formData[key] !== "string" && Object.keys(formData[key]).length > 1) {
      // objects 
      if (formData[key].hasOwnProperty("info") && formData[key].info === _constants.CHOICECLASSES) {
        var temp = formData[key];
        delete temp.info; // at this stage there should be only 1 elemenet in frame[key]

        var k = Object.keys(temp)[0];
        extracted[key] = temp[k];
      } else {
        var transformed = transformData(mode, schema, formData[key], frame, current, type);
        if (key === _constants.POINT_TYPE) return transformed;
        if (transformed) extracted[key] = transformed;
      }
    } else if (checkIfNotFilled(formData[key])) {
      // object with only @type in it , we dont extract this value as it is not filled - required to store documnets in TerminusDB
      continue;
    } else if (typeof formData[key] === "string" || typeof formData[key] === "number" || typeof formData[key] === "boolean") {
      // xsd data types
      extracted[key] = formData[key];
    } else if (_typeof(formData[key]) === "object") {
      // sys:JSON types
      extracted[key] = formData[key];
    }
  }

  if (checkIfNotFilled(extracted)) return null;
  return extracted;
};

exports.transformData = transformData;
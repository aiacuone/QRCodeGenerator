webpackHotUpdate_N_E("pages/generator",{

/***/ "./components/Code.js":
/*!****************************!*\
  !*** ./components/Code.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Code; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Generator_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Generator.module.scss */ "./styles/Generator.module.scss");
/* harmony import */ var _styles_Generator_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Generator_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qrcode.react */ "./node_modules/qrcode.react/lib/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Adrian\\OneDrive\\Web Projects\\qr-code-generator\\components\\Code.js";



function Code(_ref) {
  var info = _ref.info;
  var text = "Hello ".concat(info.firstName, ", \n\tThe date you generated the QR Code was ").concat(timeStampDate(), ", the time you generated the QR Code was ").concat(timeStampTime(), ". The information you submitted is as follows:\n\tName: ").concat(info.firstName, " ").concat(info.lastName, "\n\tDate of Birth: ").concat(info.dob, "\n\tEmail: ").concat(info.email, "\n\tNumber: ").concat(info.number, "\nThank you for using my QR Code Generator. All my information and projects can be accessed via the links located within the header of the application. Im very greatful for the opportunity and look forward to your response");

  function handleDownload() {
    var canvas = document.getElementById('code');
    var pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    var downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'code.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  function timeStampDate() {
    var dateObj = new Date(info.time);
    var day = dateObj.getDate();
    var month = dateObj.getMonth() + 1;
    var year = dateObj.getFullYear();
    return "".concat(day, "/").concat(month, "/").concat(year);
  }

  function timeStampTime() {
    var dateObj = new Date(info.time);
    var hours = dateObj.getHours();
    var minutes = dateObj.getMinutes();
    var seconds = dateObj.getSeconds();
    return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Generator_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.code,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(qrcode_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
      value: text,
      id: "code",
      size: 280
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_Generator_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.download,
      onClick: handleDownload,
      children: "Download"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 3
  }, this);
}
_c = Code;

var _c;

$RefreshReg$(_c, "Code");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/qr.js/lib/8BitByte.js":
/*!********************************************!*\
  !*** ./node_modules/qr.js/lib/8BitByte.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mode = __webpack_require__(/*! ./mode */ "./node_modules/qr.js/lib/mode.js");

function QR8bitByte(data) {
	this.mode = mode.MODE_8BIT_BYTE;
	this.data = data;
}

QR8bitByte.prototype = {

	getLength : function(buffer) {
		return this.data.length;
	},
	
	write : function(buffer) {
		for (var i = 0; i < this.data.length; i++) {
			// not JIS ...
			buffer.put(this.data.charCodeAt(i), 8);
		}
	}
};

module.exports = QR8bitByte;



/***/ }),

/***/ "./node_modules/qr.js/lib/BitBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/qr.js/lib/BitBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function QRBitBuffer() {
	this.buffer = new Array();
	this.length = 0;
}

QRBitBuffer.prototype = {

	get : function(index) {
		var bufIndex = Math.floor(index / 8);
		return ( (this.buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
	},
	
	put : function(num, length) {
		for (var i = 0; i < length; i++) {
			this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
		}
	},
	
	getLengthInBits : function() {
		return this.length;
	},
	
	putBit : function(bit) {
	
		var bufIndex = Math.floor(this.length / 8);
		if (this.buffer.length <= bufIndex) {
			this.buffer.push(0);
		}
	
		if (bit) {
			this.buffer[bufIndex] |= (0x80 >>> (this.length % 8) );
		}
	
		this.length++;
	}
};

module.exports = QRBitBuffer;


/***/ }),

/***/ "./node_modules/qr.js/lib/ErrorCorrectLevel.js":
/*!*****************************************************!*\
  !*** ./node_modules/qr.js/lib/ErrorCorrectLevel.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	L : 1,
	M : 0,
	Q : 3,
	H : 2
};



/***/ }),

/***/ "./node_modules/qr.js/lib/Polynomial.js":
/*!**********************************************!*\
  !*** ./node_modules/qr.js/lib/Polynomial.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var math = __webpack_require__(/*! ./math */ "./node_modules/qr.js/lib/math.js");

function QRPolynomial(num, shift) {

	if (num.length == undefined) {
		throw new Error(num.length + "/" + shift);
	}

	var offset = 0;

	while (offset < num.length && num[offset] == 0) {
		offset++;
	}

	this.num = new Array(num.length - offset + shift);
	for (var i = 0; i < num.length - offset; i++) {
		this.num[i] = num[i + offset];
	}
}

QRPolynomial.prototype = {

	get : function(index) {
		return this.num[index];
	},
	
	getLength : function() {
		return this.num.length;
	},
	
	multiply : function(e) {
	
		var num = new Array(this.getLength() + e.getLength() - 1);
	
		for (var i = 0; i < this.getLength(); i++) {
			for (var j = 0; j < e.getLength(); j++) {
				num[i + j] ^= math.gexp(math.glog(this.get(i) ) + math.glog(e.get(j) ) );
			}
		}
	
		return new QRPolynomial(num, 0);
	},
	
	mod : function(e) {
	
		if (this.getLength() - e.getLength() < 0) {
			return this;
		}
	
		var ratio = math.glog(this.get(0) ) - math.glog(e.get(0) );
	
		var num = new Array(this.getLength() );
		
		for (var i = 0; i < this.getLength(); i++) {
			num[i] = this.get(i);
		}
		
		for (var i = 0; i < e.getLength(); i++) {
			num[i] ^= math.gexp(math.glog(e.get(i) ) + ratio);
		}
	
		// recursive call
		return new QRPolynomial(num, 0).mod(e);
	}
};

module.exports = QRPolynomial;


/***/ }),

/***/ "./node_modules/qr.js/lib/QRCode.js":
/*!******************************************!*\
  !*** ./node_modules/qr.js/lib/QRCode.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BitByte = __webpack_require__(/*! ./8BitByte */ "./node_modules/qr.js/lib/8BitByte.js");
var RSBlock = __webpack_require__(/*! ./RSBlock */ "./node_modules/qr.js/lib/RSBlock.js");
var BitBuffer = __webpack_require__(/*! ./BitBuffer */ "./node_modules/qr.js/lib/BitBuffer.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/qr.js/lib/util.js");
var Polynomial = __webpack_require__(/*! ./Polynomial */ "./node_modules/qr.js/lib/Polynomial.js");

function QRCode(typeNumber, errorCorrectLevel) {
	this.typeNumber = typeNumber;
	this.errorCorrectLevel = errorCorrectLevel;
	this.modules = null;
	this.moduleCount = 0;
	this.dataCache = null;
	this.dataList = [];
}

// for client side minification
var proto = QRCode.prototype;

proto.addData = function(data) {
	var newData = new BitByte(data);
	this.dataList.push(newData);
	this.dataCache = null;
};

proto.isDark = function(row, col) {
	if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
		throw new Error(row + "," + col);
	}
	return this.modules[row][col];
};

proto.getModuleCount = function() {
	return this.moduleCount;
};

proto.make = function() {
	// Calculate automatically typeNumber if provided is < 1
	if (this.typeNumber < 1 ){
		var typeNumber = 1;
		for (typeNumber = 1; typeNumber < 40; typeNumber++) {
			var rsBlocks = RSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);

			var buffer = new BitBuffer();
			var totalDataCount = 0;
			for (var i = 0; i < rsBlocks.length; i++) {
				totalDataCount += rsBlocks[i].dataCount;
			}

			for (var i = 0; i < this.dataList.length; i++) {
				var data = this.dataList[i];
				buffer.put(data.mode, 4);
				buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber) );
				data.write(buffer);
			}
			if (buffer.getLengthInBits() <= totalDataCount * 8)
				break;
		}
		this.typeNumber = typeNumber;
	}
	this.makeImpl(false, this.getBestMaskPattern() );
};

proto.makeImpl = function(test, maskPattern) {
	
	this.moduleCount = this.typeNumber * 4 + 17;
	this.modules = new Array(this.moduleCount);
	
	for (var row = 0; row < this.moduleCount; row++) {
		
		this.modules[row] = new Array(this.moduleCount);
		
		for (var col = 0; col < this.moduleCount; col++) {
			this.modules[row][col] = null;//(col + row) % 3;
		}
	}

	this.setupPositionProbePattern(0, 0);
	this.setupPositionProbePattern(this.moduleCount - 7, 0);
	this.setupPositionProbePattern(0, this.moduleCount - 7);
	this.setupPositionAdjustPattern();
	this.setupTimingPattern();
	this.setupTypeInfo(test, maskPattern);
	
	if (this.typeNumber >= 7) {
		this.setupTypeNumber(test);
	}

	if (this.dataCache == null) {
		this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
	}

	this.mapData(this.dataCache, maskPattern);
};

proto.setupPositionProbePattern = function(row, col)  {
	
	for (var r = -1; r <= 7; r++) {
		
		if (row + r <= -1 || this.moduleCount <= row + r) continue;
		
		for (var c = -1; c <= 7; c++) {
			
			if (col + c <= -1 || this.moduleCount <= col + c) continue;
			
			if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
					|| (0 <= c && c <= 6 && (r == 0 || r == 6) )
					|| (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
				this.modules[row + r][col + c] = true;
			} else {
				this.modules[row + r][col + c] = false;
			}
		}		
	}		
};

proto.getBestMaskPattern = function() {

	var minLostPoint = 0;
	var pattern = 0;

	for (var i = 0; i < 8; i++) {
		
		this.makeImpl(true, i);

		var lostPoint = util.getLostPoint(this);

		if (i == 0 || minLostPoint >  lostPoint) {
			minLostPoint = lostPoint;
			pattern = i;
		}
	}

	return pattern;
};

proto.createMovieClip = function(target_mc, instance_name, depth) {

	var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
	var cs = 1;

	this.make();

	for (var row = 0; row < this.modules.length; row++) {
		
		var y = row * cs;
		
		for (var col = 0; col < this.modules[row].length; col++) {

			var x = col * cs;
			var dark = this.modules[row][col];
		
			if (dark) {
				qr_mc.beginFill(0, 100);
				qr_mc.moveTo(x, y);
				qr_mc.lineTo(x + cs, y);
				qr_mc.lineTo(x + cs, y + cs);
				qr_mc.lineTo(x, y + cs);
				qr_mc.endFill();
			}
		}
	}
	
	return qr_mc;
};

proto.setupTimingPattern = function() {
	
	for (var r = 8; r < this.moduleCount - 8; r++) {
		if (this.modules[r][6] != null) {
			continue;
		}
		this.modules[r][6] = (r % 2 == 0);
	}

	for (var c = 8; c < this.moduleCount - 8; c++) {
		if (this.modules[6][c] != null) {
			continue;
		}
		this.modules[6][c] = (c % 2 == 0);
	}
};

proto.setupPositionAdjustPattern = function() {

	var pos = util.getPatternPosition(this.typeNumber);
	
	for (var i = 0; i < pos.length; i++) {
	
		for (var j = 0; j < pos.length; j++) {
		
			var row = pos[i];
			var col = pos[j];
			
			if (this.modules[row][col] != null) {
				continue;
			}
			
			for (var r = -2; r <= 2; r++) {
			
				for (var c = -2; c <= 2; c++) {
				
					if (r == -2 || r == 2 || c == -2 || c == 2
							|| (r == 0 && c == 0) ) {
						this.modules[row + r][col + c] = true;
					} else {
						this.modules[row + r][col + c] = false;
					}
				}
			}
		}
	}
};

proto.setupTypeNumber = function(test) {

	var bits = util.getBCHTypeNumber(this.typeNumber);

	for (var i = 0; i < 18; i++) {
		var mod = (!test && ( (bits >> i) & 1) == 1);
		this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
	}

	for (var i = 0; i < 18; i++) {
		var mod = (!test && ( (bits >> i) & 1) == 1);
		this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
	}
};

proto.setupTypeInfo = function(test, maskPattern) {

	var data = (this.errorCorrectLevel << 3) | maskPattern;
	var bits = util.getBCHTypeInfo(data);

	// vertical		
	for (var i = 0; i < 15; i++) {

		var mod = (!test && ( (bits >> i) & 1) == 1);

		if (i < 6) {
			this.modules[i][8] = mod;
		} else if (i < 8) {
			this.modules[i + 1][8] = mod;
		} else {
			this.modules[this.moduleCount - 15 + i][8] = mod;
		}
	}

	// horizontal
	for (var i = 0; i < 15; i++) {

		var mod = (!test && ( (bits >> i) & 1) == 1);
		
		if (i < 8) {
			this.modules[8][this.moduleCount - i - 1] = mod;
		} else if (i < 9) {
			this.modules[8][15 - i - 1 + 1] = mod;
		} else {
			this.modules[8][15 - i - 1] = mod;
		}
	}

	// fixed module
	this.modules[this.moduleCount - 8][8] = (!test);
};

proto.mapData = function(data, maskPattern) {
	
	var inc = -1;
	var row = this.moduleCount - 1;
	var bitIndex = 7;
	var byteIndex = 0;
	
	for (var col = this.moduleCount - 1; col > 0; col -= 2) {

		if (col == 6) col--;

		while (true) {

			for (var c = 0; c < 2; c++) {
				
				if (this.modules[row][col - c] == null) {
					
					var dark = false;

					if (byteIndex < data.length) {
						dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
					}

					var mask = util.getMask(maskPattern, row, col - c);

					if (mask) {
						dark = !dark;
					}
					
					this.modules[row][col - c] = dark;
					bitIndex--;

					if (bitIndex == -1) {
						byteIndex++;
						bitIndex = 7;
					}
				}
			}
							
			row += inc;

			if (row < 0 || this.moduleCount <= row) {
				row -= inc;
				inc = -inc;
				break;
			}
		}
	}
};

QRCode.PAD0 = 0xEC;
QRCode.PAD1 = 0x11;

QRCode.createData = function(typeNumber, errorCorrectLevel, dataList) {
	
	var rsBlocks = RSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
	
	var buffer = new BitBuffer();
	
	for (var i = 0; i < dataList.length; i++) {
		var data = dataList[i];
		buffer.put(data.mode, 4);
		buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber) );
		data.write(buffer);
	}

	// calc num max data.
	var totalDataCount = 0;
	for (var i = 0; i < rsBlocks.length; i++) {
		totalDataCount += rsBlocks[i].dataCount;
	}

	if (buffer.getLengthInBits() > totalDataCount * 8) {
		throw new Error("code length overflow. ("
			+ buffer.getLengthInBits()
			+ ">"
			+  totalDataCount * 8
			+ ")");
	}

	// end code
	if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
		buffer.put(0, 4);
	}

	// padding
	while (buffer.getLengthInBits() % 8 != 0) {
		buffer.putBit(false);
	}

	// padding
	while (true) {
		
		if (buffer.getLengthInBits() >= totalDataCount * 8) {
			break;
		}
		buffer.put(QRCode.PAD0, 8);
		
		if (buffer.getLengthInBits() >= totalDataCount * 8) {
			break;
		}
		buffer.put(QRCode.PAD1, 8);
	}

	return QRCode.createBytes(buffer, rsBlocks);
};

QRCode.createBytes = function(buffer, rsBlocks) {

	var offset = 0;
	
	var maxDcCount = 0;
	var maxEcCount = 0;
	
	var dcdata = new Array(rsBlocks.length);
	var ecdata = new Array(rsBlocks.length);
	
	for (var r = 0; r < rsBlocks.length; r++) {

		var dcCount = rsBlocks[r].dataCount;
		var ecCount = rsBlocks[r].totalCount - dcCount;

		maxDcCount = Math.max(maxDcCount, dcCount);
		maxEcCount = Math.max(maxEcCount, ecCount);
		
		dcdata[r] = new Array(dcCount);
		
		for (var i = 0; i < dcdata[r].length; i++) {
			dcdata[r][i] = 0xff & buffer.buffer[i + offset];
		}
		offset += dcCount;
		
		var rsPoly = util.getErrorCorrectPolynomial(ecCount);
		var rawPoly = new Polynomial(dcdata[r], rsPoly.getLength() - 1);

		var modPoly = rawPoly.mod(rsPoly);
		ecdata[r] = new Array(rsPoly.getLength() - 1);
		for (var i = 0; i < ecdata[r].length; i++) {
            var modIndex = i + modPoly.getLength() - ecdata[r].length;
			ecdata[r][i] = (modIndex >= 0)? modPoly.get(modIndex) : 0;
		}

	}
	
	var totalCodeCount = 0;
	for (var i = 0; i < rsBlocks.length; i++) {
		totalCodeCount += rsBlocks[i].totalCount;
	}

	var data = new Array(totalCodeCount);
	var index = 0;

	for (var i = 0; i < maxDcCount; i++) {
		for (var r = 0; r < rsBlocks.length; r++) {
			if (i < dcdata[r].length) {
				data[index++] = dcdata[r][i];
			}
		}
	}

	for (var i = 0; i < maxEcCount; i++) {
		for (var r = 0; r < rsBlocks.length; r++) {
			if (i < ecdata[r].length) {
				data[index++] = ecdata[r][i];
			}
		}
	}

	return data;
};

module.exports = QRCode;



/***/ }),

/***/ "./node_modules/qr.js/lib/RSBlock.js":
/*!*******************************************!*\
  !*** ./node_modules/qr.js/lib/RSBlock.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ErrorCorrectLevel
var ECL = __webpack_require__(/*! ./ErrorCorrectLevel */ "./node_modules/qr.js/lib/ErrorCorrectLevel.js");

function QRRSBlock(totalCount, dataCount) {
	this.totalCount = totalCount;
	this.dataCount  = dataCount;
}

QRRSBlock.RS_BLOCK_TABLE = [

	// L
	// M
	// Q
	// H

	// 1
	[1, 26, 19],
	[1, 26, 16],
	[1, 26, 13],
	[1, 26, 9],
	
	// 2
	[1, 44, 34],
	[1, 44, 28],
	[1, 44, 22],
	[1, 44, 16],

	// 3
	[1, 70, 55],
	[1, 70, 44],
	[2, 35, 17],
	[2, 35, 13],

	// 4		
	[1, 100, 80],
	[2, 50, 32],
	[2, 50, 24],
	[4, 25, 9],
	
	// 5
	[1, 134, 108],
	[2, 67, 43],
	[2, 33, 15, 2, 34, 16],
	[2, 33, 11, 2, 34, 12],
	
	// 6
	[2, 86, 68],
	[4, 43, 27],
	[4, 43, 19],
	[4, 43, 15],
	
	// 7		
	[2, 98, 78],
	[4, 49, 31],
	[2, 32, 14, 4, 33, 15],
	[4, 39, 13, 1, 40, 14],
	
	// 8
	[2, 121, 97],
	[2, 60, 38, 2, 61, 39],
	[4, 40, 18, 2, 41, 19],
	[4, 40, 14, 2, 41, 15],
	
	// 9
	[2, 146, 116],
	[3, 58, 36, 2, 59, 37],
	[4, 36, 16, 4, 37, 17],
	[4, 36, 12, 4, 37, 13],
	
	// 10		
	[2, 86, 68, 2, 87, 69],
	[4, 69, 43, 1, 70, 44],
	[6, 43, 19, 2, 44, 20],
	[6, 43, 15, 2, 44, 16],

	// 11
	[4, 101, 81],
	[1, 80, 50, 4, 81, 51],
	[4, 50, 22, 4, 51, 23],
	[3, 36, 12, 8, 37, 13],

	// 12
	[2, 116, 92, 2, 117, 93],
	[6, 58, 36, 2, 59, 37],
	[4, 46, 20, 6, 47, 21],
	[7, 42, 14, 4, 43, 15],

	// 13
	[4, 133, 107],
	[8, 59, 37, 1, 60, 38],
	[8, 44, 20, 4, 45, 21],
	[12, 33, 11, 4, 34, 12],

	// 14
	[3, 145, 115, 1, 146, 116],
	[4, 64, 40, 5, 65, 41],
	[11, 36, 16, 5, 37, 17],
	[11, 36, 12, 5, 37, 13],

	// 15
	[5, 109, 87, 1, 110, 88],
	[5, 65, 41, 5, 66, 42],
	[5, 54, 24, 7, 55, 25],
	[11, 36, 12],

	// 16
	[5, 122, 98, 1, 123, 99],
	[7, 73, 45, 3, 74, 46],
	[15, 43, 19, 2, 44, 20],
	[3, 45, 15, 13, 46, 16],

	// 17
	[1, 135, 107, 5, 136, 108],
	[10, 74, 46, 1, 75, 47],
	[1, 50, 22, 15, 51, 23],
	[2, 42, 14, 17, 43, 15],

	// 18
	[5, 150, 120, 1, 151, 121],
	[9, 69, 43, 4, 70, 44],
	[17, 50, 22, 1, 51, 23],
	[2, 42, 14, 19, 43, 15],

	// 19
	[3, 141, 113, 4, 142, 114],
	[3, 70, 44, 11, 71, 45],
	[17, 47, 21, 4, 48, 22],
	[9, 39, 13, 16, 40, 14],

	// 20
	[3, 135, 107, 5, 136, 108],
	[3, 67, 41, 13, 68, 42],
	[15, 54, 24, 5, 55, 25],
	[15, 43, 15, 10, 44, 16],

	// 21
	[4, 144, 116, 4, 145, 117],
	[17, 68, 42],
	[17, 50, 22, 6, 51, 23],
	[19, 46, 16, 6, 47, 17],

	// 22
	[2, 139, 111, 7, 140, 112],
	[17, 74, 46],
	[7, 54, 24, 16, 55, 25],
	[34, 37, 13],

	// 23
	[4, 151, 121, 5, 152, 122],
	[4, 75, 47, 14, 76, 48],
	[11, 54, 24, 14, 55, 25],
	[16, 45, 15, 14, 46, 16],

	// 24
	[6, 147, 117, 4, 148, 118],
	[6, 73, 45, 14, 74, 46],
	[11, 54, 24, 16, 55, 25],
	[30, 46, 16, 2, 47, 17],

	// 25
	[8, 132, 106, 4, 133, 107],
	[8, 75, 47, 13, 76, 48],
	[7, 54, 24, 22, 55, 25],
	[22, 45, 15, 13, 46, 16],

	// 26
	[10, 142, 114, 2, 143, 115],
	[19, 74, 46, 4, 75, 47],
	[28, 50, 22, 6, 51, 23],
	[33, 46, 16, 4, 47, 17],

	// 27
	[8, 152, 122, 4, 153, 123],
	[22, 73, 45, 3, 74, 46],
	[8, 53, 23, 26, 54, 24],
	[12, 45, 15, 28, 46, 16],

	// 28
	[3, 147, 117, 10, 148, 118],
	[3, 73, 45, 23, 74, 46],
	[4, 54, 24, 31, 55, 25],
	[11, 45, 15, 31, 46, 16],

	// 29
	[7, 146, 116, 7, 147, 117],
	[21, 73, 45, 7, 74, 46],
	[1, 53, 23, 37, 54, 24],
	[19, 45, 15, 26, 46, 16],

	// 30
	[5, 145, 115, 10, 146, 116],
	[19, 75, 47, 10, 76, 48],
	[15, 54, 24, 25, 55, 25],
	[23, 45, 15, 25, 46, 16],

	// 31
	[13, 145, 115, 3, 146, 116],
	[2, 74, 46, 29, 75, 47],
	[42, 54, 24, 1, 55, 25],
	[23, 45, 15, 28, 46, 16],

	// 32
	[17, 145, 115],
	[10, 74, 46, 23, 75, 47],
	[10, 54, 24, 35, 55, 25],
	[19, 45, 15, 35, 46, 16],

	// 33
	[17, 145, 115, 1, 146, 116],
	[14, 74, 46, 21, 75, 47],
	[29, 54, 24, 19, 55, 25],
	[11, 45, 15, 46, 46, 16],

	// 34
	[13, 145, 115, 6, 146, 116],
	[14, 74, 46, 23, 75, 47],
	[44, 54, 24, 7, 55, 25],
	[59, 46, 16, 1, 47, 17],

	// 35
	[12, 151, 121, 7, 152, 122],
	[12, 75, 47, 26, 76, 48],
	[39, 54, 24, 14, 55, 25],
	[22, 45, 15, 41, 46, 16],

	// 36
	[6, 151, 121, 14, 152, 122],
	[6, 75, 47, 34, 76, 48],
	[46, 54, 24, 10, 55, 25],
	[2, 45, 15, 64, 46, 16],

	// 37
	[17, 152, 122, 4, 153, 123],
	[29, 74, 46, 14, 75, 47],
	[49, 54, 24, 10, 55, 25],
	[24, 45, 15, 46, 46, 16],

	// 38
	[4, 152, 122, 18, 153, 123],
	[13, 74, 46, 32, 75, 47],
	[48, 54, 24, 14, 55, 25],
	[42, 45, 15, 32, 46, 16],

	// 39
	[20, 147, 117, 4, 148, 118],
	[40, 75, 47, 7, 76, 48],
	[43, 54, 24, 22, 55, 25],
	[10, 45, 15, 67, 46, 16],

	// 40
	[19, 148, 118, 6, 149, 119],
	[18, 75, 47, 31, 76, 48],
	[34, 54, 24, 34, 55, 25],
	[20, 45, 15, 61, 46, 16]
];

QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
	
	var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
	
	if (rsBlock == undefined) {
		throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
	}

	var length = rsBlock.length / 3;
	
	var list = new Array();
	
	for (var i = 0; i < length; i++) {

		var count = rsBlock[i * 3 + 0];
		var totalCount = rsBlock[i * 3 + 1];
		var dataCount  = rsBlock[i * 3 + 2];

		for (var j = 0; j < count; j++) {
			list.push(new QRRSBlock(totalCount, dataCount) );	
		}
	}
	
	return list;
}

QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {

	switch(errorCorrectLevel) {
	case ECL.L :
		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
	case ECL.M :
		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
	case ECL.Q :
		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
	case ECL.H :
		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
	default :
		return undefined;
	}
}

module.exports = QRRSBlock;


/***/ }),

/***/ "./node_modules/qr.js/lib/math.js":
/*!****************************************!*\
  !*** ./node_modules/qr.js/lib/math.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var QRMath = {

	glog : function(n) {
	
		if (n < 1) {
			throw new Error("glog(" + n + ")");
		}
		
		return QRMath.LOG_TABLE[n];
	},
	
	gexp : function(n) {
	
		while (n < 0) {
			n += 255;
		}
	
		while (n >= 256) {
			n -= 255;
		}
	
		return QRMath.EXP_TABLE[n];
	},
	
	EXP_TABLE : new Array(256),
	
	LOG_TABLE : new Array(256)

};
	
for (var i = 0; i < 8; i++) {
	QRMath.EXP_TABLE[i] = 1 << i;
}
for (var i = 8; i < 256; i++) {
	QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4]
		^ QRMath.EXP_TABLE[i - 5]
		^ QRMath.EXP_TABLE[i - 6]
		^ QRMath.EXP_TABLE[i - 8];
}
for (var i = 0; i < 255; i++) {
	QRMath.LOG_TABLE[QRMath.EXP_TABLE[i] ] = i;
}

module.exports = QRMath;


/***/ }),

/***/ "./node_modules/qr.js/lib/mode.js":
/*!****************************************!*\
  !*** ./node_modules/qr.js/lib/mode.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	MODE_NUMBER :		1 << 0,
	MODE_ALPHA_NUM : 	1 << 1,
	MODE_8BIT_BYTE : 	1 << 2,
	MODE_KANJI :		1 << 3
};


/***/ }),

/***/ "./node_modules/qr.js/lib/util.js":
/*!****************************************!*\
  !*** ./node_modules/qr.js/lib/util.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qr.js/lib/mode.js");
var Polynomial = __webpack_require__(/*! ./Polynomial */ "./node_modules/qr.js/lib/Polynomial.js");
var math = __webpack_require__(/*! ./math */ "./node_modules/qr.js/lib/math.js");

var QRMaskPattern = {
	PATTERN000 : 0,
	PATTERN001 : 1,
	PATTERN010 : 2,
	PATTERN011 : 3,
	PATTERN100 : 4,
	PATTERN101 : 5,
	PATTERN110 : 6,
	PATTERN111 : 7
};

var QRUtil = {

    PATTERN_POSITION_TABLE : [
	    [],
	    [6, 18],
	    [6, 22],
	    [6, 26],
	    [6, 30],
	    [6, 34],
	    [6, 22, 38],
	    [6, 24, 42],
	    [6, 26, 46],
	    [6, 28, 50],
	    [6, 30, 54],		
	    [6, 32, 58],
	    [6, 34, 62],
	    [6, 26, 46, 66],
	    [6, 26, 48, 70],
	    [6, 26, 50, 74],
	    [6, 30, 54, 78],
	    [6, 30, 56, 82],
	    [6, 30, 58, 86],
	    [6, 34, 62, 90],
	    [6, 28, 50, 72, 94],
	    [6, 26, 50, 74, 98],
	    [6, 30, 54, 78, 102],
	    [6, 28, 54, 80, 106],
	    [6, 32, 58, 84, 110],
	    [6, 30, 58, 86, 114],
	    [6, 34, 62, 90, 118],
	    [6, 26, 50, 74, 98, 122],
	    [6, 30, 54, 78, 102, 126],
	    [6, 26, 52, 78, 104, 130],
	    [6, 30, 56, 82, 108, 134],
	    [6, 34, 60, 86, 112, 138],
	    [6, 30, 58, 86, 114, 142],
	    [6, 34, 62, 90, 118, 146],
	    [6, 30, 54, 78, 102, 126, 150],
	    [6, 24, 50, 76, 102, 128, 154],
	    [6, 28, 54, 80, 106, 132, 158],
	    [6, 32, 58, 84, 110, 136, 162],
	    [6, 26, 54, 82, 110, 138, 166],
	    [6, 30, 58, 86, 114, 142, 170]
    ],

    G15 : (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
    G18 : (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
    G15_MASK : (1 << 14) | (1 << 12) | (1 << 10)	| (1 << 4) | (1 << 1),

    getBCHTypeInfo : function(data) {
	    var d = data << 10;
	    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
		    d ^= (QRUtil.G15 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) ) ); 	
	    }
	    return ( (data << 10) | d) ^ QRUtil.G15_MASK;
    },

    getBCHTypeNumber : function(data) {
	    var d = data << 12;
	    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
		    d ^= (QRUtil.G18 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) ) ); 	
	    }
	    return (data << 12) | d;
    },

    getBCHDigit : function(data) {

	    var digit = 0;

	    while (data != 0) {
		    digit++;
		    data >>>= 1;
	    }

	    return digit;
    },

    getPatternPosition : function(typeNumber) {
	    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },

    getMask : function(maskPattern, i, j) {
	    
	    switch (maskPattern) {
		    
	    case QRMaskPattern.PATTERN000 : return (i + j) % 2 == 0;
	    case QRMaskPattern.PATTERN001 : return i % 2 == 0;
	    case QRMaskPattern.PATTERN010 : return j % 3 == 0;
	    case QRMaskPattern.PATTERN011 : return (i + j) % 3 == 0;
	    case QRMaskPattern.PATTERN100 : return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0;
	    case QRMaskPattern.PATTERN101 : return (i * j) % 2 + (i * j) % 3 == 0;
	    case QRMaskPattern.PATTERN110 : return ( (i * j) % 2 + (i * j) % 3) % 2 == 0;
	    case QRMaskPattern.PATTERN111 : return ( (i * j) % 3 + (i + j) % 2) % 2 == 0;

	    default :
		    throw new Error("bad maskPattern:" + maskPattern);
	    }
    },

    getErrorCorrectPolynomial : function(errorCorrectLength) {

	    var a = new Polynomial([1], 0);

	    for (var i = 0; i < errorCorrectLength; i++) {
		    a = a.multiply(new Polynomial([1, math.gexp(i)], 0) );
	    }

	    return a;
    },

    getLengthInBits : function(mode, type) {

	    if (1 <= type && type < 10) {

		    // 1 - 9

		    switch(mode) {
		    case Mode.MODE_NUMBER 	: return 10;
		    case Mode.MODE_ALPHA_NUM 	: return 9;
		    case Mode.MODE_8BIT_BYTE	: return 8;
		    case Mode.MODE_KANJI  	: return 8;
		    default :
			    throw new Error("mode:" + mode);
		    }

	    } else if (type < 27) {

		    // 10 - 26

		    switch(mode) {
		    case Mode.MODE_NUMBER 	: return 12;
		    case Mode.MODE_ALPHA_NUM 	: return 11;
		    case Mode.MODE_8BIT_BYTE	: return 16;
		    case Mode.MODE_KANJI  	: return 10;
		    default :
			    throw new Error("mode:" + mode);
		    }

	    } else if (type < 41) {

		    // 27 - 40

		    switch(mode) {
		    case Mode.MODE_NUMBER 	: return 14;
		    case Mode.MODE_ALPHA_NUM	: return 13;
		    case Mode.MODE_8BIT_BYTE	: return 16;
		    case Mode.MODE_KANJI  	: return 12;
		    default :
			    throw new Error("mode:" + mode);
		    }

	    } else {
		    throw new Error("type:" + type);
	    }
    },

    getLostPoint : function(qrCode) {
	    
	    var moduleCount = qrCode.getModuleCount();
	    
	    var lostPoint = 0;
	    
	    // LEVEL1
	    
	    for (var row = 0; row < moduleCount; row++) {

		    for (var col = 0; col < moduleCount; col++) {

			    var sameCount = 0;
			    var dark = qrCode.isDark(row, col);

				for (var r = -1; r <= 1; r++) {

				    if (row + r < 0 || moduleCount <= row + r) {
					    continue;
				    }

				    for (var c = -1; c <= 1; c++) {

					    if (col + c < 0 || moduleCount <= col + c) {
						    continue;
					    }

					    if (r == 0 && c == 0) {
						    continue;
					    }

					    if (dark == qrCode.isDark(row + r, col + c) ) {
						    sameCount++;
					    }
				    }
			    }

			    if (sameCount > 5) {
				    lostPoint += (3 + sameCount - 5);
			    }
		    }
	    }

	    // LEVEL2

	    for (var row = 0; row < moduleCount - 1; row++) {
		    for (var col = 0; col < moduleCount - 1; col++) {
			    var count = 0;
			    if (qrCode.isDark(row,     col    ) ) count++;
			    if (qrCode.isDark(row + 1, col    ) ) count++;
			    if (qrCode.isDark(row,     col + 1) ) count++;
			    if (qrCode.isDark(row + 1, col + 1) ) count++;
			    if (count == 0 || count == 4) {
				    lostPoint += 3;
			    }
		    }
	    }

	    // LEVEL3

	    for (var row = 0; row < moduleCount; row++) {
		    for (var col = 0; col < moduleCount - 6; col++) {
			    if (qrCode.isDark(row, col)
					    && !qrCode.isDark(row, col + 1)
					    &&  qrCode.isDark(row, col + 2)
					    &&  qrCode.isDark(row, col + 3)
					    &&  qrCode.isDark(row, col + 4)
					    && !qrCode.isDark(row, col + 5)
					    &&  qrCode.isDark(row, col + 6) ) {
				    lostPoint += 40;
			    }
		    }
	    }

	    for (var col = 0; col < moduleCount; col++) {
		    for (var row = 0; row < moduleCount - 6; row++) {
			    if (qrCode.isDark(row, col)
					    && !qrCode.isDark(row + 1, col)
					    &&  qrCode.isDark(row + 2, col)
					    &&  qrCode.isDark(row + 3, col)
					    &&  qrCode.isDark(row + 4, col)
					    && !qrCode.isDark(row + 5, col)
					    &&  qrCode.isDark(row + 6, col) ) {
				    lostPoint += 40;
			    }
		    }
	    }

	    // LEVEL4
	    
	    var darkCount = 0;

	    for (var col = 0; col < moduleCount; col++) {
		    for (var row = 0; row < moduleCount; row++) {
			    if (qrCode.isDark(row, col) ) {
				    darkCount++;
			    }
		    }
	    }
	    
	    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
	    lostPoint += ratio * 10;

	    return lostPoint;		
    }
};

module.exports = QRUtil;


/***/ }),

/***/ "./node_modules/qrcode.react/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/qrcode.react/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"); // qr.js doesn't handle error level of zero (M) so we need to do it right,
// thus the deep require.


var QRCodeImpl = __webpack_require__(/*! qr.js/lib/QRCode */ "./node_modules/qr.js/lib/QRCode.js");

var ErrorCorrectLevel = __webpack_require__(/*! qr.js/lib/ErrorCorrectLevel */ "./node_modules/qr.js/lib/ErrorCorrectLevel.js"); // TODO: pull this off of the QRCode class type so it matches.


// Convert from UTF-16, forcing the use of byte-mode encoding in our QR Code.
// This allows us to encode Hanji, Kanji, emoji, etc. Ideally we'd do more
// detection and not resort to byte-mode if possible, but we're trading off
// a smaller library for a smaller amount of data we can potentially encode.
// Based on http://jonisalonen.com/2012/from-utf-16-to-utf-8-in-javascript/
function convertStr(str) {
  var out = '';

  for (var i = 0; i < str.length; i++) {
    var charcode = str.charCodeAt(i);

    if (charcode < 0x0080) {
      out += String.fromCharCode(charcode);
    } else if (charcode < 0x0800) {
      out += String.fromCharCode(0xc0 | charcode >> 6);
      out += String.fromCharCode(0x80 | charcode & 0x3f);
    } else if (charcode < 0xd800 || charcode >= 0xe000) {
      out += String.fromCharCode(0xe0 | charcode >> 12);
      out += String.fromCharCode(0x80 | charcode >> 6 & 0x3f);
      out += String.fromCharCode(0x80 | charcode & 0x3f);
    } else {
      // This is a surrogate pair, so we'll reconsitute the pieces and work
      // from that
      i++;
      charcode = 0x10000 + ((charcode & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
      out += String.fromCharCode(0xf0 | charcode >> 18);
      out += String.fromCharCode(0x80 | charcode >> 12 & 0x3f);
      out += String.fromCharCode(0x80 | charcode >> 6 & 0x3f);
      out += String.fromCharCode(0x80 | charcode & 0x3f);
    }
  }

  return out;
}

var DEFAULT_PROPS = {
  size: 128,
  level: 'L',
  bgColor: '#FFFFFF',
  fgColor: '#000000',
  includeMargin: false
};
var PROP_TYPES =  true ? {
  value: PropTypes.string.isRequired,
  size: PropTypes.number,
  level: PropTypes.oneOf(['L', 'M', 'Q', 'H']),
  bgColor: PropTypes.string,
  fgColor: PropTypes.string,
  includeMargin: PropTypes.bool,
  imageSettings: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    excavate: PropTypes.bool,
    x: PropTypes.number,
    y: PropTypes.number
  })
} : undefined;
var MARGIN_SIZE = 4; // This is *very* rough estimate of max amount of QRCode allowed to be covered.
// It is "wrong" in a lot of ways (area is a terrible way to estimate, it
// really should be number of modules covered), but if for some reason we don't
// get an explicit height or width, I'd rather default to something than throw.

var DEFAULT_IMG_SCALE = 0.1;

function generatePath(modules) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var ops = [];
  modules.forEach(function (row, y) {
    var start = null;
    row.forEach(function (cell, x) {
      if (!cell && start !== null) {
        // M0 0h7v1H0z injects the space with the move and drops the comma,
        // saving a char per operation
        ops.push("M".concat(start + margin, " ").concat(y + margin, "h").concat(x - start, "v1H").concat(start + margin, "z"));
        start = null;
        return;
      } // end of row, clean up or skip


      if (x === row.length - 1) {
        if (!cell) {
          // We would have closed the op above already so this can only mean
          // 2+ light modules in a row.
          return;
        }

        if (start === null) {
          // Just a single dark module.
          ops.push("M".concat(x + margin, ",").concat(y + margin, " h1v1H").concat(x + margin, "z"));
        } else {
          // Otherwise finish the current line.
          ops.push("M".concat(start + margin, ",").concat(y + margin, " h").concat(x + 1 - start, "v1H").concat(start + margin, "z"));
        }

        return;
      }

      if (cell && start === null) {
        start = x;
      }
    });
  });
  return ops.join('');
} // We could just do this in generatePath, except that we want to support
// non-Path2D canvas, so we need to keep it an explicit step.


function excavateModules(modules, excavation) {
  return modules.slice().map(function (row, y) {
    if (y < excavation.y || y >= excavation.y + excavation.h) {
      return row;
    }

    return row.map(function (cell, x) {
      if (x < excavation.x || x >= excavation.x + excavation.w) {
        return cell;
      }

      return false;
    });
  });
}

function getImageSettings(props, cells) {
  var imageSettings = props.imageSettings,
      size = props.size,
      includeMargin = props.includeMargin;

  if (imageSettings == null) {
    return null;
  }

  var margin = includeMargin ? MARGIN_SIZE : 0;
  var numCells = cells.length + margin * 2;
  var defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
  var scale = numCells / size;
  var w = (imageSettings.width || defaultSize) * scale;
  var h = (imageSettings.height || defaultSize) * scale;
  var x = imageSettings.x == null ? cells.length / 2 - w / 2 : imageSettings.x * scale;
  var y = imageSettings.y == null ? cells.length / 2 - h / 2 : imageSettings.y * scale;
  var excavation = null;

  if (imageSettings.excavate) {
    var floorX = Math.floor(x);
    var floorY = Math.floor(y);
    var ceilW = Math.ceil(w + x - floorX);
    var ceilH = Math.ceil(h + y - floorY);
    excavation = {
      x: floorX,
      y: floorY,
      w: ceilW,
      h: ceilH
    };
  }

  return {
    x: x,
    y: y,
    h: h,
    w: w,
    excavation: excavation
  };
} // For canvas we're going to switch our drawing mode based on whether or not
// the environment supports Path2D. We only need the constructor to be
// supported, but Edge doesn't actually support the path (string) type
// argument. Luckily it also doesn't support the addPath() method. We can
// treat that as the same thing.


var SUPPORTS_PATH2D = function () {
  try {
    new Path2D().addPath(new Path2D());
  } catch (e) {
    return false;
  }

  return true;
}();

var QRCodeCanvas =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(QRCodeCanvas, _React$PureComponent);

  function QRCodeCanvas() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, QRCodeCanvas);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(QRCodeCanvas)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_canvas", void 0);

    _defineProperty(_assertThisInitialized(_this), "_image", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      imgLoaded: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleImageLoad", function () {
      _this.setState({
        imgLoaded: true
      });
    });

    return _this;
  }

  _createClass(QRCodeCanvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._image && this._image.complete) {
        this.handleImageLoad();
      }

      this.update();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props$imageSett, _nextProps$imageSetti;

      var currentSrc = (_this$props$imageSett = this.props.imageSettings) === null || _this$props$imageSett === void 0 ? void 0 : _this$props$imageSett.src;
      var nextSrc = (_nextProps$imageSetti = nextProps.imageSettings) === null || _nextProps$imageSetti === void 0 ? void 0 : _nextProps$imageSetti.src;

      if (currentSrc !== nextSrc) {
        this.setState({
          imgLoaded: false
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var _this$props = this.props,
          value = _this$props.value,
          size = _this$props.size,
          level = _this$props.level,
          bgColor = _this$props.bgColor,
          fgColor = _this$props.fgColor,
          includeMargin = _this$props.includeMargin,
          imageSettings = _this$props.imageSettings; // We'll use type===-1 to force QRCode to automatically pick the best type

      var qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
      qrcode.addData(convertStr(value));
      qrcode.make();

      if (this._canvas != null) {
        var canvas = this._canvas;
        var ctx = canvas.getContext('2d');

        if (!ctx) {
          return;
        }

        var cells = qrcode.modules;

        if (cells === null) {
          return;
        }

        var margin = includeMargin ? MARGIN_SIZE : 0;
        var numCells = cells.length + margin * 2;
        var calculatedImageSettings = getImageSettings(this.props, cells);

        if (imageSettings != null && calculatedImageSettings != null) {
          if (calculatedImageSettings.excavation != null) {
            cells = excavateModules(cells, calculatedImageSettings.excavation);
          }
        } // We're going to scale this so that the number of drawable units
        // matches the number of cells. This avoids rounding issues, but does
        // result in some potentially unwanted single pixel issues between
        // blocks, only in environments that don't support Path2D.


        var pixelRatio = window.devicePixelRatio || 1;
        canvas.height = canvas.width = size * pixelRatio;
        var scale = size / numCells * pixelRatio;
        ctx.scale(scale, scale); // Draw solid background, only paint dark modules.

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, numCells, numCells);
        ctx.fillStyle = fgColor;

        if (SUPPORTS_PATH2D) {
          // $FlowFixMe: Path2D c'tor doesn't support args yet.
          ctx.fill(new Path2D(generatePath(cells, margin)));
        } else {
          cells.forEach(function (row, rdx) {
            row.forEach(function (cell, cdx) {
              if (cell) {
                ctx.fillRect(cdx + margin, rdx + margin, 1, 1);
              }
            });
          });
        }

        if (this.state.imgLoaded && this._image && calculatedImageSettings != null) {
          ctx.drawImage(this._image, calculatedImageSettings.x + margin, calculatedImageSettings.y + margin, calculatedImageSettings.w, calculatedImageSettings.h);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          value = _this$props2.value,
          size = _this$props2.size,
          level = _this$props2.level,
          bgColor = _this$props2.bgColor,
          fgColor = _this$props2.fgColor,
          style = _this$props2.style,
          includeMargin = _this$props2.includeMargin,
          imageSettings = _this$props2.imageSettings,
          otherProps = _objectWithoutProperties(_this$props2, ["value", "size", "level", "bgColor", "fgColor", "style", "includeMargin", "imageSettings"]);

      var canvasStyle = _objectSpread({
        height: size,
        width: size
      }, style);

      var img = null;
      var imgSrc = imageSettings && imageSettings.src;

      if (imageSettings != null && imgSrc != null) {
        img = React.createElement("img", {
          src: imgSrc,
          style: {
            display: 'none'
          },
          onLoad: this.handleImageLoad,
          ref: function ref(_ref) {
            return _this2._image = _ref;
          }
        });
      }

      return React.createElement(React.Fragment, null, React.createElement("canvas", _extends({
        style: canvasStyle,
        height: size,
        width: size,
        ref: function ref(_ref2) {
          return _this2._canvas = _ref2;
        }
      }, otherProps)), img);
    }
  }]);

  return QRCodeCanvas;
}(React.PureComponent);

_defineProperty(QRCodeCanvas, "defaultProps", DEFAULT_PROPS);

if (true) {
  QRCodeCanvas.propTypes = PROP_TYPES;
}

var QRCodeSVG =
/*#__PURE__*/
function (_React$PureComponent2) {
  _inherits(QRCodeSVG, _React$PureComponent2);

  function QRCodeSVG() {
    _classCallCheck(this, QRCodeSVG);

    return _possibleConstructorReturn(this, _getPrototypeOf(QRCodeSVG).apply(this, arguments));
  }

  _createClass(QRCodeSVG, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          size = _this$props3.size,
          level = _this$props3.level,
          bgColor = _this$props3.bgColor,
          fgColor = _this$props3.fgColor,
          includeMargin = _this$props3.includeMargin,
          imageSettings = _this$props3.imageSettings,
          otherProps = _objectWithoutProperties(_this$props3, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "imageSettings"]); // We'll use type===-1 to force QRCode to automatically pick the best type


      var qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
      qrcode.addData(convertStr(value));
      qrcode.make();
      var cells = qrcode.modules;

      if (cells === null) {
        return null;
      }

      var margin = includeMargin ? MARGIN_SIZE : 0;
      var numCells = cells.length + margin * 2;
      var calculatedImageSettings = getImageSettings(this.props, cells);
      var image = null;

      if (imageSettings != null && calculatedImageSettings != null) {
        if (calculatedImageSettings.excavation != null) {
          cells = excavateModules(cells, calculatedImageSettings.excavation);
        }

        image = React.createElement("image", {
          xlinkHref: imageSettings.src,
          height: calculatedImageSettings.h,
          width: calculatedImageSettings.w,
          x: calculatedImageSettings.x + margin,
          y: calculatedImageSettings.y + margin,
          preserveAspectRatio: "none"
        });
      } // Drawing strategy: instead of a rect per module, we're going to create a
      // single path for the dark modules and layer that on top of a light rect,
      // for a total of 2 DOM nodes. We pay a bit more in string concat but that's
      // way faster than DOM ops.
      // For level 1, 441 nodes -> 2
      // For level 40, 31329 -> 2


      var fgPath = generatePath(cells, margin);
      return React.createElement("svg", _extends({
        shapeRendering: "crispEdges",
        height: size,
        width: size,
        viewBox: "0 0 ".concat(numCells, " ").concat(numCells)
      }, otherProps), React.createElement("path", {
        fill: bgColor,
        d: "M0,0 h".concat(numCells, "v").concat(numCells, "H0z")
      }), React.createElement("path", {
        fill: fgColor,
        d: fgPath
      }), image);
    }
  }]);

  return QRCodeSVG;
}(React.PureComponent);

_defineProperty(QRCodeSVG, "defaultProps", DEFAULT_PROPS);

if (true) {
  QRCodeSVG.propTypes = PROP_TYPES;
}

var QRCode = function QRCode(props) {
  var renderAs = props.renderAs,
      otherProps = _objectWithoutProperties(props, ["renderAs"]);

  var Component = renderAs === 'svg' ? QRCodeSVG : QRCodeCanvas;
  return React.createElement(Component, otherProps);
};

QRCode.defaultProps = _objectSpread({
  renderAs: 'canvas'
}, DEFAULT_PROPS);
module.exports = QRCode;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xci5qcy9saWIvOEJpdEJ5dGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xci5qcy9saWIvQml0QnVmZmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXIuanMvbGliL0Vycm9yQ29ycmVjdExldmVsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXIuanMvbGliL1BvbHlub21pYWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xci5qcy9saWIvUVJDb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXIuanMvbGliL1JTQmxvY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xci5qcy9saWIvbWF0aC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3FyLmpzL2xpYi9tb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXIuanMvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xcmNvZGUucmVhY3QvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvZGUiLCJpbmZvIiwidGV4dCIsImZpcnN0TmFtZSIsInRpbWVTdGFtcERhdGUiLCJ0aW1lU3RhbXBUaW1lIiwibGFzdE5hbWUiLCJkb2IiLCJlbWFpbCIsIm51bWJlciIsImhhbmRsZURvd25sb2FkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBuZ1VybCIsInRvRGF0YVVSTCIsInJlcGxhY2UiLCJkb3dubG9hZExpbmsiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsImRhdGVPYmoiLCJEYXRlIiwidGltZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJzdHlsZXMiLCJjb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxPQUF3QjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUN0QyxNQUFJQyxJQUFJLG1CQUFZRCxJQUFJLENBQUNFLFNBQWpCLDBEQUNpQ0MsYUFBYSxFQUQ5QyxzREFDNEZDLGFBQWEsRUFEekcscUVBRUFKLElBQUksQ0FBQ0UsU0FGTCxjQUVrQkYsSUFBSSxDQUFDSyxRQUZ2QixnQ0FHU0wsSUFBSSxDQUFDTSxHQUhkLHdCQUlDTixJQUFJLENBQUNPLEtBSk4seUJBS0VQLElBQUksQ0FBQ1EsTUFMUCxtT0FBUjs7QUFRQSxXQUFTQyxjQUFULEdBQTBCO0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWY7QUFDQSxRQUFNQyxNQUFNLEdBQUdILE1BQU0sQ0FDbkJJLFNBRGEsQ0FDSCxXQURHLEVBRWJDLE9BRmEsQ0FFTCxXQUZLLEVBRVEsb0JBRlIsQ0FBZjtBQUdBLFFBQUlDLFlBQVksR0FBR0wsUUFBUSxDQUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQyw0RkFBNEYsU0FBTTtBQUM3STtBQUNBOztBQUVBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixLQUFxQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEdBQUcsU0FBRTtBQUNOLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEOztBQUVBLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtKQUFrSjs7O0FBR2xKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEOztBQUVBLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsd0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2VuZXJhdG9yLmE4ZGMwZGNhZGNkMGUyOGU4OTllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0dlbmVyYXRvci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGUucmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlKHsgaW5mbyB9KSB7XHJcblx0bGV0IHRleHQgPSBgSGVsbG8gJHtpbmZvLmZpcnN0TmFtZX0sIFxyXG5cdFRoZSBkYXRlIHlvdSBnZW5lcmF0ZWQgdGhlIFFSIENvZGUgd2FzICR7dGltZVN0YW1wRGF0ZSgpfSwgdGhlIHRpbWUgeW91IGdlbmVyYXRlZCB0aGUgUVIgQ29kZSB3YXMgJHt0aW1lU3RhbXBUaW1lKCl9LiBUaGUgaW5mb3JtYXRpb24geW91IHN1Ym1pdHRlZCBpcyBhcyBmb2xsb3dzOlxyXG5cdE5hbWU6ICR7aW5mby5maXJzdE5hbWV9ICR7aW5mby5sYXN0TmFtZX1cclxuXHREYXRlIG9mIEJpcnRoOiAke2luZm8uZG9ifVxyXG5cdEVtYWlsOiAke2luZm8uZW1haWx9XHJcblx0TnVtYmVyOiAke2luZm8ubnVtYmVyfVxyXG5UaGFuayB5b3UgZm9yIHVzaW5nIG15IFFSIENvZGUgR2VuZXJhdG9yLiBBbGwgbXkgaW5mb3JtYXRpb24gYW5kIHByb2plY3RzIGNhbiBiZSBhY2Nlc3NlZCB2aWEgdGhlIGxpbmtzIGxvY2F0ZWQgd2l0aGluIHRoZSBoZWFkZXIgb2YgdGhlIGFwcGxpY2F0aW9uLiBJbSB2ZXJ5IGdyZWF0ZnVsIGZvciB0aGUgb3Bwb3J0dW5pdHkgYW5kIGxvb2sgZm9yd2FyZCB0byB5b3VyIHJlc3BvbnNlYFxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVEb3dubG9hZCgpIHtcclxuXHRcdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2RlJylcclxuXHRcdGNvbnN0IHBuZ1VybCA9IGNhbnZhc1xyXG5cdFx0XHQudG9EYXRhVVJMKCdpbWFnZS9wbmcnKVxyXG5cdFx0XHQucmVwbGFjZSgnaW1hZ2UvcG5nJywgJ2ltYWdlL29jdGV0LXN0cmVhbScpXHJcblx0XHRsZXQgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcblx0XHRkb3dubG9hZExpbmsuaHJlZiA9IHBuZ1VybFxyXG5cdFx0ZG93bmxvYWRMaW5rLmRvd25sb2FkID0gJ2NvZGUucG5nJ1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspXHJcblx0XHRkb3dubG9hZExpbmsuY2xpY2soKVxyXG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb3dubG9hZExpbmspXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB0aW1lU3RhbXBEYXRlKCkge1xyXG5cdFx0bGV0IGRhdGVPYmogPSBuZXcgRGF0ZShpbmZvLnRpbWUpXHJcblxyXG5cdFx0bGV0IGRheSA9IGRhdGVPYmouZ2V0RGF0ZSgpXHJcblx0XHRsZXQgbW9udGggPSBkYXRlT2JqLmdldE1vbnRoKCkgKyAxXHJcblx0XHRsZXQgeWVhciA9IGRhdGVPYmouZ2V0RnVsbFllYXIoKVxyXG5cclxuXHRcdHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB0aW1lU3RhbXBUaW1lKCkge1xyXG5cdFx0bGV0IGRhdGVPYmogPSBuZXcgRGF0ZShpbmZvLnRpbWUpXHJcblxyXG5cdFx0bGV0IGhvdXJzID0gZGF0ZU9iai5nZXRIb3VycygpXHJcblx0XHRsZXQgbWludXRlcyA9IGRhdGVPYmouZ2V0TWludXRlcygpXHJcblx0XHRsZXQgc2Vjb25kcyA9IGRhdGVPYmouZ2V0U2Vjb25kcygpXHJcblxyXG5cdFx0cmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfT5cclxuXHRcdFx0PFFSQ29kZSB2YWx1ZT17dGV4dH0gaWQ9XCJjb2RlXCIgc2l6ZT17MjgwfSAvPlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmRvd25sb2FkfSBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH0+XHJcblx0XHRcdFx0RG93bmxvYWRcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsInZhciBtb2RlID0gcmVxdWlyZSgnLi9tb2RlJyk7XG5cbmZ1bmN0aW9uIFFSOGJpdEJ5dGUoZGF0YSkge1xuXHR0aGlzLm1vZGUgPSBtb2RlLk1PREVfOEJJVF9CWVRFO1xuXHR0aGlzLmRhdGEgPSBkYXRhO1xufVxuXG5RUjhiaXRCeXRlLnByb3RvdHlwZSA9IHtcblxuXHRnZXRMZW5ndGggOiBmdW5jdGlvbihidWZmZXIpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcblx0fSxcblx0XG5cdHdyaXRlIDogZnVuY3Rpb24oYnVmZmVyKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdC8vIG5vdCBKSVMgLi4uXG5cdFx0XHRidWZmZXIucHV0KHRoaXMuZGF0YS5jaGFyQ29kZUF0KGkpLCA4KTtcblx0XHR9XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUVI4Yml0Qnl0ZTtcblxuIiwiZnVuY3Rpb24gUVJCaXRCdWZmZXIoKSB7XG5cdHRoaXMuYnVmZmVyID0gbmV3IEFycmF5KCk7XG5cdHRoaXMubGVuZ3RoID0gMDtcbn1cblxuUVJCaXRCdWZmZXIucHJvdG90eXBlID0ge1xuXG5cdGdldCA6IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0dmFyIGJ1ZkluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIDgpO1xuXHRcdHJldHVybiAoICh0aGlzLmJ1ZmZlcltidWZJbmRleF0gPj4+ICg3IC0gaW5kZXggJSA4KSApICYgMSkgPT0gMTtcblx0fSxcblx0XG5cdHB1dCA6IGZ1bmN0aW9uKG51bSwgbGVuZ3RoKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy5wdXRCaXQoICggKG51bSA+Pj4gKGxlbmd0aCAtIGkgLSAxKSApICYgMSkgPT0gMSk7XG5cdFx0fVxuXHR9LFxuXHRcblx0Z2V0TGVuZ3RoSW5CaXRzIDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubGVuZ3RoO1xuXHR9LFxuXHRcblx0cHV0Qml0IDogZnVuY3Rpb24oYml0KSB7XG5cdFxuXHRcdHZhciBidWZJbmRleCA9IE1hdGguZmxvb3IodGhpcy5sZW5ndGggLyA4KTtcblx0XHRpZiAodGhpcy5idWZmZXIubGVuZ3RoIDw9IGJ1ZkluZGV4KSB7XG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKDApO1xuXHRcdH1cblx0XG5cdFx0aWYgKGJpdCkge1xuXHRcdFx0dGhpcy5idWZmZXJbYnVmSW5kZXhdIHw9ICgweDgwID4+PiAodGhpcy5sZW5ndGggJSA4KSApO1xuXHRcdH1cblx0XG5cdFx0dGhpcy5sZW5ndGgrKztcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRUkJpdEJ1ZmZlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRMIDogMSxcblx0TSA6IDAsXG5cdFEgOiAzLFxuXHRIIDogMlxufTtcblxuIiwidmFyIG1hdGggPSByZXF1aXJlKCcuL21hdGgnKTtcblxuZnVuY3Rpb24gUVJQb2x5bm9taWFsKG51bSwgc2hpZnQpIHtcblxuXHRpZiAobnVtLmxlbmd0aCA9PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IobnVtLmxlbmd0aCArIFwiL1wiICsgc2hpZnQpO1xuXHR9XG5cblx0dmFyIG9mZnNldCA9IDA7XG5cblx0d2hpbGUgKG9mZnNldCA8IG51bS5sZW5ndGggJiYgbnVtW29mZnNldF0gPT0gMCkge1xuXHRcdG9mZnNldCsrO1xuXHR9XG5cblx0dGhpcy5udW0gPSBuZXcgQXJyYXkobnVtLmxlbmd0aCAtIG9mZnNldCArIHNoaWZ0KTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBudW0ubGVuZ3RoIC0gb2Zmc2V0OyBpKyspIHtcblx0XHR0aGlzLm51bVtpXSA9IG51bVtpICsgb2Zmc2V0XTtcblx0fVxufVxuXG5RUlBvbHlub21pYWwucHJvdG90eXBlID0ge1xuXG5cdGdldCA6IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0cmV0dXJuIHRoaXMubnVtW2luZGV4XTtcblx0fSxcblx0XG5cdGdldExlbmd0aCA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm51bS5sZW5ndGg7XG5cdH0sXG5cdFxuXHRtdWx0aXBseSA6IGZ1bmN0aW9uKGUpIHtcblx0XG5cdFx0dmFyIG51bSA9IG5ldyBBcnJheSh0aGlzLmdldExlbmd0aCgpICsgZS5nZXRMZW5ndGgoKSAtIDEpO1xuXHRcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2V0TGVuZ3RoKCk7IGkrKykge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBlLmdldExlbmd0aCgpOyBqKyspIHtcblx0XHRcdFx0bnVtW2kgKyBqXSBePSBtYXRoLmdleHAobWF0aC5nbG9nKHRoaXMuZ2V0KGkpICkgKyBtYXRoLmdsb2coZS5nZXQoaikgKSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XG5cdFx0cmV0dXJuIG5ldyBRUlBvbHlub21pYWwobnVtLCAwKTtcblx0fSxcblx0XG5cdG1vZCA6IGZ1bmN0aW9uKGUpIHtcblx0XG5cdFx0aWYgKHRoaXMuZ2V0TGVuZ3RoKCkgLSBlLmdldExlbmd0aCgpIDwgMCkge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcblx0XHR2YXIgcmF0aW8gPSBtYXRoLmdsb2codGhpcy5nZXQoMCkgKSAtIG1hdGguZ2xvZyhlLmdldCgwKSApO1xuXHRcblx0XHR2YXIgbnVtID0gbmV3IEFycmF5KHRoaXMuZ2V0TGVuZ3RoKCkgKTtcblx0XHRcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2V0TGVuZ3RoKCk7IGkrKykge1xuXHRcdFx0bnVtW2ldID0gdGhpcy5nZXQoaSk7XG5cdFx0fVxuXHRcdFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZS5nZXRMZW5ndGgoKTsgaSsrKSB7XG5cdFx0XHRudW1baV0gXj0gbWF0aC5nZXhwKG1hdGguZ2xvZyhlLmdldChpKSApICsgcmF0aW8pO1xuXHRcdH1cblx0XG5cdFx0Ly8gcmVjdXJzaXZlIGNhbGxcblx0XHRyZXR1cm4gbmV3IFFSUG9seW5vbWlhbChudW0sIDApLm1vZChlKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRUlBvbHlub21pYWw7XG4iLCJ2YXIgQml0Qnl0ZSA9IHJlcXVpcmUoJy4vOEJpdEJ5dGUnKTtcbnZhciBSU0Jsb2NrID0gcmVxdWlyZSgnLi9SU0Jsb2NrJyk7XG52YXIgQml0QnVmZmVyID0gcmVxdWlyZSgnLi9CaXRCdWZmZXInKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG52YXIgUG9seW5vbWlhbCA9IHJlcXVpcmUoJy4vUG9seW5vbWlhbCcpO1xuXG5mdW5jdGlvbiBRUkNvZGUodHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcblx0dGhpcy50eXBlTnVtYmVyID0gdHlwZU51bWJlcjtcblx0dGhpcy5lcnJvckNvcnJlY3RMZXZlbCA9IGVycm9yQ29ycmVjdExldmVsO1xuXHR0aGlzLm1vZHVsZXMgPSBudWxsO1xuXHR0aGlzLm1vZHVsZUNvdW50ID0gMDtcblx0dGhpcy5kYXRhQ2FjaGUgPSBudWxsO1xuXHR0aGlzLmRhdGFMaXN0ID0gW107XG59XG5cbi8vIGZvciBjbGllbnQgc2lkZSBtaW5pZmljYXRpb25cbnZhciBwcm90byA9IFFSQ29kZS5wcm90b3R5cGU7XG5cbnByb3RvLmFkZERhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG5cdHZhciBuZXdEYXRhID0gbmV3IEJpdEJ5dGUoZGF0YSk7XG5cdHRoaXMuZGF0YUxpc3QucHVzaChuZXdEYXRhKTtcblx0dGhpcy5kYXRhQ2FjaGUgPSBudWxsO1xufTtcblxucHJvdG8uaXNEYXJrID0gZnVuY3Rpb24ocm93LCBjb2wpIHtcblx0aWYgKHJvdyA8IDAgfHwgdGhpcy5tb2R1bGVDb3VudCA8PSByb3cgfHwgY29sIDwgMCB8fCB0aGlzLm1vZHVsZUNvdW50IDw9IGNvbCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihyb3cgKyBcIixcIiArIGNvbCk7XG5cdH1cblx0cmV0dXJuIHRoaXMubW9kdWxlc1tyb3ddW2NvbF07XG59O1xuXG5wcm90by5nZXRNb2R1bGVDb3VudCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5tb2R1bGVDb3VudDtcbn07XG5cbnByb3RvLm1ha2UgPSBmdW5jdGlvbigpIHtcblx0Ly8gQ2FsY3VsYXRlIGF1dG9tYXRpY2FsbHkgdHlwZU51bWJlciBpZiBwcm92aWRlZCBpcyA8IDFcblx0aWYgKHRoaXMudHlwZU51bWJlciA8IDEgKXtcblx0XHR2YXIgdHlwZU51bWJlciA9IDE7XG5cdFx0Zm9yICh0eXBlTnVtYmVyID0gMTsgdHlwZU51bWJlciA8IDQwOyB0eXBlTnVtYmVyKyspIHtcblx0XHRcdHZhciByc0Jsb2NrcyA9IFJTQmxvY2suZ2V0UlNCbG9ja3ModHlwZU51bWJlciwgdGhpcy5lcnJvckNvcnJlY3RMZXZlbCk7XG5cblx0XHRcdHZhciBidWZmZXIgPSBuZXcgQml0QnVmZmVyKCk7XG5cdFx0XHR2YXIgdG90YWxEYXRhQ291bnQgPSAwO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByc0Jsb2Nrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0b3RhbERhdGFDb3VudCArPSByc0Jsb2Nrc1tpXS5kYXRhQ291bnQ7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhTGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgZGF0YSA9IHRoaXMuZGF0YUxpc3RbaV07XG5cdFx0XHRcdGJ1ZmZlci5wdXQoZGF0YS5tb2RlLCA0KTtcblx0XHRcdFx0YnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCB1dGlsLmdldExlbmd0aEluQml0cyhkYXRhLm1vZGUsIHR5cGVOdW1iZXIpICk7XG5cdFx0XHRcdGRhdGEud3JpdGUoYnVmZmVyKTtcblx0XHRcdH1cblx0XHRcdGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPD0gdG90YWxEYXRhQ291bnQgKiA4KVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0dGhpcy50eXBlTnVtYmVyID0gdHlwZU51bWJlcjtcblx0fVxuXHR0aGlzLm1ha2VJbXBsKGZhbHNlLCB0aGlzLmdldEJlc3RNYXNrUGF0dGVybigpICk7XG59O1xuXG5wcm90by5tYWtlSW1wbCA9IGZ1bmN0aW9uKHRlc3QsIG1hc2tQYXR0ZXJuKSB7XG5cdFxuXHR0aGlzLm1vZHVsZUNvdW50ID0gdGhpcy50eXBlTnVtYmVyICogNCArIDE3O1xuXHR0aGlzLm1vZHVsZXMgPSBuZXcgQXJyYXkodGhpcy5tb2R1bGVDb3VudCk7XG5cdFxuXHRmb3IgKHZhciByb3cgPSAwOyByb3cgPCB0aGlzLm1vZHVsZUNvdW50OyByb3crKykge1xuXHRcdFxuXHRcdHRoaXMubW9kdWxlc1tyb3ddID0gbmV3IEFycmF5KHRoaXMubW9kdWxlQ291bnQpO1xuXHRcdFxuXHRcdGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHRoaXMubW9kdWxlQ291bnQ7IGNvbCsrKSB7XG5cdFx0XHR0aGlzLm1vZHVsZXNbcm93XVtjb2xdID0gbnVsbDsvLyhjb2wgKyByb3cpICUgMztcblx0XHR9XG5cdH1cblxuXHR0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4oMCwgMCk7XG5cdHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybih0aGlzLm1vZHVsZUNvdW50IC0gNywgMCk7XG5cdHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLCB0aGlzLm1vZHVsZUNvdW50IC0gNyk7XG5cdHRoaXMuc2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm4oKTtcblx0dGhpcy5zZXR1cFRpbWluZ1BhdHRlcm4oKTtcblx0dGhpcy5zZXR1cFR5cGVJbmZvKHRlc3QsIG1hc2tQYXR0ZXJuKTtcblx0XG5cdGlmICh0aGlzLnR5cGVOdW1iZXIgPj0gNykge1xuXHRcdHRoaXMuc2V0dXBUeXBlTnVtYmVyKHRlc3QpO1xuXHR9XG5cblx0aWYgKHRoaXMuZGF0YUNhY2hlID09IG51bGwpIHtcblx0XHR0aGlzLmRhdGFDYWNoZSA9IFFSQ29kZS5jcmVhdGVEYXRhKHRoaXMudHlwZU51bWJlciwgdGhpcy5lcnJvckNvcnJlY3RMZXZlbCwgdGhpcy5kYXRhTGlzdCk7XG5cdH1cblxuXHR0aGlzLm1hcERhdGEodGhpcy5kYXRhQ2FjaGUsIG1hc2tQYXR0ZXJuKTtcbn07XG5cbnByb3RvLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4gPSBmdW5jdGlvbihyb3csIGNvbCkgIHtcblx0XG5cdGZvciAodmFyIHIgPSAtMTsgciA8PSA3OyByKyspIHtcblx0XHRcblx0XHRpZiAocm93ICsgciA8PSAtMSB8fCB0aGlzLm1vZHVsZUNvdW50IDw9IHJvdyArIHIpIGNvbnRpbnVlO1xuXHRcdFxuXHRcdGZvciAodmFyIGMgPSAtMTsgYyA8PSA3OyBjKyspIHtcblx0XHRcdFxuXHRcdFx0aWYgKGNvbCArIGMgPD0gLTEgfHwgdGhpcy5tb2R1bGVDb3VudCA8PSBjb2wgKyBjKSBjb250aW51ZTtcblx0XHRcdFxuXHRcdFx0aWYgKCAoMCA8PSByICYmIHIgPD0gNiAmJiAoYyA9PSAwIHx8IGMgPT0gNikgKVxuXHRcdFx0XHRcdHx8ICgwIDw9IGMgJiYgYyA8PSA2ICYmIChyID09IDAgfHwgciA9PSA2KSApXG5cdFx0XHRcdFx0fHwgKDIgPD0gciAmJiByIDw9IDQgJiYgMiA8PSBjICYmIGMgPD0gNCkgKSB7XG5cdFx0XHRcdHRoaXMubW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm1vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XHRcdFxuXHR9XHRcdFxufTtcblxucHJvdG8uZ2V0QmVzdE1hc2tQYXR0ZXJuID0gZnVuY3Rpb24oKSB7XG5cblx0dmFyIG1pbkxvc3RQb2ludCA9IDA7XG5cdHZhciBwYXR0ZXJuID0gMDtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFxuXHRcdHRoaXMubWFrZUltcGwodHJ1ZSwgaSk7XG5cblx0XHR2YXIgbG9zdFBvaW50ID0gdXRpbC5nZXRMb3N0UG9pbnQodGhpcyk7XG5cblx0XHRpZiAoaSA9PSAwIHx8IG1pbkxvc3RQb2ludCA+ICBsb3N0UG9pbnQpIHtcblx0XHRcdG1pbkxvc3RQb2ludCA9IGxvc3RQb2ludDtcblx0XHRcdHBhdHRlcm4gPSBpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwYXR0ZXJuO1xufTtcblxucHJvdG8uY3JlYXRlTW92aWVDbGlwID0gZnVuY3Rpb24odGFyZ2V0X21jLCBpbnN0YW5jZV9uYW1lLCBkZXB0aCkge1xuXG5cdHZhciBxcl9tYyA9IHRhcmdldF9tYy5jcmVhdGVFbXB0eU1vdmllQ2xpcChpbnN0YW5jZV9uYW1lLCBkZXB0aCk7XG5cdHZhciBjcyA9IDE7XG5cblx0dGhpcy5tYWtlKCk7XG5cblx0Zm9yICh2YXIgcm93ID0gMDsgcm93IDwgdGhpcy5tb2R1bGVzLmxlbmd0aDsgcm93KyspIHtcblx0XHRcblx0XHR2YXIgeSA9IHJvdyAqIGNzO1xuXHRcdFxuXHRcdGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHRoaXMubW9kdWxlc1tyb3ddLmxlbmd0aDsgY29sKyspIHtcblxuXHRcdFx0dmFyIHggPSBjb2wgKiBjcztcblx0XHRcdHZhciBkYXJrID0gdGhpcy5tb2R1bGVzW3Jvd11bY29sXTtcblx0XHRcblx0XHRcdGlmIChkYXJrKSB7XG5cdFx0XHRcdHFyX21jLmJlZ2luRmlsbCgwLCAxMDApO1xuXHRcdFx0XHRxcl9tYy5tb3ZlVG8oeCwgeSk7XG5cdFx0XHRcdHFyX21jLmxpbmVUbyh4ICsgY3MsIHkpO1xuXHRcdFx0XHRxcl9tYy5saW5lVG8oeCArIGNzLCB5ICsgY3MpO1xuXHRcdFx0XHRxcl9tYy5saW5lVG8oeCwgeSArIGNzKTtcblx0XHRcdFx0cXJfbWMuZW5kRmlsbCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0cmV0dXJuIHFyX21jO1xufTtcblxucHJvdG8uc2V0dXBUaW1pbmdQYXR0ZXJuID0gZnVuY3Rpb24oKSB7XG5cdFxuXHRmb3IgKHZhciByID0gODsgciA8IHRoaXMubW9kdWxlQ291bnQgLSA4OyByKyspIHtcblx0XHRpZiAodGhpcy5tb2R1bGVzW3JdWzZdICE9IG51bGwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHR0aGlzLm1vZHVsZXNbcl1bNl0gPSAociAlIDIgPT0gMCk7XG5cdH1cblxuXHRmb3IgKHZhciBjID0gODsgYyA8IHRoaXMubW9kdWxlQ291bnQgLSA4OyBjKyspIHtcblx0XHRpZiAodGhpcy5tb2R1bGVzWzZdW2NdICE9IG51bGwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHR0aGlzLm1vZHVsZXNbNl1bY10gPSAoYyAlIDIgPT0gMCk7XG5cdH1cbn07XG5cbnByb3RvLnNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuID0gZnVuY3Rpb24oKSB7XG5cblx0dmFyIHBvcyA9IHV0aWwuZ2V0UGF0dGVyblBvc2l0aW9uKHRoaXMudHlwZU51bWJlcik7XG5cdFxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBvcy5sZW5ndGg7IGkrKykge1xuXHRcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHBvcy5sZW5ndGg7IGorKykge1xuXHRcdFxuXHRcdFx0dmFyIHJvdyA9IHBvc1tpXTtcblx0XHRcdHZhciBjb2wgPSBwb3Nbal07XG5cdFx0XHRcblx0XHRcdGlmICh0aGlzLm1vZHVsZXNbcm93XVtjb2xdICE9IG51bGwpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGZvciAodmFyIHIgPSAtMjsgciA8PSAyOyByKyspIHtcblx0XHRcdFxuXHRcdFx0XHRmb3IgKHZhciBjID0gLTI7IGMgPD0gMjsgYysrKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRcdGlmIChyID09IC0yIHx8IHIgPT0gMiB8fCBjID09IC0yIHx8IGMgPT0gMlxuXHRcdFx0XHRcdFx0XHR8fCAociA9PSAwICYmIGMgPT0gMCkgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbnByb3RvLnNldHVwVHlwZU51bWJlciA9IGZ1bmN0aW9uKHRlc3QpIHtcblxuXHR2YXIgYml0cyA9IHV0aWwuZ2V0QkNIVHlwZU51bWJlcih0aGlzLnR5cGVOdW1iZXIpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMTg7IGkrKykge1xuXHRcdHZhciBtb2QgPSAoIXRlc3QgJiYgKCAoYml0cyA+PiBpKSAmIDEpID09IDEpO1xuXHRcdHRoaXMubW9kdWxlc1tNYXRoLmZsb29yKGkgLyAzKV1baSAlIDMgKyB0aGlzLm1vZHVsZUNvdW50IC0gOCAtIDNdID0gbW9kO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxODsgaSsrKSB7XG5cdFx0dmFyIG1vZCA9ICghdGVzdCAmJiAoIChiaXRzID4+IGkpICYgMSkgPT0gMSk7XG5cdFx0dGhpcy5tb2R1bGVzW2kgJSAzICsgdGhpcy5tb2R1bGVDb3VudCAtIDggLSAzXVtNYXRoLmZsb29yKGkgLyAzKV0gPSBtb2Q7XG5cdH1cbn07XG5cbnByb3RvLnNldHVwVHlwZUluZm8gPSBmdW5jdGlvbih0ZXN0LCBtYXNrUGF0dGVybikge1xuXG5cdHZhciBkYXRhID0gKHRoaXMuZXJyb3JDb3JyZWN0TGV2ZWwgPDwgMykgfCBtYXNrUGF0dGVybjtcblx0dmFyIGJpdHMgPSB1dGlsLmdldEJDSFR5cGVJbmZvKGRhdGEpO1xuXG5cdC8vIHZlcnRpY2FsXHRcdFxuXHRmb3IgKHZhciBpID0gMDsgaSA8IDE1OyBpKyspIHtcblxuXHRcdHZhciBtb2QgPSAoIXRlc3QgJiYgKCAoYml0cyA+PiBpKSAmIDEpID09IDEpO1xuXG5cdFx0aWYgKGkgPCA2KSB7XG5cdFx0XHR0aGlzLm1vZHVsZXNbaV1bOF0gPSBtb2Q7XG5cdFx0fSBlbHNlIGlmIChpIDwgOCkge1xuXHRcdFx0dGhpcy5tb2R1bGVzW2kgKyAxXVs4XSA9IG1vZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQgLSAxNSArIGldWzhdID0gbW9kO1xuXHRcdH1cblx0fVxuXG5cdC8vIGhvcml6b250YWxcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XG5cblx0XHR2YXIgbW9kID0gKCF0ZXN0ICYmICggKGJpdHMgPj4gaSkgJiAxKSA9PSAxKTtcblx0XHRcblx0XHRpZiAoaSA8IDgpIHtcblx0XHRcdHRoaXMubW9kdWxlc1s4XVt0aGlzLm1vZHVsZUNvdW50IC0gaSAtIDFdID0gbW9kO1xuXHRcdH0gZWxzZSBpZiAoaSA8IDkpIHtcblx0XHRcdHRoaXMubW9kdWxlc1s4XVsxNSAtIGkgLSAxICsgMV0gPSBtb2Q7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubW9kdWxlc1s4XVsxNSAtIGkgLSAxXSA9IG1vZDtcblx0XHR9XG5cdH1cblxuXHQvLyBmaXhlZCBtb2R1bGVcblx0dGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQgLSA4XVs4XSA9ICghdGVzdCk7XG59O1xuXG5wcm90by5tYXBEYXRhID0gZnVuY3Rpb24oZGF0YSwgbWFza1BhdHRlcm4pIHtcblx0XG5cdHZhciBpbmMgPSAtMTtcblx0dmFyIHJvdyA9IHRoaXMubW9kdWxlQ291bnQgLSAxO1xuXHR2YXIgYml0SW5kZXggPSA3O1xuXHR2YXIgYnl0ZUluZGV4ID0gMDtcblx0XG5cdGZvciAodmFyIGNvbCA9IHRoaXMubW9kdWxlQ291bnQgLSAxOyBjb2wgPiAwOyBjb2wgLT0gMikge1xuXG5cdFx0aWYgKGNvbCA9PSA2KSBjb2wtLTtcblxuXHRcdHdoaWxlICh0cnVlKSB7XG5cblx0XHRcdGZvciAodmFyIGMgPSAwOyBjIDwgMjsgYysrKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5tb2R1bGVzW3Jvd11bY29sIC0gY10gPT0gbnVsbCkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZhciBkYXJrID0gZmFsc2U7XG5cblx0XHRcdFx0XHRpZiAoYnl0ZUluZGV4IDwgZGF0YS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGRhcmsgPSAoICggKGRhdGFbYnl0ZUluZGV4XSA+Pj4gYml0SW5kZXgpICYgMSkgPT0gMSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIG1hc2sgPSB1dGlsLmdldE1hc2sobWFza1BhdHRlcm4sIHJvdywgY29sIC0gYyk7XG5cblx0XHRcdFx0XHRpZiAobWFzaykge1xuXHRcdFx0XHRcdFx0ZGFyayA9ICFkYXJrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLm1vZHVsZXNbcm93XVtjb2wgLSBjXSA9IGRhcms7XG5cdFx0XHRcdFx0Yml0SW5kZXgtLTtcblxuXHRcdFx0XHRcdGlmIChiaXRJbmRleCA9PSAtMSkge1xuXHRcdFx0XHRcdFx0Ynl0ZUluZGV4Kys7XG5cdFx0XHRcdFx0XHRiaXRJbmRleCA9IDc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0cm93ICs9IGluYztcblxuXHRcdFx0aWYgKHJvdyA8IDAgfHwgdGhpcy5tb2R1bGVDb3VudCA8PSByb3cpIHtcblx0XHRcdFx0cm93IC09IGluYztcblx0XHRcdFx0aW5jID0gLWluYztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5RUkNvZGUuUEFEMCA9IDB4RUM7XG5RUkNvZGUuUEFEMSA9IDB4MTE7XG5cblFSQ29kZS5jcmVhdGVEYXRhID0gZnVuY3Rpb24odHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwsIGRhdGFMaXN0KSB7XG5cdFxuXHR2YXIgcnNCbG9ja3MgPSBSU0Jsb2NrLmdldFJTQmxvY2tzKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKTtcblx0XG5cdHZhciBidWZmZXIgPSBuZXcgQml0QnVmZmVyKCk7XG5cdFxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRhdGEgPSBkYXRhTGlzdFtpXTtcblx0XHRidWZmZXIucHV0KGRhdGEubW9kZSwgNCk7XG5cdFx0YnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCB1dGlsLmdldExlbmd0aEluQml0cyhkYXRhLm1vZGUsIHR5cGVOdW1iZXIpICk7XG5cdFx0ZGF0YS53cml0ZShidWZmZXIpO1xuXHR9XG5cblx0Ly8gY2FsYyBudW0gbWF4IGRhdGEuXG5cdHZhciB0b3RhbERhdGFDb3VudCA9IDA7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcblx0XHR0b3RhbERhdGFDb3VudCArPSByc0Jsb2Nrc1tpXS5kYXRhQ291bnQ7XG5cdH1cblxuXHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID4gdG90YWxEYXRhQ291bnQgKiA4KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY29kZSBsZW5ndGggb3ZlcmZsb3cuIChcIlxuXHRcdFx0KyBidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKClcblx0XHRcdCsgXCI+XCJcblx0XHRcdCsgIHRvdGFsRGF0YUNvdW50ICogOFxuXHRcdFx0KyBcIilcIik7XG5cdH1cblxuXHQvLyBlbmQgY29kZVxuXHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICsgNCA8PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcblx0XHRidWZmZXIucHV0KDAsIDQpO1xuXHR9XG5cblx0Ly8gcGFkZGluZ1xuXHR3aGlsZSAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICUgOCAhPSAwKSB7XG5cdFx0YnVmZmVyLnB1dEJpdChmYWxzZSk7XG5cdH1cblxuXHQvLyBwYWRkaW5nXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0XG5cdFx0aWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA+PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRidWZmZXIucHV0KFFSQ29kZS5QQUQwLCA4KTtcblx0XHRcblx0XHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID49IHRvdGFsRGF0YUNvdW50ICogOCkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGJ1ZmZlci5wdXQoUVJDb2RlLlBBRDEsIDgpO1xuXHR9XG5cblx0cmV0dXJuIFFSQ29kZS5jcmVhdGVCeXRlcyhidWZmZXIsIHJzQmxvY2tzKTtcbn07XG5cblFSQ29kZS5jcmVhdGVCeXRlcyA9IGZ1bmN0aW9uKGJ1ZmZlciwgcnNCbG9ja3MpIHtcblxuXHR2YXIgb2Zmc2V0ID0gMDtcblx0XG5cdHZhciBtYXhEY0NvdW50ID0gMDtcblx0dmFyIG1heEVjQ291bnQgPSAwO1xuXHRcblx0dmFyIGRjZGF0YSA9IG5ldyBBcnJheShyc0Jsb2Nrcy5sZW5ndGgpO1xuXHR2YXIgZWNkYXRhID0gbmV3IEFycmF5KHJzQmxvY2tzLmxlbmd0aCk7XG5cdFxuXHRmb3IgKHZhciByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgcisrKSB7XG5cblx0XHR2YXIgZGNDb3VudCA9IHJzQmxvY2tzW3JdLmRhdGFDb3VudDtcblx0XHR2YXIgZWNDb3VudCA9IHJzQmxvY2tzW3JdLnRvdGFsQ291bnQgLSBkY0NvdW50O1xuXG5cdFx0bWF4RGNDb3VudCA9IE1hdGgubWF4KG1heERjQ291bnQsIGRjQ291bnQpO1xuXHRcdG1heEVjQ291bnQgPSBNYXRoLm1heChtYXhFY0NvdW50LCBlY0NvdW50KTtcblx0XHRcblx0XHRkY2RhdGFbcl0gPSBuZXcgQXJyYXkoZGNDb3VudCk7XG5cdFx0XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkY2RhdGFbcl0ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGRjZGF0YVtyXVtpXSA9IDB4ZmYgJiBidWZmZXIuYnVmZmVyW2kgKyBvZmZzZXRdO1xuXHRcdH1cblx0XHRvZmZzZXQgKz0gZGNDb3VudDtcblx0XHRcblx0XHR2YXIgcnNQb2x5ID0gdXRpbC5nZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsKGVjQ291bnQpO1xuXHRcdHZhciByYXdQb2x5ID0gbmV3IFBvbHlub21pYWwoZGNkYXRhW3JdLCByc1BvbHkuZ2V0TGVuZ3RoKCkgLSAxKTtcblxuXHRcdHZhciBtb2RQb2x5ID0gcmF3UG9seS5tb2QocnNQb2x5KTtcblx0XHRlY2RhdGFbcl0gPSBuZXcgQXJyYXkocnNQb2x5LmdldExlbmd0aCgpIC0gMSk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlY2RhdGFbcl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtb2RJbmRleCA9IGkgKyBtb2RQb2x5LmdldExlbmd0aCgpIC0gZWNkYXRhW3JdLmxlbmd0aDtcblx0XHRcdGVjZGF0YVtyXVtpXSA9IChtb2RJbmRleCA+PSAwKT8gbW9kUG9seS5nZXQobW9kSW5kZXgpIDogMDtcblx0XHR9XG5cblx0fVxuXHRcblx0dmFyIHRvdGFsQ29kZUNvdW50ID0gMDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByc0Jsb2Nrcy5sZW5ndGg7IGkrKykge1xuXHRcdHRvdGFsQ29kZUNvdW50ICs9IHJzQmxvY2tzW2ldLnRvdGFsQ291bnQ7XG5cdH1cblxuXHR2YXIgZGF0YSA9IG5ldyBBcnJheSh0b3RhbENvZGVDb3VudCk7XG5cdHZhciBpbmRleCA9IDA7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXhEY0NvdW50OyBpKyspIHtcblx0XHRmb3IgKHZhciByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgcisrKSB7XG5cdFx0XHRpZiAoaSA8IGRjZGF0YVtyXS5sZW5ndGgpIHtcblx0XHRcdFx0ZGF0YVtpbmRleCsrXSA9IGRjZGF0YVtyXVtpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG1heEVjQ291bnQ7IGkrKykge1xuXHRcdGZvciAodmFyIHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByKyspIHtcblx0XHRcdGlmIChpIDwgZWNkYXRhW3JdLmxlbmd0aCkge1xuXHRcdFx0XHRkYXRhW2luZGV4KytdID0gZWNkYXRhW3JdW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkYXRhO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRUkNvZGU7XG5cbiIsIi8vIEVycm9yQ29ycmVjdExldmVsXG52YXIgRUNMID0gcmVxdWlyZSgnLi9FcnJvckNvcnJlY3RMZXZlbCcpO1xuXG5mdW5jdGlvbiBRUlJTQmxvY2sodG90YWxDb3VudCwgZGF0YUNvdW50KSB7XG5cdHRoaXMudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XG5cdHRoaXMuZGF0YUNvdW50ICA9IGRhdGFDb3VudDtcbn1cblxuUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFID0gW1xuXG5cdC8vIExcblx0Ly8gTVxuXHQvLyBRXG5cdC8vIEhcblxuXHQvLyAxXG5cdFsxLCAyNiwgMTldLFxuXHRbMSwgMjYsIDE2XSxcblx0WzEsIDI2LCAxM10sXG5cdFsxLCAyNiwgOV0sXG5cdFxuXHQvLyAyXG5cdFsxLCA0NCwgMzRdLFxuXHRbMSwgNDQsIDI4XSxcblx0WzEsIDQ0LCAyMl0sXG5cdFsxLCA0NCwgMTZdLFxuXG5cdC8vIDNcblx0WzEsIDcwLCA1NV0sXG5cdFsxLCA3MCwgNDRdLFxuXHRbMiwgMzUsIDE3XSxcblx0WzIsIDM1LCAxM10sXG5cblx0Ly8gNFx0XHRcblx0WzEsIDEwMCwgODBdLFxuXHRbMiwgNTAsIDMyXSxcblx0WzIsIDUwLCAyNF0sXG5cdFs0LCAyNSwgOV0sXG5cdFxuXHQvLyA1XG5cdFsxLCAxMzQsIDEwOF0sXG5cdFsyLCA2NywgNDNdLFxuXHRbMiwgMzMsIDE1LCAyLCAzNCwgMTZdLFxuXHRbMiwgMzMsIDExLCAyLCAzNCwgMTJdLFxuXHRcblx0Ly8gNlxuXHRbMiwgODYsIDY4XSxcblx0WzQsIDQzLCAyN10sXG5cdFs0LCA0MywgMTldLFxuXHRbNCwgNDMsIDE1XSxcblx0XG5cdC8vIDdcdFx0XG5cdFsyLCA5OCwgNzhdLFxuXHRbNCwgNDksIDMxXSxcblx0WzIsIDMyLCAxNCwgNCwgMzMsIDE1XSxcblx0WzQsIDM5LCAxMywgMSwgNDAsIDE0XSxcblx0XG5cdC8vIDhcblx0WzIsIDEyMSwgOTddLFxuXHRbMiwgNjAsIDM4LCAyLCA2MSwgMzldLFxuXHRbNCwgNDAsIDE4LCAyLCA0MSwgMTldLFxuXHRbNCwgNDAsIDE0LCAyLCA0MSwgMTVdLFxuXHRcblx0Ly8gOVxuXHRbMiwgMTQ2LCAxMTZdLFxuXHRbMywgNTgsIDM2LCAyLCA1OSwgMzddLFxuXHRbNCwgMzYsIDE2LCA0LCAzNywgMTddLFxuXHRbNCwgMzYsIDEyLCA0LCAzNywgMTNdLFxuXHRcblx0Ly8gMTBcdFx0XG5cdFsyLCA4NiwgNjgsIDIsIDg3LCA2OV0sXG5cdFs0LCA2OSwgNDMsIDEsIDcwLCA0NF0sXG5cdFs2LCA0MywgMTksIDIsIDQ0LCAyMF0sXG5cdFs2LCA0MywgMTUsIDIsIDQ0LCAxNl0sXG5cblx0Ly8gMTFcblx0WzQsIDEwMSwgODFdLFxuXHRbMSwgODAsIDUwLCA0LCA4MSwgNTFdLFxuXHRbNCwgNTAsIDIyLCA0LCA1MSwgMjNdLFxuXHRbMywgMzYsIDEyLCA4LCAzNywgMTNdLFxuXG5cdC8vIDEyXG5cdFsyLCAxMTYsIDkyLCAyLCAxMTcsIDkzXSxcblx0WzYsIDU4LCAzNiwgMiwgNTksIDM3XSxcblx0WzQsIDQ2LCAyMCwgNiwgNDcsIDIxXSxcblx0WzcsIDQyLCAxNCwgNCwgNDMsIDE1XSxcblxuXHQvLyAxM1xuXHRbNCwgMTMzLCAxMDddLFxuXHRbOCwgNTksIDM3LCAxLCA2MCwgMzhdLFxuXHRbOCwgNDQsIDIwLCA0LCA0NSwgMjFdLFxuXHRbMTIsIDMzLCAxMSwgNCwgMzQsIDEyXSxcblxuXHQvLyAxNFxuXHRbMywgMTQ1LCAxMTUsIDEsIDE0NiwgMTE2XSxcblx0WzQsIDY0LCA0MCwgNSwgNjUsIDQxXSxcblx0WzExLCAzNiwgMTYsIDUsIDM3LCAxN10sXG5cdFsxMSwgMzYsIDEyLCA1LCAzNywgMTNdLFxuXG5cdC8vIDE1XG5cdFs1LCAxMDksIDg3LCAxLCAxMTAsIDg4XSxcblx0WzUsIDY1LCA0MSwgNSwgNjYsIDQyXSxcblx0WzUsIDU0LCAyNCwgNywgNTUsIDI1XSxcblx0WzExLCAzNiwgMTJdLFxuXG5cdC8vIDE2XG5cdFs1LCAxMjIsIDk4LCAxLCAxMjMsIDk5XSxcblx0WzcsIDczLCA0NSwgMywgNzQsIDQ2XSxcblx0WzE1LCA0MywgMTksIDIsIDQ0LCAyMF0sXG5cdFszLCA0NSwgMTUsIDEzLCA0NiwgMTZdLFxuXG5cdC8vIDE3XG5cdFsxLCAxMzUsIDEwNywgNSwgMTM2LCAxMDhdLFxuXHRbMTAsIDc0LCA0NiwgMSwgNzUsIDQ3XSxcblx0WzEsIDUwLCAyMiwgMTUsIDUxLCAyM10sXG5cdFsyLCA0MiwgMTQsIDE3LCA0MywgMTVdLFxuXG5cdC8vIDE4XG5cdFs1LCAxNTAsIDEyMCwgMSwgMTUxLCAxMjFdLFxuXHRbOSwgNjksIDQzLCA0LCA3MCwgNDRdLFxuXHRbMTcsIDUwLCAyMiwgMSwgNTEsIDIzXSxcblx0WzIsIDQyLCAxNCwgMTksIDQzLCAxNV0sXG5cblx0Ly8gMTlcblx0WzMsIDE0MSwgMTEzLCA0LCAxNDIsIDExNF0sXG5cdFszLCA3MCwgNDQsIDExLCA3MSwgNDVdLFxuXHRbMTcsIDQ3LCAyMSwgNCwgNDgsIDIyXSxcblx0WzksIDM5LCAxMywgMTYsIDQwLCAxNF0sXG5cblx0Ly8gMjBcblx0WzMsIDEzNSwgMTA3LCA1LCAxMzYsIDEwOF0sXG5cdFszLCA2NywgNDEsIDEzLCA2OCwgNDJdLFxuXHRbMTUsIDU0LCAyNCwgNSwgNTUsIDI1XSxcblx0WzE1LCA0MywgMTUsIDEwLCA0NCwgMTZdLFxuXG5cdC8vIDIxXG5cdFs0LCAxNDQsIDExNiwgNCwgMTQ1LCAxMTddLFxuXHRbMTcsIDY4LCA0Ml0sXG5cdFsxNywgNTAsIDIyLCA2LCA1MSwgMjNdLFxuXHRbMTksIDQ2LCAxNiwgNiwgNDcsIDE3XSxcblxuXHQvLyAyMlxuXHRbMiwgMTM5LCAxMTEsIDcsIDE0MCwgMTEyXSxcblx0WzE3LCA3NCwgNDZdLFxuXHRbNywgNTQsIDI0LCAxNiwgNTUsIDI1XSxcblx0WzM0LCAzNywgMTNdLFxuXG5cdC8vIDIzXG5cdFs0LCAxNTEsIDEyMSwgNSwgMTUyLCAxMjJdLFxuXHRbNCwgNzUsIDQ3LCAxNCwgNzYsIDQ4XSxcblx0WzExLCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxuXHRbMTYsIDQ1LCAxNSwgMTQsIDQ2LCAxNl0sXG5cblx0Ly8gMjRcblx0WzYsIDE0NywgMTE3LCA0LCAxNDgsIDExOF0sXG5cdFs2LCA3MywgNDUsIDE0LCA3NCwgNDZdLFxuXHRbMTEsIDU0LCAyNCwgMTYsIDU1LCAyNV0sXG5cdFszMCwgNDYsIDE2LCAyLCA0NywgMTddLFxuXG5cdC8vIDI1XG5cdFs4LCAxMzIsIDEwNiwgNCwgMTMzLCAxMDddLFxuXHRbOCwgNzUsIDQ3LCAxMywgNzYsIDQ4XSxcblx0WzcsIDU0LCAyNCwgMjIsIDU1LCAyNV0sXG5cdFsyMiwgNDUsIDE1LCAxMywgNDYsIDE2XSxcblxuXHQvLyAyNlxuXHRbMTAsIDE0MiwgMTE0LCAyLCAxNDMsIDExNV0sXG5cdFsxOSwgNzQsIDQ2LCA0LCA3NSwgNDddLFxuXHRbMjgsIDUwLCAyMiwgNiwgNTEsIDIzXSxcblx0WzMzLCA0NiwgMTYsIDQsIDQ3LCAxN10sXG5cblx0Ly8gMjdcblx0WzgsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXG5cdFsyMiwgNzMsIDQ1LCAzLCA3NCwgNDZdLFxuXHRbOCwgNTMsIDIzLCAyNiwgNTQsIDI0XSxcblx0WzEyLCA0NSwgMTUsIDI4LCA0NiwgMTZdLFxuXG5cdC8vIDI4XG5cdFszLCAxNDcsIDExNywgMTAsIDE0OCwgMTE4XSxcblx0WzMsIDczLCA0NSwgMjMsIDc0LCA0Nl0sXG5cdFs0LCA1NCwgMjQsIDMxLCA1NSwgMjVdLFxuXHRbMTEsIDQ1LCAxNSwgMzEsIDQ2LCAxNl0sXG5cblx0Ly8gMjlcblx0WzcsIDE0NiwgMTE2LCA3LCAxNDcsIDExN10sXG5cdFsyMSwgNzMsIDQ1LCA3LCA3NCwgNDZdLFxuXHRbMSwgNTMsIDIzLCAzNywgNTQsIDI0XSxcblx0WzE5LCA0NSwgMTUsIDI2LCA0NiwgMTZdLFxuXG5cdC8vIDMwXG5cdFs1LCAxNDUsIDExNSwgMTAsIDE0NiwgMTE2XSxcblx0WzE5LCA3NSwgNDcsIDEwLCA3NiwgNDhdLFxuXHRbMTUsIDU0LCAyNCwgMjUsIDU1LCAyNV0sXG5cdFsyMywgNDUsIDE1LCAyNSwgNDYsIDE2XSxcblxuXHQvLyAzMVxuXHRbMTMsIDE0NSwgMTE1LCAzLCAxNDYsIDExNl0sXG5cdFsyLCA3NCwgNDYsIDI5LCA3NSwgNDddLFxuXHRbNDIsIDU0LCAyNCwgMSwgNTUsIDI1XSxcblx0WzIzLCA0NSwgMTUsIDI4LCA0NiwgMTZdLFxuXG5cdC8vIDMyXG5cdFsxNywgMTQ1LCAxMTVdLFxuXHRbMTAsIDc0LCA0NiwgMjMsIDc1LCA0N10sXG5cdFsxMCwgNTQsIDI0LCAzNSwgNTUsIDI1XSxcblx0WzE5LCA0NSwgMTUsIDM1LCA0NiwgMTZdLFxuXG5cdC8vIDMzXG5cdFsxNywgMTQ1LCAxMTUsIDEsIDE0NiwgMTE2XSxcblx0WzE0LCA3NCwgNDYsIDIxLCA3NSwgNDddLFxuXHRbMjksIDU0LCAyNCwgMTksIDU1LCAyNV0sXG5cdFsxMSwgNDUsIDE1LCA0NiwgNDYsIDE2XSxcblxuXHQvLyAzNFxuXHRbMTMsIDE0NSwgMTE1LCA2LCAxNDYsIDExNl0sXG5cdFsxNCwgNzQsIDQ2LCAyMywgNzUsIDQ3XSxcblx0WzQ0LCA1NCwgMjQsIDcsIDU1LCAyNV0sXG5cdFs1OSwgNDYsIDE2LCAxLCA0NywgMTddLFxuXG5cdC8vIDM1XG5cdFsxMiwgMTUxLCAxMjEsIDcsIDE1MiwgMTIyXSxcblx0WzEyLCA3NSwgNDcsIDI2LCA3NiwgNDhdLFxuXHRbMzksIDU0LCAyNCwgMTQsIDU1LCAyNV0sXG5cdFsyMiwgNDUsIDE1LCA0MSwgNDYsIDE2XSxcblxuXHQvLyAzNlxuXHRbNiwgMTUxLCAxMjEsIDE0LCAxNTIsIDEyMl0sXG5cdFs2LCA3NSwgNDcsIDM0LCA3NiwgNDhdLFxuXHRbNDYsIDU0LCAyNCwgMTAsIDU1LCAyNV0sXG5cdFsyLCA0NSwgMTUsIDY0LCA0NiwgMTZdLFxuXG5cdC8vIDM3XG5cdFsxNywgMTUyLCAxMjIsIDQsIDE1MywgMTIzXSxcblx0WzI5LCA3NCwgNDYsIDE0LCA3NSwgNDddLFxuXHRbNDksIDU0LCAyNCwgMTAsIDU1LCAyNV0sXG5cdFsyNCwgNDUsIDE1LCA0NiwgNDYsIDE2XSxcblxuXHQvLyAzOFxuXHRbNCwgMTUyLCAxMjIsIDE4LCAxNTMsIDEyM10sXG5cdFsxMywgNzQsIDQ2LCAzMiwgNzUsIDQ3XSxcblx0WzQ4LCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxuXHRbNDIsIDQ1LCAxNSwgMzIsIDQ2LCAxNl0sXG5cblx0Ly8gMzlcblx0WzIwLCAxNDcsIDExNywgNCwgMTQ4LCAxMThdLFxuXHRbNDAsIDc1LCA0NywgNywgNzYsIDQ4XSxcblx0WzQzLCA1NCwgMjQsIDIyLCA1NSwgMjVdLFxuXHRbMTAsIDQ1LCAxNSwgNjcsIDQ2LCAxNl0sXG5cblx0Ly8gNDBcblx0WzE5LCAxNDgsIDExOCwgNiwgMTQ5LCAxMTldLFxuXHRbMTgsIDc1LCA0NywgMzEsIDc2LCA0OF0sXG5cdFszNCwgNTQsIDI0LCAzNCwgNTUsIDI1XSxcblx0WzIwLCA0NSwgMTUsIDYxLCA0NiwgMTZdXG5dO1xuXG5RUlJTQmxvY2suZ2V0UlNCbG9ja3MgPSBmdW5jdGlvbih0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCkge1xuXHRcblx0dmFyIHJzQmxvY2sgPSBRUlJTQmxvY2suZ2V0UnNCbG9ja1RhYmxlKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKTtcblx0XG5cdGlmIChyc0Jsb2NrID09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImJhZCBycyBibG9jayBAIHR5cGVOdW1iZXI6XCIgKyB0eXBlTnVtYmVyICsgXCIvZXJyb3JDb3JyZWN0TGV2ZWw6XCIgKyBlcnJvckNvcnJlY3RMZXZlbCk7XG5cdH1cblxuXHR2YXIgbGVuZ3RoID0gcnNCbG9jay5sZW5ndGggLyAzO1xuXHRcblx0dmFyIGxpc3QgPSBuZXcgQXJyYXkoKTtcblx0XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblxuXHRcdHZhciBjb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAwXTtcblx0XHR2YXIgdG90YWxDb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAxXTtcblx0XHR2YXIgZGF0YUNvdW50ICA9IHJzQmxvY2tbaSAqIDMgKyAyXTtcblxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuXHRcdFx0bGlzdC5wdXNoKG5ldyBRUlJTQmxvY2sodG90YWxDb3VudCwgZGF0YUNvdW50KSApO1x0XG5cdFx0fVxuXHR9XG5cdFxuXHRyZXR1cm4gbGlzdDtcbn1cblxuUVJSU0Jsb2NrLmdldFJzQmxvY2tUYWJsZSA9IGZ1bmN0aW9uKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKSB7XG5cblx0c3dpdGNoKGVycm9yQ29ycmVjdExldmVsKSB7XG5cdGNhc2UgRUNMLkwgOlxuXHRcdHJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAwXTtcblx0Y2FzZSBFQ0wuTSA6XG5cdFx0cmV0dXJuIFFSUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDFdO1xuXHRjYXNlIEVDTC5RIDpcblx0XHRyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMl07XG5cdGNhc2UgRUNMLkggOlxuXHRcdHJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAzXTtcblx0ZGVmYXVsdCA6XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFFSUlNCbG9jaztcbiIsInZhciBRUk1hdGggPSB7XG5cblx0Z2xvZyA6IGZ1bmN0aW9uKG4pIHtcblx0XG5cdFx0aWYgKG4gPCAxKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJnbG9nKFwiICsgbiArIFwiKVwiKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIFFSTWF0aC5MT0dfVEFCTEVbbl07XG5cdH0sXG5cdFxuXHRnZXhwIDogZnVuY3Rpb24obikge1xuXHRcblx0XHR3aGlsZSAobiA8IDApIHtcblx0XHRcdG4gKz0gMjU1O1xuXHRcdH1cblx0XG5cdFx0d2hpbGUgKG4gPj0gMjU2KSB7XG5cdFx0XHRuIC09IDI1NTtcblx0XHR9XG5cdFxuXHRcdHJldHVybiBRUk1hdGguRVhQX1RBQkxFW25dO1xuXHR9LFxuXHRcblx0RVhQX1RBQkxFIDogbmV3IEFycmF5KDI1NiksXG5cdFxuXHRMT0dfVEFCTEUgOiBuZXcgQXJyYXkoMjU2KVxuXG59O1xuXHRcbmZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFFSTWF0aC5FWFBfVEFCTEVbaV0gPSAxIDw8IGk7XG59XG5mb3IgKHZhciBpID0gODsgaSA8IDI1NjsgaSsrKSB7XG5cdFFSTWF0aC5FWFBfVEFCTEVbaV0gPSBRUk1hdGguRVhQX1RBQkxFW2kgLSA0XVxuXHRcdF4gUVJNYXRoLkVYUF9UQUJMRVtpIC0gNV1cblx0XHReIFFSTWF0aC5FWFBfVEFCTEVbaSAtIDZdXG5cdFx0XiBRUk1hdGguRVhQX1RBQkxFW2kgLSA4XTtcbn1cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU1OyBpKyspIHtcblx0UVJNYXRoLkxPR19UQUJMRVtRUk1hdGguRVhQX1RBQkxFW2ldIF0gPSBpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFFSTWF0aDtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRNT0RFX05VTUJFUiA6XHRcdDEgPDwgMCxcblx0TU9ERV9BTFBIQV9OVU0gOiBcdDEgPDwgMSxcblx0TU9ERV84QklUX0JZVEUgOiBcdDEgPDwgMixcblx0TU9ERV9LQU5KSSA6XHRcdDEgPDwgM1xufTtcbiIsInZhciBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJyk7XG52YXIgUG9seW5vbWlhbCA9IHJlcXVpcmUoJy4vUG9seW5vbWlhbCcpO1xudmFyIG1hdGggPSByZXF1aXJlKCcuL21hdGgnKTtcblxudmFyIFFSTWFza1BhdHRlcm4gPSB7XG5cdFBBVFRFUk4wMDAgOiAwLFxuXHRQQVRURVJOMDAxIDogMSxcblx0UEFUVEVSTjAxMCA6IDIsXG5cdFBBVFRFUk4wMTEgOiAzLFxuXHRQQVRURVJOMTAwIDogNCxcblx0UEFUVEVSTjEwMSA6IDUsXG5cdFBBVFRFUk4xMTAgOiA2LFxuXHRQQVRURVJOMTExIDogN1xufTtcblxudmFyIFFSVXRpbCA9IHtcblxuICAgIFBBVFRFUk5fUE9TSVRJT05fVEFCTEUgOiBbXG5cdCAgICBbXSxcblx0ICAgIFs2LCAxOF0sXG5cdCAgICBbNiwgMjJdLFxuXHQgICAgWzYsIDI2XSxcblx0ICAgIFs2LCAzMF0sXG5cdCAgICBbNiwgMzRdLFxuXHQgICAgWzYsIDIyLCAzOF0sXG5cdCAgICBbNiwgMjQsIDQyXSxcblx0ICAgIFs2LCAyNiwgNDZdLFxuXHQgICAgWzYsIDI4LCA1MF0sXG5cdCAgICBbNiwgMzAsIDU0XSxcdFx0XG5cdCAgICBbNiwgMzIsIDU4XSxcblx0ICAgIFs2LCAzNCwgNjJdLFxuXHQgICAgWzYsIDI2LCA0NiwgNjZdLFxuXHQgICAgWzYsIDI2LCA0OCwgNzBdLFxuXHQgICAgWzYsIDI2LCA1MCwgNzRdLFxuXHQgICAgWzYsIDMwLCA1NCwgNzhdLFxuXHQgICAgWzYsIDMwLCA1NiwgODJdLFxuXHQgICAgWzYsIDMwLCA1OCwgODZdLFxuXHQgICAgWzYsIDM0LCA2MiwgOTBdLFxuXHQgICAgWzYsIDI4LCA1MCwgNzIsIDk0XSxcblx0ICAgIFs2LCAyNiwgNTAsIDc0LCA5OF0sXG5cdCAgICBbNiwgMzAsIDU0LCA3OCwgMTAyXSxcblx0ICAgIFs2LCAyOCwgNTQsIDgwLCAxMDZdLFxuXHQgICAgWzYsIDMyLCA1OCwgODQsIDExMF0sXG5cdCAgICBbNiwgMzAsIDU4LCA4NiwgMTE0XSxcblx0ICAgIFs2LCAzNCwgNjIsIDkwLCAxMThdLFxuXHQgICAgWzYsIDI2LCA1MCwgNzQsIDk4LCAxMjJdLFxuXHQgICAgWzYsIDMwLCA1NCwgNzgsIDEwMiwgMTI2XSxcblx0ICAgIFs2LCAyNiwgNTIsIDc4LCAxMDQsIDEzMF0sXG5cdCAgICBbNiwgMzAsIDU2LCA4MiwgMTA4LCAxMzRdLFxuXHQgICAgWzYsIDM0LCA2MCwgODYsIDExMiwgMTM4XSxcblx0ICAgIFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0Ml0sXG5cdCAgICBbNiwgMzQsIDYyLCA5MCwgMTE4LCAxNDZdLFxuXHQgICAgWzYsIDMwLCA1NCwgNzgsIDEwMiwgMTI2LCAxNTBdLFxuXHQgICAgWzYsIDI0LCA1MCwgNzYsIDEwMiwgMTI4LCAxNTRdLFxuXHQgICAgWzYsIDI4LCA1NCwgODAsIDEwNiwgMTMyLCAxNThdLFxuXHQgICAgWzYsIDMyLCA1OCwgODQsIDExMCwgMTM2LCAxNjJdLFxuXHQgICAgWzYsIDI2LCA1NCwgODIsIDExMCwgMTM4LCAxNjZdLFxuXHQgICAgWzYsIDMwLCA1OCwgODYsIDExNCwgMTQyLCAxNzBdXG4gICAgXSxcblxuICAgIEcxNSA6ICgxIDw8IDEwKSB8ICgxIDw8IDgpIHwgKDEgPDwgNSkgfCAoMSA8PCA0KSB8ICgxIDw8IDIpIHwgKDEgPDwgMSkgfCAoMSA8PCAwKSxcbiAgICBHMTggOiAoMSA8PCAxMikgfCAoMSA8PCAxMSkgfCAoMSA8PCAxMCkgfCAoMSA8PCA5KSB8ICgxIDw8IDgpIHwgKDEgPDwgNSkgfCAoMSA8PCAyKSB8ICgxIDw8IDApLFxuICAgIEcxNV9NQVNLIDogKDEgPDwgMTQpIHwgKDEgPDwgMTIpIHwgKDEgPDwgMTApXHR8ICgxIDw8IDQpIHwgKDEgPDwgMSksXG5cbiAgICBnZXRCQ0hUeXBlSW5mbyA6IGZ1bmN0aW9uKGRhdGEpIHtcblx0ICAgIHZhciBkID0gZGF0YSA8PCAxMDtcblx0ICAgIHdoaWxlIChRUlV0aWwuZ2V0QkNIRGlnaXQoZCkgLSBRUlV0aWwuZ2V0QkNIRGlnaXQoUVJVdGlsLkcxNSkgPj0gMCkge1xuXHRcdCAgICBkIF49IChRUlV0aWwuRzE1IDw8IChRUlV0aWwuZ2V0QkNIRGlnaXQoZCkgLSBRUlV0aWwuZ2V0QkNIRGlnaXQoUVJVdGlsLkcxNSkgKSApOyBcdFxuXHQgICAgfVxuXHQgICAgcmV0dXJuICggKGRhdGEgPDwgMTApIHwgZCkgXiBRUlV0aWwuRzE1X01BU0s7XG4gICAgfSxcblxuICAgIGdldEJDSFR5cGVOdW1iZXIgOiBmdW5jdGlvbihkYXRhKSB7XG5cdCAgICB2YXIgZCA9IGRhdGEgPDwgMTI7XG5cdCAgICB3aGlsZSAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTgpID49IDApIHtcblx0XHQgICAgZCBePSAoUVJVdGlsLkcxOCA8PCAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTgpICkgKTsgXHRcblx0ICAgIH1cblx0ICAgIHJldHVybiAoZGF0YSA8PCAxMikgfCBkO1xuICAgIH0sXG5cbiAgICBnZXRCQ0hEaWdpdCA6IGZ1bmN0aW9uKGRhdGEpIHtcblxuXHQgICAgdmFyIGRpZ2l0ID0gMDtcblxuXHQgICAgd2hpbGUgKGRhdGEgIT0gMCkge1xuXHRcdCAgICBkaWdpdCsrO1xuXHRcdCAgICBkYXRhID4+Pj0gMTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGRpZ2l0O1xuICAgIH0sXG5cbiAgICBnZXRQYXR0ZXJuUG9zaXRpb24gOiBmdW5jdGlvbih0eXBlTnVtYmVyKSB7XG5cdCAgICByZXR1cm4gUVJVdGlsLlBBVFRFUk5fUE9TSVRJT05fVEFCTEVbdHlwZU51bWJlciAtIDFdO1xuICAgIH0sXG5cbiAgICBnZXRNYXNrIDogZnVuY3Rpb24obWFza1BhdHRlcm4sIGksIGopIHtcblx0ICAgIFxuXHQgICAgc3dpdGNoIChtYXNrUGF0dGVybikge1xuXHRcdCAgICBcblx0ICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDAwIDogcmV0dXJuIChpICsgaikgJSAyID09IDA7XG5cdCAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAwMSA6IHJldHVybiBpICUgMiA9PSAwO1xuXHQgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMTAgOiByZXR1cm4gaiAlIDMgPT0gMDtcblx0ICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDExIDogcmV0dXJuIChpICsgaikgJSAzID09IDA7XG5cdCAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjEwMCA6IHJldHVybiAoTWF0aC5mbG9vcihpIC8gMikgKyBNYXRoLmZsb29yKGogLyAzKSApICUgMiA9PSAwO1xuXHQgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDEgOiByZXR1cm4gKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMyA9PSAwO1xuXHQgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMTAgOiByZXR1cm4gKCAoaSAqIGopICUgMiArIChpICogaikgJSAzKSAlIDIgPT0gMDtcblx0ICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTExIDogcmV0dXJuICggKGkgKiBqKSAlIDMgKyAoaSArIGopICUgMikgJSAyID09IDA7XG5cblx0ICAgIGRlZmF1bHQgOlxuXHRcdCAgICB0aHJvdyBuZXcgRXJyb3IoXCJiYWQgbWFza1BhdHRlcm46XCIgKyBtYXNrUGF0dGVybik7XG5cdCAgICB9XG4gICAgfSxcblxuICAgIGdldEVycm9yQ29ycmVjdFBvbHlub21pYWwgOiBmdW5jdGlvbihlcnJvckNvcnJlY3RMZW5ndGgpIHtcblxuXHQgICAgdmFyIGEgPSBuZXcgUG9seW5vbWlhbChbMV0sIDApO1xuXG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVycm9yQ29ycmVjdExlbmd0aDsgaSsrKSB7XG5cdFx0ICAgIGEgPSBhLm11bHRpcGx5KG5ldyBQb2x5bm9taWFsKFsxLCBtYXRoLmdleHAoaSldLCAwKSApO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gYTtcbiAgICB9LFxuXG4gICAgZ2V0TGVuZ3RoSW5CaXRzIDogZnVuY3Rpb24obW9kZSwgdHlwZSkge1xuXG5cdCAgICBpZiAoMSA8PSB0eXBlICYmIHR5cGUgPCAxMCkge1xuXG5cdFx0ICAgIC8vIDEgLSA5XG5cblx0XHQgICAgc3dpdGNoKG1vZGUpIHtcblx0XHQgICAgY2FzZSBNb2RlLk1PREVfTlVNQkVSIFx0OiByZXR1cm4gMTA7XG5cdFx0ICAgIGNhc2UgTW9kZS5NT0RFX0FMUEhBX05VTSBcdDogcmV0dXJuIDk7XG5cdFx0ICAgIGNhc2UgTW9kZS5NT0RFXzhCSVRfQllURVx0OiByZXR1cm4gODtcblx0XHQgICAgY2FzZSBNb2RlLk1PREVfS0FOSkkgIFx0OiByZXR1cm4gODtcblx0XHQgICAgZGVmYXVsdCA6XG5cdFx0XHQgICAgdGhyb3cgbmV3IEVycm9yKFwibW9kZTpcIiArIG1vZGUpO1xuXHRcdCAgICB9XG5cblx0ICAgIH0gZWxzZSBpZiAodHlwZSA8IDI3KSB7XG5cblx0XHQgICAgLy8gMTAgLSAyNlxuXG5cdFx0ICAgIHN3aXRjaChtb2RlKSB7XG5cdFx0ICAgIGNhc2UgTW9kZS5NT0RFX05VTUJFUiBcdDogcmV0dXJuIDEyO1xuXHRcdCAgICBjYXNlIE1vZGUuTU9ERV9BTFBIQV9OVU0gXHQ6IHJldHVybiAxMTtcblx0XHQgICAgY2FzZSBNb2RlLk1PREVfOEJJVF9CWVRFXHQ6IHJldHVybiAxNjtcblx0XHQgICAgY2FzZSBNb2RlLk1PREVfS0FOSkkgIFx0OiByZXR1cm4gMTA7XG5cdFx0ICAgIGRlZmF1bHQgOlxuXHRcdFx0ICAgIHRocm93IG5ldyBFcnJvcihcIm1vZGU6XCIgKyBtb2RlKTtcblx0XHQgICAgfVxuXG5cdCAgICB9IGVsc2UgaWYgKHR5cGUgPCA0MSkge1xuXG5cdFx0ICAgIC8vIDI3IC0gNDBcblxuXHRcdCAgICBzd2l0Y2gobW9kZSkge1xuXHRcdCAgICBjYXNlIE1vZGUuTU9ERV9OVU1CRVIgXHQ6IHJldHVybiAxNDtcblx0XHQgICAgY2FzZSBNb2RlLk1PREVfQUxQSEFfTlVNXHQ6IHJldHVybiAxMztcblx0XHQgICAgY2FzZSBNb2RlLk1PREVfOEJJVF9CWVRFXHQ6IHJldHVybiAxNjtcblx0XHQgICAgY2FzZSBNb2RlLk1PREVfS0FOSkkgIFx0OiByZXR1cm4gMTI7XG5cdFx0ICAgIGRlZmF1bHQgOlxuXHRcdFx0ICAgIHRocm93IG5ldyBFcnJvcihcIm1vZGU6XCIgKyBtb2RlKTtcblx0XHQgICAgfVxuXG5cdCAgICB9IGVsc2Uge1xuXHRcdCAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0eXBlOlwiICsgdHlwZSk7XG5cdCAgICB9XG4gICAgfSxcblxuICAgIGdldExvc3RQb2ludCA6IGZ1bmN0aW9uKHFyQ29kZSkge1xuXHQgICAgXG5cdCAgICB2YXIgbW9kdWxlQ291bnQgPSBxckNvZGUuZ2V0TW9kdWxlQ291bnQoKTtcblx0ICAgIFxuXHQgICAgdmFyIGxvc3RQb2ludCA9IDA7XG5cdCAgICBcblx0ICAgIC8vIExFVkVMMVxuXHQgICAgXG5cdCAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93KyspIHtcblxuXHRcdCAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sKyspIHtcblxuXHRcdFx0ICAgIHZhciBzYW1lQ291bnQgPSAwO1xuXHRcdFx0ICAgIHZhciBkYXJrID0gcXJDb2RlLmlzRGFyayhyb3csIGNvbCk7XG5cblx0XHRcdFx0Zm9yICh2YXIgciA9IC0xOyByIDw9IDE7IHIrKykge1xuXG5cdFx0XHRcdCAgICBpZiAocm93ICsgciA8IDAgfHwgbW9kdWxlQ291bnQgPD0gcm93ICsgcikge1xuXHRcdFx0XHRcdCAgICBjb250aW51ZTtcblx0XHRcdFx0ICAgIH1cblxuXHRcdFx0XHQgICAgZm9yICh2YXIgYyA9IC0xOyBjIDw9IDE7IGMrKykge1xuXG5cdFx0XHRcdFx0ICAgIGlmIChjb2wgKyBjIDwgMCB8fCBtb2R1bGVDb3VudCA8PSBjb2wgKyBjKSB7XG5cdFx0XHRcdFx0XHQgICAgY29udGludWU7XG5cdFx0XHRcdFx0ICAgIH1cblxuXHRcdFx0XHRcdCAgICBpZiAociA9PSAwICYmIGMgPT0gMCkge1xuXHRcdFx0XHRcdFx0ICAgIGNvbnRpbnVlO1xuXHRcdFx0XHRcdCAgICB9XG5cblx0XHRcdFx0XHQgICAgaWYgKGRhcmsgPT0gcXJDb2RlLmlzRGFyayhyb3cgKyByLCBjb2wgKyBjKSApIHtcblx0XHRcdFx0XHRcdCAgICBzYW1lQ291bnQrKztcblx0XHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgfVxuXHRcdFx0ICAgIH1cblxuXHRcdFx0ICAgIGlmIChzYW1lQ291bnQgPiA1KSB7XG5cdFx0XHRcdCAgICBsb3N0UG9pbnQgKz0gKDMgKyBzYW1lQ291bnQgLSA1KTtcblx0XHRcdCAgICB9XG5cdFx0ICAgIH1cblx0ICAgIH1cblxuXHQgICAgLy8gTEVWRUwyXG5cblx0ICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50IC0gMTsgcm93KyspIHtcblx0XHQgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQgLSAxOyBjb2wrKykge1xuXHRcdFx0ICAgIHZhciBjb3VudCA9IDA7XG5cdFx0XHQgICAgaWYgKHFyQ29kZS5pc0Rhcmsocm93LCAgICAgY29sICAgICkgKSBjb3VudCsrO1xuXHRcdFx0ICAgIGlmIChxckNvZGUuaXNEYXJrKHJvdyArIDEsIGNvbCAgICApICkgY291bnQrKztcblx0XHRcdCAgICBpZiAocXJDb2RlLmlzRGFyayhyb3csICAgICBjb2wgKyAxKSApIGNvdW50Kys7XG5cdFx0XHQgICAgaWYgKHFyQ29kZS5pc0Rhcmsocm93ICsgMSwgY29sICsgMSkgKSBjb3VudCsrO1xuXHRcdFx0ICAgIGlmIChjb3VudCA9PSAwIHx8IGNvdW50ID09IDQpIHtcblx0XHRcdFx0ICAgIGxvc3RQb2ludCArPSAzO1xuXHRcdFx0ICAgIH1cblx0XHQgICAgfVxuXHQgICAgfVxuXG5cdCAgICAvLyBMRVZFTDNcblxuXHQgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XG5cdFx0ICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50IC0gNjsgY29sKyspIHtcblx0XHRcdCAgICBpZiAocXJDb2RlLmlzRGFyayhyb3csIGNvbClcblx0XHRcdFx0XHQgICAgJiYgIXFyQ29kZS5pc0Rhcmsocm93LCBjb2wgKyAxKVxuXHRcdFx0XHRcdCAgICAmJiAgcXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDIpXG5cdFx0XHRcdFx0ICAgICYmICBxckNvZGUuaXNEYXJrKHJvdywgY29sICsgMylcblx0XHRcdFx0XHQgICAgJiYgIHFyQ29kZS5pc0Rhcmsocm93LCBjb2wgKyA0KVxuXHRcdFx0XHRcdCAgICAmJiAhcXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDUpXG5cdFx0XHRcdFx0ICAgICYmICBxckNvZGUuaXNEYXJrKHJvdywgY29sICsgNikgKSB7XG5cdFx0XHRcdCAgICBsb3N0UG9pbnQgKz0gNDA7XG5cdFx0XHQgICAgfVxuXHRcdCAgICB9XG5cdCAgICB9XG5cblx0ICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wrKykge1xuXHRcdCAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudCAtIDY7IHJvdysrKSB7XG5cdFx0XHQgICAgaWYgKHFyQ29kZS5pc0Rhcmsocm93LCBjb2wpXG5cdFx0XHRcdFx0ICAgICYmICFxckNvZGUuaXNEYXJrKHJvdyArIDEsIGNvbClcblx0XHRcdFx0XHQgICAgJiYgIHFyQ29kZS5pc0Rhcmsocm93ICsgMiwgY29sKVxuXHRcdFx0XHRcdCAgICAmJiAgcXJDb2RlLmlzRGFyayhyb3cgKyAzLCBjb2wpXG5cdFx0XHRcdFx0ICAgICYmICBxckNvZGUuaXNEYXJrKHJvdyArIDQsIGNvbClcblx0XHRcdFx0XHQgICAgJiYgIXFyQ29kZS5pc0Rhcmsocm93ICsgNSwgY29sKVxuXHRcdFx0XHRcdCAgICAmJiAgcXJDb2RlLmlzRGFyayhyb3cgKyA2LCBjb2wpICkge1xuXHRcdFx0XHQgICAgbG9zdFBvaW50ICs9IDQwO1xuXHRcdFx0ICAgIH1cblx0XHQgICAgfVxuXHQgICAgfVxuXG5cdCAgICAvLyBMRVZFTDRcblx0ICAgIFxuXHQgICAgdmFyIGRhcmtDb3VudCA9IDA7XG5cblx0ICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wrKykge1xuXHRcdCAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93KyspIHtcblx0XHRcdCAgICBpZiAocXJDb2RlLmlzRGFyayhyb3csIGNvbCkgKSB7XG5cdFx0XHRcdCAgICBkYXJrQ291bnQrKztcblx0XHRcdCAgICB9XG5cdFx0ICAgIH1cblx0ICAgIH1cblx0ICAgIFxuXHQgICAgdmFyIHJhdGlvID0gTWF0aC5hYnMoMTAwICogZGFya0NvdW50IC8gbW9kdWxlQ291bnQgLyBtb2R1bGVDb3VudCAtIDUwKSAvIDU7XG5cdCAgICBsb3N0UG9pbnQgKz0gcmF0aW8gKiAxMDtcblxuXHQgICAgcmV0dXJuIGxvc3RQb2ludDtcdFx0XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRUlV0aWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpOyAvLyBxci5qcyBkb2Vzbid0IGhhbmRsZSBlcnJvciBsZXZlbCBvZiB6ZXJvIChNKSBzbyB3ZSBuZWVkIHRvIGRvIGl0IHJpZ2h0LFxuLy8gdGh1cyB0aGUgZGVlcCByZXF1aXJlLlxuXG5cbnZhciBRUkNvZGVJbXBsID0gcmVxdWlyZSgncXIuanMvbGliL1FSQ29kZScpO1xuXG52YXIgRXJyb3JDb3JyZWN0TGV2ZWwgPSByZXF1aXJlKCdxci5qcy9saWIvRXJyb3JDb3JyZWN0TGV2ZWwnKTsgLy8gVE9ETzogcHVsbCB0aGlzIG9mZiBvZiB0aGUgUVJDb2RlIGNsYXNzIHR5cGUgc28gaXQgbWF0Y2hlcy5cblxuXG4vLyBDb252ZXJ0IGZyb20gVVRGLTE2LCBmb3JjaW5nIHRoZSB1c2Ugb2YgYnl0ZS1tb2RlIGVuY29kaW5nIGluIG91ciBRUiBDb2RlLlxuLy8gVGhpcyBhbGxvd3MgdXMgdG8gZW5jb2RlIEhhbmppLCBLYW5qaSwgZW1vamksIGV0Yy4gSWRlYWxseSB3ZSdkIGRvIG1vcmVcbi8vIGRldGVjdGlvbiBhbmQgbm90IHJlc29ydCB0byBieXRlLW1vZGUgaWYgcG9zc2libGUsIGJ1dCB3ZSdyZSB0cmFkaW5nIG9mZlxuLy8gYSBzbWFsbGVyIGxpYnJhcnkgZm9yIGEgc21hbGxlciBhbW91bnQgb2YgZGF0YSB3ZSBjYW4gcG90ZW50aWFsbHkgZW5jb2RlLlxuLy8gQmFzZWQgb24gaHR0cDovL2pvbmlzYWxvbmVuLmNvbS8yMDEyL2Zyb20tdXRmLTE2LXRvLXV0Zi04LWluLWphdmFzY3JpcHQvXG5mdW5jdGlvbiBjb252ZXJ0U3RyKHN0cikge1xuICB2YXIgb3V0ID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2hhcmNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcblxuICAgIGlmIChjaGFyY29kZSA8IDB4MDA4MCkge1xuICAgICAgb3V0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhcmNvZGUpO1xuICAgIH0gZWxzZSBpZiAoY2hhcmNvZGUgPCAweDA4MDApIHtcbiAgICAgIG91dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4YzAgfCBjaGFyY29kZSA+PiA2KTtcbiAgICAgIG91dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ODAgfCBjaGFyY29kZSAmIDB4M2YpO1xuICAgIH0gZWxzZSBpZiAoY2hhcmNvZGUgPCAweGQ4MDAgfHwgY2hhcmNvZGUgPj0gMHhlMDAwKSB7XG4gICAgICBvdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGUwIHwgY2hhcmNvZGUgPj4gMTIpO1xuICAgICAgb3V0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHg4MCB8IGNoYXJjb2RlID4+IDYgJiAweDNmKTtcbiAgICAgIG91dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ODAgfCBjaGFyY29kZSAmIDB4M2YpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGlzIGlzIGEgc3Vycm9nYXRlIHBhaXIsIHNvIHdlJ2xsIHJlY29uc2l0dXRlIHRoZSBwaWVjZXMgYW5kIHdvcmtcbiAgICAgIC8vIGZyb20gdGhhdFxuICAgICAgaSsrO1xuICAgICAgY2hhcmNvZGUgPSAweDEwMDAwICsgKChjaGFyY29kZSAmIDB4M2ZmKSA8PCAxMCB8IHN0ci5jaGFyQ29kZUF0KGkpICYgMHgzZmYpO1xuICAgICAgb3V0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMCB8IGNoYXJjb2RlID4+IDE4KTtcbiAgICAgIG91dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ODAgfCBjaGFyY29kZSA+PiAxMiAmIDB4M2YpO1xuICAgICAgb3V0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHg4MCB8IGNoYXJjb2RlID4+IDYgJiAweDNmKTtcbiAgICAgIG91dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ODAgfCBjaGFyY29kZSAmIDB4M2YpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG5cbnZhciBERUZBVUxUX1BST1BTID0ge1xuICBzaXplOiAxMjgsXG4gIGxldmVsOiAnTCcsXG4gIGJnQ29sb3I6ICcjRkZGRkZGJyxcbiAgZmdDb2xvcjogJyMwMDAwMDAnLFxuICBpbmNsdWRlTWFyZ2luOiBmYWxzZVxufTtcbnZhciBQUk9QX1RZUEVTID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHtcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgbGV2ZWw6IFByb3BUeXBlcy5vbmVPZihbJ0wnLCAnTScsICdRJywgJ0gnXSksXG4gIGJnQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZnQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGluY2x1ZGVNYXJnaW46IFByb3BUeXBlcy5ib29sLFxuICBpbWFnZVNldHRpbmdzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgZXhjYXZhdGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgeTogUHJvcFR5cGVzLm51bWJlclxuICB9KVxufSA6IHt9O1xudmFyIE1BUkdJTl9TSVpFID0gNDsgLy8gVGhpcyBpcyAqdmVyeSogcm91Z2ggZXN0aW1hdGUgb2YgbWF4IGFtb3VudCBvZiBRUkNvZGUgYWxsb3dlZCB0byBiZSBjb3ZlcmVkLlxuLy8gSXQgaXMgXCJ3cm9uZ1wiIGluIGEgbG90IG9mIHdheXMgKGFyZWEgaXMgYSB0ZXJyaWJsZSB3YXkgdG8gZXN0aW1hdGUsIGl0XG4vLyByZWFsbHkgc2hvdWxkIGJlIG51bWJlciBvZiBtb2R1bGVzIGNvdmVyZWQpLCBidXQgaWYgZm9yIHNvbWUgcmVhc29uIHdlIGRvbid0XG4vLyBnZXQgYW4gZXhwbGljaXQgaGVpZ2h0IG9yIHdpZHRoLCBJJ2QgcmF0aGVyIGRlZmF1bHQgdG8gc29tZXRoaW5nIHRoYW4gdGhyb3cuXG5cbnZhciBERUZBVUxUX0lNR19TQ0FMRSA9IDAuMTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVQYXRoKG1vZHVsZXMpIHtcbiAgdmFyIG1hcmdpbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgdmFyIG9wcyA9IFtdO1xuICBtb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKHJvdywgeSkge1xuICAgIHZhciBzdGFydCA9IG51bGw7XG4gICAgcm93LmZvckVhY2goZnVuY3Rpb24gKGNlbGwsIHgpIHtcbiAgICAgIGlmICghY2VsbCAmJiBzdGFydCAhPT0gbnVsbCkge1xuICAgICAgICAvLyBNMCAwaDd2MUgweiBpbmplY3RzIHRoZSBzcGFjZSB3aXRoIHRoZSBtb3ZlIGFuZCBkcm9wcyB0aGUgY29tbWEsXG4gICAgICAgIC8vIHNhdmluZyBhIGNoYXIgcGVyIG9wZXJhdGlvblxuICAgICAgICBvcHMucHVzaChcIk1cIi5jb25jYXQoc3RhcnQgKyBtYXJnaW4sIFwiIFwiKS5jb25jYXQoeSArIG1hcmdpbiwgXCJoXCIpLmNvbmNhdCh4IC0gc3RhcnQsIFwidjFIXCIpLmNvbmNhdChzdGFydCArIG1hcmdpbiwgXCJ6XCIpKTtcbiAgICAgICAgc3RhcnQgPSBudWxsO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIGVuZCBvZiByb3csIGNsZWFuIHVwIG9yIHNraXBcblxuXG4gICAgICBpZiAoeCA9PT0gcm93Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKCFjZWxsKSB7XG4gICAgICAgICAgLy8gV2Ugd291bGQgaGF2ZSBjbG9zZWQgdGhlIG9wIGFib3ZlIGFscmVhZHkgc28gdGhpcyBjYW4gb25seSBtZWFuXG4gICAgICAgICAgLy8gMisgbGlnaHQgbW9kdWxlcyBpbiBhIHJvdy5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnQgPT09IG51bGwpIHtcbiAgICAgICAgICAvLyBKdXN0IGEgc2luZ2xlIGRhcmsgbW9kdWxlLlxuICAgICAgICAgIG9wcy5wdXNoKFwiTVwiLmNvbmNhdCh4ICsgbWFyZ2luLCBcIixcIikuY29uY2F0KHkgKyBtYXJnaW4sIFwiIGgxdjFIXCIpLmNvbmNhdCh4ICsgbWFyZ2luLCBcInpcIikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBmaW5pc2ggdGhlIGN1cnJlbnQgbGluZS5cbiAgICAgICAgICBvcHMucHVzaChcIk1cIi5jb25jYXQoc3RhcnQgKyBtYXJnaW4sIFwiLFwiKS5jb25jYXQoeSArIG1hcmdpbiwgXCIgaFwiKS5jb25jYXQoeCArIDEgLSBzdGFydCwgXCJ2MUhcIikuY29uY2F0KHN0YXJ0ICsgbWFyZ2luLCBcInpcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2VsbCAmJiBzdGFydCA9PT0gbnVsbCkge1xuICAgICAgICBzdGFydCA9IHg7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb3BzLmpvaW4oJycpO1xufSAvLyBXZSBjb3VsZCBqdXN0IGRvIHRoaXMgaW4gZ2VuZXJhdGVQYXRoLCBleGNlcHQgdGhhdCB3ZSB3YW50IHRvIHN1cHBvcnRcbi8vIG5vbi1QYXRoMkQgY2FudmFzLCBzbyB3ZSBuZWVkIHRvIGtlZXAgaXQgYW4gZXhwbGljaXQgc3RlcC5cblxuXG5mdW5jdGlvbiBleGNhdmF0ZU1vZHVsZXMobW9kdWxlcywgZXhjYXZhdGlvbikge1xuICByZXR1cm4gbW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbiAocm93LCB5KSB7XG4gICAgaWYgKHkgPCBleGNhdmF0aW9uLnkgfHwgeSA+PSBleGNhdmF0aW9uLnkgKyBleGNhdmF0aW9uLmgpIHtcbiAgICAgIHJldHVybiByb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvdy5tYXAoZnVuY3Rpb24gKGNlbGwsIHgpIHtcbiAgICAgIGlmICh4IDwgZXhjYXZhdGlvbi54IHx8IHggPj0gZXhjYXZhdGlvbi54ICsgZXhjYXZhdGlvbi53KSB7XG4gICAgICAgIHJldHVybiBjZWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRJbWFnZVNldHRpbmdzKHByb3BzLCBjZWxscykge1xuICB2YXIgaW1hZ2VTZXR0aW5ncyA9IHByb3BzLmltYWdlU2V0dGluZ3MsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIGluY2x1ZGVNYXJnaW4gPSBwcm9wcy5pbmNsdWRlTWFyZ2luO1xuXG4gIGlmIChpbWFnZVNldHRpbmdzID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXJnaW4gPSBpbmNsdWRlTWFyZ2luID8gTUFSR0lOX1NJWkUgOiAwO1xuICB2YXIgbnVtQ2VsbHMgPSBjZWxscy5sZW5ndGggKyBtYXJnaW4gKiAyO1xuICB2YXIgZGVmYXVsdFNpemUgPSBNYXRoLmZsb29yKHNpemUgKiBERUZBVUxUX0lNR19TQ0FMRSk7XG4gIHZhciBzY2FsZSA9IG51bUNlbGxzIC8gc2l6ZTtcbiAgdmFyIHcgPSAoaW1hZ2VTZXR0aW5ncy53aWR0aCB8fCBkZWZhdWx0U2l6ZSkgKiBzY2FsZTtcbiAgdmFyIGggPSAoaW1hZ2VTZXR0aW5ncy5oZWlnaHQgfHwgZGVmYXVsdFNpemUpICogc2NhbGU7XG4gIHZhciB4ID0gaW1hZ2VTZXR0aW5ncy54ID09IG51bGwgPyBjZWxscy5sZW5ndGggLyAyIC0gdyAvIDIgOiBpbWFnZVNldHRpbmdzLnggKiBzY2FsZTtcbiAgdmFyIHkgPSBpbWFnZVNldHRpbmdzLnkgPT0gbnVsbCA/IGNlbGxzLmxlbmd0aCAvIDIgLSBoIC8gMiA6IGltYWdlU2V0dGluZ3MueSAqIHNjYWxlO1xuICB2YXIgZXhjYXZhdGlvbiA9IG51bGw7XG5cbiAgaWYgKGltYWdlU2V0dGluZ3MuZXhjYXZhdGUpIHtcbiAgICB2YXIgZmxvb3JYID0gTWF0aC5mbG9vcih4KTtcbiAgICB2YXIgZmxvb3JZID0gTWF0aC5mbG9vcih5KTtcbiAgICB2YXIgY2VpbFcgPSBNYXRoLmNlaWwodyArIHggLSBmbG9vclgpO1xuICAgIHZhciBjZWlsSCA9IE1hdGguY2VpbChoICsgeSAtIGZsb29yWSk7XG4gICAgZXhjYXZhdGlvbiA9IHtcbiAgICAgIHg6IGZsb29yWCxcbiAgICAgIHk6IGZsb29yWSxcbiAgICAgIHc6IGNlaWxXLFxuICAgICAgaDogY2VpbEhcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiB4LFxuICAgIHk6IHksXG4gICAgaDogaCxcbiAgICB3OiB3LFxuICAgIGV4Y2F2YXRpb246IGV4Y2F2YXRpb25cbiAgfTtcbn0gLy8gRm9yIGNhbnZhcyB3ZSdyZSBnb2luZyB0byBzd2l0Y2ggb3VyIGRyYXdpbmcgbW9kZSBiYXNlZCBvbiB3aGV0aGVyIG9yIG5vdFxuLy8gdGhlIGVudmlyb25tZW50IHN1cHBvcnRzIFBhdGgyRC4gV2Ugb25seSBuZWVkIHRoZSBjb25zdHJ1Y3RvciB0byBiZVxuLy8gc3VwcG9ydGVkLCBidXQgRWRnZSBkb2Vzbid0IGFjdHVhbGx5IHN1cHBvcnQgdGhlIHBhdGggKHN0cmluZykgdHlwZVxuLy8gYXJndW1lbnQuIEx1Y2tpbHkgaXQgYWxzbyBkb2Vzbid0IHN1cHBvcnQgdGhlIGFkZFBhdGgoKSBtZXRob2QuIFdlIGNhblxuLy8gdHJlYXQgdGhhdCBhcyB0aGUgc2FtZSB0aGluZy5cblxuXG52YXIgU1VQUE9SVFNfUEFUSDJEID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIG5ldyBQYXRoMkQoKS5hZGRQYXRoKG5ldyBQYXRoMkQoKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0oKTtcblxudmFyIFFSQ29kZUNhbnZhcyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFFSQ29kZUNhbnZhcywgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFFSQ29kZUNhbnZhcygpIHtcbiAgICB2YXIgX2dldFByb3RvdHlwZU9mMjtcblxuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBRUkNvZGVDYW52YXMpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9nZXRQcm90b3R5cGVPZjIgPSBfZ2V0UHJvdG90eXBlT2YoUVJDb2RlQ2FudmFzKSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2NhbnZhc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9pbWFnZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0YXRlXCIsIHtcbiAgICAgIGltZ0xvYWRlZDogZmFsc2VcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJoYW5kbGVJbWFnZUxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbWdMb2FkZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFFSQ29kZUNhbnZhcywgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5faW1hZ2UgJiYgdGhpcy5faW1hZ2UuY29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVJbWFnZUxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdmFyIF90aGlzJHByb3BzJGltYWdlU2V0dCwgX25leHRQcm9wcyRpbWFnZVNldHRpO1xuXG4gICAgICB2YXIgY3VycmVudFNyYyA9IChfdGhpcyRwcm9wcyRpbWFnZVNldHQgPSB0aGlzLnByb3BzLmltYWdlU2V0dGluZ3MpID09PSBudWxsIHx8IF90aGlzJHByb3BzJGltYWdlU2V0dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkcHJvcHMkaW1hZ2VTZXR0LnNyYztcbiAgICAgIHZhciBuZXh0U3JjID0gKF9uZXh0UHJvcHMkaW1hZ2VTZXR0aSA9IG5leHRQcm9wcy5pbWFnZVNldHRpbmdzKSA9PT0gbnVsbCB8fCBfbmV4dFByb3BzJGltYWdlU2V0dGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9uZXh0UHJvcHMkaW1hZ2VTZXR0aS5zcmM7XG5cbiAgICAgIGlmIChjdXJyZW50U3JjICE9PSBuZXh0U3JjKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGltZ0xvYWRlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzLnZhbHVlLFxuICAgICAgICAgIHNpemUgPSBfdGhpcyRwcm9wcy5zaXplLFxuICAgICAgICAgIGxldmVsID0gX3RoaXMkcHJvcHMubGV2ZWwsXG4gICAgICAgICAgYmdDb2xvciA9IF90aGlzJHByb3BzLmJnQ29sb3IsXG4gICAgICAgICAgZmdDb2xvciA9IF90aGlzJHByb3BzLmZnQ29sb3IsXG4gICAgICAgICAgaW5jbHVkZU1hcmdpbiA9IF90aGlzJHByb3BzLmluY2x1ZGVNYXJnaW4sXG4gICAgICAgICAgaW1hZ2VTZXR0aW5ncyA9IF90aGlzJHByb3BzLmltYWdlU2V0dGluZ3M7IC8vIFdlJ2xsIHVzZSB0eXBlPT09LTEgdG8gZm9yY2UgUVJDb2RlIHRvIGF1dG9tYXRpY2FsbHkgcGljayB0aGUgYmVzdCB0eXBlXG5cbiAgICAgIHZhciBxcmNvZGUgPSBuZXcgUVJDb2RlSW1wbCgtMSwgRXJyb3JDb3JyZWN0TGV2ZWxbbGV2ZWxdKTtcbiAgICAgIHFyY29kZS5hZGREYXRhKGNvbnZlcnRTdHIodmFsdWUpKTtcbiAgICAgIHFyY29kZS5tYWtlKCk7XG5cbiAgICAgIGlmICh0aGlzLl9jYW52YXMgIT0gbnVsbCkge1xuICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5fY2FudmFzO1xuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgaWYgKCFjdHgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2VsbHMgPSBxcmNvZGUubW9kdWxlcztcblxuICAgICAgICBpZiAoY2VsbHMgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWFyZ2luID0gaW5jbHVkZU1hcmdpbiA/IE1BUkdJTl9TSVpFIDogMDtcbiAgICAgICAgdmFyIG51bUNlbGxzID0gY2VsbHMubGVuZ3RoICsgbWFyZ2luICogMjtcbiAgICAgICAgdmFyIGNhbGN1bGF0ZWRJbWFnZVNldHRpbmdzID0gZ2V0SW1hZ2VTZXR0aW5ncyh0aGlzLnByb3BzLCBjZWxscyk7XG5cbiAgICAgICAgaWYgKGltYWdlU2V0dGluZ3MgIT0gbnVsbCAmJiBjYWxjdWxhdGVkSW1hZ2VTZXR0aW5ncyAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKGNhbGN1bGF0ZWRJbWFnZVNldHRpbmdzLmV4Y2F2YXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgY2VsbHMgPSBleGNhdmF0ZU1vZHVsZXMoY2VsbHMsIGNhbGN1bGF0ZWRJbWFnZVNldHRpbmdzLmV4Y2F2YXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBXZSdyZSBnb2luZyB0byBzY2FsZSB0aGlzIHNvIHRoYXQgdGhlIG51bWJlciBvZiBkcmF3YWJsZSB1bml0c1xuICAgICAgICAvLyBtYXRjaGVzIHRoZSBudW1iZXIgb2YgY2VsbHMuIFRoaXMgYXZvaWRzIHJvdW5kaW5nIGlzc3VlcywgYnV0IGRvZXNcbiAgICAgICAgLy8gcmVzdWx0IGluIHNvbWUgcG90ZW50aWFsbHkgdW53YW50ZWQgc2luZ2xlIHBpeGVsIGlzc3VlcyBiZXR3ZWVuXG4gICAgICAgIC8vIGJsb2Nrcywgb25seSBpbiBlbnZpcm9ubWVudHMgdGhhdCBkb24ndCBzdXBwb3J0IFBhdGgyRC5cblxuXG4gICAgICAgIHZhciBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy53aWR0aCA9IHNpemUgKiBwaXhlbFJhdGlvO1xuICAgICAgICB2YXIgc2NhbGUgPSBzaXplIC8gbnVtQ2VsbHMgKiBwaXhlbFJhdGlvO1xuICAgICAgICBjdHguc2NhbGUoc2NhbGUsIHNjYWxlKTsgLy8gRHJhdyBzb2xpZCBiYWNrZ3JvdW5kLCBvbmx5IHBhaW50IGRhcmsgbW9kdWxlcy5cblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYmdDb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIG51bUNlbGxzLCBudW1DZWxscyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBmZ0NvbG9yO1xuXG4gICAgICAgIGlmIChTVVBQT1JUU19QQVRIMkQpIHtcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lOiBQYXRoMkQgYyd0b3IgZG9lc24ndCBzdXBwb3J0IGFyZ3MgeWV0LlxuICAgICAgICAgIGN0eC5maWxsKG5ldyBQYXRoMkQoZ2VuZXJhdGVQYXRoKGNlbGxzLCBtYXJnaW4pKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2VsbHMuZm9yRWFjaChmdW5jdGlvbiAocm93LCByZHgpIHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsLCBjZHgpIHtcbiAgICAgICAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoY2R4ICsgbWFyZ2luLCByZHggKyBtYXJnaW4sIDEsIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmltZ0xvYWRlZCAmJiB0aGlzLl9pbWFnZSAmJiBjYWxjdWxhdGVkSW1hZ2VTZXR0aW5ncyAhPSBudWxsKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLl9pbWFnZSwgY2FsY3VsYXRlZEltYWdlU2V0dGluZ3MueCArIG1hcmdpbiwgY2FsY3VsYXRlZEltYWdlU2V0dGluZ3MueSArIG1hcmdpbiwgY2FsY3VsYXRlZEltYWdlU2V0dGluZ3MudywgY2FsY3VsYXRlZEltYWdlU2V0dGluZ3MuaCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzMi52YWx1ZSxcbiAgICAgICAgICBzaXplID0gX3RoaXMkcHJvcHMyLnNpemUsXG4gICAgICAgICAgbGV2ZWwgPSBfdGhpcyRwcm9wczIubGV2ZWwsXG4gICAgICAgICAgYmdDb2xvciA9IF90aGlzJHByb3BzMi5iZ0NvbG9yLFxuICAgICAgICAgIGZnQ29sb3IgPSBfdGhpcyRwcm9wczIuZmdDb2xvcixcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzMi5zdHlsZSxcbiAgICAgICAgICBpbmNsdWRlTWFyZ2luID0gX3RoaXMkcHJvcHMyLmluY2x1ZGVNYXJnaW4sXG4gICAgICAgICAgaW1hZ2VTZXR0aW5ncyA9IF90aGlzJHByb3BzMi5pbWFnZVNldHRpbmdzLFxuICAgICAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3RoaXMkcHJvcHMyLCBbXCJ2YWx1ZVwiLCBcInNpemVcIiwgXCJsZXZlbFwiLCBcImJnQ29sb3JcIiwgXCJmZ0NvbG9yXCIsIFwic3R5bGVcIiwgXCJpbmNsdWRlTWFyZ2luXCIsIFwiaW1hZ2VTZXR0aW5nc1wiXSk7XG5cbiAgICAgIHZhciBjYW52YXNTdHlsZSA9IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgIHdpZHRoOiBzaXplXG4gICAgICB9LCBzdHlsZSk7XG5cbiAgICAgIHZhciBpbWcgPSBudWxsO1xuICAgICAgdmFyIGltZ1NyYyA9IGltYWdlU2V0dGluZ3MgJiYgaW1hZ2VTZXR0aW5ncy5zcmM7XG5cbiAgICAgIGlmIChpbWFnZVNldHRpbmdzICE9IG51bGwgJiYgaW1nU3JjICE9IG51bGwpIHtcbiAgICAgICAgaW1nID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgICAgc3JjOiBpbWdTcmMsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25Mb2FkOiB0aGlzLmhhbmRsZUltYWdlTG9hZCxcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLl9pbWFnZSA9IF9yZWY7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiwgX2V4dGVuZHMoe1xuICAgICAgICBzdHlsZTogY2FudmFzU3R5bGUsXG4gICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKF9yZWYyKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5fY2FudmFzID0gX3JlZjI7XG4gICAgICAgIH1cbiAgICAgIH0sIG90aGVyUHJvcHMpKSwgaW1nKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUVJDb2RlQ2FudmFzO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KFFSQ29kZUNhbnZhcywgXCJkZWZhdWx0UHJvcHNcIiwgREVGQVVMVF9QUk9QUyk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFFSQ29kZUNhbnZhcy5wcm9wVHlwZXMgPSBQUk9QX1RZUEVTO1xufVxuXG52YXIgUVJDb2RlU1ZHID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKFFSQ29kZVNWRywgX1JlYWN0JFB1cmVDb21wb25lbnQyKTtcblxuICBmdW5jdGlvbiBRUkNvZGVTVkcoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFFSQ29kZVNWRyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFFSQ29kZVNWRykuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUVJDb2RlU1ZHLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wczMudmFsdWUsXG4gICAgICAgICAgc2l6ZSA9IF90aGlzJHByb3BzMy5zaXplLFxuICAgICAgICAgIGxldmVsID0gX3RoaXMkcHJvcHMzLmxldmVsLFxuICAgICAgICAgIGJnQ29sb3IgPSBfdGhpcyRwcm9wczMuYmdDb2xvcixcbiAgICAgICAgICBmZ0NvbG9yID0gX3RoaXMkcHJvcHMzLmZnQ29sb3IsXG4gICAgICAgICAgaW5jbHVkZU1hcmdpbiA9IF90aGlzJHByb3BzMy5pbmNsdWRlTWFyZ2luLFxuICAgICAgICAgIGltYWdlU2V0dGluZ3MgPSBfdGhpcyRwcm9wczMuaW1hZ2VTZXR0aW5ncyxcbiAgICAgICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzMywgW1widmFsdWVcIiwgXCJzaXplXCIsIFwibGV2ZWxcIiwgXCJiZ0NvbG9yXCIsIFwiZmdDb2xvclwiLCBcImluY2x1ZGVNYXJnaW5cIiwgXCJpbWFnZVNldHRpbmdzXCJdKTsgLy8gV2UnbGwgdXNlIHR5cGU9PT0tMSB0byBmb3JjZSBRUkNvZGUgdG8gYXV0b21hdGljYWxseSBwaWNrIHRoZSBiZXN0IHR5cGVcblxuXG4gICAgICB2YXIgcXJjb2RlID0gbmV3IFFSQ29kZUltcGwoLTEsIEVycm9yQ29ycmVjdExldmVsW2xldmVsXSk7XG4gICAgICBxcmNvZGUuYWRkRGF0YShjb252ZXJ0U3RyKHZhbHVlKSk7XG4gICAgICBxcmNvZGUubWFrZSgpO1xuICAgICAgdmFyIGNlbGxzID0gcXJjb2RlLm1vZHVsZXM7XG5cbiAgICAgIGlmIChjZWxscyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIG1hcmdpbiA9IGluY2x1ZGVNYXJnaW4gPyBNQVJHSU5fU0laRSA6IDA7XG4gICAgICB2YXIgbnVtQ2VsbHMgPSBjZWxscy5sZW5ndGggKyBtYXJnaW4gKiAyO1xuICAgICAgdmFyIGNhbGN1bGF0ZWRJbWFnZVNldHRpbmdzID0gZ2V0SW1hZ2VTZXR0aW5ncyh0aGlzLnByb3BzLCBjZWxscyk7XG4gICAgICB2YXIgaW1hZ2UgPSBudWxsO1xuXG4gICAgICBpZiAoaW1hZ2VTZXR0aW5ncyAhPSBudWxsICYmIGNhbGN1bGF0ZWRJbWFnZVNldHRpbmdzICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGNhbGN1bGF0ZWRJbWFnZVNldHRpbmdzLmV4Y2F2YXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgIGNlbGxzID0gZXhjYXZhdGVNb2R1bGVzKGNlbGxzLCBjYWxjdWxhdGVkSW1hZ2VTZXR0aW5ncy5leGNhdmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImltYWdlXCIsIHtcbiAgICAgICAgICB4bGlua0hyZWY6IGltYWdlU2V0dGluZ3Muc3JjLFxuICAgICAgICAgIGhlaWdodDogY2FsY3VsYXRlZEltYWdlU2V0dGluZ3MuaCxcbiAgICAgICAgICB3aWR0aDogY2FsY3VsYXRlZEltYWdlU2V0dGluZ3MudyxcbiAgICAgICAgICB4OiBjYWxjdWxhdGVkSW1hZ2VTZXR0aW5ncy54ICsgbWFyZ2luLFxuICAgICAgICAgIHk6IGNhbGN1bGF0ZWRJbWFnZVNldHRpbmdzLnkgKyBtYXJnaW4sXG4gICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJub25lXCJcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIERyYXdpbmcgc3RyYXRlZ3k6IGluc3RlYWQgb2YgYSByZWN0IHBlciBtb2R1bGUsIHdlJ3JlIGdvaW5nIHRvIGNyZWF0ZSBhXG4gICAgICAvLyBzaW5nbGUgcGF0aCBmb3IgdGhlIGRhcmsgbW9kdWxlcyBhbmQgbGF5ZXIgdGhhdCBvbiB0b3Agb2YgYSBsaWdodCByZWN0LFxuICAgICAgLy8gZm9yIGEgdG90YWwgb2YgMiBET00gbm9kZXMuIFdlIHBheSBhIGJpdCBtb3JlIGluIHN0cmluZyBjb25jYXQgYnV0IHRoYXQnc1xuICAgICAgLy8gd2F5IGZhc3RlciB0aGFuIERPTSBvcHMuXG4gICAgICAvLyBGb3IgbGV2ZWwgMSwgNDQxIG5vZGVzIC0+IDJcbiAgICAgIC8vIEZvciBsZXZlbCA0MCwgMzEzMjkgLT4gMlxuXG5cbiAgICAgIHZhciBmZ1BhdGggPSBnZW5lcmF0ZVBhdGgoY2VsbHMsIG1hcmdpbik7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgICAgIHNoYXBlUmVuZGVyaW5nOiBcImNyaXNwRWRnZXNcIixcbiAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgdmlld0JveDogXCIwIDAgXCIuY29uY2F0KG51bUNlbGxzLCBcIiBcIikuY29uY2F0KG51bUNlbGxzKVxuICAgICAgfSwgb3RoZXJQcm9wcyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICAgICAgZmlsbDogYmdDb2xvcixcbiAgICAgICAgZDogXCJNMCwwIGhcIi5jb25jYXQobnVtQ2VsbHMsIFwidlwiKS5jb25jYXQobnVtQ2VsbHMsIFwiSDB6XCIpXG4gICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAgICBmaWxsOiBmZ0NvbG9yLFxuICAgICAgICBkOiBmZ1BhdGhcbiAgICAgIH0pLCBpbWFnZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFFSQ29kZVNWRztcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShRUkNvZGVTVkcsIFwiZGVmYXVsdFByb3BzXCIsIERFRkFVTFRfUFJPUFMpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBRUkNvZGVTVkcucHJvcFR5cGVzID0gUFJPUF9UWVBFUztcbn1cblxudmFyIFFSQ29kZSA9IGZ1bmN0aW9uIFFSQ29kZShwcm9wcykge1xuICB2YXIgcmVuZGVyQXMgPSBwcm9wcy5yZW5kZXJBcyxcbiAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcInJlbmRlckFzXCJdKTtcblxuICB2YXIgQ29tcG9uZW50ID0gcmVuZGVyQXMgPT09ICdzdmcnID8gUVJDb2RlU1ZHIDogUVJDb2RlQ2FudmFzO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIG90aGVyUHJvcHMpO1xufTtcblxuUVJDb2RlLmRlZmF1bHRQcm9wcyA9IF9vYmplY3RTcHJlYWQoe1xuICByZW5kZXJBczogJ2NhbnZhcydcbn0sIERFRkFVTFRfUFJPUFMpO1xubW9kdWxlLmV4cG9ydHMgPSBRUkNvZGU7Il0sInNvdXJjZVJvb3QiOiIifQ==
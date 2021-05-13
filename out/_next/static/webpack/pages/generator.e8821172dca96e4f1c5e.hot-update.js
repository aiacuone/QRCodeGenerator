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

var _jsxFileName = "C:\\Users\\Adrian\\OneDrive\\Web Projects\\qr-code-generator\\components\\Code.js";

 // import QRCode from 'qrcode.react'

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(QRCode, {
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
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/qr.js/lib/8BitByte.js":
false,

/***/ "./node_modules/qr.js/lib/BitBuffer.js":
false,

/***/ "./node_modules/qr.js/lib/ErrorCorrectLevel.js":
false,

/***/ "./node_modules/qr.js/lib/Polynomial.js":
false,

/***/ "./node_modules/qr.js/lib/QRCode.js":
false,

/***/ "./node_modules/qr.js/lib/RSBlock.js":
false,

/***/ "./node_modules/qr.js/lib/math.js":
false,

/***/ "./node_modules/qr.js/lib/mode.js":
false,

/***/ "./node_modules/qr.js/lib/util.js":
false,

/***/ "./node_modules/qrcode.react/lib/index.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlLmpzIl0sIm5hbWVzIjpbIkNvZGUiLCJpbmZvIiwidGV4dCIsImZpcnN0TmFtZSIsInRpbWVTdGFtcERhdGUiLCJ0aW1lU3RhbXBUaW1lIiwibGFzdE5hbWUiLCJkb2IiLCJlbWFpbCIsIm51bWJlciIsImhhbmRsZURvd25sb2FkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBuZ1VybCIsInRvRGF0YVVSTCIsInJlcGxhY2UiLCJkb3dubG9hZExpbmsiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsImRhdGVPYmoiLCJEYXRlIiwidGltZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJzdHlsZXMiLCJjb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBRWUsU0FBU0EsSUFBVCxPQUF3QjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUN0QyxNQUFJQyxJQUFJLG1CQUFZRCxJQUFJLENBQUNFLFNBQWpCLDBEQUNpQ0MsYUFBYSxFQUQ5QyxzREFDNEZDLGFBQWEsRUFEekcscUVBRUFKLElBQUksQ0FBQ0UsU0FGTCxjQUVrQkYsSUFBSSxDQUFDSyxRQUZ2QixnQ0FHU0wsSUFBSSxDQUFDTSxHQUhkLHdCQUlDTixJQUFJLENBQUNPLEtBSk4seUJBS0VQLElBQUksQ0FBQ1EsTUFMUCxtT0FBUjs7QUFRQSxXQUFTQyxjQUFULEdBQTBCO0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWY7QUFDQSxRQUFNQyxNQUFNLEdBQUdILE1BQU0sQ0FDbkJJLFNBRGEsQ0FDSCxXQURHLEVBRWJDLE9BRmEsQ0FFTCxXQUZLLEVBRVEsb0JBRlIsQ0FBZjtBQUdBLFFBQUlDLFlBQVksR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLEdBQXZCLENBQW5CO0FBQ0FELGdCQUFZLENBQUNFLElBQWIsR0FBb0JMLE1BQXBCO0FBQ0FHLGdCQUFZLENBQUNHLFFBQWIsR0FBd0IsVUFBeEI7QUFDQVIsWUFBUSxDQUFDUyxJQUFULENBQWNDLFdBQWQsQ0FBMEJMLFlBQTFCO0FBQ0FBLGdCQUFZLENBQUNNLEtBQWI7QUFDQVgsWUFBUSxDQUFDUyxJQUFULENBQWNHLFdBQWQsQ0FBMEJQLFlBQTFCO0FBQ0E7O0FBRUQsV0FBU2IsYUFBVCxHQUF5QjtBQUN4QixRQUFJcUIsT0FBTyxHQUFHLElBQUlDLElBQUosQ0FBU3pCLElBQUksQ0FBQzBCLElBQWQsQ0FBZDtBQUVBLFFBQUlDLEdBQUcsR0FBR0gsT0FBTyxDQUFDSSxPQUFSLEVBQVY7QUFDQSxRQUFJQyxLQUFLLEdBQUdMLE9BQU8sQ0FBQ00sUUFBUixLQUFxQixDQUFqQztBQUNBLFFBQUlDLElBQUksR0FBR1AsT0FBTyxDQUFDUSxXQUFSLEVBQVg7QUFFQSxxQkFBVUwsR0FBVixjQUFpQkUsS0FBakIsY0FBMEJFLElBQTFCO0FBQ0E7O0FBRUQsV0FBUzNCLGFBQVQsR0FBeUI7QUFDeEIsUUFBSW9CLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVN6QixJQUFJLENBQUMwQixJQUFkLENBQWQ7QUFFQSxRQUFJTyxLQUFLLEdBQUdULE9BQU8sQ0FBQ1UsUUFBUixFQUFaO0FBQ0EsUUFBSUMsT0FBTyxHQUFHWCxPQUFPLENBQUNZLFVBQVIsRUFBZDtBQUNBLFFBQUlDLE9BQU8sR0FBR2IsT0FBTyxDQUFDYyxVQUFSLEVBQWQ7QUFFQSxxQkFBVUwsS0FBVixjQUFtQkUsT0FBbkIsY0FBOEJFLE9BQTlCO0FBQ0E7O0FBRUQsc0JBQ0M7QUFBSyxhQUFTLEVBQUVFLG9FQUFNLENBQUNDLElBQXZCO0FBQUEsNEJBQ0MscUVBQUMsTUFBRDtBQUFRLFdBQUssRUFBRXZDLElBQWY7QUFBcUIsUUFBRSxFQUFDLE1BQXhCO0FBQStCLFVBQUksRUFBRTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFRLGVBQVMsRUFBRXNDLG9FQUFNLENBQUNwQixRQUExQjtBQUFvQyxhQUFPLEVBQUVWLGNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFRQTtLQWxEdUJWLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2VuZXJhdG9yLmU4ODIxMTcyZGNhOTZlNGYxYzVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0dlbmVyYXRvci5tb2R1bGUuc2NzcydcclxuLy8gaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGUucmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlKHsgaW5mbyB9KSB7XHJcblx0bGV0IHRleHQgPSBgSGVsbG8gJHtpbmZvLmZpcnN0TmFtZX0sIFxyXG5cdFRoZSBkYXRlIHlvdSBnZW5lcmF0ZWQgdGhlIFFSIENvZGUgd2FzICR7dGltZVN0YW1wRGF0ZSgpfSwgdGhlIHRpbWUgeW91IGdlbmVyYXRlZCB0aGUgUVIgQ29kZSB3YXMgJHt0aW1lU3RhbXBUaW1lKCl9LiBUaGUgaW5mb3JtYXRpb24geW91IHN1Ym1pdHRlZCBpcyBhcyBmb2xsb3dzOlxyXG5cdE5hbWU6ICR7aW5mby5maXJzdE5hbWV9ICR7aW5mby5sYXN0TmFtZX1cclxuXHREYXRlIG9mIEJpcnRoOiAke2luZm8uZG9ifVxyXG5cdEVtYWlsOiAke2luZm8uZW1haWx9XHJcblx0TnVtYmVyOiAke2luZm8ubnVtYmVyfVxyXG5UaGFuayB5b3UgZm9yIHVzaW5nIG15IFFSIENvZGUgR2VuZXJhdG9yLiBBbGwgbXkgaW5mb3JtYXRpb24gYW5kIHByb2plY3RzIGNhbiBiZSBhY2Nlc3NlZCB2aWEgdGhlIGxpbmtzIGxvY2F0ZWQgd2l0aGluIHRoZSBoZWFkZXIgb2YgdGhlIGFwcGxpY2F0aW9uLiBJbSB2ZXJ5IGdyZWF0ZnVsIGZvciB0aGUgb3Bwb3J0dW5pdHkgYW5kIGxvb2sgZm9yd2FyZCB0byB5b3VyIHJlc3BvbnNlYFxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVEb3dubG9hZCgpIHtcclxuXHRcdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2RlJylcclxuXHRcdGNvbnN0IHBuZ1VybCA9IGNhbnZhc1xyXG5cdFx0XHQudG9EYXRhVVJMKCdpbWFnZS9wbmcnKVxyXG5cdFx0XHQucmVwbGFjZSgnaW1hZ2UvcG5nJywgJ2ltYWdlL29jdGV0LXN0cmVhbScpXHJcblx0XHRsZXQgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcblx0XHRkb3dubG9hZExpbmsuaHJlZiA9IHBuZ1VybFxyXG5cdFx0ZG93bmxvYWRMaW5rLmRvd25sb2FkID0gJ2NvZGUucG5nJ1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspXHJcblx0XHRkb3dubG9hZExpbmsuY2xpY2soKVxyXG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb3dubG9hZExpbmspXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB0aW1lU3RhbXBEYXRlKCkge1xyXG5cdFx0bGV0IGRhdGVPYmogPSBuZXcgRGF0ZShpbmZvLnRpbWUpXHJcblxyXG5cdFx0bGV0IGRheSA9IGRhdGVPYmouZ2V0RGF0ZSgpXHJcblx0XHRsZXQgbW9udGggPSBkYXRlT2JqLmdldE1vbnRoKCkgKyAxXHJcblx0XHRsZXQgeWVhciA9IGRhdGVPYmouZ2V0RnVsbFllYXIoKVxyXG5cclxuXHRcdHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB0aW1lU3RhbXBUaW1lKCkge1xyXG5cdFx0bGV0IGRhdGVPYmogPSBuZXcgRGF0ZShpbmZvLnRpbWUpXHJcblxyXG5cdFx0bGV0IGhvdXJzID0gZGF0ZU9iai5nZXRIb3VycygpXHJcblx0XHRsZXQgbWludXRlcyA9IGRhdGVPYmouZ2V0TWludXRlcygpXHJcblx0XHRsZXQgc2Vjb25kcyA9IGRhdGVPYmouZ2V0U2Vjb25kcygpXHJcblxyXG5cdFx0cmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfT5cclxuXHRcdFx0PFFSQ29kZSB2YWx1ZT17dGV4dH0gaWQ9XCJjb2RlXCIgc2l6ZT17MjgwfSAvPlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmRvd25sb2FkfSBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH0+XHJcblx0XHRcdFx0RG93bmxvYWRcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
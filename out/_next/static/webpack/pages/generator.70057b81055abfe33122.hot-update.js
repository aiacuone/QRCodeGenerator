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
 // var QRCode = require('qrcode.react')

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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_Generator_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.download,
      onClick: handleDownload,
      children: "Download"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlLmpzIl0sIm5hbWVzIjpbIkNvZGUiLCJpbmZvIiwidGV4dCIsImZpcnN0TmFtZSIsInRpbWVTdGFtcERhdGUiLCJ0aW1lU3RhbXBUaW1lIiwibGFzdE5hbWUiLCJkb2IiLCJlbWFpbCIsIm51bWJlciIsImhhbmRsZURvd25sb2FkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBuZ1VybCIsInRvRGF0YVVSTCIsInJlcGxhY2UiLCJkb3dubG9hZExpbmsiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsImRhdGVPYmoiLCJEYXRlIiwidGltZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJzdHlsZXMiLCJjb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztDQUVBOztBQUVlLFNBQVNBLElBQVQsT0FBd0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDdEMsTUFBSUMsSUFBSSxtQkFBWUQsSUFBSSxDQUFDRSxTQUFqQiwwREFDaUNDLGFBQWEsRUFEOUMsc0RBQzRGQyxhQUFhLEVBRHpHLHFFQUVBSixJQUFJLENBQUNFLFNBRkwsY0FFa0JGLElBQUksQ0FBQ0ssUUFGdkIsZ0NBR1NMLElBQUksQ0FBQ00sR0FIZCx3QkFJQ04sSUFBSSxDQUFDTyxLQUpOLHlCQUtFUCxJQUFJLENBQUNRLE1BTFAsbU9BQVI7O0FBUUEsV0FBU0MsY0FBVCxHQUEwQjtBQUN6QixRQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFmO0FBQ0EsUUFBTUMsTUFBTSxHQUFHSCxNQUFNLENBQ25CSSxTQURhLENBQ0gsV0FERyxFQUViQyxPQUZhLENBRUwsV0FGSyxFQUVRLG9CQUZSLENBQWY7QUFHQSxRQUFJQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixHQUF2QixDQUFuQjtBQUNBRCxnQkFBWSxDQUFDRSxJQUFiLEdBQW9CTCxNQUFwQjtBQUNBRyxnQkFBWSxDQUFDRyxRQUFiLEdBQXdCLFVBQXhCO0FBQ0FSLFlBQVEsQ0FBQ1MsSUFBVCxDQUFjQyxXQUFkLENBQTBCTCxZQUExQjtBQUNBQSxnQkFBWSxDQUFDTSxLQUFiO0FBQ0FYLFlBQVEsQ0FBQ1MsSUFBVCxDQUFjRyxXQUFkLENBQTBCUCxZQUExQjtBQUNBOztBQUVELFdBQVNiLGFBQVQsR0FBeUI7QUFDeEIsUUFBSXFCLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVN6QixJQUFJLENBQUMwQixJQUFkLENBQWQ7QUFFQSxRQUFJQyxHQUFHLEdBQUdILE9BQU8sQ0FBQ0ksT0FBUixFQUFWO0FBQ0EsUUFBSUMsS0FBSyxHQUFHTCxPQUFPLENBQUNNLFFBQVIsS0FBcUIsQ0FBakM7QUFDQSxRQUFJQyxJQUFJLEdBQUdQLE9BQU8sQ0FBQ1EsV0FBUixFQUFYO0FBRUEscUJBQVVMLEdBQVYsY0FBaUJFLEtBQWpCLGNBQTBCRSxJQUExQjtBQUNBOztBQUVELFdBQVMzQixhQUFULEdBQXlCO0FBQ3hCLFFBQUlvQixPQUFPLEdBQUcsSUFBSUMsSUFBSixDQUFTekIsSUFBSSxDQUFDMEIsSUFBZCxDQUFkO0FBRUEsUUFBSU8sS0FBSyxHQUFHVCxPQUFPLENBQUNVLFFBQVIsRUFBWjtBQUNBLFFBQUlDLE9BQU8sR0FBR1gsT0FBTyxDQUFDWSxVQUFSLEVBQWQ7QUFDQSxRQUFJQyxPQUFPLEdBQUdiLE9BQU8sQ0FBQ2MsVUFBUixFQUFkO0FBRUEscUJBQVVMLEtBQVYsY0FBbUJFLE9BQW5CLGNBQThCRSxPQUE5QjtBQUNBOztBQUVELHNCQUNDO0FBQUssYUFBUyxFQUFFRSxvRUFBTSxDQUFDQyxJQUF2QjtBQUFBLDJCQUVDO0FBQVEsZUFBUyxFQUFFRCxvRUFBTSxDQUFDcEIsUUFBMUI7QUFBb0MsYUFBTyxFQUFFVixjQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVFBO0tBbER1QlYsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZW5lcmF0b3IuNzAwNTdiODEwNTVhYmZlMzMxMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuLy8gdmFyIFFSQ29kZSA9IHJlcXVpcmUoJ3FyY29kZS5yZWFjdCcpXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0dlbmVyYXRvci5tb2R1bGUuc2NzcydcclxuLy8gaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGUucmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlKHsgaW5mbyB9KSB7XHJcblx0bGV0IHRleHQgPSBgSGVsbG8gJHtpbmZvLmZpcnN0TmFtZX0sIFxyXG5cdFRoZSBkYXRlIHlvdSBnZW5lcmF0ZWQgdGhlIFFSIENvZGUgd2FzICR7dGltZVN0YW1wRGF0ZSgpfSwgdGhlIHRpbWUgeW91IGdlbmVyYXRlZCB0aGUgUVIgQ29kZSB3YXMgJHt0aW1lU3RhbXBUaW1lKCl9LiBUaGUgaW5mb3JtYXRpb24geW91IHN1Ym1pdHRlZCBpcyBhcyBmb2xsb3dzOlxyXG5cdE5hbWU6ICR7aW5mby5maXJzdE5hbWV9ICR7aW5mby5sYXN0TmFtZX1cclxuXHREYXRlIG9mIEJpcnRoOiAke2luZm8uZG9ifVxyXG5cdEVtYWlsOiAke2luZm8uZW1haWx9XHJcblx0TnVtYmVyOiAke2luZm8ubnVtYmVyfVxyXG5UaGFuayB5b3UgZm9yIHVzaW5nIG15IFFSIENvZGUgR2VuZXJhdG9yLiBBbGwgbXkgaW5mb3JtYXRpb24gYW5kIHByb2plY3RzIGNhbiBiZSBhY2Nlc3NlZCB2aWEgdGhlIGxpbmtzIGxvY2F0ZWQgd2l0aGluIHRoZSBoZWFkZXIgb2YgdGhlIGFwcGxpY2F0aW9uLiBJbSB2ZXJ5IGdyZWF0ZnVsIGZvciB0aGUgb3Bwb3J0dW5pdHkgYW5kIGxvb2sgZm9yd2FyZCB0byB5b3VyIHJlc3BvbnNlYFxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVEb3dubG9hZCgpIHtcclxuXHRcdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2RlJylcclxuXHRcdGNvbnN0IHBuZ1VybCA9IGNhbnZhc1xyXG5cdFx0XHQudG9EYXRhVVJMKCdpbWFnZS9wbmcnKVxyXG5cdFx0XHQucmVwbGFjZSgnaW1hZ2UvcG5nJywgJ2ltYWdlL29jdGV0LXN0cmVhbScpXHJcblx0XHRsZXQgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcblx0XHRkb3dubG9hZExpbmsuaHJlZiA9IHBuZ1VybFxyXG5cdFx0ZG93bmxvYWRMaW5rLmRvd25sb2FkID0gJ2NvZGUucG5nJ1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspXHJcblx0XHRkb3dubG9hZExpbmsuY2xpY2soKVxyXG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb3dubG9hZExpbmspXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB0aW1lU3RhbXBEYXRlKCkge1xyXG5cdFx0bGV0IGRhdGVPYmogPSBuZXcgRGF0ZShpbmZvLnRpbWUpXHJcblxyXG5cdFx0bGV0IGRheSA9IGRhdGVPYmouZ2V0RGF0ZSgpXHJcblx0XHRsZXQgbW9udGggPSBkYXRlT2JqLmdldE1vbnRoKCkgKyAxXHJcblx0XHRsZXQgeWVhciA9IGRhdGVPYmouZ2V0RnVsbFllYXIoKVxyXG5cclxuXHRcdHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB0aW1lU3RhbXBUaW1lKCkge1xyXG5cdFx0bGV0IGRhdGVPYmogPSBuZXcgRGF0ZShpbmZvLnRpbWUpXHJcblxyXG5cdFx0bGV0IGhvdXJzID0gZGF0ZU9iai5nZXRIb3VycygpXHJcblx0XHRsZXQgbWludXRlcyA9IGRhdGVPYmouZ2V0TWludXRlcygpXHJcblx0XHRsZXQgc2Vjb25kcyA9IGRhdGVPYmouZ2V0U2Vjb25kcygpXHJcblxyXG5cdFx0cmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfT5cclxuXHRcdFx0ey8qIDxRUkNvZGUgdmFsdWU9e3RleHR9IGlkPVwiY29kZVwiIHNpemU9ezI4MH0gLz4gKi99XHJcblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZG93bmxvYWR9IG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfT5cclxuXHRcdFx0XHREb3dubG9hZFxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
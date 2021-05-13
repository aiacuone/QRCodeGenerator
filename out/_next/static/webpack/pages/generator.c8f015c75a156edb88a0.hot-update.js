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


var QRCode = __webpack_require__(/*! qrcode.react */ "./node_modules/qrcode.react/lib/index.js");

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
      lineNumber: 50,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_Generator_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.download,
      onClick: handleDownload,
      children: "Download"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlLmpzIl0sIm5hbWVzIjpbIlFSQ29kZSIsInJlcXVpcmUiLCJDb2RlIiwiaW5mbyIsInRleHQiLCJmaXJzdE5hbWUiLCJ0aW1lU3RhbXBEYXRlIiwidGltZVN0YW1wVGltZSIsImxhc3ROYW1lIiwiZG9iIiwiZW1haWwiLCJudW1iZXIiLCJoYW5kbGVEb3dubG9hZCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwbmdVcmwiLCJ0b0RhdGFVUkwiLCJyZXBsYWNlIiwiZG93bmxvYWRMaW5rIiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJkYXRlT2JqIiwiRGF0ZSIsInRpbWUiLCJkYXkiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInNlY29uZHMiLCJnZXRTZWNvbmRzIiwic3R5bGVzIiwiY29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFJQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsOERBQUQsQ0FBcEI7O0NBRUE7O0FBRWUsU0FBU0MsSUFBVCxPQUF3QjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUN0QyxNQUFJQyxJQUFJLG1CQUFZRCxJQUFJLENBQUNFLFNBQWpCLDBEQUNpQ0MsYUFBYSxFQUQ5QyxzREFDNEZDLGFBQWEsRUFEekcscUVBRUFKLElBQUksQ0FBQ0UsU0FGTCxjQUVrQkYsSUFBSSxDQUFDSyxRQUZ2QixnQ0FHU0wsSUFBSSxDQUFDTSxHQUhkLHdCQUlDTixJQUFJLENBQUNPLEtBSk4seUJBS0VQLElBQUksQ0FBQ1EsTUFMUCxtT0FBUjs7QUFRQSxXQUFTQyxjQUFULEdBQTBCO0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWY7QUFDQSxRQUFNQyxNQUFNLEdBQUdILE1BQU0sQ0FDbkJJLFNBRGEsQ0FDSCxXQURHLEVBRWJDLE9BRmEsQ0FFTCxXQUZLLEVBRVEsb0JBRlIsQ0FBZjtBQUdBLFFBQUlDLFlBQVksR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLEdBQXZCLENBQW5CO0FBQ0FELGdCQUFZLENBQUNFLElBQWIsR0FBb0JMLE1BQXBCO0FBQ0FHLGdCQUFZLENBQUNHLFFBQWIsR0FBd0IsVUFBeEI7QUFDQVIsWUFBUSxDQUFDUyxJQUFULENBQWNDLFdBQWQsQ0FBMEJMLFlBQTFCO0FBQ0FBLGdCQUFZLENBQUNNLEtBQWI7QUFDQVgsWUFBUSxDQUFDUyxJQUFULENBQWNHLFdBQWQsQ0FBMEJQLFlBQTFCO0FBQ0E7O0FBRUQsV0FBU2IsYUFBVCxHQUF5QjtBQUN4QixRQUFJcUIsT0FBTyxHQUFHLElBQUlDLElBQUosQ0FBU3pCLElBQUksQ0FBQzBCLElBQWQsQ0FBZDtBQUVBLFFBQUlDLEdBQUcsR0FBR0gsT0FBTyxDQUFDSSxPQUFSLEVBQVY7QUFDQSxRQUFJQyxLQUFLLEdBQUdMLE9BQU8sQ0FBQ00sUUFBUixLQUFxQixDQUFqQztBQUNBLFFBQUlDLElBQUksR0FBR1AsT0FBTyxDQUFDUSxXQUFSLEVBQVg7QUFFQSxxQkFBVUwsR0FBVixjQUFpQkUsS0FBakIsY0FBMEJFLElBQTFCO0FBQ0E7O0FBRUQsV0FBUzNCLGFBQVQsR0FBeUI7QUFDeEIsUUFBSW9CLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVN6QixJQUFJLENBQUMwQixJQUFkLENBQWQ7QUFFQSxRQUFJTyxLQUFLLEdBQUdULE9BQU8sQ0FBQ1UsUUFBUixFQUFaO0FBQ0EsUUFBSUMsT0FBTyxHQUFHWCxPQUFPLENBQUNZLFVBQVIsRUFBZDtBQUNBLFFBQUlDLE9BQU8sR0FBR2IsT0FBTyxDQUFDYyxVQUFSLEVBQWQ7QUFFQSxxQkFBVUwsS0FBVixjQUFtQkUsT0FBbkIsY0FBOEJFLE9BQTlCO0FBQ0E7O0FBRUQsc0JBQ0M7QUFBSyxhQUFTLEVBQUVFLG9FQUFNLENBQUNDLElBQXZCO0FBQUEsNEJBQ0MscUVBQUMsTUFBRDtBQUFRLFdBQUssRUFBRXZDLElBQWY7QUFBcUIsUUFBRSxFQUFDLE1BQXhCO0FBQStCLFVBQUksRUFBRTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFRLGVBQVMsRUFBRXNDLG9FQUFNLENBQUNwQixRQUExQjtBQUFvQyxhQUFPLEVBQUVWLGNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFRQTtLQWxEdUJWLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2VuZXJhdG9yLmM4ZjAxNWM3NWExNTZlZGI4OGEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbnZhciBRUkNvZGUgPSByZXF1aXJlKCdxcmNvZGUucmVhY3QnKVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9HZW5lcmF0b3IubW9kdWxlLnNjc3MnXHJcbi8vIGltcG9ydCBRUkNvZGUgZnJvbSAncXJjb2RlLnJlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZSh7IGluZm8gfSkge1xyXG5cdGxldCB0ZXh0ID0gYEhlbGxvICR7aW5mby5maXJzdE5hbWV9LCBcclxuXHRUaGUgZGF0ZSB5b3UgZ2VuZXJhdGVkIHRoZSBRUiBDb2RlIHdhcyAke3RpbWVTdGFtcERhdGUoKX0sIHRoZSB0aW1lIHlvdSBnZW5lcmF0ZWQgdGhlIFFSIENvZGUgd2FzICR7dGltZVN0YW1wVGltZSgpfS4gVGhlIGluZm9ybWF0aW9uIHlvdSBzdWJtaXR0ZWQgaXMgYXMgZm9sbG93czpcclxuXHROYW1lOiAke2luZm8uZmlyc3ROYW1lfSAke2luZm8ubGFzdE5hbWV9XHJcblx0RGF0ZSBvZiBCaXJ0aDogJHtpbmZvLmRvYn1cclxuXHRFbWFpbDogJHtpbmZvLmVtYWlsfVxyXG5cdE51bWJlcjogJHtpbmZvLm51bWJlcn1cclxuVGhhbmsgeW91IGZvciB1c2luZyBteSBRUiBDb2RlIEdlbmVyYXRvci4gQWxsIG15IGluZm9ybWF0aW9uIGFuZCBwcm9qZWN0cyBjYW4gYmUgYWNjZXNzZWQgdmlhIHRoZSBsaW5rcyBsb2NhdGVkIHdpdGhpbiB0aGUgaGVhZGVyIG9mIHRoZSBhcHBsaWNhdGlvbi4gSW0gdmVyeSBncmVhdGZ1bCBmb3IgdGhlIG9wcG9ydHVuaXR5IGFuZCBsb29rIGZvcndhcmQgdG8geW91ciByZXNwb25zZWBcclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlRG93bmxvYWQoKSB7XHJcblx0XHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29kZScpXHJcblx0XHRjb25zdCBwbmdVcmwgPSBjYW52YXNcclxuXHRcdFx0LnRvRGF0YVVSTCgnaW1hZ2UvcG5nJylcclxuXHRcdFx0LnJlcGxhY2UoJ2ltYWdlL3BuZycsICdpbWFnZS9vY3RldC1zdHJlYW0nKVxyXG5cdFx0bGV0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG5cdFx0ZG93bmxvYWRMaW5rLmhyZWYgPSBwbmdVcmxcclxuXHRcdGRvd25sb2FkTGluay5kb3dubG9hZCA9ICdjb2RlLnBuZydcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG93bmxvYWRMaW5rKVxyXG5cdFx0ZG93bmxvYWRMaW5rLmNsaWNrKClcclxuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG93bmxvYWRMaW5rKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdGltZVN0YW1wRGF0ZSgpIHtcclxuXHRcdGxldCBkYXRlT2JqID0gbmV3IERhdGUoaW5mby50aW1lKVxyXG5cclxuXHRcdGxldCBkYXkgPSBkYXRlT2JqLmdldERhdGUoKVxyXG5cdFx0bGV0IG1vbnRoID0gZGF0ZU9iai5nZXRNb250aCgpICsgMVxyXG5cdFx0bGV0IHllYXIgPSBkYXRlT2JqLmdldEZ1bGxZZWFyKClcclxuXHJcblx0XHRyZXR1cm4gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdGltZVN0YW1wVGltZSgpIHtcclxuXHRcdGxldCBkYXRlT2JqID0gbmV3IERhdGUoaW5mby50aW1lKVxyXG5cclxuXHRcdGxldCBob3VycyA9IGRhdGVPYmouZ2V0SG91cnMoKVxyXG5cdFx0bGV0IG1pbnV0ZXMgPSBkYXRlT2JqLmdldE1pbnV0ZXMoKVxyXG5cdFx0bGV0IHNlY29uZHMgPSBkYXRlT2JqLmdldFNlY29uZHMoKVxyXG5cclxuXHRcdHJldHVybiBgJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9YFxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29kZX0+XHJcblx0XHRcdDxRUkNvZGUgdmFsdWU9e3RleHR9IGlkPVwiY29kZVwiIHNpemU9ezI4MH0gLz5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5kb3dubG9hZH0gb25DbGljaz17aGFuZGxlRG93bmxvYWR9PlxyXG5cdFx0XHRcdERvd25sb2FkXHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
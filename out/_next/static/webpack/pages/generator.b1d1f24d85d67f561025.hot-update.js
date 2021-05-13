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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlLmpzIl0sIm5hbWVzIjpbIlFSQ29kZSIsInJlcXVpcmUiLCJDb2RlIiwiaW5mbyIsInRleHQiLCJmaXJzdE5hbWUiLCJ0aW1lU3RhbXBEYXRlIiwidGltZVN0YW1wVGltZSIsImxhc3ROYW1lIiwiZG9iIiwiZW1haWwiLCJudW1iZXIiLCJoYW5kbGVEb3dubG9hZCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwbmdVcmwiLCJ0b0RhdGFVUkwiLCJyZXBsYWNlIiwiZG93bmxvYWRMaW5rIiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJkYXRlT2JqIiwiRGF0ZSIsInRpbWUiLCJkYXkiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInNlY29uZHMiLCJnZXRTZWNvbmRzIiwic3R5bGVzIiwiY29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFJQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsOERBQUQsQ0FBcEI7O0NBRUE7O0FBRWUsU0FBU0MsSUFBVCxPQUF3QjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUN0QyxNQUFJQyxJQUFJLG1CQUFZRCxJQUFJLENBQUNFLFNBQWpCLDBEQUNpQ0MsYUFBYSxFQUQ5QyxzREFDNEZDLGFBQWEsRUFEekcscUVBRUFKLElBQUksQ0FBQ0UsU0FGTCxjQUVrQkYsSUFBSSxDQUFDSyxRQUZ2QixnQ0FHU0wsSUFBSSxDQUFDTSxHQUhkLHdCQUlDTixJQUFJLENBQUNPLEtBSk4seUJBS0VQLElBQUksQ0FBQ1EsTUFMUCxtT0FBUjs7QUFRQSxXQUFTQyxjQUFULEdBQTBCO0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWY7QUFDQSxRQUFNQyxNQUFNLEdBQUdILE1BQU0sQ0FDbkJJLFNBRGEsQ0FDSCxXQURHLEVBRWJDLE9BRmEsQ0FFTCxXQUZLLEVBRVEsb0JBRlIsQ0FBZjtBQUdBLFFBQUlDLFlBQVksR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLEdBQXZCLENBQW5CO0FBQ0FELGdCQUFZLENBQUNFLElBQWIsR0FBb0JMLE1BQXBCO0FBQ0FHLGdCQUFZLENBQUNHLFFBQWIsR0FBd0IsVUFBeEI7QUFDQVIsWUFBUSxDQUFDUyxJQUFULENBQWNDLFdBQWQsQ0FBMEJMLFlBQTFCO0FBQ0FBLGdCQUFZLENBQUNNLEtBQWI7QUFDQVgsWUFBUSxDQUFDUyxJQUFULENBQWNHLFdBQWQsQ0FBMEJQLFlBQTFCO0FBQ0E7O0FBRUQsV0FBU2IsYUFBVCxHQUF5QjtBQUN4QixRQUFJcUIsT0FBTyxHQUFHLElBQUlDLElBQUosQ0FBU3pCLElBQUksQ0FBQzBCLElBQWQsQ0FBZDtBQUVBLFFBQUlDLEdBQUcsR0FBR0gsT0FBTyxDQUFDSSxPQUFSLEVBQVY7QUFDQSxRQUFJQyxLQUFLLEdBQUdMLE9BQU8sQ0FBQ00sUUFBUixLQUFxQixDQUFqQztBQUNBLFFBQUlDLElBQUksR0FBR1AsT0FBTyxDQUFDUSxXQUFSLEVBQVg7QUFFQSxxQkFBVUwsR0FBVixjQUFpQkUsS0FBakIsY0FBMEJFLElBQTFCO0FBQ0E7O0FBRUQsV0FBUzNCLGFBQVQsR0FBeUI7QUFDeEIsUUFBSW9CLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVN6QixJQUFJLENBQUMwQixJQUFkLENBQWQ7QUFFQSxRQUFJTyxLQUFLLEdBQUdULE9BQU8sQ0FBQ1UsUUFBUixFQUFaO0FBQ0EsUUFBSUMsT0FBTyxHQUFHWCxPQUFPLENBQUNZLFVBQVIsRUFBZDtBQUNBLFFBQUlDLE9BQU8sR0FBR2IsT0FBTyxDQUFDYyxVQUFSLEVBQWQ7QUFFQSxxQkFBVUwsS0FBVixjQUFtQkUsT0FBbkIsY0FBOEJFLE9BQTlCO0FBQ0E7O0FBRUQsc0JBQ0M7QUFBSyxhQUFTLEVBQUVFLG9FQUFNLENBQUNDLElBQXZCO0FBQUEsMkJBRUM7QUFBUSxlQUFTLEVBQUVELG9FQUFNLENBQUNwQixRQUExQjtBQUFvQyxhQUFPLEVBQUVWLGNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBUUE7S0FsRHVCVixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dlbmVyYXRvci5iMWQxZjI0ZDg1ZDY3ZjU2MTAyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG52YXIgUVJDb2RlID0gcmVxdWlyZSgncXJjb2RlLnJlYWN0JylcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvR2VuZXJhdG9yLm1vZHVsZS5zY3NzJ1xyXG4vLyBpbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGUoeyBpbmZvIH0pIHtcclxuXHRsZXQgdGV4dCA9IGBIZWxsbyAke2luZm8uZmlyc3ROYW1lfSwgXHJcblx0VGhlIGRhdGUgeW91IGdlbmVyYXRlZCB0aGUgUVIgQ29kZSB3YXMgJHt0aW1lU3RhbXBEYXRlKCl9LCB0aGUgdGltZSB5b3UgZ2VuZXJhdGVkIHRoZSBRUiBDb2RlIHdhcyAke3RpbWVTdGFtcFRpbWUoKX0uIFRoZSBpbmZvcm1hdGlvbiB5b3Ugc3VibWl0dGVkIGlzIGFzIGZvbGxvd3M6XHJcblx0TmFtZTogJHtpbmZvLmZpcnN0TmFtZX0gJHtpbmZvLmxhc3ROYW1lfVxyXG5cdERhdGUgb2YgQmlydGg6ICR7aW5mby5kb2J9XHJcblx0RW1haWw6ICR7aW5mby5lbWFpbH1cclxuXHROdW1iZXI6ICR7aW5mby5udW1iZXJ9XHJcblRoYW5rIHlvdSBmb3IgdXNpbmcgbXkgUVIgQ29kZSBHZW5lcmF0b3IuIEFsbCBteSBpbmZvcm1hdGlvbiBhbmQgcHJvamVjdHMgY2FuIGJlIGFjY2Vzc2VkIHZpYSB0aGUgbGlua3MgbG9jYXRlZCB3aXRoaW4gdGhlIGhlYWRlciBvZiB0aGUgYXBwbGljYXRpb24uIEltIHZlcnkgZ3JlYXRmdWwgZm9yIHRoZSBvcHBvcnR1bml0eSBhbmQgbG9vayBmb3J3YXJkIHRvIHlvdXIgcmVzcG9uc2VgXHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZURvd25sb2FkKCkge1xyXG5cdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvZGUnKVxyXG5cdFx0Y29uc3QgcG5nVXJsID0gY2FudmFzXHJcblx0XHRcdC50b0RhdGFVUkwoJ2ltYWdlL3BuZycpXHJcblx0XHRcdC5yZXBsYWNlKCdpbWFnZS9wbmcnLCAnaW1hZ2Uvb2N0ZXQtc3RyZWFtJylcclxuXHRcdGxldCBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuXHRcdGRvd25sb2FkTGluay5ocmVmID0gcG5nVXJsXHJcblx0XHRkb3dubG9hZExpbmsuZG93bmxvYWQgPSAnY29kZS5wbmcnXHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvd25sb2FkTGluaylcclxuXHRcdGRvd25sb2FkTGluay5jbGljaygpXHJcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvd25sb2FkTGluaylcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHRpbWVTdGFtcERhdGUoKSB7XHJcblx0XHRsZXQgZGF0ZU9iaiA9IG5ldyBEYXRlKGluZm8udGltZSlcclxuXHJcblx0XHRsZXQgZGF5ID0gZGF0ZU9iai5nZXREYXRlKClcclxuXHRcdGxldCBtb250aCA9IGRhdGVPYmouZ2V0TW9udGgoKSArIDFcclxuXHRcdGxldCB5ZWFyID0gZGF0ZU9iai5nZXRGdWxsWWVhcigpXHJcblxyXG5cdFx0cmV0dXJuIGAke2RheX0vJHttb250aH0vJHt5ZWFyfWBcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHRpbWVTdGFtcFRpbWUoKSB7XHJcblx0XHRsZXQgZGF0ZU9iaiA9IG5ldyBEYXRlKGluZm8udGltZSlcclxuXHJcblx0XHRsZXQgaG91cnMgPSBkYXRlT2JqLmdldEhvdXJzKClcclxuXHRcdGxldCBtaW51dGVzID0gZGF0ZU9iai5nZXRNaW51dGVzKClcclxuXHRcdGxldCBzZWNvbmRzID0gZGF0ZU9iai5nZXRTZWNvbmRzKClcclxuXHJcblx0XHRyZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfWBcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9PlxyXG5cdFx0XHR7LyogPFFSQ29kZSB2YWx1ZT17dGV4dH0gaWQ9XCJjb2RlXCIgc2l6ZT17MjgwfSAvPiAqL31cclxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5kb3dubG9hZH0gb25DbGljaz17aGFuZGxlRG93bmxvYWR9PlxyXG5cdFx0XHRcdERvd25sb2FkXHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
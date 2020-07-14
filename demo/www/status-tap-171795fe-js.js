(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-tap-171795fe-js"],{

/***/ "./node_modules/@ionic/core/dist/esm/status-tap-171795fe.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-171795fe.js ***!
  \******************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
/* harmony import */ var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-29df6f59.js */ "./node_modules/@ionic/core/dist/esm/index-29df6f59.js");


var startStatusTap = function startStatusTap() {
  var win = window;
  win.addEventListener('statusTap', function () {
    Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["d"])(function () {
      var width = win.innerWidth;
      var height = win.innerHeight;
      var el = document.elementFromPoint(width / 2, height / 2);

      if (!el) {
        return;
      }

      var contentEl = el.closest('ion-content');

      if (contentEl) {
        contentEl.componentOnReady().then(function () {
          Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
            return contentEl.scrollToTop(300);
          });
        });
      }
    });
  });
};



/***/ })

}]);
//# sourceMappingURL=status-tap-171795fe-js.js.map
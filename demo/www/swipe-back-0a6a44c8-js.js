(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["swipe-back-0a6a44c8-js"],{

/***/ "./node_modules/@ionic/core/dist/esm/swipe-back-0a6a44c8.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-0a6a44c8.js ***!
  \******************************************************************/
/*! exports provided: createSwipeBackGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSwipeBackGesture", function() { return createSwipeBackGesture; });
/* harmony import */ var _helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-5c745fbd.js */ "./node_modules/@ionic/core/dist/esm/helpers-5c745fbd.js");
/* harmony import */ var _gesture_controller_89173521_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gesture-controller-89173521.js */ "./node_modules/@ionic/core/dist/esm/gesture-controller-89173521.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");




var createSwipeBackGesture = function createSwipeBackGesture(el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) {
  var win = el.ownerDocument.defaultView;

  var canStart = function canStart(detail) {
    return detail.startX <= 50 && canStartHandler();
  };

  var onMove = function onMove(detail) {
    // set the transition animation's progress
    var delta = detail.deltaX;
    var stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };

  var onEnd = function onEnd(detail) {
    // the swipe back gesture has ended
    var delta = detail.deltaX;
    var width = win.innerWidth;
    var stepValue = delta / width;
    var velocity = detail.velocityX;
    var z = width / 2.0;
    var shouldComplete = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
    var missing = shouldComplete ? 1 - stepValue : stepValue;
    var missingDistance = missing * width;
    var realDur = 0;

    if (missingDistance > 5) {
      var dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }
    /**
     * TODO: stepValue can sometimes return negative values
     * or values greater than 1 which should not be possible.
     * Need to investigate more to find where the issue is.
     */


    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_0__["c"])(0, stepValue, 0.9999), realDur);
  };

  return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el: el,
    gestureName: 'goback-swipe',
    gesturePriority: 40,
    threshold: 10,
    canStart: canStart,
    onStart: onStartHandler,
    onMove: onMove,
    onEnd: onEnd
  });
};



/***/ })

}]);
//# sourceMappingURL=swipe-back-0a6a44c8-js.js.map